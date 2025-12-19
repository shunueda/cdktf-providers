// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authorization_jwt_cache_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAuthorizationJwtCacheOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authorization_jwt_cache_oper#id DataThunderAamAuthorizationJwtCacheOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authorization_jwt_cache_oper#oper DataThunderAamAuthorizationJwtCacheOper#oper}
  */
  readonly oper?: DataThunderAamAuthorizationJwtCacheOperOper;
}
export interface DataThunderAamAuthorizationJwtCacheOperOperCacheListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authorization_jwt_cache_oper#audience DataThunderAamAuthorizationJwtCacheOper#audience}
  */
  readonly audience?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authorization_jwt_cache_oper#cache_id DataThunderAamAuthorizationJwtCacheOper#cache_id}
  */
  readonly cacheId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authorization_jwt_cache_oper#client_ip DataThunderAamAuthorizationJwtCacheOper#client_ip}
  */
  readonly clientIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authorization_jwt_cache_oper#issuer DataThunderAamAuthorizationJwtCacheOper#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authorization_jwt_cache_oper#subject DataThunderAamAuthorizationJwtCacheOper#subject}
  */
  readonly subject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authorization_jwt_cache_oper#ttl DataThunderAamAuthorizationJwtCacheOper#ttl}
  */
  readonly ttl?: number;
}

