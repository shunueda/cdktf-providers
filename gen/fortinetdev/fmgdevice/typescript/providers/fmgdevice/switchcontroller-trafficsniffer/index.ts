// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerTrafficsnifferConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer#device_name SwitchcontrollerTrafficsniffer#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer#device_vdom SwitchcontrollerTrafficsniffer#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer#dynamic_sort_subtable SwitchcontrollerTrafficsniffer#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer#erspan_ip SwitchcontrollerTrafficsniffer#erspan_ip}
  */
  readonly erspanIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer#id SwitchcontrollerTrafficsniffer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer#mode SwitchcontrollerTrafficsniffer#mode}
  */
  readonly mode?: string;
  /**
  * target_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer#target_ip SwitchcontrollerTrafficsniffer#target_ip}
  */
  readonly targetIp?: SwitchcontrollerTrafficsnifferTargetIp[] | cdktf.IResolvable;
  /**
  * target_mac block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer#target_mac SwitchcontrollerTrafficsniffer#target_mac}
  */
  readonly targetMac?: SwitchcontrollerTrafficsnifferTargetMac[] | cdktf.IResolvable;
  /**
  * target_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer#target_port SwitchcontrollerTrafficsniffer#target_port}
  */
  readonly targetPort?: SwitchcontrollerTrafficsnifferTargetPort[] | cdktf.IResolvable;
}
export interface SwitchcontrollerTrafficsnifferTargetIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer#description SwitchcontrollerTrafficsniffer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer#dst_entry_id SwitchcontrollerTrafficsniffer#dst_entry_id}
  */
  readonly dstEntryId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer#ip SwitchcontrollerTrafficsniffer#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer#src_entry_id SwitchcontrollerTrafficsniffer#src_entry_id}
  */
  readonly srcEntryId?: number;
}

export function switchcontrollerTrafficsnifferTargetIpToTerraform(struct?: SwitchcontrollerTrafficsnifferTargetIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dst_entry_id: cdktf.numberToTerraform(struct!.dstEntryId),
    ip: cdktf.stringToTerraform(struct!.ip),
    src_entry_id: cdktf.numberToTerraform(struct!.srcEntryId),
  }
}


