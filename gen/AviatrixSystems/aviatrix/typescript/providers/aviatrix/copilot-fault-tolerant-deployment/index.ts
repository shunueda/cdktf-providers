// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/copilot_fault_tolerant_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CopilotFaultTolerantDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Aviatrix access account name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/copilot_fault_tolerant_deployment#account_name CopilotFaultTolerantDeployment#account_name}
  */
  readonly accountName: string;
  /**
  * Cloud type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/copilot_fault_tolerant_deployment#cloud_type CopilotFaultTolerantDeployment#cloud_type}
  */
  readonly cloudType: number;
  /**
  * Controller service account password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/copilot_fault_tolerant_deployment#controller_service_account_password CopilotFaultTolerantDeployment#controller_service_account_password}
  */
  readonly controllerServiceAccountPassword: string;
  /**
  * Controller service account username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/copilot_fault_tolerant_deployment#controller_service_account_username CopilotFaultTolerantDeployment#controller_service_account_username}
  */
  readonly controllerServiceAccountUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/copilot_fault_tolerant_deployment#id CopilotFaultTolerantDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/copilot_fault_tolerant_deployment#main_copilot_instance_size CopilotFaultTolerantDeployment#main_copilot_instance_size}
  */
  readonly mainCopilotInstanceSize?: string;
  /**
  * Subnet CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/copilot_fault_tolerant_deployment#main_copilot_subnet CopilotFaultTolerantDeployment#main_copilot_subnet}
  */
  readonly mainCopilotSubnet: string;
  /**
  * VPC ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/copilot_fault_tolerant_deployment#main_copilot_vpc_id CopilotFaultTolerantDeployment#main_copilot_vpc_id}
  */
  readonly mainCopilotVpcId: string;
  /**
  * Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/copilot_fault_tolerant_deployment#region CopilotFaultTolerantDeployment#region}
  */
  readonly region: string;
  /**
  * cluster_data_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/copilot_fault_tolerant_deployment#cluster_data_nodes CopilotFaultTolerantDeployment#cluster_data_nodes}
  */
  readonly clusterDataNodes: CopilotFaultTolerantDeploymentClusterDataNodes[] | cdktf.IResolvable;
}
export interface CopilotFaultTolerantDeploymentClusterDataNodes {
  /**
  * Data volume size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/copilot_fault_tolerant_deployment#data_volume_size CopilotFaultTolerantDeployment#data_volume_size}
  */
  readonly dataVolumeSize?: number;
  /**
  * Instance size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/copilot_fault_tolerant_deployment#instance_size CopilotFaultTolerantDeployment#instance_size}
  */
  readonly instanceSize?: string;
  /**
  * Subnet CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/copilot_fault_tolerant_deployment#subnet CopilotFaultTolerantDeployment#subnet}
  */
  readonly subnet: string;
  /**
  * VPC ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/copilot_fault_tolerant_deployment#vpc_id CopilotFaultTolerantDeployment#vpc_id}
  */
  readonly vpcId: string;
}