export function dataThunderAamAuthorizationJwtCacheOperOperCacheListStructToTerraform(struct?: DataThunderAamAuthorizationJwtCacheOperOperCacheListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    cache_id: cdktf.numberToTerraform(struct!.cacheId),
    client_ip: cdktf.stringToTerraform(struct!.clientIp),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    subject: cdktf.stringToTerraform(struct!.subject),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function dataThunderAamAuthorizationJwtCacheOperOperCacheListStructToHclTerraform(struct?: DataThunderAamAuthorizationJwtCacheOperOperCacheListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_id: {
      value: cdktf.numberToHclTerraform(struct!.cacheId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_ip: {
      value: cdktf.stringToHclTerraform(struct!.clientIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthorizationJwtCacheOperOperCacheListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAamAuthorizationJwtCacheOperOperCacheListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._cacheId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheId = this._cacheId;
    }
    if (this._clientIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthorizationJwtCacheOperOperCacheListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._cacheId = undefined;
      this._clientIp = undefined;
      this._issuer = undefined;
      this._subject = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._cacheId = value.cacheId;
      this._clientIp = value.clientIp;
      this._issuer = value.issuer;
      this._subject = value.subject;
      this._ttl = value.ttl;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // cache_id - computed: false, optional: true, required: false
  private _cacheId?: number; 
  public get cacheId() {
    return this.getNumberAttribute('cache_id');
  }
  public set cacheId(value: number) {
    this._cacheId = value;
  }
  public resetCacheId() {
    this._cacheId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheIdInput() {
    return this._cacheId;
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp?: string; 
  public get clientIp() {
    return this.getStringAttribute('client_ip');
  }
  public set clientIp(value: string) {
    this._clientIp = value;
  }
  public resetClientIp() {
    this._clientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}

export class DataThunderAamAuthorizationJwtCacheOperOperCacheListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAamAuthorizationJwtCacheOperOperCacheListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAamAuthorizationJwtCacheOperOperCacheListStructOutputReference {
    return new DataThunderAamAuthorizationJwtCacheOperOperCacheListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAamAuthorizationJwtCacheOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authorization_jwt_cache_oper#audience DataThunderAamAuthorizationJwtCacheOper#audience}
  */
  readonly audience?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authorization_jwt_cache_oper#max_token_cache DataThunderAamAuthorizationJwtCacheOper#max_token_cache}
  */
  readonly maxTokenCache?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authorization_jwt_cache_oper#token_cache_hit DataThunderAamAuthorizationJwtCacheOper#token_cache_hit}
  */
  readonly tokenCacheHit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authorization_jwt_cache_oper#token_cached DataThunderAamAuthorizationJwtCacheOper#token_cached}
  */
  readonly tokenCached?: number;
  /**
  * cache_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authorization_jwt_cache_oper#cache_list DataThunderAamAuthorizationJwtCacheOper#cache_list}
  */
  readonly cacheList?: DataThunderAamAuthorizationJwtCacheOperOperCacheListStruct[] | cdktf.IResolvable;
}

export function dataThunderAamAuthorizationJwtCacheOperOperToTerraform(struct?: DataThunderAamAuthorizationJwtCacheOperOperOutputReference | DataThunderAamAuthorizationJwtCacheOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    max_token_cache: cdktf.numberToTerraform(struct!.maxTokenCache),
    token_cache_hit: cdktf.numberToTerraform(struct!.tokenCacheHit),
    token_cached: cdktf.numberToTerraform(struct!.tokenCached),
    cache_list: cdktf.listMapper(dataThunderAamAuthorizationJwtCacheOperOperCacheListStructToTerraform, true)(struct!.cacheList),
  }
}


export function dataThunderAamAuthorizationJwtCacheOperOperToHclTerraform(struct?: DataThunderAamAuthorizationJwtCacheOperOperOutputReference | DataThunderAamAuthorizationJwtCacheOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_token_cache: {
      value: cdktf.numberToHclTerraform(struct!.maxTokenCache),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_cache_hit: {
      value: cdktf.numberToHclTerraform(struct!.tokenCacheHit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_cached: {
      value: cdktf.numberToHclTerraform(struct!.tokenCached),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_list: {
      value: cdktf.listMapperHcl(dataThunderAamAuthorizationJwtCacheOperOperCacheListStructToHclTerraform, true)(struct!.cacheList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAamAuthorizationJwtCacheOperOperCacheListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthorizationJwtCacheOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthorizationJwtCacheOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._maxTokenCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTokenCache = this._maxTokenCache;
    }
    if (this._tokenCacheHit !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenCacheHit = this._tokenCacheHit;
    }
    if (this._tokenCached !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenCached = this._tokenCached;
    }
    if (this._cacheList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheList = this._cacheList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthorizationJwtCacheOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._maxTokenCache = undefined;
      this._tokenCacheHit = undefined;
      this._tokenCached = undefined;
      this._cacheList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._maxTokenCache = value.maxTokenCache;
      this._tokenCacheHit = value.tokenCacheHit;
      this._tokenCached = value.tokenCached;
      this._cacheList.internalValue = value.cacheList;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // max_token_cache - computed: false, optional: true, required: false
  private _maxTokenCache?: number; 
  public get maxTokenCache() {
    return this.getNumberAttribute('max_token_cache');
  }
  public set maxTokenCache(value: number) {
    this._maxTokenCache = value;
  }
  public resetMaxTokenCache() {
    this._maxTokenCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTokenCacheInput() {
    return this._maxTokenCache;
  }

  // token_cache_hit - computed: false, optional: true, required: false
  private _tokenCacheHit?: number; 
  public get tokenCacheHit() {
    return this.getNumberAttribute('token_cache_hit');
  }
  public set tokenCacheHit(value: number) {
    this._tokenCacheHit = value;
  }
  public resetTokenCacheHit() {
    this._tokenCacheHit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenCacheHitInput() {
    return this._tokenCacheHit;
  }

  // token_cached - computed: false, optional: true, required: false
  private _tokenCached?: number; 
  public get tokenCached() {
    return this.getNumberAttribute('token_cached');
  }
  public set tokenCached(value: number) {
    this._tokenCached = value;
  }
  public resetTokenCached() {
    this._tokenCached = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenCachedInput() {
    return this._tokenCached;
  }

  // cache_list - computed: false, optional: true, required: false
  private _cacheList = new DataThunderAamAuthorizationJwtCacheOperOperCacheListStructList(this, "cache_list", false);
  public get cacheList() {
    return this._cacheList;
  }
  public putCacheList(value: DataThunderAamAuthorizationJwtCacheOperOperCacheListStruct[] | cdktf.IResolvable) {
    this._cacheList.internalValue = value;
  }
  public resetCacheList() {
    this._cacheList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheListInput() {
    return this._cacheList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authorization_jwt_cache_oper thunder_aam_authorization_jwt_cache_oper}
*/
export class DataThunderAamAuthorizationJwtCacheOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authorization_jwt_cache_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAuthorizationJwtCacheOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAuthorizationJwtCacheOper to import
  * @param importFromId The id of the existing DataThunderAamAuthorizationJwtCacheOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authorization_jwt_cache_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAuthorizationJwtCacheOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authorization_jwt_cache_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authorization_jwt_cache_oper thunder_aam_authorization_jwt_cache_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAuthorizationJwtCacheOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAuthorizationJwtCacheOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authorization_jwt_cache_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderAamAuthorizationJwtCacheOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderAamAuthorizationJwtCacheOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderAamAuthorizationJwtCacheOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderAamAuthorizationJwtCacheOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthorizationJwtCacheOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
