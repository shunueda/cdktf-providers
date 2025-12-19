// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_aws_multi_az_failover_vrid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudServicesCloudProviderAwsMultiAzFailoverVridConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alien FIP Destination CIDR Block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_aws_multi_az_failover_vrid#fip_dest CloudServicesCloudProviderAwsMultiAzFailoverVrid#fip_dest}
  */
  readonly fipDest?: string;
  /**
  * Data-Out Interface ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_aws_multi_az_failover_vrid#fip_interface_id CloudServicesCloudProviderAwsMultiAzFailoverVrid#fip_interface_id}
  */
  readonly fipInterfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_aws_multi_az_failover_vrid#id CloudServicesCloudProviderAwsMultiAzFailoverVrid#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the route table id of the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_aws_multi_az_failover_vrid#route_table_id CloudServicesCloudProviderAwsMultiAzFailoverVrid#route_table_id}
  */
  readonly routeTableId?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_aws_multi_az_failover_vrid#user_tag CloudServicesCloudProviderAwsMultiAzFailoverVrid#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_aws_multi_az_failover_vrid#uuid CloudServicesCloudProviderAwsMultiAzFailoverVrid#uuid}
  */
  readonly uuid?: string;
  /**
  * Alien VIP Destination CIDR Block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_aws_multi_az_failover_vrid#vip_dest CloudServicesCloudProviderAwsMultiAzFailoverVrid#vip_dest}
  */
  readonly vipDest?: string;
  /**
  * Data-In Interface ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_aws_multi_az_failover_vrid#vip_interface_id CloudServicesCloudProviderAwsMultiAzFailoverVrid#vip_interface_id}
  */
  readonly vipInterfaceId?: string;
  /**
  * Specify ha VRRP-A vrid Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_aws_multi_az_failover_vrid#vrid_number CloudServicesCloudProviderAwsMultiAzFailoverVrid#vrid_number}
  */
  readonly vridNumber: number;
  /**
  * vip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_aws_multi_az_failover_vrid#vip_list CloudServicesCloudProviderAwsMultiAzFailoverVrid#vip_list}
  */
  readonly vipList?: CloudServicesCloudProviderAwsMultiAzFailoverVridVipListStruct[] | cdktf.IResolvable;
}
export interface CloudServicesCloudProviderAwsMultiAzFailoverVridVipListStruct {
  /**
  * Elastic IP address of VIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_aws_multi_az_failover_vrid#elastic_ip CloudServicesCloudProviderAwsMultiAzFailoverVrid#elastic_ip}
  */
  readonly elasticIp?: string;
  /**
  * Private IP address of VIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_aws_multi_az_failover_vrid#private_ip CloudServicesCloudProviderAwsMultiAzFailoverVrid#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_aws_multi_az_failover_vrid#user_tag CloudServicesCloudProviderAwsMultiAzFailoverVrid#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_aws_multi_az_failover_vrid#uuid CloudServicesCloudProviderAwsMultiAzFailoverVrid#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify ha vip Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_aws_multi_az_failover_vrid#vip_number CloudServicesCloudProviderAwsMultiAzFailoverVrid#vip_number}
  */
  readonly vipNumber: number;
}

export function cloudServicesCloudProviderAwsMultiAzFailoverVridVipListStructToTerraform(struct?: CloudServicesCloudProviderAwsMultiAzFailoverVridVipListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    elastic_ip: cdktf.stringToTerraform(struct!.elasticIp),
    private_ip: cdktf.stringToTerraform(struct!.privateIp),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    vip_number: cdktf.numberToTerraform(struct!.vipNumber),
  }
}