export function copilotFaultTolerantDeploymentClusterDataNodesToTerraform(struct?: CopilotFaultTolerantDeploymentClusterDataNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_volume_size: cdktf.numberToTerraform(struct!.dataVolumeSize),
    instance_size: cdktf.stringToTerraform(struct!.instanceSize),
    subnet: cdktf.stringToTerraform(struct!.subnet),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function copilotFaultTolerantDeploymentClusterDataNodesToHclTerraform(struct?: CopilotFaultTolerantDeploymentClusterDataNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_volume_size: {
      value: cdktf.numberToHclTerraform(struct!.dataVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_size: {
      value: cdktf.stringToHclTerraform(struct!.instanceSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CopilotFaultTolerantDeploymentClusterDataNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CopilotFaultTolerantDeploymentClusterDataNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVolumeSize = this._dataVolumeSize;
    }
    if (this._instanceSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceSize = this._instanceSize;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CopilotFaultTolerantDeploymentClusterDataNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataVolumeSize = undefined;
      this._instanceSize = undefined;
      this._subnet = undefined;
      this._vpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataVolumeSize = value.dataVolumeSize;
      this._instanceSize = value.instanceSize;
      this._subnet = value.subnet;
      this._vpcId = value.vpcId;
    }
  }

  // data_volume_size - computed: false, optional: true, required: false
  private _dataVolumeSize?: number; 
  public get dataVolumeSize() {
    return this.getNumberAttribute('data_volume_size');
  }
  public set dataVolumeSize(value: number) {
    this._dataVolumeSize = value;
  }
  public resetDataVolumeSize() {
    this._dataVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumeSizeInput() {
    return this._dataVolumeSize;
  }

  // instance_size - computed: false, optional: true, required: false
  private _instanceSize?: string; 
  public get instanceSize() {
    return this.getStringAttribute('instance_size');
  }
  public set instanceSize(value: string) {
    this._instanceSize = value;
  }
  public resetInstanceSize() {
    this._instanceSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSizeInput() {
    return this._instanceSize;
  }

  // subnet - computed: false, optional: false, required: true
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}

export class CopilotFaultTolerantDeploymentClusterDataNodesList extends cdktf.ComplexList {
  public internalValue? : CopilotFaultTolerantDeploymentClusterDataNodes[] | cdktf.IResolvable

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
  public get(index: number): CopilotFaultTolerantDeploymentClusterDataNodesOutputReference {
    return new CopilotFaultTolerantDeploymentClusterDataNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/copilot_fault_tolerant_deployment aviatrix_copilot_fault_tolerant_deployment}
*/
export class CopilotFaultTolerantDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_copilot_fault_tolerant_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CopilotFaultTolerantDeployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CopilotFaultTolerantDeployment to import
  * @param importFromId The id of the existing CopilotFaultTolerantDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/copilot_fault_tolerant_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CopilotFaultTolerantDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_copilot_fault_tolerant_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/copilot_fault_tolerant_deployment aviatrix_copilot_fault_tolerant_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CopilotFaultTolerantDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: CopilotFaultTolerantDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_copilot_fault_tolerant_deployment',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountName = config.accountName;
    this._cloudType = config.cloudType;
    this._controllerServiceAccountPassword = config.controllerServiceAccountPassword;
    this._controllerServiceAccountUsername = config.controllerServiceAccountUsername;
    this._id = config.id;
    this._mainCopilotInstanceSize = config.mainCopilotInstanceSize;
    this._mainCopilotSubnet = config.mainCopilotSubnet;
    this._mainCopilotVpcId = config.mainCopilotVpcId;
    this._region = config.region;
    this._clusterDataNodes.internalValue = config.clusterDataNodes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // cloud_type - computed: false, optional: false, required: true
  private _cloudType?: number; 
  public get cloudType() {
    return this.getNumberAttribute('cloud_type');
  }
  public set cloudType(value: number) {
    this._cloudType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeInput() {
    return this._cloudType;
  }

  // controller_service_account_password - computed: false, optional: false, required: true
  private _controllerServiceAccountPassword?: string; 
  public get controllerServiceAccountPassword() {
    return this.getStringAttribute('controller_service_account_password');
  }
  public set controllerServiceAccountPassword(value: string) {
    this._controllerServiceAccountPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerServiceAccountPasswordInput() {
    return this._controllerServiceAccountPassword;
  }

  // controller_service_account_username - computed: false, optional: false, required: true
  private _controllerServiceAccountUsername?: string; 
  public get controllerServiceAccountUsername() {
    return this.getStringAttribute('controller_service_account_username');
  }
  public set controllerServiceAccountUsername(value: string) {
    this._controllerServiceAccountUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerServiceAccountUsernameInput() {
    return this._controllerServiceAccountUsername;
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

  // main_copilot_instance_size - computed: false, optional: true, required: false
  private _mainCopilotInstanceSize?: string; 
  public get mainCopilotInstanceSize() {
    return this.getStringAttribute('main_copilot_instance_size');
  }
  public set mainCopilotInstanceSize(value: string) {
    this._mainCopilotInstanceSize = value;
  }
  public resetMainCopilotInstanceSize() {
    this._mainCopilotInstanceSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainCopilotInstanceSizeInput() {
    return this._mainCopilotInstanceSize;
  }

  // main_copilot_private_ip - computed: true, optional: false, required: false
  public get mainCopilotPrivateIp() {
    return this.getStringAttribute('main_copilot_private_ip');
  }

  // main_copilot_public_ip - computed: true, optional: false, required: false
  public get mainCopilotPublicIp() {
    return this.getStringAttribute('main_copilot_public_ip');
  }

  // main_copilot_subnet - computed: false, optional: false, required: true
  private _mainCopilotSubnet?: string; 
  public get mainCopilotSubnet() {
    return this.getStringAttribute('main_copilot_subnet');
  }
  public set mainCopilotSubnet(value: string) {
    this._mainCopilotSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mainCopilotSubnetInput() {
    return this._mainCopilotSubnet;
  }

  // main_copilot_vpc_id - computed: false, optional: false, required: true
  private _mainCopilotVpcId?: string; 
  public get mainCopilotVpcId() {
    return this.getStringAttribute('main_copilot_vpc_id');
  }
  public set mainCopilotVpcId(value: string) {
    this._mainCopilotVpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mainCopilotVpcIdInput() {
    return this._mainCopilotVpcId;
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

  // cluster_data_nodes - computed: false, optional: false, required: true
  private _clusterDataNodes = new CopilotFaultTolerantDeploymentClusterDataNodesList(this, "cluster_data_nodes", false);
  public get clusterDataNodes() {
    return this._clusterDataNodes;
  }
  public putClusterDataNodes(value: CopilotFaultTolerantDeploymentClusterDataNodes[] | cdktf.IResolvable) {
    this._clusterDataNodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDataNodesInput() {
    return this._clusterDataNodes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: cdktf.stringToTerraform(this._accountName),
      cloud_type: cdktf.numberToTerraform(this._cloudType),
      controller_service_account_password: cdktf.stringToTerraform(this._controllerServiceAccountPassword),
      controller_service_account_username: cdktf.stringToTerraform(this._controllerServiceAccountUsername),
      id: cdktf.stringToTerraform(this._id),
      main_copilot_instance_size: cdktf.stringToTerraform(this._mainCopilotInstanceSize),
      main_copilot_subnet: cdktf.stringToTerraform(this._mainCopilotSubnet),
      main_copilot_vpc_id: cdktf.stringToTerraform(this._mainCopilotVpcId),
      region: cdktf.stringToTerraform(this._region),
      cluster_data_nodes: cdktf.listMapper(copilotFaultTolerantDeploymentClusterDataNodesToTerraform, true)(this._clusterDataNodes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_type: {
        value: cdktf.numberToHclTerraform(this._cloudType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      controller_service_account_password: {
        value: cdktf.stringToHclTerraform(this._controllerServiceAccountPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controller_service_account_username: {
        value: cdktf.stringToHclTerraform(this._controllerServiceAccountUsername),
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
      main_copilot_instance_size: {
        value: cdktf.stringToHclTerraform(this._mainCopilotInstanceSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      main_copilot_subnet: {
        value: cdktf.stringToHclTerraform(this._mainCopilotSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      main_copilot_vpc_id: {
        value: cdktf.stringToHclTerraform(this._mainCopilotVpcId),
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
      cluster_data_nodes: {
        value: cdktf.listMapperHcl(copilotFaultTolerantDeploymentClusterDataNodesToHclTerraform, true)(this._clusterDataNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CopilotFaultTolerantDeploymentClusterDataNodesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
