// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/oauth_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingfederateOauthClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * A unique identifier the client provides to the Resource Server to identify itself. This identifier is included with every request the client makes. For PUT requests, this field is optional and it will be overridden by the 'id' parameter of the PUT request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/oauth_client#client_id DataPingfederateOauthClient#client_id}
  */
  readonly clientId: string;
}
export interface DataPingfederateOauthClientClientAuthSecondarySecrets {
}

export function dataPingfederateOauthClientClientAuthSecondarySecretsToTerraform(struct?: DataPingfederateOauthClientClientAuthSecondarySecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOauthClientClientAuthSecondarySecretsToHclTerraform(struct?: DataPingfederateOauthClientClientAuthSecondarySecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOauthClientClientAuthSecondarySecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPingfederateOauthClientClientAuthSecondarySecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOauthClientClientAuthSecondarySecrets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encrypted_secret - computed: true, optional: false, required: false
  public get encryptedSecret() {
    return this.getStringAttribute('encrypted_secret');
  }

  // expiry_time - computed: true, optional: false, required: false
  public get expiryTime() {
    return this.getStringAttribute('expiry_time');
  }
}

export class DataPingfederateOauthClientClientAuthSecondarySecretsList extends cdktf.ComplexList {

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
  public get(index: number): DataPingfederateOauthClientClientAuthSecondarySecretsOutputReference {
    return new DataPingfederateOauthClientClientAuthSecondarySecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPingfederateOauthClientClientAuth {
}

export function dataPingfederateOauthClientClientAuthToTerraform(struct?: DataPingfederateOauthClientClientAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOauthClientClientAuthToHclTerraform(struct?: DataPingfederateOauthClientClientAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOauthClientClientAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateOauthClientClientAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOauthClientClientAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_cert_issuer_dn - computed: true, optional: false, required: false
  public get clientCertIssuerDn() {
    return this.getStringAttribute('client_cert_issuer_dn');
  }

  // client_cert_subject_dn - computed: true, optional: false, required: false
  public get clientCertSubjectDn() {
    return this.getStringAttribute('client_cert_subject_dn');
  }

  // encrypted_secret - computed: true, optional: false, required: false
  public get encryptedSecret() {
    return this.getStringAttribute('encrypted_secret');
  }

  // enforce_replay_prevention - computed: true, optional: false, required: false
  public get enforceReplayPrevention() {
    return this.getBooleanAttribute('enforce_replay_prevention');
  }

  // secondary_secrets - computed: true, optional: false, required: false
  private _secondarySecrets = new DataPingfederateOauthClientClientAuthSecondarySecretsList(this, "secondary_secrets", false);
  public get secondarySecrets() {
    return this._secondarySecrets;
  }

  // token_endpoint_auth_signing_algorithm - computed: true, optional: false, required: false
  public get tokenEndpointAuthSigningAlgorithm() {
    return this.getStringAttribute('token_endpoint_auth_signing_algorithm');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataPingfederateOauthClientDefaultAccessTokenManagerRef {
}

export function dataPingfederateOauthClientDefaultAccessTokenManagerRefToTerraform(struct?: DataPingfederateOauthClientDefaultAccessTokenManagerRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOauthClientDefaultAccessTokenManagerRefToHclTerraform(struct?: DataPingfederateOauthClientDefaultAccessTokenManagerRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOauthClientDefaultAccessTokenManagerRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateOauthClientDefaultAccessTokenManagerRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOauthClientDefaultAccessTokenManagerRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateOauthClientExtendedParameters {
}

export function dataPingfederateOauthClientExtendedParametersToTerraform(struct?: DataPingfederateOauthClientExtendedParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOauthClientExtendedParametersToHclTerraform(struct?: DataPingfederateOauthClientExtendedParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOauthClientExtendedParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPingfederateOauthClientExtendedParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOauthClientExtendedParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}

export class DataPingfederateOauthClientExtendedParametersMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataPingfederateOauthClientExtendedParametersOutputReference {
    return new DataPingfederateOauthClientExtendedParametersOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPingfederateOauthClientJwksSettings {
}

export function dataPingfederateOauthClientJwksSettingsToTerraform(struct?: DataPingfederateOauthClientJwksSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOauthClientJwksSettingsToHclTerraform(struct?: DataPingfederateOauthClientJwksSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOauthClientJwksSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateOauthClientJwksSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOauthClientJwksSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // jwks - computed: true, optional: false, required: false
  public get jwks() {
    return this.getStringAttribute('jwks');
  }

  // jwks_url - computed: true, optional: false, required: false
  public get jwksUrl() {
    return this.getStringAttribute('jwks_url');
  }
}
export interface DataPingfederateOauthClientOidcPolicyPolicyGroup {
}

export function dataPingfederateOauthClientOidcPolicyPolicyGroupToTerraform(struct?: DataPingfederateOauthClientOidcPolicyPolicyGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOauthClientOidcPolicyPolicyGroupToHclTerraform(struct?: DataPingfederateOauthClientOidcPolicyPolicyGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOauthClientOidcPolicyPolicyGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateOauthClientOidcPolicyPolicyGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOauthClientOidcPolicyPolicyGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateOauthClientOidcPolicy {
}

export function dataPingfederateOauthClientOidcPolicyToTerraform(struct?: DataPingfederateOauthClientOidcPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOauthClientOidcPolicyToHclTerraform(struct?: DataPingfederateOauthClientOidcPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOauthClientOidcPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateOauthClientOidcPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOauthClientOidcPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // back_channel_logout_uri - computed: true, optional: false, required: false
  public get backChannelLogoutUri() {
    return this.getStringAttribute('back_channel_logout_uri');
  }

  // grant_access_session_revocation_api - computed: true, optional: false, required: false
  public get grantAccessSessionRevocationApi() {
    return this.getBooleanAttribute('grant_access_session_revocation_api');
  }

  // grant_access_session_session_management_api - computed: true, optional: false, required: false
  public get grantAccessSessionSessionManagementApi() {
    return this.getBooleanAttribute('grant_access_session_session_management_api');
  }

  // id_token_content_encryption_algorithm - computed: true, optional: false, required: false
  public get idTokenContentEncryptionAlgorithm() {
    return this.getStringAttribute('id_token_content_encryption_algorithm');
  }

  // id_token_encryption_algorithm - computed: true, optional: false, required: false
  public get idTokenEncryptionAlgorithm() {
    return this.getStringAttribute('id_token_encryption_algorithm');
  }

  // id_token_signing_algorithm - computed: true, optional: false, required: false
  public get idTokenSigningAlgorithm() {
    return this.getStringAttribute('id_token_signing_algorithm');
  }

  // logout_mode - computed: true, optional: false, required: false
  public get logoutMode() {
    return this.getStringAttribute('logout_mode');
  }

  // logout_uris - computed: true, optional: false, required: false
  public get logoutUris() {
    return cdktf.Fn.tolist(this.getListAttribute('logout_uris'));
  }

  // pairwise_identifier_user_type - computed: true, optional: false, required: false
  public get pairwiseIdentifierUserType() {
    return this.getBooleanAttribute('pairwise_identifier_user_type');
  }

  // ping_access_logout_capable - computed: true, optional: false, required: false
  public get pingAccessLogoutCapable() {
    return this.getBooleanAttribute('ping_access_logout_capable');
  }

  // policy_group - computed: true, optional: false, required: false
  private _policyGroup = new DataPingfederateOauthClientOidcPolicyPolicyGroupOutputReference(this, "policy_group");
  public get policyGroup() {
    return this._policyGroup;
  }

  // post_logout_redirect_uris - computed: true, optional: false, required: false
  public get postLogoutRedirectUris() {
    return cdktf.Fn.tolist(this.getListAttribute('post_logout_redirect_uris'));
  }

  // sector_identifier_uri - computed: true, optional: false, required: false
  public get sectorIdentifierUri() {
    return this.getStringAttribute('sector_identifier_uri');
  }

  // user_info_response_content_encryption_algorithm - computed: true, optional: false, required: false
  public get userInfoResponseContentEncryptionAlgorithm() {
    return this.getStringAttribute('user_info_response_content_encryption_algorithm');
  }

  // user_info_response_encryption_algorithm - computed: true, optional: false, required: false
  public get userInfoResponseEncryptionAlgorithm() {
    return this.getStringAttribute('user_info_response_encryption_algorithm');
  }

  // user_info_response_signing_algorithm - computed: true, optional: false, required: false
  public get userInfoResponseSigningAlgorithm() {
    return this.getStringAttribute('user_info_response_signing_algorithm');
  }
}
export interface DataPingfederateOauthClientRequestPolicyRef {
}

export function dataPingfederateOauthClientRequestPolicyRefToTerraform(struct?: DataPingfederateOauthClientRequestPolicyRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOauthClientRequestPolicyRefToHclTerraform(struct?: DataPingfederateOauthClientRequestPolicyRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOauthClientRequestPolicyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateOauthClientRequestPolicyRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOauthClientRequestPolicyRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export interface DataPingfederateOauthClientTokenExchangeProcessorPolicyRef {
}

export function dataPingfederateOauthClientTokenExchangeProcessorPolicyRefToTerraform(struct?: DataPingfederateOauthClientTokenExchangeProcessorPolicyRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPingfederateOauthClientTokenExchangeProcessorPolicyRefToHclTerraform(struct?: DataPingfederateOauthClientTokenExchangeProcessorPolicyRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPingfederateOauthClientTokenExchangeProcessorPolicyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPingfederateOauthClientTokenExchangeProcessorPolicyRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPingfederateOauthClientTokenExchangeProcessorPolicyRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/oauth_client pingfederate_oauth_client}
*/
export class DataPingfederateOauthClient extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_oauth_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingfederateOauthClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingfederateOauthClient to import
  * @param importFromId The id of the existing DataPingfederateOauthClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/oauth_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingfederateOauthClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_oauth_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/data-sources/oauth_client pingfederate_oauth_client} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingfederateOauthClientConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingfederateOauthClientConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_oauth_client',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientId = config.clientId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_authentication_api_init - computed: true, optional: false, required: false
  public get allowAuthenticationApiInit() {
    return this.getBooleanAttribute('allow_authentication_api_init');
  }

  // authorization_detail_types - computed: true, optional: false, required: false
  public get authorizationDetailTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('authorization_detail_types'));
  }

  // bypass_activation_code_confirmation_override - computed: true, optional: false, required: false
  public get bypassActivationCodeConfirmationOverride() {
    return this.getBooleanAttribute('bypass_activation_code_confirmation_override');
  }

  // bypass_approval_page - computed: true, optional: false, required: false
  public get bypassApprovalPage() {
    return this.getBooleanAttribute('bypass_approval_page');
  }

  // ciba_delivery_mode - computed: true, optional: false, required: false
  public get cibaDeliveryMode() {
    return this.getStringAttribute('ciba_delivery_mode');
  }

  // ciba_notification_endpoint - computed: true, optional: false, required: false
  public get cibaNotificationEndpoint() {
    return this.getStringAttribute('ciba_notification_endpoint');
  }

  // ciba_polling_interval - computed: true, optional: false, required: false
  public get cibaPollingInterval() {
    return this.getNumberAttribute('ciba_polling_interval');
  }

  // ciba_request_object_signing_algorithm - computed: true, optional: false, required: false
  public get cibaRequestObjectSigningAlgorithm() {
    return this.getStringAttribute('ciba_request_object_signing_algorithm');
  }

  // ciba_require_signed_requests - computed: true, optional: false, required: false
  public get cibaRequireSignedRequests() {
    return this.getBooleanAttribute('ciba_require_signed_requests');
  }

  // ciba_user_code_supported - computed: true, optional: false, required: false
  public get cibaUserCodeSupported() {
    return this.getBooleanAttribute('ciba_user_code_supported');
  }

  // client_auth - computed: true, optional: false, required: false
  private _clientAuth = new DataPingfederateOauthClientClientAuthOutputReference(this, "client_auth");
  public get clientAuth() {
    return this._clientAuth;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret_changed_time - computed: true, optional: false, required: false
  public get clientSecretChangedTime() {
    return this.getStringAttribute('client_secret_changed_time');
  }

  // client_secret_retention_period - computed: true, optional: false, required: false
  public get clientSecretRetentionPeriod() {
    return this.getNumberAttribute('client_secret_retention_period');
  }

  // client_secret_retention_period_type - computed: true, optional: false, required: false
  public get clientSecretRetentionPeriodType() {
    return this.getStringAttribute('client_secret_retention_period_type');
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // default_access_token_manager_ref - computed: true, optional: false, required: false
  private _defaultAccessTokenManagerRef = new DataPingfederateOauthClientDefaultAccessTokenManagerRefOutputReference(this, "default_access_token_manager_ref");
  public get defaultAccessTokenManagerRef() {
    return this._defaultAccessTokenManagerRef;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_flow_setting_type - computed: true, optional: false, required: false
  public get deviceFlowSettingType() {
    return this.getStringAttribute('device_flow_setting_type');
  }

  // device_polling_interval_override - computed: true, optional: false, required: false
  public get devicePollingIntervalOverride() {
    return this.getNumberAttribute('device_polling_interval_override');
  }

  // enable_cookieless_authentication_api - computed: true, optional: false, required: false
  public get enableCookielessAuthenticationApi() {
    return this.getBooleanAttribute('enable_cookieless_authentication_api');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // exclusive_scopes - computed: true, optional: false, required: false
  public get exclusiveScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('exclusive_scopes'));
  }

  // extended_parameters - computed: true, optional: false, required: false
  private _extendedParameters = new DataPingfederateOauthClientExtendedParametersMap(this, "extended_parameters");
  public get extendedParameters() {
    return this._extendedParameters;
  }

  // grant_types - computed: true, optional: false, required: false
  public get grantTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('grant_types'));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // jwks_settings - computed: true, optional: false, required: false
  private _jwksSettings = new DataPingfederateOauthClientJwksSettingsOutputReference(this, "jwks_settings");
  public get jwksSettings() {
    return this._jwksSettings;
  }

  // jwt_secured_authorization_response_mode_content_encryption_algorithm - computed: true, optional: false, required: false
  public get jwtSecuredAuthorizationResponseModeContentEncryptionAlgorithm() {
    return this.getStringAttribute('jwt_secured_authorization_response_mode_content_encryption_algorithm');
  }

  // jwt_secured_authorization_response_mode_encryption_algorithm - computed: true, optional: false, required: false
  public get jwtSecuredAuthorizationResponseModeEncryptionAlgorithm() {
    return this.getStringAttribute('jwt_secured_authorization_response_mode_encryption_algorithm');
  }

  // jwt_secured_authorization_response_mode_signing_algorithm - computed: true, optional: false, required: false
  public get jwtSecuredAuthorizationResponseModeSigningAlgorithm() {
    return this.getStringAttribute('jwt_secured_authorization_response_mode_signing_algorithm');
  }

  // lockout_max_malicious_actions - computed: true, optional: false, required: false
  public get lockoutMaxMaliciousActions() {
    return this.getNumberAttribute('lockout_max_malicious_actions');
  }

  // lockout_max_malicious_actions_type - computed: true, optional: false, required: false
  public get lockoutMaxMaliciousActionsType() {
    return this.getStringAttribute('lockout_max_malicious_actions_type');
  }

  // logo_url - computed: true, optional: false, required: false
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }

  // modification_date - computed: true, optional: false, required: false
  public get modificationDate() {
    return this.getStringAttribute('modification_date');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // offline_access_require_consent_prompt - computed: true, optional: false, required: false
  public get offlineAccessRequireConsentPrompt() {
    return this.getStringAttribute('offline_access_require_consent_prompt');
  }

  // oidc_policy - computed: true, optional: false, required: false
  private _oidcPolicy = new DataPingfederateOauthClientOidcPolicyOutputReference(this, "oidc_policy");
  public get oidcPolicy() {
    return this._oidcPolicy;
  }

  // pending_authorization_timeout_override - computed: true, optional: false, required: false
  public get pendingAuthorizationTimeoutOverride() {
    return this.getNumberAttribute('pending_authorization_timeout_override');
  }

  // persistent_grant_expiration_time - computed: true, optional: false, required: false
  public get persistentGrantExpirationTime() {
    return this.getNumberAttribute('persistent_grant_expiration_time');
  }

  // persistent_grant_expiration_time_unit - computed: true, optional: false, required: false
  public get persistentGrantExpirationTimeUnit() {
    return this.getStringAttribute('persistent_grant_expiration_time_unit');
  }

  // persistent_grant_expiration_type - computed: true, optional: false, required: false
  public get persistentGrantExpirationType() {
    return this.getStringAttribute('persistent_grant_expiration_type');
  }

  // persistent_grant_idle_timeout - computed: true, optional: false, required: false
  public get persistentGrantIdleTimeout() {
    return this.getNumberAttribute('persistent_grant_idle_timeout');
  }

  // persistent_grant_idle_timeout_time_unit - computed: true, optional: false, required: false
  public get persistentGrantIdleTimeoutTimeUnit() {
    return this.getStringAttribute('persistent_grant_idle_timeout_time_unit');
  }

  // persistent_grant_idle_timeout_type - computed: true, optional: false, required: false
  public get persistentGrantIdleTimeoutType() {
    return this.getStringAttribute('persistent_grant_idle_timeout_type');
  }

  // persistent_grant_reuse_grant_types - computed: true, optional: false, required: false
  public get persistentGrantReuseGrantTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('persistent_grant_reuse_grant_types'));
  }

  // persistent_grant_reuse_type - computed: true, optional: false, required: false
  public get persistentGrantReuseType() {
    return this.getStringAttribute('persistent_grant_reuse_type');
  }

  // redirect_uris - computed: true, optional: false, required: false
  public get redirectUris() {
    return cdktf.Fn.tolist(this.getListAttribute('redirect_uris'));
  }

  // refresh_rolling - computed: true, optional: false, required: false
  public get refreshRolling() {
    return this.getStringAttribute('refresh_rolling');
  }

  // refresh_token_rolling_grace_period - computed: true, optional: false, required: false
  public get refreshTokenRollingGracePeriod() {
    return this.getNumberAttribute('refresh_token_rolling_grace_period');
  }

  // refresh_token_rolling_grace_period_type - computed: true, optional: false, required: false
  public get refreshTokenRollingGracePeriodType() {
    return this.getStringAttribute('refresh_token_rolling_grace_period_type');
  }

  // refresh_token_rolling_interval - computed: true, optional: false, required: false
  public get refreshTokenRollingInterval() {
    return this.getNumberAttribute('refresh_token_rolling_interval');
  }

  // refresh_token_rolling_interval_time_unit - computed: true, optional: false, required: false
  public get refreshTokenRollingIntervalTimeUnit() {
    return this.getStringAttribute('refresh_token_rolling_interval_time_unit');
  }

  // refresh_token_rolling_interval_type - computed: true, optional: false, required: false
  public get refreshTokenRollingIntervalType() {
    return this.getStringAttribute('refresh_token_rolling_interval_type');
  }

  // request_object_signing_algorithm - computed: true, optional: false, required: false
  public get requestObjectSigningAlgorithm() {
    return this.getStringAttribute('request_object_signing_algorithm');
  }

  // request_policy_ref - computed: true, optional: false, required: false
  private _requestPolicyRef = new DataPingfederateOauthClientRequestPolicyRefOutputReference(this, "request_policy_ref");
  public get requestPolicyRef() {
    return this._requestPolicyRef;
  }

  // require_dpop - computed: true, optional: false, required: false
  public get requireDpop() {
    return this.getBooleanAttribute('require_dpop');
  }

  // require_jwt_secured_authorization_response_mode - computed: true, optional: false, required: false
  public get requireJwtSecuredAuthorizationResponseMode() {
    return this.getBooleanAttribute('require_jwt_secured_authorization_response_mode');
  }

  // require_offline_access_scope_to_issue_refresh_tokens - computed: true, optional: false, required: false
  public get requireOfflineAccessScopeToIssueRefreshTokens() {
    return this.getStringAttribute('require_offline_access_scope_to_issue_refresh_tokens');
  }

  // require_proof_key_for_code_exchange - computed: true, optional: false, required: false
  public get requireProofKeyForCodeExchange() {
    return this.getBooleanAttribute('require_proof_key_for_code_exchange');
  }

  // require_pushed_authorization_requests - computed: true, optional: false, required: false
  public get requirePushedAuthorizationRequests() {
    return this.getBooleanAttribute('require_pushed_authorization_requests');
  }

  // require_signed_requests - computed: true, optional: false, required: false
  public get requireSignedRequests() {
    return this.getBooleanAttribute('require_signed_requests');
  }

  // restrict_scopes - computed: true, optional: false, required: false
  public get restrictScopes() {
    return this.getBooleanAttribute('restrict_scopes');
  }

  // restrict_to_default_access_token_manager - computed: true, optional: false, required: false
  public get restrictToDefaultAccessTokenManager() {
    return this.getBooleanAttribute('restrict_to_default_access_token_manager');
  }

  // restricted_response_types - computed: true, optional: false, required: false
  public get restrictedResponseTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('restricted_response_types'));
  }

  // restricted_scopes - computed: true, optional: false, required: false
  public get restrictedScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('restricted_scopes'));
  }

  // token_exchange_processor_policy_ref - computed: true, optional: false, required: false
  private _tokenExchangeProcessorPolicyRef = new DataPingfederateOauthClientTokenExchangeProcessorPolicyRefOutputReference(this, "token_exchange_processor_policy_ref");
  public get tokenExchangeProcessorPolicyRef() {
    return this._tokenExchangeProcessorPolicyRef;
  }

  // token_introspection_content_encryption_algorithm - computed: true, optional: false, required: false
  public get tokenIntrospectionContentEncryptionAlgorithm() {
    return this.getStringAttribute('token_introspection_content_encryption_algorithm');
  }

  // token_introspection_encryption_algorithm - computed: true, optional: false, required: false
  public get tokenIntrospectionEncryptionAlgorithm() {
    return this.getStringAttribute('token_introspection_encryption_algorithm');
  }

  // token_introspection_signing_algorithm - computed: true, optional: false, required: false
  public get tokenIntrospectionSigningAlgorithm() {
    return this.getStringAttribute('token_introspection_signing_algorithm');
  }

  // user_authorization_url_override - computed: true, optional: false, required: false
  public get userAuthorizationUrlOverride() {
    return this.getStringAttribute('user_authorization_url_override');
  }

  // validate_using_all_eligible_atms - computed: true, optional: false, required: false
  public get validateUsingAllEligibleAtms() {
    return this.getBooleanAttribute('validate_using_all_eligible_atms');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
