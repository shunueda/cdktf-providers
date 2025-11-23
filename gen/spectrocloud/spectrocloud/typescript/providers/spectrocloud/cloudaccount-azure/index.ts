// https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cloudaccount_azure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudaccountAzureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique client Id from Azure console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cloudaccount_azure#azure_client_id CloudaccountAzure#azure_client_id}
  */
  readonly azureClientId: string;
  /**
  * Azure secret for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cloudaccount_azure#azure_client_secret CloudaccountAzure#azure_client_secret}
  */
  readonly azureClientSecret: string;
  /**
  * Unique tenant Id from Azure console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cloudaccount_azure#azure_tenant_id CloudaccountAzure#azure_tenant_id}
  */
  readonly azureTenantId: string;
  /**
  * The Azure partition in which the cloud account is located. 
  * Can be 'AzurePublicCloud' for standard Azure regions or 'AzureUSGovernmentCloud' for Azure GovCloud (US) regions or 'AzureUSSecretCloud' for Azure Secret Cloud regions.
  * Default is 'AzurePublicCloud'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cloudaccount_azure#cloud CloudaccountAzure#cloud}
  */
  readonly cloud?: string;
  /**
  * The context of the Azure configuration. Defaults to `project`. If  the `project` context is specified, the project name will sourced from the provider configuration parameter [`project_name`](https://registry.terraform.io/providers/spectrocloud/spectrocloud/latest/docs#schema).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cloudaccount_azure#context CloudaccountAzure#context}
  */
  readonly context?: string;
  /**
  * Disable properties request. This is a boolean value that indicates whether to disable properties request or not. If not specified, the default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cloudaccount_azure#disable_properties_request CloudaccountAzure#disable_properties_request}
  */
  readonly disablePropertiesRequest?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cloudaccount_azure#id CloudaccountAzure#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Azure cloud account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cloudaccount_azure#name CloudaccountAzure#name}
  */
  readonly name: string;
  /**
  * ID of the private cloud gateway. This is the ID of the private cloud gateway that is used to connect to the private cluster endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cloudaccount_azure#private_cloud_gateway_id CloudaccountAzure#private_cloud_gateway_id}
  */
  readonly privateCloudGatewayId?: string;
  /**
  * The name of the tenant. This is the name of the tenant that is used to connect to the Azure cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cloudaccount_azure#tenant_name CloudaccountAzure#tenant_name}
  */
  readonly tenantName?: string;
  /**
  * TLS certificate for authentication. This field is only allowed when cloud is set to 'AzureUSSecretCloud'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cloudaccount_azure#tls_cert CloudaccountAzure#tls_cert}
  */
  readonly tlsCert?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cloudaccount_azure spectrocloud_cloudaccount_azure}
