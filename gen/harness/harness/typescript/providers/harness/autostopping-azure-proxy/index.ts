// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_azure_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutostoppingAzureProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Boolean value to indicate if proxy vm needs to have static IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_azure_proxy#allocate_static_ip AutostoppingAzureProxy#allocate_static_ip}
  */
  readonly allocateStaticIp?: boolean | cdktf.IResolvable;
  /**
  * Harness NG API key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_azure_proxy#api_key AutostoppingAzureProxy#api_key}
  */
  readonly apiKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_azure_proxy#certificate_id AutostoppingAzureProxy#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * Id of the cloud connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_azure_proxy#cloud_connector_id AutostoppingAzureProxy#cloud_connector_id}
  */
  readonly cloudConnectorId: string;
  /**
  * Governs how the proxy entity will be deleted on Terraform destroy. When set to true, the associated VM will be deleted permanently from Azure account. Be fully aware of the consequneces of settting this to true, as the action is irreversible. When set to false, solely the Harness LB representation will be deleted, which leaves the proxy VM in Azure account itself.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_azure_proxy#delete_cloud_resources_on_destroy AutostoppingAzureProxy#delete_cloud_resources_on_destroy}
  */
  readonly deleteCloudResourcesOnDestroy: boolean | cdktf.IResolvable;
  /**
  * Hostname for the proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_azure_proxy#host_name AutostoppingAzureProxy#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_azure_proxy#id AutostoppingAzureProxy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of SSH Key to be used for proxy VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_azure_proxy#keypair AutostoppingAzureProxy#keypair}
  */
  readonly keypair: string;
  /**
  * Type of instance to be used for proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_azure_proxy#machine_type AutostoppingAzureProxy#machine_type}
  */
  readonly machineType: string;
  /**
  * Name of the proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_azure_proxy#name AutostoppingAzureProxy#name}
  */
  readonly name: string;
  /**
  * Region in which cloud resources are hosted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_azure_proxy#region AutostoppingAzureProxy#region}
  */
  readonly region: string;
  /**
  * Resource group in which cloud resources are hosted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_azure_proxy#resource_group AutostoppingAzureProxy#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * Security Group to define the security rules that determine the inbound and outbound traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_azure_proxy#security_groups AutostoppingAzureProxy#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Subnet in which cloud resources are hosted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_azure_proxy#subnet_id AutostoppingAzureProxy#subnet_id}
  */
  readonly subnetId: string;
  /**
  * VPC in which cloud resources are hosted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_azure_proxy#vpc AutostoppingAzureProxy#vpc}
  */
  readonly vpc: string;
  /**
  * certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_azure_proxy#certificates AutostoppingAzureProxy#certificates}
  */
  readonly certificates?: AutostoppingAzureProxyCertificates;
}
export interface AutostoppingAzureProxyCertificates {
  /**
  * ID of certificate secret uploaded to vault
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_azure_proxy#cert_secret_id AutostoppingAzureProxy#cert_secret_id}
  */
  readonly certSecretId: string;
  /**
  * ID of certificate key uploaded to vault
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_azure_proxy#key_secret_id AutostoppingAzureProxy#key_secret_id}
  */
  readonly keySecretId: string;
}

export function autostoppingAzureProxyCertificatesToTerraform(struct?: AutostoppingAzureProxyCertificatesOutputReference | AutostoppingAzureProxyCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_secret_id: cdktf.stringToTerraform(struct!.certSecretId),
    key_secret_id: cdktf.stringToTerraform(struct!.keySecretId),
  }
}


