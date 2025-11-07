// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_cloudhsm_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCiphertrustAwsCloudhsmKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Input parameter. Alias assigned to the the CloudHSM key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_cloudhsm_key#alias DataCiphertrustAwsCloudhsmKey#alias}
  */
  readonly alias?: string[];
  /**
  * The Amazon Resource Name (ARN) of the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_cloudhsm_key#arn DataCiphertrustAwsCloudhsmKey#arn}
  */
  readonly arn?: string;
  /**
  * Bypass the AWS key policy lockout safety check. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_cloudhsm_key#bypass_policy_lockout_safety_check DataCiphertrustAwsCloudhsmKey#bypass_policy_lockout_safety_check}
  */
  readonly bypassPolicyLockoutSafetyCheck?: boolean | cdktf.IResolvable;
  /**
  * Description of the AWS key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_cloudhsm_key#description DataCiphertrustAwsCloudhsmKey#description}
  */
  readonly description?: string;
  /**
  * CipherTrust key ID. Can be used alone to identify the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_cloudhsm_key#key_id DataCiphertrustAwsCloudhsmKey#key_id}
  */
  readonly keyId?: string;
  /**
  * Source of the CMK's key material.  Options: AWS_CLOUDHSM, EXTERNAL_KEY_STORE. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_cloudhsm_key#origin DataCiphertrustAwsCloudhsmKey#origin}
  */
  readonly origin?: string;
  /**
  * AWS region in which CloudHSM key is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_cloudhsm_key#region DataCiphertrustAwsCloudhsmKey#region}
  */
  readonly region?: string;
  /**
  * A list of tags assigned to the XKS key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_cloudhsm_key#tags DataCiphertrustAwsCloudhsmKey#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * key_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_cloudhsm_key#key_policy DataCiphertrustAwsCloudhsmKey#key_policy}
  */
  readonly keyPolicy?: DataCiphertrustAwsCloudhsmKeyKeyPolicy;
  /**
  * local_hosted_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_cloudhsm_key#local_hosted_params DataCiphertrustAwsCloudhsmKey#local_hosted_params}
  */
  readonly localHostedParams?: DataCiphertrustAwsCloudhsmKeyLocalHostedParams[] | cdktf.IResolvable;
}
export interface DataCiphertrustAwsCloudhsmKeyKeyPolicy {
  /**
  * (Updateable) Other AWS accounts that can access to the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_cloudhsm_key#external_accounts DataCiphertrustAwsCloudhsmKey#external_accounts}
  */
  readonly externalAccounts?: string[];
  /**
  * (Updateable) Key administrators - users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_cloudhsm_key#key_admins DataCiphertrustAwsCloudhsmKey#key_admins}
  */
  readonly keyAdmins?: string[];
  /**
  * (Updateable) Key administrators - roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_cloudhsm_key#key_admins_roles DataCiphertrustAwsCloudhsmKey#key_admins_roles}
  */
  readonly keyAdminsRoles?: string[];
  /**
  * (Updateable) Key users - users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_cloudhsm_key#key_users DataCiphertrustAwsCloudhsmKey#key_users}
  */
  readonly keyUsers?: string[];
  /**
  * (Updateable) Key users - roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_cloudhsm_key#key_users_roles DataCiphertrustAwsCloudhsmKey#key_users_roles}
  */
  readonly keyUsersRoles?: string[];
  /**
  * (Updateable) AWS key policy json.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_cloudhsm_key#policy DataCiphertrustAwsCloudhsmKey#policy}
  */
  readonly policy?: string;
  /**
  * (Updateable) CipherTrust policy template ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_cloudhsm_key#policy_template DataCiphertrustAwsCloudhsmKey#policy_template}
  */
  readonly policyTemplate?: string;
}

export function dataCiphertrustAwsCloudhsmKeyKeyPolicyToTerraform(struct?: DataCiphertrustAwsCloudhsmKeyKeyPolicyOutputReference | DataCiphertrustAwsCloudhsmKeyKeyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalAccounts),
    key_admins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyAdmins),
    key_admins_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyAdminsRoles),
    key_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyUsers),
    key_users_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyUsersRoles),
    policy: cdktf.stringToTerraform(struct!.policy),
    policy_template: cdktf.stringToTerraform(struct!.policyTemplate),
  }
}