*/
export class CloudaccountAzure extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spectrocloud_cloudaccount_azure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudaccountAzure resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudaccountAzure to import
  * @param importFromId The id of the existing CloudaccountAzure that should be imported. Refer to the {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cloudaccount_azure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudaccountAzure to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spectrocloud_cloudaccount_azure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.0/docs/resources/cloudaccount_azure spectrocloud_cloudaccount_azure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudaccountAzureConfig
  */
  public constructor(scope: Construct, id: string, config: CloudaccountAzureConfig) {
    super(scope, id, {
      terraformResourceType: 'spectrocloud_cloudaccount_azure',
      terraformGeneratorMetadata: {
        providerName: 'spectrocloud',
        providerVersion: '0.26.0',
        providerVersionConstraint: '0.26.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._azureClientId = config.azureClientId;
    this._azureClientSecret = config.azureClientSecret;
    this._azureTenantId = config.azureTenantId;
    this._cloud = config.cloud;
    this._context = config.context;
    this._disablePropertiesRequest = config.disablePropertiesRequest;
    this._id = config.id;
    this._name = config.name;
    this._privateCloudGatewayId = config.privateCloudGatewayId;
    this._tenantName = config.tenantName;
    this._tlsCert = config.tlsCert;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_client_id - computed: false, optional: false, required: true
  private _azureClientId?: string; 
  public get azureClientId() {
    return this.getStringAttribute('azure_client_id');
  }
  public set azureClientId(value: string) {
    this._azureClientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureClientIdInput() {
    return this._azureClientId;
  }

  // azure_client_secret - computed: false, optional: false, required: true
  private _azureClientSecret?: string; 
  public get azureClientSecret() {
    return this.getStringAttribute('azure_client_secret');
  }
  public set azureClientSecret(value: string) {
    this._azureClientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureClientSecretInput() {
    return this._azureClientSecret;
  }

  // azure_tenant_id - computed: false, optional: false, required: true
  private _azureTenantId?: string; 
  public get azureTenantId() {
    return this.getStringAttribute('azure_tenant_id');
  }
  public set azureTenantId(value: string) {
    this._azureTenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTenantIdInput() {
    return this._azureTenantId;
  }

  // cloud - computed: false, optional: true, required: false
  private _cloud?: string; 
  public get cloud() {
    return this.getStringAttribute('cloud');
  }
  public set cloud(value: string) {
    this._cloud = value;
  }
  public resetCloud() {
    this._cloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // disable_properties_request - computed: false, optional: true, required: false
  private _disablePropertiesRequest?: boolean | cdktf.IResolvable; 
  public get disablePropertiesRequest() {
    return this.getBooleanAttribute('disable_properties_request');
  }
  public set disablePropertiesRequest(value: boolean | cdktf.IResolvable) {
    this._disablePropertiesRequest = value;
  }
  public resetDisablePropertiesRequest() {
    this._disablePropertiesRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePropertiesRequestInput() {
    return this._disablePropertiesRequest;
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

  // private_cloud_gateway_id - computed: false, optional: true, required: false
  private _privateCloudGatewayId?: string; 
  public get privateCloudGatewayId() {
    return this.getStringAttribute('private_cloud_gateway_id');
  }
  public set privateCloudGatewayId(value: string) {
    this._privateCloudGatewayId = value;
  }
  public resetPrivateCloudGatewayId() {
    this._privateCloudGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateCloudGatewayIdInput() {
    return this._privateCloudGatewayId;
  }

  // tenant_name - computed: false, optional: true, required: false
  private _tenantName?: string; 
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }
  public set tenantName(value: string) {
    this._tenantName = value;
  }
  public resetTenantName() {
    this._tenantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }

  // tls_cert - computed: false, optional: true, required: false
  private _tlsCert?: string; 
  public get tlsCert() {
    return this.getStringAttribute('tls_cert');
  }
  public set tlsCert(value: string) {
    this._tlsCert = value;
  }
  public resetTlsCert() {
    this._tlsCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertInput() {
    return this._tlsCert;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      azure_client_id: cdktf.stringToTerraform(this._azureClientId),
      azure_client_secret: cdktf.stringToTerraform(this._azureClientSecret),
      azure_tenant_id: cdktf.stringToTerraform(this._azureTenantId),
      cloud: cdktf.stringToTerraform(this._cloud),
      context: cdktf.stringToTerraform(this._context),
      disable_properties_request: cdktf.booleanToTerraform(this._disablePropertiesRequest),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      private_cloud_gateway_id: cdktf.stringToTerraform(this._privateCloudGatewayId),
      tenant_name: cdktf.stringToTerraform(this._tenantName),
      tls_cert: cdktf.stringToTerraform(this._tlsCert),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      azure_client_id: {
        value: cdktf.stringToHclTerraform(this._azureClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_client_secret: {
        value: cdktf.stringToHclTerraform(this._azureClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_tenant_id: {
        value: cdktf.stringToHclTerraform(this._azureTenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud: {
        value: cdktf.stringToHclTerraform(this._cloud),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context: {
        value: cdktf.stringToHclTerraform(this._context),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_properties_request: {
        value: cdktf.booleanToHclTerraform(this._disablePropertiesRequest),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_cloud_gateway_id: {
        value: cdktf.stringToHclTerraform(this._privateCloudGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_name: {
        value: cdktf.stringToHclTerraform(this._tenantName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_cert: {
        value: cdktf.stringToHclTerraform(this._tlsCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
