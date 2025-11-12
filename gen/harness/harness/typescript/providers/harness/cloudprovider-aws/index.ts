// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudproviderAwsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The plain text AWS access key id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_aws#access_key_id CloudproviderAws#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * The name of the Harness secret containing the AWS access key id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_aws#access_key_id_secret_name CloudproviderAws#access_key_id_secret_name}
  */
  readonly accessKeyIdSecretName?: string;
  /**
  * Select the Delegate to use via one of its Selectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_aws#delegate_selector CloudproviderAws#delegate_selector}
  */
  readonly delegateSelector?: string;
  /**
  * The name of the cloud provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_aws#name CloudproviderAws#name}
  */
  readonly name: string;
  /**
  * The name of the Harness secret containing the AWS secret access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_aws#secret_access_key_secret_name CloudproviderAws#secret_access_key_secret_name}
  */
  readonly secretAccessKeySecretName?: string;
  /**
  * Use the EC2 Instance Profile for Service Accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_aws#use_ec2_iam_credentials CloudproviderAws#use_ec2_iam_credentials}
  */
  readonly useEc2IamCredentials?: boolean | cdktf.IResolvable;
  /**
  * Use the AWS IAM Role for Service Accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_aws#use_irsa CloudproviderAws#use_irsa}
  */
  readonly useIrsa?: boolean | cdktf.IResolvable;
  /**
  * assume_cross_account_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_aws#assume_cross_account_role CloudproviderAws#assume_cross_account_role}
  */
  readonly assumeCrossAccountRole?: CloudproviderAwsAssumeCrossAccountRole;
  /**
  * usage_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_aws#usage_scope CloudproviderAws#usage_scope}
  */
  readonly usageScope?: CloudproviderAwsUsageScope[] | cdktf.IResolvable;
}
export interface CloudproviderAwsAssumeCrossAccountRole {
  /**
  * If the administrator of the account to which the role belongs provided you with an external ID, then enter that value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_aws#external_id CloudproviderAws#external_id}
  */
  readonly externalId?: string;
  /**
  * This is an IAM role in the target deployment AWS account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_aws#role_arn CloudproviderAws#role_arn}
  */
  readonly roleArn: string;
}

export function cloudproviderAwsAssumeCrossAccountRoleToTerraform(struct?: CloudproviderAwsAssumeCrossAccountRoleOutputReference | CloudproviderAwsAssumeCrossAccountRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function cloudproviderAwsAssumeCrossAccountRoleToHclTerraform(struct?: CloudproviderAwsAssumeCrossAccountRoleOutputReference | CloudproviderAwsAssumeCrossAccountRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudproviderAwsAssumeCrossAccountRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudproviderAwsAssumeCrossAccountRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudproviderAwsAssumeCrossAccountRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalId = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalId = value.externalId;
      this._roleArn = value.roleArn;
    }
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}
export interface CloudproviderAwsUsageScope {
  /**
  * Id of the application to scope to. If empty then this scope applies to all applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_aws#application_id CloudproviderAws#application_id}
  */
  readonly applicationId?: string;
  /**
  * Type of environment filter applied. Cannot be used with `environment_id`. Valid options are NON_PRODUCTION_ENVIRONMENTS, PRODUCTION_ENVIRONMENTS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_aws#environment_filter_type CloudproviderAws#environment_filter_type}
  */
  readonly environmentFilterType?: string;
  /**
  * Id of the id of the specific environment to scope to. Cannot be used with `environment_filter_type`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_aws#environment_id CloudproviderAws#environment_id}
  */
  readonly environmentId?: string;
}

export function cloudproviderAwsUsageScopeToTerraform(struct?: CloudproviderAwsUsageScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    environment_filter_type: cdktf.stringToTerraform(struct!.environmentFilterType),
    environment_id: cdktf.stringToTerraform(struct!.environmentId),
  }
}


