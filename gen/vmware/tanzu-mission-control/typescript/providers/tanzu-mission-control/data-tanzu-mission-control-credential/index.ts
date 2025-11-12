// https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTanzuMissionControlCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#id DataTanzuMissionControlCredential#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of this credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#name DataTanzuMissionControlCredential#name}
  */
  readonly name: string;
  /**
  * Wait timeout duration until credential resource reaches VALID state. Accepted timeout duration values like 5s, 5m, or 1h, higher than zero.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#ready_wait_timeout DataTanzuMissionControlCredential#ready_wait_timeout}
  */
  readonly readyWaitTimeout?: string;
  /**
  * meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#meta DataTanzuMissionControlCredential#meta}
  */
  readonly meta?: DataTanzuMissionControlCredentialMeta;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#spec DataTanzuMissionControlCredential#spec}
  */
  readonly spec?: DataTanzuMissionControlCredentialSpec;
}
export interface DataTanzuMissionControlCredentialMeta {
  /**
  * Annotations for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#annotations DataTanzuMissionControlCredential#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#description DataTanzuMissionControlCredential#description}
  */
  readonly description?: string;
  /**
  * Labels for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#labels DataTanzuMissionControlCredential#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataTanzuMissionControlCredentialMetaToTerraform(struct?: DataTanzuMissionControlCredentialMetaOutputReference | DataTanzuMissionControlCredentialMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    description: cdktf.stringToTerraform(struct!.description),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataTanzuMissionControlCredentialMetaToHclTerraform(struct?: DataTanzuMissionControlCredentialMetaOutputReference | DataTanzuMissionControlCredentialMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlCredentialMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlCredentialMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlCredentialMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._description = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._description = value.description;
      this._labels = value.labels;
    }
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}
export interface DataTanzuMissionControlCredentialSpecDataAwsCredentialIamRole {
  /**
  * AWS IAM role ARN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#arn DataTanzuMissionControlCredential#arn}
  */
  readonly arn?: string;
  /**
  * An external ID used to assume an AWS IAM role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#ext_id DataTanzuMissionControlCredential#ext_id}
  */
  readonly extId?: string;
}

export function dataTanzuMissionControlCredentialSpecDataAwsCredentialIamRoleToTerraform(struct?: DataTanzuMissionControlCredentialSpecDataAwsCredentialIamRoleOutputReference | DataTanzuMissionControlCredentialSpecDataAwsCredentialIamRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function dataTanzuMissionControlCredentialSpecDataAwsCredentialIamRoleToHclTerraform(struct?: DataTanzuMissionControlCredentialSpecDataAwsCredentialIamRoleOutputReference | DataTanzuMissionControlCredentialSpecDataAwsCredentialIamRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlCredentialSpecDataAwsCredentialIamRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlCredentialSpecDataAwsCredentialIamRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlCredentialSpecDataAwsCredentialIamRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
      this._extId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
      this._extId = value.extId;
    }
  }

  // arn - computed: false, optional: true, required: false
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

  // ext_id - computed: false, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}
export interface DataTanzuMissionControlCredentialSpecDataAwsCredential {
  /**
  * Account ID of the AWS credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#account_id DataTanzuMissionControlCredential#account_id}
  */
  readonly accountId?: string;
  /**
  * Generic credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#generic_credential DataTanzuMissionControlCredential#generic_credential}
  */
  readonly genericCredential?: string;
  /**
  * iam_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#iam_role DataTanzuMissionControlCredential#iam_role}
  */
  readonly iamRole?: DataTanzuMissionControlCredentialSpecDataAwsCredentialIamRole;
}

export function dataTanzuMissionControlCredentialSpecDataAwsCredentialToTerraform(struct?: DataTanzuMissionControlCredentialSpecDataAwsCredentialOutputReference | DataTanzuMissionControlCredentialSpecDataAwsCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    generic_credential: cdktf.stringToTerraform(struct!.genericCredential),
    iam_role: dataTanzuMissionControlCredentialSpecDataAwsCredentialIamRoleToTerraform(struct!.iamRole),
  }
}


