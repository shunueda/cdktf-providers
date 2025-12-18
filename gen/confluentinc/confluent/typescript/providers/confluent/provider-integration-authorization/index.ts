// https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/provider_integration_authorization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProviderIntegrationAuthorizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the provider integration to authorize.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/provider_integration_authorization#provider_integration_id ProviderIntegrationAuthorization#provider_integration_id}
  */
  readonly providerIntegrationId: string;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/provider_integration_authorization#azure ProviderIntegrationAuthorization#azure}
  */
  readonly azure?: ProviderIntegrationAuthorizationAzure;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/provider_integration_authorization#environment ProviderIntegrationAuthorization#environment}
  */
  readonly environment: ProviderIntegrationAuthorizationEnvironment;
  /**
  * gcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/provider_integration_authorization#gcp ProviderIntegrationAuthorization#gcp}
  */
  readonly gcp?: ProviderIntegrationAuthorizationGcp;
}
export interface ProviderIntegrationAuthorizationAzure {
  /**
  * Customer's Azure Tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/provider_integration_authorization#customer_azure_tenant_id ProviderIntegrationAuthorization#customer_azure_tenant_id}
  */
  readonly customerAzureTenantId: string;
}

export function providerIntegrationAuthorizationAzureToTerraform(struct?: ProviderIntegrationAuthorizationAzureOutputReference | ProviderIntegrationAuthorizationAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customer_azure_tenant_id: cdktf.stringToTerraform(struct!.customerAzureTenantId),
  }
}


export function providerIntegrationAuthorizationAzureToHclTerraform(struct?: ProviderIntegrationAuthorizationAzureOutputReference | ProviderIntegrationAuthorizationAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customer_azure_tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.customerAzureTenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProviderIntegrationAuthorizationAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProviderIntegrationAuthorizationAzure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerAzureTenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerAzureTenantId = this._customerAzureTenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProviderIntegrationAuthorizationAzure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customerAzureTenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customerAzureTenantId = value.customerAzureTenantId;
    }
  }

  // confluent_multi_tenant_app_id - computed: true, optional: false, required: false
  public get confluentMultiTenantAppId() {
    return this.getStringAttribute('confluent_multi_tenant_app_id');
  }

  // customer_azure_tenant_id - computed: false, optional: false, required: true
  private _customerAzureTenantId?: string; 
  public get customerAzureTenantId() {
    return this.getStringAttribute('customer_azure_tenant_id');
  }
  public set customerAzureTenantId(value: string) {
    this._customerAzureTenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerAzureTenantIdInput() {
    return this._customerAzureTenantId;
  }
}
export interface ProviderIntegrationAuthorizationEnvironment {
  /**
  * The unique identifier for the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/provider_integration_authorization#id ProviderIntegrationAuthorization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function providerIntegrationAuthorizationEnvironmentToTerraform(struct?: ProviderIntegrationAuthorizationEnvironmentOutputReference | ProviderIntegrationAuthorizationEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function providerIntegrationAuthorizationEnvironmentToHclTerraform(struct?: ProviderIntegrationAuthorizationEnvironmentOutputReference | ProviderIntegrationAuthorizationEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProviderIntegrationAuthorizationEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProviderIntegrationAuthorizationEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProviderIntegrationAuthorizationEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface ProviderIntegrationAuthorizationGcp {
  /**
  * Customer's Google Service Account that Confluent Cloud impersonates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/provider_integration_authorization#customer_google_service_account ProviderIntegrationAuthorization#customer_google_service_account}
  */
  readonly customerGoogleServiceAccount: string;
}

export function providerIntegrationAuthorizationGcpToTerraform(struct?: ProviderIntegrationAuthorizationGcpOutputReference | ProviderIntegrationAuthorizationGcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customer_google_service_account: cdktf.stringToTerraform(struct!.customerGoogleServiceAccount),
  }
}


