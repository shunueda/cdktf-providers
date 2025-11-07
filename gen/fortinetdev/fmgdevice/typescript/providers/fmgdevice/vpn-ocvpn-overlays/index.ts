// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ocvpn_overlays
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnOcvpnOverlaysAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ocvpn_overlays#assign_ip VpnOcvpnOverlaysA#assign_ip}
  */
  readonly assignIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ocvpn_overlays#device_name VpnOcvpnOverlaysA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ocvpn_overlays#device_vdom VpnOcvpnOverlaysA#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ocvpn_overlays#dynamic_sort_subtable VpnOcvpnOverlaysA#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ocvpn_overlays#fosid VpnOcvpnOverlaysA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ocvpn_overlays#id VpnOcvpnOverlaysA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ocvpn_overlays#inter_overlay VpnOcvpnOverlaysA#inter_overlay}
  */
  readonly interOverlay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ocvpn_overlays#ipv4_end_ip VpnOcvpnOverlaysA#ipv4_end_ip}
  */
  readonly ipv4EndIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ocvpn_overlays#ipv4_start_ip VpnOcvpnOverlaysA#ipv4_start_ip}
  */
  readonly ipv4StartIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ocvpn_overlays#name VpnOcvpnOverlaysA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ocvpn_overlays#overlay_name VpnOcvpnOverlaysA#overlay_name}
  */
  readonly overlayName?: string;
  /**
  * subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ocvpn_overlays#subnets VpnOcvpnOverlaysA#subnets}
  */
  readonly subnets?: VpnOcvpnOverlaysSubnetsA[] | cdktf.IResolvable;
}
export interface VpnOcvpnOverlaysSubnetsA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ocvpn_overlays#id VpnOcvpnOverlaysA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ocvpn_overlays#interface VpnOcvpnOverlaysA#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ocvpn_overlays#subnet VpnOcvpnOverlaysA#subnet}
  */
  readonly subnet?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ocvpn_overlays#type VpnOcvpnOverlaysA#type}
  */
  readonly type?: string;
}

export function vpnOcvpnOverlaysSubnetsAToTerraform(struct?: VpnOcvpnOverlaysSubnetsA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    subnet: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnet),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function vpnOcvpnOverlaysSubnetsAToHclTerraform(struct?: VpnOcvpnOverlaysSubnetsA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interface),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnet),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpnOcvpnOverlaysSubnetsAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnOcvpnOverlaysSubnetsA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnOcvpnOverlaysSubnetsA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._interface = undefined;
      this._subnet = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._interface = value.interface;
      this._subnet = value.subnet;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // interface - computed: true, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // subnet - computed: true, optional: true, required: false
  private _subnet?: string[]; 
  public get subnet() {
    return this.getListAttribute('subnet');
  }
  public set subnet(value: string[]) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class VpnOcvpnOverlaysSubnetsAList extends cdktf.ComplexList {
  public internalValue? : VpnOcvpnOverlaysSubnetsA[] | cdktf.IResolvable

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
  public get(index: number): VpnOcvpnOverlaysSubnetsAOutputReference {
    return new VpnOcvpnOverlaysSubnetsAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ocvpn_overlays fmgdevice_vpn_ocvpn_overlays}
*/
export class VpnOcvpnOverlaysA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_vpn_ocvpn_overlays";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnOcvpnOverlaysA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnOcvpnOverlaysA to import
  * @param importFromId The id of the existing VpnOcvpnOverlaysA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ocvpn_overlays#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnOcvpnOverlaysA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_vpn_ocvpn_overlays", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/vpn_ocvpn_overlays fmgdevice_vpn_ocvpn_overlays} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnOcvpnOverlaysAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VpnOcvpnOverlaysAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_vpn_ocvpn_overlays',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignIp = config.assignIp;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._fosid = config.fosid;
    this._id = config.id;
    this._interOverlay = config.interOverlay;
    this._ipv4EndIp = config.ipv4EndIp;
    this._ipv4StartIp = config.ipv4StartIp;
    this._name = config.name;
    this._overlayName = config.overlayName;
    this._subnets.internalValue = config.subnets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assign_ip - computed: false, optional: true, required: false
  private _assignIp?: string; 
  public get assignIp() {
    return this.getStringAttribute('assign_ip');
  }
  public set assignIp(value: string) {
    this._assignIp = value;
  }
  public resetAssignIp() {
    this._assignIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignIpInput() {
    return this._assignIp;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // inter_overlay - computed: true, optional: true, required: false
  private _interOverlay?: string; 
  public get interOverlay() {
    return this.getStringAttribute('inter_overlay');
  }
  public set interOverlay(value: string) {
    this._interOverlay = value;
  }
  public resetInterOverlay() {
    this._interOverlay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interOverlayInput() {
    return this._interOverlay;
  }

  // ipv4_end_ip - computed: false, optional: true, required: false
  private _ipv4EndIp?: string; 
  public get ipv4EndIp() {
    return this.getStringAttribute('ipv4_end_ip');
  }
  public set ipv4EndIp(value: string) {
    this._ipv4EndIp = value;
  }
  public resetIpv4EndIp() {
    this._ipv4EndIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4EndIpInput() {
    return this._ipv4EndIp;
  }

  // ipv4_start_ip - computed: false, optional: true, required: false
  private _ipv4StartIp?: string; 
  public get ipv4StartIp() {
    return this.getStringAttribute('ipv4_start_ip');
  }
  public set ipv4StartIp(value: string) {
    this._ipv4StartIp = value;
  }
  public resetIpv4StartIp() {
    this._ipv4StartIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4StartIpInput() {
    return this._ipv4StartIp;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // overlay_name - computed: false, optional: true, required: false
  private _overlayName?: string; 
  public get overlayName() {
    return this.getStringAttribute('overlay_name');
  }
  public set overlayName(value: string) {
    this._overlayName = value;
  }
  public resetOverlayName() {
    this._overlayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayNameInput() {
    return this._overlayName;
  }

  // subnets - computed: false, optional: true, required: false
  private _subnets = new VpnOcvpnOverlaysSubnetsAList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: VpnOcvpnOverlaysSubnetsA[] | cdktf.IResolvable) {
    this._subnets.internalValue = value;
  }
  public resetSubnets() {
    this._subnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assign_ip: cdktf.stringToTerraform(this._assignIp),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      inter_overlay: cdktf.stringToTerraform(this._interOverlay),
      ipv4_end_ip: cdktf.stringToTerraform(this._ipv4EndIp),
      ipv4_start_ip: cdktf.stringToTerraform(this._ipv4StartIp),
      name: cdktf.stringToTerraform(this._name),
      overlay_name: cdktf.stringToTerraform(this._overlayName),
      subnets: cdktf.listMapper(vpnOcvpnOverlaysSubnetsAToTerraform, true)(this._subnets.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assign_ip: {
        value: cdktf.stringToHclTerraform(this._assignIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inter_overlay: {
        value: cdktf.stringToHclTerraform(this._interOverlay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_end_ip: {
        value: cdktf.stringToHclTerraform(this._ipv4EndIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_start_ip: {
        value: cdktf.stringToHclTerraform(this._ipv4StartIp),
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
      overlay_name: {
        value: cdktf.stringToHclTerraform(this._overlayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnets: {
        value: cdktf.listMapperHcl(vpnOcvpnOverlaysSubnetsAToHclTerraform, true)(this._subnets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpnOcvpnOverlaysSubnetsAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
