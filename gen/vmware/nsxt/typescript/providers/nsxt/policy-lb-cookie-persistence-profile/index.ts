// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_cookie_persistence_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyLbCookiePersistenceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_cookie_persistence_profile#cookie_domain PolicyLbCookiePersistenceProfile#cookie_domain}
  */
  readonly cookieDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_cookie_persistence_profile#cookie_fallback PolicyLbCookiePersistenceProfile#cookie_fallback}
  */
  readonly cookieFallback?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_cookie_persistence_profile#cookie_garble PolicyLbCookiePersistenceProfile#cookie_garble}
  */
  readonly cookieGarble?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_cookie_persistence_profile#cookie_httponly PolicyLbCookiePersistenceProfile#cookie_httponly}
  */
  readonly cookieHttponly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_cookie_persistence_profile#cookie_mode PolicyLbCookiePersistenceProfile#cookie_mode}
  */
  readonly cookieMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_cookie_persistence_profile#cookie_name PolicyLbCookiePersistenceProfile#cookie_name}
  */
  readonly cookieName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_cookie_persistence_profile#cookie_path PolicyLbCookiePersistenceProfile#cookie_path}
  */
  readonly cookiePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_cookie_persistence_profile#cookie_secure PolicyLbCookiePersistenceProfile#cookie_secure}
  */
  readonly cookieSecure?: boolean | cdktf.IResolvable;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_cookie_persistence_profile#description PolicyLbCookiePersistenceProfile#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_cookie_persistence_profile#display_name PolicyLbCookiePersistenceProfile#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_cookie_persistence_profile#id PolicyLbCookiePersistenceProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_cookie_persistence_profile#nsx_id PolicyLbCookiePersistenceProfile#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_cookie_persistence_profile#persistence_shared PolicyLbCookiePersistenceProfile#persistence_shared}
  */
  readonly persistenceShared?: boolean | cdktf.IResolvable;
  /**
  * persistence_cookie_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_cookie_persistence_profile#persistence_cookie_time PolicyLbCookiePersistenceProfile#persistence_cookie_time}
  */
  readonly persistenceCookieTime?: PolicyLbCookiePersistenceProfilePersistenceCookieTime;
  /**
  * session_cookie_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_cookie_persistence_profile#session_cookie_time PolicyLbCookiePersistenceProfile#session_cookie_time}
  */
  readonly sessionCookieTime?: PolicyLbCookiePersistenceProfileSessionCookieTime;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_cookie_persistence_profile#tag PolicyLbCookiePersistenceProfile#tag}
  */
  readonly tag?: PolicyLbCookiePersistenceProfileTag[] | cdktf.IResolvable;
}
export interface PolicyLbCookiePersistenceProfilePersistenceCookieTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_cookie_persistence_profile#max_idle PolicyLbCookiePersistenceProfile#max_idle}
  */
  readonly maxIdle?: number;
}

export function policyLbCookiePersistenceProfilePersistenceCookieTimeToTerraform(struct?: PolicyLbCookiePersistenceProfilePersistenceCookieTimeOutputReference | PolicyLbCookiePersistenceProfilePersistenceCookieTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_idle: cdktf.numberToTerraform(struct!.maxIdle),
  }
}


export function policyLbCookiePersistenceProfilePersistenceCookieTimeToHclTerraform(struct?: PolicyLbCookiePersistenceProfilePersistenceCookieTimeOutputReference | PolicyLbCookiePersistenceProfilePersistenceCookieTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_idle: {
      value: cdktf.numberToHclTerraform(struct!.maxIdle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbCookiePersistenceProfilePersistenceCookieTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyLbCookiePersistenceProfilePersistenceCookieTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxIdle !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdle = this._maxIdle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbCookiePersistenceProfilePersistenceCookieTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxIdle = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxIdle = value.maxIdle;
    }
  }

  // max_idle - computed: false, optional: true, required: false
  private _maxIdle?: number; 
  public get maxIdle() {
    return this.getNumberAttribute('max_idle');
  }
  public set maxIdle(value: number) {
    this._maxIdle = value;
  }
  public resetMaxIdle() {
    this._maxIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleInput() {
    return this._maxIdle;
  }
}
export interface PolicyLbCookiePersistenceProfileSessionCookieTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_cookie_persistence_profile#max_idle PolicyLbCookiePersistenceProfile#max_idle}
  */
  readonly maxIdle?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_cookie_persistence_profile#max_life PolicyLbCookiePersistenceProfile#max_life}
  */
  readonly maxLife?: number;
}