export function switchcontrollerTrafficsnifferTargetIpToHclTerraform(struct?: SwitchcontrollerTrafficsnifferTargetIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_entry_id: {
      value: cdktf.numberToHclTerraform(struct!.dstEntryId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_entry_id: {
      value: cdktf.numberToHclTerraform(struct!.srcEntryId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerTrafficsnifferTargetIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerTrafficsnifferTargetIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dstEntryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEntryId = this._dstEntryId;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._srcEntryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcEntryId = this._srcEntryId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerTrafficsnifferTargetIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._dstEntryId = undefined;
      this._ip = undefined;
      this._srcEntryId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._dstEntryId = value.dstEntryId;
      this._ip = value.ip;
      this._srcEntryId = value.srcEntryId;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dst_entry_id - computed: false, optional: true, required: false
  private _dstEntryId?: number; 
  public get dstEntryId() {
    return this.getNumberAttribute('dst_entry_id');
  }
  public set dstEntryId(value: number) {
    this._dstEntryId = value;
  }
  public resetDstEntryId() {
    this._dstEntryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryIdInput() {
    return this._dstEntryId;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // src_entry_id - computed: false, optional: true, required: false
  private _srcEntryId?: number; 
  public get srcEntryId() {
    return this.getNumberAttribute('src_entry_id');
  }
  public set srcEntryId(value: number) {
    this._srcEntryId = value;
  }
  public resetSrcEntryId() {
    this._srcEntryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcEntryIdInput() {
    return this._srcEntryId;
  }
}

export class SwitchcontrollerTrafficsnifferTargetIpList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerTrafficsnifferTargetIp[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerTrafficsnifferTargetIpOutputReference {
    return new SwitchcontrollerTrafficsnifferTargetIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerTrafficsnifferTargetMac {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer#description SwitchcontrollerTrafficsniffer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer#dst_entry_id SwitchcontrollerTrafficsniffer#dst_entry_id}
  */
  readonly dstEntryId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer#mac SwitchcontrollerTrafficsniffer#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer#src_entry_id SwitchcontrollerTrafficsniffer#src_entry_id}
  */
  readonly srcEntryId?: number;
}

export function switchcontrollerTrafficsnifferTargetMacToTerraform(struct?: SwitchcontrollerTrafficsnifferTargetMac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dst_entry_id: cdktf.numberToTerraform(struct!.dstEntryId),
    mac: cdktf.stringToTerraform(struct!.mac),
    src_entry_id: cdktf.numberToTerraform(struct!.srcEntryId),
  }
}


export function switchcontrollerTrafficsnifferTargetMacToHclTerraform(struct?: SwitchcontrollerTrafficsnifferTargetMac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_entry_id: {
      value: cdktf.numberToHclTerraform(struct!.dstEntryId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_entry_id: {
      value: cdktf.numberToHclTerraform(struct!.srcEntryId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerTrafficsnifferTargetMacOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerTrafficsnifferTargetMac | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dstEntryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEntryId = this._dstEntryId;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._srcEntryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcEntryId = this._srcEntryId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerTrafficsnifferTargetMac | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._dstEntryId = undefined;
      this._mac = undefined;
      this._srcEntryId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._dstEntryId = value.dstEntryId;
      this._mac = value.mac;
      this._srcEntryId = value.srcEntryId;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dst_entry_id - computed: true, optional: true, required: false
  private _dstEntryId?: number; 
  public get dstEntryId() {
    return this.getNumberAttribute('dst_entry_id');
  }
  public set dstEntryId(value: number) {
    this._dstEntryId = value;
  }
  public resetDstEntryId() {
    this._dstEntryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryIdInput() {
    return this._dstEntryId;
  }

  // mac - computed: false, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // src_entry_id - computed: true, optional: true, required: false
  private _srcEntryId?: number; 
  public get srcEntryId() {
    return this.getNumberAttribute('src_entry_id');
  }
  public set srcEntryId(value: number) {
    this._srcEntryId = value;
  }
  public resetSrcEntryId() {
    this._srcEntryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcEntryIdInput() {
    return this._srcEntryId;
  }
}

export class SwitchcontrollerTrafficsnifferTargetMacList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerTrafficsnifferTargetMac[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerTrafficsnifferTargetMacOutputReference {
    return new SwitchcontrollerTrafficsnifferTargetMacOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerTrafficsnifferTargetPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer#description SwitchcontrollerTrafficsniffer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer#in_ports SwitchcontrollerTrafficsniffer#in_ports}
  */
  readonly inPorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer#out_ports SwitchcontrollerTrafficsniffer#out_ports}
  */
  readonly outPorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer#switch_id SwitchcontrollerTrafficsniffer#switch_id}
  */
  readonly switchId?: string[];
}

export function switchcontrollerTrafficsnifferTargetPortToTerraform(struct?: SwitchcontrollerTrafficsnifferTargetPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    in_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inPorts),
    out_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.outPorts),
    switch_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.switchId),
  }
}


export function switchcontrollerTrafficsnifferTargetPortToHclTerraform(struct?: SwitchcontrollerTrafficsnifferTargetPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inPorts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    out_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.outPorts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    switch_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.switchId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerTrafficsnifferTargetPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerTrafficsnifferTargetPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._inPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.inPorts = this._inPorts;
    }
    if (this._outPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.outPorts = this._outPorts;
    }
    if (this._switchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchId = this._switchId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerTrafficsnifferTargetPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._inPorts = undefined;
      this._outPorts = undefined;
      this._switchId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._inPorts = value.inPorts;
      this._outPorts = value.outPorts;
      this._switchId = value.switchId;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // in_ports - computed: true, optional: true, required: false
  private _inPorts?: string[]; 
  public get inPorts() {
    return cdktf.Fn.tolist(this.getListAttribute('in_ports'));
  }
  public set inPorts(value: string[]) {
    this._inPorts = value;
  }
  public resetInPorts() {
    this._inPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inPortsInput() {
    return this._inPorts;
  }

  // out_ports - computed: true, optional: true, required: false
  private _outPorts?: string[]; 
  public get outPorts() {
    return cdktf.Fn.tolist(this.getListAttribute('out_ports'));
  }
  public set outPorts(value: string[]) {
    this._outPorts = value;
  }
  public resetOutPorts() {
    this._outPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outPortsInput() {
    return this._outPorts;
  }

  // switch_id - computed: true, optional: true, required: false
  private _switchId?: string[]; 
  public get switchId() {
    return cdktf.Fn.tolist(this.getListAttribute('switch_id'));
  }
  public set switchId(value: string[]) {
    this._switchId = value;
  }
  public resetSwitchId() {
    this._switchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchIdInput() {
    return this._switchId;
  }
}

export class SwitchcontrollerTrafficsnifferTargetPortList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerTrafficsnifferTargetPort[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerTrafficsnifferTargetPortOutputReference {
    return new SwitchcontrollerTrafficsnifferTargetPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer fmgdevice_switchcontroller_trafficsniffer}
*/
export class SwitchcontrollerTrafficsniffer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_switchcontroller_trafficsniffer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerTrafficsniffer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerTrafficsniffer to import
  * @param importFromId The id of the existing SwitchcontrollerTrafficsniffer that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerTrafficsniffer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_switchcontroller_trafficsniffer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_trafficsniffer fmgdevice_switchcontroller_trafficsniffer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerTrafficsnifferConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerTrafficsnifferConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_switchcontroller_trafficsniffer',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._erspanIp = config.erspanIp;
    this._id = config.id;
    this._mode = config.mode;
    this._targetIp.internalValue = config.targetIp;
    this._targetMac.internalValue = config.targetMac;
    this._targetPort.internalValue = config.targetPort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // erspan_ip - computed: false, optional: true, required: false
  private _erspanIp?: string; 
  public get erspanIp() {
    return this.getStringAttribute('erspan_ip');
  }
  public set erspanIp(value: string) {
    this._erspanIp = value;
  }
  public resetErspanIp() {
    this._erspanIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get erspanIpInput() {
    return this._erspanIp;
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

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // target_ip - computed: false, optional: true, required: false
  private _targetIp = new SwitchcontrollerTrafficsnifferTargetIpList(this, "target_ip", false);
  public get targetIp() {
    return this._targetIp;
  }
  public putTargetIp(value: SwitchcontrollerTrafficsnifferTargetIp[] | cdktf.IResolvable) {
    this._targetIp.internalValue = value;
  }
  public resetTargetIp() {
    this._targetIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIpInput() {
    return this._targetIp.internalValue;
  }

  // target_mac - computed: false, optional: true, required: false
  private _targetMac = new SwitchcontrollerTrafficsnifferTargetMacList(this, "target_mac", false);
  public get targetMac() {
    return this._targetMac;
  }
  public putTargetMac(value: SwitchcontrollerTrafficsnifferTargetMac[] | cdktf.IResolvable) {
    this._targetMac.internalValue = value;
  }
  public resetTargetMac() {
    this._targetMac.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetMacInput() {
    return this._targetMac.internalValue;
  }

  // target_port - computed: false, optional: true, required: false
  private _targetPort = new SwitchcontrollerTrafficsnifferTargetPortList(this, "target_port", false);
  public get targetPort() {
    return this._targetPort;
  }
  public putTargetPort(value: SwitchcontrollerTrafficsnifferTargetPort[] | cdktf.IResolvable) {
    this._targetPort.internalValue = value;
  }
  public resetTargetPort() {
    this._targetPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      erspan_ip: cdktf.stringToTerraform(this._erspanIp),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
      target_ip: cdktf.listMapper(switchcontrollerTrafficsnifferTargetIpToTerraform, true)(this._targetIp.internalValue),
      target_mac: cdktf.listMapper(switchcontrollerTrafficsnifferTargetMacToTerraform, true)(this._targetMac.internalValue),
      target_port: cdktf.listMapper(switchcontrollerTrafficsnifferTargetPortToTerraform, true)(this._targetPort.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      erspan_ip: {
        value: cdktf.stringToHclTerraform(this._erspanIp),
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
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_ip: {
        value: cdktf.listMapperHcl(switchcontrollerTrafficsnifferTargetIpToHclTerraform, true)(this._targetIp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerTrafficsnifferTargetIpList",
      },
      target_mac: {
        value: cdktf.listMapperHcl(switchcontrollerTrafficsnifferTargetMacToHclTerraform, true)(this._targetMac.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerTrafficsnifferTargetMacList",
      },
      target_port: {
        value: cdktf.listMapperHcl(switchcontrollerTrafficsnifferTargetPortToHclTerraform, true)(this._targetPort.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerTrafficsnifferTargetPortList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
