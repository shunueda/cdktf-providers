// https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CbsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#account_id Cbs#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#auto_backup_enabled Cbs#auto_backup_enabled}
  */
  readonly autoBackupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#bucket Cbs#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#client_id Cbs#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#cloud_provider Cbs#cloud_provider}
  */
  readonly cloudProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#export_existing_snapshots Cbs#export_existing_snapshots}
  */
  readonly exportExistingSnapshots?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#id Cbs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#ip_space Cbs#ip_space}
  */
  readonly ipSpace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#max_transfer_rate Cbs#max_transfer_rate}
  */
  readonly maxTransferRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#region Cbs#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#working_environment_id Cbs#working_environment_id}
  */
  readonly workingEnvironmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#working_environment_name Cbs#working_environment_name}
  */
  readonly workingEnvironmentName?: string;
  /**
  * aws_cbs_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#aws_cbs_parameters Cbs#aws_cbs_parameters}
  */
  readonly awsCbsParameters?: CbsAwsCbsParameters;
  /**
  * azure_cbs_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#azure_cbs_parameters Cbs#azure_cbs_parameters}
  */
  readonly azureCbsParameters?: CbsAzureCbsParameters;
  /**
  * backup_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#backup_policy Cbs#backup_policy}
  */
  readonly backupPolicy?: CbsBackupPolicy;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#volumes Cbs#volumes}
  */
  readonly volumes?: CbsVolumes[] | cdktf.IResolvable;
}
export interface CbsAwsCbsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#access_key Cbs#access_key}
  */
  readonly accessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#archive_storage_class Cbs#archive_storage_class}
  */
  readonly archiveStorageClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#aws_account_id Cbs#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#kms_key_id Cbs#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#private_endpoint_id Cbs#private_endpoint_id}
  */
  readonly privateEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#secret_password Cbs#secret_password}
  */
  readonly secretPassword?: string;
}

export function cbsAwsCbsParametersToTerraform(struct?: CbsAwsCbsParametersOutputReference | CbsAwsCbsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    archive_storage_class: cdktf.stringToTerraform(struct!.archiveStorageClass),
    aws_account_id: cdktf.stringToTerraform(struct!.awsAccountId),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    private_endpoint_id: cdktf.stringToTerraform(struct!.privateEndpointId),
    secret_password: cdktf.stringToTerraform(struct!.secretPassword),
  }
}