export function autostoppingAzureProxyCertificatesToHclTerraform(struct?: AutostoppingAzureProxyCertificatesOutputReference | AutostoppingAzureProxyCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.certSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.keySecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutostoppingAzureProxyCertificatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutostoppingAzureProxyCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certSecretId = this._certSecretId;
    }
    if (this._keySecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySecretId = this._keySecretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutostoppingAzureProxyCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certSecretId = undefined;
      this._keySecretId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certSecretId = value.certSecretId;
      this._keySecretId = value.keySecretId;
    }
  }

  // cert_secret_id - computed: false, optional: false, required: true
  private _certSecretId?: string; 
  public get certSecretId() {
    return this.getStringAttribute('cert_secret_id');
  }
  public set certSecretId(value: string) {
    this._certSecretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certSecretIdInput() {
    return this._certSecretId;
  }

  // key_secret_id - computed: false, optional: false, required: true
  private _keySecretId?: string; 
  public get keySecretId() {
    return this.getStringAttribute('key_secret_id');
  }
  public set keySecretId(value: string) {
    this._keySecretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keySecretIdInput() {
    return this._keySecretId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_azure_proxy harness_autostopping_azure_proxy}
*/
export class AutostoppingAzureProxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_autostopping_azure_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutostoppingAzureProxy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutostoppingAzureProxy to import
  * @param importFromId The id of the existing AutostoppingAzureProxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_azure_proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutostoppingAzureProxy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_autostopping_azure_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/autostopping_azure_proxy harness_autostopping_azure_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutostoppingAzureProxyConfig
  */
  public constructor(scope: Construct, id: string, config: AutostoppingAzureProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_autostopping_azure_proxy',
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
    this._allocateStaticIp = config.allocateStaticIp;
    this._apiKey = config.apiKey;
    this._certificateId = config.certificateId;
    this._cloudConnectorId = config.cloudConnectorId;
    this._deleteCloudResourcesOnDestroy = config.deleteCloudResourcesOnDestroy;
    this._hostName = config.hostName;
    this._id = config.id;
    this._keypair = config.keypair;
    this._machineType = config.machineType;
    this._name = config.name;
    this._region = config.region;
    this._resourceGroup = config.resourceGroup;
    this._securityGroups = config.securityGroups;
    this._subnetId = config.subnetId;
    this._vpc = config.vpc;
    this._certificates.internalValue = config.certificates;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocate_static_ip - computed: false, optional: true, required: false
  private _allocateStaticIp?: boolean | cdktf.IResolvable; 
  public get allocateStaticIp() {
    return this.getBooleanAttribute('allocate_static_ip');
  }
  public set allocateStaticIp(value: boolean | cdktf.IResolvable) {
    this._allocateStaticIp = value;
  }
  public resetAllocateStaticIp() {
    this._allocateStaticIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocateStaticIpInput() {
    return this._allocateStaticIp;
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
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

  // keypair - computed: false, optional: false, required: true
  private _keypair?: string; 
  public get keypair() {
    return this.getStringAttribute('keypair');
  }
  public set keypair(value: string) {
    this._keypair = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairInput() {
    return this._keypair;
  }

  // machine_type - computed: false, optional: false, required: true
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
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

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
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

  // certificates - computed: false, optional: true, required: false
  private _certificates = new AutostoppingAzureProxyCertificatesOutputReference(this, "certificates");
  public get certificates() {
    return this._certificates;
  }
  public putCertificates(value: AutostoppingAzureProxyCertificates) {
    this._certificates.internalValue = value;
  }
  public resetCertificates() {
    this._certificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocate_static_ip: cdktf.booleanToTerraform(this._allocateStaticIp),
      api_key: cdktf.stringToTerraform(this._apiKey),
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      cloud_connector_id: cdktf.stringToTerraform(this._cloudConnectorId),
      delete_cloud_resources_on_destroy: cdktf.booleanToTerraform(this._deleteCloudResourcesOnDestroy),
      host_name: cdktf.stringToTerraform(this._hostName),
      id: cdktf.stringToTerraform(this._id),
      keypair: cdktf.stringToTerraform(this._keypair),
      machine_type: cdktf.stringToTerraform(this._machineType),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      resource_group: cdktf.stringToTerraform(this._resourceGroup),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vpc: cdktf.stringToTerraform(this._vpc),
      certificates: autostoppingAzureProxyCertificatesToTerraform(this._certificates.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocate_static_ip: {
        value: cdktf.booleanToHclTerraform(this._allocateStaticIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
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
      keypair: {
        value: cdktf.stringToHclTerraform(this._keypair),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine_type: {
        value: cdktf.stringToHclTerraform(this._machineType),
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
      security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      certificates: {
        value: autostoppingAzureProxyCertificatesToHclTerraform(this._certificates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutostoppingAzureProxyCertificatesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