export function providerIntegrationAuthorizationGcpToHclTerraform(struct?: ProviderIntegrationAuthorizationGcpOutputReference | ProviderIntegrationAuthorizationGcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customer_google_service_account: {
      value: cdktf.stringToHclTerraform(struct!.customerGoogleServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProviderIntegrationAuthorizationGcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProviderIntegrationAuthorizationGcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerGoogleServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerGoogleServiceAccount = this._customerGoogleServiceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProviderIntegrationAuthorizationGcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customerGoogleServiceAccount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customerGoogleServiceAccount = value.customerGoogleServiceAccount;
    }
  }

  // customer_google_service_account - computed: false, optional: false, required: true
  private _customerGoogleServiceAccount?: string; 
  public get customerGoogleServiceAccount() {
    return this.getStringAttribute('customer_google_service_account');
  }
  public set customerGoogleServiceAccount(value: string) {
    this._customerGoogleServiceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerGoogleServiceAccountInput() {
    return this._customerGoogleServiceAccount;
  }

  // google_service_account - computed: true, optional: false, required: false
  public get googleServiceAccount() {
    return this.getStringAttribute('google_service_account');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/provider_integration_authorization confluent_provider_integration_authorization}
*/
export class ProviderIntegrationAuthorization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_provider_integration_authorization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProviderIntegrationAuthorization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProviderIntegrationAuthorization to import
  * @param importFromId The id of the existing ProviderIntegrationAuthorization that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/provider_integration_authorization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProviderIntegrationAuthorization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_provider_integration_authorization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/provider_integration_authorization confluent_provider_integration_authorization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProviderIntegrationAuthorizationConfig
  */
  public constructor(scope: Construct, id: string, config: ProviderIntegrationAuthorizationConfig) {
    super(scope, id, {
      terraformResourceType: 'confluent_provider_integration_authorization',
      terraformGeneratorMetadata: {
        providerName: 'confluent',
        providerVersion: '2.57.0',
        providerVersionConstraint: '2.57.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._providerIntegrationId = config.providerIntegrationId;
    this._azure.internalValue = config.azure;
    this._environment.internalValue = config.environment;
    this._gcp.internalValue = config.gcp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // provider_integration_id - computed: false, optional: false, required: true
  private _providerIntegrationId?: string; 
  public get providerIntegrationId() {
    return this.getStringAttribute('provider_integration_id');
  }
  public set providerIntegrationId(value: string) {
    this._providerIntegrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIntegrationIdInput() {
    return this._providerIntegrationId;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new ProviderIntegrationAuthorizationAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: ProviderIntegrationAuthorizationAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // environment - computed: false, optional: false, required: true
  private _environment = new ProviderIntegrationAuthorizationEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: ProviderIntegrationAuthorizationEnvironment) {
    this._environment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // gcp - computed: false, optional: true, required: false
  private _gcp = new ProviderIntegrationAuthorizationGcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }
  public putGcp(value: ProviderIntegrationAuthorizationGcp) {
    this._gcp.internalValue = value;
  }
  public resetGcp() {
    this._gcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpInput() {
    return this._gcp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      provider_integration_id: cdktf.stringToTerraform(this._providerIntegrationId),
      azure: providerIntegrationAuthorizationAzureToTerraform(this._azure.internalValue),
      environment: providerIntegrationAuthorizationEnvironmentToTerraform(this._environment.internalValue),
      gcp: providerIntegrationAuthorizationGcpToTerraform(this._gcp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      provider_integration_id: {
        value: cdktf.stringToHclTerraform(this._providerIntegrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure: {
        value: providerIntegrationAuthorizationAzureToHclTerraform(this._azure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProviderIntegrationAuthorizationAzureList",
      },
      environment: {
        value: providerIntegrationAuthorizationEnvironmentToHclTerraform(this._environment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProviderIntegrationAuthorizationEnvironmentList",
      },
      gcp: {
        value: providerIntegrationAuthorizationGcpToHclTerraform(this._gcp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProviderIntegrationAuthorizationGcpList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
