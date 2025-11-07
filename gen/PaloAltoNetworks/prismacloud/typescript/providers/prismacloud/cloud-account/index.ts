// https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * to disable cloud account instead of deleting on calling destroy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#disable_on_destroy CloudAccount#disable_on_destroy}
  */
  readonly disableOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#id CloudAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * alibaba_cloud block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#alibaba_cloud CloudAccount#alibaba_cloud}
  */
  readonly alibabaCloud?: CloudAccountAlibabaCloud;
  /**
  * aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#aws CloudAccount#aws}
  */
  readonly aws?: CloudAccountAws;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#azure CloudAccount#azure}
  */
  readonly azure?: CloudAccountAzure;
  /**
  * gcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#gcp CloudAccount#gcp}
  */
  readonly gcp?: CloudAccountGcp;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#timeouts CloudAccount#timeouts}
  */
  readonly timeouts?: CloudAccountTimeouts;
}
export interface CloudAccountAlibabaCloud {
  /**
  * Alibaba account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#account_id CloudAccount#account_id}
  */
  readonly accountId: string;
  /**
  * Whether or not the account is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#enabled CloudAccount#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of account IDs to which you are assigning this account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#group_ids CloudAccount#group_ids}
  */
  readonly groupIds: string[];
  /**
  * Name to be used for the account on the Prisma Cloud platform (must be unique)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#name CloudAccount#name}
  */
  readonly name: string;
  /**
  * Unique identifier for an Alibaba RAM role resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#ram_arn CloudAccount#ram_arn}
  */
  readonly ramArn: string;
}

export function cloudAccountAlibabaCloudToTerraform(struct?: CloudAccountAlibabaCloudOutputReference | CloudAccountAlibabaCloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupIds),
    name: cdktf.stringToTerraform(struct!.name),
    ram_arn: cdktf.stringToTerraform(struct!.ramArn),
  }
}


