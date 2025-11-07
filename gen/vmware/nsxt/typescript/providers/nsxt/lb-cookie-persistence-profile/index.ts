// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_cookie_persistence_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbCookiePersistenceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * A boolean flag which reflects whether once the server points by this cookie is down, a new server is selected, or the requests will be rejected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_cookie_persistence_profile#cookie_fallback LbCookiePersistenceProfile#cookie_fallback}
  */
  readonly cookieFallback?: boolean | cdktf.IResolvable;
  /**
  * A boolean flag which reflects whether the cookie value (server IP and port) would be encrypted or in plain text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_cookie_persistence_profile#cookie_garble LbCookiePersistenceProfile#cookie_garble}
  */
  readonly cookieGarble?: boolean | cdktf.IResolvable;
  /**
  * The cookie persistence mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_cookie_persistence_profile#cookie_mode LbCookiePersistenceProfile#cookie_mode}
  */
  readonly cookieMode?: string;
  /**
  * The name of the cookie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_cookie_persistence_profile#cookie_name LbCookiePersistenceProfile#cookie_name}
  */
  readonly cookieName: string;
  /**
  * Description of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_cookie_persistence_profile#description LbCookiePersistenceProfile#description}
  */
  readonly description?: string;
  /**
  * The display name of this resource. Defaults to ID if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_cookie_persistence_profile#display_name LbCookiePersistenceProfile#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_cookie_persistence_profile#id LbCookiePersistenceProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A boolean flag which reflects whether the cookie persistence is private or shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_cookie_persistence_profile#persistence_shared LbCookiePersistenceProfile#persistence_shared}
  */
  readonly persistenceShared?: boolean | cdktf.IResolvable;
  /**
  * insert_mode_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_cookie_persistence_profile#insert_mode_params LbCookiePersistenceProfile#insert_mode_params}
  */
  readonly insertModeParams?: LbCookiePersistenceProfileInsertModeParams;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_cookie_persistence_profile#tag LbCookiePersistenceProfile#tag}
  */
  readonly tag?: LbCookiePersistenceProfileTag[] | cdktf.IResolvable;
}
export interface LbCookiePersistenceProfileInsertModeParams {
  /**
  * HTTP cookie domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_cookie_persistence_profile#cookie_domain LbCookiePersistenceProfile#cookie_domain}
  */
  readonly cookieDomain?: string;
  /**
  * Type of cookie expiration timing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_cookie_persistence_profile#cookie_expiry_type LbCookiePersistenceProfile#cookie_expiry_type}
  */
  readonly cookieExpiryType?: string;
  /**
  * HTTP cookie path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_cookie_persistence_profile#cookie_path LbCookiePersistenceProfile#cookie_path}
  */
  readonly cookiePath?: string;
  /**
  * Maximum interval (in seconds) the cookie is valid for from the last time it was seen in a request (required if cookie_expiry_type is set)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_cookie_persistence_profile#max_idle_time LbCookiePersistenceProfile#max_idle_time}
  */
  readonly maxIdleTime?: number;
  /**
  * Maximum interval (in seconds) the cookie is valid for from the first time the cookie was seen in a request (required if cookie_expiry_type is SESSION_COOKIE_TIME expiration)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_cookie_persistence_profile#max_life_time LbCookiePersistenceProfile#max_life_time}
  */
  readonly maxLifeTime?: number;
}

export function lbCookiePersistenceProfileInsertModeParamsToTerraform(struct?: LbCookiePersistenceProfileInsertModeParamsOutputReference | LbCookiePersistenceProfileInsertModeParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_domain: cdktf.stringToTerraform(struct!.cookieDomain),
    cookie_expiry_type: cdktf.stringToTerraform(struct!.cookieExpiryType),
    cookie_path: cdktf.stringToTerraform(struct!.cookiePath),
    max_idle_time: cdktf.numberToTerraform(struct!.maxIdleTime),
    max_life_time: cdktf.numberToTerraform(struct!.maxLifeTime),
  }
}