export function cloudServicesCloudProviderAwsMultiAzFailoverVridVipListStructToHclTerraform(struct?: CloudServicesCloudProviderAwsMultiAzFailoverVridVipListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    elastic_ip: {
      value: cdktf.stringToHclTerraform(struct!.elasticIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_ip: {
      value: cdktf.stringToHclTerraform(struct!.privateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vip_number: {
      value: cdktf.numberToHclTerraform(struct!.vipNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudServicesCloudProviderAwsMultiAzFailoverVridVipListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudServicesCloudProviderAwsMultiAzFailoverVridVipListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elasticIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticIp = this._elasticIp;
    }
    if (this._privateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIp = this._privateIp;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._vipNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipNumber = this._vipNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudServicesCloudProviderAwsMultiAzFailoverVridVipListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._elasticIp = undefined;
      this._privateIp = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._vipNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._elasticIp = value.elasticIp;
      this._privateIp = value.privateIp;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._vipNumber = value.vipNumber;
    }
  }

  // elastic_ip - computed: false, optional: true, required: false
  private _elasticIp?: string; 
  public get elasticIp() {
    return this.getStringAttribute('elastic_ip');
  }
  public set elasticIp(value: string) {
    this._elasticIp = value;
  }
  public resetElasticIp() {
    this._elasticIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticIpInput() {
    return this._elasticIp;
  }

  // private_ip - computed: false, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vip_number - computed: false, optional: false, required: true
  private _vipNumber?: number; 
  public get vipNumber() {
    return this.getNumberAttribute('vip_number');
  }
  public set vipNumber(value: number) {
    this._vipNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vipNumberInput() {
    return this._vipNumber;
  }
}

export class CloudServicesCloudProviderAwsMultiAzFailoverVridVipListStructList extends cdktf.ComplexList {
  public internalValue? : CloudServicesCloudProviderAwsMultiAzFailoverVridVipListStruct[] | cdktf.IResolvable

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
  public get(index: number): CloudServicesCloudProviderAwsMultiAzFailoverVridVipListStructOutputReference {
    return new CloudServicesCloudProviderAwsMultiAzFailoverVridVipListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_aws_multi_az_failover_vrid thunder_cloud_services_cloud_provider_aws_multi_az_failover_vrid}
*/
export class CloudServicesCloudProviderAwsMultiAzFailoverVrid extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cloud_services_cloud_provider_aws_multi_az_failover_vrid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudServicesCloudProviderAwsMultiAzFailoverVrid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudServicesCloudProviderAwsMultiAzFailoverVrid to import
  * @param importFromId The id of the existing CloudServicesCloudProviderAwsMultiAzFailoverVrid that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_aws_multi_az_failover_vrid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudServicesCloudProviderAwsMultiAzFailoverVrid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cloud_services_cloud_provider_aws_multi_az_failover_vrid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cloud_services_cloud_provider_aws_multi_az_failover_vrid thunder_cloud_services_cloud_provider_aws_multi_az_failover_vrid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudServicesCloudProviderAwsMultiAzFailoverVridConfig
  */
  public constructor(scope: Construct, id: string, config: CloudServicesCloudProviderAwsMultiAzFailoverVridConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cloud_services_cloud_provider_aws_multi_az_failover_vrid',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fipDest = config.fipDest;
    this._fipInterfaceId = config.fipInterfaceId;
    this._id = config.id;
    this._routeTableId = config.routeTableId;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._vipDest = config.vipDest;
    this._vipInterfaceId = config.vipInterfaceId;
    this._vridNumber = config.vridNumber;
    this._vipList.internalValue = config.vipList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fip_dest - computed: false, optional: true, required: false
  private _fipDest?: string; 
  public get fipDest() {
    return this.getStringAttribute('fip_dest');
  }
  public set fipDest(value: string) {
    this._fipDest = value;
  }
  public resetFipDest() {
    this._fipDest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipDestInput() {
    return this._fipDest;
  }

  // fip_interface_id - computed: false, optional: true, required: false
  private _fipInterfaceId?: string; 
  public get fipInterfaceId() {
    return this.getStringAttribute('fip_interface_id');
  }
  public set fipInterfaceId(value: string) {
    this._fipInterfaceId = value;
  }
  public resetFipInterfaceId() {
    this._fipInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipInterfaceIdInput() {
    return this._fipInterfaceId;
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

  // route_table_id - computed: false, optional: true, required: false
  private _routeTableId?: string; 
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }
  public set routeTableId(value: string) {
    this._routeTableId = value;
  }
  public resetRouteTableId() {
    this._routeTableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableIdInput() {
    return this._routeTableId;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vip_dest - computed: false, optional: true, required: false
  private _vipDest?: string; 
  public get vipDest() {
    return this.getStringAttribute('vip_dest');
  }
  public set vipDest(value: string) {
    this._vipDest = value;
  }
  public resetVipDest() {
    this._vipDest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipDestInput() {
    return this._vipDest;
  }

  // vip_interface_id - computed: false, optional: true, required: false
  private _vipInterfaceId?: string; 
  public get vipInterfaceId() {
    return this.getStringAttribute('vip_interface_id');
  }
  public set vipInterfaceId(value: string) {
    this._vipInterfaceId = value;
  }
  public resetVipInterfaceId() {
    this._vipInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInterfaceIdInput() {
    return this._vipInterfaceId;
  }

  // vrid_number - computed: false, optional: false, required: true
  private _vridNumber?: number; 
  public get vridNumber() {
    return this.getNumberAttribute('vrid_number');
  }
  public set vridNumber(value: number) {
    this._vridNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vridNumberInput() {
    return this._vridNumber;
  }

  // vip_list - computed: false, optional: true, required: false
  private _vipList = new CloudServicesCloudProviderAwsMultiAzFailoverVridVipListStructList(this, "vip_list", false);
  public get vipList() {
    return this._vipList;
  }
  public putVipList(value: CloudServicesCloudProviderAwsMultiAzFailoverVridVipListStruct[] | cdktf.IResolvable) {
    this._vipList.internalValue = value;
  }
  public resetVipList() {
    this._vipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipListInput() {
    return this._vipList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fip_dest: cdktf.stringToTerraform(this._fipDest),
      fip_interface_id: cdktf.stringToTerraform(this._fipInterfaceId),
      id: cdktf.stringToTerraform(this._id),
      route_table_id: cdktf.stringToTerraform(this._routeTableId),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      vip_dest: cdktf.stringToTerraform(this._vipDest),
      vip_interface_id: cdktf.stringToTerraform(this._vipInterfaceId),
      vrid_number: cdktf.numberToTerraform(this._vridNumber),
      vip_list: cdktf.listMapper(cloudServicesCloudProviderAwsMultiAzFailoverVridVipListStructToTerraform, true)(this._vipList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fip_dest: {
        value: cdktf.stringToHclTerraform(this._fipDest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fip_interface_id: {
        value: cdktf.stringToHclTerraform(this._fipInterfaceId),
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
      route_table_id: {
        value: cdktf.stringToHclTerraform(this._routeTableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vip_dest: {
        value: cdktf.stringToHclTerraform(this._vipDest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vip_interface_id: {
        value: cdktf.stringToHclTerraform(this._vipInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrid_number: {
        value: cdktf.numberToHclTerraform(this._vridNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vip_list: {
        value: cdktf.listMapperHcl(cloudServicesCloudProviderAwsMultiAzFailoverVridVipListStructToHclTerraform, true)(this._vipList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudServicesCloudProviderAwsMultiAzFailoverVridVipListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
