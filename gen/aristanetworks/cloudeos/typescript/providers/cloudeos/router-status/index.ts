// https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterStatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Availability set if for Azure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#availability_set_id RouterStatus#availability_set_id}
  */
  readonly availabilitySetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#availability_zone RouterStatus#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * aws / azure / gcp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#cloud_provider RouterStatus#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#cnps RouterStatus#cnps}
  */
  readonly cnps?: string;
  /**
  * Container to which cvp should add this device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#cv_container RouterStatus#cv_container}
  */
  readonly cvContainer?: string;
  /**
  * Deployment mode for the resources: provision or empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#deploy_mode RouterStatus#deploy_mode}
  */
  readonly deployMode?: string;
  /**
  * Deployment Status of the CloudEOS Router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#deployment_status RouterStatus#deployment_status}
  */
  readonly deploymentStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#ha_name RouterStatus#ha_name}
  */
  readonly haName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#id RouterStatus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * VM instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#instance_id RouterStatus#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#instance_type RouterStatus#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#internal_rt_table_ids RouterStatus#internal_rt_table_ids}
  */
  readonly internalRtTableIds?: string[];
  /**
  * Interface id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#intf_id RouterStatus#intf_id}
  */
  readonly intfId: string[];
  /**
  * Interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#intf_name RouterStatus#intf_name}
  */
  readonly intfName: string[];
  /**
  * Private IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#intf_private_ip RouterStatus#intf_private_ip}
  */
  readonly intfPrivateIp: string[];
  /**
  * Subnet id attached to intf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#intf_subnet_id RouterStatus#intf_subnet_id}
  */
  readonly intfSubnetId: string[];
  /**
  * Interface type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#intf_type RouterStatus#intf_type}
  */
  readonly intfType: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#is_rr RouterStatus#is_rr}
  */
  readonly isRr?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#primary_network_interface_id RouterStatus#primary_network_interface_id}
  */
  readonly primaryNetworkInterfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#private_rt_table_ids RouterStatus#private_rt_table_ids}
  */
  readonly privateRtTableIds?: string[];
  /**
  * Public ip address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#public_ip RouterStatus#public_ip}
  */
  readonly publicIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#public_rt_table_ids RouterStatus#public_rt_table_ids}
  */
  readonly publicRtTableIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#region RouterStatus#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#rg_location RouterStatus#rg_location}
  */
  readonly rgLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#rg_name RouterStatus#rg_name}
  */
  readonly rgName?: string;
  /**
  * BGP ASN computed on the CloudEOS Router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#router_bgp_asn RouterStatus#router_bgp_asn}
  */
  readonly routerBgpAsn?: string;
  /**
  * List of all route table and association resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#routing_resource_info RouterStatus#routing_resource_info}
  */
  readonly routingResourceInfo?: string[];
  /**
  * A mapping of tags to assign to the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#tags RouterStatus#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#tf_id RouterStatus#tf_id}
  */
  readonly tfId: string;
  /**
  * Vpc id of cloudeos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#vpc_id RouterStatus#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#timeouts RouterStatus#timeouts}
  */
  readonly timeouts?: RouterStatusTimeouts;
}
export interface RouterStatusTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#delete RouterStatus#delete}
  */
  readonly delete?: string;
}

