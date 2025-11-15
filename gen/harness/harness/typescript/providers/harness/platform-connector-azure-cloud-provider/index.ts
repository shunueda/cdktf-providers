// https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformConnectorAzureCloudProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the Azure Environment type, which is AZURE by default. Can either be AZURE or AZURE_US_GOVERNMENT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#azure_environment_type PlatformConnectorAzureCloudProvider#azure_environment_type}
  */
  readonly azureEnvironmentType?: string;
  /**
  * Tags to filter delegates for connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#delegate_selectors PlatformConnectorAzureCloudProvider#delegate_selectors}
  */
  readonly delegateSelectors?: string[];
  /**
  * Description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#description PlatformConnectorAzureCloudProvider#description}
  */
  readonly description?: string;
  /**
  * Execute on delegate or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#execute_on_delegate PlatformConnectorAzureCloudProvider#execute_on_delegate}
  */
  readonly executeOnDelegate?: boolean | cdktf.IResolvable;
  /**
  * Enable this flag for force deletion of connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#force_delete PlatformConnectorAzureCloudProvider#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#id PlatformConnectorAzureCloudProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#identifier PlatformConnectorAzureCloudProvider#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#name PlatformConnectorAzureCloudProvider#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#org_id PlatformConnectorAzureCloudProvider#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#project_id PlatformConnectorAzureCloudProvider#project_id}
  */
  readonly projectId?: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#tags PlatformConnectorAzureCloudProvider#tags}
  */
  readonly tags?: string[];
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#credentials PlatformConnectorAzureCloudProvider#credentials}
  */
  readonly credentials: PlatformConnectorAzureCloudProviderCredentials;
}
export interface PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthAzureMsiAuthUa {
  /**
  * Client Id of the ManagedIdentity resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#client_id PlatformConnectorAzureCloudProvider#client_id}
  */
  readonly clientId?: string;
}

export function platformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthAzureMsiAuthUaToTerraform(struct?: PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthAzureMsiAuthUaOutputReference | PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthAzureMsiAuthUa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
  }
}


export function platformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthAzureMsiAuthUaToHclTerraform(struct?: PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthAzureMsiAuthUaOutputReference | PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthAzureMsiAuthUa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthAzureMsiAuthUaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthAzureMsiAuthUa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthAzureMsiAuthUa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }
}
export interface PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuth {
  /**
  * Type can either be SystemAssignedManagedIdentity or UserAssignedManagedIdentity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#type PlatformConnectorAzureCloudProvider#type}
  */
  readonly type: string;
  /**
  * azure_msi_auth_ua block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#azure_msi_auth_ua PlatformConnectorAzureCloudProvider#azure_msi_auth_ua}
  */
  readonly azureMsiAuthUa?: PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthAzureMsiAuthUa;
}

export function platformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthToTerraform(struct?: PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthOutputReference | PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    azure_msi_auth_ua: platformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthAzureMsiAuthUaToTerraform(struct!.azureMsiAuthUa),
  }
}


export function platformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthToHclTerraform(struct?: PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthOutputReference | PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_msi_auth_ua: {
      value: platformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthAzureMsiAuthUaToHclTerraform(struct!.azureMsiAuthUa),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthAzureMsiAuthUaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._azureMsiAuthUa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureMsiAuthUa = this._azureMsiAuthUa?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._azureMsiAuthUa.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._azureMsiAuthUa.internalValue = value.azureMsiAuthUa;
    }
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

  // azure_msi_auth_ua - computed: false, optional: true, required: false
  private _azureMsiAuthUa = new PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthAzureMsiAuthUaOutputReference(this, "azure_msi_auth_ua");
  public get azureMsiAuthUa() {
    return this._azureMsiAuthUa;
  }
  public putAzureMsiAuthUa(value: PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthAzureMsiAuthUa) {
    this._azureMsiAuthUa.internalValue = value;
  }
  public resetAzureMsiAuthUa() {
    this._azureMsiAuthUa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureMsiAuthUaInput() {
    return this._azureMsiAuthUa.internalValue;
  }
}
export interface PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetails {
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#auth PlatformConnectorAzureCloudProvider#auth}
  */
  readonly auth?: PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuth;
}

export function platformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsToTerraform(struct?: PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsOutputReference | PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: platformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthToTerraform(struct!.auth),
  }
}


