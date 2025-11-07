// https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vni
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceVniConfig extends cdktf.TerraformMetaArguments {
  /**
  * VNI description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vni#description DeviceVni#description}
  */
  readonly description: string;
  /**
  * The Device Id of VNI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vni#device_id DeviceVni#device_id}
  */
  readonly deviceId: string;
  /**
  * EnableProxy of the VNI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vni#enable_proxy DeviceVni#enable_proxy}
  */
  readonly enableProxy?: boolean | cdktf.IResolvable;
  /**
  * Enables VNI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vni#enabled DeviceVni#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vni#id DeviceVni#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Logical Name of chosen interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vni#if_name DeviceVni#if_name}
  */
  readonly ifName: string;
  /**
  * MulticastGroupAddress of the VNI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vni#multicast_groupaddress DeviceVni#multicast_groupaddress}
  */
  readonly multicastGroupaddress?: string;
  /**
  * Priority of the VNI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vni#priority DeviceVni#priority}
  */
  readonly priority?: number;
  /**
  * Select one from [ SINGLE_ARM, DUAL_ARM, PAIRED ]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vni#proxy_type DeviceVni#proxy_type}
  */
  readonly proxyType?: string;
  /**
  * securityZone of the VNI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vni#security_zone_id DeviceVni#security_zone_id}
  */
  readonly securityZoneId?: string;
  /**
  * SegmentId of the VNI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vni#segment_id DeviceVni#segment_id}
  */
  readonly segmentId?: number;
  /**
  * VNID of the VNI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vni#vnid DeviceVni#vnid}
  */
  readonly vnid: number;
  /**
  * The Device Id of VNI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vni#vtep_id DeviceVni#vtep_id}
  */
  readonly vtepId?: number;
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vni#ipv4 DeviceVni#ipv4}
  */
  readonly ipv4?: DeviceVniIpv4[] | cdktf.IResolvable;
}
export interface DeviceVniIpv4Dhcp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vni#dhcp_route_metric DeviceVni#dhcp_route_metric}
  */
  readonly dhcpRouteMetric?: number;
  /**
  * Dynamic IP of the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vni#enable_default_route_dhcp DeviceVni#enable_default_route_dhcp}
  */
  readonly enableDefaultRouteDhcp?: boolean | cdktf.IResolvable;
}

export function deviceVniIpv4DhcpToTerraform(struct?: DeviceVniIpv4Dhcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp_route_metric: cdktf.numberToTerraform(struct!.dhcpRouteMetric),
    enable_default_route_dhcp: cdktf.booleanToTerraform(struct!.enableDefaultRouteDhcp),
  }
}


