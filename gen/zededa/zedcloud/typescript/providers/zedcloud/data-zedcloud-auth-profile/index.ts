// https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZedcloudAuthProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Mark this profile as active. Only one profile can be active in a given enterprise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#active DataZedcloudAuthProfile#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Default Role ID to associate with the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#default_role_id DataZedcloudAuthProfile#default_role_id}
  */
  readonly defaultRoleId: string;
  /**
  * Detailed description of the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#description DataZedcloudAuthProfile#description}
  */
  readonly description?: string;
  /**
  * Do not automatically create new users if this is set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#disable_auto_user_create DataZedcloudAuthProfile#disable_auto_user_create}
  */
  readonly disableAutoUserCreate?: boolean | cdktf.IResolvable;
  /**
  * Parent enterprise ID of the authorization profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#enterprise_id DataZedcloudAuthProfile#enterprise_id}
  */
  readonly enterpriseId?: string;
  /**
  * User defined name of the profile. Profile name is unique within an enterprise. Name can't be changed once created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#name DataZedcloudAuthProfile#name}
  */
  readonly name: string;
  /**
  * Authorization profile type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#profile_type DataZedcloudAuthProfile#profile_type}
  */
  readonly profileType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#test_only DataZedcloudAuthProfile#test_only}
  */
  readonly testOnly?: boolean | cdktf.IResolvable;
  /**
  * User defined title for the profile. Title can be changed anytime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#title DataZedcloudAuthProfile#title}
  */
  readonly title: string;
  /**
  * Type of the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#type DataZedcloudAuthProfile#type}
  */
  readonly type?: string;
  /**
  * oauth_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#oauth_profile DataZedcloudAuthProfile#oauth_profile}
  */
  readonly oauthProfile?: DataZedcloudAuthProfileOauthProfile[] | cdktf.IResolvable;
  /**
  * password_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#password_profile DataZedcloudAuthProfile#password_profile}
  */
  readonly passwordProfile?: DataZedcloudAuthProfilePasswordProfile[] | cdktf.IResolvable;
}
export interface DataZedcloudAuthProfileRevision {
}