export function platformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsToHclTerraform(struct?: PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsOutputReference | PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: platformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auth.internalValue = value.auth;
    }
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }
}
export interface PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientKeyCert {
  /**
  * Reference of the secret for the certificate. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#certificate_ref PlatformConnectorAzureCloudProvider#certificate_ref}
  */
  readonly certificateRef?: string;
}

export function platformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientKeyCertToTerraform(struct?: PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientKeyCertOutputReference | PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientKeyCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_ref: cdktf.stringToTerraform(struct!.certificateRef),
  }
}


export function platformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientKeyCertToHclTerraform(struct?: PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientKeyCertOutputReference | PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientKeyCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_ref: {
      value: cdktf.stringToHclTerraform(struct!.certificateRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientKeyCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientKeyCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateRef = this._certificateRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientKeyCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateRef = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateRef = value.certificateRef;
    }
  }

  // certificate_ref - computed: false, optional: true, required: false
  private _certificateRef?: string; 
  public get certificateRef() {
    return this.getStringAttribute('certificate_ref');
  }
  public set certificateRef(value: string) {
    this._certificateRef = value;
  }
  public resetCertificateRef() {
    this._certificateRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateRefInput() {
    return this._certificateRef;
  }
}
export interface PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientSecretKey {
  /**
  * Reference of the secret for the secret key. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#secret_ref PlatformConnectorAzureCloudProvider#secret_ref}
  */
  readonly secretRef?: string;
}

export function platformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientSecretKeyToTerraform(struct?: PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientSecretKeyOutputReference | PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientSecretKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_ref: cdktf.stringToTerraform(struct!.secretRef),
  }
}


export function platformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientSecretKeyToHclTerraform(struct?: PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientSecretKeyOutputReference | PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientSecretKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_ref: {
      value: cdktf.stringToHclTerraform(struct!.secretRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientSecretKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientSecretKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientSecretKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretRef = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretRef = value.secretRef;
    }
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef?: string; 
  public get secretRef() {
    return this.getStringAttribute('secret_ref');
  }
  public set secretRef(value: string) {
    this._secretRef = value;
  }
  public resetSecretRef() {
    this._secretRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef;
  }
}
export interface PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuth {
  /**
  * Type can either be Certificate or Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#type PlatformConnectorAzureCloudProvider#type}
  */
  readonly type?: string;
  /**
  * azure_client_key_cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#azure_client_key_cert PlatformConnectorAzureCloudProvider#azure_client_key_cert}
  */
  readonly azureClientKeyCert?: PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientKeyCert;
  /**
  * azure_client_secret_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#azure_client_secret_key PlatformConnectorAzureCloudProvider#azure_client_secret_key}
  */
  readonly azureClientSecretKey?: PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientSecretKey;
}

export function platformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthToTerraform(struct?: PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthOutputReference | PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    azure_client_key_cert: platformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientKeyCertToTerraform(struct!.azureClientKeyCert),
    azure_client_secret_key: platformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientSecretKeyToTerraform(struct!.azureClientSecretKey),
  }
}