export function deviceVniIpv4DhcpToHclTerraform(struct?: DeviceVniIpv4Dhcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp_route_metric: {
      value: cdktf.numberToHclTerraform(struct!.dhcpRouteMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_default_route_dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.enableDefaultRouteDhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceVniIpv4DhcpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceVniIpv4Dhcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpRouteMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRouteMetric = this._dhcpRouteMetric;
    }
    if (this._enableDefaultRouteDhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDefaultRouteDhcp = this._enableDefaultRouteDhcp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceVniIpv4Dhcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcpRouteMetric = undefined;
      this._enableDefaultRouteDhcp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcpRouteMetric = value.dhcpRouteMetric;
      this._enableDefaultRouteDhcp = value.enableDefaultRouteDhcp;
    }
  }

  // dhcp_route_metric - computed: false, optional: true, required: false
  private _dhcpRouteMetric?: number; 
  public get dhcpRouteMetric() {
    return this.getNumberAttribute('dhcp_route_metric');
  }
  public set dhcpRouteMetric(value: number) {
    this._dhcpRouteMetric = value;
  }
  public resetDhcpRouteMetric() {
    this._dhcpRouteMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRouteMetricInput() {
    return this._dhcpRouteMetric;
  }

  // enable_default_route_dhcp - computed: false, optional: true, required: false
  private _enableDefaultRouteDhcp?: boolean | cdktf.IResolvable; 
  public get enableDefaultRouteDhcp() {
    return this.getBooleanAttribute('enable_default_route_dhcp');
  }
  public set enableDefaultRouteDhcp(value: boolean | cdktf.IResolvable) {
    this._enableDefaultRouteDhcp = value;
  }
  public resetEnableDefaultRouteDhcp() {
    this._enableDefaultRouteDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDefaultRouteDhcpInput() {
    return this._enableDefaultRouteDhcp;
  }
}

export class DeviceVniIpv4DhcpList extends cdktf.ComplexList {
  public internalValue? : DeviceVniIpv4Dhcp[] | cdktf.IResolvable

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
  public get(index: number): DeviceVniIpv4DhcpOutputReference {
    return new DeviceVniIpv4DhcpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceVniIpv4Static {
  /**
  * IP of the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vni#address DeviceVni#address}
  */
  readonly address?: string;
  /**
  * Net mask of the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vni#netmask DeviceVni#netmask}
  */
  readonly netmask?: number;
}

export function deviceVniIpv4StaticToTerraform(struct?: DeviceVniIpv4Static | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    netmask: cdktf.numberToTerraform(struct!.netmask),
  }
}


export function deviceVniIpv4StaticToHclTerraform(struct?: DeviceVniIpv4Static | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask: {
      value: cdktf.numberToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceVniIpv4StaticOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceVniIpv4Static | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceVniIpv4Static | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._netmask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._netmask = value.netmask;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // netmask - computed: false, optional: true, required: false
  private _netmask?: number; 
  public get netmask() {
    return this.getNumberAttribute('netmask');
  }
  public set netmask(value: number) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }
}

export class DeviceVniIpv4StaticList extends cdktf.ComplexList {
  public internalValue? : DeviceVniIpv4Static[] | cdktf.IResolvable

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
  public get(index: number): DeviceVniIpv4StaticOutputReference {
    return new DeviceVniIpv4StaticOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceVniIpv4 {
  /**
  * dhcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vni#dhcp DeviceVni#dhcp}
  */
  readonly dhcp?: DeviceVniIpv4Dhcp[] | cdktf.IResolvable;
  /**
  * static block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vni#static DeviceVni#static}
  */
  readonly static?: DeviceVniIpv4Static[] | cdktf.IResolvable;
}

export function deviceVniIpv4ToTerraform(struct?: DeviceVniIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp: cdktf.listMapper(deviceVniIpv4DhcpToTerraform, true)(struct!.dhcp),
    static: cdktf.listMapper(deviceVniIpv4StaticToTerraform, true)(struct!.static),
  }
}


export function deviceVniIpv4ToHclTerraform(struct?: DeviceVniIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp: {
      value: cdktf.listMapperHcl(deviceVniIpv4DhcpToHclTerraform, true)(struct!.dhcp),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceVniIpv4DhcpList",
    },
    static: {
      value: cdktf.listMapperHcl(deviceVniIpv4StaticToHclTerraform, true)(struct!.static),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceVniIpv4StaticList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceVniIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceVniIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp?.internalValue;
    }
    if (this._static?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceVniIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcp.internalValue = undefined;
      this._static.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcp.internalValue = value.dhcp;
      this._static.internalValue = value.static;
    }
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp = new DeviceVniIpv4DhcpList(this, "dhcp", false);
  public get dhcp() {
    return this._dhcp;
  }
  public putDhcp(value: DeviceVniIpv4Dhcp[] | cdktf.IResolvable) {
    this._dhcp.internalValue = value;
  }
  public resetDhcp() {
    this._dhcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp.internalValue;
  }

  // static - computed: false, optional: true, required: false
  private _static = new DeviceVniIpv4StaticList(this, "static", false);
  public get static() {
    return this._static;
  }
  public putStatic(value: DeviceVniIpv4Static[] | cdktf.IResolvable) {
    this._static.internalValue = value;
  }
  public resetStatic() {
    this._static.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static.internalValue;
  }
}

export class DeviceVniIpv4List extends cdktf.ComplexList {
  public internalValue? : DeviceVniIpv4[] | cdktf.IResolvable

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
  public get(index: number): DeviceVniIpv4OutputReference {
    return new DeviceVniIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vni fmc_device_vni}
*/
export class DeviceVni extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmc_device_vni";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeviceVni resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeviceVni to import
  * @param importFromId The id of the existing DeviceVni that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vni#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeviceVni to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmc_device_vni", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_vni fmc_device_vni} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceVniConfig
  */
  public constructor(scope: Construct, id: string, config: DeviceVniConfig) {
    super(scope, id, {
      terraformResourceType: 'fmc_device_vni',
      terraformGeneratorMetadata: {
        providerName: 'fmc',
        providerVersion: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._deviceId = config.deviceId;
    this._enableProxy = config.enableProxy;
    this._enabled = config.enabled;
    this._id = config.id;
    this._ifName = config.ifName;
    this._multicastGroupaddress = config.multicastGroupaddress;
    this._priority = config.priority;
    this._proxyType = config.proxyType;
    this._securityZoneId = config.securityZoneId;
    this._segmentId = config.segmentId;
    this._vnid = config.vnid;
    this._vtepId = config.vtepId;
    this._ipv4.internalValue = config.ipv4;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_id - computed: false, optional: false, required: true
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // enable_proxy - computed: false, optional: true, required: false
  private _enableProxy?: boolean | cdktf.IResolvable; 
  public get enableProxy() {
    return this.getBooleanAttribute('enable_proxy');
  }
  public set enableProxy(value: boolean | cdktf.IResolvable) {
    this._enableProxy = value;
  }
  public resetEnableProxy() {
    this._enableProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableProxyInput() {
    return this._enableProxy;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // if_name - computed: false, optional: false, required: true
  private _ifName?: string; 
  public get ifName() {
    return this.getStringAttribute('if_name');
  }
  public set ifName(value: string) {
    this._ifName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifNameInput() {
    return this._ifName;
  }

  // multicast_groupaddress - computed: false, optional: true, required: false
  private _multicastGroupaddress?: string; 
  public get multicastGroupaddress() {
    return this.getStringAttribute('multicast_groupaddress');
  }
  public set multicastGroupaddress(value: string) {
    this._multicastGroupaddress = value;
  }
  public resetMulticastGroupaddress() {
    this._multicastGroupaddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastGroupaddressInput() {
    return this._multicastGroupaddress;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // proxy_type - computed: false, optional: true, required: false
  private _proxyType?: string; 
  public get proxyType() {
    return this.getStringAttribute('proxy_type');
  }
  public set proxyType(value: string) {
    this._proxyType = value;
  }
  public resetProxyType() {
    this._proxyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTypeInput() {
    return this._proxyType;
  }

  // security_zone_id - computed: false, optional: true, required: false
  private _securityZoneId?: string; 
  public get securityZoneId() {
    return this.getStringAttribute('security_zone_id');
  }
  public set securityZoneId(value: string) {
    this._securityZoneId = value;
  }
  public resetSecurityZoneId() {
    this._securityZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityZoneIdInput() {
    return this._securityZoneId;
  }

  // segment_id - computed: false, optional: true, required: false
  private _segmentId?: number; 
  public get segmentId() {
    return this.getNumberAttribute('segment_id');
  }
  public set segmentId(value: number) {
    this._segmentId = value;
  }
  public resetSegmentId() {
    this._segmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vnid - computed: false, optional: false, required: true
  private _vnid?: number; 
  public get vnid() {
    return this.getNumberAttribute('vnid');
  }
  public set vnid(value: number) {
    this._vnid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnidInput() {
    return this._vnid;
  }

  // vtep_id - computed: false, optional: true, required: false
  private _vtepId?: number; 
  public get vtepId() {
    return this.getNumberAttribute('vtep_id');
  }
  public set vtepId(value: number) {
    this._vtepId = value;
  }
  public resetVtepId() {
    this._vtepId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtepIdInput() {
    return this._vtepId;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new DeviceVniIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: DeviceVniIpv4[] | cdktf.IResolvable) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      device_id: cdktf.stringToTerraform(this._deviceId),
      enable_proxy: cdktf.booleanToTerraform(this._enableProxy),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      if_name: cdktf.stringToTerraform(this._ifName),
      multicast_groupaddress: cdktf.stringToTerraform(this._multicastGroupaddress),
      priority: cdktf.numberToTerraform(this._priority),
      proxy_type: cdktf.stringToTerraform(this._proxyType),
      security_zone_id: cdktf.stringToTerraform(this._securityZoneId),
      segment_id: cdktf.numberToTerraform(this._segmentId),
      vnid: cdktf.numberToTerraform(this._vnid),
      vtep_id: cdktf.numberToTerraform(this._vtepId),
      ipv4: cdktf.listMapper(deviceVniIpv4ToTerraform, true)(this._ipv4.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_id: {
        value: cdktf.stringToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_proxy: {
        value: cdktf.booleanToHclTerraform(this._enableProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      if_name: {
        value: cdktf.stringToHclTerraform(this._ifName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_groupaddress: {
        value: cdktf.stringToHclTerraform(this._multicastGroupaddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy_type: {
        value: cdktf.stringToHclTerraform(this._proxyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_zone_id: {
        value: cdktf.stringToHclTerraform(this._securityZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment_id: {
        value: cdktf.numberToHclTerraform(this._segmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vnid: {
        value: cdktf.numberToHclTerraform(this._vnid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vtep_id: {
        value: cdktf.numberToHclTerraform(this._vtepId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4: {
        value: cdktf.listMapperHcl(deviceVniIpv4ToHclTerraform, true)(this._ipv4.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeviceVniIpv4List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