export function dataZedcloudAuthProfileRevisionToTerraform(struct?: DataZedcloudAuthProfileRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZedcloudAuthProfileRevisionToHclTerraform(struct?: DataZedcloudAuthProfileRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZedcloudAuthProfileRevisionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudAuthProfileRevision | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudAuthProfileRevision | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // curr - computed: true, optional: false, required: false
  public get curr() {
    return this.getStringAttribute('curr');
  }

  // prev - computed: true, optional: false, required: false
  public get prev() {
    return this.getStringAttribute('prev');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class DataZedcloudAuthProfileRevisionList extends cdktf.ComplexList {

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
  public get(index: number): DataZedcloudAuthProfileRevisionOutputReference {
    return new DataZedcloudAuthProfileRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudAuthProfileOauthProfileJwtAuthProfile {
  /**
  * Algorithm for JWT signature verification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#alg DataZedcloudAuthProfile#alg}
  */
  readonly alg?: string;
}

export function dataZedcloudAuthProfileOauthProfileJwtAuthProfileToTerraform(struct?: DataZedcloudAuthProfileOauthProfileJwtAuthProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alg: cdktf.stringToTerraform(struct!.alg),
  }
}


export function dataZedcloudAuthProfileOauthProfileJwtAuthProfileToHclTerraform(struct?: DataZedcloudAuthProfileOauthProfileJwtAuthProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alg: {
      value: cdktf.stringToHclTerraform(struct!.alg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudAuthProfileOauthProfileJwtAuthProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudAuthProfileOauthProfileJwtAuthProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alg !== undefined) {
      hasAnyValues = true;
      internalValueResult.alg = this._alg;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudAuthProfileOauthProfileJwtAuthProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alg = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alg = value.alg;
    }
  }

  // alg - computed: false, optional: true, required: false
  private _alg?: string; 
  public get alg() {
    return this.getStringAttribute('alg');
  }
  public set alg(value: string) {
    this._alg = value;
  }
  public resetAlg() {
    this._alg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algInput() {
    return this._alg;
  }
}

export class DataZedcloudAuthProfileOauthProfileJwtAuthProfileList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudAuthProfileOauthProfileJwtAuthProfile[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudAuthProfileOauthProfileJwtAuthProfileOutputReference {
    return new DataZedcloudAuthProfileOauthProfileJwtAuthProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudAuthProfileOauthProfile {
  /**
  * pass additional url parameters during the exchange and authorization process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#additional_parameters DataZedcloudAuthProfile#additional_parameters}
  */
  readonly additionalParameters?: string;
  /**
  * OAUTH client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#client_id DataZedcloudAuthProfile#client_id}
  */
  readonly clientId?: string;
  /**
  * OAUTH client secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#client_secret DataZedcloudAuthProfile#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#crypto_key DataZedcloudAuthProfile#crypto_key}
  */
  readonly cryptoKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#encrypted_secrets DataZedcloudAuthProfile#encrypted_secrets}
  */
  readonly encryptedSecrets?: { [key: string]: string };
  /**
  * id for Vmware IDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#idp_id DataZedcloudAuthProfile#idp_id}
  */
  readonly idpId?: string;
  /**
  * OIDC endpoint for oauth validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#o_id_c_end_point DataZedcloudAuthProfile#o_id_c_end_point}
  */
  readonly oIdCEndPoint?: string;
  /**
  * OIDC scope to fetch application role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#role_scope DataZedcloudAuthProfile#role_scope}
  */
  readonly roleScope?: string;
  /**
  * jwt_auth_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#jwt_auth_profile DataZedcloudAuthProfile#jwt_auth_profile}
  */
  readonly jwtAuthProfile?: DataZedcloudAuthProfileOauthProfileJwtAuthProfile[] | cdktf.IResolvable;
}

export function dataZedcloudAuthProfileOauthProfileToTerraform(struct?: DataZedcloudAuthProfileOauthProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_parameters: cdktf.stringToTerraform(struct!.additionalParameters),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    crypto_key: cdktf.stringToTerraform(struct!.cryptoKey),
    encrypted_secrets: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.encryptedSecrets),
    idp_id: cdktf.stringToTerraform(struct!.idpId),
    o_id_c_end_point: cdktf.stringToTerraform(struct!.oIdCEndPoint),
    role_scope: cdktf.stringToTerraform(struct!.roleScope),
    jwt_auth_profile: cdktf.listMapper(dataZedcloudAuthProfileOauthProfileJwtAuthProfileToTerraform, true)(struct!.jwtAuthProfile),
  }
}


export function dataZedcloudAuthProfileOauthProfileToHclTerraform(struct?: DataZedcloudAuthProfileOauthProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_parameters: {
      value: cdktf.stringToHclTerraform(struct!.additionalParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crypto_key: {
      value: cdktf.stringToHclTerraform(struct!.cryptoKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypted_secrets: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.encryptedSecrets),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    idp_id: {
      value: cdktf.stringToHclTerraform(struct!.idpId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    o_id_c_end_point: {
      value: cdktf.stringToHclTerraform(struct!.oIdCEndPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_scope: {
      value: cdktf.stringToHclTerraform(struct!.roleScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt_auth_profile: {
      value: cdktf.listMapperHcl(dataZedcloudAuthProfileOauthProfileJwtAuthProfileToHclTerraform, true)(struct!.jwtAuthProfile),
      isBlock: true,
      type: "list",
      storageClassType: "DataZedcloudAuthProfileOauthProfileJwtAuthProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudAuthProfileOauthProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudAuthProfileOauthProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalParameters = this._additionalParameters;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._cryptoKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoKey = this._cryptoKey;
    }
    if (this._encryptedSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedSecrets = this._encryptedSecrets;
    }
    if (this._idpId !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpId = this._idpId;
    }
    if (this._oIdCEndPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.oIdCEndPoint = this._oIdCEndPoint;
    }
    if (this._roleScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleScope = this._roleScope;
    }
    if (this._jwtAuthProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtAuthProfile = this._jwtAuthProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudAuthProfileOauthProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalParameters = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._cryptoKey = undefined;
      this._encryptedSecrets = undefined;
      this._idpId = undefined;
      this._oIdCEndPoint = undefined;
      this._roleScope = undefined;
      this._jwtAuthProfile.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalParameters = value.additionalParameters;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._cryptoKey = value.cryptoKey;
      this._encryptedSecrets = value.encryptedSecrets;
      this._idpId = value.idpId;
      this._oIdCEndPoint = value.oIdCEndPoint;
      this._roleScope = value.roleScope;
      this._jwtAuthProfile.internalValue = value.jwtAuthProfile;
    }
  }

  // additional_parameters - computed: false, optional: true, required: false
  private _additionalParameters?: string; 
  public get additionalParameters() {
    return this.getStringAttribute('additional_parameters');
  }
  public set additionalParameters(value: string) {
    this._additionalParameters = value;
  }
  public resetAdditionalParameters() {
    this._additionalParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalParametersInput() {
    return this._additionalParameters;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // crypto_key - computed: false, optional: true, required: false
  private _cryptoKey?: string; 
  public get cryptoKey() {
    return this.getStringAttribute('crypto_key');
  }
  public set cryptoKey(value: string) {
    this._cryptoKey = value;
  }
  public resetCryptoKey() {
    this._cryptoKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyInput() {
    return this._cryptoKey;
  }

  // encrypted_secrets - computed: false, optional: true, required: false
  private _encryptedSecrets?: { [key: string]: string }; 
  public get encryptedSecrets() {
    return this.getStringMapAttribute('encrypted_secrets');
  }
  public set encryptedSecrets(value: { [key: string]: string }) {
    this._encryptedSecrets = value;
  }
  public resetEncryptedSecrets() {
    this._encryptedSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedSecretsInput() {
    return this._encryptedSecrets;
  }

  // idp_id - computed: false, optional: true, required: false
  private _idpId?: string; 
  public get idpId() {
    return this.getStringAttribute('idp_id');
  }
  public set idpId(value: string) {
    this._idpId = value;
  }
  public resetIdpId() {
    this._idpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpIdInput() {
    return this._idpId;
  }

  // o_id_c_end_point - computed: false, optional: true, required: false
  private _oIdCEndPoint?: string; 
  public get oIdCEndPoint() {
    return this.getStringAttribute('o_id_c_end_point');
  }
  public set oIdCEndPoint(value: string) {
    this._oIdCEndPoint = value;
  }
  public resetOIdCEndPoint() {
    this._oIdCEndPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oIdCEndPointInput() {
    return this._oIdCEndPoint;
  }

  // role_scope - computed: false, optional: true, required: false
  private _roleScope?: string; 
  public get roleScope() {
    return this.getStringAttribute('role_scope');
  }
  public set roleScope(value: string) {
    this._roleScope = value;
  }
  public resetRoleScope() {
    this._roleScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleScopeInput() {
    return this._roleScope;
  }

  // jwt_auth_profile - computed: false, optional: true, required: false
  private _jwtAuthProfile = new DataZedcloudAuthProfileOauthProfileJwtAuthProfileList(this, "jwt_auth_profile", false);
  public get jwtAuthProfile() {
    return this._jwtAuthProfile;
  }
  public putJwtAuthProfile(value: DataZedcloudAuthProfileOauthProfileJwtAuthProfile[] | cdktf.IResolvable) {
    this._jwtAuthProfile.internalValue = value;
  }
  public resetJwtAuthProfile() {
    this._jwtAuthProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtAuthProfileInput() {
    return this._jwtAuthProfile.internalValue;
  }
}

export class DataZedcloudAuthProfileOauthProfileList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudAuthProfileOauthProfile[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudAuthProfileOauthProfileOutputReference {
    return new DataZedcloudAuthProfileOauthProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudAuthProfilePasswordProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#max_length DataZedcloudAuthProfile#max_length}
  */
  readonly maxLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#max_password_age DataZedcloudAuthProfile#max_password_age}
  */
  readonly maxPasswordAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#min_length DataZedcloudAuthProfile#min_length}
  */
  readonly minLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#min_lowercase_chars DataZedcloudAuthProfile#min_lowercase_chars}
  */
  readonly minLowercaseChars?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#min_numeric_chars DataZedcloudAuthProfile#min_numeric_chars}
  */
  readonly minNumericChars?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#min_password_age DataZedcloudAuthProfile#min_password_age}
  */
  readonly minPasswordAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#min_symbol_chars DataZedcloudAuthProfile#min_symbol_chars}
  */
  readonly minSymbolChars?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#min_uppercase_chars DataZedcloudAuthProfile#min_uppercase_chars}
  */
  readonly minUppercaseChars?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#num_prev_password_check DataZedcloudAuthProfile#num_prev_password_check}
  */
  readonly numPrevPasswordCheck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#password_expiry_notification_period_in_seconds DataZedcloudAuthProfile#password_expiry_notification_period_in_seconds}
  */
  readonly passwordExpiryNotificationPeriodInSeconds?: number;
}

export function dataZedcloudAuthProfilePasswordProfileToTerraform(struct?: DataZedcloudAuthProfilePasswordProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_length: cdktf.numberToTerraform(struct!.maxLength),
    max_password_age: cdktf.numberToTerraform(struct!.maxPasswordAge),
    min_length: cdktf.numberToTerraform(struct!.minLength),
    min_lowercase_chars: cdktf.numberToTerraform(struct!.minLowercaseChars),
    min_numeric_chars: cdktf.numberToTerraform(struct!.minNumericChars),
    min_password_age: cdktf.numberToTerraform(struct!.minPasswordAge),
    min_symbol_chars: cdktf.numberToTerraform(struct!.minSymbolChars),
    min_uppercase_chars: cdktf.numberToTerraform(struct!.minUppercaseChars),
    num_prev_password_check: cdktf.numberToTerraform(struct!.numPrevPasswordCheck),
    password_expiry_notification_period_in_seconds: cdktf.numberToTerraform(struct!.passwordExpiryNotificationPeriodInSeconds),
  }
}


export function dataZedcloudAuthProfilePasswordProfileToHclTerraform(struct?: DataZedcloudAuthProfilePasswordProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_password_age: {
      value: cdktf.numberToHclTerraform(struct!.maxPasswordAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_length: {
      value: cdktf.numberToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_lowercase_chars: {
      value: cdktf.numberToHclTerraform(struct!.minLowercaseChars),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_numeric_chars: {
      value: cdktf.numberToHclTerraform(struct!.minNumericChars),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_password_age: {
      value: cdktf.numberToHclTerraform(struct!.minPasswordAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_symbol_chars: {
      value: cdktf.numberToHclTerraform(struct!.minSymbolChars),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_uppercase_chars: {
      value: cdktf.numberToHclTerraform(struct!.minUppercaseChars),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_prev_password_check: {
      value: cdktf.numberToHclTerraform(struct!.numPrevPasswordCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password_expiry_notification_period_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.passwordExpiryNotificationPeriodInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudAuthProfilePasswordProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudAuthProfilePasswordProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._maxPasswordAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPasswordAge = this._maxPasswordAge;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    if (this._minLowercaseChars !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLowercaseChars = this._minLowercaseChars;
    }
    if (this._minNumericChars !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNumericChars = this._minNumericChars;
    }
    if (this._minPasswordAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPasswordAge = this._minPasswordAge;
    }
    if (this._minSymbolChars !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSymbolChars = this._minSymbolChars;
    }
    if (this._minUppercaseChars !== undefined) {
      hasAnyValues = true;
      internalValueResult.minUppercaseChars = this._minUppercaseChars;
    }
    if (this._numPrevPasswordCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPrevPasswordCheck = this._numPrevPasswordCheck;
    }
    if (this._passwordExpiryNotificationPeriodInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordExpiryNotificationPeriodInSeconds = this._passwordExpiryNotificationPeriodInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudAuthProfilePasswordProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxLength = undefined;
      this._maxPasswordAge = undefined;
      this._minLength = undefined;
      this._minLowercaseChars = undefined;
      this._minNumericChars = undefined;
      this._minPasswordAge = undefined;
      this._minSymbolChars = undefined;
      this._minUppercaseChars = undefined;
      this._numPrevPasswordCheck = undefined;
      this._passwordExpiryNotificationPeriodInSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxLength = value.maxLength;
      this._maxPasswordAge = value.maxPasswordAge;
      this._minLength = value.minLength;
      this._minLowercaseChars = value.minLowercaseChars;
      this._minNumericChars = value.minNumericChars;
      this._minPasswordAge = value.minPasswordAge;
      this._minSymbolChars = value.minSymbolChars;
      this._minUppercaseChars = value.minUppercaseChars;
      this._numPrevPasswordCheck = value.numPrevPasswordCheck;
      this._passwordExpiryNotificationPeriodInSeconds = value.passwordExpiryNotificationPeriodInSeconds;
    }
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // max_password_age - computed: false, optional: true, required: false
  private _maxPasswordAge?: number; 
  public get maxPasswordAge() {
    return this.getNumberAttribute('max_password_age');
  }
  public set maxPasswordAge(value: number) {
    this._maxPasswordAge = value;
  }
  public resetMaxPasswordAge() {
    this._maxPasswordAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPasswordAgeInput() {
    return this._maxPasswordAge;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // min_lowercase_chars - computed: false, optional: true, required: false
  private _minLowercaseChars?: number; 
  public get minLowercaseChars() {
    return this.getNumberAttribute('min_lowercase_chars');
  }
  public set minLowercaseChars(value: number) {
    this._minLowercaseChars = value;
  }
  public resetMinLowercaseChars() {
    this._minLowercaseChars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLowercaseCharsInput() {
    return this._minLowercaseChars;
  }

  // min_numeric_chars - computed: false, optional: true, required: false
  private _minNumericChars?: number; 
  public get minNumericChars() {
    return this.getNumberAttribute('min_numeric_chars');
  }
  public set minNumericChars(value: number) {
    this._minNumericChars = value;
  }
  public resetMinNumericChars() {
    this._minNumericChars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNumericCharsInput() {
    return this._minNumericChars;
  }

  // min_password_age - computed: false, optional: true, required: false
  private _minPasswordAge?: number; 
  public get minPasswordAge() {
    return this.getNumberAttribute('min_password_age');
  }
  public set minPasswordAge(value: number) {
    this._minPasswordAge = value;
  }
  public resetMinPasswordAge() {
    this._minPasswordAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPasswordAgeInput() {
    return this._minPasswordAge;
  }

  // min_symbol_chars - computed: false, optional: true, required: false
  private _minSymbolChars?: number; 
  public get minSymbolChars() {
    return this.getNumberAttribute('min_symbol_chars');
  }
  public set minSymbolChars(value: number) {
    this._minSymbolChars = value;
  }
  public resetMinSymbolChars() {
    this._minSymbolChars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSymbolCharsInput() {
    return this._minSymbolChars;
  }

  // min_uppercase_chars - computed: false, optional: true, required: false
  private _minUppercaseChars?: number; 
  public get minUppercaseChars() {
    return this.getNumberAttribute('min_uppercase_chars');
  }
  public set minUppercaseChars(value: number) {
    this._minUppercaseChars = value;
  }
  public resetMinUppercaseChars() {
    this._minUppercaseChars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minUppercaseCharsInput() {
    return this._minUppercaseChars;
  }

  // num_prev_password_check - computed: false, optional: true, required: false
  private _numPrevPasswordCheck?: number; 
  public get numPrevPasswordCheck() {
    return this.getNumberAttribute('num_prev_password_check');
  }
  public set numPrevPasswordCheck(value: number) {
    this._numPrevPasswordCheck = value;
  }
  public resetNumPrevPasswordCheck() {
    this._numPrevPasswordCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPrevPasswordCheckInput() {
    return this._numPrevPasswordCheck;
  }

  // password_expiry_notification_period_in_seconds - computed: false, optional: true, required: false
  private _passwordExpiryNotificationPeriodInSeconds?: number; 
  public get passwordExpiryNotificationPeriodInSeconds() {
    return this.getNumberAttribute('password_expiry_notification_period_in_seconds');
  }
  public set passwordExpiryNotificationPeriodInSeconds(value: number) {
    this._passwordExpiryNotificationPeriodInSeconds = value;
  }
  public resetPasswordExpiryNotificationPeriodInSeconds() {
    this._passwordExpiryNotificationPeriodInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordExpiryNotificationPeriodInSecondsInput() {
    return this._passwordExpiryNotificationPeriodInSeconds;
  }
}

export class DataZedcloudAuthProfilePasswordProfileList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudAuthProfilePasswordProfile[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudAuthProfilePasswordProfileOutputReference {
    return new DataZedcloudAuthProfilePasswordProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile zedcloud_auth_profile}
*/
export class DataZedcloudAuthProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zedcloud_auth_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZedcloudAuthProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZedcloudAuthProfile to import
  * @param importFromId The id of the existing DataZedcloudAuthProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZedcloudAuthProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zedcloud_auth_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/auth_profile zedcloud_auth_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZedcloudAuthProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataZedcloudAuthProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'zedcloud_auth_profile',
      terraformGeneratorMetadata: {
        providerName: 'zedcloud',
        providerVersion: '2.5.0',
        providerVersionConstraint: '2.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._defaultRoleId = config.defaultRoleId;
    this._description = config.description;
    this._disableAutoUserCreate = config.disableAutoUserCreate;
    this._enterpriseId = config.enterpriseId;
    this._name = config.name;
    this._profileType = config.profileType;
    this._testOnly = config.testOnly;
    this._title = config.title;
    this._type = config.type;
    this._oauthProfile.internalValue = config.oauthProfile;
    this._passwordProfile.internalValue = config.passwordProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // default_role_id - computed: false, optional: false, required: true
  private _defaultRoleId?: string; 
  public get defaultRoleId() {
    return this.getStringAttribute('default_role_id');
  }
  public set defaultRoleId(value: string) {
    this._defaultRoleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRoleIdInput() {
    return this._defaultRoleId;
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

  // disable_auto_user_create - computed: false, optional: true, required: false
  private _disableAutoUserCreate?: boolean | cdktf.IResolvable; 
  public get disableAutoUserCreate() {
    return this.getBooleanAttribute('disable_auto_user_create');
  }
  public set disableAutoUserCreate(value: boolean | cdktf.IResolvable) {
    this._disableAutoUserCreate = value;
  }
  public resetDisableAutoUserCreate() {
    this._disableAutoUserCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutoUserCreateInput() {
    return this._disableAutoUserCreate;
  }

  // enterprise_id - computed: false, optional: true, required: false
  private _enterpriseId?: string; 
  public get enterpriseId() {
    return this.getStringAttribute('enterprise_id');
  }
  public set enterpriseId(value: string) {
    this._enterpriseId = value;
  }
  public resetEnterpriseId() {
    this._enterpriseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseIdInput() {
    return this._enterpriseId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // profile_type - computed: false, optional: true, required: false
  private _profileType?: string; 
  public get profileType() {
    return this.getStringAttribute('profile_type');
  }
  public set profileType(value: string) {
    this._profileType = value;
  }
  public resetProfileType() {
    this._profileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileTypeInput() {
    return this._profileType;
  }

  // revision - computed: true, optional: false, required: false
  private _revision = new DataZedcloudAuthProfileRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
  }

  // test_only - computed: false, optional: true, required: false
  private _testOnly?: boolean | cdktf.IResolvable; 
  public get testOnly() {
    return this.getBooleanAttribute('test_only');
  }
  public set testOnly(value: boolean | cdktf.IResolvable) {
    this._testOnly = value;
  }
  public resetTestOnly() {
    this._testOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testOnlyInput() {
    return this._testOnly;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // oauth_profile - computed: false, optional: true, required: false
  private _oauthProfile = new DataZedcloudAuthProfileOauthProfileList(this, "oauth_profile", false);
  public get oauthProfile() {
    return this._oauthProfile;
  }
  public putOauthProfile(value: DataZedcloudAuthProfileOauthProfile[] | cdktf.IResolvable) {
    this._oauthProfile.internalValue = value;
  }
  public resetOauthProfile() {
    this._oauthProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthProfileInput() {
    return this._oauthProfile.internalValue;
  }

  // password_profile - computed: false, optional: true, required: false
  private _passwordProfile = new DataZedcloudAuthProfilePasswordProfileList(this, "password_profile", false);
  public get passwordProfile() {
    return this._passwordProfile;
  }
  public putPasswordProfile(value: DataZedcloudAuthProfilePasswordProfile[] | cdktf.IResolvable) {
    this._passwordProfile.internalValue = value;
  }
  public resetPasswordProfile() {
    this._passwordProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordProfileInput() {
    return this._passwordProfile.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      default_role_id: cdktf.stringToTerraform(this._defaultRoleId),
      description: cdktf.stringToTerraform(this._description),
      disable_auto_user_create: cdktf.booleanToTerraform(this._disableAutoUserCreate),
      enterprise_id: cdktf.stringToTerraform(this._enterpriseId),
      name: cdktf.stringToTerraform(this._name),
      profile_type: cdktf.stringToTerraform(this._profileType),
      test_only: cdktf.booleanToTerraform(this._testOnly),
      title: cdktf.stringToTerraform(this._title),
      type: cdktf.stringToTerraform(this._type),
      oauth_profile: cdktf.listMapper(dataZedcloudAuthProfileOauthProfileToTerraform, true)(this._oauthProfile.internalValue),
      password_profile: cdktf.listMapper(dataZedcloudAuthProfilePasswordProfileToTerraform, true)(this._passwordProfile.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_role_id: {
        value: cdktf.stringToHclTerraform(this._defaultRoleId),
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
      disable_auto_user_create: {
        value: cdktf.booleanToHclTerraform(this._disableAutoUserCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enterprise_id: {
        value: cdktf.stringToHclTerraform(this._enterpriseId),
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
      profile_type: {
        value: cdktf.stringToHclTerraform(this._profileType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      test_only: {
        value: cdktf.booleanToHclTerraform(this._testOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_profile: {
        value: cdktf.listMapperHcl(dataZedcloudAuthProfileOauthProfileToHclTerraform, true)(this._oauthProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudAuthProfileOauthProfileList",
      },
      password_profile: {
        value: cdktf.listMapperHcl(dataZedcloudAuthProfilePasswordProfileToHclTerraform, true)(this._passwordProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudAuthProfilePasswordProfileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
