// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsVaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault#compartment_id KmsVault#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault#defined_tags KmsVault#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault#display_name KmsVault#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault#freeform_tags KmsVault#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault#id KmsVault#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault#restore_trigger KmsVault#restore_trigger}
  */
  readonly restoreTrigger?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault#time_of_deletion KmsVault#time_of_deletion}
  */
  readonly timeOfDeletion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault#vault_type KmsVault#vault_type}
  */
  readonly vaultType: string;
  /**
  * external_key_manager_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault#external_key_manager_metadata KmsVault#external_key_manager_metadata}
  */
  readonly externalKeyManagerMetadata?: KmsVaultExternalKeyManagerMetadata;
  /**
  * restore_from_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault#restore_from_file KmsVault#restore_from_file}
  */
  readonly restoreFromFile?: KmsVaultRestoreFromFile;
  /**
  * restore_from_object_store block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault#restore_from_object_store KmsVault#restore_from_object_store}
  */
  readonly restoreFromObjectStore?: KmsVaultRestoreFromObjectStore;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault#timeouts KmsVault#timeouts}
  */
  readonly timeouts?: KmsVaultTimeouts;
}
export interface KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary {
}

export function kmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryToTerraform(struct?: KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function kmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryToHclTerraform(struct?: KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_app_id - computed: true, optional: false, required: false
  public get clientAppId() {
    return this.getStringAttribute('client_app_id');
  }

  // idcs_account_name_url - computed: true, optional: false, required: false
  public get idcsAccountNameUrl() {
    return this.getStringAttribute('idcs_account_name_url');
  }
}

export class KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList extends cdktf.ComplexList {

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
  public get(index: number): KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference {
    return new KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KmsVaultExternalKeyManagerMetadataSummary {
}

export function kmsVaultExternalKeyManagerMetadataSummaryToTerraform(struct?: KmsVaultExternalKeyManagerMetadataSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function kmsVaultExternalKeyManagerMetadataSummaryToHclTerraform(struct?: KmsVaultExternalKeyManagerMetadataSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KmsVaultExternalKeyManagerMetadataSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KmsVaultExternalKeyManagerMetadataSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsVaultExternalKeyManagerMetadataSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_vault_endpoint_url - computed: true, optional: false, required: false
  public get externalVaultEndpointUrl() {
    return this.getStringAttribute('external_vault_endpoint_url');
  }

  // oauth_metadata_summary - computed: true, optional: false, required: false
  private _oauthMetadataSummary = new KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList(this, "oauth_metadata_summary", false);
  public get oauthMetadataSummary() {
    return this._oauthMetadataSummary;
  }

  // private_endpoint_id - computed: true, optional: false, required: false
  public get privateEndpointId() {
    return this.getStringAttribute('private_endpoint_id');
  }

  // vendor - computed: true, optional: false, required: false
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
}

export class KmsVaultExternalKeyManagerMetadataSummaryList extends cdktf.ComplexList {

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
  public get(index: number): KmsVaultExternalKeyManagerMetadataSummaryOutputReference {
    return new KmsVaultExternalKeyManagerMetadataSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KmsVaultReplicaDetails {
}

export function kmsVaultReplicaDetailsToTerraform(struct?: KmsVaultReplicaDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function kmsVaultReplicaDetailsToHclTerraform(struct?: KmsVaultReplicaDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KmsVaultReplicaDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KmsVaultReplicaDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsVaultReplicaDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // replication_id - computed: true, optional: false, required: false
  public get replicationId() {
    return this.getStringAttribute('replication_id');
  }
}

export class KmsVaultReplicaDetailsList extends cdktf.ComplexList {

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
  public get(index: number): KmsVaultReplicaDetailsOutputReference {
    return new KmsVaultReplicaDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KmsVaultExternalKeyManagerMetadataOauthMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault#client_app_id KmsVault#client_app_id}
  */
  readonly clientAppId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault#client_app_secret KmsVault#client_app_secret}
  */
  readonly clientAppSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault#idcs_account_name_url KmsVault#idcs_account_name_url}
  */
  readonly idcsAccountNameUrl: string;
}

export function kmsVaultExternalKeyManagerMetadataOauthMetadataToTerraform(struct?: KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference | KmsVaultExternalKeyManagerMetadataOauthMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_app_id: cdktf.stringToTerraform(struct!.clientAppId),
    client_app_secret: cdktf.stringToTerraform(struct!.clientAppSecret),
    idcs_account_name_url: cdktf.stringToTerraform(struct!.idcsAccountNameUrl),
  }
}


export function kmsVaultExternalKeyManagerMetadataOauthMetadataToHclTerraform(struct?: KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference | KmsVaultExternalKeyManagerMetadataOauthMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_app_id: {
      value: cdktf.stringToHclTerraform(struct!.clientAppId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_app_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientAppSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idcs_account_name_url: {
      value: cdktf.stringToHclTerraform(struct!.idcsAccountNameUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KmsVaultExternalKeyManagerMetadataOauthMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientAppId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAppId = this._clientAppId;
    }
    if (this._clientAppSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAppSecret = this._clientAppSecret;
    }
    if (this._idcsAccountNameUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.idcsAccountNameUrl = this._idcsAccountNameUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsVaultExternalKeyManagerMetadataOauthMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientAppId = undefined;
      this._clientAppSecret = undefined;
      this._idcsAccountNameUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientAppId = value.clientAppId;
      this._clientAppSecret = value.clientAppSecret;
      this._idcsAccountNameUrl = value.idcsAccountNameUrl;
    }
  }

  // client_app_id - computed: false, optional: false, required: true
  private _clientAppId?: string; 
  public get clientAppId() {
    return this.getStringAttribute('client_app_id');
  }
  public set clientAppId(value: string) {
    this._clientAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAppIdInput() {
    return this._clientAppId;
  }

  // client_app_secret - computed: false, optional: false, required: true
  private _clientAppSecret?: string; 
  public get clientAppSecret() {
    return this.getStringAttribute('client_app_secret');
  }
  public set clientAppSecret(value: string) {
    this._clientAppSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAppSecretInput() {
    return this._clientAppSecret;
  }

  // idcs_account_name_url - computed: false, optional: false, required: true
  private _idcsAccountNameUrl?: string; 
  public get idcsAccountNameUrl() {
    return this.getStringAttribute('idcs_account_name_url');
  }
  public set idcsAccountNameUrl(value: string) {
    this._idcsAccountNameUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idcsAccountNameUrlInput() {
    return this._idcsAccountNameUrl;
  }
}
export interface KmsVaultExternalKeyManagerMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault#external_vault_endpoint_url KmsVault#external_vault_endpoint_url}
  */
  readonly externalVaultEndpointUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault#private_endpoint_id KmsVault#private_endpoint_id}
  */
  readonly privateEndpointId: string;
  /**
  * oauth_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault#oauth_metadata KmsVault#oauth_metadata}
  */
  readonly oauthMetadata: KmsVaultExternalKeyManagerMetadataOauthMetadata;
}

export function kmsVaultExternalKeyManagerMetadataToTerraform(struct?: KmsVaultExternalKeyManagerMetadataOutputReference | KmsVaultExternalKeyManagerMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_vault_endpoint_url: cdktf.stringToTerraform(struct!.externalVaultEndpointUrl),
    private_endpoint_id: cdktf.stringToTerraform(struct!.privateEndpointId),
    oauth_metadata: kmsVaultExternalKeyManagerMetadataOauthMetadataToTerraform(struct!.oauthMetadata),
  }
}


export function kmsVaultExternalKeyManagerMetadataToHclTerraform(struct?: KmsVaultExternalKeyManagerMetadataOutputReference | KmsVaultExternalKeyManagerMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_vault_endpoint_url: {
      value: cdktf.stringToHclTerraform(struct!.externalVaultEndpointUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_endpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.privateEndpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_metadata: {
      value: kmsVaultExternalKeyManagerMetadataOauthMetadataToHclTerraform(struct!.oauthMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "KmsVaultExternalKeyManagerMetadataOauthMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KmsVaultExternalKeyManagerMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KmsVaultExternalKeyManagerMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalVaultEndpointUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalVaultEndpointUrl = this._externalVaultEndpointUrl;
    }
    if (this._privateEndpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpointId = this._privateEndpointId;
    }
    if (this._oauthMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthMetadata = this._oauthMetadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsVaultExternalKeyManagerMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalVaultEndpointUrl = undefined;
      this._privateEndpointId = undefined;
      this._oauthMetadata.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalVaultEndpointUrl = value.externalVaultEndpointUrl;
      this._privateEndpointId = value.privateEndpointId;
      this._oauthMetadata.internalValue = value.oauthMetadata;
    }
  }

  // external_vault_endpoint_url - computed: false, optional: false, required: true
  private _externalVaultEndpointUrl?: string; 
  public get externalVaultEndpointUrl() {
    return this.getStringAttribute('external_vault_endpoint_url');
  }
  public set externalVaultEndpointUrl(value: string) {
    this._externalVaultEndpointUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalVaultEndpointUrlInput() {
    return this._externalVaultEndpointUrl;
  }

  // private_endpoint_id - computed: false, optional: false, required: true
  private _privateEndpointId?: string; 
  public get privateEndpointId() {
    return this.getStringAttribute('private_endpoint_id');
  }
  public set privateEndpointId(value: string) {
    this._privateEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointIdInput() {
    return this._privateEndpointId;
  }

  // oauth_metadata - computed: false, optional: false, required: true
  private _oauthMetadata = new KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference(this, "oauth_metadata");
  public get oauthMetadata() {
    return this._oauthMetadata;
  }
  public putOauthMetadata(value: KmsVaultExternalKeyManagerMetadataOauthMetadata) {
    this._oauthMetadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthMetadataInput() {
    return this._oauthMetadata.internalValue;
  }
}
export interface KmsVaultRestoreFromFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault#content_length KmsVault#content_length}
  */
  readonly contentLength: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault#content_md5 KmsVault#content_md5}
  */
  readonly contentMd5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault#restore_vault_from_file_details KmsVault#restore_vault_from_file_details}
  */
  readonly restoreVaultFromFileDetails: string;
}

export function kmsVaultRestoreFromFileToTerraform(struct?: KmsVaultRestoreFromFileOutputReference | KmsVaultRestoreFromFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_length: cdktf.stringToTerraform(struct!.contentLength),
    content_md5: cdktf.stringToTerraform(struct!.contentMd5),
    restore_vault_from_file_details: cdktf.stringToTerraform(struct!.restoreVaultFromFileDetails),
  }
}


export function kmsVaultRestoreFromFileToHclTerraform(struct?: KmsVaultRestoreFromFileOutputReference | KmsVaultRestoreFromFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_length: {
      value: cdktf.stringToHclTerraform(struct!.contentLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_md5: {
      value: cdktf.stringToHclTerraform(struct!.contentMd5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restore_vault_from_file_details: {
      value: cdktf.stringToHclTerraform(struct!.restoreVaultFromFileDetails),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KmsVaultRestoreFromFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KmsVaultRestoreFromFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentLength = this._contentLength;
    }
    if (this._contentMd5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentMd5 = this._contentMd5;
    }
    if (this._restoreVaultFromFileDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.restoreVaultFromFileDetails = this._restoreVaultFromFileDetails;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsVaultRestoreFromFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentLength = undefined;
      this._contentMd5 = undefined;
      this._restoreVaultFromFileDetails = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentLength = value.contentLength;
      this._contentMd5 = value.contentMd5;
      this._restoreVaultFromFileDetails = value.restoreVaultFromFileDetails;
    }
  }

  // content_length - computed: false, optional: false, required: true
  private _contentLength?: string; 
  public get contentLength() {
    return this.getStringAttribute('content_length');
  }
  public set contentLength(value: string) {
    this._contentLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLengthInput() {
    return this._contentLength;
  }

  // content_md5 - computed: false, optional: true, required: false
  private _contentMd5?: string; 
  public get contentMd5() {
    return this.getStringAttribute('content_md5');
  }
  public set contentMd5(value: string) {
    this._contentMd5 = value;
  }
  public resetContentMd5() {
    this._contentMd5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentMd5Input() {
    return this._contentMd5;
  }

  // restore_vault_from_file_details - computed: false, optional: false, required: true
  private _restoreVaultFromFileDetails?: string; 
  public get restoreVaultFromFileDetails() {
    return this.getStringAttribute('restore_vault_from_file_details');
  }
  public set restoreVaultFromFileDetails(value: string) {
    this._restoreVaultFromFileDetails = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreVaultFromFileDetailsInput() {
    return this._restoreVaultFromFileDetails;
  }
}
export interface KmsVaultRestoreFromObjectStore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault#bucket KmsVault#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault#destination KmsVault#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault#namespace KmsVault#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault#object KmsVault#object}
  */
  readonly object?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault#uri KmsVault#uri}
  */
  readonly uri?: string;
}

export function kmsVaultRestoreFromObjectStoreToTerraform(struct?: KmsVaultRestoreFromObjectStoreOutputReference | KmsVaultRestoreFromObjectStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    destination: cdktf.stringToTerraform(struct!.destination),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    object: cdktf.stringToTerraform(struct!.object),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function kmsVaultRestoreFromObjectStoreToHclTerraform(struct?: KmsVaultRestoreFromObjectStoreOutputReference | KmsVaultRestoreFromObjectStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KmsVaultRestoreFromObjectStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KmsVaultRestoreFromObjectStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsVaultRestoreFromObjectStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._destination = undefined;
      this._namespace = undefined;
      this._object = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._destination = value.destination;
      this._namespace = value.namespace;
      this._object = value.object;
      this._uri = value.uri;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // object - computed: false, optional: true, required: false
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface KmsVaultTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault#create KmsVault#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault#delete KmsVault#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault#update KmsVault#update}
  */
  readonly update?: string;
}

export function kmsVaultTimeoutsToTerraform(struct?: KmsVaultTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function kmsVaultTimeoutsToHclTerraform(struct?: KmsVaultTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KmsVaultTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KmsVaultTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsVaultTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault oci_kms_vault}
*/
export class KmsVault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_kms_vault";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KmsVault resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KmsVault to import
  * @param importFromId The id of the existing KmsVault that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KmsVault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_kms_vault", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/kms_vault oci_kms_vault} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsVaultConfig
  */
  public constructor(scope: Construct, id: string, config: KmsVaultConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_kms_vault',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._restoreTrigger = config.restoreTrigger;
    this._timeOfDeletion = config.timeOfDeletion;
    this._vaultType = config.vaultType;
    this._externalKeyManagerMetadata.internalValue = config.externalKeyManagerMetadata;
    this._restoreFromFile.internalValue = config.restoreFromFile;
    this._restoreFromObjectStore.internalValue = config.restoreFromObjectStore;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // crypto_endpoint - computed: true, optional: false, required: false
  public get cryptoEndpoint() {
    return this.getStringAttribute('crypto_endpoint');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
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

  // external_key_manager_metadata_summary - computed: true, optional: false, required: false
  private _externalKeyManagerMetadataSummary = new KmsVaultExternalKeyManagerMetadataSummaryList(this, "external_key_manager_metadata_summary", false);
  public get externalKeyManagerMetadataSummary() {
    return this._externalKeyManagerMetadataSummary;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // is_primary - computed: true, optional: false, required: false
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }

  // is_vault_replicable - computed: true, optional: false, required: false
  public get isVaultReplicable() {
    return this.getBooleanAttribute('is_vault_replicable');
  }

  // management_endpoint - computed: true, optional: false, required: false
  public get managementEndpoint() {
    return this.getStringAttribute('management_endpoint');
  }

  // replica_details - computed: true, optional: false, required: false
  private _replicaDetails = new KmsVaultReplicaDetailsList(this, "replica_details", false);
  public get replicaDetails() {
    return this._replicaDetails;
  }

  // restore_trigger - computed: false, optional: true, required: false
  private _restoreTrigger?: boolean | cdktf.IResolvable; 
  public get restoreTrigger() {
    return this.getBooleanAttribute('restore_trigger');
  }
  public set restoreTrigger(value: boolean | cdktf.IResolvable) {
    this._restoreTrigger = value;
  }
  public resetRestoreTrigger() {
    this._restoreTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreTriggerInput() {
    return this._restoreTrigger;
  }

  // restored_from_vault_id - computed: true, optional: false, required: false
  public get restoredFromVaultId() {
    return this.getStringAttribute('restored_from_vault_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_of_deletion - computed: true, optional: true, required: false
  private _timeOfDeletion?: string; 
  public get timeOfDeletion() {
    return this.getStringAttribute('time_of_deletion');
  }
  public set timeOfDeletion(value: string) {
    this._timeOfDeletion = value;
  }
  public resetTimeOfDeletion() {
    this._timeOfDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfDeletionInput() {
    return this._timeOfDeletion;
  }

  // vault_type - computed: false, optional: false, required: true
  private _vaultType?: string; 
  public get vaultType() {
    return this.getStringAttribute('vault_type');
  }
  public set vaultType(value: string) {
    this._vaultType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultTypeInput() {
    return this._vaultType;
  }

  // external_key_manager_metadata - computed: false, optional: true, required: false
  private _externalKeyManagerMetadata = new KmsVaultExternalKeyManagerMetadataOutputReference(this, "external_key_manager_metadata");
  public get externalKeyManagerMetadata() {
    return this._externalKeyManagerMetadata;
  }
  public putExternalKeyManagerMetadata(value: KmsVaultExternalKeyManagerMetadata) {
    this._externalKeyManagerMetadata.internalValue = value;
  }
  public resetExternalKeyManagerMetadata() {
    this._externalKeyManagerMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalKeyManagerMetadataInput() {
    return this._externalKeyManagerMetadata.internalValue;
  }

  // restore_from_file - computed: false, optional: true, required: false
  private _restoreFromFile = new KmsVaultRestoreFromFileOutputReference(this, "restore_from_file");
  public get restoreFromFile() {
    return this._restoreFromFile;
  }
  public putRestoreFromFile(value: KmsVaultRestoreFromFile) {
    this._restoreFromFile.internalValue = value;
  }
  public resetRestoreFromFile() {
    this._restoreFromFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreFromFileInput() {
    return this._restoreFromFile.internalValue;
  }

  // restore_from_object_store - computed: false, optional: true, required: false
  private _restoreFromObjectStore = new KmsVaultRestoreFromObjectStoreOutputReference(this, "restore_from_object_store");
  public get restoreFromObjectStore() {
    return this._restoreFromObjectStore;
  }
  public putRestoreFromObjectStore(value: KmsVaultRestoreFromObjectStore) {
    this._restoreFromObjectStore.internalValue = value;
  }
  public resetRestoreFromObjectStore() {
    this._restoreFromObjectStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreFromObjectStoreInput() {
    return this._restoreFromObjectStore.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KmsVaultTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KmsVaultTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      restore_trigger: cdktf.booleanToTerraform(this._restoreTrigger),
      time_of_deletion: cdktf.stringToTerraform(this._timeOfDeletion),
      vault_type: cdktf.stringToTerraform(this._vaultType),
      external_key_manager_metadata: kmsVaultExternalKeyManagerMetadataToTerraform(this._externalKeyManagerMetadata.internalValue),
      restore_from_file: kmsVaultRestoreFromFileToTerraform(this._restoreFromFile.internalValue),
      restore_from_object_store: kmsVaultRestoreFromObjectStoreToTerraform(this._restoreFromObjectStore.internalValue),
      timeouts: kmsVaultTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restore_trigger: {
        value: cdktf.booleanToHclTerraform(this._restoreTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      time_of_deletion: {
        value: cdktf.stringToHclTerraform(this._timeOfDeletion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_type: {
        value: cdktf.stringToHclTerraform(this._vaultType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_key_manager_metadata: {
        value: kmsVaultExternalKeyManagerMetadataToHclTerraform(this._externalKeyManagerMetadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KmsVaultExternalKeyManagerMetadataList",
      },
      restore_from_file: {
        value: kmsVaultRestoreFromFileToHclTerraform(this._restoreFromFile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KmsVaultRestoreFromFileList",
      },
      restore_from_object_store: {
        value: kmsVaultRestoreFromObjectStoreToHclTerraform(this._restoreFromObjectStore.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KmsVaultRestoreFromObjectStoreList",
      },
      timeouts: {
        value: kmsVaultTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KmsVaultTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
