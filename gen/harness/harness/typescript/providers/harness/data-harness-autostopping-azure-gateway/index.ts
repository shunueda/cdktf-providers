// https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_azure_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessAutostoppingAzureGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of Azure AppGateway for importing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_azure_gateway#app_gateway_id DataHarnessAutostoppingAzureGateway#app_gateway_id}
  */
  readonly appGatewayId?: string;
  /**
  * Region in which azure cloud function will be provisioned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_azure_gateway#azure_func_region DataHarnessAutostoppingAzureGateway#azure_func_region}
  */
  readonly azureFuncRegion: string;
  /**
  * ID of existing SSL certificate from AppGateway being imported. Required only for SSL based rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_azure_gateway#certificate_id DataHarnessAutostoppingAzureGateway#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * Id of the cloud connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_azure_gateway#cloud_connector_id DataHarnessAutostoppingAzureGateway#cloud_connector_id}
  */
  readonly cloudConnectorId: string;
  /**
  * Governs how the loadabalancer entity will be deleted on Terraform destroy. When set to true, the associated Application Gateway will be deleted permanently from Azure account. Be fully aware of the consequneces of settting this to true, as the action is irreversible. When set to false, solely the Harness LB representation will be deleted, leaving the cloud resources intact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_azure_gateway#delete_cloud_resources_on_destroy DataHarnessAutostoppingAzureGateway#delete_cloud_resources_on_destroy}
  */
  readonly deleteCloudResourcesOnDestroy: boolean | cdktf.IResolvable;
  /**
  * ID of IP address to be used. Required only for creating new AppGateway. See https://learn.microsoft.com/en-us/azure/application-gateway/application-gateway-components#static-versus-dynamic-public-ip-address for more details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_azure_gateway#frontend_ip DataHarnessAutostoppingAzureGateway#frontend_ip}
  */
  readonly frontendIp?: string;
  /**
  * Hostname for the proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_azure_gateway#host_name DataHarnessAutostoppingAzureGateway#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_azure_gateway#id DataHarnessAutostoppingAzureGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_azure_gateway#name DataHarnessAutostoppingAzureGateway#name}
  */
  readonly name: string;
  /**
  * Region in which cloud resources are hosted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_azure_gateway#region DataHarnessAutostoppingAzureGateway#region}
  */
  readonly region: string;
  /**
  * Resource group in which cloud resources are hosted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_azure_gateway#resource_group DataHarnessAutostoppingAzureGateway#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * Size of machine used for the gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_azure_gateway#sku_size DataHarnessAutostoppingAzureGateway#sku_size}
  */
  readonly skuSize?: string;
  /**
  * Subnet in which cloud resources are hosted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_azure_gateway#subnet_id DataHarnessAutostoppingAzureGateway#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * VPC in which cloud resources are hosted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_azure_gateway#vpc DataHarnessAutostoppingAzureGateway#vpc}
  */
  readonly vpc: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_azure_gateway harness_autostopping_azure_gateway}
