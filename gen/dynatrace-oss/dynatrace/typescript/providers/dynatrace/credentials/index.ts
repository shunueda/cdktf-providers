// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow ad-hoc functions to access the credential details (requires the APP_ENGINE scope).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#allow_contextless_requests Credentials#allow_contextless_requests}
  */
  readonly allowContextlessRequests?: boolean | cdktf.IResolvable;
  /**
  * The certificate in the string format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#certificate Credentials#certificate}
  */
  readonly certificate?: string;
  /**
  * A short description of the credentials set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#description Credentials#description}
  */
  readonly description?: string;
  /**
  * The certificate format. Possible values are `PEM`, `PKCS12` and `UNKNOWN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#format Credentials#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#id Credentials#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the credentials set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#name Credentials#name}
  */
  readonly name: string;
  /**
  * The credentials set is available to every user (`false`) or to owner only (`true`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#owner_access_only Credentials#owner_access_only}
  */
  readonly ownerAccessOnly?: boolean | cdktf.IResolvable;
  /**
  * The password of the credential. Note: Terraform treats an empty string for a value as if the attribute was absent. If you want to set an empty password, use the value `--empty--`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#password Credentials#password}
  */
  readonly password?: string;
  /**
  * For certificate authentication specifies whether it's public certificate auth (`true`) or not (`false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#public Credentials#public}
  */
  readonly public?: boolean | cdktf.IResolvable;
  /**
  * The scope of the credentials set. Possible values are `ALL`, `APP_ENGINE`, `EXTENSION` and `SYNTHETIC`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#scope Credentials#scope}
  */
  readonly scope?: string;
  /**
  * The set of scopes of the credentials set. Possible values are `APP_ENGINE` and `SYNTHETIC`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#scopes Credentials#scopes}
  */
  readonly scopes?: string[];
  /**
  * Token in the string format. Specifying a token implies `Token Authentication`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#token Credentials#token}
  */
  readonly token?: string;
  /**
  * The username of the credentials set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#username Credentials#username}
  */
  readonly username?: string;
  /**
  * allowed_entities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#allowed_entities Credentials#allowed_entities}
  */
  readonly allowedEntities?: CredentialsAllowedEntities;
  /**
  * credential_usage_summary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#credential_usage_summary Credentials#credential_usage_summary}
  */
  readonly credentialUsageSummary?: CredentialsCredentialUsageSummary[] | cdktf.IResolvable;
  /**
  * external block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#external Credentials#external}
  */
  readonly external?: CredentialsExternal;
}
export interface CredentialsAllowedEntitiesEntity {
  /**
  * ID of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#id Credentials#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of entity. Possible values: `USER`, `APPLICATION`, `UNKNOWN`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#type Credentials#type}
  */
  readonly type?: string;
}