export function routerStatusTimeoutsToTerraform(struct?: RouterStatusTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function routerStatusTimeoutsToHclTerraform(struct?: RouterStatusTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterStatusTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RouterStatusTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterStatusTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delete = value.delete;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status cloudeos_router_status}
*/
export class RouterStatus extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudeos_router_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterStatus to import
  * @param importFromId The id of the existing RouterStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudeos_router_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aristanetworks/cloudeos/1.2.2/docs/resources/router_status cloudeos_router_status} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterStatusConfig
  */
  public constructor(scope: Construct, id: string, config: RouterStatusConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudeos_router_status',
      terraformGeneratorMetadata: {
        providerName: 'cloudeos',
        providerVersion: '1.2.2',
        providerVersionConstraint: '1.2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilitySetId = config.availabilitySetId;
    this._availabilityZone = config.availabilityZone;
    this._cloudProvider = config.cloudProvider;
    this._cnps = config.cnps;
    this._cvContainer = config.cvContainer;
    this._deployMode = config.deployMode;
    this._deploymentStatus = config.deploymentStatus;
    this._haName = config.haName;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._instanceType = config.instanceType;
    this._internalRtTableIds = config.internalRtTableIds;
    this._intfId = config.intfId;
    this._intfName = config.intfName;
    this._intfPrivateIp = config.intfPrivateIp;
    this._intfSubnetId = config.intfSubnetId;
    this._intfType = config.intfType;
    this._isRr = config.isRr;
    this._primaryNetworkInterfaceId = config.primaryNetworkInterfaceId;
    this._privateRtTableIds = config.privateRtTableIds;
    this._publicIp = config.publicIp;
    this._publicRtTableIds = config.publicRtTableIds;
    this._region = config.region;
    this._rgLocation = config.rgLocation;
    this._rgName = config.rgName;
    this._routerBgpAsn = config.routerBgpAsn;
    this._routingResourceInfo = config.routingResourceInfo;
    this._tags = config.tags;
    this._tfId = config.tfId;
    this._vpcId = config.vpcId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_set_id - computed: false, optional: true, required: false
  private _availabilitySetId?: string; 
  public get availabilitySetId() {
    return this.getStringAttribute('availability_set_id');
  }
  public set availabilitySetId(value: string) {
    this._availabilitySetId = value;
  }
  public resetAvailabilitySetId() {
    this._availabilitySetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilitySetIdInput() {
    return this._availabilitySetId;
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // cnps - computed: false, optional: true, required: false
  private _cnps?: string; 
  public get cnps() {
    return this.getStringAttribute('cnps');
  }
  public set cnps(value: string) {
    this._cnps = value;
  }
  public resetCnps() {
    this._cnps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnpsInput() {
    return this._cnps;
  }

  // cv_container - computed: false, optional: true, required: false
  private _cvContainer?: string; 
  public get cvContainer() {
    return this.getStringAttribute('cv_container');
  }
  public set cvContainer(value: string) {
    this._cvContainer = value;
  }
  public resetCvContainer() {
    this._cvContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvContainerInput() {
    return this._cvContainer;
  }

  // deploy_mode - computed: false, optional: true, required: false
  private _deployMode?: string; 
  public get deployMode() {
    return this.getStringAttribute('deploy_mode');
  }
  public set deployMode(value: string) {
    this._deployMode = value;
  }
  public resetDeployMode() {
    this._deployMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployModeInput() {
    return this._deployMode;
  }

  // deployment_status - computed: true, optional: true, required: false
  private _deploymentStatus?: string; 
  public get deploymentStatus() {
    return this.getStringAttribute('deployment_status');
  }
  public set deploymentStatus(value: string) {
    this._deploymentStatus = value;
  }
  public resetDeploymentStatus() {
    this._deploymentStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentStatusInput() {
    return this._deploymentStatus;
  }

  // ha_name - computed: false, optional: true, required: false
  private _haName?: string; 
  public get haName() {
    return this.getStringAttribute('ha_name');
  }
  public set haName(value: string) {
    this._haName = value;
  }
  public resetHaName() {
    this._haName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haNameInput() {
    return this._haName;
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

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // internal_rt_table_ids - computed: false, optional: true, required: false
  private _internalRtTableIds?: string[]; 
  public get internalRtTableIds() {
    return this.getListAttribute('internal_rt_table_ids');
  }
  public set internalRtTableIds(value: string[]) {
    this._internalRtTableIds = value;
  }
  public resetInternalRtTableIds() {
    this._internalRtTableIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalRtTableIdsInput() {
    return this._internalRtTableIds;
  }

  // intf_id - computed: false, optional: false, required: true
  private _intfId?: string[]; 
  public get intfId() {
    return this.getListAttribute('intf_id');
  }
  public set intfId(value: string[]) {
    this._intfId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intfIdInput() {
    return this._intfId;
  }

  // intf_name - computed: false, optional: false, required: true
  private _intfName?: string[]; 
  public get intfName() {
    return this.getListAttribute('intf_name');
  }
  public set intfName(value: string[]) {
    this._intfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intfNameInput() {
    return this._intfName;
  }

  // intf_private_ip - computed: false, optional: false, required: true
  private _intfPrivateIp?: string[]; 
  public get intfPrivateIp() {
    return this.getListAttribute('intf_private_ip');
  }
  public set intfPrivateIp(value: string[]) {
    this._intfPrivateIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intfPrivateIpInput() {
    return this._intfPrivateIp;
  }

  // intf_subnet_id - computed: false, optional: false, required: true
  private _intfSubnetId?: string[]; 
  public get intfSubnetId() {
    return this.getListAttribute('intf_subnet_id');
  }
  public set intfSubnetId(value: string[]) {
    this._intfSubnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intfSubnetIdInput() {
    return this._intfSubnetId;
  }

  // intf_type - computed: false, optional: false, required: true
  private _intfType?: string[]; 
  public get intfType() {
    return this.getListAttribute('intf_type');
  }
  public set intfType(value: string[]) {
    this._intfType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intfTypeInput() {
    return this._intfType;
  }

  // is_rr - computed: false, optional: true, required: false
  private _isRr?: boolean | cdktf.IResolvable; 
  public get isRr() {
    return this.getBooleanAttribute('is_rr');
  }
  public set isRr(value: boolean | cdktf.IResolvable) {
    this._isRr = value;
  }
  public resetIsRr() {
    this._isRr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRrInput() {
    return this._isRr;
  }

  // primary_network_interface_id - computed: false, optional: true, required: false
  private _primaryNetworkInterfaceId?: string; 
  public get primaryNetworkInterfaceId() {
    return this.getStringAttribute('primary_network_interface_id');
  }
  public set primaryNetworkInterfaceId(value: string) {
    this._primaryNetworkInterfaceId = value;
  }
  public resetPrimaryNetworkInterfaceId() {
    this._primaryNetworkInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryNetworkInterfaceIdInput() {
    return this._primaryNetworkInterfaceId;
  }

  // private_rt_table_ids - computed: false, optional: true, required: false
  private _privateRtTableIds?: string[]; 
  public get privateRtTableIds() {
    return this.getListAttribute('private_rt_table_ids');
  }
  public set privateRtTableIds(value: string[]) {
    this._privateRtTableIds = value;
  }
  public resetPrivateRtTableIds() {
    this._privateRtTableIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateRtTableIdsInput() {
    return this._privateRtTableIds;
  }

  // public_ip - computed: false, optional: true, required: false
  private _publicIp?: string; 
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string) {
    this._publicIp = value;
  }
  public resetPublicIp() {
    this._publicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
  }

  // public_rt_table_ids - computed: false, optional: true, required: false
  private _publicRtTableIds?: string[]; 
  public get publicRtTableIds() {
    return this.getListAttribute('public_rt_table_ids');
  }
  public set publicRtTableIds(value: string[]) {
    this._publicRtTableIds = value;
  }
  public resetPublicRtTableIds() {
    this._publicRtTableIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicRtTableIdsInput() {
    return this._publicRtTableIds;
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

  // rg_location - computed: false, optional: true, required: false
  private _rgLocation?: string; 
  public get rgLocation() {
    return this.getStringAttribute('rg_location');
  }
  public set rgLocation(value: string) {
    this._rgLocation = value;
  }
  public resetRgLocation() {
    this._rgLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rgLocationInput() {
    return this._rgLocation;
  }

  // rg_name - computed: false, optional: true, required: false
  private _rgName?: string; 
  public get rgName() {
    return this.getStringAttribute('rg_name');
  }
  public set rgName(value: string) {
    this._rgName = value;
  }
  public resetRgName() {
    this._rgName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rgNameInput() {
    return this._rgName;
  }

  // router_bgp_asn - computed: true, optional: true, required: false
  private _routerBgpAsn?: string; 
  public get routerBgpAsn() {
    return this.getStringAttribute('router_bgp_asn');
  }
  public set routerBgpAsn(value: string) {
    this._routerBgpAsn = value;
  }
  public resetRouterBgpAsn() {
    this._routerBgpAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerBgpAsnInput() {
    return this._routerBgpAsn;
  }

  // routing_resource_info - computed: false, optional: true, required: false
  private _routingResourceInfo?: string[]; 
  public get routingResourceInfo() {
    return this.getListAttribute('routing_resource_info');
  }
  public set routingResourceInfo(value: string[]) {
    this._routingResourceInfo = value;
  }
  public resetRoutingResourceInfo() {
    this._routingResourceInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingResourceInfoInput() {
    return this._routingResourceInfo;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tf_id - computed: false, optional: false, required: true
  private _tfId?: string; 
  public get tfId() {
    return this.getStringAttribute('tf_id');
  }
  public set tfId(value: string) {
    this._tfId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tfIdInput() {
    return this._tfId;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RouterStatusTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RouterStatusTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_set_id: cdktf.stringToTerraform(this._availabilitySetId),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      cnps: cdktf.stringToTerraform(this._cnps),
      cv_container: cdktf.stringToTerraform(this._cvContainer),
      deploy_mode: cdktf.stringToTerraform(this._deployMode),
      deployment_status: cdktf.stringToTerraform(this._deploymentStatus),
      ha_name: cdktf.stringToTerraform(this._haName),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      internal_rt_table_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internalRtTableIds),
      intf_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._intfId),
      intf_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._intfName),
      intf_private_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._intfPrivateIp),
      intf_subnet_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._intfSubnetId),
      intf_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._intfType),
      is_rr: cdktf.booleanToTerraform(this._isRr),
      primary_network_interface_id: cdktf.stringToTerraform(this._primaryNetworkInterfaceId),
      private_rt_table_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privateRtTableIds),
      public_ip: cdktf.stringToTerraform(this._publicIp),
      public_rt_table_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._publicRtTableIds),
      region: cdktf.stringToTerraform(this._region),
      rg_location: cdktf.stringToTerraform(this._rgLocation),
      rg_name: cdktf.stringToTerraform(this._rgName),
      router_bgp_asn: cdktf.stringToTerraform(this._routerBgpAsn),
      routing_resource_info: cdktf.listMapper(cdktf.stringToTerraform, false)(this._routingResourceInfo),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tf_id: cdktf.stringToTerraform(this._tfId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      timeouts: routerStatusTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_set_id: {
        value: cdktf.stringToHclTerraform(this._availabilitySetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cnps: {
        value: cdktf.stringToHclTerraform(this._cnps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cv_container: {
        value: cdktf.stringToHclTerraform(this._cvContainer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_mode: {
        value: cdktf.stringToHclTerraform(this._deployMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_status: {
        value: cdktf.stringToHclTerraform(this._deploymentStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_name: {
        value: cdktf.stringToHclTerraform(this._haName),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internal_rt_table_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internalRtTableIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      intf_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._intfId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      intf_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._intfName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      intf_private_ip: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._intfPrivateIp),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      intf_subnet_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._intfSubnetId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      intf_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._intfType),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      is_rr: {
        value: cdktf.booleanToHclTerraform(this._isRr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      primary_network_interface_id: {
        value: cdktf.stringToHclTerraform(this._primaryNetworkInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_rt_table_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._privateRtTableIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      public_ip: {
        value: cdktf.stringToHclTerraform(this._publicIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_rt_table_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._publicRtTableIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rg_location: {
        value: cdktf.stringToHclTerraform(this._rgLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rg_name: {
        value: cdktf.stringToHclTerraform(this._rgName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_bgp_asn: {
        value: cdktf.stringToHclTerraform(this._routerBgpAsn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_resource_info: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._routingResourceInfo),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tf_id: {
        value: cdktf.stringToHclTerraform(this._tfId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: routerStatusTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RouterStatusTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
