// https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Annotations of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#annotations CloudCredential#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#description CloudCredential#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#id CloudCredential#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#labels CloudCredential#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#name CloudCredential#name}
  */
  readonly name: string;
  /**
  * amazonec2_credential_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#amazonec2_credential_config CloudCredential#amazonec2_credential_config}
  */
  readonly amazonec2CredentialConfig?: CloudCredentialAmazonec2CredentialConfig;
  /**
  * azure_credential_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#azure_credential_config CloudCredential#azure_credential_config}
  */
  readonly azureCredentialConfig?: CloudCredentialAzureCredentialConfig;
  /**
  * digitalocean_credential_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#digitalocean_credential_config CloudCredential#digitalocean_credential_config}
  */
  readonly digitaloceanCredentialConfig?: CloudCredentialDigitaloceanCredentialConfig;
  /**
  * google_credential_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#google_credential_config CloudCredential#google_credential_config}
  */
  readonly googleCredentialConfig?: CloudCredentialGoogleCredentialConfig;
  /**
  * harvester_credential_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#harvester_credential_config CloudCredential#harvester_credential_config}
  */
  readonly harvesterCredentialConfig?: CloudCredentialHarvesterCredentialConfig;
  /**
  * linode_credential_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#linode_credential_config CloudCredential#linode_credential_config}
  */
  readonly linodeCredentialConfig?: CloudCredentialLinodeCredentialConfig;
  /**
  * openstack_credential_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#openstack_credential_config CloudCredential#openstack_credential_config}
  */
  readonly openstackCredentialConfig?: CloudCredentialOpenstackCredentialConfig;
  /**
  * s3_credential_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#s3_credential_config CloudCredential#s3_credential_config}
  */
  readonly s3CredentialConfig?: CloudCredentialS3CredentialConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#timeouts CloudCredential#timeouts}
  */
  readonly timeouts?: CloudCredentialTimeouts;
  /**
  * vsphere_credential_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#vsphere_credential_config CloudCredential#vsphere_credential_config}
  */
  readonly vsphereCredentialConfig?: CloudCredentialVsphereCredentialConfig;
}
export interface CloudCredentialAmazonec2CredentialConfig {
  /**
  * AWS Access Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#access_key CloudCredential#access_key}
  */
  readonly accessKey: string;
  /**
  * AWS default region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#default_region CloudCredential#default_region}
  */
  readonly defaultRegion?: string;
  /**
  * AWS Secret Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#secret_key CloudCredential#secret_key}
  */
  readonly secretKey: string;
}

export function cloudCredentialAmazonec2CredentialConfigToTerraform(struct?: CloudCredentialAmazonec2CredentialConfigOutputReference | CloudCredentialAmazonec2CredentialConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    default_region: cdktf.stringToTerraform(struct!.defaultRegion),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
  }
}