export function credentialsAllowedEntitiesEntityToTerraform(struct?: CredentialsAllowedEntitiesEntity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function credentialsAllowedEntitiesEntityToHclTerraform(struct?: CredentialsAllowedEntitiesEntity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialsAllowedEntitiesEntityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CredentialsAllowedEntitiesEntity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialsAllowedEntitiesEntity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class CredentialsAllowedEntitiesEntityList extends cdktf.ComplexList {
  public internalValue? : CredentialsAllowedEntitiesEntity[] | cdktf.IResolvable

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
  public get(index: number): CredentialsAllowedEntitiesEntityOutputReference {
    return new CredentialsAllowedEntitiesEntityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CredentialsAllowedEntities {
  /**
  * entity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#entity Credentials#entity}
  */
  readonly entity: CredentialsAllowedEntitiesEntity[] | cdktf.IResolvable;
}

export function credentialsAllowedEntitiesToTerraform(struct?: CredentialsAllowedEntitiesOutputReference | CredentialsAllowedEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity: cdktf.listMapper(credentialsAllowedEntitiesEntityToTerraform, true)(struct!.entity),
  }
}


export function credentialsAllowedEntitiesToHclTerraform(struct?: CredentialsAllowedEntitiesOutputReference | CredentialsAllowedEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity: {
      value: cdktf.listMapperHcl(credentialsAllowedEntitiesEntityToHclTerraform, true)(struct!.entity),
      isBlock: true,
      type: "set",
      storageClassType: "CredentialsAllowedEntitiesEntityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialsAllowedEntitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CredentialsAllowedEntities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entity = this._entity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialsAllowedEntities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entity.internalValue = value.entity;
    }
  }

  // entity - computed: false, optional: false, required: true
  private _entity = new CredentialsAllowedEntitiesEntityList(this, "entity", true);
  public get entity() {
    return this._entity;
  }
  public putEntity(value: CredentialsAllowedEntitiesEntity[] | cdktf.IResolvable) {
    this._entity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityInput() {
    return this._entity.internalValue;
  }
}
export interface CredentialsCredentialUsageSummary {
  /**
  * The number of uses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#count Credentials#count}
  */
  readonly count: number;
  /**
  * Type of usage, `HTTP_MONITOR` or `BROWSER_MONITOR`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#type Credentials#type}
  */
  readonly type: string;
}

export function credentialsCredentialUsageSummaryToTerraform(struct?: CredentialsCredentialUsageSummary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function credentialsCredentialUsageSummaryToHclTerraform(struct?: CredentialsCredentialUsageSummary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialsCredentialUsageSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CredentialsCredentialUsageSummary | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialsCredentialUsageSummary | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._type = value.type;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CredentialsCredentialUsageSummaryList extends cdktf.ComplexList {
  public internalValue? : CredentialsCredentialUsageSummary[] | cdktf.IResolvable

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
  public get(index: number): CredentialsCredentialUsageSummaryOutputReference {
    return new CredentialsCredentialUsageSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CredentialsExternal {
  /**
  * Required for Hashicorp Certificate. The ID of Credentials within the Certificate Vault holding the certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#certificate Credentials#certificate}
  */
  readonly certificate?: string;
  /**
  * Required for Azure Client Secret. No further documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#client_secret Credentials#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Required for Azure Client Secret. No further documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#clientid Credentials#clientid}
  */
  readonly clientid?: string;
  /**
  * No documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#credentials_used_for_external_synchronization Credentials#credentials_used_for_external_synchronization}
  */
  readonly credentialsUsedForExternalSynchronization?: string[];
  /**
  * No documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#password_secret_name Credentials#password_secret_name}
  */
  readonly passwordSecretName?: string;
  /**
  * Required for Hashicorp App Role or Hashicorp Certificate. No further documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#path_to_credentials Credentials#path_to_credentials}
  */
  readonly pathToCredentials?: string;
  /**
  * Required for Hashicorp App Role. No further documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#roleid Credentials#roleid}
  */
  readonly roleid?: string;
  /**
  * Required for Hashicorp App Role. The ID of Credentials within the Certificate Vault holding the secret id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#secretid Credentials#secretid}
  */
  readonly secretid?: string;
  /**
  * Required for Azure Client Secret. No further documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#tenantid Credentials#tenantid}
  */
  readonly tenantid?: string;
  /**
  * No documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#token_secret_name Credentials#token_secret_name}
  */
  readonly tokenSecretName?: string;
  /**
  * No documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#username_secret_name Credentials#username_secret_name}
  */
  readonly usernameSecretName?: string;
  /**
  * Required for Hashicorp App Role. No further documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#vault_namespace Credentials#vault_namespace}
  */
  readonly vaultNamespace?: string;
  /**
  * No documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#vault_url Credentials#vault_url}
  */
  readonly vaultUrl?: string;
}

export function credentialsExternalToTerraform(struct?: CredentialsExternalOutputReference | CredentialsExternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    clientid: cdktf.stringToTerraform(struct!.clientid),
    credentials_used_for_external_synchronization: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.credentialsUsedForExternalSynchronization),
    password_secret_name: cdktf.stringToTerraform(struct!.passwordSecretName),
    path_to_credentials: cdktf.stringToTerraform(struct!.pathToCredentials),
    roleid: cdktf.stringToTerraform(struct!.roleid),
    secretid: cdktf.stringToTerraform(struct!.secretid),
    tenantid: cdktf.stringToTerraform(struct!.tenantid),
    token_secret_name: cdktf.stringToTerraform(struct!.tokenSecretName),
    username_secret_name: cdktf.stringToTerraform(struct!.usernameSecretName),
    vault_namespace: cdktf.stringToTerraform(struct!.vaultNamespace),
    vault_url: cdktf.stringToTerraform(struct!.vaultUrl),
  }
}


export function credentialsExternalToHclTerraform(struct?: CredentialsExternalOutputReference | CredentialsExternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
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
    clientid: {
      value: cdktf.stringToHclTerraform(struct!.clientid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_used_for_external_synchronization: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.credentialsUsedForExternalSynchronization),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    password_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.passwordSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_to_credentials: {
      value: cdktf.stringToHclTerraform(struct!.pathToCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roleid: {
      value: cdktf.stringToHclTerraform(struct!.roleid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secretid: {
      value: cdktf.stringToHclTerraform(struct!.secretid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenantid: {
      value: cdktf.stringToHclTerraform(struct!.tenantid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.tokenSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.usernameSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_namespace: {
      value: cdktf.stringToHclTerraform(struct!.vaultNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_url: {
      value: cdktf.stringToHclTerraform(struct!.vaultUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialsExternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CredentialsExternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._clientid !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientid = this._clientid;
    }
    if (this._credentialsUsedForExternalSynchronization !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsUsedForExternalSynchronization = this._credentialsUsedForExternalSynchronization;
    }
    if (this._passwordSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretName = this._passwordSecretName;
    }
    if (this._pathToCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathToCredentials = this._pathToCredentials;
    }
    if (this._roleid !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleid = this._roleid;
    }
    if (this._secretid !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretid = this._secretid;
    }
    if (this._tenantid !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantid = this._tenantid;
    }
    if (this._tokenSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenSecretName = this._tokenSecretName;
    }
    if (this._usernameSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameSecretName = this._usernameSecretName;
    }
    if (this._vaultNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultNamespace = this._vaultNamespace;
    }
    if (this._vaultUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultUrl = this._vaultUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialsExternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificate = undefined;
      this._clientSecret = undefined;
      this._clientid = undefined;
      this._credentialsUsedForExternalSynchronization = undefined;
      this._passwordSecretName = undefined;
      this._pathToCredentials = undefined;
      this._roleid = undefined;
      this._secretid = undefined;
      this._tenantid = undefined;
      this._tokenSecretName = undefined;
      this._usernameSecretName = undefined;
      this._vaultNamespace = undefined;
      this._vaultUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificate = value.certificate;
      this._clientSecret = value.clientSecret;
      this._clientid = value.clientid;
      this._credentialsUsedForExternalSynchronization = value.credentialsUsedForExternalSynchronization;
      this._passwordSecretName = value.passwordSecretName;
      this._pathToCredentials = value.pathToCredentials;
      this._roleid = value.roleid;
      this._secretid = value.secretid;
      this._tenantid = value.tenantid;
      this._tokenSecretName = value.tokenSecretName;
      this._usernameSecretName = value.usernameSecretName;
      this._vaultNamespace = value.vaultNamespace;
      this._vaultUrl = value.vaultUrl;
    }
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
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

  // clientid - computed: false, optional: true, required: false
  private _clientid?: string; 
  public get clientid() {
    return this.getStringAttribute('clientid');
  }
  public set clientid(value: string) {
    this._clientid = value;
  }
  public resetClientid() {
    this._clientid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientidInput() {
    return this._clientid;
  }

  // credentials_used_for_external_synchronization - computed: false, optional: true, required: false
  private _credentialsUsedForExternalSynchronization?: string[]; 
  public get credentialsUsedForExternalSynchronization() {
    return cdktf.Fn.tolist(this.getListAttribute('credentials_used_for_external_synchronization'));
  }
  public set credentialsUsedForExternalSynchronization(value: string[]) {
    this._credentialsUsedForExternalSynchronization = value;
  }
  public resetCredentialsUsedForExternalSynchronization() {
    this._credentialsUsedForExternalSynchronization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsUsedForExternalSynchronizationInput() {
    return this._credentialsUsedForExternalSynchronization;
  }

  // password_secret_name - computed: false, optional: true, required: false
  private _passwordSecretName?: string; 
  public get passwordSecretName() {
    return this.getStringAttribute('password_secret_name');
  }
  public set passwordSecretName(value: string) {
    this._passwordSecretName = value;
  }
  public resetPasswordSecretName() {
    this._passwordSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretNameInput() {
    return this._passwordSecretName;
  }

  // path_to_credentials - computed: false, optional: true, required: false
  private _pathToCredentials?: string; 
  public get pathToCredentials() {
    return this.getStringAttribute('path_to_credentials');
  }
  public set pathToCredentials(value: string) {
    this._pathToCredentials = value;
  }
  public resetPathToCredentials() {
    this._pathToCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathToCredentialsInput() {
    return this._pathToCredentials;
  }

  // roleid - computed: false, optional: true, required: false
  private _roleid?: string; 
  public get roleid() {
    return this.getStringAttribute('roleid');
  }
  public set roleid(value: string) {
    this._roleid = value;
  }
  public resetRoleid() {
    this._roleid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleidInput() {
    return this._roleid;
  }

  // secretid - computed: false, optional: true, required: false
  private _secretid?: string; 
  public get secretid() {
    return this.getStringAttribute('secretid');
  }
  public set secretid(value: string) {
    this._secretid = value;
  }
  public resetSecretid() {
    this._secretid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretidInput() {
    return this._secretid;
  }

  // tenantid - computed: false, optional: true, required: false
  private _tenantid?: string; 
  public get tenantid() {
    return this.getStringAttribute('tenantid');
  }
  public set tenantid(value: string) {
    this._tenantid = value;
  }
  public resetTenantid() {
    this._tenantid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantidInput() {
    return this._tenantid;
  }

  // token_secret_name - computed: false, optional: true, required: false
  private _tokenSecretName?: string; 
  public get tokenSecretName() {
    return this.getStringAttribute('token_secret_name');
  }
  public set tokenSecretName(value: string) {
    this._tokenSecretName = value;
  }
  public resetTokenSecretName() {
    this._tokenSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSecretNameInput() {
    return this._tokenSecretName;
  }

  // username_secret_name - computed: false, optional: true, required: false
  private _usernameSecretName?: string; 
  public get usernameSecretName() {
    return this.getStringAttribute('username_secret_name');
  }
  public set usernameSecretName(value: string) {
    this._usernameSecretName = value;
  }
  public resetUsernameSecretName() {
    this._usernameSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameSecretNameInput() {
    return this._usernameSecretName;
  }

  // vault_namespace - computed: false, optional: true, required: false
  private _vaultNamespace?: string; 
  public get vaultNamespace() {
    return this.getStringAttribute('vault_namespace');
  }
  public set vaultNamespace(value: string) {
    this._vaultNamespace = value;
  }
  public resetVaultNamespace() {
    this._vaultNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultNamespaceInput() {
    return this._vaultNamespace;
  }

  // vault_url - computed: false, optional: true, required: false
  private _vaultUrl?: string; 
  public get vaultUrl() {
    return this.getStringAttribute('vault_url');
  }
  public set vaultUrl(value: string) {
    this._vaultUrl = value;
  }
  public resetVaultUrl() {
    this._vaultUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultUrlInput() {
    return this._vaultUrl;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials dynatrace_credentials}
*/
export class Credentials extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_credentials";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Credentials resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Credentials to import
  * @param importFromId The id of the existing Credentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Credentials to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_credentials", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/credentials dynatrace_credentials} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialsConfig
  */
  public constructor(scope: Construct, id: string, config: CredentialsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_credentials',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowContextlessRequests = config.allowContextlessRequests;
    this._certificate = config.certificate;
    this._description = config.description;
    this._format = config.format;
    this._id = config.id;
    this._name = config.name;
    this._ownerAccessOnly = config.ownerAccessOnly;
    this._password = config.password;
    this._public = config.public;
    this._scope = config.scope;
    this._scopes = config.scopes;
    this._token = config.token;
    this._username = config.username;
    this._allowedEntities.internalValue = config.allowedEntities;
    this._credentialUsageSummary.internalValue = config.credentialUsageSummary;
    this._external.internalValue = config.external;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_contextless_requests - computed: false, optional: true, required: false
  private _allowContextlessRequests?: boolean | cdktf.IResolvable; 
  public get allowContextlessRequests() {
    return this.getBooleanAttribute('allow_contextless_requests');
  }
  public set allowContextlessRequests(value: boolean | cdktf.IResolvable) {
    this._allowContextlessRequests = value;
  }
  public resetAllowContextlessRequests() {
    this._allowContextlessRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowContextlessRequestsInput() {
    return this._allowContextlessRequests;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
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

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // owner_access_only - computed: false, optional: true, required: false
  private _ownerAccessOnly?: boolean | cdktf.IResolvable; 
  public get ownerAccessOnly() {
    return this.getBooleanAttribute('owner_access_only');
  }
  public set ownerAccessOnly(value: boolean | cdktf.IResolvable) {
    this._ownerAccessOnly = value;
  }
  public resetOwnerAccessOnly() {
    this._ownerAccessOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerAccessOnlyInput() {
    return this._ownerAccessOnly;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // public - computed: false, optional: true, required: false
  private _public?: boolean | cdktf.IResolvable; 
  public get public() {
    return this.getBooleanAttribute('public');
  }
  public set public(value: boolean | cdktf.IResolvable) {
    this._public = value;
  }
  public resetPublic() {
    this._public = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicInput() {
    return this._public;
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

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // allowed_entities - computed: false, optional: true, required: false
  private _allowedEntities = new CredentialsAllowedEntitiesOutputReference(this, "allowed_entities");
  public get allowedEntities() {
    return this._allowedEntities;
  }
  public putAllowedEntities(value: CredentialsAllowedEntities) {
    this._allowedEntities.internalValue = value;
  }
  public resetAllowedEntities() {
    this._allowedEntities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedEntitiesInput() {
    return this._allowedEntities.internalValue;
  }

  // credential_usage_summary - computed: false, optional: true, required: false
  private _credentialUsageSummary = new CredentialsCredentialUsageSummaryList(this, "credential_usage_summary", false);
  public get credentialUsageSummary() {
    return this._credentialUsageSummary;
  }
  public putCredentialUsageSummary(value: CredentialsCredentialUsageSummary[] | cdktf.IResolvable) {
    this._credentialUsageSummary.internalValue = value;
  }
  public resetCredentialUsageSummary() {
    this._credentialUsageSummary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialUsageSummaryInput() {
    return this._credentialUsageSummary.internalValue;
  }

  // external - computed: false, optional: true, required: false
  private _external = new CredentialsExternalOutputReference(this, "external");
  public get external() {
    return this._external;
  }
  public putExternal(value: CredentialsExternal) {
    this._external.internalValue = value;
  }
  public resetExternal() {
    this._external.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_contextless_requests: cdktf.booleanToTerraform(this._allowContextlessRequests),
      certificate: cdktf.stringToTerraform(this._certificate),
      description: cdktf.stringToTerraform(this._description),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      owner_access_only: cdktf.booleanToTerraform(this._ownerAccessOnly),
      password: cdktf.stringToTerraform(this._password),
      public: cdktf.booleanToTerraform(this._public),
      scope: cdktf.stringToTerraform(this._scope),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      token: cdktf.stringToTerraform(this._token),
      username: cdktf.stringToTerraform(this._username),
      allowed_entities: credentialsAllowedEntitiesToTerraform(this._allowedEntities.internalValue),
      credential_usage_summary: cdktf.listMapper(credentialsCredentialUsageSummaryToTerraform, true)(this._credentialUsageSummary.internalValue),
      external: credentialsExternalToTerraform(this._external.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_contextless_requests: {
        value: cdktf.booleanToHclTerraform(this._allowContextlessRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
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
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_access_only: {
        value: cdktf.booleanToHclTerraform(this._ownerAccessOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public: {
        value: cdktf.booleanToHclTerraform(this._public),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_entities: {
        value: credentialsAllowedEntitiesToHclTerraform(this._allowedEntities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CredentialsAllowedEntitiesList",
      },
      credential_usage_summary: {
        value: cdktf.listMapperHcl(credentialsCredentialUsageSummaryToHclTerraform, true)(this._credentialUsageSummary.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CredentialsCredentialUsageSummaryList",
      },
      external: {
        value: credentialsExternalToHclTerraform(this._external.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CredentialsExternalList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
