// https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/service_vpc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceVpcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/service_vpc#attachment_type ServiceVpc#attachment_type}
  */
  readonly attachmentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/service_vpc#availability_zones ServiceVpc#availability_zones}
  */
  readonly availabilityZones: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/service_vpc#azure_resource_group ServiceVpc#azure_resource_group}
  */
  readonly azureResourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/service_vpc#cidr ServiceVpc#cidr}
  */
  readonly cidr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/service_vpc#core_network_id ServiceVpc#core_network_id}
  */
  readonly coreNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/service_vpc#csp_account_name ServiceVpc#csp_account_name}
  */
  readonly cspAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/service_vpc#id ServiceVpc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/service_vpc#management_cidr ServiceVpc#management_cidr}
  */
  readonly managementCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/service_vpc#name ServiceVpc#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/service_vpc#network_function_group ServiceVpc#network_function_group}
  */
  readonly networkFunctionGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/service_vpc#region ServiceVpc#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/service_vpc#transit_gateway_id ServiceVpc#transit_gateway_id}
  */
  readonly transitGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/service_vpc#use_nat_gateway ServiceVpc#use_nat_gateway}
  */
  readonly useNatGateway?: boolean | cdktf.IResolvable;
  /**
  * azure_vwan_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/service_vpc#azure_vwan_details ServiceVpc#azure_vwan_details}
  */
  readonly azureVwanDetails?: ServiceVpcAzureVwanDetails[] | cdktf.IResolvable;
}
export interface ServiceVpcAzureVwanDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/service_vpc#propagate_cidrs ServiceVpc#propagate_cidrs}
  */
  readonly propagateCidrs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/service_vpc#spokevpc_cidrs ServiceVpc#spokevpc_cidrs}
  */
  readonly spokevpcCidrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/service_vpc#vhub_association_route_table_id ServiceVpc#vhub_association_route_table_id}
  */
  readonly vhubAssociationRouteTableId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/service_vpc#vhub_name ServiceVpc#vhub_name}
  */
  readonly vhubName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/service_vpc#vhub_propagation_route_table_ids ServiceVpc#vhub_propagation_route_table_ids}
  */
  readonly vhubPropagationRouteTableIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/service_vpc#vhub_resource_group ServiceVpc#vhub_resource_group}
  */
  readonly vhubResourceGroup?: string;
}

export function serviceVpcAzureVwanDetailsToTerraform(struct?: ServiceVpcAzureVwanDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    propagate_cidrs: cdktf.booleanToTerraform(struct!.propagateCidrs),
    spokevpc_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.spokevpcCidrs),
    vhub_association_route_table_id: cdktf.stringToTerraform(struct!.vhubAssociationRouteTableId),
    vhub_name: cdktf.stringToTerraform(struct!.vhubName),
    vhub_propagation_route_table_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vhubPropagationRouteTableIds),
    vhub_resource_group: cdktf.stringToTerraform(struct!.vhubResourceGroup),
  }
}