export function cbsAwsCbsParametersToHclTerraform(struct?: CbsAwsCbsParametersOutputReference | CbsAwsCbsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    archive_storage_class: {
      value: cdktf.stringToHclTerraform(struct!.archiveStorageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_account_id: {
      value: cdktf.stringToHclTerraform(struct!.awsAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
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
    secret_password: {
      value: cdktf.stringToHclTerraform(struct!.secretPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CbsAwsCbsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CbsAwsCbsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._archiveStorageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveStorageClass = this._archiveStorageClass;
    }
    if (this._awsAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccountId = this._awsAccountId;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._privateEndpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpointId = this._privateEndpointId;
    }
    if (this._secretPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretPassword = this._secretPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CbsAwsCbsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._archiveStorageClass = undefined;
      this._awsAccountId = undefined;
      this._kmsKeyId = undefined;
      this._privateEndpointId = undefined;
      this._secretPassword = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._archiveStorageClass = value.archiveStorageClass;
      this._awsAccountId = value.awsAccountId;
      this._kmsKeyId = value.kmsKeyId;
      this._privateEndpointId = value.privateEndpointId;
      this._secretPassword = value.secretPassword;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // archive_storage_class - computed: false, optional: true, required: false
  private _archiveStorageClass?: string; 
  public get archiveStorageClass() {
    return this.getStringAttribute('archive_storage_class');
  }
  public set archiveStorageClass(value: string) {
    this._archiveStorageClass = value;
  }
  public resetArchiveStorageClass() {
    this._archiveStorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveStorageClassInput() {
    return this._archiveStorageClass;
  }

  // aws_account_id - computed: false, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // private_endpoint_id - computed: false, optional: true, required: false
  private _privateEndpointId?: string; 
  public get privateEndpointId() {
    return this.getStringAttribute('private_endpoint_id');
  }
  public set privateEndpointId(value: string) {
    this._privateEndpointId = value;
  }
  public resetPrivateEndpointId() {
    this._privateEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointIdInput() {
    return this._privateEndpointId;
  }

  // secret_password - computed: false, optional: true, required: false
  private _secretPassword?: string; 
  public get secretPassword() {
    return this.getStringAttribute('secret_password');
  }
  public set secretPassword(value: string) {
    this._secretPassword = value;
  }
  public resetSecretPassword() {
    this._secretPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretPasswordInput() {
    return this._secretPassword;
  }
}
export interface CbsAzureCbsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#key_name Cbs#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#key_vault_id Cbs#key_vault_id}
  */
  readonly keyVaultId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#private_endpoint_id Cbs#private_endpoint_id}
  */
  readonly privateEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#resource_group Cbs#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#storage_account Cbs#storage_account}
  */
  readonly storageAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#subscription Cbs#subscription}
  */
  readonly subscription?: string;
}

export function cbsAzureCbsParametersToTerraform(struct?: CbsAzureCbsParametersOutputReference | CbsAzureCbsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_name: cdktf.stringToTerraform(struct!.keyName),
    key_vault_id: cdktf.stringToTerraform(struct!.keyVaultId),
    private_endpoint_id: cdktf.stringToTerraform(struct!.privateEndpointId),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    storage_account: cdktf.stringToTerraform(struct!.storageAccount),
    subscription: cdktf.stringToTerraform(struct!.subscription),
  }
}


export function cbsAzureCbsParametersToHclTerraform(struct?: CbsAzureCbsParametersOutputReference | CbsAzureCbsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_id: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultId),
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
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account: {
      value: cdktf.stringToHclTerraform(struct!.storageAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription: {
      value: cdktf.stringToHclTerraform(struct!.subscription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CbsAzureCbsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CbsAzureCbsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._keyVaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultId = this._keyVaultId;
    }
    if (this._privateEndpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpointId = this._privateEndpointId;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._storageAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccount = this._storageAccount;
    }
    if (this._subscription !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscription = this._subscription;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CbsAzureCbsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyName = undefined;
      this._keyVaultId = undefined;
      this._privateEndpointId = undefined;
      this._resourceGroup = undefined;
      this._storageAccount = undefined;
      this._subscription = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyName = value.keyName;
      this._keyVaultId = value.keyVaultId;
      this._privateEndpointId = value.privateEndpointId;
      this._resourceGroup = value.resourceGroup;
      this._storageAccount = value.storageAccount;
      this._subscription = value.subscription;
    }
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // key_vault_id - computed: false, optional: true, required: false
  private _keyVaultId?: string; 
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }
  public set keyVaultId(value: string) {
    this._keyVaultId = value;
  }
  public resetKeyVaultId() {
    this._keyVaultId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultIdInput() {
    return this._keyVaultId;
  }

  // private_endpoint_id - computed: false, optional: true, required: false
  private _privateEndpointId?: string; 
  public get privateEndpointId() {
    return this.getStringAttribute('private_endpoint_id');
  }
  public set privateEndpointId(value: string) {
    this._privateEndpointId = value;
  }
  public resetPrivateEndpointId() {
    this._privateEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointIdInput() {
    return this._privateEndpointId;
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // storage_account - computed: false, optional: true, required: false
  private _storageAccount?: string; 
  public get storageAccount() {
    return this.getStringAttribute('storage_account');
  }
  public set storageAccount(value: string) {
    this._storageAccount = value;
  }
  public resetStorageAccount() {
    this._storageAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountInput() {
    return this._storageAccount;
  }

  // subscription - computed: false, optional: true, required: false
  private _subscription?: string; 
  public get subscription() {
    return this.getStringAttribute('subscription');
  }
  public set subscription(value: string) {
    this._subscription = value;
  }
  public resetSubscription() {
    this._subscription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionInput() {
    return this._subscription;
  }
}
export interface CbsBackupPolicyPolicyRulesRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#label Cbs#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#retention Cbs#retention}
  */
  readonly retention?: string;
}

export function cbsBackupPolicyPolicyRulesRuleToTerraform(struct?: CbsBackupPolicyPolicyRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    retention: cdktf.stringToTerraform(struct!.retention),
  }
}


export function cbsBackupPolicyPolicyRulesRuleToHclTerraform(struct?: CbsBackupPolicyPolicyRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention: {
      value: cdktf.stringToHclTerraform(struct!.retention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CbsBackupPolicyPolicyRulesRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CbsBackupPolicyPolicyRulesRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._retention !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CbsBackupPolicyPolicyRulesRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._retention = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._retention = value.retention;
    }
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // retention - computed: false, optional: true, required: false
  private _retention?: string; 
  public get retention() {
    return this.getStringAttribute('retention');
  }
  public set retention(value: string) {
    this._retention = value;
  }
  public resetRetention() {
    this._retention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }
}

export class CbsBackupPolicyPolicyRulesRuleList extends cdktf.ComplexList {
  public internalValue? : CbsBackupPolicyPolicyRulesRule[] | cdktf.IResolvable

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
  public get(index: number): CbsBackupPolicyPolicyRulesRuleOutputReference {
    return new CbsBackupPolicyPolicyRulesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CbsBackupPolicyPolicyRules {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#rule Cbs#rule}
  */
  readonly rule?: CbsBackupPolicyPolicyRulesRule[] | cdktf.IResolvable;
}

export function cbsBackupPolicyPolicyRulesToTerraform(struct?: CbsBackupPolicyPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.listMapper(cbsBackupPolicyPolicyRulesRuleToTerraform, true)(struct!.rule),
  }
}


export function cbsBackupPolicyPolicyRulesToHclTerraform(struct?: CbsBackupPolicyPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.listMapperHcl(cbsBackupPolicyPolicyRulesRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "CbsBackupPolicyPolicyRulesRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CbsBackupPolicyPolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CbsBackupPolicyPolicyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CbsBackupPolicyPolicyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rule.internalValue = value.rule;
    }
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new CbsBackupPolicyPolicyRulesRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: CbsBackupPolicyPolicyRulesRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}

export class CbsBackupPolicyPolicyRulesList extends cdktf.ComplexList {
  public internalValue? : CbsBackupPolicyPolicyRules[] | cdktf.IResolvable

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
  public get(index: number): CbsBackupPolicyPolicyRulesOutputReference {
    return new CbsBackupPolicyPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CbsBackupPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#archive_after_days Cbs#archive_after_days}
  */
  readonly archiveAfterDays?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#name Cbs#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#object_lock Cbs#object_lock}
  */
  readonly objectLock?: string;
  /**
  * policy_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#policy_rules Cbs#policy_rules}
  */
  readonly policyRules?: CbsBackupPolicyPolicyRules[] | cdktf.IResolvable;
}

export function cbsBackupPolicyToTerraform(struct?: CbsBackupPolicyOutputReference | CbsBackupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_after_days: cdktf.stringToTerraform(struct!.archiveAfterDays),
    name: cdktf.stringToTerraform(struct!.name),
    object_lock: cdktf.stringToTerraform(struct!.objectLock),
    policy_rules: cdktf.listMapper(cbsBackupPolicyPolicyRulesToTerraform, true)(struct!.policyRules),
  }
}


export function cbsBackupPolicyToHclTerraform(struct?: CbsBackupPolicyOutputReference | CbsBackupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_after_days: {
      value: cdktf.stringToHclTerraform(struct!.archiveAfterDays),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_lock: {
      value: cdktf.stringToHclTerraform(struct!.objectLock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_rules: {
      value: cdktf.listMapperHcl(cbsBackupPolicyPolicyRulesToHclTerraform, true)(struct!.policyRules),
      isBlock: true,
      type: "set",
      storageClassType: "CbsBackupPolicyPolicyRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CbsBackupPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CbsBackupPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveAfterDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveAfterDays = this._archiveAfterDays;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectLock !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectLock = this._objectLock;
    }
    if (this._policyRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyRules = this._policyRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CbsBackupPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveAfterDays = undefined;
      this._name = undefined;
      this._objectLock = undefined;
      this._policyRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveAfterDays = value.archiveAfterDays;
      this._name = value.name;
      this._objectLock = value.objectLock;
      this._policyRules.internalValue = value.policyRules;
    }
  }

  // archive_after_days - computed: false, optional: true, required: false
  private _archiveAfterDays?: string; 
  public get archiveAfterDays() {
    return this.getStringAttribute('archive_after_days');
  }
  public set archiveAfterDays(value: string) {
    this._archiveAfterDays = value;
  }
  public resetArchiveAfterDays() {
    this._archiveAfterDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveAfterDaysInput() {
    return this._archiveAfterDays;
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

  // object_lock - computed: false, optional: true, required: false
  private _objectLock?: string; 
  public get objectLock() {
    return this.getStringAttribute('object_lock');
  }
  public set objectLock(value: string) {
    this._objectLock = value;
  }
  public resetObjectLock() {
    this._objectLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLockInput() {
    return this._objectLock;
  }

  // policy_rules - computed: false, optional: true, required: false
  private _policyRules = new CbsBackupPolicyPolicyRulesList(this, "policy_rules", true);
  public get policyRules() {
    return this._policyRules;
  }
  public putPolicyRules(value: CbsBackupPolicyPolicyRules[] | cdktf.IResolvable) {
    this._policyRules.internalValue = value;
  }
  public resetPolicyRules() {
    this._policyRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRulesInput() {
    return this._policyRules.internalValue;
  }
}
export interface CbsVolumesBackupPolicyPolicyRulesRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#label Cbs#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#retention Cbs#retention}
  */
  readonly retention?: string;
}

export function cbsVolumesBackupPolicyPolicyRulesRuleToTerraform(struct?: CbsVolumesBackupPolicyPolicyRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    retention: cdktf.stringToTerraform(struct!.retention),
  }
}


export function cbsVolumesBackupPolicyPolicyRulesRuleToHclTerraform(struct?: CbsVolumesBackupPolicyPolicyRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention: {
      value: cdktf.stringToHclTerraform(struct!.retention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CbsVolumesBackupPolicyPolicyRulesRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CbsVolumesBackupPolicyPolicyRulesRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._retention !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CbsVolumesBackupPolicyPolicyRulesRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._retention = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._retention = value.retention;
    }
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // retention - computed: false, optional: true, required: false
  private _retention?: string; 
  public get retention() {
    return this.getStringAttribute('retention');
  }
  public set retention(value: string) {
    this._retention = value;
  }
  public resetRetention() {
    this._retention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }
}

export class CbsVolumesBackupPolicyPolicyRulesRuleList extends cdktf.ComplexList {
  public internalValue? : CbsVolumesBackupPolicyPolicyRulesRule[] | cdktf.IResolvable

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
  public get(index: number): CbsVolumesBackupPolicyPolicyRulesRuleOutputReference {
    return new CbsVolumesBackupPolicyPolicyRulesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CbsVolumesBackupPolicyPolicyRules {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#rule Cbs#rule}
  */
  readonly rule?: CbsVolumesBackupPolicyPolicyRulesRule[] | cdktf.IResolvable;
}

export function cbsVolumesBackupPolicyPolicyRulesToTerraform(struct?: CbsVolumesBackupPolicyPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.listMapper(cbsVolumesBackupPolicyPolicyRulesRuleToTerraform, true)(struct!.rule),
  }
}


export function cbsVolumesBackupPolicyPolicyRulesToHclTerraform(struct?: CbsVolumesBackupPolicyPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.listMapperHcl(cbsVolumesBackupPolicyPolicyRulesRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "CbsVolumesBackupPolicyPolicyRulesRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CbsVolumesBackupPolicyPolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CbsVolumesBackupPolicyPolicyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CbsVolumesBackupPolicyPolicyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rule.internalValue = value.rule;
    }
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new CbsVolumesBackupPolicyPolicyRulesRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: CbsVolumesBackupPolicyPolicyRulesRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}

export class CbsVolumesBackupPolicyPolicyRulesList extends cdktf.ComplexList {
  public internalValue? : CbsVolumesBackupPolicyPolicyRules[] | cdktf.IResolvable

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
  public get(index: number): CbsVolumesBackupPolicyPolicyRulesOutputReference {
    return new CbsVolumesBackupPolicyPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CbsVolumesBackupPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#archive_after_days Cbs#archive_after_days}
  */
  readonly archiveAfterDays?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#name Cbs#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#object_lock Cbs#object_lock}
  */
  readonly objectLock?: string;
  /**
  * policy_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#policy_rules Cbs#policy_rules}
  */
  readonly policyRules?: CbsVolumesBackupPolicyPolicyRules[] | cdktf.IResolvable;
}

export function cbsVolumesBackupPolicyToTerraform(struct?: CbsVolumesBackupPolicyOutputReference | CbsVolumesBackupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_after_days: cdktf.stringToTerraform(struct!.archiveAfterDays),
    name: cdktf.stringToTerraform(struct!.name),
    object_lock: cdktf.stringToTerraform(struct!.objectLock),
    policy_rules: cdktf.listMapper(cbsVolumesBackupPolicyPolicyRulesToTerraform, true)(struct!.policyRules),
  }
}


export function cbsVolumesBackupPolicyToHclTerraform(struct?: CbsVolumesBackupPolicyOutputReference | CbsVolumesBackupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_after_days: {
      value: cdktf.stringToHclTerraform(struct!.archiveAfterDays),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_lock: {
      value: cdktf.stringToHclTerraform(struct!.objectLock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_rules: {
      value: cdktf.listMapperHcl(cbsVolumesBackupPolicyPolicyRulesToHclTerraform, true)(struct!.policyRules),
      isBlock: true,
      type: "set",
      storageClassType: "CbsVolumesBackupPolicyPolicyRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CbsVolumesBackupPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CbsVolumesBackupPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveAfterDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveAfterDays = this._archiveAfterDays;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectLock !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectLock = this._objectLock;
    }
    if (this._policyRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyRules = this._policyRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CbsVolumesBackupPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveAfterDays = undefined;
      this._name = undefined;
      this._objectLock = undefined;
      this._policyRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveAfterDays = value.archiveAfterDays;
      this._name = value.name;
      this._objectLock = value.objectLock;
      this._policyRules.internalValue = value.policyRules;
    }
  }

  // archive_after_days - computed: false, optional: true, required: false
  private _archiveAfterDays?: string; 
  public get archiveAfterDays() {
    return this.getStringAttribute('archive_after_days');
  }
  public set archiveAfterDays(value: string) {
    this._archiveAfterDays = value;
  }
  public resetArchiveAfterDays() {
    this._archiveAfterDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveAfterDaysInput() {
    return this._archiveAfterDays;
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

  // object_lock - computed: false, optional: true, required: false
  private _objectLock?: string; 
  public get objectLock() {
    return this.getStringAttribute('object_lock');
  }
  public set objectLock(value: string) {
    this._objectLock = value;
  }
  public resetObjectLock() {
    this._objectLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectLockInput() {
    return this._objectLock;
  }

  // policy_rules - computed: false, optional: true, required: false
  private _policyRules = new CbsVolumesBackupPolicyPolicyRulesList(this, "policy_rules", true);
  public get policyRules() {
    return this._policyRules;
  }
  public putPolicyRules(value: CbsVolumesBackupPolicyPolicyRules[] | cdktf.IResolvable) {
    this._policyRules.internalValue = value;
  }
  public resetPolicyRules() {
    this._policyRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRulesInput() {
    return this._policyRules.internalValue;
  }
}
export interface CbsVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#mode Cbs#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#volume_name Cbs#volume_name}
  */
  readonly volumeName: string;
  /**
  * backup_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#backup_policy Cbs#backup_policy}
  */
  readonly backupPolicy?: CbsVolumesBackupPolicy;
}

export function cbsVolumesToTerraform(struct?: CbsVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    backup_policy: cbsVolumesBackupPolicyToTerraform(struct!.backupPolicy),
  }
}


export function cbsVolumesToHclTerraform(struct?: CbsVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_policy: {
      value: cbsVolumesBackupPolicyToHclTerraform(struct!.backupPolicy),
      isBlock: true,
      type: "set",
      storageClassType: "CbsVolumesBackupPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CbsVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CbsVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    if (this._backupPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupPolicy = this._backupPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CbsVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._volumeName = undefined;
      this._backupPolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._volumeName = value.volumeName;
      this._backupPolicy.internalValue = value.backupPolicy;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // volume_name - computed: false, optional: false, required: true
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }

  // backup_policy - computed: false, optional: true, required: false
  private _backupPolicy = new CbsVolumesBackupPolicyOutputReference(this, "backup_policy");
  public get backupPolicy() {
    return this._backupPolicy;
  }
  public putBackupPolicy(value: CbsVolumesBackupPolicy) {
    this._backupPolicy.internalValue = value;
  }
  public resetBackupPolicy() {
    this._backupPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPolicyInput() {
    return this._backupPolicy.internalValue;
  }
}

export class CbsVolumesList extends cdktf.ComplexList {
  public internalValue? : CbsVolumes[] | cdktf.IResolvable

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
  public get(index: number): CbsVolumesOutputReference {
    return new CbsVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs netapp-cloudmanager_cbs}
*/
export class Cbs extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-cloudmanager_cbs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cbs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cbs to import
  * @param importFromId The id of the existing Cbs that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cbs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-cloudmanager_cbs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-cloudmanager/27.0.0/docs/resources/cbs netapp-cloudmanager_cbs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CbsConfig
  */
  public constructor(scope: Construct, id: string, config: CbsConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-cloudmanager_cbs',
      terraformGeneratorMetadata: {
        providerName: 'netapp-cloudmanager',
        providerVersion: '27.0.0',
        providerVersionConstraint: '27.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._autoBackupEnabled = config.autoBackupEnabled;
    this._bucket = config.bucket;
    this._clientId = config.clientId;
    this._cloudProvider = config.cloudProvider;
    this._exportExistingSnapshots = config.exportExistingSnapshots;
    this._id = config.id;
    this._ipSpace = config.ipSpace;
    this._maxTransferRate = config.maxTransferRate;
    this._region = config.region;
    this._workingEnvironmentId = config.workingEnvironmentId;
    this._workingEnvironmentName = config.workingEnvironmentName;
    this._awsCbsParameters.internalValue = config.awsCbsParameters;
    this._azureCbsParameters.internalValue = config.azureCbsParameters;
    this._backupPolicy.internalValue = config.backupPolicy;
    this._volumes.internalValue = config.volumes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // auto_backup_enabled - computed: false, optional: true, required: false
  private _autoBackupEnabled?: boolean | cdktf.IResolvable; 
  public get autoBackupEnabled() {
    return this.getBooleanAttribute('auto_backup_enabled');
  }
  public set autoBackupEnabled(value: boolean | cdktf.IResolvable) {
    this._autoBackupEnabled = value;
  }
  public resetAutoBackupEnabled() {
    this._autoBackupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBackupEnabledInput() {
    return this._autoBackupEnabled;
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

  // cloud_provider - computed: false, optional: true, required: false
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  public resetCloudProvider() {
    this._cloudProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // export_existing_snapshots - computed: false, optional: true, required: false
  private _exportExistingSnapshots?: boolean | cdktf.IResolvable; 
  public get exportExistingSnapshots() {
    return this.getBooleanAttribute('export_existing_snapshots');
  }
  public set exportExistingSnapshots(value: boolean | cdktf.IResolvable) {
    this._exportExistingSnapshots = value;
  }
  public resetExportExistingSnapshots() {
    this._exportExistingSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportExistingSnapshotsInput() {
    return this._exportExistingSnapshots;
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

  // ip_space - computed: false, optional: true, required: false
  private _ipSpace?: string; 
  public get ipSpace() {
    return this.getStringAttribute('ip_space');
  }
  public set ipSpace(value: string) {
    this._ipSpace = value;
  }
  public resetIpSpace() {
    this._ipSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSpaceInput() {
    return this._ipSpace;
  }

  // max_transfer_rate - computed: false, optional: true, required: false
  private _maxTransferRate?: number; 
  public get maxTransferRate() {
    return this.getNumberAttribute('max_transfer_rate');
  }
  public set maxTransferRate(value: number) {
    this._maxTransferRate = value;
  }
  public resetMaxTransferRate() {
    this._maxTransferRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTransferRateInput() {
    return this._maxTransferRate;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // working_environment_id - computed: false, optional: true, required: false
  private _workingEnvironmentId?: string; 
  public get workingEnvironmentId() {
    return this.getStringAttribute('working_environment_id');
  }
  public set workingEnvironmentId(value: string) {
    this._workingEnvironmentId = value;
  }
  public resetWorkingEnvironmentId() {
    this._workingEnvironmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingEnvironmentIdInput() {
    return this._workingEnvironmentId;
  }

  // working_environment_name - computed: false, optional: true, required: false
  private _workingEnvironmentName?: string; 
  public get workingEnvironmentName() {
    return this.getStringAttribute('working_environment_name');
  }
  public set workingEnvironmentName(value: string) {
    this._workingEnvironmentName = value;
  }
  public resetWorkingEnvironmentName() {
    this._workingEnvironmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingEnvironmentNameInput() {
    return this._workingEnvironmentName;
  }

  // aws_cbs_parameters - computed: false, optional: true, required: false
  private _awsCbsParameters = new CbsAwsCbsParametersOutputReference(this, "aws_cbs_parameters");
  public get awsCbsParameters() {
    return this._awsCbsParameters;
  }
  public putAwsCbsParameters(value: CbsAwsCbsParameters) {
    this._awsCbsParameters.internalValue = value;
  }
  public resetAwsCbsParameters() {
    this._awsCbsParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCbsParametersInput() {
    return this._awsCbsParameters.internalValue;
  }

  // azure_cbs_parameters - computed: false, optional: true, required: false
  private _azureCbsParameters = new CbsAzureCbsParametersOutputReference(this, "azure_cbs_parameters");
  public get azureCbsParameters() {
    return this._azureCbsParameters;
  }
  public putAzureCbsParameters(value: CbsAzureCbsParameters) {
    this._azureCbsParameters.internalValue = value;
  }
  public resetAzureCbsParameters() {
    this._azureCbsParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureCbsParametersInput() {
    return this._azureCbsParameters.internalValue;
  }

  // backup_policy - computed: false, optional: true, required: false
  private _backupPolicy = new CbsBackupPolicyOutputReference(this, "backup_policy");
  public get backupPolicy() {
    return this._backupPolicy;
  }
  public putBackupPolicy(value: CbsBackupPolicy) {
    this._backupPolicy.internalValue = value;
  }
  public resetBackupPolicy() {
    this._backupPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPolicyInput() {
    return this._backupPolicy.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new CbsVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: CbsVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      auto_backup_enabled: cdktf.booleanToTerraform(this._autoBackupEnabled),
      bucket: cdktf.stringToTerraform(this._bucket),
      client_id: cdktf.stringToTerraform(this._clientId),
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      export_existing_snapshots: cdktf.booleanToTerraform(this._exportExistingSnapshots),
      id: cdktf.stringToTerraform(this._id),
      ip_space: cdktf.stringToTerraform(this._ipSpace),
      max_transfer_rate: cdktf.numberToTerraform(this._maxTransferRate),
      region: cdktf.stringToTerraform(this._region),
      working_environment_id: cdktf.stringToTerraform(this._workingEnvironmentId),
      working_environment_name: cdktf.stringToTerraform(this._workingEnvironmentName),
      aws_cbs_parameters: cbsAwsCbsParametersToTerraform(this._awsCbsParameters.internalValue),
      azure_cbs_parameters: cbsAzureCbsParametersToTerraform(this._azureCbsParameters.internalValue),
      backup_policy: cbsBackupPolicyToTerraform(this._backupPolicy.internalValue),
      volumes: cdktf.listMapper(cbsVolumesToTerraform, true)(this._volumes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_backup_enabled: {
        value: cdktf.booleanToHclTerraform(this._autoBackupEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export_existing_snapshots: {
        value: cdktf.booleanToHclTerraform(this._exportExistingSnapshots),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_space: {
        value: cdktf.stringToHclTerraform(this._ipSpace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_transfer_rate: {
        value: cdktf.numberToHclTerraform(this._maxTransferRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      working_environment_id: {
        value: cdktf.stringToHclTerraform(this._workingEnvironmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      working_environment_name: {
        value: cdktf.stringToHclTerraform(this._workingEnvironmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_cbs_parameters: {
        value: cbsAwsCbsParametersToHclTerraform(this._awsCbsParameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CbsAwsCbsParametersList",
      },
      azure_cbs_parameters: {
        value: cbsAzureCbsParametersToHclTerraform(this._azureCbsParameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CbsAzureCbsParametersList",
      },
      backup_policy: {
        value: cbsBackupPolicyToHclTerraform(this._backupPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CbsBackupPolicyList",
      },
      volumes: {
        value: cdktf.listMapperHcl(cbsVolumesToHclTerraform, true)(this._volumes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CbsVolumesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