export function policyLbCookiePersistenceProfileSessionCookieTimeToTerraform(struct?: PolicyLbCookiePersistenceProfileSessionCookieTimeOutputReference | PolicyLbCookiePersistenceProfileSessionCookieTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_idle: cdktf.numberToTerraform(struct!.maxIdle),
    max_life: cdktf.numberToTerraform(struct!.maxLife),
  }
}


export function policyLbCookiePersistenceProfileSessionCookieTimeToHclTerraform(struct?: PolicyLbCookiePersistenceProfileSessionCookieTimeOutputReference | PolicyLbCookiePersistenceProfileSessionCookieTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_idle: {
      value: cdktf.numberToHclTerraform(struct!.maxIdle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_life: {
      value: cdktf.numberToHclTerraform(struct!.maxLife),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbCookiePersistenceProfileSessionCookieTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyLbCookiePersistenceProfileSessionCookieTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxIdle !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdle = this._maxIdle;
    }
    if (this._maxLife !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLife = this._maxLife;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbCookiePersistenceProfileSessionCookieTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxIdle = undefined;
      this._maxLife = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxIdle = value.maxIdle;
      this._maxLife = value.maxLife;
    }
  }

  // max_idle - computed: false, optional: true, required: false
  private _maxIdle?: number; 
  public get maxIdle() {
    return this.getNumberAttribute('max_idle');
  }
  public set maxIdle(value: number) {
    this._maxIdle = value;
  }
  public resetMaxIdle() {
    this._maxIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleInput() {
    return this._maxIdle;
  }

  // max_life - computed: false, optional: true, required: false
  private _maxLife?: number; 
  public get maxLife() {
    return this.getNumberAttribute('max_life');
  }
  public set maxLife(value: number) {
    this._maxLife = value;
  }
  public resetMaxLife() {
    this._maxLife = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLifeInput() {
    return this._maxLife;
  }
}
export interface PolicyLbCookiePersistenceProfileTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_cookie_persistence_profile#scope PolicyLbCookiePersistenceProfile#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_cookie_persistence_profile#tag PolicyLbCookiePersistenceProfile#tag}
  */
  readonly tag?: string;
}

export function policyLbCookiePersistenceProfileTagToTerraform(struct?: PolicyLbCookiePersistenceProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyLbCookiePersistenceProfileTagToHclTerraform(struct?: PolicyLbCookiePersistenceProfileTag | cdktf.IResolvable): any {
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

export class PolicyLbCookiePersistenceProfileTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbCookiePersistenceProfileTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyLbCookiePersistenceProfileTag | cdktf.IResolvable | undefined) {
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

export class PolicyLbCookiePersistenceProfileTagList extends cdktf.ComplexList {
  public internalValue? : PolicyLbCookiePersistenceProfileTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbCookiePersistenceProfileTagOutputReference {
    return new PolicyLbCookiePersistenceProfileTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_cookie_persistence_profile nsxt_policy_lb_cookie_persistence_profile}
*/
export class PolicyLbCookiePersistenceProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_lb_cookie_persistence_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyLbCookiePersistenceProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyLbCookiePersistenceProfile to import
  * @param importFromId The id of the existing PolicyLbCookiePersistenceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_cookie_persistence_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyLbCookiePersistenceProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_lb_cookie_persistence_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_cookie_persistence_profile nsxt_policy_lb_cookie_persistence_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyLbCookiePersistenceProfileConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyLbCookiePersistenceProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_lb_cookie_persistence_profile',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0',
        providerVersionConstraint: '3.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cookieDomain = config.cookieDomain;
    this._cookieFallback = config.cookieFallback;
    this._cookieGarble = config.cookieGarble;
    this._cookieHttponly = config.cookieHttponly;
    this._cookieMode = config.cookieMode;
    this._cookieName = config.cookieName;
    this._cookiePath = config.cookiePath;
    this._cookieSecure = config.cookieSecure;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._nsxId = config.nsxId;
    this._persistenceShared = config.persistenceShared;
    this._persistenceCookieTime.internalValue = config.persistenceCookieTime;
    this._sessionCookieTime.internalValue = config.sessionCookieTime;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // cookie_httponly - computed: false, optional: true, required: false
  private _cookieHttponly?: boolean | cdktf.IResolvable; 
  public get cookieHttponly() {
    return this.getBooleanAttribute('cookie_httponly');
  }
  public set cookieHttponly(value: boolean | cdktf.IResolvable) {
    this._cookieHttponly = value;
  }
  public resetCookieHttponly() {
    this._cookieHttponly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieHttponlyInput() {
    return this._cookieHttponly;
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

  // cookie_name - computed: false, optional: true, required: false
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

  // cookie_secure - computed: false, optional: true, required: false
  private _cookieSecure?: boolean | cdktf.IResolvable; 
  public get cookieSecure() {
    return this.getBooleanAttribute('cookie_secure');
  }
  public set cookieSecure(value: boolean | cdktf.IResolvable) {
    this._cookieSecure = value;
  }
  public resetCookieSecure() {
    this._cookieSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieSecureInput() {
    return this._cookieSecure;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
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

  // nsx_id - computed: true, optional: true, required: false
  private _nsxId?: string; 
  public get nsxId() {
    return this.getStringAttribute('nsx_id');
  }
  public set nsxId(value: string) {
    this._nsxId = value;
  }
  public resetNsxId() {
    this._nsxId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxIdInput() {
    return this._nsxId;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
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

  // persistence_cookie_time - computed: false, optional: true, required: false
  private _persistenceCookieTime = new PolicyLbCookiePersistenceProfilePersistenceCookieTimeOutputReference(this, "persistence_cookie_time");
  public get persistenceCookieTime() {
    return this._persistenceCookieTime;
  }
  public putPersistenceCookieTime(value: PolicyLbCookiePersistenceProfilePersistenceCookieTime) {
    this._persistenceCookieTime.internalValue = value;
  }
  public resetPersistenceCookieTime() {
    this._persistenceCookieTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceCookieTimeInput() {
    return this._persistenceCookieTime.internalValue;
  }

  // session_cookie_time - computed: false, optional: true, required: false
  private _sessionCookieTime = new PolicyLbCookiePersistenceProfileSessionCookieTimeOutputReference(this, "session_cookie_time");
  public get sessionCookieTime() {
    return this._sessionCookieTime;
  }
  public putSessionCookieTime(value: PolicyLbCookiePersistenceProfileSessionCookieTime) {
    this._sessionCookieTime.internalValue = value;
  }
  public resetSessionCookieTime() {
    this._sessionCookieTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieTimeInput() {
    return this._sessionCookieTime.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyLbCookiePersistenceProfileTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyLbCookiePersistenceProfileTag[] | cdktf.IResolvable) {
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
      cookie_domain: cdktf.stringToTerraform(this._cookieDomain),
      cookie_fallback: cdktf.booleanToTerraform(this._cookieFallback),
      cookie_garble: cdktf.booleanToTerraform(this._cookieGarble),
      cookie_httponly: cdktf.booleanToTerraform(this._cookieHttponly),
      cookie_mode: cdktf.stringToTerraform(this._cookieMode),
      cookie_name: cdktf.stringToTerraform(this._cookieName),
      cookie_path: cdktf.stringToTerraform(this._cookiePath),
      cookie_secure: cdktf.booleanToTerraform(this._cookieSecure),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      persistence_shared: cdktf.booleanToTerraform(this._persistenceShared),
      persistence_cookie_time: policyLbCookiePersistenceProfilePersistenceCookieTimeToTerraform(this._persistenceCookieTime.internalValue),
      session_cookie_time: policyLbCookiePersistenceProfileSessionCookieTimeToTerraform(this._sessionCookieTime.internalValue),
      tag: cdktf.listMapper(policyLbCookiePersistenceProfileTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cookie_domain: {
        value: cdktf.stringToHclTerraform(this._cookieDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      cookie_httponly: {
        value: cdktf.booleanToHclTerraform(this._cookieHttponly),
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
      cookie_path: {
        value: cdktf.stringToHclTerraform(this._cookiePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_secure: {
        value: cdktf.booleanToHclTerraform(this._cookieSecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
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
      persistence_cookie_time: {
        value: policyLbCookiePersistenceProfilePersistenceCookieTimeToHclTerraform(this._persistenceCookieTime.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyLbCookiePersistenceProfilePersistenceCookieTimeList",
      },
      session_cookie_time: {
        value: policyLbCookiePersistenceProfileSessionCookieTimeToHclTerraform(this._sessionCookieTime.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyLbCookiePersistenceProfileSessionCookieTimeList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyLbCookiePersistenceProfileTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyLbCookiePersistenceProfileTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
