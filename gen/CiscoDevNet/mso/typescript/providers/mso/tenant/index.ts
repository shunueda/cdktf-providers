// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TenantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant#description Tenant#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant#display_name Tenant#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant#id Tenant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant#name Tenant#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant#orchestrator_only Tenant#orchestrator_only}
  */
  readonly orchestratorOnly?: boolean | cdktf.IResolvable;
  /**
  * site_associations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant#site_associations Tenant#site_associations}
  */
  readonly siteAssociations?: TenantSiteAssociations[] | cdktf.IResolvable;
  /**
  * user_associations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant#user_associations Tenant#user_associations}
  */
  readonly userAssociations?: TenantUserAssociations[] | cdktf.IResolvable;
}
export interface TenantSiteAssociations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant#aws_access_key_id Tenant#aws_access_key_id}
  */
  readonly awsAccessKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant#aws_account_id Tenant#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant#aws_secret_key Tenant#aws_secret_key}
  */
  readonly awsSecretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant#azure_access_type Tenant#azure_access_type}
  */
  readonly azureAccessType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant#azure_active_directory_id Tenant#azure_active_directory_id}
  */
  readonly azureActiveDirectoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant#azure_application_id Tenant#azure_application_id}
  */
  readonly azureApplicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant#azure_client_secret Tenant#azure_client_secret}
  */
  readonly azureClientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant#azure_shared_account_id Tenant#azure_shared_account_id}
  */
  readonly azureSharedAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant#azure_subscription_id Tenant#azure_subscription_id}
  */
  readonly azureSubscriptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant#gcp_access_type Tenant#gcp_access_type}
  */
  readonly gcpAccessType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant#gcp_client_id Tenant#gcp_client_id}
  */
  readonly gcpClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant#gcp_email Tenant#gcp_email}
  */
  readonly gcpEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant#gcp_key_id Tenant#gcp_key_id}
  */
  readonly gcpKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant#gcp_name Tenant#gcp_name}
  */
  readonly gcpName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant#gcp_private_key Tenant#gcp_private_key}
  */
  readonly gcpPrivateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant#gcp_project_id Tenant#gcp_project_id}
  */
  readonly gcpProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant#is_aws_account_trusted Tenant#is_aws_account_trusted}
  */
  readonly isAwsAccountTrusted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant#security_domains Tenant#security_domains}
  */
  readonly securityDomains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant#site_id Tenant#site_id}
  */
  readonly siteId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant#vendor Tenant#vendor}
  */
  readonly vendor?: string;
}

export function tenantSiteAssociationsToTerraform(struct?: TenantSiteAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_access_key_id: cdktf.stringToTerraform(struct!.awsAccessKeyId),
    aws_account_id: cdktf.stringToTerraform(struct!.awsAccountId),
    aws_secret_key: cdktf.stringToTerraform(struct!.awsSecretKey),
    azure_access_type: cdktf.stringToTerraform(struct!.azureAccessType),
    azure_active_directory_id: cdktf.stringToTerraform(struct!.azureActiveDirectoryId),
    azure_application_id: cdktf.stringToTerraform(struct!.azureApplicationId),
    azure_client_secret: cdktf.stringToTerraform(struct!.azureClientSecret),
    azure_shared_account_id: cdktf.stringToTerraform(struct!.azureSharedAccountId),
    azure_subscription_id: cdktf.stringToTerraform(struct!.azureSubscriptionId),
    gcp_access_type: cdktf.stringToTerraform(struct!.gcpAccessType),
    gcp_client_id: cdktf.stringToTerraform(struct!.gcpClientId),
    gcp_email: cdktf.stringToTerraform(struct!.gcpEmail),
    gcp_key_id: cdktf.stringToTerraform(struct!.gcpKeyId),
    gcp_name: cdktf.stringToTerraform(struct!.gcpName),
    gcp_private_key: cdktf.stringToTerraform(struct!.gcpPrivateKey),
    gcp_project_id: cdktf.stringToTerraform(struct!.gcpProjectId),
    is_aws_account_trusted: cdktf.booleanToTerraform(struct!.isAwsAccountTrusted),
    security_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityDomains),
    site_id: cdktf.stringToTerraform(struct!.siteId),
    vendor: cdktf.stringToTerraform(struct!.vendor),
  }
}