export function platformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthToHclTerraform(struct?: PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthOutputReference | PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_client_key_cert: {
      value: platformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientKeyCertToHclTerraform(struct!.azureClientKeyCert),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientKeyCertList",
    },
    azure_client_secret_key: {
      value: platformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientSecretKeyToHclTerraform(struct!.azureClientSecretKey),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientSecretKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._azureClientKeyCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureClientKeyCert = this._azureClientKeyCert?.internalValue;
    }
    if (this._azureClientSecretKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureClientSecretKey = this._azureClientSecretKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._azureClientKeyCert.internalValue = undefined;
      this._azureClientSecretKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._azureClientKeyCert.internalValue = value.azureClientKeyCert;
      this._azureClientSecretKey.internalValue = value.azureClientSecretKey;
    }
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

  // azure_client_key_cert - computed: false, optional: true, required: false
  private _azureClientKeyCert = new PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientKeyCertOutputReference(this, "azure_client_key_cert");
  public get azureClientKeyCert() {
    return this._azureClientKeyCert;
  }
  public putAzureClientKeyCert(value: PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientKeyCert) {
    this._azureClientKeyCert.internalValue = value;
  }
  public resetAzureClientKeyCert() {
    this._azureClientKeyCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureClientKeyCertInput() {
    return this._azureClientKeyCert.internalValue;
  }

  // azure_client_secret_key - computed: false, optional: true, required: false
  private _azureClientSecretKey = new PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientSecretKeyOutputReference(this, "azure_client_secret_key");
  public get azureClientSecretKey() {
    return this._azureClientSecretKey;
  }
  public putAzureClientSecretKey(value: PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthAzureClientSecretKey) {
    this._azureClientSecretKey.internalValue = value;
  }
  public resetAzureClientSecretKey() {
    this._azureClientSecretKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureClientSecretKeyInput() {
    return this._azureClientSecretKey.internalValue;
  }
}
export interface PlatformConnectorAzureCloudProviderCredentialsAzureManualDetails {
  /**
  * Application ID of the Azure App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#application_id PlatformConnectorAzureCloudProvider#application_id}
  */
  readonly applicationId?: string;
  /**
  * The Azure Active Directory (AAD) directory ID where you created your application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#tenant_id PlatformConnectorAzureCloudProvider#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#auth PlatformConnectorAzureCloudProvider#auth}
  */
  readonly auth?: PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuth;
}

export function platformConnectorAzureCloudProviderCredentialsAzureManualDetailsToTerraform(struct?: PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsOutputReference | PlatformConnectorAzureCloudProviderCredentialsAzureManualDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    auth: platformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthToTerraform(struct!.auth),
  }
}


export function platformConnectorAzureCloudProviderCredentialsAzureManualDetailsToHclTerraform(struct?: PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsOutputReference | PlatformConnectorAzureCloudProviderCredentialsAzureManualDetails): any {
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
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: platformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorAzureCloudProviderCredentialsAzureManualDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorAzureCloudProviderCredentialsAzureManualDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationId = undefined;
      this._tenantId = undefined;
      this._auth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationId = value.applicationId;
      this._tenantId = value.tenantId;
      this._auth.internalValue = value.auth;
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

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }
}
export interface PlatformConnectorAzureCloudProviderCredentialsAzureOidcSpec {
  /**
  * Application ID of the Azure App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#application_id PlatformConnectorAzureCloudProvider#application_id}
  */
  readonly applicationId?: string;
  /**
  * The Azure Audience.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#audience PlatformConnectorAzureCloudProvider#audience}
  */
  readonly audience?: string;
  /**
  * The Azure Active Directory (AAD) directory ID where you created your application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#tenant_id PlatformConnectorAzureCloudProvider#tenant_id}
  */
  readonly tenantId?: string;
}