export function dataCiphertrustAwsCloudhsmKeyKeyPolicyToHclTerraform(struct?: DataCiphertrustAwsCloudhsmKeyKeyPolicyOutputReference | DataCiphertrustAwsCloudhsmKeyKeyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_accounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.externalAccounts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key_admins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyAdmins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key_admins_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyAdminsRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key_users_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyUsersRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_template: {
      value: cdktf.stringToHclTerraform(struct!.policyTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCiphertrustAwsCloudhsmKeyKeyPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataCiphertrustAwsCloudhsmKeyKeyPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalAccounts = this._externalAccounts;
    }
    if (this._keyAdmins !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyAdmins = this._keyAdmins;
    }
    if (this._keyAdminsRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyAdminsRoles = this._keyAdminsRoles;
    }
    if (this._keyUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUsers = this._keyUsers;
    }
    if (this._keyUsersRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUsersRoles = this._keyUsersRoles;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._policyTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyTemplate = this._policyTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCiphertrustAwsCloudhsmKeyKeyPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalAccounts = undefined;
      this._keyAdmins = undefined;
      this._keyAdminsRoles = undefined;
      this._keyUsers = undefined;
      this._keyUsersRoles = undefined;
      this._policy = undefined;
      this._policyTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalAccounts = value.externalAccounts;
      this._keyAdmins = value.keyAdmins;
      this._keyAdminsRoles = value.keyAdminsRoles;
      this._keyUsers = value.keyUsers;
      this._keyUsersRoles = value.keyUsersRoles;
      this._policy = value.policy;
      this._policyTemplate = value.policyTemplate;
    }
  }

  // external_accounts - computed: false, optional: true, required: false
  private _externalAccounts?: string[]; 
  public get externalAccounts() {
    return this.getListAttribute('external_accounts');
  }
  public set externalAccounts(value: string[]) {
    this._externalAccounts = value;
  }
  public resetExternalAccounts() {
    this._externalAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAccountsInput() {
    return this._externalAccounts;
  }

  // key_admins - computed: false, optional: true, required: false
  private _keyAdmins?: string[]; 
  public get keyAdmins() {
    return this.getListAttribute('key_admins');
  }
  public set keyAdmins(value: string[]) {
    this._keyAdmins = value;
  }
  public resetKeyAdmins() {
    this._keyAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAdminsInput() {
    return this._keyAdmins;
  }

  // key_admins_roles - computed: false, optional: true, required: false
  private _keyAdminsRoles?: string[]; 
  public get keyAdminsRoles() {
    return this.getListAttribute('key_admins_roles');
  }
  public set keyAdminsRoles(value: string[]) {
    this._keyAdminsRoles = value;
  }
  public resetKeyAdminsRoles() {
    this._keyAdminsRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAdminsRolesInput() {
    return this._keyAdminsRoles;
  }

  // key_users - computed: false, optional: true, required: false
  private _keyUsers?: string[]; 
  public get keyUsers() {
    return this.getListAttribute('key_users');
  }
  public set keyUsers(value: string[]) {
    this._keyUsers = value;
  }
  public resetKeyUsers() {
    this._keyUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsersInput() {
    return this._keyUsers;
  }

  // key_users_roles - computed: false, optional: true, required: false
  private _keyUsersRoles?: string[]; 
  public get keyUsersRoles() {
    return this.getListAttribute('key_users_roles');
  }
  public set keyUsersRoles(value: string[]) {
    this._keyUsersRoles = value;
  }
  public resetKeyUsersRoles() {
    this._keyUsersRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsersRolesInput() {
    return this._keyUsersRoles;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // policy_template - computed: false, optional: true, required: false
  private _policyTemplate?: string; 
  public get policyTemplate() {
    return this.getStringAttribute('policy_template');
  }
  public set policyTemplate(value: string) {
    this._policyTemplate = value;
  }
  public resetPolicyTemplate() {
    this._policyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTemplateInput() {
    return this._policyTemplate;
  }
}
export interface DataCiphertrustAwsCloudhsmKeyLocalHostedParams {
  /**
  * Parameter to indicate if AWS XKS key is blocked for any data plane operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_cloudhsm_key#blocked DataCiphertrustAwsCloudhsmKey#blocked}
  */
  readonly blocked: boolean | cdktf.IResolvable;
  /**
  * ID of the custom keystore where xks key is to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_cloudhsm_key#custom_key_store_id DataCiphertrustAwsCloudhsmKey#custom_key_store_id}
  */
  readonly customKeyStoreId?: string;
}

export function dataCiphertrustAwsCloudhsmKeyLocalHostedParamsToTerraform(struct?: DataCiphertrustAwsCloudhsmKeyLocalHostedParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocked: cdktf.booleanToTerraform(struct!.blocked),
    custom_key_store_id: cdktf.stringToTerraform(struct!.customKeyStoreId),
  }
}


export function dataCiphertrustAwsCloudhsmKeyLocalHostedParamsToHclTerraform(struct?: DataCiphertrustAwsCloudhsmKeyLocalHostedParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blocked: {
      value: cdktf.booleanToHclTerraform(struct!.blocked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_key_store_id: {
      value: cdktf.stringToHclTerraform(struct!.customKeyStoreId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCiphertrustAwsCloudhsmKeyLocalHostedParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCiphertrustAwsCloudhsmKeyLocalHostedParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blocked !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocked = this._blocked;
    }
    if (this._customKeyStoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customKeyStoreId = this._customKeyStoreId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCiphertrustAwsCloudhsmKeyLocalHostedParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blocked = undefined;
      this._customKeyStoreId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blocked = value.blocked;
      this._customKeyStoreId = value.customKeyStoreId;
    }
  }

  // blocked - computed: false, optional: false, required: true
  private _blocked?: boolean | cdktf.IResolvable; 
  public get blocked() {
    return this.getBooleanAttribute('blocked');
  }
  public set blocked(value: boolean | cdktf.IResolvable) {
    this._blocked = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedInput() {
    return this._blocked;
  }

  // custom_key_store_id - computed: false, optional: true, required: false
  private _customKeyStoreId?: string; 
  public get customKeyStoreId() {
    return this.getStringAttribute('custom_key_store_id');
  }
  public set customKeyStoreId(value: string) {
    this._customKeyStoreId = value;
  }
  public resetCustomKeyStoreId() {
    this._customKeyStoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customKeyStoreIdInput() {
    return this._customKeyStoreId;
  }
}

export class DataCiphertrustAwsCloudhsmKeyLocalHostedParamsList extends cdktf.ComplexList {
  public internalValue? : DataCiphertrustAwsCloudhsmKeyLocalHostedParams[] | cdktf.IResolvable

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
  public get(index: number): DataCiphertrustAwsCloudhsmKeyLocalHostedParamsOutputReference {
    return new DataCiphertrustAwsCloudhsmKeyLocalHostedParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_cloudhsm_key ciphertrust_aws_cloudhsm_key}
*/
export class DataCiphertrustAwsCloudhsmKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_aws_cloudhsm_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCiphertrustAwsCloudhsmKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCiphertrustAwsCloudhsmKey to import
  * @param importFromId The id of the existing DataCiphertrustAwsCloudhsmKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_cloudhsm_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCiphertrustAwsCloudhsmKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_aws_cloudhsm_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/aws_cloudhsm_key ciphertrust_aws_cloudhsm_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCiphertrustAwsCloudhsmKeyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCiphertrustAwsCloudhsmKeyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_aws_cloudhsm_key',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alias = config.alias;
    this._arn = config.arn;
    this._bypassPolicyLockoutSafetyCheck = config.bypassPolicyLockoutSafetyCheck;
    this._description = config.description;
    this._keyId = config.keyId;
    this._origin = config.origin;
    this._region = config.region;
    this._tags = config.tags;
    this._keyPolicy.internalValue = config.keyPolicy;
    this._localHostedParams.internalValue = config.localHostedParams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: true, required: false
  private _alias?: string[]; 
  public get alias() {
    return cdktf.Fn.tolist(this.getListAttribute('alias'));
  }
  public set alias(value: string[]) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // auto_rotate - computed: true, optional: false, required: false
  public get autoRotate() {
    return this.getBooleanAttribute('auto_rotate');
  }

  // aws_account_id - computed: true, optional: false, required: false
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }

  // aws_custom_key_store_id - computed: true, optional: false, required: false
  public get awsCustomKeyStoreId() {
    return this.getStringAttribute('aws_custom_key_store_id');
  }

  // aws_key_id - computed: true, optional: false, required: false
  public get awsKeyId() {
    return this.getStringAttribute('aws_key_id');
  }

  // blocked - computed: true, optional: false, required: false
  public get blocked() {
    return this.getBooleanAttribute('blocked');
  }

  // bypass_policy_lockout_safety_check - computed: true, optional: true, required: false
  private _bypassPolicyLockoutSafetyCheck?: boolean | cdktf.IResolvable; 
  public get bypassPolicyLockoutSafetyCheck() {
    return this.getBooleanAttribute('bypass_policy_lockout_safety_check');
  }
  public set bypassPolicyLockoutSafetyCheck(value: boolean | cdktf.IResolvable) {
    this._bypassPolicyLockoutSafetyCheck = value;
  }
  public resetBypassPolicyLockoutSafetyCheck() {
    this._bypassPolicyLockoutSafetyCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassPolicyLockoutSafetyCheckInput() {
    return this._bypassPolicyLockoutSafetyCheck;
  }

  // cloud_name - computed: true, optional: false, required: false
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // custom_key_store_id - computed: true, optional: false, required: false
  public get customKeyStoreId() {
    return this.getStringAttribute('custom_key_store_id');
  }

  // customer_master_key_spec - computed: true, optional: false, required: false
  public get customerMasterKeySpec() {
    return this.getStringAttribute('customer_master_key_spec');
  }

  // deletion_date - computed: true, optional: false, required: false
  public get deletionDate() {
    return this.getStringAttribute('deletion_date');
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

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // encryption_algorithms - computed: true, optional: false, required: false
  public get encryptionAlgorithms() {
    return this.getListAttribute('encryption_algorithms');
  }

  // expiration_model - computed: true, optional: false, required: false
  public get expirationModel() {
    return this.getStringAttribute('expiration_model');
  }

  // external_accounts - computed: true, optional: false, required: false
  public get externalAccounts() {
    return this.getListAttribute('external_accounts');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_admins - computed: true, optional: false, required: false
  public get keyAdmins() {
    return this.getListAttribute('key_admins');
  }

  // key_admins_roles - computed: true, optional: false, required: false
  public get keyAdminsRoles() {
    return this.getListAttribute('key_admins_roles');
  }

  // key_id - computed: true, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // key_manager - computed: true, optional: false, required: false
  public get keyManager() {
    return this.getStringAttribute('key_manager');
  }

  // key_material_origin - computed: true, optional: false, required: false
  public get keyMaterialOrigin() {
    return this.getStringAttribute('key_material_origin');
  }

  // key_rotation_enabled - computed: true, optional: false, required: false
  public get keyRotationEnabled() {
    return this.getBooleanAttribute('key_rotation_enabled');
  }

  // key_source - computed: true, optional: false, required: false
  public get keySource() {
    return this.getStringAttribute('key_source');
  }

  // key_source_container_id - computed: true, optional: false, required: false
  public get keySourceContainerId() {
    return this.getStringAttribute('key_source_container_id');
  }

  // key_source_container_name - computed: true, optional: false, required: false
  public get keySourceContainerName() {
    return this.getStringAttribute('key_source_container_name');
  }

  // key_state - computed: true, optional: false, required: false
  public get keyState() {
    return this.getStringAttribute('key_state');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }

  // key_usage - computed: true, optional: false, required: false
  public get keyUsage() {
    return this.getStringAttribute('key_usage');
  }

  // key_users - computed: true, optional: false, required: false
  public get keyUsers() {
    return this.getListAttribute('key_users');
  }

  // key_users_roles - computed: true, optional: false, required: false
  public get keyUsersRoles() {
    return this.getListAttribute('key_users_roles');
  }

  // kms - computed: true, optional: false, required: false
  public get kms() {
    return this.getStringAttribute('kms');
  }

  // kms_id - computed: true, optional: false, required: false
  public get kmsId() {
    return this.getStringAttribute('kms_id');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // linked - computed: true, optional: false, required: false
  public get linked() {
    return this.getBooleanAttribute('linked');
  }

  // local_key_id - computed: true, optional: false, required: false
  public get localKeyId() {
    return this.getStringAttribute('local_key_id');
  }

  // local_key_name - computed: true, optional: false, required: false
  public get localKeyName() {
    return this.getStringAttribute('local_key_name');
  }

  // multi_region - computed: true, optional: false, required: false
  public get multiRegion() {
    return this.getBooleanAttribute('multi_region');
  }

  // multi_region_key_type - computed: true, optional: false, required: false
  public get multiRegionKeyType() {
    return this.getStringAttribute('multi_region_key_type');
  }

  // multi_region_primary_key - computed: true, optional: false, required: false
  private _multiRegionPrimaryKey = new cdktf.StringMap(this, "multi_region_primary_key");
  public get multiRegionPrimaryKey() {
    return this._multiRegionPrimaryKey;
  }

  // multi_region_replica_keys - computed: true, optional: false, required: false
  private _multiRegionReplicaKeys = new cdktf.StringMapList(this, "multi_region_replica_keys", false);
  public get multiRegionReplicaKeys() {
    return this._multiRegionReplicaKeys;
  }

  // origin - computed: true, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // policy_template_tag - computed: true, optional: false, required: false
  private _policyTemplateTag = new cdktf.StringMap(this, "policy_template_tag");
  public get policyTemplateTag() {
    return this._policyTemplateTag;
  }

  // region - computed: true, optional: true, required: false
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

  // replica_policy - computed: true, optional: false, required: false
  public get replicaPolicy() {
    return this.getStringAttribute('replica_policy');
  }

  // rotated_at - computed: true, optional: false, required: false
  public get rotatedAt() {
    return this.getStringAttribute('rotated_at');
  }

  // rotated_from - computed: true, optional: false, required: false
  public get rotatedFrom() {
    return this.getStringAttribute('rotated_from');
  }

  // rotated_to - computed: true, optional: false, required: false
  public get rotatedTo() {
    return this.getStringAttribute('rotated_to');
  }

  // rotation_status - computed: true, optional: false, required: false
  public get rotationStatus() {
    return this.getStringAttribute('rotation_status');
  }

  // synced_at - computed: true, optional: false, required: false
  public get syncedAt() {
    return this.getStringAttribute('synced_at');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // valid_to - computed: true, optional: false, required: false
  public get validTo() {
    return this.getStringAttribute('valid_to');
  }

  // key_policy - computed: false, optional: true, required: false
  private _keyPolicy = new DataCiphertrustAwsCloudhsmKeyKeyPolicyOutputReference(this, "key_policy");
  public get keyPolicy() {
    return this._keyPolicy;
  }
  public putKeyPolicy(value: DataCiphertrustAwsCloudhsmKeyKeyPolicy) {
    this._keyPolicy.internalValue = value;
  }
  public resetKeyPolicy() {
    this._keyPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPolicyInput() {
    return this._keyPolicy.internalValue;
  }

  // local_hosted_params - computed: false, optional: true, required: false
  private _localHostedParams = new DataCiphertrustAwsCloudhsmKeyLocalHostedParamsList(this, "local_hosted_params", false);
  public get localHostedParams() {
    return this._localHostedParams;
  }
  public putLocalHostedParams(value: DataCiphertrustAwsCloudhsmKeyLocalHostedParams[] | cdktf.IResolvable) {
    this._localHostedParams.internalValue = value;
  }
  public resetLocalHostedParams() {
    this._localHostedParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localHostedParamsInput() {
    return this._localHostedParams.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alias),
      arn: cdktf.stringToTerraform(this._arn),
      bypass_policy_lockout_safety_check: cdktf.booleanToTerraform(this._bypassPolicyLockoutSafetyCheck),
      description: cdktf.stringToTerraform(this._description),
      key_id: cdktf.stringToTerraform(this._keyId),
      origin: cdktf.stringToTerraform(this._origin),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      key_policy: dataCiphertrustAwsCloudhsmKeyKeyPolicyToTerraform(this._keyPolicy.internalValue),
      local_hosted_params: cdktf.listMapper(dataCiphertrustAwsCloudhsmKeyLocalHostedParamsToTerraform, true)(this._localHostedParams.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alias),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      arn: {
        value: cdktf.stringToHclTerraform(this._arn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bypass_policy_lockout_safety_check: {
        value: cdktf.booleanToHclTerraform(this._bypassPolicyLockoutSafetyCheck),
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
      key_id: {
        value: cdktf.stringToHclTerraform(this._keyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin: {
        value: cdktf.stringToHclTerraform(this._origin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      key_policy: {
        value: dataCiphertrustAwsCloudhsmKeyKeyPolicyToHclTerraform(this._keyPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCiphertrustAwsCloudhsmKeyKeyPolicyList",
      },
      local_hosted_params: {
        value: cdktf.listMapperHcl(dataCiphertrustAwsCloudhsmKeyLocalHostedParamsToHclTerraform, true)(this._localHostedParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCiphertrustAwsCloudhsmKeyLocalHostedParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