export function cloudAccountAlibabaCloudToHclTerraform(struct?: CloudAccountAlibabaCloudOutputReference | CloudAccountAlibabaCloud): any {
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
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ram_arn: {
      value: cdktf.stringToHclTerraform(struct!.ramArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAccountAlibabaCloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAccountAlibabaCloud | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._groupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIds = this._groupIds;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ramArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.ramArn = this._ramArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAccountAlibabaCloud | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountId = undefined;
      this._enabled = undefined;
      this._groupIds = undefined;
      this._name = undefined;
      this._ramArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountId = value.accountId;
      this._enabled = value.enabled;
      this._groupIds = value.groupIds;
      this._name = value.name;
      this._ramArn = value.ramArn;
    }
  }

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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // group_ids - computed: false, optional: false, required: true
  private _groupIds?: string[]; 
  public get groupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('group_ids'));
  }
  public set groupIds(value: string[]) {
    this._groupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
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

  // ram_arn - computed: false, optional: false, required: true
  private _ramArn?: string; 
  public get ramArn() {
    return this.getStringAttribute('ram_arn');
  }
  public set ramArn(value: string) {
    this._ramArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ramArnInput() {
    return this._ramArn;
  }
}
export interface CloudAccountAws {
  /**
  * AWS account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#account_id CloudAccount#account_id}
  */
  readonly accountId: string;
  /**
  * Account type - organization or account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#account_type CloudAccount#account_type}
  */
  readonly accountType?: string;
  /**
  * Whether or not the account is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#enabled CloudAccount#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * AWS account external ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#external_id CloudAccount#external_id}
  */
  readonly externalId: string;
  /**
  * List of account IDs to which you are assigning this account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#group_ids CloudAccount#group_ids}
  */
  readonly groupIds: string[];
  /**
  * Name to be used for the account on the Prisma Cloud platform (must be unique)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#name CloudAccount#name}
  */
  readonly name: string;
  /**
  * Monitor or Monitor and Protect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#protection_mode CloudAccount#protection_mode}
  */
  readonly protectionMode?: string;
  /**
  * Unique identifier for an AWS resource (ARN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#role_arn CloudAccount#role_arn}
  */
  readonly roleArn: string;
}

export function cloudAccountAwsToTerraform(struct?: CloudAccountAwsOutputReference | CloudAccountAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    account_type: cdktf.stringToTerraform(struct!.accountType),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupIds),
    name: cdktf.stringToTerraform(struct!.name),
    protection_mode: cdktf.stringToTerraform(struct!.protectionMode),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function cloudAccountAwsToHclTerraform(struct?: CloudAccountAwsOutputReference | CloudAccountAws): any {
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
    account_type: {
      value: cdktf.stringToHclTerraform(struct!.accountType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protection_mode: {
      value: cdktf.stringToHclTerraform(struct!.protectionMode),
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

export class CloudAccountAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAccountAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._accountType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountType = this._accountType;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._groupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIds = this._groupIds;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionMode = this._protectionMode;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAccountAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountId = undefined;
      this._accountType = undefined;
      this._enabled = undefined;
      this._externalId = undefined;
      this._groupIds = undefined;
      this._name = undefined;
      this._protectionMode = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountId = value.accountId;
      this._accountType = value.accountType;
      this._enabled = value.enabled;
      this._externalId = value.externalId;
      this._groupIds = value.groupIds;
      this._name = value.name;
      this._protectionMode = value.protectionMode;
      this._roleArn = value.roleArn;
    }
  }

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

  // account_type - computed: false, optional: true, required: false
  private _accountType?: string; 
  public get accountType() {
    return this.getStringAttribute('account_type');
  }
  public set accountType(value: string) {
    this._accountType = value;
  }
  public resetAccountType() {
    this._accountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTypeInput() {
    return this._accountType;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // external_id - computed: false, optional: false, required: true
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // group_ids - computed: false, optional: false, required: true
  private _groupIds?: string[]; 
  public get groupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('group_ids'));
  }
  public set groupIds(value: string[]) {
    this._groupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
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

  // protection_mode - computed: false, optional: true, required: false
  private _protectionMode?: string; 
  public get protectionMode() {
    return this.getStringAttribute('protection_mode');
  }
  public set protectionMode(value: string) {
    this._protectionMode = value;
  }
  public resetProtectionMode() {
    this._protectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionModeInput() {
    return this._protectionMode;
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
export interface CloudAccountAzure {
  /**
  * Azure account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#account_id CloudAccount#account_id}
  */
  readonly accountId: string;
  /**
  * Account type - organization or account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#account_type CloudAccount#account_type}
  */
  readonly accountType?: string;
  /**
  * Application ID registered with Active Directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#client_id CloudAccount#client_id}
  */
  readonly clientId: string;
  /**
  * Whether or not the account is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#enabled CloudAccount#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of account IDs to which you are assigning this account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#group_ids CloudAccount#group_ids}
  */
  readonly groupIds: string[];
  /**
  * Application ID key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#key CloudAccount#key}
  */
  readonly key: string;
  /**
  * Automatically ingest flow logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#monitor_flow_logs CloudAccount#monitor_flow_logs}
  */
  readonly monitorFlowLogs?: boolean | cdktf.IResolvable;
  /**
  * Name to be used for the account on the Prisma Cloud platform (must be unique)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#name CloudAccount#name}
  */
  readonly name: string;
  /**
  * Monitor or Monitor and Protect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#protection_mode CloudAccount#protection_mode}
  */
  readonly protectionMode?: string;
  /**
  * Unique ID of the service principal object associated with the Prisma Cloud application that you create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#service_principal_id CloudAccount#service_principal_id}
  */
  readonly servicePrincipalId: string;
  /**
  * Active Directory ID associated with Azure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#tenant_id CloudAccount#tenant_id}
  */
  readonly tenantId: string;
}

export function cloudAccountAzureToTerraform(struct?: CloudAccountAzureOutputReference | CloudAccountAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    account_type: cdktf.stringToTerraform(struct!.accountType),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupIds),
    key: cdktf.stringToTerraform(struct!.key),
    monitor_flow_logs: cdktf.booleanToTerraform(struct!.monitorFlowLogs),
    name: cdktf.stringToTerraform(struct!.name),
    protection_mode: cdktf.stringToTerraform(struct!.protectionMode),
    service_principal_id: cdktf.stringToTerraform(struct!.servicePrincipalId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function cloudAccountAzureToHclTerraform(struct?: CloudAccountAzureOutputReference | CloudAccountAzure): any {
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
    account_type: {
      value: cdktf.stringToHclTerraform(struct!.accountType),
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
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor_flow_logs: {
      value: cdktf.booleanToHclTerraform(struct!.monitorFlowLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protection_mode: {
      value: cdktf.stringToHclTerraform(struct!.protectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_principal_id: {
      value: cdktf.stringToHclTerraform(struct!.servicePrincipalId),
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

export class CloudAccountAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAccountAzure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._accountType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountType = this._accountType;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._groupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIds = this._groupIds;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._monitorFlowLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorFlowLogs = this._monitorFlowLogs;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionMode = this._protectionMode;
    }
    if (this._servicePrincipalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrincipalId = this._servicePrincipalId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAccountAzure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountId = undefined;
      this._accountType = undefined;
      this._clientId = undefined;
      this._enabled = undefined;
      this._groupIds = undefined;
      this._key = undefined;
      this._monitorFlowLogs = undefined;
      this._name = undefined;
      this._protectionMode = undefined;
      this._servicePrincipalId = undefined;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountId = value.accountId;
      this._accountType = value.accountType;
      this._clientId = value.clientId;
      this._enabled = value.enabled;
      this._groupIds = value.groupIds;
      this._key = value.key;
      this._monitorFlowLogs = value.monitorFlowLogs;
      this._name = value.name;
      this._protectionMode = value.protectionMode;
      this._servicePrincipalId = value.servicePrincipalId;
      this._tenantId = value.tenantId;
    }
  }

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

  // account_type - computed: false, optional: true, required: false
  private _accountType?: string; 
  public get accountType() {
    return this.getStringAttribute('account_type');
  }
  public set accountType(value: string) {
    this._accountType = value;
  }
  public resetAccountType() {
    this._accountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTypeInput() {
    return this._accountType;
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // group_ids - computed: false, optional: false, required: true
  private _groupIds?: string[]; 
  public get groupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('group_ids'));
  }
  public set groupIds(value: string[]) {
    this._groupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
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

  // monitor_flow_logs - computed: false, optional: true, required: false
  private _monitorFlowLogs?: boolean | cdktf.IResolvable; 
  public get monitorFlowLogs() {
    return this.getBooleanAttribute('monitor_flow_logs');
  }
  public set monitorFlowLogs(value: boolean | cdktf.IResolvable) {
    this._monitorFlowLogs = value;
  }
  public resetMonitorFlowLogs() {
    this._monitorFlowLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorFlowLogsInput() {
    return this._monitorFlowLogs;
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

  // protection_mode - computed: false, optional: true, required: false
  private _protectionMode?: string; 
  public get protectionMode() {
    return this.getStringAttribute('protection_mode');
  }
  public set protectionMode(value: string) {
    this._protectionMode = value;
  }
  public resetProtectionMode() {
    this._protectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionModeInput() {
    return this._protectionMode;
  }

  // service_principal_id - computed: false, optional: false, required: true
  private _servicePrincipalId?: string; 
  public get servicePrincipalId() {
    return this.getStringAttribute('service_principal_id');
  }
  public set servicePrincipalId(value: string) {
    this._servicePrincipalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalIdInput() {
    return this._servicePrincipalId;
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
export interface CloudAccountGcp {
  /**
  * GCP project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#account_id CloudAccount#account_id}
  */
  readonly accountId: string;
  /**
  * Account type - organization or account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#account_type CloudAccount#account_type}
  */
  readonly accountType?: string;
  /**
  * Enable flow log compression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#compression_enabled CloudAccount#compression_enabled}
  */
  readonly compressionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Content of the JSON credentials file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#credentials_json CloudAccount#credentials_json}
  */
  readonly credentialsJson: string;
  /**
  * GCP project for flow log compression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#dataflow_enabled_project CloudAccount#dataflow_enabled_project}
  */
  readonly dataflowEnabledProject?: string;
  /**
  * Whether or not the account is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#enabled CloudAccount#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * GCP flow logs storage bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#flow_log_storage_bucket CloudAccount#flow_log_storage_bucket}
  */
  readonly flowLogStorageBucket?: string;
  /**
  * List of account IDs to which you are assigning this account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#group_ids CloudAccount#group_ids}
  */
  readonly groupIds: string[];
  /**
  * Name to be used for the account on the Prisma Cloud platform (must be unique)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#name CloudAccount#name}
  */
  readonly name: string;
  /**
  * Monitor or Monitor and Protect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#protection_mode CloudAccount#protection_mode}
  */
  readonly protectionMode?: string;
}

export function cloudAccountGcpToTerraform(struct?: CloudAccountGcpOutputReference | CloudAccountGcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    account_type: cdktf.stringToTerraform(struct!.accountType),
    compression_enabled: cdktf.booleanToTerraform(struct!.compressionEnabled),
    credentials_json: cdktf.stringToTerraform(struct!.credentialsJson),
    dataflow_enabled_project: cdktf.stringToTerraform(struct!.dataflowEnabledProject),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    flow_log_storage_bucket: cdktf.stringToTerraform(struct!.flowLogStorageBucket),
    group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupIds),
    name: cdktf.stringToTerraform(struct!.name),
    protection_mode: cdktf.stringToTerraform(struct!.protectionMode),
  }
}


export function cloudAccountGcpToHclTerraform(struct?: CloudAccountGcpOutputReference | CloudAccountGcp): any {
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
    account_type: {
      value: cdktf.stringToHclTerraform(struct!.accountType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.compressionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    credentials_json: {
      value: cdktf.stringToHclTerraform(struct!.credentialsJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataflow_enabled_project: {
      value: cdktf.stringToHclTerraform(struct!.dataflowEnabledProject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flow_log_storage_bucket: {
      value: cdktf.stringToHclTerraform(struct!.flowLogStorageBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protection_mode: {
      value: cdktf.stringToHclTerraform(struct!.protectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudAccountGcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudAccountGcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._accountType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountType = this._accountType;
    }
    if (this._compressionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionEnabled = this._compressionEnabled;
    }
    if (this._credentialsJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsJson = this._credentialsJson;
    }
    if (this._dataflowEnabledProject !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataflowEnabledProject = this._dataflowEnabledProject;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._flowLogStorageBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowLogStorageBucket = this._flowLogStorageBucket;
    }
    if (this._groupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIds = this._groupIds;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionMode = this._protectionMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudAccountGcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountId = undefined;
      this._accountType = undefined;
      this._compressionEnabled = undefined;
      this._credentialsJson = undefined;
      this._dataflowEnabledProject = undefined;
      this._enabled = undefined;
      this._flowLogStorageBucket = undefined;
      this._groupIds = undefined;
      this._name = undefined;
      this._protectionMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountId = value.accountId;
      this._accountType = value.accountType;
      this._compressionEnabled = value.compressionEnabled;
      this._credentialsJson = value.credentialsJson;
      this._dataflowEnabledProject = value.dataflowEnabledProject;
      this._enabled = value.enabled;
      this._flowLogStorageBucket = value.flowLogStorageBucket;
      this._groupIds = value.groupIds;
      this._name = value.name;
      this._protectionMode = value.protectionMode;
    }
  }

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

  // account_type - computed: false, optional: true, required: false
  private _accountType?: string; 
  public get accountType() {
    return this.getStringAttribute('account_type');
  }
  public set accountType(value: string) {
    this._accountType = value;
  }
  public resetAccountType() {
    this._accountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTypeInput() {
    return this._accountType;
  }

  // compression_enabled - computed: false, optional: true, required: false
  private _compressionEnabled?: boolean | cdktf.IResolvable; 
  public get compressionEnabled() {
    return this.getBooleanAttribute('compression_enabled');
  }
  public set compressionEnabled(value: boolean | cdktf.IResolvable) {
    this._compressionEnabled = value;
  }
  public resetCompressionEnabled() {
    this._compressionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionEnabledInput() {
    return this._compressionEnabled;
  }

  // credentials_json - computed: false, optional: false, required: true
  private _credentialsJson?: string; 
  public get credentialsJson() {
    return this.getStringAttribute('credentials_json');
  }
  public set credentialsJson(value: string) {
    this._credentialsJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsJsonInput() {
    return this._credentialsJson;
  }

  // dataflow_enabled_project - computed: false, optional: true, required: false
  private _dataflowEnabledProject?: string; 
  public get dataflowEnabledProject() {
    return this.getStringAttribute('dataflow_enabled_project');
  }
  public set dataflowEnabledProject(value: string) {
    this._dataflowEnabledProject = value;
  }
  public resetDataflowEnabledProject() {
    this._dataflowEnabledProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataflowEnabledProjectInput() {
    return this._dataflowEnabledProject;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // flow_log_storage_bucket - computed: false, optional: true, required: false
  private _flowLogStorageBucket?: string; 
  public get flowLogStorageBucket() {
    return this.getStringAttribute('flow_log_storage_bucket');
  }
  public set flowLogStorageBucket(value: string) {
    this._flowLogStorageBucket = value;
  }
  public resetFlowLogStorageBucket() {
    this._flowLogStorageBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowLogStorageBucketInput() {
    return this._flowLogStorageBucket;
  }

  // group_ids - computed: false, optional: false, required: true
  private _groupIds?: string[]; 
  public get groupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('group_ids'));
  }
  public set groupIds(value: string[]) {
    this._groupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
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

  // protection_mode - computed: false, optional: true, required: false
  private _protectionMode?: string; 
  public get protectionMode() {
    return this.getStringAttribute('protection_mode');
  }
  public set protectionMode(value: string) {
    this._protectionMode = value;
  }
  public resetProtectionMode() {
    this._protectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionModeInput() {
    return this._protectionMode;
  }
}
export interface CloudAccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#create CloudAccount#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#delete CloudAccount#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#update CloudAccount#update}
  */
  readonly update?: string;
}

export function cloudAccountTimeoutsToTerraform(struct?: CloudAccountTimeouts | cdktf.IResolvable): any {
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


export function cloudAccountTimeoutsToHclTerraform(struct?: CloudAccountTimeouts | cdktf.IResolvable): any {
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

export class CloudAccountTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudAccountTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudAccountTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account prismacloud_cloud_account}
*/
export class CloudAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud_cloud_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudAccount to import
  * @param importFromId The id of the existing CloudAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud_cloud_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/cloud_account prismacloud_cloud_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudAccountConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudAccountConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prismacloud_cloud_account',
      terraformGeneratorMetadata: {
        providerName: 'prismacloud',
        providerVersion: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disableOnDestroy = config.disableOnDestroy;
    this._id = config.id;
    this._alibabaCloud.internalValue = config.alibabaCloud;
    this._aws.internalValue = config.aws;
    this._azure.internalValue = config.azure;
    this._gcp.internalValue = config.gcp;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_on_destroy - computed: false, optional: true, required: false
  private _disableOnDestroy?: boolean | cdktf.IResolvable; 
  public get disableOnDestroy() {
    return this.getBooleanAttribute('disable_on_destroy');
  }
  public set disableOnDestroy(value: boolean | cdktf.IResolvable) {
    this._disableOnDestroy = value;
  }
  public resetDisableOnDestroy() {
    this._disableOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOnDestroyInput() {
    return this._disableOnDestroy;
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

  // alibaba_cloud - computed: false, optional: true, required: false
  private _alibabaCloud = new CloudAccountAlibabaCloudOutputReference(this, "alibaba_cloud");
  public get alibabaCloud() {
    return this._alibabaCloud;
  }
  public putAlibabaCloud(value: CloudAccountAlibabaCloud) {
    this._alibabaCloud.internalValue = value;
  }
  public resetAlibabaCloud() {
    this._alibabaCloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alibabaCloudInput() {
    return this._alibabaCloud.internalValue;
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new CloudAccountAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: CloudAccountAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new CloudAccountAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: CloudAccountAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // gcp - computed: false, optional: true, required: false
  private _gcp = new CloudAccountGcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }
  public putGcp(value: CloudAccountGcp) {
    this._gcp.internalValue = value;
  }
  public resetGcp() {
    this._gcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpInput() {
    return this._gcp.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudAccountTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudAccountTimeouts) {
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
      disable_on_destroy: cdktf.booleanToTerraform(this._disableOnDestroy),
      id: cdktf.stringToTerraform(this._id),
      alibaba_cloud: cloudAccountAlibabaCloudToTerraform(this._alibabaCloud.internalValue),
      aws: cloudAccountAwsToTerraform(this._aws.internalValue),
      azure: cloudAccountAzureToTerraform(this._azure.internalValue),
      gcp: cloudAccountGcpToTerraform(this._gcp.internalValue),
      timeouts: cloudAccountTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._disableOnDestroy),
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
      alibaba_cloud: {
        value: cloudAccountAlibabaCloudToHclTerraform(this._alibabaCloud.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAccountAlibabaCloudList",
      },
      aws: {
        value: cloudAccountAwsToHclTerraform(this._aws.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAccountAwsList",
      },
      azure: {
        value: cloudAccountAzureToHclTerraform(this._azure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAccountAzureList",
      },
      gcp: {
        value: cloudAccountGcpToHclTerraform(this._gcp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudAccountGcpList",
      },
      timeouts: {
        value: cloudAccountTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudAccountTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