export function serviceVpcAzureVwanDetailsToHclTerraform(struct?: ServiceVpcAzureVwanDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    propagate_cidrs: {
      value: cdktf.booleanToHclTerraform(struct!.propagateCidrs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    spokevpc_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.spokevpcCidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vhub_association_route_table_id: {
      value: cdktf.stringToHclTerraform(struct!.vhubAssociationRouteTableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vhub_name: {
      value: cdktf.stringToHclTerraform(struct!.vhubName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vhub_propagation_route_table_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vhubPropagationRouteTableIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vhub_resource_group: {
      value: cdktf.stringToHclTerraform(struct!.vhubResourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceVpcAzureVwanDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceVpcAzureVwanDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._propagateCidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagateCidrs = this._propagateCidrs;
    }
    if (this._spokevpcCidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.spokevpcCidrs = this._spokevpcCidrs;
    }
    if (this._vhubAssociationRouteTableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vhubAssociationRouteTableId = this._vhubAssociationRouteTableId;
    }
    if (this._vhubName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vhubName = this._vhubName;
    }
    if (this._vhubPropagationRouteTableIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vhubPropagationRouteTableIds = this._vhubPropagationRouteTableIds;
    }
    if (this._vhubResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.vhubResourceGroup = this._vhubResourceGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceVpcAzureVwanDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._propagateCidrs = undefined;
      this._spokevpcCidrs = undefined;
      this._vhubAssociationRouteTableId = undefined;
      this._vhubName = undefined;
      this._vhubPropagationRouteTableIds = undefined;
      this._vhubResourceGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._propagateCidrs = value.propagateCidrs;
      this._spokevpcCidrs = value.spokevpcCidrs;
      this._vhubAssociationRouteTableId = value.vhubAssociationRouteTableId;
      this._vhubName = value.vhubName;
      this._vhubPropagationRouteTableIds = value.vhubPropagationRouteTableIds;
      this._vhubResourceGroup = value.vhubResourceGroup;
    }
  }

  // propagate_cidrs - computed: false, optional: true, required: false
  private _propagateCidrs?: boolean | cdktf.IResolvable; 
  public get propagateCidrs() {
    return this.getBooleanAttribute('propagate_cidrs');
  }
  public set propagateCidrs(value: boolean | cdktf.IResolvable) {
    this._propagateCidrs = value;
  }
  public resetPropagateCidrs() {
    this._propagateCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateCidrsInput() {
    return this._propagateCidrs;
  }

  // spokevpc_cidrs - computed: false, optional: true, required: false
  private _spokevpcCidrs?: string[]; 
  public get spokevpcCidrs() {
    return this.getListAttribute('spokevpc_cidrs');
  }
  public set spokevpcCidrs(value: string[]) {
    this._spokevpcCidrs = value;
  }
  public resetSpokevpcCidrs() {
    this._spokevpcCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spokevpcCidrsInput() {
    return this._spokevpcCidrs;
  }

  // vhub_association_route_table_id - computed: false, optional: true, required: false
  private _vhubAssociationRouteTableId?: string; 
  public get vhubAssociationRouteTableId() {
    return this.getStringAttribute('vhub_association_route_table_id');
  }
  public set vhubAssociationRouteTableId(value: string) {
    this._vhubAssociationRouteTableId = value;
  }
  public resetVhubAssociationRouteTableId() {
    this._vhubAssociationRouteTableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vhubAssociationRouteTableIdInput() {
    return this._vhubAssociationRouteTableId;
  }

  // vhub_name - computed: false, optional: true, required: false
  private _vhubName?: string; 
  public get vhubName() {
    return this.getStringAttribute('vhub_name');
  }
  public set vhubName(value: string) {
    this._vhubName = value;
  }
  public resetVhubName() {
    this._vhubName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vhubNameInput() {
    return this._vhubName;
  }

  // vhub_propagation_route_table_ids - computed: false, optional: true, required: false
  private _vhubPropagationRouteTableIds?: string[]; 
  public get vhubPropagationRouteTableIds() {
    return this.getListAttribute('vhub_propagation_route_table_ids');
  }
  public set vhubPropagationRouteTableIds(value: string[]) {
    this._vhubPropagationRouteTableIds = value;
  }
  public resetVhubPropagationRouteTableIds() {
    this._vhubPropagationRouteTableIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vhubPropagationRouteTableIdsInput() {
    return this._vhubPropagationRouteTableIds;
  }

  // vhub_resource_group - computed: false, optional: true, required: false
  private _vhubResourceGroup?: string; 
  public get vhubResourceGroup() {
    return this.getStringAttribute('vhub_resource_group');
  }
  public set vhubResourceGroup(value: string) {
    this._vhubResourceGroup = value;
  }
  public resetVhubResourceGroup() {
    this._vhubResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vhubResourceGroupInput() {
    return this._vhubResourceGroup;
  }
}

export class ServiceVpcAzureVwanDetailsList extends cdktf.ComplexList {
  public internalValue? : ServiceVpcAzureVwanDetails[] | cdktf.IResolvable

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
  public get(index: number): ServiceVpcAzureVwanDetailsOutputReference {
    return new ServiceVpcAzureVwanDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/service_vpc valtix_service_vpc}
*/
export class ServiceVpc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "valtix_service_vpc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceVpc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceVpc to import
  * @param importFromId The id of the existing ServiceVpc that should be imported. Refer to the {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/service_vpc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceVpc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "valtix_service_vpc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/service_vpc valtix_service_vpc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceVpcConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceVpcConfig) {
    super(scope, id, {
      terraformResourceType: 'valtix_service_vpc',
      terraformGeneratorMetadata: {
        providerName: 'valtix',
        providerVersion: '25.9.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attachmentType = config.attachmentType;
    this._availabilityZones = config.availabilityZones;
    this._azureResourceGroup = config.azureResourceGroup;
    this._cidr = config.cidr;
    this._coreNetworkId = config.coreNetworkId;
    this._cspAccountName = config.cspAccountName;
    this._id = config.id;
    this._managementCidr = config.managementCidr;
    this._name = config.name;
    this._networkFunctionGroup = config.networkFunctionGroup;
    this._region = config.region;
    this._transitGatewayId = config.transitGatewayId;
    this._useNatGateway = config.useNatGateway;
    this._azureVwanDetails.internalValue = config.azureVwanDetails;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachment_type - computed: false, optional: true, required: false
  private _attachmentType?: string; 
  public get attachmentType() {
    return this.getStringAttribute('attachment_type');
  }
  public set attachmentType(value: string) {
    this._attachmentType = value;
  }
  public resetAttachmentType() {
    this._attachmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentTypeInput() {
    return this._attachmentType;
  }

  // availability_zones - computed: false, optional: false, required: true
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return cdktf.Fn.tolist(this.getListAttribute('availability_zones'));
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // azure_resource_group - computed: false, optional: true, required: false
  private _azureResourceGroup?: string; 
  public get azureResourceGroup() {
    return this.getStringAttribute('azure_resource_group');
  }
  public set azureResourceGroup(value: string) {
    this._azureResourceGroup = value;
  }
  public resetAzureResourceGroup() {
    this._azureResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureResourceGroupInput() {
    return this._azureResourceGroup;
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // core_network_id - computed: false, optional: true, required: false
  private _coreNetworkId?: string; 
  public get coreNetworkId() {
    return this.getStringAttribute('core_network_id');
  }
  public set coreNetworkId(value: string) {
    this._coreNetworkId = value;
  }
  public resetCoreNetworkId() {
    this._coreNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreNetworkIdInput() {
    return this._coreNetworkId;
  }

  // csp_account_name - computed: false, optional: false, required: true
  private _cspAccountName?: string; 
  public get cspAccountName() {
    return this.getStringAttribute('csp_account_name');
  }
  public set cspAccountName(value: string) {
    this._cspAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cspAccountNameInput() {
    return this._cspAccountName;
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

  // management_cidr - computed: false, optional: true, required: false
  private _managementCidr?: string; 
  public get managementCidr() {
    return this.getStringAttribute('management_cidr');
  }
  public set managementCidr(value: string) {
    this._managementCidr = value;
  }
  public resetManagementCidr() {
    this._managementCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementCidrInput() {
    return this._managementCidr;
  }

  // management_vpc_id - computed: true, optional: false, required: false
  public get managementVpcId() {
    return this.getStringAttribute('management_vpc_id');
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

  // nat_gateway_public_ips - computed: true, optional: false, required: false
  public get natGatewayPublicIps() {
    return cdktf.Fn.tolist(this.getListAttribute('nat_gateway_public_ips'));
  }

  // network_function_group - computed: false, optional: true, required: false
  private _networkFunctionGroup?: string; 
  public get networkFunctionGroup() {
    return this.getStringAttribute('network_function_group');
  }
  public set networkFunctionGroup(value: string) {
    this._networkFunctionGroup = value;
  }
  public resetNetworkFunctionGroup() {
    this._networkFunctionGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFunctionGroupInput() {
    return this._networkFunctionGroup;
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

  // service_vpc_id - computed: true, optional: false, required: false
  public get serviceVpcId() {
    return this.getNumberAttribute('service_vpc_id');
  }

  // transit_gateway_id - computed: false, optional: true, required: false
  private _transitGatewayId?: string; 
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }
  public set transitGatewayId(value: string) {
    this._transitGatewayId = value;
  }
  public resetTransitGatewayId() {
    this._transitGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayIdInput() {
    return this._transitGatewayId;
  }

  // use_nat_gateway - computed: false, optional: true, required: false
  private _useNatGateway?: boolean | cdktf.IResolvable; 
  public get useNatGateway() {
    return this.getBooleanAttribute('use_nat_gateway');
  }
  public set useNatGateway(value: boolean | cdktf.IResolvable) {
    this._useNatGateway = value;
  }
  public resetUseNatGateway() {
    this._useNatGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useNatGatewayInput() {
    return this._useNatGateway;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // azure_vwan_details - computed: false, optional: true, required: false
  private _azureVwanDetails = new ServiceVpcAzureVwanDetailsList(this, "azure_vwan_details", false);
  public get azureVwanDetails() {
    return this._azureVwanDetails;
  }
  public putAzureVwanDetails(value: ServiceVpcAzureVwanDetails[] | cdktf.IResolvable) {
    this._azureVwanDetails.internalValue = value;
  }
  public resetAzureVwanDetails() {
    this._azureVwanDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureVwanDetailsInput() {
    return this._azureVwanDetails.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attachment_type: cdktf.stringToTerraform(this._attachmentType),
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZones),
      azure_resource_group: cdktf.stringToTerraform(this._azureResourceGroup),
      cidr: cdktf.stringToTerraform(this._cidr),
      core_network_id: cdktf.stringToTerraform(this._coreNetworkId),
      csp_account_name: cdktf.stringToTerraform(this._cspAccountName),
      id: cdktf.stringToTerraform(this._id),
      management_cidr: cdktf.stringToTerraform(this._managementCidr),
      name: cdktf.stringToTerraform(this._name),
      network_function_group: cdktf.stringToTerraform(this._networkFunctionGroup),
      region: cdktf.stringToTerraform(this._region),
      transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
      use_nat_gateway: cdktf.booleanToTerraform(this._useNatGateway),
      azure_vwan_details: cdktf.listMapper(serviceVpcAzureVwanDetailsToTerraform, true)(this._azureVwanDetails.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attachment_type: {
        value: cdktf.stringToHclTerraform(this._attachmentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availabilityZones),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      azure_resource_group: {
        value: cdktf.stringToHclTerraform(this._azureResourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cidr: {
        value: cdktf.stringToHclTerraform(this._cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      core_network_id: {
        value: cdktf.stringToHclTerraform(this._coreNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csp_account_name: {
        value: cdktf.stringToHclTerraform(this._cspAccountName),
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
      management_cidr: {
        value: cdktf.stringToHclTerraform(this._managementCidr),
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
      network_function_group: {
        value: cdktf.stringToHclTerraform(this._networkFunctionGroup),
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
      transit_gateway_id: {
        value: cdktf.stringToHclTerraform(this._transitGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_nat_gateway: {
        value: cdktf.booleanToHclTerraform(this._useNatGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      azure_vwan_details: {
        value: cdktf.listMapperHcl(serviceVpcAzureVwanDetailsToHclTerraform, true)(this._azureVwanDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceVpcAzureVwanDetailsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
