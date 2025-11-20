// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/sdn_private_connect
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SdnPrivateConnectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The bandwidth of private connect. Valid range: [1,500]. Unit: Mbps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/sdn_private_connect#connect_bandwidth SdnPrivateConnect#connect_bandwidth}
  */
  readonly connectBandwidth?: number;
  /**
  * The private connect name. Up to 255 characters in length are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/sdn_private_connect#connect_name SdnPrivateConnect#connect_name}
  */
  readonly connectName?: string;
  /**
  * Indicate whether to force delete the private connect. Default is `false`. If set true, the private connect will be permanently deleted instead of being moved into the recycle bin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/sdn_private_connect#force_delete SdnPrivateConnect#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/sdn_private_connect#id SdnPrivateConnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/sdn_private_connect#endpoints SdnPrivateConnect#endpoints}
  */
  readonly endpoints: SdnPrivateConnectEndpoints[] | cdktf.IResolvable;
}
export interface SdnPrivateConnectEndpoints {
  /**
  * The account of public cloud access point. If cloud type is GOOGLE, the value is google pairing key. This value is available only when `endpoint_type` within cloud type (AWS, GOOGLE and TENCENT).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/sdn_private_connect#cloud_account SdnPrivateConnect#cloud_account}
  */
  readonly cloudAccount?: string;
  /**
  * Region of cloud access point. This value is available only when `endpoint_type` within cloud type (AWS, GOOGLE and TENCENT).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/sdn_private_connect#cloud_region SdnPrivateConnect#cloud_region}
  */
  readonly cloudRegion?: string;
  /**
  * The ID of data center.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/sdn_private_connect#datacenter SdnPrivateConnect#datacenter}
  */
  readonly datacenter?: string;
  /**
  * The type of the access point, Valid values: PORT,AWS,TENCENT and GOOGLE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/sdn_private_connect#endpoint_type SdnPrivateConnect#endpoint_type}
  */
  readonly endpointType: string;
  /**
  * The ID of the port. This value is required when `endpoint_type` is `PORT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/sdn_private_connect#port_id SdnPrivateConnect#port_id}
  */
  readonly portId?: string;
  /**
  * VLAN ID of the access point. Value range: from 1 to 4096.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/sdn_private_connect#vlan_id SdnPrivateConnect#vlan_id}
  */
  readonly vlanId?: number;
}