export function platformConnectorAzureCloudProviderCredentialsAzureOidcSpecToTerraform(struct?: PlatformConnectorAzureCloudProviderCredentialsAzureOidcSpecOutputReference | PlatformConnectorAzureCloudProviderCredentialsAzureOidcSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    audience: cdktf.stringToTerraform(struct!.audience),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function platformConnectorAzureCloudProviderCredentialsAzureOidcSpecToHclTerraform(struct?: PlatformConnectorAzureCloudProviderCredentialsAzureOidcSpecOutputReference | PlatformConnectorAzureCloudProviderCredentialsAzureOidcSpec): any {
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
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
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

export class PlatformConnectorAzureCloudProviderCredentialsAzureOidcSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorAzureCloudProviderCredentialsAzureOidcSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorAzureCloudProviderCredentialsAzureOidcSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationId = undefined;
      this._audience = undefined;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationId = value.applicationId;
      this._audience = value.audience;
      this._tenantId = value.tenantId;
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

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface PlatformConnectorAzureCloudProviderCredentials {
  /**
  * Type can be InheritFromDelegate, ManualConfig or OidcAuthentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#type PlatformConnectorAzureCloudProvider#type}
  */
  readonly type: string;
  /**
  * azure_inherit_from_delegate_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#azure_inherit_from_delegate_details PlatformConnectorAzureCloudProvider#azure_inherit_from_delegate_details}
  */
  readonly azureInheritFromDelegateDetails?: PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetails;
  /**
  * azure_manual_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#azure_manual_details PlatformConnectorAzureCloudProvider#azure_manual_details}
  */
  readonly azureManualDetails?: PlatformConnectorAzureCloudProviderCredentialsAzureManualDetails;
  /**
  * azure_oidc_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#azure_oidc_spec PlatformConnectorAzureCloudProvider#azure_oidc_spec}
  */
  readonly azureOidcSpec?: PlatformConnectorAzureCloudProviderCredentialsAzureOidcSpec;
}

export function platformConnectorAzureCloudProviderCredentialsToTerraform(struct?: PlatformConnectorAzureCloudProviderCredentialsOutputReference | PlatformConnectorAzureCloudProviderCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    azure_inherit_from_delegate_details: platformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsToTerraform(struct!.azureInheritFromDelegateDetails),
    azure_manual_details: platformConnectorAzureCloudProviderCredentialsAzureManualDetailsToTerraform(struct!.azureManualDetails),
    azure_oidc_spec: platformConnectorAzureCloudProviderCredentialsAzureOidcSpecToTerraform(struct!.azureOidcSpec),
  }
}


export function platformConnectorAzureCloudProviderCredentialsToHclTerraform(struct?: PlatformConnectorAzureCloudProviderCredentialsOutputReference | PlatformConnectorAzureCloudProviderCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_inherit_from_delegate_details: {
      value: platformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsToHclTerraform(struct!.azureInheritFromDelegateDetails),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsList",
    },
    azure_manual_details: {
      value: platformConnectorAzureCloudProviderCredentialsAzureManualDetailsToHclTerraform(struct!.azureManualDetails),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsList",
    },
    azure_oidc_spec: {
      value: platformConnectorAzureCloudProviderCredentialsAzureOidcSpecToHclTerraform(struct!.azureOidcSpec),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformConnectorAzureCloudProviderCredentialsAzureOidcSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorAzureCloudProviderCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorAzureCloudProviderCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._azureInheritFromDelegateDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureInheritFromDelegateDetails = this._azureInheritFromDelegateDetails?.internalValue;
    }
    if (this._azureManualDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureManualDetails = this._azureManualDetails?.internalValue;
    }
    if (this._azureOidcSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureOidcSpec = this._azureOidcSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorAzureCloudProviderCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._azureInheritFromDelegateDetails.internalValue = undefined;
      this._azureManualDetails.internalValue = undefined;
      this._azureOidcSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._azureInheritFromDelegateDetails.internalValue = value.azureInheritFromDelegateDetails;
      this._azureManualDetails.internalValue = value.azureManualDetails;
      this._azureOidcSpec.internalValue = value.azureOidcSpec;
    }
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

  // azure_inherit_from_delegate_details - computed: false, optional: true, required: false
  private _azureInheritFromDelegateDetails = new PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetailsOutputReference(this, "azure_inherit_from_delegate_details");
  public get azureInheritFromDelegateDetails() {
    return this._azureInheritFromDelegateDetails;
  }
  public putAzureInheritFromDelegateDetails(value: PlatformConnectorAzureCloudProviderCredentialsAzureInheritFromDelegateDetails) {
    this._azureInheritFromDelegateDetails.internalValue = value;
  }
  public resetAzureInheritFromDelegateDetails() {
    this._azureInheritFromDelegateDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInheritFromDelegateDetailsInput() {
    return this._azureInheritFromDelegateDetails.internalValue;
  }

  // azure_manual_details - computed: false, optional: true, required: false
  private _azureManualDetails = new PlatformConnectorAzureCloudProviderCredentialsAzureManualDetailsOutputReference(this, "azure_manual_details");
  public get azureManualDetails() {
    return this._azureManualDetails;
  }
  public putAzureManualDetails(value: PlatformConnectorAzureCloudProviderCredentialsAzureManualDetails) {
    this._azureManualDetails.internalValue = value;
  }
  public resetAzureManualDetails() {
    this._azureManualDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureManualDetailsInput() {
    return this._azureManualDetails.internalValue;
  }

  // azure_oidc_spec - computed: false, optional: true, required: false
  private _azureOidcSpec = new PlatformConnectorAzureCloudProviderCredentialsAzureOidcSpecOutputReference(this, "azure_oidc_spec");
  public get azureOidcSpec() {
    return this._azureOidcSpec;
  }
  public putAzureOidcSpec(value: PlatformConnectorAzureCloudProviderCredentialsAzureOidcSpec) {
    this._azureOidcSpec.internalValue = value;
  }
  public resetAzureOidcSpec() {
    this._azureOidcSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureOidcSpecInput() {
    return this._azureOidcSpec.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider harness_platform_connector_azure_cloud_provider}
*/
export class PlatformConnectorAzureCloudProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_connector_azure_cloud_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformConnectorAzureCloudProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformConnectorAzureCloudProvider to import
  * @param importFromId The id of the existing PlatformConnectorAzureCloudProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformConnectorAzureCloudProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_connector_azure_cloud_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_connector_azure_cloud_provider harness_platform_connector_azure_cloud_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformConnectorAzureCloudProviderConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformConnectorAzureCloudProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_connector_azure_cloud_provider',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.2',
        providerVersionConstraint: '0.39.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._azureEnvironmentType = config.azureEnvironmentType;
    this._delegateSelectors = config.delegateSelectors;
    this._description = config.description;
    this._executeOnDelegate = config.executeOnDelegate;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._tags = config.tags;
    this._credentials.internalValue = config.credentials;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_environment_type - computed: true, optional: true, required: false
  private _azureEnvironmentType?: string; 
  public get azureEnvironmentType() {
    return this.getStringAttribute('azure_environment_type');
  }
  public set azureEnvironmentType(value: string) {
    this._azureEnvironmentType = value;
  }
  public resetAzureEnvironmentType() {
    this._azureEnvironmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureEnvironmentTypeInput() {
    return this._azureEnvironmentType;
  }

  // delegate_selectors - computed: false, optional: true, required: false
  private _delegateSelectors?: string[]; 
  public get delegateSelectors() {
    return cdktf.Fn.tolist(this.getListAttribute('delegate_selectors'));
  }
  public set delegateSelectors(value: string[]) {
    this._delegateSelectors = value;
  }
  public resetDelegateSelectors() {
    this._delegateSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateSelectorsInput() {
    return this._delegateSelectors;
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

  // execute_on_delegate - computed: false, optional: true, required: false
  private _executeOnDelegate?: boolean | cdktf.IResolvable; 
  public get executeOnDelegate() {
    return this.getBooleanAttribute('execute_on_delegate');
  }
  public set executeOnDelegate(value: boolean | cdktf.IResolvable) {
    this._executeOnDelegate = value;
  }
  public resetExecuteOnDelegate() {
    this._executeOnDelegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeOnDelegateInput() {
    return this._executeOnDelegate;
  }

  // force_delete - computed: true, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new PlatformConnectorAzureCloudProviderCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: PlatformConnectorAzureCloudProviderCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      azure_environment_type: cdktf.stringToTerraform(this._azureEnvironmentType),
      delegate_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._delegateSelectors),
      description: cdktf.stringToTerraform(this._description),
      execute_on_delegate: cdktf.booleanToTerraform(this._executeOnDelegate),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      credentials: platformConnectorAzureCloudProviderCredentialsToTerraform(this._credentials.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      azure_environment_type: {
        value: cdktf.stringToHclTerraform(this._azureEnvironmentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delegate_selectors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._delegateSelectors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execute_on_delegate: {
        value: cdktf.booleanToHclTerraform(this._executeOnDelegate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      credentials: {
        value: platformConnectorAzureCloudProviderCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorAzureCloudProviderCredentialsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