export function cloudproviderAwsUsageScopeToHclTerraform(struct?: CloudproviderAwsUsageScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_filter_type: {
      value: cdktf.stringToHclTerraform(struct!.environmentFilterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_id: {
      value: cdktf.stringToHclTerraform(struct!.environmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudproviderAwsUsageScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudproviderAwsUsageScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._environmentFilterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentFilterType = this._environmentFilterType;
    }
    if (this._environmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentId = this._environmentId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudproviderAwsUsageScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationId = undefined;
      this._environmentFilterType = undefined;
      this._environmentId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationId = value.applicationId;
      this._environmentFilterType = value.environmentFilterType;
      this._environmentId = value.environmentId;
    }
  }

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // environment_filter_type - computed: false, optional: true, required: false
  private _environmentFilterType?: string; 
  public get environmentFilterType() {
    return this.getStringAttribute('environment_filter_type');
  }
  public set environmentFilterType(value: string) {
    this._environmentFilterType = value;
  }
  public resetEnvironmentFilterType() {
    this._environmentFilterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentFilterTypeInput() {
    return this._environmentFilterType;
  }

  // environment_id - computed: false, optional: true, required: false
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  public resetEnvironmentId() {
    this._environmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }
}

export class CloudproviderAwsUsageScopeList extends cdktf.ComplexList {
  public internalValue? : CloudproviderAwsUsageScope[] | cdktf.IResolvable

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
  public get(index: number): CloudproviderAwsUsageScopeOutputReference {
    return new CloudproviderAwsUsageScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_aws harness_cloudprovider_aws}
*/
export class CloudproviderAws extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_cloudprovider_aws";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudproviderAws resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudproviderAws to import
  * @param importFromId The id of the existing CloudproviderAws that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_aws#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudproviderAws to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_cloudprovider_aws", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/cloudprovider_aws harness_cloudprovider_aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudproviderAwsConfig
  */
  public constructor(scope: Construct, id: string, config: CloudproviderAwsConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_cloudprovider_aws',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0',
        providerVersionConstraint: '0.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessKeyId = config.accessKeyId;
    this._accessKeyIdSecretName = config.accessKeyIdSecretName;
    this._delegateSelector = config.delegateSelector;
    this._name = config.name;
    this._secretAccessKeySecretName = config.secretAccessKeySecretName;
    this._useEc2IamCredentials = config.useEc2IamCredentials;
    this._useIrsa = config.useIrsa;
    this._assumeCrossAccountRole.internalValue = config.assumeCrossAccountRole;
    this._usageScope.internalValue = config.usageScope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // access_key_id_secret_name - computed: false, optional: true, required: false
  private _accessKeyIdSecretName?: string; 
  public get accessKeyIdSecretName() {
    return this.getStringAttribute('access_key_id_secret_name');
  }
  public set accessKeyIdSecretName(value: string) {
    this._accessKeyIdSecretName = value;
  }
  public resetAccessKeyIdSecretName() {
    this._accessKeyIdSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdSecretNameInput() {
    return this._accessKeyIdSecretName;
  }

  // delegate_selector - computed: false, optional: true, required: false
  private _delegateSelector?: string; 
  public get delegateSelector() {
    return this.getStringAttribute('delegate_selector');
  }
  public set delegateSelector(value: string) {
    this._delegateSelector = value;
  }
  public resetDelegateSelector() {
    this._delegateSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateSelectorInput() {
    return this._delegateSelector;
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

  // secret_access_key_secret_name - computed: false, optional: true, required: false
  private _secretAccessKeySecretName?: string; 
  public get secretAccessKeySecretName() {
    return this.getStringAttribute('secret_access_key_secret_name');
  }
  public set secretAccessKeySecretName(value: string) {
    this._secretAccessKeySecretName = value;
  }
  public resetSecretAccessKeySecretName() {
    this._secretAccessKeySecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeySecretNameInput() {
    return this._secretAccessKeySecretName;
  }

  // use_ec2_iam_credentials - computed: false, optional: true, required: false
  private _useEc2IamCredentials?: boolean | cdktf.IResolvable; 
  public get useEc2IamCredentials() {
    return this.getBooleanAttribute('use_ec2_iam_credentials');
  }
  public set useEc2IamCredentials(value: boolean | cdktf.IResolvable) {
    this._useEc2IamCredentials = value;
  }
  public resetUseEc2IamCredentials() {
    this._useEc2IamCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEc2IamCredentialsInput() {
    return this._useEc2IamCredentials;
  }

  // use_irsa - computed: false, optional: true, required: false
  private _useIrsa?: boolean | cdktf.IResolvable; 
  public get useIrsa() {
    return this.getBooleanAttribute('use_irsa');
  }
  public set useIrsa(value: boolean | cdktf.IResolvable) {
    this._useIrsa = value;
  }
  public resetUseIrsa() {
    this._useIrsa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIrsaInput() {
    return this._useIrsa;
  }

  // assume_cross_account_role - computed: false, optional: true, required: false
  private _assumeCrossAccountRole = new CloudproviderAwsAssumeCrossAccountRoleOutputReference(this, "assume_cross_account_role");
  public get assumeCrossAccountRole() {
    return this._assumeCrossAccountRole;
  }
  public putAssumeCrossAccountRole(value: CloudproviderAwsAssumeCrossAccountRole) {
    this._assumeCrossAccountRole.internalValue = value;
  }
  public resetAssumeCrossAccountRole() {
    this._assumeCrossAccountRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeCrossAccountRoleInput() {
    return this._assumeCrossAccountRole.internalValue;
  }

  // usage_scope - computed: false, optional: true, required: false
  private _usageScope = new CloudproviderAwsUsageScopeList(this, "usage_scope", true);
  public get usageScope() {
    return this._usageScope;
  }
  public putUsageScope(value: CloudproviderAwsUsageScope[] | cdktf.IResolvable) {
    this._usageScope.internalValue = value;
  }
  public resetUsageScope() {
    this._usageScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageScopeInput() {
    return this._usageScope.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key_id: cdktf.stringToTerraform(this._accessKeyId),
      access_key_id_secret_name: cdktf.stringToTerraform(this._accessKeyIdSecretName),
      delegate_selector: cdktf.stringToTerraform(this._delegateSelector),
      name: cdktf.stringToTerraform(this._name),
      secret_access_key_secret_name: cdktf.stringToTerraform(this._secretAccessKeySecretName),
      use_ec2_iam_credentials: cdktf.booleanToTerraform(this._useEc2IamCredentials),
      use_irsa: cdktf.booleanToTerraform(this._useIrsa),
      assume_cross_account_role: cloudproviderAwsAssumeCrossAccountRoleToTerraform(this._assumeCrossAccountRole.internalValue),
      usage_scope: cdktf.listMapper(cloudproviderAwsUsageScopeToTerraform, true)(this._usageScope.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key_id: {
        value: cdktf.stringToHclTerraform(this._accessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_key_id_secret_name: {
        value: cdktf.stringToHclTerraform(this._accessKeyIdSecretName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delegate_selector: {
        value: cdktf.stringToHclTerraform(this._delegateSelector),
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
      secret_access_key_secret_name: {
        value: cdktf.stringToHclTerraform(this._secretAccessKeySecretName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_ec2_iam_credentials: {
        value: cdktf.booleanToHclTerraform(this._useEc2IamCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_irsa: {
        value: cdktf.booleanToHclTerraform(this._useIrsa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      assume_cross_account_role: {
        value: cloudproviderAwsAssumeCrossAccountRoleToHclTerraform(this._assumeCrossAccountRole.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudproviderAwsAssumeCrossAccountRoleList",
      },
      usage_scope: {
        value: cdktf.listMapperHcl(cloudproviderAwsUsageScopeToHclTerraform, true)(this._usageScope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudproviderAwsUsageScopeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