*/
export class DataHarnessAutostoppingAzureGateway extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_autostopping_azure_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessAutostoppingAzureGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessAutostoppingAzureGateway to import
  * @param importFromId The id of the existing DataHarnessAutostoppingAzureGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_azure_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessAutostoppingAzureGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_autostopping_azure_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/autostopping_azure_gateway harness_autostopping_azure_gateway} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessAutostoppingAzureGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: DataHarnessAutostoppingAzureGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_autostopping_azure_gateway',
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
    this._appGatewayId = config.appGatewayId;
    this._azureFuncRegion = config.azureFuncRegion;
    this._certificateId = config.certificateId;
    this._cloudConnectorId = config.cloudConnectorId;
    this._deleteCloudResourcesOnDestroy = config.deleteCloudResourcesOnDestroy;
    this._frontendIp = config.frontendIp;
    this._hostName = config.hostName;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._resourceGroup = config.resourceGroup;
    this._skuSize = config.skuSize;
    this._subnetId = config.subnetId;
    this._vpc = config.vpc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_gateway_id - computed: false, optional: true, required: false
  private _appGatewayId?: string; 
  public get appGatewayId() {
    return this.getStringAttribute('app_gateway_id');
  }
  public set appGatewayId(value: string) {
    this._appGatewayId = value;
  }
  public resetAppGatewayId() {
    this._appGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appGatewayIdInput() {
    return this._appGatewayId;
  }

  // azure_func_region - computed: false, optional: false, required: true
  private _azureFuncRegion?: string; 
  public get azureFuncRegion() {
    return this.getStringAttribute('azure_func_region');
  }
  public set azureFuncRegion(value: string) {
    this._azureFuncRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFuncRegionInput() {
    return this._azureFuncRegion;
  }

  // certificate_id - computed: false, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // cloud_connector_id - computed: false, optional: false, required: true
  private _cloudConnectorId?: string; 
  public get cloudConnectorId() {
    return this.getStringAttribute('cloud_connector_id');
  }
  public set cloudConnectorId(value: string) {
    this._cloudConnectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudConnectorIdInput() {
    return this._cloudConnectorId;
  }

  // delete_cloud_resources_on_destroy - computed: false, optional: false, required: true
  private _deleteCloudResourcesOnDestroy?: boolean | cdktf.IResolvable; 
  public get deleteCloudResourcesOnDestroy() {
    return this.getBooleanAttribute('delete_cloud_resources_on_destroy');
  }
  public set deleteCloudResourcesOnDestroy(value: boolean | cdktf.IResolvable) {
    this._deleteCloudResourcesOnDestroy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteCloudResourcesOnDestroyInput() {
    return this._deleteCloudResourcesOnDestroy;
  }

  // frontend_ip - computed: false, optional: true, required: false
  private _frontendIp?: string; 
  public get frontendIp() {
    return this.getStringAttribute('frontend_ip');
  }
  public set frontendIp(value: string) {
    this._frontendIp = value;
  }
  public resetFrontendIp() {
    this._frontendIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendIpInput() {
    return this._frontendIp;
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
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

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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

  // sku_size - computed: false, optional: true, required: false
  private _skuSize?: string; 
  public get skuSize() {
    return this.getStringAttribute('sku_size');
  }
  public set skuSize(value: string) {
    this._skuSize = value;
  }
  public resetSkuSize() {
    this._skuSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuSizeInput() {
    return this._skuSize;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vpc - computed: false, optional: false, required: true
  private _vpc?: string; 
  public get vpc() {
    return this.getStringAttribute('vpc');
  }
  public set vpc(value: string) {
    this._vpc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_gateway_id: cdktf.stringToTerraform(this._appGatewayId),
      azure_func_region: cdktf.stringToTerraform(this._azureFuncRegion),
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      cloud_connector_id: cdktf.stringToTerraform(this._cloudConnectorId),
      delete_cloud_resources_on_destroy: cdktf.booleanToTerraform(this._deleteCloudResourcesOnDestroy),
      frontend_ip: cdktf.stringToTerraform(this._frontendIp),
      host_name: cdktf.stringToTerraform(this._hostName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      resource_group: cdktf.stringToTerraform(this._resourceGroup),
      sku_size: cdktf.stringToTerraform(this._skuSize),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vpc: cdktf.stringToTerraform(this._vpc),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_gateway_id: {
        value: cdktf.stringToHclTerraform(this._appGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_func_region: {
        value: cdktf.stringToHclTerraform(this._azureFuncRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_id: {
        value: cdktf.stringToHclTerraform(this._certificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_connector_id: {
        value: cdktf.stringToHclTerraform(this._cloudConnectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_cloud_resources_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._deleteCloudResourcesOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      frontend_ip: {
        value: cdktf.stringToHclTerraform(this._frontendIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group: {
        value: cdktf.stringToHclTerraform(this._resourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sku_size: {
        value: cdktf.stringToHclTerraform(this._skuSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc: {
        value: cdktf.stringToHclTerraform(this._vpc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