export function cloudCredentialAmazonec2CredentialConfigToHclTerraform(struct?: CloudCredentialAmazonec2CredentialConfigOutputReference | CloudCredentialAmazonec2CredentialConfig): any {
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
    default_region: {
      value: cdktf.stringToHclTerraform(struct!.defaultRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudCredentialAmazonec2CredentialConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudCredentialAmazonec2CredentialConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._defaultRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRegion = this._defaultRegion;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudCredentialAmazonec2CredentialConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._defaultRegion = undefined;
      this._secretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._defaultRegion = value.defaultRegion;
      this._secretKey = value.secretKey;
    }
  }

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // default_region - computed: false, optional: true, required: false
  private _defaultRegion?: string; 
  public get defaultRegion() {
    return this.getStringAttribute('default_region');
  }
  public set defaultRegion(value: string) {
    this._defaultRegion = value;
  }
  public resetDefaultRegion() {
    this._defaultRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRegionInput() {
    return this._defaultRegion;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }
}
export interface CloudCredentialAzureCredentialConfig {
  /**
  * Azure Service Principal Account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#client_id CloudCredential#client_id}
  */
  readonly clientId: string;
  /**
  * Azure Service Principal Account password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#client_secret CloudCredential#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Azure environment (e.g. AzurePublicCloud, AzureChinaCloud)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#environment CloudCredential#environment}
  */
  readonly environment?: string;
  /**
  * Azure Subscription ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#subscription_id CloudCredential#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Azure Tenant ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#tenant_id CloudCredential#tenant_id}
  */
  readonly tenantId?: string;
}

export function cloudCredentialAzureCredentialConfigToTerraform(struct?: CloudCredentialAzureCredentialConfigOutputReference | CloudCredentialAzureCredentialConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    environment: cdktf.stringToTerraform(struct!.environment),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function cloudCredentialAzureCredentialConfigToHclTerraform(struct?: CloudCredentialAzureCredentialConfigOutputReference | CloudCredentialAzureCredentialConfig): any {
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
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
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

export class CloudCredentialAzureCredentialConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudCredentialAzureCredentialConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
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

  public set internalValue(value: CloudCredentialAzureCredentialConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._environment = undefined;
      this._subscriptionId = undefined;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._environment = value.environment;
      this._subscriptionId = value.subscriptionId;
      this._tenantId = value.tenantId;
    }
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

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // environment - computed: true, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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

  // tenant_id - computed: true, optional: true, required: false
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
export interface CloudCredentialDigitaloceanCredentialConfig {
  /**
  * Digital Ocean access token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#access_token CloudCredential#access_token}
  */
  readonly accessToken: string;
}

export function cloudCredentialDigitaloceanCredentialConfigToTerraform(struct?: CloudCredentialDigitaloceanCredentialConfigOutputReference | CloudCredentialDigitaloceanCredentialConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
  }
}


export function cloudCredentialDigitaloceanCredentialConfigToHclTerraform(struct?: CloudCredentialDigitaloceanCredentialConfigOutputReference | CloudCredentialDigitaloceanCredentialConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token: {
      value: cdktf.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudCredentialDigitaloceanCredentialConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudCredentialDigitaloceanCredentialConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudCredentialDigitaloceanCredentialConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
    }
  }

  // access_token - computed: false, optional: false, required: true
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }
}
export interface CloudCredentialGoogleCredentialConfig {
  /**
  * Google auth encoded json
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#auth_encoded_json CloudCredential#auth_encoded_json}
  */
  readonly authEncodedJson: string;
}

export function cloudCredentialGoogleCredentialConfigToTerraform(struct?: CloudCredentialGoogleCredentialConfigOutputReference | CloudCredentialGoogleCredentialConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_encoded_json: cdktf.stringToTerraform(struct!.authEncodedJson),
  }
}


export function cloudCredentialGoogleCredentialConfigToHclTerraform(struct?: CloudCredentialGoogleCredentialConfigOutputReference | CloudCredentialGoogleCredentialConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_encoded_json: {
      value: cdktf.stringToHclTerraform(struct!.authEncodedJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudCredentialGoogleCredentialConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudCredentialGoogleCredentialConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authEncodedJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.authEncodedJson = this._authEncodedJson;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudCredentialGoogleCredentialConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authEncodedJson = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authEncodedJson = value.authEncodedJson;
    }
  }

  // auth_encoded_json - computed: false, optional: false, required: true
  private _authEncodedJson?: string; 
  public get authEncodedJson() {
    return this.getStringAttribute('auth_encoded_json');
  }
  public set authEncodedJson(value: string) {
    this._authEncodedJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authEncodedJsonInput() {
    return this._authEncodedJson;
  }
}
export interface CloudCredentialHarvesterCredentialConfig {
  /**
  * The cluster id of imported Harvester cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#cluster_id CloudCredential#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Harvester cluster type. must be imported or external
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#cluster_type CloudCredential#cluster_type}
  */
  readonly clusterType: string;
  /**
  * Harvester cluster kubeconfig content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#kubeconfig_content CloudCredential#kubeconfig_content}
  */
  readonly kubeconfigContent: string;
}

export function cloudCredentialHarvesterCredentialConfigToTerraform(struct?: CloudCredentialHarvesterCredentialConfigOutputReference | CloudCredentialHarvesterCredentialConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    cluster_type: cdktf.stringToTerraform(struct!.clusterType),
    kubeconfig_content: cdktf.stringToTerraform(struct!.kubeconfigContent),
  }
}