export function sdnPrivateConnectEndpointsToTerraform(struct?: SdnPrivateConnectEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_account: cdktf.stringToTerraform(struct!.cloudAccount),
    cloud_region: cdktf.stringToTerraform(struct!.cloudRegion),
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    endpoint_type: cdktf.stringToTerraform(struct!.endpointType),
    port_id: cdktf.stringToTerraform(struct!.portId),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function sdnPrivateConnectEndpointsToHclTerraform(struct?: SdnPrivateConnectEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_account: {
      value: cdktf.stringToHclTerraform(struct!.cloudAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_region: {
      value: cdktf.stringToHclTerraform(struct!.cloudRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datacenter: {
      value: cdktf.stringToHclTerraform(struct!.datacenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_type: {
      value: cdktf.stringToHclTerraform(struct!.endpointType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_id: {
      value: cdktf.stringToHclTerraform(struct!.portId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SdnPrivateConnectEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SdnPrivateConnectEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudAccount = this._cloudAccount;
    }
    if (this._cloudRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudRegion = this._cloudRegion;
    }
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._endpointType !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointType = this._endpointType;
    }
    if (this._portId !== undefined) {
      hasAnyValues = true;
      internalValueResult.portId = this._portId;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdnPrivateConnectEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudAccount = undefined;
      this._cloudRegion = undefined;
      this._datacenter = undefined;
      this._endpointType = undefined;
      this._portId = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudAccount = value.cloudAccount;
      this._cloudRegion = value.cloudRegion;
      this._datacenter = value.datacenter;
      this._endpointType = value.endpointType;
      this._portId = value.portId;
      this._vlanId = value.vlanId;
    }
  }

  // cloud_account - computed: false, optional: true, required: false
  private _cloudAccount?: string; 
  public get cloudAccount() {
    return this.getStringAttribute('cloud_account');
  }
  public set cloudAccount(value: string) {
    this._cloudAccount = value;
  }
  public resetCloudAccount() {
    this._cloudAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccountInput() {
    return this._cloudAccount;
  }

  // cloud_region - computed: false, optional: true, required: false
  private _cloudRegion?: string; 
  public get cloudRegion() {
    return this.getStringAttribute('cloud_region');
  }
  public set cloudRegion(value: string) {
    this._cloudRegion = value;
  }
  public resetCloudRegion() {
    this._cloudRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRegionInput() {
    return this._cloudRegion;
  }

  // connectivity_status - computed: true, optional: false, required: false
  public get connectivityStatus() {
    return this.getStringAttribute('connectivity_status');
  }

  // datacenter - computed: false, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // endpoint_name - computed: true, optional: false, required: false
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }

  // endpoint_type - computed: false, optional: false, required: true
  private _endpointType?: string; 
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }
  public set endpointType(value: string) {
    this._endpointType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTypeInput() {
    return this._endpointType;
  }

  // port_id - computed: false, optional: true, required: false
  private _portId?: string; 
  public get portId() {
    return this.getStringAttribute('port_id');
  }
  public set portId(value: string) {
    this._portId = value;
  }
  public resetPortId() {
    this._portId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portIdInput() {
    return this._portId;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}

export class SdnPrivateConnectEndpointsList extends cdktf.ComplexList {
  public internalValue? : SdnPrivateConnectEndpoints[] | cdktf.IResolvable

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
  public get(index: number): SdnPrivateConnectEndpointsOutputReference {
    return new SdnPrivateConnectEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/sdn_private_connect zenlayercloud_sdn_private_connect}
*/
export class SdnPrivateConnect extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_sdn_private_connect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SdnPrivateConnect resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SdnPrivateConnect to import
  * @param importFromId The id of the existing SdnPrivateConnect that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/sdn_private_connect#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SdnPrivateConnect to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_sdn_private_connect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.9/docs/resources/sdn_private_connect zenlayercloud_sdn_private_connect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SdnPrivateConnectConfig
  */
  public constructor(scope: Construct, id: string, config: SdnPrivateConnectConfig) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_sdn_private_connect',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.9',
        providerVersionConstraint: '0.2.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectBandwidth = config.connectBandwidth;
    this._connectName = config.connectName;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._endpoints.internalValue = config.endpoints;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connect_bandwidth - computed: false, optional: true, required: false
  private _connectBandwidth?: number; 
  public get connectBandwidth() {
    return this.getNumberAttribute('connect_bandwidth');
  }
  public set connectBandwidth(value: number) {
    this._connectBandwidth = value;
  }
  public resetConnectBandwidth() {
    this._connectBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectBandwidthInput() {
    return this._connectBandwidth;
  }

  // connect_name - computed: false, optional: true, required: false
  private _connectName?: string; 
  public get connectName() {
    return this.getStringAttribute('connect_name');
  }
  public set connectName(value: string) {
    this._connectName = value;
  }
  public resetConnectName() {
    this._connectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectNameInput() {
    return this._connectName;
  }

  // connectivity_status - computed: true, optional: false, required: false
  public get connectivityStatus() {
    return this.getStringAttribute('connectivity_status');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // expired_time - computed: true, optional: false, required: false
  public get expiredTime() {
    return this.getStringAttribute('expired_time');
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
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

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // resource_group_name - computed: true, optional: false, required: false
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // endpoints - computed: false, optional: false, required: true
  private _endpoints = new SdnPrivateConnectEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: SdnPrivateConnectEndpoints[] | cdktf.IResolvable) {
    this._endpoints.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connect_bandwidth: cdktf.numberToTerraform(this._connectBandwidth),
      connect_name: cdktf.stringToTerraform(this._connectName),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      endpoints: cdktf.listMapper(sdnPrivateConnectEndpointsToTerraform, true)(this._endpoints.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connect_bandwidth: {
        value: cdktf.numberToHclTerraform(this._connectBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connect_name: {
        value: cdktf.stringToHclTerraform(this._connectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
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
      endpoints: {
        value: cdktf.listMapperHcl(sdnPrivateConnectEndpointsToHclTerraform, true)(this._endpoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SdnPrivateConnectEndpointsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
