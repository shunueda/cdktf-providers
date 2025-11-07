// https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvironmentsAzureCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_credential#app_based EnvironmentsAzureCredential#app_based}
  */
  readonly appBased: EnvironmentsAzureCredentialAppBased;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_credential#credential_name EnvironmentsAzureCredential#credential_name}
  */
  readonly credentialName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_credential#description EnvironmentsAzureCredential#description}
  */
  readonly description?: string;
  /**
  * The Azure subscription ID. Required for secret based credentials and should look like the following example: a8d4457d-310v-41p6-sc53-14g8d733e514
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_credential#subscription_id EnvironmentsAzureCredential#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * The Azure AD tenant ID for the Azure subscription. Required for secret based credentials and should look like the following example: b10u3481-2451-10ba-7sfd-9o2d1v60185d
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_credential#tenant_id EnvironmentsAzureCredential#tenant_id}
  */
  readonly tenantId: string;
}
export interface EnvironmentsAzureCredentialAppBased {
  /**
  * The ID of the application registered in Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_credential#application_id EnvironmentsAzureCredential#application_id}
  */
  readonly applicationId: string;
  /**
  * The client secret key (also referred to as application password) for the registered application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_credential#secret_key EnvironmentsAzureCredential#secret_key}
  */
  readonly secretKey: string;
}

export function environmentsAzureCredentialAppBasedToTerraform(struct?: EnvironmentsAzureCredentialAppBased | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
  }
}


export function environmentsAzureCredentialAppBasedToHclTerraform(struct?: EnvironmentsAzureCredentialAppBased | cdktf.IResolvable): any {
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

export class EnvironmentsAzureCredentialAppBasedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EnvironmentsAzureCredentialAppBased | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentsAzureCredentialAppBased | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationId = undefined;
      this._secretKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationId = value.applicationId;
      this._secretKey = value.secretKey;
    }
  }

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
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

/**
* Represents a {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_credential cdp_environments_azure_credential}
*/
export class EnvironmentsAzureCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cdp_environments_azure_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnvironmentsAzureCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnvironmentsAzureCredential to import
  * @param importFromId The id of the existing EnvironmentsAzureCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnvironmentsAzureCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cdp_environments_azure_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/environments_azure_credential cdp_environments_azure_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentsAzureCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: EnvironmentsAzureCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'cdp_environments_azure_credential',
      terraformGeneratorMetadata: {
        providerName: 'cdp',
        providerVersion: '0.10.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appBased.internalValue = config.appBased;
    this._credentialName = config.credentialName;
    this._description = config.description;
    this._subscriptionId = config.subscriptionId;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_based - computed: false, optional: false, required: true
  private _appBased = new EnvironmentsAzureCredentialAppBasedOutputReference(this, "app_based");
  public get appBased() {
    return this._appBased;
  }
  public putAppBased(value: EnvironmentsAzureCredentialAppBased) {
    this._appBased.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appBasedInput() {
    return this._appBased.internalValue;
  }

  // credential_name - computed: false, optional: false, required: true
  private _credentialName?: string; 
  public get credentialName() {
    return this.getStringAttribute('credential_name');
  }
  public set credentialName(value: string) {
    this._credentialName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialNameInput() {
    return this._credentialName;
  }

  // crn - computed: true, optional: false, required: false
  public get crn() {
    return this.getStringAttribute('crn');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_based: environmentsAzureCredentialAppBasedToTerraform(this._appBased.internalValue),
      credential_name: cdktf.stringToTerraform(this._credentialName),
      description: cdktf.stringToTerraform(this._description),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_based: {
        value: environmentsAzureCredentialAppBasedToHclTerraform(this._appBased.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EnvironmentsAzureCredentialAppBased",
      },
      credential_name: {
        value: cdktf.stringToHclTerraform(this._credentialName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