export function tenantSiteAssociationsToHclTerraform(struct?: TenantSiteAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.awsAccessKeyId),
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
    aws_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.awsSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_access_type: {
      value: cdktf.stringToHclTerraform(struct!.azureAccessType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_active_directory_id: {
      value: cdktf.stringToHclTerraform(struct!.azureActiveDirectoryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_application_id: {
      value: cdktf.stringToHclTerraform(struct!.azureApplicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.azureClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_shared_account_id: {
      value: cdktf.stringToHclTerraform(struct!.azureSharedAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.azureSubscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcp_access_type: {
      value: cdktf.stringToHclTerraform(struct!.gcpAccessType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcp_client_id: {
      value: cdktf.stringToHclTerraform(struct!.gcpClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcp_email: {
      value: cdktf.stringToHclTerraform(struct!.gcpEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcp_key_id: {
      value: cdktf.stringToHclTerraform(struct!.gcpKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcp_name: {
      value: cdktf.stringToHclTerraform(struct!.gcpName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcp_private_key: {
      value: cdktf.stringToHclTerraform(struct!.gcpPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcp_project_id: {
      value: cdktf.stringToHclTerraform(struct!.gcpProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_aws_account_trusted: {
      value: cdktf.booleanToHclTerraform(struct!.isAwsAccountTrusted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    site_id: {
      value: cdktf.stringToHclTerraform(struct!.siteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor: {
      value: cdktf.stringToHclTerraform(struct!.vendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantSiteAssociationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TenantSiteAssociations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccessKeyId = this._awsAccessKeyId;
    }
    if (this._awsAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccountId = this._awsAccountId;
    }
    if (this._awsSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretKey = this._awsSecretKey;
    }
    if (this._azureAccessType !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAccessType = this._azureAccessType;
    }
    if (this._azureActiveDirectoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureActiveDirectoryId = this._azureActiveDirectoryId;
    }
    if (this._azureApplicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureApplicationId = this._azureApplicationId;
    }
    if (this._azureClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureClientSecret = this._azureClientSecret;
    }
    if (this._azureSharedAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureSharedAccountId = this._azureSharedAccountId;
    }
    if (this._azureSubscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureSubscriptionId = this._azureSubscriptionId;
    }
    if (this._gcpAccessType !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpAccessType = this._gcpAccessType;
    }
    if (this._gcpClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpClientId = this._gcpClientId;
    }
    if (this._gcpEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpEmail = this._gcpEmail;
    }
    if (this._gcpKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpKeyId = this._gcpKeyId;
    }
    if (this._gcpName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpName = this._gcpName;
    }
    if (this._gcpPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpPrivateKey = this._gcpPrivateKey;
    }
    if (this._gcpProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpProjectId = this._gcpProjectId;
    }
    if (this._isAwsAccountTrusted !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAwsAccountTrusted = this._isAwsAccountTrusted;
    }
    if (this._securityDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityDomains = this._securityDomains;
    }
    if (this._siteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteId = this._siteId;
    }
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantSiteAssociations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAccessKeyId = undefined;
      this._awsAccountId = undefined;
      this._awsSecretKey = undefined;
      this._azureAccessType = undefined;
      this._azureActiveDirectoryId = undefined;
      this._azureApplicationId = undefined;
      this._azureClientSecret = undefined;
      this._azureSharedAccountId = undefined;
      this._azureSubscriptionId = undefined;
      this._gcpAccessType = undefined;
      this._gcpClientId = undefined;
      this._gcpEmail = undefined;
      this._gcpKeyId = undefined;
      this._gcpName = undefined;
      this._gcpPrivateKey = undefined;
      this._gcpProjectId = undefined;
      this._isAwsAccountTrusted = undefined;
      this._securityDomains = undefined;
      this._siteId = undefined;
      this._vendor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAccessKeyId = value.awsAccessKeyId;
      this._awsAccountId = value.awsAccountId;
      this._awsSecretKey = value.awsSecretKey;
      this._azureAccessType = value.azureAccessType;
      this._azureActiveDirectoryId = value.azureActiveDirectoryId;
      this._azureApplicationId = value.azureApplicationId;
      this._azureClientSecret = value.azureClientSecret;
      this._azureSharedAccountId = value.azureSharedAccountId;
      this._azureSubscriptionId = value.azureSubscriptionId;
      this._gcpAccessType = value.gcpAccessType;
      this._gcpClientId = value.gcpClientId;
      this._gcpEmail = value.gcpEmail;
      this._gcpKeyId = value.gcpKeyId;
      this._gcpName = value.gcpName;
      this._gcpPrivateKey = value.gcpPrivateKey;
      this._gcpProjectId = value.gcpProjectId;
      this._isAwsAccountTrusted = value.isAwsAccountTrusted;
      this._securityDomains = value.securityDomains;
      this._siteId = value.siteId;
      this._vendor = value.vendor;
    }
  }

  // aws_access_key_id - computed: true, optional: true, required: false
  private _awsAccessKeyId?: string; 
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }
  public set awsAccessKeyId(value: string) {
    this._awsAccessKeyId = value;
  }
  public resetAwsAccessKeyId() {
    this._awsAccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyIdInput() {
    return this._awsAccessKeyId;
  }

  // aws_account_id - computed: true, optional: true, required: false
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

  // aws_secret_key - computed: true, optional: true, required: false
  private _awsSecretKey?: string; 
  public get awsSecretKey() {
    return this.getStringAttribute('aws_secret_key');
  }
  public set awsSecretKey(value: string) {
    this._awsSecretKey = value;
  }
  public resetAwsSecretKey() {
    this._awsSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretKeyInput() {
    return this._awsSecretKey;
  }

  // azure_access_type - computed: true, optional: true, required: false
  private _azureAccessType?: string; 
  public get azureAccessType() {
    return this.getStringAttribute('azure_access_type');
  }
  public set azureAccessType(value: string) {
    this._azureAccessType = value;
  }
  public resetAzureAccessType() {
    this._azureAccessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAccessTypeInput() {
    return this._azureAccessType;
  }

  // azure_active_directory_id - computed: true, optional: true, required: false
  private _azureActiveDirectoryId?: string; 
  public get azureActiveDirectoryId() {
    return this.getStringAttribute('azure_active_directory_id');
  }
  public set azureActiveDirectoryId(value: string) {
    this._azureActiveDirectoryId = value;
  }
  public resetAzureActiveDirectoryId() {
    this._azureActiveDirectoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureActiveDirectoryIdInput() {
    return this._azureActiveDirectoryId;
  }

  // azure_application_id - computed: true, optional: true, required: false
  private _azureApplicationId?: string; 
  public get azureApplicationId() {
    return this.getStringAttribute('azure_application_id');
  }
  public set azureApplicationId(value: string) {
    this._azureApplicationId = value;
  }
  public resetAzureApplicationId() {
    this._azureApplicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureApplicationIdInput() {
    return this._azureApplicationId;
  }

  // azure_client_secret - computed: true, optional: true, required: false
  private _azureClientSecret?: string; 
  public get azureClientSecret() {
    return this.getStringAttribute('azure_client_secret');
  }
  public set azureClientSecret(value: string) {
    this._azureClientSecret = value;
  }
  public resetAzureClientSecret() {
    this._azureClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureClientSecretInput() {
    return this._azureClientSecret;
  }

  // azure_shared_account_id - computed: true, optional: true, required: false
  private _azureSharedAccountId?: string; 
  public get azureSharedAccountId() {
    return this.getStringAttribute('azure_shared_account_id');
  }
  public set azureSharedAccountId(value: string) {
    this._azureSharedAccountId = value;
  }
  public resetAzureSharedAccountId() {
    this._azureSharedAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSharedAccountIdInput() {
    return this._azureSharedAccountId;
  }

  // azure_subscription_id - computed: true, optional: true, required: false
  private _azureSubscriptionId?: string; 
  public get azureSubscriptionId() {
    return this.getStringAttribute('azure_subscription_id');
  }
  public set azureSubscriptionId(value: string) {
    this._azureSubscriptionId = value;
  }
  public resetAzureSubscriptionId() {
    this._azureSubscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSubscriptionIdInput() {
    return this._azureSubscriptionId;
  }

  // gcp_access_type - computed: true, optional: true, required: false
  private _gcpAccessType?: string; 
  public get gcpAccessType() {
    return this.getStringAttribute('gcp_access_type');
  }
  public set gcpAccessType(value: string) {
    this._gcpAccessType = value;
  }
  public resetGcpAccessType() {
    this._gcpAccessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpAccessTypeInput() {
    return this._gcpAccessType;
  }

  // gcp_client_id - computed: true, optional: true, required: false
  private _gcpClientId?: string; 
  public get gcpClientId() {
    return this.getStringAttribute('gcp_client_id');
  }
  public set gcpClientId(value: string) {
    this._gcpClientId = value;
  }
  public resetGcpClientId() {
    this._gcpClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpClientIdInput() {
    return this._gcpClientId;
  }

  // gcp_email - computed: true, optional: true, required: false
  private _gcpEmail?: string; 
  public get gcpEmail() {
    return this.getStringAttribute('gcp_email');
  }
  public set gcpEmail(value: string) {
    this._gcpEmail = value;
  }
  public resetGcpEmail() {
    this._gcpEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpEmailInput() {
    return this._gcpEmail;
  }

  // gcp_key_id - computed: true, optional: true, required: false
  private _gcpKeyId?: string; 
  public get gcpKeyId() {
    return this.getStringAttribute('gcp_key_id');
  }
  public set gcpKeyId(value: string) {
    this._gcpKeyId = value;
  }
  public resetGcpKeyId() {
    this._gcpKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpKeyIdInput() {
    return this._gcpKeyId;
  }

  // gcp_name - computed: true, optional: true, required: false
  private _gcpName?: string; 
  public get gcpName() {
    return this.getStringAttribute('gcp_name');
  }
  public set gcpName(value: string) {
    this._gcpName = value;
  }
  public resetGcpName() {
    this._gcpName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpNameInput() {
    return this._gcpName;
  }

  // gcp_private_key - computed: true, optional: true, required: false
  private _gcpPrivateKey?: string; 
  public get gcpPrivateKey() {
    return this.getStringAttribute('gcp_private_key');
  }
  public set gcpPrivateKey(value: string) {
    this._gcpPrivateKey = value;
  }
  public resetGcpPrivateKey() {
    this._gcpPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpPrivateKeyInput() {
    return this._gcpPrivateKey;
  }

  // gcp_project_id - computed: true, optional: true, required: false
  private _gcpProjectId?: string; 
  public get gcpProjectId() {
    return this.getStringAttribute('gcp_project_id');
  }
  public set gcpProjectId(value: string) {
    this._gcpProjectId = value;
  }
  public resetGcpProjectId() {
    this._gcpProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpProjectIdInput() {
    return this._gcpProjectId;
  }

  // is_aws_account_trusted - computed: true, optional: true, required: false
  private _isAwsAccountTrusted?: boolean | cdktf.IResolvable; 
  public get isAwsAccountTrusted() {
    return this.getBooleanAttribute('is_aws_account_trusted');
  }
  public set isAwsAccountTrusted(value: boolean | cdktf.IResolvable) {
    this._isAwsAccountTrusted = value;
  }
  public resetIsAwsAccountTrusted() {
    this._isAwsAccountTrusted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAwsAccountTrustedInput() {
    return this._isAwsAccountTrusted;
  }

  // security_domains - computed: false, optional: true, required: false
  private _securityDomains?: string[]; 
  public get securityDomains() {
    return this.getListAttribute('security_domains');
  }
  public set securityDomains(value: string[]) {
    this._securityDomains = value;
  }
  public resetSecurityDomains() {
    this._securityDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityDomainsInput() {
    return this._securityDomains;
  }

  // site_id - computed: false, optional: true, required: false
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // vendor - computed: true, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }
}

export class TenantSiteAssociationsList extends cdktf.ComplexList {
  public internalValue? : TenantSiteAssociations[] | cdktf.IResolvable

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
  public get(index: number): TenantSiteAssociationsOutputReference {
    return new TenantSiteAssociationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TenantUserAssociations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant#user_id Tenant#user_id}
  */
  readonly userId?: string;
}

export function tenantUserAssociationsToTerraform(struct?: TenantUserAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function tenantUserAssociationsToHclTerraform(struct?: TenantUserAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantUserAssociationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TenantUserAssociations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantUserAssociations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userId = value.userId;
    }
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}

export class TenantUserAssociationsList extends cdktf.ComplexList {
  public internalValue? : TenantUserAssociations[] | cdktf.IResolvable

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
  public get(index: number): TenantUserAssociationsOutputReference {
    return new TenantUserAssociationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant mso_tenant}
*/
export class Tenant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_tenant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Tenant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Tenant to import
  * @param importFromId The id of the existing Tenant that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Tenant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_tenant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/tenant mso_tenant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TenantConfig
  */
  public constructor(scope: Construct, id: string, config: TenantConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_tenant',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._name = config.name;
    this._orchestratorOnly = config.orchestratorOnly;
    this._siteAssociations.internalValue = config.siteAssociations;
    this._userAssociations.internalValue = config.userAssociations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // orchestrator_only - computed: false, optional: true, required: false
  private _orchestratorOnly?: boolean | cdktf.IResolvable; 
  public get orchestratorOnly() {
    return this.getBooleanAttribute('orchestrator_only');
  }
  public set orchestratorOnly(value: boolean | cdktf.IResolvable) {
    this._orchestratorOnly = value;
  }
  public resetOrchestratorOnly() {
    this._orchestratorOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orchestratorOnlyInput() {
    return this._orchestratorOnly;
  }

  // site_associations - computed: false, optional: true, required: false
  private _siteAssociations = new TenantSiteAssociationsList(this, "site_associations", false);
  public get siteAssociations() {
    return this._siteAssociations;
  }
  public putSiteAssociations(value: TenantSiteAssociations[] | cdktf.IResolvable) {
    this._siteAssociations.internalValue = value;
  }
  public resetSiteAssociations() {
    this._siteAssociations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteAssociationsInput() {
    return this._siteAssociations.internalValue;
  }

  // user_associations - computed: false, optional: true, required: false
  private _userAssociations = new TenantUserAssociationsList(this, "user_associations", true);
  public get userAssociations() {
    return this._userAssociations;
  }
  public putUserAssociations(value: TenantUserAssociations[] | cdktf.IResolvable) {
    this._userAssociations.internalValue = value;
  }
  public resetUserAssociations() {
    this._userAssociations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssociationsInput() {
    return this._userAssociations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      orchestrator_only: cdktf.booleanToTerraform(this._orchestratorOnly),
      site_associations: cdktf.listMapper(tenantSiteAssociationsToTerraform, true)(this._siteAssociations.internalValue),
      user_associations: cdktf.listMapper(tenantUserAssociationsToTerraform, true)(this._userAssociations.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      orchestrator_only: {
        value: cdktf.booleanToHclTerraform(this._orchestratorOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      site_associations: {
        value: cdktf.listMapperHcl(tenantSiteAssociationsToHclTerraform, true)(this._siteAssociations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantSiteAssociationsList",
      },
      user_associations: {
        value: cdktf.listMapperHcl(tenantUserAssociationsToHclTerraform, true)(this._userAssociations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TenantUserAssociationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