export function lbCookiePersistenceProfileInsertModeParamsToHclTerraform(struct?: LbCookiePersistenceProfileInsertModeParamsOutputReference | LbCookiePersistenceProfileInsertModeParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_domain: {
      value: cdktf.stringToHclTerraform(struct!.cookieDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_expiry_type: {
      value: cdktf.stringToHclTerraform(struct!.cookieExpiryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_path: {
      value: cdktf.stringToHclTerraform(struct!.cookiePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_idle_time: {
      value: cdktf.numberToHclTerraform(struct!.maxIdleTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_life_time: {
      value: cdktf.numberToHclTerraform(struct!.maxLifeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbCookiePersistenceProfileInsertModeParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbCookiePersistenceProfileInsertModeParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieDomain = this._cookieDomain;
    }
    if (this._cookieExpiryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieExpiryType = this._cookieExpiryType;
    }
    if (this._cookiePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookiePath = this._cookiePath;
    }
    if (this._maxIdleTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleTime = this._maxIdleTime;
    }
    if (this._maxLifeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLifeTime = this._maxLifeTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbCookiePersistenceProfileInsertModeParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieDomain = undefined;
      this._cookieExpiryType = undefined;
      this._cookiePath = undefined;
      this._maxIdleTime = undefined;
      this._maxLifeTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieDomain = value.cookieDomain;
      this._cookieExpiryType = value.cookieExpiryType;
      this._cookiePath = value.cookiePath;
      this._maxIdleTime = value.maxIdleTime;
      this._maxLifeTime = value.maxLifeTime;
    }
  }

  // cookie_domain - computed: false, optional: true, required: false
  private _cookieDomain?: string; 
  public get cookieDomain() {
    return this.getStringAttribute('cookie_domain');
  }
  public set cookieDomain(value: string) {
    this._cookieDomain = value;
  }
  public resetCookieDomain() {
    this._cookieDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieDomainInput() {
    return this._cookieDomain;
  }

  // cookie_expiry_type - computed: false, optional: true, required: false
  private _cookieExpiryType?: string; 
  public get cookieExpiryType() {
    return this.getStringAttribute('cookie_expiry_type');
  }
  public set cookieExpiryType(value: string) {
    this._cookieExpiryType = value;
  }
  public resetCookieExpiryType() {
    this._cookieExpiryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieExpiryTypeInput() {
    return this._cookieExpiryType;
  }

  // cookie_path - computed: false, optional: true, required: false
  private _cookiePath?: string; 
  public get cookiePath() {
    return this.getStringAttribute('cookie_path');
  }
  public set cookiePath(value: string) {
    this._cookiePath = value;
  }
  public resetCookiePath() {
    this._cookiePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiePathInput() {
    return this._cookiePath;
  }

  // max_idle_time - computed: true, optional: true, required: false
  private _maxIdleTime?: number; 
  public get maxIdleTime() {
    return this.getNumberAttribute('max_idle_time');
  }
  public set maxIdleTime(value: number) {
    this._maxIdleTime = value;
  }
  public resetMaxIdleTime() {
    this._maxIdleTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleTimeInput() {
    return this._maxIdleTime;
  }

  // max_life_time - computed: true, optional: true, required: false
  private _maxLifeTime?: number; 
  public get maxLifeTime() {
    return this.getNumberAttribute('max_life_time');
  }
  public set maxLifeTime(value: number) {
    this._maxLifeTime = value;
  }
  public resetMaxLifeTime() {
    this._maxLifeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLifeTimeInput() {
    return this._maxLifeTime;
  }
}
export interface LbCookiePersistenceProfileTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_cookie_persistence_profile#scope LbCookiePersistenceProfile#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_cookie_persistence_profile#tag LbCookiePersistenceProfile#tag}
  */
  readonly tag?: string;
}

export function lbCookiePersistenceProfileTagToTerraform(struct?: LbCookiePersistenceProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function lbCookiePersistenceProfileTagToHclTerraform(struct?: LbCookiePersistenceProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbCookiePersistenceProfileTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbCookiePersistenceProfileTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbCookiePersistenceProfileTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class LbCookiePersistenceProfileTagList extends cdktf.ComplexList {
  public internalValue? : LbCookiePersistenceProfileTag[] | cdktf.IResolvable

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
  public get(index: number): LbCookiePersistenceProfileTagOutputReference {
    return new LbCookiePersistenceProfileTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_cookie_persistence_profile nsxt_lb_cookie_persistence_profile}
*/
export class LbCookiePersistenceProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_lb_cookie_persistence_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbCookiePersistenceProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbCookiePersistenceProfile to import
  * @param importFromId The id of the existing LbCookiePersistenceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_cookie_persistence_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbCookiePersistenceProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_lb_cookie_persistence_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_cookie_persistence_profile nsxt_lb_cookie_persistence_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbCookiePersistenceProfileConfig
  */
  public constructor(scope: Construct, id: string, config: LbCookiePersistenceProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_lb_cookie_persistence_profile',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cookieFallback = config.cookieFallback;
    this._cookieGarble = config.cookieGarble;
    this._cookieMode = config.cookieMode;
    this._cookieName = config.cookieName;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._persistenceShared = config.persistenceShared;
    this._insertModeParams.internalValue = config.insertModeParams;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cookie_fallback - computed: false, optional: true, required: false
  private _cookieFallback?: boolean | cdktf.IResolvable; 
  public get cookieFallback() {
    return this.getBooleanAttribute('cookie_fallback');
  }
  public set cookieFallback(value: boolean | cdktf.IResolvable) {
    this._cookieFallback = value;
  }
  public resetCookieFallback() {
    this._cookieFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieFallbackInput() {
    return this._cookieFallback;
  }

  // cookie_garble - computed: false, optional: true, required: false
  private _cookieGarble?: boolean | cdktf.IResolvable; 
  public get cookieGarble() {
    return this.getBooleanAttribute('cookie_garble');
  }
  public set cookieGarble(value: boolean | cdktf.IResolvable) {
    this._cookieGarble = value;
  }
  public resetCookieGarble() {
    this._cookieGarble = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieGarbleInput() {
    return this._cookieGarble;
  }

  // cookie_mode - computed: false, optional: true, required: false
  private _cookieMode?: string; 
  public get cookieMode() {
    return this.getStringAttribute('cookie_mode');
  }
  public set cookieMode(value: string) {
    this._cookieMode = value;
  }
  public resetCookieMode() {
    this._cookieMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieModeInput() {
    return this._cookieMode;
  }

  // cookie_name - computed: false, optional: false, required: true
  private _cookieName?: string; 
  public get cookieName() {
    return this.getStringAttribute('cookie_name');
  }
  public set cookieName(value: string) {
    this._cookieName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameInput() {
    return this._cookieName;
  }

  // description - computed: false, optional: true, required: false
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // persistence_shared - computed: false, optional: true, required: false
  private _persistenceShared?: boolean | cdktf.IResolvable; 
  public get persistenceShared() {
    return this.getBooleanAttribute('persistence_shared');
  }
  public set persistenceShared(value: boolean | cdktf.IResolvable) {
    this._persistenceShared = value;
  }
  public resetPersistenceShared() {
    this._persistenceShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceSharedInput() {
    return this._persistenceShared;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // insert_mode_params - computed: false, optional: true, required: false
  private _insertModeParams = new LbCookiePersistenceProfileInsertModeParamsOutputReference(this, "insert_mode_params");
  public get insertModeParams() {
    return this._insertModeParams;
  }
  public putInsertModeParams(value: LbCookiePersistenceProfileInsertModeParams) {
    this._insertModeParams.internalValue = value;
  }
  public resetInsertModeParams() {
    this._insertModeParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertModeParamsInput() {
    return this._insertModeParams.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new LbCookiePersistenceProfileTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: LbCookiePersistenceProfileTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cookie_fallback: cdktf.booleanToTerraform(this._cookieFallback),
      cookie_garble: cdktf.booleanToTerraform(this._cookieGarble),
      cookie_mode: cdktf.stringToTerraform(this._cookieMode),
      cookie_name: cdktf.stringToTerraform(this._cookieName),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      persistence_shared: cdktf.booleanToTerraform(this._persistenceShared),
      insert_mode_params: lbCookiePersistenceProfileInsertModeParamsToTerraform(this._insertModeParams.internalValue),
      tag: cdktf.listMapper(lbCookiePersistenceProfileTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cookie_fallback: {
        value: cdktf.booleanToHclTerraform(this._cookieFallback),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cookie_garble: {
        value: cdktf.booleanToHclTerraform(this._cookieGarble),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cookie_mode: {
        value: cdktf.stringToHclTerraform(this._cookieMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_name: {
        value: cdktf.stringToHclTerraform(this._cookieName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      persistence_shared: {
        value: cdktf.booleanToHclTerraform(this._persistenceShared),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      insert_mode_params: {
        value: lbCookiePersistenceProfileInsertModeParamsToHclTerraform(this._insertModeParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LbCookiePersistenceProfileInsertModeParamsList",
      },
      tag: {
        value: cdktf.listMapperHcl(lbCookiePersistenceProfileTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbCookiePersistenceProfileTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
