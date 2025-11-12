// https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/service_account_identity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceAccountIdentityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/service_account_identity#id ServiceAccountIdentity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The display name of the service account identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/service_account_identity#name ServiceAccountIdentity#name}
  */
  readonly name: string;
  /**
  * Slug of the service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/service_account_identity#service_account_slug ServiceAccountIdentity#service_account_slug}
  */
  readonly serviceAccountSlug: string;
  /**
  * The amount of time, in seconds, that auth tokens for this identity will be valid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/service_account_identity#ttl_seconds ServiceAccountIdentity#ttl_seconds}
  */
  readonly ttlSeconds: number;
  /**
  * config_oidc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/service_account_identity#config_oidc ServiceAccountIdentity#config_oidc}
  */
  readonly configOidc: ServiceAccountIdentityConfigOidc;
}
export interface ServiceAccountIdentityConfigOidcClaims {
  /**
  * The key of the claim to validate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/service_account_identity#key ServiceAccountIdentity#key}
  */
  readonly key: string;
  /**
  * The set of valid values for this claim
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/service_account_identity#values ServiceAccountIdentity#values}
  */
  readonly values: string[];
}

export function serviceAccountIdentityConfigOidcClaimsToTerraform(struct?: ServiceAccountIdentityConfigOidcClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function serviceAccountIdentityConfigOidcClaimsToHclTerraform(struct?: ServiceAccountIdentityConfigOidcClaims | cdktf.IResolvable): any {
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
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceAccountIdentityConfigOidcClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceAccountIdentityConfigOidcClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceAccountIdentityConfigOidcClaims | cdktf.IResolvable | undefined) {
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ServiceAccountIdentityConfigOidcClaimsList extends cdktf.ComplexList {
  public internalValue? : ServiceAccountIdentityConfigOidcClaims[] | cdktf.IResolvable

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
  public get(index: number): ServiceAccountIdentityConfigOidcClaimsOutputReference {
    return new ServiceAccountIdentityConfigOidcClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceAccountIdentityConfigOidc {
  /**
  * If "wildcard", wildcard characters will be expanded during claims validation. Defaults to "exact"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/service_account_identity#claims_type ServiceAccountIdentity#claims_type}
  */
  readonly claimsType?: string;
  /**
  * The public URL of the OpenID discovery service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/service_account_identity#discovery_url ServiceAccountIdentity#discovery_url}
  */
  readonly discoveryUrl: string;
  /**
  * claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/service_account_identity#claims ServiceAccountIdentity#claims}
  */
  readonly claims: ServiceAccountIdentityConfigOidcClaims[] | cdktf.IResolvable;
}

export function serviceAccountIdentityConfigOidcToTerraform(struct?: ServiceAccountIdentityConfigOidcOutputReference | ServiceAccountIdentityConfigOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims_type: cdktf.stringToTerraform(struct!.claimsType),
    discovery_url: cdktf.stringToTerraform(struct!.discoveryUrl),
    claims: cdktf.listMapper(serviceAccountIdentityConfigOidcClaimsToTerraform, true)(struct!.claims),
  }
}


export function serviceAccountIdentityConfigOidcToHclTerraform(struct?: ServiceAccountIdentityConfigOidcOutputReference | ServiceAccountIdentityConfigOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims_type: {
      value: cdktf.stringToHclTerraform(struct!.claimsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discovery_url: {
      value: cdktf.stringToHclTerraform(struct!.discoveryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    claims: {
      value: cdktf.listMapperHcl(serviceAccountIdentityConfigOidcClaimsToHclTerraform, true)(struct!.claims),
      isBlock: true,
      type: "set",
      storageClassType: "ServiceAccountIdentityConfigOidcClaimsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceAccountIdentityConfigOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceAccountIdentityConfigOidc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimsType = this._claimsType;
    }
    if (this._discoveryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryUrl = this._discoveryUrl;
    }
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceAccountIdentityConfigOidc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._claimsType = undefined;
      this._discoveryUrl = undefined;
      this._claims.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._claimsType = value.claimsType;
      this._discoveryUrl = value.discoveryUrl;
      this._claims.internalValue = value.claims;
    }
  }

  // claims_type - computed: false, optional: true, required: false
  private _claimsType?: string; 
  public get claimsType() {
    return this.getStringAttribute('claims_type');
  }
  public set claimsType(value: string) {
    this._claimsType = value;
  }
  public resetClaimsType() {
    this._claimsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsTypeInput() {
    return this._claimsType;
  }

  // discovery_url - computed: false, optional: false, required: true
  private _discoveryUrl?: string; 
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }
  public set discoveryUrl(value: string) {
    this._discoveryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryUrlInput() {
    return this._discoveryUrl;
  }

  // claims - computed: false, optional: false, required: true
  private _claims = new ServiceAccountIdentityConfigOidcClaimsList(this, "claims", true);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: ServiceAccountIdentityConfigOidcClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/service_account_identity doppler_service_account_identity}
*/
export class ServiceAccountIdentity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doppler_service_account_identity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceAccountIdentity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceAccountIdentity to import
  * @param importFromId The id of the existing ServiceAccountIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/service_account_identity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceAccountIdentity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doppler_service_account_identity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/service_account_identity doppler_service_account_identity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceAccountIdentityConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceAccountIdentityConfig) {
    super(scope, id, {
      terraformResourceType: 'doppler_service_account_identity',
      terraformGeneratorMetadata: {
        providerName: 'doppler',
        providerVersion: '1.21.0',
        providerVersionConstraint: '1.21.0'
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
    this._serviceAccountSlug = config.serviceAccountSlug;
    this._ttlSeconds = config.ttlSeconds;
    this._configOidc.internalValue = config.configOidc;
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

  // service_account_slug - computed: false, optional: false, required: true
  private _serviceAccountSlug?: string; 
  public get serviceAccountSlug() {
    return this.getStringAttribute('service_account_slug');
  }
  public set serviceAccountSlug(value: string) {
    this._serviceAccountSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountSlugInput() {
    return this._serviceAccountSlug;
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // ttl_seconds - computed: false, optional: false, required: true
  private _ttlSeconds?: number; 
  public get ttlSeconds() {
    return this.getNumberAttribute('ttl_seconds');
  }
  public set ttlSeconds(value: number) {
    this._ttlSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlSecondsInput() {
    return this._ttlSeconds;
  }

  // config_oidc - computed: false, optional: false, required: true
  private _configOidc = new ServiceAccountIdentityConfigOidcOutputReference(this, "config_oidc");
  public get configOidc() {
    return this._configOidc;
  }
  public putConfigOidc(value: ServiceAccountIdentityConfigOidc) {
    this._configOidc.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configOidcInput() {
    return this._configOidc.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      service_account_slug: cdktf.stringToTerraform(this._serviceAccountSlug),
      ttl_seconds: cdktf.numberToTerraform(this._ttlSeconds),
      config_oidc: serviceAccountIdentityConfigOidcToTerraform(this._configOidc.internalValue),
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
      service_account_slug: {
        value: cdktf.stringToHclTerraform(this._serviceAccountSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl_seconds: {
        value: cdktf.numberToHclTerraform(this._ttlSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config_oidc: {
        value: serviceAccountIdentityConfigOidcToHclTerraform(this._configOidc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceAccountIdentityConfigOidcList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
