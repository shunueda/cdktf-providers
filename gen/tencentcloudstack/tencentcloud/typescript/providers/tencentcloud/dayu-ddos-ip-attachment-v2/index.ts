// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/dayu_ddos_ip_attachment_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DayuDdosIpAttachmentV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Anti-DDoS instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/dayu_ddos_ip_attachment_v2#bgp_instance_id DayuDdosIpAttachmentV2#bgp_instance_id}
  */
  readonly bgpInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/dayu_ddos_ip_attachment_v2#id DayuDdosIpAttachmentV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * bound_ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/dayu_ddos_ip_attachment_v2#bound_ip_list DayuDdosIpAttachmentV2#bound_ip_list}
  */
  readonly boundIpList?: DayuDdosIpAttachmentV2BoundIpListStruct[] | cdktf.IResolvable;
}
export interface DayuDdosIpAttachmentV2BoundIpListStruct {
  /**
  * Category of product that can be bound. Valid values: public (CVM and CLB), bm (BM), eni (ENI), vpngw (VPN gateway), natgw (NAT gateway), waf (WAF), fpc (financial products), gaap (GAAP), and other (hosted IP). This field is required when you perform binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/dayu_ddos_ip_attachment_v2#biz_type DayuDdosIpAttachmentV2#biz_type}
  */
  readonly bizType?: string;
  /**
  * Sub-product category. Valid values: cvm (CVM), lb (Load balancer), eni (ENI), vpngw (VPN gateway), natgw (NAT gateway), waf (WAF), fpc (financial products), gaap (GAAP), eip (BM EIP) and other (managed IP). This field is required when you perform binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/dayu_ddos_ip_attachment_v2#device_type DayuDdosIpAttachmentV2#device_type}
  */
  readonly deviceType?: string;
  /**
  * Anti-DDoS instance ID of the IP. This field is required only when the instance is bound to an IP. For example, this field InstanceId will be eni-* if the instance ID is bound to an ENI IP; none if there is no instance to bind to a managed IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/dayu_ddos_ip_attachment_v2#instance_id DayuDdosIpAttachmentV2#instance_id}
  */
  readonly instanceId?: string;
  /**
  * IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/dayu_ddos_ip_attachment_v2#ip DayuDdosIpAttachmentV2#ip}
  */
  readonly ip: string;
}

export function dayuDdosIpAttachmentV2BoundIpListStructToTerraform(struct?: DayuDdosIpAttachmentV2BoundIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    biz_type: cdktf.stringToTerraform(struct!.bizType),
    device_type: cdktf.stringToTerraform(struct!.deviceType),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function dayuDdosIpAttachmentV2BoundIpListStructToHclTerraform(struct?: DayuDdosIpAttachmentV2BoundIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    biz_type: {
      value: cdktf.stringToHclTerraform(struct!.bizType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_type: {
      value: cdktf.stringToHclTerraform(struct!.deviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DayuDdosIpAttachmentV2BoundIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DayuDdosIpAttachmentV2BoundIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bizType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bizType = this._bizType;
    }
    if (this._deviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceType = this._deviceType;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DayuDdosIpAttachmentV2BoundIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bizType = undefined;
      this._deviceType = undefined;
      this._instanceId = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bizType = value.bizType;
      this._deviceType = value.deviceType;
      this._instanceId = value.instanceId;
      this._ip = value.ip;
    }
  }

  // biz_type - computed: false, optional: true, required: false
  private _bizType?: string; 
  public get bizType() {
    return this.getStringAttribute('biz_type');
  }
  public set bizType(value: string) {
    this._bizType = value;
  }
  public resetBizType() {
    this._bizType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bizTypeInput() {
    return this._bizType;
  }

  // device_type - computed: false, optional: true, required: false
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
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

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class DayuDdosIpAttachmentV2BoundIpListStructList extends cdktf.ComplexList {
  public internalValue? : DayuDdosIpAttachmentV2BoundIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): DayuDdosIpAttachmentV2BoundIpListStructOutputReference {
    return new DayuDdosIpAttachmentV2BoundIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/dayu_ddos_ip_attachment_v2 tencentcloud_dayu_ddos_ip_attachment_v2}
*/
export class DayuDdosIpAttachmentV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dayu_ddos_ip_attachment_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DayuDdosIpAttachmentV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DayuDdosIpAttachmentV2 to import
  * @param importFromId The id of the existing DayuDdosIpAttachmentV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/dayu_ddos_ip_attachment_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DayuDdosIpAttachmentV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dayu_ddos_ip_attachment_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/dayu_ddos_ip_attachment_v2 tencentcloud_dayu_ddos_ip_attachment_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DayuDdosIpAttachmentV2Config
  */
  public constructor(scope: Construct, id: string, config: DayuDdosIpAttachmentV2Config) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dayu_ddos_ip_attachment_v2',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bgpInstanceId = config.bgpInstanceId;
    this._id = config.id;
    this._boundIpList.internalValue = config.boundIpList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bgp_instance_id - computed: false, optional: false, required: true
  private _bgpInstanceId?: string; 
  public get bgpInstanceId() {
    return this.getStringAttribute('bgp_instance_id');
  }
  public set bgpInstanceId(value: string) {
    this._bgpInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInstanceIdInput() {
    return this._bgpInstanceId;
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

  // bound_ip_list - computed: false, optional: true, required: false
  private _boundIpList = new DayuDdosIpAttachmentV2BoundIpListStructList(this, "bound_ip_list", false);
  public get boundIpList() {
    return this._boundIpList;
  }
  public putBoundIpList(value: DayuDdosIpAttachmentV2BoundIpListStruct[] | cdktf.IResolvable) {
    this._boundIpList.internalValue = value;
  }
  public resetBoundIpList() {
    this._boundIpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundIpListInput() {
    return this._boundIpList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bgp_instance_id: cdktf.stringToTerraform(this._bgpInstanceId),
      id: cdktf.stringToTerraform(this._id),
      bound_ip_list: cdktf.listMapper(dayuDdosIpAttachmentV2BoundIpListStructToTerraform, true)(this._boundIpList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bgp_instance_id: {
        value: cdktf.stringToHclTerraform(this._bgpInstanceId),
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
      bound_ip_list: {
        value: cdktf.listMapperHcl(dayuDdosIpAttachmentV2BoundIpListStructToHclTerraform, true)(this._boundIpList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DayuDdosIpAttachmentV2BoundIpListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