export function dataTanzuMissionControlCredentialSpecDataAwsCredentialToHclTerraform(struct?: DataTanzuMissionControlCredentialSpecDataAwsCredentialOutputReference | DataTanzuMissionControlCredentialSpecDataAwsCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generic_credential: {
      value: cdktf.stringToHclTerraform(struct!.genericCredential),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam_role: {
      value: dataTanzuMissionControlCredentialSpecDataAwsCredentialIamRoleToHclTerraform(struct!.iamRole),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlCredentialSpecDataAwsCredentialIamRoleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlCredentialSpecDataAwsCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlCredentialSpecDataAwsCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._genericCredential !== undefined) {
      hasAnyValues = true;
      internalValueResult.genericCredential = this._genericCredential;
    }
    if (this._iamRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRole = this._iamRole?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlCredentialSpecDataAwsCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountId = undefined;
      this._genericCredential = undefined;
      this._iamRole.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountId = value.accountId;
      this._genericCredential = value.genericCredential;
      this._iamRole.internalValue = value.iamRole;
    }
  }

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // generic_credential - computed: false, optional: true, required: false
  private _genericCredential?: string; 
  public get genericCredential() {
    return this.getStringAttribute('generic_credential');
  }
  public set genericCredential(value: string) {
    this._genericCredential = value;
  }
  public resetGenericCredential() {
    this._genericCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericCredentialInput() {
    return this._genericCredential;
  }

  // iam_role - computed: false, optional: true, required: false
  private _iamRole = new DataTanzuMissionControlCredentialSpecDataAwsCredentialIamRoleOutputReference(this, "iam_role");
  public get iamRole() {
    return this._iamRole;
  }
  public putIamRole(value: DataTanzuMissionControlCredentialSpecDataAwsCredentialIamRole) {
    this._iamRole.internalValue = value;
  }
  public resetIamRole() {
    this._iamRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleInput() {
    return this._iamRole.internalValue;
  }
}
export interface DataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipal {
  /**
  * Azure Cloud name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#azure_cloud_name DataTanzuMissionControlCredential#azure_cloud_name}
  */
  readonly azureCloudName?: string;
  /**
  * Client ID of the Service Principal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#client_id DataTanzuMissionControlCredential#client_id}
  */
  readonly clientId: string;
  /**
  * Client Secret of the Service Principal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#client_secret DataTanzuMissionControlCredential#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Resource Group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#resource_group DataTanzuMissionControlCredential#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * Subscription ID of the Azure credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#subscription_id DataTanzuMissionControlCredential#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Tenant ID of the Azure credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#tenant_id DataTanzuMissionControlCredential#tenant_id}
  */
  readonly tenantId: string;
}

export function dataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipalToTerraform(struct?: DataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipalOutputReference | DataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_cloud_name: cdktf.stringToTerraform(struct!.azureCloudName),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function dataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipalToHclTerraform(struct?: DataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipalOutputReference | DataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_cloud_name: {
      value: cdktf.stringToHclTerraform(struct!.azureCloudName),
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
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureCloudName !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureCloudName = this._azureCloudName;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureCloudName = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._resourceGroup = undefined;
      this._subscriptionId = undefined;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureCloudName = value.azureCloudName;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._resourceGroup = value.resourceGroup;
      this._subscriptionId = value.subscriptionId;
      this._tenantId = value.tenantId;
    }
  }

  // azure_cloud_name - computed: false, optional: true, required: false
  private _azureCloudName?: string; 
  public get azureCloudName() {
    return this.getStringAttribute('azure_cloud_name');
  }
  public set azureCloudName(value: string) {
    this._azureCloudName = value;
  }
  public resetAzureCloudName() {
    this._azureCloudName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureCloudNameInput() {
    return this._azureCloudName;
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

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface DataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipalWithCertificate {
  /**
  * Azure Cloud name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#azure_cloud_name DataTanzuMissionControlCredential#azure_cloud_name}
  */
  readonly azureCloudName?: string;
  /**
  * Client certificate of the Service Principal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#client_certificate DataTanzuMissionControlCredential#client_certificate}
  */
  readonly clientCertificate: string;
  /**
  * Client ID of the Service Principal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#client_id DataTanzuMissionControlCredential#client_id}
  */
  readonly clientId: string;
  /**
  * IDs of the Azure Subscriptions that the Service Principal can manage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#managed_subscriptions DataTanzuMissionControlCredential#managed_subscriptions}
  */
  readonly managedSubscriptions?: string[];
  /**
  * Subscription ID of the Azure credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#subscription_id DataTanzuMissionControlCredential#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Tenant ID of the Azure credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#tenant_id DataTanzuMissionControlCredential#tenant_id}
  */
  readonly tenantId: string;
}

export function dataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipalWithCertificateToTerraform(struct?: DataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipalWithCertificateOutputReference | DataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipalWithCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_cloud_name: cdktf.stringToTerraform(struct!.azureCloudName),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    managed_subscriptions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.managedSubscriptions),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function dataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipalWithCertificateToHclTerraform(struct?: DataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipalWithCertificateOutputReference | DataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipalWithCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_cloud_name: {
      value: cdktf.stringToHclTerraform(struct!.azureCloudName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
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
    managed_subscriptions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.managedSubscriptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipalWithCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipalWithCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureCloudName !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureCloudName = this._azureCloudName;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._managedSubscriptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedSubscriptions = this._managedSubscriptions;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipalWithCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureCloudName = undefined;
      this._clientCertificate = undefined;
      this._clientId = undefined;
      this._managedSubscriptions = undefined;
      this._subscriptionId = undefined;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureCloudName = value.azureCloudName;
      this._clientCertificate = value.clientCertificate;
      this._clientId = value.clientId;
      this._managedSubscriptions = value.managedSubscriptions;
      this._subscriptionId = value.subscriptionId;
      this._tenantId = value.tenantId;
    }
  }

  // azure_cloud_name - computed: false, optional: true, required: false
  private _azureCloudName?: string; 
  public get azureCloudName() {
    return this.getStringAttribute('azure_cloud_name');
  }
  public set azureCloudName(value: string) {
    this._azureCloudName = value;
  }
  public resetAzureCloudName() {
    this._azureCloudName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureCloudNameInput() {
    return this._azureCloudName;
  }

  // client_certificate - computed: false, optional: false, required: true
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
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

  // managed_subscriptions - computed: false, optional: true, required: false
  private _managedSubscriptions?: string[]; 
  public get managedSubscriptions() {
    return this.getListAttribute('managed_subscriptions');
  }
  public set managedSubscriptions(value: string[]) {
    this._managedSubscriptions = value;
  }
  public resetManagedSubscriptions() {
    this._managedSubscriptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedSubscriptionsInput() {
    return this._managedSubscriptions;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface DataTanzuMissionControlCredentialSpecDataAzureCredential {
  /**
  * service_principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#service_principal DataTanzuMissionControlCredential#service_principal}
  */
  readonly servicePrincipal?: DataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipal;
  /**
  * service_principal_with_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#service_principal_with_certificate DataTanzuMissionControlCredential#service_principal_with_certificate}
  */
  readonly servicePrincipalWithCertificate?: DataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipalWithCertificate;
}

export function dataTanzuMissionControlCredentialSpecDataAzureCredentialToTerraform(struct?: DataTanzuMissionControlCredentialSpecDataAzureCredentialOutputReference | DataTanzuMissionControlCredentialSpecDataAzureCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_principal: dataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipalToTerraform(struct!.servicePrincipal),
    service_principal_with_certificate: dataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipalWithCertificateToTerraform(struct!.servicePrincipalWithCertificate),
  }
}


export function dataTanzuMissionControlCredentialSpecDataAzureCredentialToHclTerraform(struct?: DataTanzuMissionControlCredentialSpecDataAzureCredentialOutputReference | DataTanzuMissionControlCredentialSpecDataAzureCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_principal: {
      value: dataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipalToHclTerraform(struct!.servicePrincipal),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipalList",
    },
    service_principal_with_certificate: {
      value: dataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipalWithCertificateToHclTerraform(struct!.servicePrincipalWithCertificate),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipalWithCertificateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlCredentialSpecDataAzureCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlCredentialSpecDataAzureCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._servicePrincipal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrincipal = this._servicePrincipal?.internalValue;
    }
    if (this._servicePrincipalWithCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrincipalWithCertificate = this._servicePrincipalWithCertificate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlCredentialSpecDataAzureCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._servicePrincipal.internalValue = undefined;
      this._servicePrincipalWithCertificate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._servicePrincipal.internalValue = value.servicePrincipal;
      this._servicePrincipalWithCertificate.internalValue = value.servicePrincipalWithCertificate;
    }
  }

  // service_principal - computed: false, optional: true, required: false
  private _servicePrincipal = new DataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipalOutputReference(this, "service_principal");
  public get servicePrincipal() {
    return this._servicePrincipal;
  }
  public putServicePrincipal(value: DataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipal) {
    this._servicePrincipal.internalValue = value;
  }
  public resetServicePrincipal() {
    this._servicePrincipal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalInput() {
    return this._servicePrincipal.internalValue;
  }

  // service_principal_with_certificate - computed: false, optional: true, required: false
  private _servicePrincipalWithCertificate = new DataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipalWithCertificateOutputReference(this, "service_principal_with_certificate");
  public get servicePrincipalWithCertificate() {
    return this._servicePrincipalWithCertificate;
  }
  public putServicePrincipalWithCertificate(value: DataTanzuMissionControlCredentialSpecDataAzureCredentialServicePrincipalWithCertificate) {
    this._servicePrincipalWithCertificate.internalValue = value;
  }
  public resetServicePrincipalWithCertificate() {
    this._servicePrincipalWithCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalWithCertificateInput() {
    return this._servicePrincipalWithCertificate.internalValue;
  }
}
export interface DataTanzuMissionControlCredentialSpecDataKeyValue {
  /**
  * Data secret data in the format of key-value pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#data DataTanzuMissionControlCredential#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * Type of Secret data, usually mapped to k8s secret type. Supported types: [SECRET_TYPE_UNSPECIFIED,OPAQUE_SECRET_TYPE,DOCKERCONFIGJSON_SECRET_TYPE]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#type DataTanzuMissionControlCredential#type}
  */
  readonly type?: string;
}

export function dataTanzuMissionControlCredentialSpecDataKeyValueToTerraform(struct?: DataTanzuMissionControlCredentialSpecDataKeyValueOutputReference | DataTanzuMissionControlCredentialSpecDataKeyValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataTanzuMissionControlCredentialSpecDataKeyValueToHclTerraform(struct?: DataTanzuMissionControlCredentialSpecDataKeyValueOutputReference | DataTanzuMissionControlCredentialSpecDataKeyValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.data),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class DataTanzuMissionControlCredentialSpecDataKeyValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlCredentialSpecDataKeyValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlCredentialSpecDataKeyValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data = value.data;
      this._type = value.type;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
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
export interface DataTanzuMissionControlCredentialSpecData {
  /**
  * Generic credential data type used to hold a blob of data represented as string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#generic_credential DataTanzuMissionControlCredential#generic_credential}
  */
  readonly genericCredential?: string;
  /**
  * aws_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#aws_credential DataTanzuMissionControlCredential#aws_credential}
  */
  readonly awsCredential?: DataTanzuMissionControlCredentialSpecDataAwsCredential;
  /**
  * azure_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#azure_credential DataTanzuMissionControlCredential#azure_credential}
  */
  readonly azureCredential?: DataTanzuMissionControlCredentialSpecDataAzureCredential;
  /**
  * key_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#key_value DataTanzuMissionControlCredential#key_value}
  */
  readonly keyValue?: DataTanzuMissionControlCredentialSpecDataKeyValue;
}

export function dataTanzuMissionControlCredentialSpecDataToTerraform(struct?: DataTanzuMissionControlCredentialSpecDataOutputReference | DataTanzuMissionControlCredentialSpecData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generic_credential: cdktf.stringToTerraform(struct!.genericCredential),
    aws_credential: dataTanzuMissionControlCredentialSpecDataAwsCredentialToTerraform(struct!.awsCredential),
    azure_credential: dataTanzuMissionControlCredentialSpecDataAzureCredentialToTerraform(struct!.azureCredential),
    key_value: dataTanzuMissionControlCredentialSpecDataKeyValueToTerraform(struct!.keyValue),
  }
}


export function dataTanzuMissionControlCredentialSpecDataToHclTerraform(struct?: DataTanzuMissionControlCredentialSpecDataOutputReference | DataTanzuMissionControlCredentialSpecData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generic_credential: {
      value: cdktf.stringToHclTerraform(struct!.genericCredential),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_credential: {
      value: dataTanzuMissionControlCredentialSpecDataAwsCredentialToHclTerraform(struct!.awsCredential),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlCredentialSpecDataAwsCredentialList",
    },
    azure_credential: {
      value: dataTanzuMissionControlCredentialSpecDataAzureCredentialToHclTerraform(struct!.azureCredential),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlCredentialSpecDataAzureCredentialList",
    },
    key_value: {
      value: dataTanzuMissionControlCredentialSpecDataKeyValueToHclTerraform(struct!.keyValue),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlCredentialSpecDataKeyValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlCredentialSpecDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlCredentialSpecData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._genericCredential !== undefined) {
      hasAnyValues = true;
      internalValueResult.genericCredential = this._genericCredential;
    }
    if (this._awsCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsCredential = this._awsCredential?.internalValue;
    }
    if (this._azureCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureCredential = this._azureCredential?.internalValue;
    }
    if (this._keyValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValue = this._keyValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlCredentialSpecData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._genericCredential = undefined;
      this._awsCredential.internalValue = undefined;
      this._azureCredential.internalValue = undefined;
      this._keyValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._genericCredential = value.genericCredential;
      this._awsCredential.internalValue = value.awsCredential;
      this._azureCredential.internalValue = value.azureCredential;
      this._keyValue.internalValue = value.keyValue;
    }
  }

  // generic_credential - computed: false, optional: true, required: false
  private _genericCredential?: string; 
  public get genericCredential() {
    return this.getStringAttribute('generic_credential');
  }
  public set genericCredential(value: string) {
    this._genericCredential = value;
  }
  public resetGenericCredential() {
    this._genericCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericCredentialInput() {
    return this._genericCredential;
  }

  // aws_credential - computed: false, optional: true, required: false
  private _awsCredential = new DataTanzuMissionControlCredentialSpecDataAwsCredentialOutputReference(this, "aws_credential");
  public get awsCredential() {
    return this._awsCredential;
  }
  public putAwsCredential(value: DataTanzuMissionControlCredentialSpecDataAwsCredential) {
    this._awsCredential.internalValue = value;
  }
  public resetAwsCredential() {
    this._awsCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCredentialInput() {
    return this._awsCredential.internalValue;
  }

  // azure_credential - computed: false, optional: true, required: false
  private _azureCredential = new DataTanzuMissionControlCredentialSpecDataAzureCredentialOutputReference(this, "azure_credential");
  public get azureCredential() {
    return this._azureCredential;
  }
  public putAzureCredential(value: DataTanzuMissionControlCredentialSpecDataAzureCredential) {
    this._azureCredential.internalValue = value;
  }
  public resetAzureCredential() {
    this._azureCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureCredentialInput() {
    return this._azureCredential.internalValue;
  }

  // key_value - computed: false, optional: true, required: false
  private _keyValue = new DataTanzuMissionControlCredentialSpecDataKeyValueOutputReference(this, "key_value");
  public get keyValue() {
    return this._keyValue;
  }
  public putKeyValue(value: DataTanzuMissionControlCredentialSpecDataKeyValue) {
    this._keyValue.internalValue = value;
  }
  public resetKeyValue() {
    this._keyValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValueInput() {
    return this._keyValue.internalValue;
  }
}
export interface DataTanzuMissionControlCredentialSpec {
  /**
  * The Tanzu capability for which the credential shall be used. Value must be in list [DATA_PROTECTION TANZU_OBSERVABILITY TANZU_SERVICE_MESH PROXY_CONFIG MANAGED_K8S_PROVIDER IMAGE_REGISTRY]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#capability DataTanzuMissionControlCredential#capability}
  */
  readonly capability?: string;
  /**
  * The Tanzu provider for which describes credential data type. Value must be in list [PROVIDER_UNSPECIFIED,AWS_EC2,GENERIC_S3,AZURE_AD,AWS_EKS,AZURE_AKS,GENERIC_KEY_VALUE]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#provider DataTanzuMissionControlCredential#provider}
  */
  readonly provider?: string;
  /**
  * data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#data DataTanzuMissionControlCredential#data}
  */
  readonly data?: DataTanzuMissionControlCredentialSpecData;
}

export function dataTanzuMissionControlCredentialSpecToTerraform(struct?: DataTanzuMissionControlCredentialSpecOutputReference | DataTanzuMissionControlCredentialSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capability: cdktf.stringToTerraform(struct!.capability),
    provider: cdktf.stringToTerraform(struct!.provider),
    data: dataTanzuMissionControlCredentialSpecDataToTerraform(struct!.data),
  }
}


export function dataTanzuMissionControlCredentialSpecToHclTerraform(struct?: DataTanzuMissionControlCredentialSpecOutputReference | DataTanzuMissionControlCredentialSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capability: {
      value: cdktf.stringToHclTerraform(struct!.capability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data: {
      value: dataTanzuMissionControlCredentialSpecDataToHclTerraform(struct!.data),
      isBlock: true,
      type: "list",
      storageClassType: "DataTanzuMissionControlCredentialSpecDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTanzuMissionControlCredentialSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTanzuMissionControlCredentialSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capability !== undefined) {
      hasAnyValues = true;
      internalValueResult.capability = this._capability;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTanzuMissionControlCredentialSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capability = undefined;
      this._provider = undefined;
      this._data.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capability = value.capability;
      this._provider = value.provider;
      this._data.internalValue = value.data;
    }
  }

  // capability - computed: false, optional: true, required: false
  private _capability?: string; 
  public get capability() {
    return this.getStringAttribute('capability');
  }
  public set capability(value: string) {
    this._capability = value;
  }
  public resetCapability() {
    this._capability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilityInput() {
    return this._capability;
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // data - computed: false, optional: true, required: false
  private _data = new DataTanzuMissionControlCredentialSpecDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: DataTanzuMissionControlCredentialSpecData) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential tanzu-mission-control_credential}
*/
export class DataTanzuMissionControlCredential extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tanzu-mission-control_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTanzuMissionControlCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTanzuMissionControlCredential to import
  * @param importFromId The id of the existing DataTanzuMissionControlCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTanzuMissionControlCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tanzu-mission-control_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/tanzu-mission-control/1.4.9/docs/data-sources/credential tanzu-mission-control_credential} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTanzuMissionControlCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: DataTanzuMissionControlCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'tanzu-mission-control_credential',
      terraformGeneratorMetadata: {
        providerName: 'tanzu-mission-control',
        providerVersion: '1.4.9',
        providerVersionConstraint: '1.4.9'
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
    this._readyWaitTimeout = config.readyWaitTimeout;
    this._meta.internalValue = config.meta;
    this._spec.internalValue = config.spec;
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

  // ready_wait_timeout - computed: false, optional: true, required: false
  private _readyWaitTimeout?: string; 
  public get readyWaitTimeout() {
    return this.getStringAttribute('ready_wait_timeout');
  }
  public set readyWaitTimeout(value: string) {
    this._readyWaitTimeout = value;
  }
  public resetReadyWaitTimeout() {
    this._readyWaitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readyWaitTimeoutInput() {
    return this._readyWaitTimeout;
  }

  // status - computed: true, optional: false, required: false
  private _status = new cdktf.StringMap(this, "status");
  public get status() {
    return this._status;
  }

  // meta - computed: false, optional: true, required: false
  private _meta = new DataTanzuMissionControlCredentialMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }
  public putMeta(value: DataTanzuMissionControlCredentialMeta) {
    this._meta.internalValue = value;
  }
  public resetMeta() {
    this._meta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataTanzuMissionControlCredentialSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataTanzuMissionControlCredentialSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      ready_wait_timeout: cdktf.stringToTerraform(this._readyWaitTimeout),
      meta: dataTanzuMissionControlCredentialMetaToTerraform(this._meta.internalValue),
      spec: dataTanzuMissionControlCredentialSpecToTerraform(this._spec.internalValue),
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
      ready_wait_timeout: {
        value: cdktf.stringToHclTerraform(this._readyWaitTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta: {
        value: dataTanzuMissionControlCredentialMetaToHclTerraform(this._meta.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTanzuMissionControlCredentialMetaList",
      },
      spec: {
        value: dataTanzuMissionControlCredentialSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTanzuMissionControlCredentialSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
