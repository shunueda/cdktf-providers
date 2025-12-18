// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/bds_bds_instance_identity_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciBdsBdsInstanceIdentityConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/bds_bds_instance_identity_configuration#bds_instance_id DataOciBdsBdsInstanceIdentityConfiguration#bds_instance_id}
  */
  readonly bdsInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/bds_bds_instance_identity_configuration#identity_configuration_id DataOciBdsBdsInstanceIdentityConfiguration#identity_configuration_id}
  */
  readonly identityConfigurationId: string;
}
export interface DataOciBdsBdsInstanceIdentityConfigurationIamUserSyncConfiguration {
}

export function dataOciBdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationToTerraform(struct?: DataOciBdsBdsInstanceIdentityConfigurationIamUserSyncConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationToHclTerraform(struct?: DataOciBdsBdsInstanceIdentityConfigurationIamUserSyncConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBdsBdsInstanceIdentityConfigurationIamUserSyncConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBdsBdsInstanceIdentityConfigurationIamUserSyncConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_posix_attributes_addition_required - computed: true, optional: false, required: false
  public get isPosixAttributesAdditionRequired() {
    return this.getBooleanAttribute('is_posix_attributes_addition_required');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class DataOciBdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationOutputReference {
    return new DataOciBdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationDetails {
}

export function dataOciBdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationDetailsToTerraform(struct?: DataOciBdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationDetailsToHclTerraform(struct?: DataOciBdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_posix_attributes_addition_required - computed: true, optional: false, required: false
  public get isPosixAttributesAdditionRequired() {
    return this.getBooleanAttribute('is_posix_attributes_addition_required');
  }
}

export class DataOciBdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationDetailsOutputReference {
    return new DataOciBdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBdsBdsInstanceIdentityConfigurationUpstConfiguration {
}

export function dataOciBdsBdsInstanceIdentityConfigurationUpstConfigurationToTerraform(struct?: DataOciBdsBdsInstanceIdentityConfigurationUpstConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBdsBdsInstanceIdentityConfigurationUpstConfigurationToHclTerraform(struct?: DataOciBdsBdsInstanceIdentityConfigurationUpstConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBdsBdsInstanceIdentityConfigurationUpstConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBdsBdsInstanceIdentityConfigurationUpstConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBdsBdsInstanceIdentityConfigurationUpstConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // keytab_content - computed: true, optional: false, required: false
  public get keytabContent() {
    return this.getStringAttribute('keytab_content');
  }

  // master_encryption_key_id - computed: true, optional: false, required: false
  public get masterEncryptionKeyId() {
    return this.getStringAttribute('master_encryption_key_id');
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_token_exchange_keytab_last_refreshed - computed: true, optional: false, required: false
  public get timeTokenExchangeKeytabLastRefreshed() {
    return this.getStringAttribute('time_token_exchange_keytab_last_refreshed');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // token_exchange_principal_name - computed: true, optional: false, required: false
  public get tokenExchangePrincipalName() {
    return this.getStringAttribute('token_exchange_principal_name');
  }

  // vault_id - computed: true, optional: false, required: false
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
}

export class DataOciBdsBdsInstanceIdentityConfigurationUpstConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBdsBdsInstanceIdentityConfigurationUpstConfigurationOutputReference {
    return new DataOciBdsBdsInstanceIdentityConfigurationUpstConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciBdsBdsInstanceIdentityConfigurationUpstConfigurationDetails {
}

export function dataOciBdsBdsInstanceIdentityConfigurationUpstConfigurationDetailsToTerraform(struct?: DataOciBdsBdsInstanceIdentityConfigurationUpstConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciBdsBdsInstanceIdentityConfigurationUpstConfigurationDetailsToHclTerraform(struct?: DataOciBdsBdsInstanceIdentityConfigurationUpstConfigurationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciBdsBdsInstanceIdentityConfigurationUpstConfigurationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciBdsBdsInstanceIdentityConfigurationUpstConfigurationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciBdsBdsInstanceIdentityConfigurationUpstConfigurationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // master_encryption_key_id - computed: true, optional: false, required: false
  public get masterEncryptionKeyId() {
    return this.getStringAttribute('master_encryption_key_id');
  }

  // vault_id - computed: true, optional: false, required: false
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
}

export class DataOciBdsBdsInstanceIdentityConfigurationUpstConfigurationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciBdsBdsInstanceIdentityConfigurationUpstConfigurationDetailsOutputReference {
    return new DataOciBdsBdsInstanceIdentityConfigurationUpstConfigurationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/bds_bds_instance_identity_configuration oci_bds_bds_instance_identity_configuration}
*/
export class DataOciBdsBdsInstanceIdentityConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_bds_bds_instance_identity_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciBdsBdsInstanceIdentityConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciBdsBdsInstanceIdentityConfiguration to import
  * @param importFromId The id of the existing DataOciBdsBdsInstanceIdentityConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/bds_bds_instance_identity_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciBdsBdsInstanceIdentityConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_bds_bds_instance_identity_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/bds_bds_instance_identity_configuration oci_bds_bds_instance_identity_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciBdsBdsInstanceIdentityConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciBdsBdsInstanceIdentityConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_bds_bds_instance_identity_configuration',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bdsInstanceId = config.bdsInstanceId;
    this._identityConfigurationId = config.identityConfigurationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activate_iam_user_sync_configuration_trigger - computed: true, optional: false, required: false
  public get activateIamUserSyncConfigurationTrigger() {
    return this.getStringAttribute('activate_iam_user_sync_configuration_trigger');
  }

  // activate_upst_configuration_trigger - computed: true, optional: false, required: false
  public get activateUpstConfigurationTrigger() {
    return this.getStringAttribute('activate_upst_configuration_trigger');
  }

  // bds_instance_id - computed: false, optional: false, required: true
  private _bdsInstanceId?: string; 
  public get bdsInstanceId() {
    return this.getStringAttribute('bds_instance_id');
  }
  public set bdsInstanceId(value: string) {
    this._bdsInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bdsInstanceIdInput() {
    return this._bdsInstanceId;
  }

  // cluster_admin_password - computed: true, optional: false, required: false
  public get clusterAdminPassword() {
    return this.getStringAttribute('cluster_admin_password');
  }

  // confidential_application_id - computed: true, optional: false, required: false
  public get confidentialApplicationId() {
    return this.getStringAttribute('confidential_application_id');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // iam_user_sync_configuration - computed: true, optional: false, required: false
  private _iamUserSyncConfiguration = new DataOciBdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationList(this, "iam_user_sync_configuration", false);
  public get iamUserSyncConfiguration() {
    return this._iamUserSyncConfiguration;
  }

  // iam_user_sync_configuration_details - computed: true, optional: false, required: false
  private _iamUserSyncConfigurationDetails = new DataOciBdsBdsInstanceIdentityConfigurationIamUserSyncConfigurationDetailsList(this, "iam_user_sync_configuration_details", false);
  public get iamUserSyncConfigurationDetails() {
    return this._iamUserSyncConfigurationDetails;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_configuration_id - computed: false, optional: false, required: true
  private _identityConfigurationId?: string; 
  public get identityConfigurationId() {
    return this.getStringAttribute('identity_configuration_id');
  }
  public set identityConfigurationId(value: string) {
    this._identityConfigurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityConfigurationIdInput() {
    return this._identityConfigurationId;
  }

  // identity_domain_id - computed: true, optional: false, required: false
  public get identityDomainId() {
    return this.getStringAttribute('identity_domain_id');
  }

  // refresh_confidential_application_trigger - computed: true, optional: false, required: false
  public get refreshConfidentialApplicationTrigger() {
    return this.getStringAttribute('refresh_confidential_application_trigger');
  }

  // refresh_upst_token_exchange_keytab_trigger - computed: true, optional: false, required: false
  public get refreshUpstTokenExchangeKeytabTrigger() {
    return this.getStringAttribute('refresh_upst_token_exchange_keytab_trigger');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // upst_configuration - computed: true, optional: false, required: false
  private _upstConfiguration = new DataOciBdsBdsInstanceIdentityConfigurationUpstConfigurationList(this, "upst_configuration", false);
  public get upstConfiguration() {
    return this._upstConfiguration;
  }

  // upst_configuration_details - computed: true, optional: false, required: false
  private _upstConfigurationDetails = new DataOciBdsBdsInstanceIdentityConfigurationUpstConfigurationDetailsList(this, "upst_configuration_details", false);
  public get upstConfigurationDetails() {
    return this._upstConfigurationDetails;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bds_instance_id: cdktf.stringToTerraform(this._bdsInstanceId),
      identity_configuration_id: cdktf.stringToTerraform(this._identityConfigurationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bds_instance_id: {
        value: cdktf.stringToHclTerraform(this._bdsInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_configuration_id: {
        value: cdktf.stringToHclTerraform(this._identityConfigurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