export function cloudCredentialHarvesterCredentialConfigToHclTerraform(struct?: CloudCredentialHarvesterCredentialConfigOutputReference | CloudCredentialHarvesterCredentialConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_type: {
      value: cdktf.stringToHclTerraform(struct!.clusterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubeconfig_content: {
      value: cdktf.stringToHclTerraform(struct!.kubeconfigContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudCredentialHarvesterCredentialConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudCredentialHarvesterCredentialConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._clusterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterType = this._clusterType;
    }
    if (this._kubeconfigContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeconfigContent = this._kubeconfigContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudCredentialHarvesterCredentialConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterId = undefined;
      this._clusterType = undefined;
      this._kubeconfigContent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterId = value.clusterId;
      this._clusterType = value.clusterType;
      this._kubeconfigContent = value.kubeconfigContent;
    }
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_type - computed: false, optional: false, required: true
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // kubeconfig_content - computed: false, optional: false, required: true
  private _kubeconfigContent?: string; 
  public get kubeconfigContent() {
    return this.getStringAttribute('kubeconfig_content');
  }
  public set kubeconfigContent(value: string) {
    this._kubeconfigContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigContentInput() {
    return this._kubeconfigContent;
  }
}
export interface CloudCredentialLinodeCredentialConfig {
  /**
  * Linode API token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#token CloudCredential#token}
  */
  readonly token: string;
}

export function cloudCredentialLinodeCredentialConfigToTerraform(struct?: CloudCredentialLinodeCredentialConfigOutputReference | CloudCredentialLinodeCredentialConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function cloudCredentialLinodeCredentialConfigToHclTerraform(struct?: CloudCredentialLinodeCredentialConfigOutputReference | CloudCredentialLinodeCredentialConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudCredentialLinodeCredentialConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudCredentialLinodeCredentialConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudCredentialLinodeCredentialConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._token = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._token = value.token;
    }
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface CloudCredentialOpenstackCredentialConfig {
  /**
  * OpenStack password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#password CloudCredential#password}
  */
  readonly password: string;
}

export function cloudCredentialOpenstackCredentialConfigToTerraform(struct?: CloudCredentialOpenstackCredentialConfigOutputReference | CloudCredentialOpenstackCredentialConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function cloudCredentialOpenstackCredentialConfigToHclTerraform(struct?: CloudCredentialOpenstackCredentialConfigOutputReference | CloudCredentialOpenstackCredentialConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudCredentialOpenstackCredentialConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudCredentialOpenstackCredentialConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudCredentialOpenstackCredentialConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}
export interface CloudCredentialS3CredentialConfig {
  /**
  * AWS Access Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#access_key CloudCredential#access_key}
  */
  readonly accessKey: string;
  /**
  * AWS default bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#default_bucket CloudCredential#default_bucket}
  */
  readonly defaultBucket?: string;
  /**
  * AWS default endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#default_endpoint CloudCredential#default_endpoint}
  */
  readonly defaultEndpoint?: string;
  /**
  * AWS default endpoint CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#default_endpoint_ca CloudCredential#default_endpoint_ca}
  */
  readonly defaultEndpointCa?: string;
  /**
  * AWS default folder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#default_folder CloudCredential#default_folder}
  */
  readonly defaultFolder?: string;
  /**
  * AWS default region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#default_region CloudCredential#default_region}
  */
  readonly defaultRegion?: string;
  /**
  * AWS default skip ssl verify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#default_skip_ssl_verify CloudCredential#default_skip_ssl_verify}
  */
  readonly defaultSkipSslVerify?: boolean | cdktf.IResolvable;
  /**
  * AWS Secret Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#secret_key CloudCredential#secret_key}
  */
  readonly secretKey: string;
}

export function cloudCredentialS3CredentialConfigToTerraform(struct?: CloudCredentialS3CredentialConfigOutputReference | CloudCredentialS3CredentialConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    default_bucket: cdktf.stringToTerraform(struct!.defaultBucket),
    default_endpoint: cdktf.stringToTerraform(struct!.defaultEndpoint),
    default_endpoint_ca: cdktf.stringToTerraform(struct!.defaultEndpointCa),
    default_folder: cdktf.stringToTerraform(struct!.defaultFolder),
    default_region: cdktf.stringToTerraform(struct!.defaultRegion),
    default_skip_ssl_verify: cdktf.booleanToTerraform(struct!.defaultSkipSslVerify),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
  }
}


export function cloudCredentialS3CredentialConfigToHclTerraform(struct?: CloudCredentialS3CredentialConfigOutputReference | CloudCredentialS3CredentialConfig): any {
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
    default_bucket: {
      value: cdktf.stringToHclTerraform(struct!.defaultBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.defaultEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_endpoint_ca: {
      value: cdktf.stringToHclTerraform(struct!.defaultEndpointCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_folder: {
      value: cdktf.stringToHclTerraform(struct!.defaultFolder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_region: {
      value: cdktf.stringToHclTerraform(struct!.defaultRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_skip_ssl_verify: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSkipSslVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudCredentialS3CredentialConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudCredentialS3CredentialConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._defaultBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultBucket = this._defaultBucket;
    }
    if (this._defaultEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEndpoint = this._defaultEndpoint;
    }
    if (this._defaultEndpointCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEndpointCa = this._defaultEndpointCa;
    }
    if (this._defaultFolder !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultFolder = this._defaultFolder;
    }
    if (this._defaultRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRegion = this._defaultRegion;
    }
    if (this._defaultSkipSslVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSkipSslVerify = this._defaultSkipSslVerify;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudCredentialS3CredentialConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._defaultBucket = undefined;
      this._defaultEndpoint = undefined;
      this._defaultEndpointCa = undefined;
      this._defaultFolder = undefined;
      this._defaultRegion = undefined;
      this._defaultSkipSslVerify = undefined;
      this._secretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._defaultBucket = value.defaultBucket;
      this._defaultEndpoint = value.defaultEndpoint;
      this._defaultEndpointCa = value.defaultEndpointCa;
      this._defaultFolder = value.defaultFolder;
      this._defaultRegion = value.defaultRegion;
      this._defaultSkipSslVerify = value.defaultSkipSslVerify;
      this._secretKey = value.secretKey;
    }
  }

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // default_bucket - computed: false, optional: true, required: false
  private _defaultBucket?: string; 
  public get defaultBucket() {
    return this.getStringAttribute('default_bucket');
  }
  public set defaultBucket(value: string) {
    this._defaultBucket = value;
  }
  public resetDefaultBucket() {
    this._defaultBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBucketInput() {
    return this._defaultBucket;
  }

  // default_endpoint - computed: false, optional: true, required: false
  private _defaultEndpoint?: string; 
  public get defaultEndpoint() {
    return this.getStringAttribute('default_endpoint');
  }
  public set defaultEndpoint(value: string) {
    this._defaultEndpoint = value;
  }
  public resetDefaultEndpoint() {
    this._defaultEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEndpointInput() {
    return this._defaultEndpoint;
  }

  // default_endpoint_ca - computed: false, optional: true, required: false
  private _defaultEndpointCa?: string; 
  public get defaultEndpointCa() {
    return this.getStringAttribute('default_endpoint_ca');
  }
  public set defaultEndpointCa(value: string) {
    this._defaultEndpointCa = value;
  }
  public resetDefaultEndpointCa() {
    this._defaultEndpointCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEndpointCaInput() {
    return this._defaultEndpointCa;
  }

  // default_folder - computed: false, optional: true, required: false
  private _defaultFolder?: string; 
  public get defaultFolder() {
    return this.getStringAttribute('default_folder');
  }
  public set defaultFolder(value: string) {
    this._defaultFolder = value;
  }
  public resetDefaultFolder() {
    this._defaultFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFolderInput() {
    return this._defaultFolder;
  }

  // default_region - computed: false, optional: true, required: false
  private _defaultRegion?: string; 
  public get defaultRegion() {
    return this.getStringAttribute('default_region');
  }
  public set defaultRegion(value: string) {
    this._defaultRegion = value;
  }
  public resetDefaultRegion() {
    this._defaultRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRegionInput() {
    return this._defaultRegion;
  }

  // default_skip_ssl_verify - computed: false, optional: true, required: false
  private _defaultSkipSslVerify?: boolean | cdktf.IResolvable; 
  public get defaultSkipSslVerify() {
    return this.getBooleanAttribute('default_skip_ssl_verify');
  }
  public set defaultSkipSslVerify(value: boolean | cdktf.IResolvable) {
    this._defaultSkipSslVerify = value;
  }
  public resetDefaultSkipSslVerify() {
    this._defaultSkipSslVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSkipSslVerifyInput() {
    return this._defaultSkipSslVerify;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }
}
export interface CloudCredentialTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#create CloudCredential#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#delete CloudCredential#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#update CloudCredential#update}
  */
  readonly update?: string;
}

export function cloudCredentialTimeoutsToTerraform(struct?: CloudCredentialTimeouts | cdktf.IResolvable): any {
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


export function cloudCredentialTimeoutsToHclTerraform(struct?: CloudCredentialTimeouts | cdktf.IResolvable): any {
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

export class CloudCredentialTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudCredentialTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudCredentialTimeouts | cdktf.IResolvable | undefined) {
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
export interface CloudCredentialVsphereCredentialConfig {
  /**
  * vSphere password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#password CloudCredential#password}
  */
  readonly password: string;
  /**
  * vSphere username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#username CloudCredential#username}
  */
  readonly username: string;
  /**
  * vSphere IP/hostname for vCenter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#vcenter CloudCredential#vcenter}
  */
  readonly vcenter: string;
  /**
  * vSphere Port for vCenter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#vcenter_port CloudCredential#vcenter_port}
  */
  readonly vcenterPort?: string;
}

export function cloudCredentialVsphereCredentialConfigToTerraform(struct?: CloudCredentialVsphereCredentialConfigOutputReference | CloudCredentialVsphereCredentialConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
    vcenter: cdktf.stringToTerraform(struct!.vcenter),
    vcenter_port: cdktf.stringToTerraform(struct!.vcenterPort),
  }
}


export function cloudCredentialVsphereCredentialConfigToHclTerraform(struct?: CloudCredentialVsphereCredentialConfigOutputReference | CloudCredentialVsphereCredentialConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcenter: {
      value: cdktf.stringToHclTerraform(struct!.vcenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcenter_port: {
      value: cdktf.stringToHclTerraform(struct!.vcenterPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudCredentialVsphereCredentialConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudCredentialVsphereCredentialConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._vcenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcenter = this._vcenter;
    }
    if (this._vcenterPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcenterPort = this._vcenterPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudCredentialVsphereCredentialConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
      this._vcenter = undefined;
      this._vcenterPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
      this._vcenter = value.vcenter;
      this._vcenterPort = value.vcenterPort;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vcenter - computed: false, optional: false, required: true
  private _vcenter?: string; 
  public get vcenter() {
    return this.getStringAttribute('vcenter');
  }
  public set vcenter(value: string) {
    this._vcenter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterInput() {
    return this._vcenter;
  }

  // vcenter_port - computed: false, optional: true, required: false
  private _vcenterPort?: string; 
  public get vcenterPort() {
    return this.getStringAttribute('vcenter_port');
  }
  public set vcenterPort(value: string) {
    this._vcenterPort = value;
  }
  public resetVcenterPort() {
    this._vcenterPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterPortInput() {
    return this._vcenterPort;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential rancher2_cloud_credential}
*/
export class CloudCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rancher2_cloud_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudCredential to import
  * @param importFromId The id of the existing CloudCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rancher2_cloud_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs/resources/cloud_credential rancher2_cloud_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: CloudCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'rancher2_cloud_credential',
      terraformGeneratorMetadata: {
        providerName: 'rancher2',
        providerVersion: '8.3.1',
        providerVersionConstraint: '8.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._amazonec2CredentialConfig.internalValue = config.amazonec2CredentialConfig;
    this._azureCredentialConfig.internalValue = config.azureCredentialConfig;
    this._digitaloceanCredentialConfig.internalValue = config.digitaloceanCredentialConfig;
    this._googleCredentialConfig.internalValue = config.googleCredentialConfig;
    this._harvesterCredentialConfig.internalValue = config.harvesterCredentialConfig;
    this._linodeCredentialConfig.internalValue = config.linodeCredentialConfig;
    this._openstackCredentialConfig.internalValue = config.openstackCredentialConfig;
    this._s3CredentialConfig.internalValue = config.s3CredentialConfig;
    this._timeouts.internalValue = config.timeouts;
    this._vsphereCredentialConfig.internalValue = config.vsphereCredentialConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // driver - computed: true, optional: false, required: false
  public get driver() {
    return this.getStringAttribute('driver');
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

  // labels - computed: true, optional: true, required: false
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

  // amazonec2_credential_config - computed: false, optional: true, required: false
  private _amazonec2CredentialConfig = new CloudCredentialAmazonec2CredentialConfigOutputReference(this, "amazonec2_credential_config");
  public get amazonec2CredentialConfig() {
    return this._amazonec2CredentialConfig;
  }
  public putAmazonec2CredentialConfig(value: CloudCredentialAmazonec2CredentialConfig) {
    this._amazonec2CredentialConfig.internalValue = value;
  }
  public resetAmazonec2CredentialConfig() {
    this._amazonec2CredentialConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonec2CredentialConfigInput() {
    return this._amazonec2CredentialConfig.internalValue;
  }

  // azure_credential_config - computed: false, optional: true, required: false
  private _azureCredentialConfig = new CloudCredentialAzureCredentialConfigOutputReference(this, "azure_credential_config");
  public get azureCredentialConfig() {
    return this._azureCredentialConfig;
  }
  public putAzureCredentialConfig(value: CloudCredentialAzureCredentialConfig) {
    this._azureCredentialConfig.internalValue = value;
  }
  public resetAzureCredentialConfig() {
    this._azureCredentialConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureCredentialConfigInput() {
    return this._azureCredentialConfig.internalValue;
  }

  // digitalocean_credential_config - computed: false, optional: true, required: false
  private _digitaloceanCredentialConfig = new CloudCredentialDigitaloceanCredentialConfigOutputReference(this, "digitalocean_credential_config");
  public get digitaloceanCredentialConfig() {
    return this._digitaloceanCredentialConfig;
  }
  public putDigitaloceanCredentialConfig(value: CloudCredentialDigitaloceanCredentialConfig) {
    this._digitaloceanCredentialConfig.internalValue = value;
  }
  public resetDigitaloceanCredentialConfig() {
    this._digitaloceanCredentialConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitaloceanCredentialConfigInput() {
    return this._digitaloceanCredentialConfig.internalValue;
  }

  // google_credential_config - computed: false, optional: true, required: false
  private _googleCredentialConfig = new CloudCredentialGoogleCredentialConfigOutputReference(this, "google_credential_config");
  public get googleCredentialConfig() {
    return this._googleCredentialConfig;
  }
  public putGoogleCredentialConfig(value: CloudCredentialGoogleCredentialConfig) {
    this._googleCredentialConfig.internalValue = value;
  }
  public resetGoogleCredentialConfig() {
    this._googleCredentialConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCredentialConfigInput() {
    return this._googleCredentialConfig.internalValue;
  }

  // harvester_credential_config - computed: false, optional: true, required: false
  private _harvesterCredentialConfig = new CloudCredentialHarvesterCredentialConfigOutputReference(this, "harvester_credential_config");
  public get harvesterCredentialConfig() {
    return this._harvesterCredentialConfig;
  }
  public putHarvesterCredentialConfig(value: CloudCredentialHarvesterCredentialConfig) {
    this._harvesterCredentialConfig.internalValue = value;
  }
  public resetHarvesterCredentialConfig() {
    this._harvesterCredentialConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get harvesterCredentialConfigInput() {
    return this._harvesterCredentialConfig.internalValue;
  }

  // linode_credential_config - computed: false, optional: true, required: false
  private _linodeCredentialConfig = new CloudCredentialLinodeCredentialConfigOutputReference(this, "linode_credential_config");
  public get linodeCredentialConfig() {
    return this._linodeCredentialConfig;
  }
  public putLinodeCredentialConfig(value: CloudCredentialLinodeCredentialConfig) {
    this._linodeCredentialConfig.internalValue = value;
  }
  public resetLinodeCredentialConfig() {
    this._linodeCredentialConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linodeCredentialConfigInput() {
    return this._linodeCredentialConfig.internalValue;
  }

  // openstack_credential_config - computed: false, optional: true, required: false
  private _openstackCredentialConfig = new CloudCredentialOpenstackCredentialConfigOutputReference(this, "openstack_credential_config");
  public get openstackCredentialConfig() {
    return this._openstackCredentialConfig;
  }
  public putOpenstackCredentialConfig(value: CloudCredentialOpenstackCredentialConfig) {
    this._openstackCredentialConfig.internalValue = value;
  }
  public resetOpenstackCredentialConfig() {
    this._openstackCredentialConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openstackCredentialConfigInput() {
    return this._openstackCredentialConfig.internalValue;
  }

  // s3_credential_config - computed: false, optional: true, required: false
  private _s3CredentialConfig = new CloudCredentialS3CredentialConfigOutputReference(this, "s3_credential_config");
  public get s3CredentialConfig() {
    return this._s3CredentialConfig;
  }
  public putS3CredentialConfig(value: CloudCredentialS3CredentialConfig) {
    this._s3CredentialConfig.internalValue = value;
  }
  public resetS3CredentialConfig() {
    this._s3CredentialConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3CredentialConfigInput() {
    return this._s3CredentialConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudCredentialTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudCredentialTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vsphere_credential_config - computed: false, optional: true, required: false
  private _vsphereCredentialConfig = new CloudCredentialVsphereCredentialConfigOutputReference(this, "vsphere_credential_config");
  public get vsphereCredentialConfig() {
    return this._vsphereCredentialConfig;
  }
  public putVsphereCredentialConfig(value: CloudCredentialVsphereCredentialConfig) {
    this._vsphereCredentialConfig.internalValue = value;
  }
  public resetVsphereCredentialConfig() {
    this._vsphereCredentialConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereCredentialConfigInput() {
    return this._vsphereCredentialConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      amazonec2_credential_config: cloudCredentialAmazonec2CredentialConfigToTerraform(this._amazonec2CredentialConfig.internalValue),
      azure_credential_config: cloudCredentialAzureCredentialConfigToTerraform(this._azureCredentialConfig.internalValue),
      digitalocean_credential_config: cloudCredentialDigitaloceanCredentialConfigToTerraform(this._digitaloceanCredentialConfig.internalValue),
      google_credential_config: cloudCredentialGoogleCredentialConfigToTerraform(this._googleCredentialConfig.internalValue),
      harvester_credential_config: cloudCredentialHarvesterCredentialConfigToTerraform(this._harvesterCredentialConfig.internalValue),
      linode_credential_config: cloudCredentialLinodeCredentialConfigToTerraform(this._linodeCredentialConfig.internalValue),
      openstack_credential_config: cloudCredentialOpenstackCredentialConfigToTerraform(this._openstackCredentialConfig.internalValue),
      s3_credential_config: cloudCredentialS3CredentialConfigToTerraform(this._s3CredentialConfig.internalValue),
      timeouts: cloudCredentialTimeoutsToTerraform(this._timeouts.internalValue),
      vsphere_credential_config: cloudCredentialVsphereCredentialConfigToTerraform(this._vsphereCredentialConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      amazonec2_credential_config: {
        value: cloudCredentialAmazonec2CredentialConfigToHclTerraform(this._amazonec2CredentialConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudCredentialAmazonec2CredentialConfigList",
      },
      azure_credential_config: {
        value: cloudCredentialAzureCredentialConfigToHclTerraform(this._azureCredentialConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudCredentialAzureCredentialConfigList",
      },
      digitalocean_credential_config: {
        value: cloudCredentialDigitaloceanCredentialConfigToHclTerraform(this._digitaloceanCredentialConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudCredentialDigitaloceanCredentialConfigList",
      },
      google_credential_config: {
        value: cloudCredentialGoogleCredentialConfigToHclTerraform(this._googleCredentialConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudCredentialGoogleCredentialConfigList",
      },
      harvester_credential_config: {
        value: cloudCredentialHarvesterCredentialConfigToHclTerraform(this._harvesterCredentialConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudCredentialHarvesterCredentialConfigList",
      },
      linode_credential_config: {
        value: cloudCredentialLinodeCredentialConfigToHclTerraform(this._linodeCredentialConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudCredentialLinodeCredentialConfigList",
      },
      openstack_credential_config: {
        value: cloudCredentialOpenstackCredentialConfigToHclTerraform(this._openstackCredentialConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudCredentialOpenstackCredentialConfigList",
      },
      s3_credential_config: {
        value: cloudCredentialS3CredentialConfigToHclTerraform(this._s3CredentialConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudCredentialS3CredentialConfigList",
      },
      timeouts: {
        value: cloudCredentialTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudCredentialTimeouts",
      },
      vsphere_credential_config: {
        value: cloudCredentialVsphereCredentialConfigToHclTerraform(this._vsphereCredentialConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudCredentialVsphereCredentialConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
