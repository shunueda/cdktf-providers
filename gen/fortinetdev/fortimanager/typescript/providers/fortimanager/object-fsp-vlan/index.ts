// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFspVlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#_dhcp_status ObjectFspVlan#_dhcp_status}
  */
  readonly dhcpStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#adom ObjectFspVlan#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#color ObjectFspVlan#color}
  */
  readonly color?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dynamic_sort_subtable ObjectFspVlan#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#id ObjectFspVlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#name ObjectFspVlan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#scopetype ObjectFspVlan#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vdom ObjectFspVlan#vdom}
  */
  readonly vdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vlanid ObjectFspVlan#vlanid}
  */
  readonly vlanid?: number;
  /**
  * dhcp_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp_server ObjectFspVlan#dhcp_server}
  */
  readonly dhcpServer?: ObjectFspVlanDhcpServer;
  /**
  * dynamic_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dynamic_mapping ObjectFspVlan#dynamic_mapping}
  */
  readonly dynamicMapping?: ObjectFspVlanDynamicMapping[] | cdktf.IResolvable;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#interface ObjectFspVlan#interface}
  */
  readonly interface?: ObjectFspVlanInterface;
}
export interface ObjectFspVlanDhcpServerExcludeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#end_ip ObjectFspVlan#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#id ObjectFspVlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#lease_time ObjectFspVlan#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#start_ip ObjectFspVlan#start_ip}
  */
  readonly startIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#uci_match ObjectFspVlan#uci_match}
  */
  readonly uciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#uci_string ObjectFspVlan#uci_string}
  */
  readonly uciString?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vci_match ObjectFspVlan#vci_match}
  */
  readonly vciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vci_string ObjectFspVlan#vci_string}
  */
  readonly vciString?: string[];
}

export function objectFspVlanDhcpServerExcludeRangeToTerraform(struct?: ObjectFspVlanDhcpServerExcludeRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ip: cdktf.stringToTerraform(struct!.endIp),
    id: cdktf.numberToTerraform(struct!.id),
    lease_time: cdktf.numberToTerraform(struct!.leaseTime),
    start_ip: cdktf.stringToTerraform(struct!.startIp),
    uci_match: cdktf.stringToTerraform(struct!.uciMatch),
    uci_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uciString),
    vci_match: cdktf.stringToTerraform(struct!.vciMatch),
    vci_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vciString),
  }
}


export function objectFspVlanDhcpServerExcludeRangeToHclTerraform(struct?: ObjectFspVlanDhcpServerExcludeRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_ip: {
      value: cdktf.stringToHclTerraform(struct!.endIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lease_time: {
      value: cdktf.numberToHclTerraform(struct!.leaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_ip: {
      value: cdktf.stringToHclTerraform(struct!.startIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uci_match: {
      value: cdktf.stringToHclTerraform(struct!.uciMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uci_string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uciString),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vci_match: {
      value: cdktf.stringToHclTerraform(struct!.vciMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vci_string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vciString),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanDhcpServerExcludeRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanDhcpServerExcludeRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIp = this._endIp;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._leaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTime = this._leaseTime;
    }
    if (this._startIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIp = this._startIp;
    }
    if (this._uciMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.uciMatch = this._uciMatch;
    }
    if (this._uciString !== undefined) {
      hasAnyValues = true;
      internalValueResult.uciString = this._uciString;
    }
    if (this._vciMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.vciMatch = this._vciMatch;
    }
    if (this._vciString !== undefined) {
      hasAnyValues = true;
      internalValueResult.vciString = this._vciString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanDhcpServerExcludeRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIp = undefined;
      this._id = undefined;
      this._leaseTime = undefined;
      this._startIp = undefined;
      this._uciMatch = undefined;
      this._uciString = undefined;
      this._vciMatch = undefined;
      this._vciString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIp = value.endIp;
      this._id = value.id;
      this._leaseTime = value.leaseTime;
      this._startIp = value.startIp;
      this._uciMatch = value.uciMatch;
      this._uciString = value.uciString;
      this._vciMatch = value.vciMatch;
      this._vciString = value.vciString;
    }
  }

  // end_ip - computed: true, optional: true, required: false
  private _endIp?: string; 
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }
  public set endIp(value: string) {
    this._endIp = value;
  }
  public resetEndIp() {
    this._endIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpInput() {
    return this._endIp;
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

  // lease_time - computed: false, optional: true, required: false
  private _leaseTime?: number; 
  public get leaseTime() {
    return this.getNumberAttribute('lease_time');
  }
  public set leaseTime(value: number) {
    this._leaseTime = value;
  }
  public resetLeaseTime() {
    this._leaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime;
  }

  // start_ip - computed: true, optional: true, required: false
  private _startIp?: string; 
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }
  public set startIp(value: string) {
    this._startIp = value;
  }
  public resetStartIp() {
    this._startIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpInput() {
    return this._startIp;
  }

  // uci_match - computed: true, optional: true, required: false
  private _uciMatch?: string; 
  public get uciMatch() {
    return this.getStringAttribute('uci_match');
  }
  public set uciMatch(value: string) {
    this._uciMatch = value;
  }
  public resetUciMatch() {
    this._uciMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uciMatchInput() {
    return this._uciMatch;
  }

  // uci_string - computed: true, optional: true, required: false
  private _uciString?: string[]; 
  public get uciString() {
    return cdktf.Fn.tolist(this.getListAttribute('uci_string'));
  }
  public set uciString(value: string[]) {
    this._uciString = value;
  }
  public resetUciString() {
    this._uciString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uciStringInput() {
    return this._uciString;
  }

  // vci_match - computed: true, optional: true, required: false
  private _vciMatch?: string; 
  public get vciMatch() {
    return this.getStringAttribute('vci_match');
  }
  public set vciMatch(value: string) {
    this._vciMatch = value;
  }
  public resetVciMatch() {
    this._vciMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciMatchInput() {
    return this._vciMatch;
  }

  // vci_string - computed: true, optional: true, required: false
  private _vciString?: string[]; 
  public get vciString() {
    return cdktf.Fn.tolist(this.getListAttribute('vci_string'));
  }
  public set vciString(value: string[]) {
    this._vciString = value;
  }
  public resetVciString() {
    this._vciString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciStringInput() {
    return this._vciString;
  }
}

export class ObjectFspVlanDhcpServerExcludeRangeList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanDhcpServerExcludeRange[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanDhcpServerExcludeRangeOutputReference {
    return new ObjectFspVlanDhcpServerExcludeRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanDhcpServerIpRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#end_ip ObjectFspVlan#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#id ObjectFspVlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#lease_time ObjectFspVlan#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#start_ip ObjectFspVlan#start_ip}
  */
  readonly startIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#uci_match ObjectFspVlan#uci_match}
  */
  readonly uciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#uci_string ObjectFspVlan#uci_string}
  */
  readonly uciString?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vci_match ObjectFspVlan#vci_match}
  */
  readonly vciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vci_string ObjectFspVlan#vci_string}
  */
  readonly vciString?: string[];
}

export function objectFspVlanDhcpServerIpRangeToTerraform(struct?: ObjectFspVlanDhcpServerIpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ip: cdktf.stringToTerraform(struct!.endIp),
    id: cdktf.numberToTerraform(struct!.id),
    lease_time: cdktf.numberToTerraform(struct!.leaseTime),
    start_ip: cdktf.stringToTerraform(struct!.startIp),
    uci_match: cdktf.stringToTerraform(struct!.uciMatch),
    uci_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uciString),
    vci_match: cdktf.stringToTerraform(struct!.vciMatch),
    vci_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vciString),
  }
}


export function objectFspVlanDhcpServerIpRangeToHclTerraform(struct?: ObjectFspVlanDhcpServerIpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_ip: {
      value: cdktf.stringToHclTerraform(struct!.endIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lease_time: {
      value: cdktf.numberToHclTerraform(struct!.leaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_ip: {
      value: cdktf.stringToHclTerraform(struct!.startIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uci_match: {
      value: cdktf.stringToHclTerraform(struct!.uciMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uci_string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uciString),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vci_match: {
      value: cdktf.stringToHclTerraform(struct!.vciMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vci_string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vciString),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanDhcpServerIpRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanDhcpServerIpRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIp = this._endIp;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._leaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTime = this._leaseTime;
    }
    if (this._startIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIp = this._startIp;
    }
    if (this._uciMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.uciMatch = this._uciMatch;
    }
    if (this._uciString !== undefined) {
      hasAnyValues = true;
      internalValueResult.uciString = this._uciString;
    }
    if (this._vciMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.vciMatch = this._vciMatch;
    }
    if (this._vciString !== undefined) {
      hasAnyValues = true;
      internalValueResult.vciString = this._vciString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanDhcpServerIpRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIp = undefined;
      this._id = undefined;
      this._leaseTime = undefined;
      this._startIp = undefined;
      this._uciMatch = undefined;
      this._uciString = undefined;
      this._vciMatch = undefined;
      this._vciString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIp = value.endIp;
      this._id = value.id;
      this._leaseTime = value.leaseTime;
      this._startIp = value.startIp;
      this._uciMatch = value.uciMatch;
      this._uciString = value.uciString;
      this._vciMatch = value.vciMatch;
      this._vciString = value.vciString;
    }
  }

  // end_ip - computed: true, optional: true, required: false
  private _endIp?: string; 
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }
  public set endIp(value: string) {
    this._endIp = value;
  }
  public resetEndIp() {
    this._endIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpInput() {
    return this._endIp;
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

  // lease_time - computed: false, optional: true, required: false
  private _leaseTime?: number; 
  public get leaseTime() {
    return this.getNumberAttribute('lease_time');
  }
  public set leaseTime(value: number) {
    this._leaseTime = value;
  }
  public resetLeaseTime() {
    this._leaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime;
  }

  // start_ip - computed: true, optional: true, required: false
  private _startIp?: string; 
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }
  public set startIp(value: string) {
    this._startIp = value;
  }
  public resetStartIp() {
    this._startIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpInput() {
    return this._startIp;
  }

  // uci_match - computed: true, optional: true, required: false
  private _uciMatch?: string; 
  public get uciMatch() {
    return this.getStringAttribute('uci_match');
  }
  public set uciMatch(value: string) {
    this._uciMatch = value;
  }
  public resetUciMatch() {
    this._uciMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uciMatchInput() {
    return this._uciMatch;
  }

  // uci_string - computed: true, optional: true, required: false
  private _uciString?: string[]; 
  public get uciString() {
    return cdktf.Fn.tolist(this.getListAttribute('uci_string'));
  }
  public set uciString(value: string[]) {
    this._uciString = value;
  }
  public resetUciString() {
    this._uciString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uciStringInput() {
    return this._uciString;
  }

  // vci_match - computed: true, optional: true, required: false
  private _vciMatch?: string; 
  public get vciMatch() {
    return this.getStringAttribute('vci_match');
  }
  public set vciMatch(value: string) {
    this._vciMatch = value;
  }
  public resetVciMatch() {
    this._vciMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciMatchInput() {
    return this._vciMatch;
  }

  // vci_string - computed: true, optional: true, required: false
  private _vciString?: string[]; 
  public get vciString() {
    return cdktf.Fn.tolist(this.getListAttribute('vci_string'));
  }
  public set vciString(value: string[]) {
    this._vciString = value;
  }
  public resetVciString() {
    this._vciString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciStringInput() {
    return this._vciString;
  }
}

export class ObjectFspVlanDhcpServerIpRangeList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanDhcpServerIpRange[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanDhcpServerIpRangeOutputReference {
    return new ObjectFspVlanDhcpServerIpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanDhcpServerOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#code ObjectFspVlan#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#id ObjectFspVlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip ObjectFspVlan#ip}
  */
  readonly ip?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#type ObjectFspVlan#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#uci_match ObjectFspVlan#uci_match}
  */
  readonly uciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#uci_string ObjectFspVlan#uci_string}
  */
  readonly uciString?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#value ObjectFspVlan#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vci_match ObjectFspVlan#vci_match}
  */
  readonly vciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vci_string ObjectFspVlan#vci_string}
  */
  readonly vciString?: string[];
}

export function objectFspVlanDhcpServerOptionsToTerraform(struct?: ObjectFspVlanDhcpServerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ip),
    type: cdktf.stringToTerraform(struct!.type),
    uci_match: cdktf.stringToTerraform(struct!.uciMatch),
    uci_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uciString),
    value: cdktf.stringToTerraform(struct!.value),
    vci_match: cdktf.stringToTerraform(struct!.vciMatch),
    vci_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vciString),
  }
}


export function objectFspVlanDhcpServerOptionsToHclTerraform(struct?: ObjectFspVlanDhcpServerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ip),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uci_match: {
      value: cdktf.stringToHclTerraform(struct!.uciMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uci_string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uciString),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vci_match: {
      value: cdktf.stringToHclTerraform(struct!.vciMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vci_string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vciString),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanDhcpServerOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanDhcpServerOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uciMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.uciMatch = this._uciMatch;
    }
    if (this._uciString !== undefined) {
      hasAnyValues = true;
      internalValueResult.uciString = this._uciString;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._vciMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.vciMatch = this._vciMatch;
    }
    if (this._vciString !== undefined) {
      hasAnyValues = true;
      internalValueResult.vciString = this._vciString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanDhcpServerOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._id = undefined;
      this._ip = undefined;
      this._type = undefined;
      this._uciMatch = undefined;
      this._uciString = undefined;
      this._value = undefined;
      this._vciMatch = undefined;
      this._vciString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._id = value.id;
      this._ip = value.ip;
      this._type = value.type;
      this._uciMatch = value.uciMatch;
      this._uciString = value.uciString;
      this._value = value.value;
      this._vciMatch = value.vciMatch;
      this._vciString = value.vciString;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

  // ip - computed: true, optional: true, required: false
  private _ip?: string[]; 
  public get ip() {
    return cdktf.Fn.tolist(this.getListAttribute('ip'));
  }
  public set ip(value: string[]) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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

  // uci_match - computed: true, optional: true, required: false
  private _uciMatch?: string; 
  public get uciMatch() {
    return this.getStringAttribute('uci_match');
  }
  public set uciMatch(value: string) {
    this._uciMatch = value;
  }
  public resetUciMatch() {
    this._uciMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uciMatchInput() {
    return this._uciMatch;
  }

  // uci_string - computed: true, optional: true, required: false
  private _uciString?: string[]; 
  public get uciString() {
    return cdktf.Fn.tolist(this.getListAttribute('uci_string'));
  }
  public set uciString(value: string[]) {
    this._uciString = value;
  }
  public resetUciString() {
    this._uciString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uciStringInput() {
    return this._uciString;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // vci_match - computed: true, optional: true, required: false
  private _vciMatch?: string; 
  public get vciMatch() {
    return this.getStringAttribute('vci_match');
  }
  public set vciMatch(value: string) {
    this._vciMatch = value;
  }
  public resetVciMatch() {
    this._vciMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciMatchInput() {
    return this._vciMatch;
  }

  // vci_string - computed: true, optional: true, required: false
  private _vciString?: string[]; 
  public get vciString() {
    return cdktf.Fn.tolist(this.getListAttribute('vci_string'));
  }
  public set vciString(value: string[]) {
    this._vciString = value;
  }
  public resetVciString() {
    this._vciString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciStringInput() {
    return this._vciString;
  }
}

export class ObjectFspVlanDhcpServerOptionsList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanDhcpServerOptions[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanDhcpServerOptionsOutputReference {
    return new ObjectFspVlanDhcpServerOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanDhcpServerReservedAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#action ObjectFspVlan#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#circuit_id ObjectFspVlan#circuit_id}
  */
  readonly circuitId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#circuit_id_type ObjectFspVlan#circuit_id_type}
  */
  readonly circuitIdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#description ObjectFspVlan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#id ObjectFspVlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip ObjectFspVlan#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#mac ObjectFspVlan#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#remote_id ObjectFspVlan#remote_id}
  */
  readonly remoteId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#remote_id_type ObjectFspVlan#remote_id_type}
  */
  readonly remoteIdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#type ObjectFspVlan#type}
  */
  readonly type?: string;
}

export function objectFspVlanDhcpServerReservedAddressToTerraform(struct?: ObjectFspVlanDhcpServerReservedAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    circuit_id: cdktf.stringToTerraform(struct!.circuitId),
    circuit_id_type: cdktf.stringToTerraform(struct!.circuitIdType),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
    mac: cdktf.stringToTerraform(struct!.mac),
    remote_id: cdktf.stringToTerraform(struct!.remoteId),
    remote_id_type: cdktf.stringToTerraform(struct!.remoteIdType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function objectFspVlanDhcpServerReservedAddressToHclTerraform(struct?: ObjectFspVlanDhcpServerReservedAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    circuit_id: {
      value: cdktf.stringToHclTerraform(struct!.circuitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    circuit_id_type: {
      value: cdktf.stringToHclTerraform(struct!.circuitIdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
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
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_id: {
      value: cdktf.stringToHclTerraform(struct!.remoteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_id_type: {
      value: cdktf.stringToHclTerraform(struct!.remoteIdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ObjectFspVlanDhcpServerReservedAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanDhcpServerReservedAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._circuitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.circuitId = this._circuitId;
    }
    if (this._circuitIdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.circuitIdType = this._circuitIdType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._remoteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteId = this._remoteId;
    }
    if (this._remoteIdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIdType = this._remoteIdType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanDhcpServerReservedAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._circuitId = undefined;
      this._circuitIdType = undefined;
      this._description = undefined;
      this._id = undefined;
      this._ip = undefined;
      this._mac = undefined;
      this._remoteId = undefined;
      this._remoteIdType = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._circuitId = value.circuitId;
      this._circuitIdType = value.circuitIdType;
      this._description = value.description;
      this._id = value.id;
      this._ip = value.ip;
      this._mac = value.mac;
      this._remoteId = value.remoteId;
      this._remoteIdType = value.remoteIdType;
      this._type = value.type;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // circuit_id - computed: false, optional: true, required: false
  private _circuitId?: string; 
  public get circuitId() {
    return this.getStringAttribute('circuit_id');
  }
  public set circuitId(value: string) {
    this._circuitId = value;
  }
  public resetCircuitId() {
    this._circuitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitIdInput() {
    return this._circuitId;
  }

  // circuit_id_type - computed: false, optional: true, required: false
  private _circuitIdType?: string; 
  public get circuitIdType() {
    return this.getStringAttribute('circuit_id_type');
  }
  public set circuitIdType(value: string) {
    this._circuitIdType = value;
  }
  public resetCircuitIdType() {
    this._circuitIdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitIdTypeInput() {
    return this._circuitIdType;
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

  // ip - computed: true, optional: true, required: false
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

  // mac - computed: true, optional: true, required: false
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

  // remote_id - computed: false, optional: true, required: false
  private _remoteId?: string; 
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }
  public set remoteId(value: string) {
    this._remoteId = value;
  }
  public resetRemoteId() {
    this._remoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdInput() {
    return this._remoteId;
  }

  // remote_id_type - computed: false, optional: true, required: false
  private _remoteIdType?: string; 
  public get remoteIdType() {
    return this.getStringAttribute('remote_id_type');
  }
  public set remoteIdType(value: string) {
    this._remoteIdType = value;
  }
  public resetRemoteIdType() {
    this._remoteIdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdTypeInput() {
    return this._remoteIdType;
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

export class ObjectFspVlanDhcpServerReservedAddressList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanDhcpServerReservedAddress[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanDhcpServerReservedAddressOutputReference {
    return new ObjectFspVlanDhcpServerReservedAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanDhcpServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#auto_configuration ObjectFspVlan#auto_configuration}
  */
  readonly autoConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#auto_managed_status ObjectFspVlan#auto_managed_status}
  */
  readonly autoManagedStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#conflicted_ip_timeout ObjectFspVlan#conflicted_ip_timeout}
  */
  readonly conflictedIpTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ddns_auth ObjectFspVlan#ddns_auth}
  */
  readonly ddnsAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ddns_key ObjectFspVlan#ddns_key}
  */
  readonly ddnsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ddns_keyname ObjectFspVlan#ddns_keyname}
  */
  readonly ddnsKeyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ddns_server_ip ObjectFspVlan#ddns_server_ip}
  */
  readonly ddnsServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ddns_ttl ObjectFspVlan#ddns_ttl}
  */
  readonly ddnsTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ddns_update ObjectFspVlan#ddns_update}
  */
  readonly ddnsUpdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ddns_update_override ObjectFspVlan#ddns_update_override}
  */
  readonly ddnsUpdateOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ddns_zone ObjectFspVlan#ddns_zone}
  */
  readonly ddnsZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#default_gateway ObjectFspVlan#default_gateway}
  */
  readonly defaultGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp_settings_from_fortiipam ObjectFspVlan#dhcp_settings_from_fortiipam}
  */
  readonly dhcpSettingsFromFortiipam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dns_server1 ObjectFspVlan#dns_server1}
  */
  readonly dnsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dns_server2 ObjectFspVlan#dns_server2}
  */
  readonly dnsServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dns_server3 ObjectFspVlan#dns_server3}
  */
  readonly dnsServer3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dns_server4 ObjectFspVlan#dns_server4}
  */
  readonly dnsServer4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dns_service ObjectFspVlan#dns_service}
  */
  readonly dnsService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#domain ObjectFspVlan#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#enable ObjectFspVlan#enable}
  */
  readonly enable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#filename ObjectFspVlan#filename}
  */
  readonly filename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#forticlient_on_net_status ObjectFspVlan#forticlient_on_net_status}
  */
  readonly forticlientOnNetStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#id ObjectFspVlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip_mode ObjectFspVlan#ip_mode}
  */
  readonly ipMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ipsec_lease_hold ObjectFspVlan#ipsec_lease_hold}
  */
  readonly ipsecLeaseHold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#lease_time ObjectFspVlan#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#mac_acl_default_action ObjectFspVlan#mac_acl_default_action}
  */
  readonly macAclDefaultAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#netmask ObjectFspVlan#netmask}
  */
  readonly netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#next_server ObjectFspVlan#next_server}
  */
  readonly nextServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ntp_server1 ObjectFspVlan#ntp_server1}
  */
  readonly ntpServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ntp_server2 ObjectFspVlan#ntp_server2}
  */
  readonly ntpServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ntp_server3 ObjectFspVlan#ntp_server3}
  */
  readonly ntpServer3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ntp_service ObjectFspVlan#ntp_service}
  */
  readonly ntpService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#option1 ObjectFspVlan#option1}
  */
  readonly option1?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#option2 ObjectFspVlan#option2}
  */
  readonly option2?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#option3 ObjectFspVlan#option3}
  */
  readonly option3?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#option4 ObjectFspVlan#option4}
  */
  readonly option4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#option5 ObjectFspVlan#option5}
  */
  readonly option5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#option6 ObjectFspVlan#option6}
  */
  readonly option6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#relay_agent ObjectFspVlan#relay_agent}
  */
  readonly relayAgent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#server_type ObjectFspVlan#server_type}
  */
  readonly serverType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#shared_subnet ObjectFspVlan#shared_subnet}
  */
  readonly sharedSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#status ObjectFspVlan#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#tftp_server ObjectFspVlan#tftp_server}
  */
  readonly tftpServer?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#timezone ObjectFspVlan#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#timezone_option ObjectFspVlan#timezone_option}
  */
  readonly timezoneOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vci_match ObjectFspVlan#vci_match}
  */
  readonly vciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vci_string ObjectFspVlan#vci_string}
  */
  readonly vciString?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wifi_ac1 ObjectFspVlan#wifi_ac1}
  */
  readonly wifiAc1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wifi_ac2 ObjectFspVlan#wifi_ac2}
  */
  readonly wifiAc2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wifi_ac3 ObjectFspVlan#wifi_ac3}
  */
  readonly wifiAc3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wifi_ac_service ObjectFspVlan#wifi_ac_service}
  */
  readonly wifiAcService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wins_server1 ObjectFspVlan#wins_server1}
  */
  readonly winsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wins_server2 ObjectFspVlan#wins_server2}
  */
  readonly winsServer2?: string;
  /**
  * exclude_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#exclude_range ObjectFspVlan#exclude_range}
  */
  readonly excludeRange?: ObjectFspVlanDhcpServerExcludeRange[] | cdktf.IResolvable;
  /**
  * ip_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip_range ObjectFspVlan#ip_range}
  */
  readonly ipRange?: ObjectFspVlanDhcpServerIpRange[] | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#options ObjectFspVlan#options}
  */
  readonly options?: ObjectFspVlanDhcpServerOptions[] | cdktf.IResolvable;
  /**
  * reserved_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#reserved_address ObjectFspVlan#reserved_address}
  */
  readonly reservedAddress?: ObjectFspVlanDhcpServerReservedAddress[] | cdktf.IResolvable;
}

export function objectFspVlanDhcpServerToTerraform(struct?: ObjectFspVlanDhcpServerOutputReference | ObjectFspVlanDhcpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_configuration: cdktf.stringToTerraform(struct!.autoConfiguration),
    auto_managed_status: cdktf.stringToTerraform(struct!.autoManagedStatus),
    conflicted_ip_timeout: cdktf.numberToTerraform(struct!.conflictedIpTimeout),
    ddns_auth: cdktf.stringToTerraform(struct!.ddnsAuth),
    ddns_key: cdktf.stringToTerraform(struct!.ddnsKey),
    ddns_keyname: cdktf.stringToTerraform(struct!.ddnsKeyname),
    ddns_server_ip: cdktf.stringToTerraform(struct!.ddnsServerIp),
    ddns_ttl: cdktf.numberToTerraform(struct!.ddnsTtl),
    ddns_update: cdktf.stringToTerraform(struct!.ddnsUpdate),
    ddns_update_override: cdktf.stringToTerraform(struct!.ddnsUpdateOverride),
    ddns_zone: cdktf.stringToTerraform(struct!.ddnsZone),
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    dhcp_settings_from_fortiipam: cdktf.stringToTerraform(struct!.dhcpSettingsFromFortiipam),
    dns_server1: cdktf.stringToTerraform(struct!.dnsServer1),
    dns_server2: cdktf.stringToTerraform(struct!.dnsServer2),
    dns_server3: cdktf.stringToTerraform(struct!.dnsServer3),
    dns_server4: cdktf.stringToTerraform(struct!.dnsServer4),
    dns_service: cdktf.stringToTerraform(struct!.dnsService),
    domain: cdktf.stringToTerraform(struct!.domain),
    enable: cdktf.stringToTerraform(struct!.enable),
    filename: cdktf.stringToTerraform(struct!.filename),
    forticlient_on_net_status: cdktf.stringToTerraform(struct!.forticlientOnNetStatus),
    id: cdktf.numberToTerraform(struct!.id),
    ip_mode: cdktf.stringToTerraform(struct!.ipMode),
    ipsec_lease_hold: cdktf.numberToTerraform(struct!.ipsecLeaseHold),
    lease_time: cdktf.numberToTerraform(struct!.leaseTime),
    mac_acl_default_action: cdktf.stringToTerraform(struct!.macAclDefaultAction),
    netmask: cdktf.stringToTerraform(struct!.netmask),
    next_server: cdktf.stringToTerraform(struct!.nextServer),
    ntp_server1: cdktf.stringToTerraform(struct!.ntpServer1),
    ntp_server2: cdktf.stringToTerraform(struct!.ntpServer2),
    ntp_server3: cdktf.stringToTerraform(struct!.ntpServer3),
    ntp_service: cdktf.stringToTerraform(struct!.ntpService),
    option1: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.option1),
    option2: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.option2),
    option3: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.option3),
    option4: cdktf.stringToTerraform(struct!.option4),
    option5: cdktf.stringToTerraform(struct!.option5),
    option6: cdktf.stringToTerraform(struct!.option6),
    relay_agent: cdktf.stringToTerraform(struct!.relayAgent),
    server_type: cdktf.stringToTerraform(struct!.serverType),
    shared_subnet: cdktf.stringToTerraform(struct!.sharedSubnet),
    status: cdktf.stringToTerraform(struct!.status),
    tftp_server: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tftpServer),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    timezone_option: cdktf.stringToTerraform(struct!.timezoneOption),
    vci_match: cdktf.stringToTerraform(struct!.vciMatch),
    vci_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vciString),
    wifi_ac1: cdktf.stringToTerraform(struct!.wifiAc1),
    wifi_ac2: cdktf.stringToTerraform(struct!.wifiAc2),
    wifi_ac3: cdktf.stringToTerraform(struct!.wifiAc3),
    wifi_ac_service: cdktf.stringToTerraform(struct!.wifiAcService),
    wins_server1: cdktf.stringToTerraform(struct!.winsServer1),
    wins_server2: cdktf.stringToTerraform(struct!.winsServer2),
    exclude_range: cdktf.listMapper(objectFspVlanDhcpServerExcludeRangeToTerraform, true)(struct!.excludeRange),
    ip_range: cdktf.listMapper(objectFspVlanDhcpServerIpRangeToTerraform, true)(struct!.ipRange),
    options: cdktf.listMapper(objectFspVlanDhcpServerOptionsToTerraform, true)(struct!.options),
    reserved_address: cdktf.listMapper(objectFspVlanDhcpServerReservedAddressToTerraform, true)(struct!.reservedAddress),
  }
}


export function objectFspVlanDhcpServerToHclTerraform(struct?: ObjectFspVlanDhcpServerOutputReference | ObjectFspVlanDhcpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_configuration: {
      value: cdktf.stringToHclTerraform(struct!.autoConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_managed_status: {
      value: cdktf.stringToHclTerraform(struct!.autoManagedStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conflicted_ip_timeout: {
      value: cdktf.numberToHclTerraform(struct!.conflictedIpTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddns_auth: {
      value: cdktf.stringToHclTerraform(struct!.ddnsAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_key: {
      value: cdktf.stringToHclTerraform(struct!.ddnsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_keyname: {
      value: cdktf.stringToHclTerraform(struct!.ddnsKeyname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_server_ip: {
      value: cdktf.stringToHclTerraform(struct!.ddnsServerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_ttl: {
      value: cdktf.numberToHclTerraform(struct!.ddnsTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddns_update: {
      value: cdktf.stringToHclTerraform(struct!.ddnsUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_update_override: {
      value: cdktf.stringToHclTerraform(struct!.ddnsUpdateOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_zone: {
      value: cdktf.stringToHclTerraform(struct!.ddnsZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_gateway: {
      value: cdktf.stringToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_settings_from_fortiipam: {
      value: cdktf.stringToHclTerraform(struct!.dhcpSettingsFromFortiipam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server1: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server2: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server3: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server4: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_service: {
      value: cdktf.stringToHclTerraform(struct!.dnsService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.stringToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_on_net_status: {
      value: cdktf.stringToHclTerraform(struct!.forticlientOnNetStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_mode: {
      value: cdktf.stringToHclTerraform(struct!.ipMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_lease_hold: {
      value: cdktf.numberToHclTerraform(struct!.ipsecLeaseHold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lease_time: {
      value: cdktf.numberToHclTerraform(struct!.leaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_acl_default_action: {
      value: cdktf.stringToHclTerraform(struct!.macAclDefaultAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_server: {
      value: cdktf.stringToHclTerraform(struct!.nextServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ntp_server1: {
      value: cdktf.stringToHclTerraform(struct!.ntpServer1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ntp_server2: {
      value: cdktf.stringToHclTerraform(struct!.ntpServer2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ntp_server3: {
      value: cdktf.stringToHclTerraform(struct!.ntpServer3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ntp_service: {
      value: cdktf.stringToHclTerraform(struct!.ntpService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option1: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.option1),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    option2: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.option2),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    option3: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.option3),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    option4: {
      value: cdktf.stringToHclTerraform(struct!.option4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option5: {
      value: cdktf.stringToHclTerraform(struct!.option5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option6: {
      value: cdktf.stringToHclTerraform(struct!.option6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relay_agent: {
      value: cdktf.stringToHclTerraform(struct!.relayAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_type: {
      value: cdktf.stringToHclTerraform(struct!.serverType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_subnet: {
      value: cdktf.stringToHclTerraform(struct!.sharedSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tftp_server: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tftpServer),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone_option: {
      value: cdktf.stringToHclTerraform(struct!.timezoneOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vci_match: {
      value: cdktf.stringToHclTerraform(struct!.vciMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vci_string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vciString),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    wifi_ac1: {
      value: cdktf.stringToHclTerraform(struct!.wifiAc1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wifi_ac2: {
      value: cdktf.stringToHclTerraform(struct!.wifiAc2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wifi_ac3: {
      value: cdktf.stringToHclTerraform(struct!.wifiAc3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wifi_ac_service: {
      value: cdktf.stringToHclTerraform(struct!.wifiAcService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wins_server1: {
      value: cdktf.stringToHclTerraform(struct!.winsServer1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wins_server2: {
      value: cdktf.stringToHclTerraform(struct!.winsServer2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_range: {
      value: cdktf.listMapperHcl(objectFspVlanDhcpServerExcludeRangeToHclTerraform, true)(struct!.excludeRange),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanDhcpServerExcludeRangeList",
    },
    ip_range: {
      value: cdktf.listMapperHcl(objectFspVlanDhcpServerIpRangeToHclTerraform, true)(struct!.ipRange),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanDhcpServerIpRangeList",
    },
    options: {
      value: cdktf.listMapperHcl(objectFspVlanDhcpServerOptionsToHclTerraform, true)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanDhcpServerOptionsList",
    },
    reserved_address: {
      value: cdktf.listMapperHcl(objectFspVlanDhcpServerReservedAddressToHclTerraform, true)(struct!.reservedAddress),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanDhcpServerReservedAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanDhcpServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFspVlanDhcpServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoConfiguration = this._autoConfiguration;
    }
    if (this._autoManagedStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoManagedStatus = this._autoManagedStatus;
    }
    if (this._conflictedIpTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.conflictedIpTimeout = this._conflictedIpTimeout;
    }
    if (this._ddnsAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsAuth = this._ddnsAuth;
    }
    if (this._ddnsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsKey = this._ddnsKey;
    }
    if (this._ddnsKeyname !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsKeyname = this._ddnsKeyname;
    }
    if (this._ddnsServerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsServerIp = this._ddnsServerIp;
    }
    if (this._ddnsTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsTtl = this._ddnsTtl;
    }
    if (this._ddnsUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsUpdate = this._ddnsUpdate;
    }
    if (this._ddnsUpdateOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsUpdateOverride = this._ddnsUpdateOverride;
    }
    if (this._ddnsZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsZone = this._ddnsZone;
    }
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._dhcpSettingsFromFortiipam !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpSettingsFromFortiipam = this._dhcpSettingsFromFortiipam;
    }
    if (this._dnsServer1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer1 = this._dnsServer1;
    }
    if (this._dnsServer2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer2 = this._dnsServer2;
    }
    if (this._dnsServer3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer3 = this._dnsServer3;
    }
    if (this._dnsServer4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer4 = this._dnsServer4;
    }
    if (this._dnsService !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsService = this._dnsService;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    if (this._forticlientOnNetStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientOnNetStatus = this._forticlientOnNetStatus;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMode = this._ipMode;
    }
    if (this._ipsecLeaseHold !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecLeaseHold = this._ipsecLeaseHold;
    }
    if (this._leaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTime = this._leaseTime;
    }
    if (this._macAclDefaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAclDefaultAction = this._macAclDefaultAction;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    if (this._nextServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextServer = this._nextServer;
    }
    if (this._ntpServer1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpServer1 = this._ntpServer1;
    }
    if (this._ntpServer2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpServer2 = this._ntpServer2;
    }
    if (this._ntpServer3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpServer3 = this._ntpServer3;
    }
    if (this._ntpService !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpService = this._ntpService;
    }
    if (this._option1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.option1 = this._option1;
    }
    if (this._option2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.option2 = this._option2;
    }
    if (this._option3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.option3 = this._option3;
    }
    if (this._option4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.option4 = this._option4;
    }
    if (this._option5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.option5 = this._option5;
    }
    if (this._option6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.option6 = this._option6;
    }
    if (this._relayAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.relayAgent = this._relayAgent;
    }
    if (this._serverType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverType = this._serverType;
    }
    if (this._sharedSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedSubnet = this._sharedSubnet;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tftpServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.tftpServer = this._tftpServer;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._timezoneOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezoneOption = this._timezoneOption;
    }
    if (this._vciMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.vciMatch = this._vciMatch;
    }
    if (this._vciString !== undefined) {
      hasAnyValues = true;
      internalValueResult.vciString = this._vciString;
    }
    if (this._wifiAc1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiAc1 = this._wifiAc1;
    }
    if (this._wifiAc2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiAc2 = this._wifiAc2;
    }
    if (this._wifiAc3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiAc3 = this._wifiAc3;
    }
    if (this._wifiAcService !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiAcService = this._wifiAcService;
    }
    if (this._winsServer1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.winsServer1 = this._winsServer1;
    }
    if (this._winsServer2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.winsServer2 = this._winsServer2;
    }
    if (this._excludeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeRange = this._excludeRange?.internalValue;
    }
    if (this._ipRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRange = this._ipRange?.internalValue;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._reservedAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedAddress = this._reservedAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanDhcpServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoConfiguration = undefined;
      this._autoManagedStatus = undefined;
      this._conflictedIpTimeout = undefined;
      this._ddnsAuth = undefined;
      this._ddnsKey = undefined;
      this._ddnsKeyname = undefined;
      this._ddnsServerIp = undefined;
      this._ddnsTtl = undefined;
      this._ddnsUpdate = undefined;
      this._ddnsUpdateOverride = undefined;
      this._ddnsZone = undefined;
      this._defaultGateway = undefined;
      this._dhcpSettingsFromFortiipam = undefined;
      this._dnsServer1 = undefined;
      this._dnsServer2 = undefined;
      this._dnsServer3 = undefined;
      this._dnsServer4 = undefined;
      this._dnsService = undefined;
      this._domain = undefined;
      this._enable = undefined;
      this._filename = undefined;
      this._forticlientOnNetStatus = undefined;
      this._id = undefined;
      this._ipMode = undefined;
      this._ipsecLeaseHold = undefined;
      this._leaseTime = undefined;
      this._macAclDefaultAction = undefined;
      this._netmask = undefined;
      this._nextServer = undefined;
      this._ntpServer1 = undefined;
      this._ntpServer2 = undefined;
      this._ntpServer3 = undefined;
      this._ntpService = undefined;
      this._option1 = undefined;
      this._option2 = undefined;
      this._option3 = undefined;
      this._option4 = undefined;
      this._option5 = undefined;
      this._option6 = undefined;
      this._relayAgent = undefined;
      this._serverType = undefined;
      this._sharedSubnet = undefined;
      this._status = undefined;
      this._tftpServer = undefined;
      this._timezone = undefined;
      this._timezoneOption = undefined;
      this._vciMatch = undefined;
      this._vciString = undefined;
      this._wifiAc1 = undefined;
      this._wifiAc2 = undefined;
      this._wifiAc3 = undefined;
      this._wifiAcService = undefined;
      this._winsServer1 = undefined;
      this._winsServer2 = undefined;
      this._excludeRange.internalValue = undefined;
      this._ipRange.internalValue = undefined;
      this._options.internalValue = undefined;
      this._reservedAddress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoConfiguration = value.autoConfiguration;
      this._autoManagedStatus = value.autoManagedStatus;
      this._conflictedIpTimeout = value.conflictedIpTimeout;
      this._ddnsAuth = value.ddnsAuth;
      this._ddnsKey = value.ddnsKey;
      this._ddnsKeyname = value.ddnsKeyname;
      this._ddnsServerIp = value.ddnsServerIp;
      this._ddnsTtl = value.ddnsTtl;
      this._ddnsUpdate = value.ddnsUpdate;
      this._ddnsUpdateOverride = value.ddnsUpdateOverride;
      this._ddnsZone = value.ddnsZone;
      this._defaultGateway = value.defaultGateway;
      this._dhcpSettingsFromFortiipam = value.dhcpSettingsFromFortiipam;
      this._dnsServer1 = value.dnsServer1;
      this._dnsServer2 = value.dnsServer2;
      this._dnsServer3 = value.dnsServer3;
      this._dnsServer4 = value.dnsServer4;
      this._dnsService = value.dnsService;
      this._domain = value.domain;
      this._enable = value.enable;
      this._filename = value.filename;
      this._forticlientOnNetStatus = value.forticlientOnNetStatus;
      this._id = value.id;
      this._ipMode = value.ipMode;
      this._ipsecLeaseHold = value.ipsecLeaseHold;
      this._leaseTime = value.leaseTime;
      this._macAclDefaultAction = value.macAclDefaultAction;
      this._netmask = value.netmask;
      this._nextServer = value.nextServer;
      this._ntpServer1 = value.ntpServer1;
      this._ntpServer2 = value.ntpServer2;
      this._ntpServer3 = value.ntpServer3;
      this._ntpService = value.ntpService;
      this._option1 = value.option1;
      this._option2 = value.option2;
      this._option3 = value.option3;
      this._option4 = value.option4;
      this._option5 = value.option5;
      this._option6 = value.option6;
      this._relayAgent = value.relayAgent;
      this._serverType = value.serverType;
      this._sharedSubnet = value.sharedSubnet;
      this._status = value.status;
      this._tftpServer = value.tftpServer;
      this._timezone = value.timezone;
      this._timezoneOption = value.timezoneOption;
      this._vciMatch = value.vciMatch;
      this._vciString = value.vciString;
      this._wifiAc1 = value.wifiAc1;
      this._wifiAc2 = value.wifiAc2;
      this._wifiAc3 = value.wifiAc3;
      this._wifiAcService = value.wifiAcService;
      this._winsServer1 = value.winsServer1;
      this._winsServer2 = value.winsServer2;
      this._excludeRange.internalValue = value.excludeRange;
      this._ipRange.internalValue = value.ipRange;
      this._options.internalValue = value.options;
      this._reservedAddress.internalValue = value.reservedAddress;
    }
  }

  // auto_configuration - computed: true, optional: true, required: false
  private _autoConfiguration?: string; 
  public get autoConfiguration() {
    return this.getStringAttribute('auto_configuration');
  }
  public set autoConfiguration(value: string) {
    this._autoConfiguration = value;
  }
  public resetAutoConfiguration() {
    this._autoConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoConfigurationInput() {
    return this._autoConfiguration;
  }

  // auto_managed_status - computed: true, optional: true, required: false
  private _autoManagedStatus?: string; 
  public get autoManagedStatus() {
    return this.getStringAttribute('auto_managed_status');
  }
  public set autoManagedStatus(value: string) {
    this._autoManagedStatus = value;
  }
  public resetAutoManagedStatus() {
    this._autoManagedStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoManagedStatusInput() {
    return this._autoManagedStatus;
  }

  // conflicted_ip_timeout - computed: true, optional: true, required: false
  private _conflictedIpTimeout?: number; 
  public get conflictedIpTimeout() {
    return this.getNumberAttribute('conflicted_ip_timeout');
  }
  public set conflictedIpTimeout(value: number) {
    this._conflictedIpTimeout = value;
  }
  public resetConflictedIpTimeout() {
    this._conflictedIpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictedIpTimeoutInput() {
    return this._conflictedIpTimeout;
  }

  // ddns_auth - computed: true, optional: true, required: false
  private _ddnsAuth?: string; 
  public get ddnsAuth() {
    return this.getStringAttribute('ddns_auth');
  }
  public set ddnsAuth(value: string) {
    this._ddnsAuth = value;
  }
  public resetDdnsAuth() {
    this._ddnsAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsAuthInput() {
    return this._ddnsAuth;
  }

  // ddns_key - computed: false, optional: true, required: false
  private _ddnsKey?: string; 
  public get ddnsKey() {
    return this.getStringAttribute('ddns_key');
  }
  public set ddnsKey(value: string) {
    this._ddnsKey = value;
  }
  public resetDdnsKey() {
    this._ddnsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsKeyInput() {
    return this._ddnsKey;
  }

  // ddns_keyname - computed: false, optional: true, required: false
  private _ddnsKeyname?: string; 
  public get ddnsKeyname() {
    return this.getStringAttribute('ddns_keyname');
  }
  public set ddnsKeyname(value: string) {
    this._ddnsKeyname = value;
  }
  public resetDdnsKeyname() {
    this._ddnsKeyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsKeynameInput() {
    return this._ddnsKeyname;
  }

  // ddns_server_ip - computed: true, optional: true, required: false
  private _ddnsServerIp?: string; 
  public get ddnsServerIp() {
    return this.getStringAttribute('ddns_server_ip');
  }
  public set ddnsServerIp(value: string) {
    this._ddnsServerIp = value;
  }
  public resetDdnsServerIp() {
    this._ddnsServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsServerIpInput() {
    return this._ddnsServerIp;
  }

  // ddns_ttl - computed: true, optional: true, required: false
  private _ddnsTtl?: number; 
  public get ddnsTtl() {
    return this.getNumberAttribute('ddns_ttl');
  }
  public set ddnsTtl(value: number) {
    this._ddnsTtl = value;
  }
  public resetDdnsTtl() {
    this._ddnsTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsTtlInput() {
    return this._ddnsTtl;
  }

  // ddns_update - computed: true, optional: true, required: false
  private _ddnsUpdate?: string; 
  public get ddnsUpdate() {
    return this.getStringAttribute('ddns_update');
  }
  public set ddnsUpdate(value: string) {
    this._ddnsUpdate = value;
  }
  public resetDdnsUpdate() {
    this._ddnsUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUpdateInput() {
    return this._ddnsUpdate;
  }

  // ddns_update_override - computed: true, optional: true, required: false
  private _ddnsUpdateOverride?: string; 
  public get ddnsUpdateOverride() {
    return this.getStringAttribute('ddns_update_override');
  }
  public set ddnsUpdateOverride(value: string) {
    this._ddnsUpdateOverride = value;
  }
  public resetDdnsUpdateOverride() {
    this._ddnsUpdateOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUpdateOverrideInput() {
    return this._ddnsUpdateOverride;
  }

  // ddns_zone - computed: false, optional: true, required: false
  private _ddnsZone?: string; 
  public get ddnsZone() {
    return this.getStringAttribute('ddns_zone');
  }
  public set ddnsZone(value: string) {
    this._ddnsZone = value;
  }
  public resetDdnsZone() {
    this._ddnsZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsZoneInput() {
    return this._ddnsZone;
  }

  // default_gateway - computed: true, optional: true, required: false
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // dhcp_settings_from_fortiipam - computed: true, optional: true, required: false
  private _dhcpSettingsFromFortiipam?: string; 
  public get dhcpSettingsFromFortiipam() {
    return this.getStringAttribute('dhcp_settings_from_fortiipam');
  }
  public set dhcpSettingsFromFortiipam(value: string) {
    this._dhcpSettingsFromFortiipam = value;
  }
  public resetDhcpSettingsFromFortiipam() {
    this._dhcpSettingsFromFortiipam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSettingsFromFortiipamInput() {
    return this._dhcpSettingsFromFortiipam;
  }

  // dns_server1 - computed: true, optional: true, required: false
  private _dnsServer1?: string; 
  public get dnsServer1() {
    return this.getStringAttribute('dns_server1');
  }
  public set dnsServer1(value: string) {
    this._dnsServer1 = value;
  }
  public resetDnsServer1() {
    this._dnsServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServer1Input() {
    return this._dnsServer1;
  }

  // dns_server2 - computed: true, optional: true, required: false
  private _dnsServer2?: string; 
  public get dnsServer2() {
    return this.getStringAttribute('dns_server2');
  }
  public set dnsServer2(value: string) {
    this._dnsServer2 = value;
  }
  public resetDnsServer2() {
    this._dnsServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServer2Input() {
    return this._dnsServer2;
  }

  // dns_server3 - computed: true, optional: true, required: false
  private _dnsServer3?: string; 
  public get dnsServer3() {
    return this.getStringAttribute('dns_server3');
  }
  public set dnsServer3(value: string) {
    this._dnsServer3 = value;
  }
  public resetDnsServer3() {
    this._dnsServer3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServer3Input() {
    return this._dnsServer3;
  }

  // dns_server4 - computed: true, optional: true, required: false
  private _dnsServer4?: string; 
  public get dnsServer4() {
    return this.getStringAttribute('dns_server4');
  }
  public set dnsServer4(value: string) {
    this._dnsServer4 = value;
  }
  public resetDnsServer4() {
    this._dnsServer4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServer4Input() {
    return this._dnsServer4;
  }

  // dns_service - computed: true, optional: true, required: false
  private _dnsService?: string; 
  public get dnsService() {
    return this.getStringAttribute('dns_service');
  }
  public set dnsService(value: string) {
    this._dnsService = value;
  }
  public resetDnsService() {
    this._dnsService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServiceInput() {
    return this._dnsService;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // forticlient_on_net_status - computed: true, optional: true, required: false
  private _forticlientOnNetStatus?: string; 
  public get forticlientOnNetStatus() {
    return this.getStringAttribute('forticlient_on_net_status');
  }
  public set forticlientOnNetStatus(value: string) {
    this._forticlientOnNetStatus = value;
  }
  public resetForticlientOnNetStatus() {
    this._forticlientOnNetStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientOnNetStatusInput() {
    return this._forticlientOnNetStatus;
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

  // ip_mode - computed: false, optional: true, required: false
  private _ipMode?: string; 
  public get ipMode() {
    return this.getStringAttribute('ip_mode');
  }
  public set ipMode(value: string) {
    this._ipMode = value;
  }
  public resetIpMode() {
    this._ipMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipModeInput() {
    return this._ipMode;
  }

  // ipsec_lease_hold - computed: false, optional: true, required: false
  private _ipsecLeaseHold?: number; 
  public get ipsecLeaseHold() {
    return this.getNumberAttribute('ipsec_lease_hold');
  }
  public set ipsecLeaseHold(value: number) {
    this._ipsecLeaseHold = value;
  }
  public resetIpsecLeaseHold() {
    this._ipsecLeaseHold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecLeaseHoldInput() {
    return this._ipsecLeaseHold;
  }

  // lease_time - computed: true, optional: true, required: false
  private _leaseTime?: number; 
  public get leaseTime() {
    return this.getNumberAttribute('lease_time');
  }
  public set leaseTime(value: number) {
    this._leaseTime = value;
  }
  public resetLeaseTime() {
    this._leaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime;
  }

  // mac_acl_default_action - computed: true, optional: true, required: false
  private _macAclDefaultAction?: string; 
  public get macAclDefaultAction() {
    return this.getStringAttribute('mac_acl_default_action');
  }
  public set macAclDefaultAction(value: string) {
    this._macAclDefaultAction = value;
  }
  public resetMacAclDefaultAction() {
    this._macAclDefaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAclDefaultActionInput() {
    return this._macAclDefaultAction;
  }

  // netmask - computed: true, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // next_server - computed: true, optional: true, required: false
  private _nextServer?: string; 
  public get nextServer() {
    return this.getStringAttribute('next_server');
  }
  public set nextServer(value: string) {
    this._nextServer = value;
  }
  public resetNextServer() {
    this._nextServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextServerInput() {
    return this._nextServer;
  }

  // ntp_server1 - computed: true, optional: true, required: false
  private _ntpServer1?: string; 
  public get ntpServer1() {
    return this.getStringAttribute('ntp_server1');
  }
  public set ntpServer1(value: string) {
    this._ntpServer1 = value;
  }
  public resetNtpServer1() {
    this._ntpServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServer1Input() {
    return this._ntpServer1;
  }

  // ntp_server2 - computed: true, optional: true, required: false
  private _ntpServer2?: string; 
  public get ntpServer2() {
    return this.getStringAttribute('ntp_server2');
  }
  public set ntpServer2(value: string) {
    this._ntpServer2 = value;
  }
  public resetNtpServer2() {
    this._ntpServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServer2Input() {
    return this._ntpServer2;
  }

  // ntp_server3 - computed: true, optional: true, required: false
  private _ntpServer3?: string; 
  public get ntpServer3() {
    return this.getStringAttribute('ntp_server3');
  }
  public set ntpServer3(value: string) {
    this._ntpServer3 = value;
  }
  public resetNtpServer3() {
    this._ntpServer3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServer3Input() {
    return this._ntpServer3;
  }

  // ntp_service - computed: true, optional: true, required: false
  private _ntpService?: string; 
  public get ntpService() {
    return this.getStringAttribute('ntp_service');
  }
  public set ntpService(value: string) {
    this._ntpService = value;
  }
  public resetNtpService() {
    this._ntpService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServiceInput() {
    return this._ntpService;
  }

  // option1 - computed: true, optional: true, required: false
  private _option1?: string[]; 
  public get option1() {
    return cdktf.Fn.tolist(this.getListAttribute('option1'));
  }
  public set option1(value: string[]) {
    this._option1 = value;
  }
  public resetOption1() {
    this._option1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get option1Input() {
    return this._option1;
  }

  // option2 - computed: true, optional: true, required: false
  private _option2?: string[]; 
  public get option2() {
    return cdktf.Fn.tolist(this.getListAttribute('option2'));
  }
  public set option2(value: string[]) {
    this._option2 = value;
  }
  public resetOption2() {
    this._option2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get option2Input() {
    return this._option2;
  }

  // option3 - computed: true, optional: true, required: false
  private _option3?: string[]; 
  public get option3() {
    return cdktf.Fn.tolist(this.getListAttribute('option3'));
  }
  public set option3(value: string[]) {
    this._option3 = value;
  }
  public resetOption3() {
    this._option3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get option3Input() {
    return this._option3;
  }

  // option4 - computed: false, optional: true, required: false
  private _option4?: string; 
  public get option4() {
    return this.getStringAttribute('option4');
  }
  public set option4(value: string) {
    this._option4 = value;
  }
  public resetOption4() {
    this._option4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get option4Input() {
    return this._option4;
  }

  // option5 - computed: false, optional: true, required: false
  private _option5?: string; 
  public get option5() {
    return this.getStringAttribute('option5');
  }
  public set option5(value: string) {
    this._option5 = value;
  }
  public resetOption5() {
    this._option5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get option5Input() {
    return this._option5;
  }

  // option6 - computed: false, optional: true, required: false
  private _option6?: string; 
  public get option6() {
    return this.getStringAttribute('option6');
  }
  public set option6(value: string) {
    this._option6 = value;
  }
  public resetOption6() {
    this._option6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get option6Input() {
    return this._option6;
  }

  // relay_agent - computed: true, optional: true, required: false
  private _relayAgent?: string; 
  public get relayAgent() {
    return this.getStringAttribute('relay_agent');
  }
  public set relayAgent(value: string) {
    this._relayAgent = value;
  }
  public resetRelayAgent() {
    this._relayAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayAgentInput() {
    return this._relayAgent;
  }

  // server_type - computed: true, optional: true, required: false
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  public resetServerType() {
    this._serverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // shared_subnet - computed: true, optional: true, required: false
  private _sharedSubnet?: string; 
  public get sharedSubnet() {
    return this.getStringAttribute('shared_subnet');
  }
  public set sharedSubnet(value: string) {
    this._sharedSubnet = value;
  }
  public resetSharedSubnet() {
    this._sharedSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSubnetInput() {
    return this._sharedSubnet;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tftp_server - computed: true, optional: true, required: false
  private _tftpServer?: string[]; 
  public get tftpServer() {
    return cdktf.Fn.tolist(this.getListAttribute('tftp_server'));
  }
  public set tftpServer(value: string[]) {
    this._tftpServer = value;
  }
  public resetTftpServer() {
    this._tftpServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tftpServerInput() {
    return this._tftpServer;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // timezone_option - computed: true, optional: true, required: false
  private _timezoneOption?: string; 
  public get timezoneOption() {
    return this.getStringAttribute('timezone_option');
  }
  public set timezoneOption(value: string) {
    this._timezoneOption = value;
  }
  public resetTimezoneOption() {
    this._timezoneOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneOptionInput() {
    return this._timezoneOption;
  }

  // vci_match - computed: true, optional: true, required: false
  private _vciMatch?: string; 
  public get vciMatch() {
    return this.getStringAttribute('vci_match');
  }
  public set vciMatch(value: string) {
    this._vciMatch = value;
  }
  public resetVciMatch() {
    this._vciMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciMatchInput() {
    return this._vciMatch;
  }

  // vci_string - computed: true, optional: true, required: false
  private _vciString?: string[]; 
  public get vciString() {
    return cdktf.Fn.tolist(this.getListAttribute('vci_string'));
  }
  public set vciString(value: string[]) {
    this._vciString = value;
  }
  public resetVciString() {
    this._vciString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciStringInput() {
    return this._vciString;
  }

  // wifi_ac1 - computed: true, optional: true, required: false
  private _wifiAc1?: string; 
  public get wifiAc1() {
    return this.getStringAttribute('wifi_ac1');
  }
  public set wifiAc1(value: string) {
    this._wifiAc1 = value;
  }
  public resetWifiAc1() {
    this._wifiAc1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiAc1Input() {
    return this._wifiAc1;
  }

  // wifi_ac2 - computed: true, optional: true, required: false
  private _wifiAc2?: string; 
  public get wifiAc2() {
    return this.getStringAttribute('wifi_ac2');
  }
  public set wifiAc2(value: string) {
    this._wifiAc2 = value;
  }
  public resetWifiAc2() {
    this._wifiAc2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiAc2Input() {
    return this._wifiAc2;
  }

  // wifi_ac3 - computed: true, optional: true, required: false
  private _wifiAc3?: string; 
  public get wifiAc3() {
    return this.getStringAttribute('wifi_ac3');
  }
  public set wifiAc3(value: string) {
    this._wifiAc3 = value;
  }
  public resetWifiAc3() {
    this._wifiAc3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiAc3Input() {
    return this._wifiAc3;
  }

  // wifi_ac_service - computed: true, optional: true, required: false
  private _wifiAcService?: string; 
  public get wifiAcService() {
    return this.getStringAttribute('wifi_ac_service');
  }
  public set wifiAcService(value: string) {
    this._wifiAcService = value;
  }
  public resetWifiAcService() {
    this._wifiAcService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiAcServiceInput() {
    return this._wifiAcService;
  }

  // wins_server1 - computed: true, optional: true, required: false
  private _winsServer1?: string; 
  public get winsServer1() {
    return this.getStringAttribute('wins_server1');
  }
  public set winsServer1(value: string) {
    this._winsServer1 = value;
  }
  public resetWinsServer1() {
    this._winsServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winsServer1Input() {
    return this._winsServer1;
  }

  // wins_server2 - computed: true, optional: true, required: false
  private _winsServer2?: string; 
  public get winsServer2() {
    return this.getStringAttribute('wins_server2');
  }
  public set winsServer2(value: string) {
    this._winsServer2 = value;
  }
  public resetWinsServer2() {
    this._winsServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winsServer2Input() {
    return this._winsServer2;
  }

  // exclude_range - computed: false, optional: true, required: false
  private _excludeRange = new ObjectFspVlanDhcpServerExcludeRangeList(this, "exclude_range", false);
  public get excludeRange() {
    return this._excludeRange;
  }
  public putExcludeRange(value: ObjectFspVlanDhcpServerExcludeRange[] | cdktf.IResolvable) {
    this._excludeRange.internalValue = value;
  }
  public resetExcludeRange() {
    this._excludeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeRangeInput() {
    return this._excludeRange.internalValue;
  }

  // ip_range - computed: false, optional: true, required: false
  private _ipRange = new ObjectFspVlanDhcpServerIpRangeList(this, "ip_range", false);
  public get ipRange() {
    return this._ipRange;
  }
  public putIpRange(value: ObjectFspVlanDhcpServerIpRange[] | cdktf.IResolvable) {
    this._ipRange.internalValue = value;
  }
  public resetIpRange() {
    this._ipRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new ObjectFspVlanDhcpServerOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: ObjectFspVlanDhcpServerOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // reserved_address - computed: false, optional: true, required: false
  private _reservedAddress = new ObjectFspVlanDhcpServerReservedAddressList(this, "reserved_address", false);
  public get reservedAddress() {
    return this._reservedAddress;
  }
  public putReservedAddress(value: ObjectFspVlanDhcpServerReservedAddress[] | cdktf.IResolvable) {
    this._reservedAddress.internalValue = value;
  }
  public resetReservedAddress() {
    this._reservedAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedAddressInput() {
    return this._reservedAddress.internalValue;
  }
}
export interface ObjectFspVlanDynamicMappingScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#name ObjectFspVlan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vdom ObjectFspVlan#vdom}
  */
  readonly vdom?: string;
}

export function objectFspVlanDynamicMappingScopeToTerraform(struct?: ObjectFspVlanDynamicMappingScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vdom: cdktf.stringToTerraform(struct!.vdom),
  }
}


export function objectFspVlanDynamicMappingScopeToHclTerraform(struct?: ObjectFspVlanDynamicMappingScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vdom: {
      value: cdktf.stringToHclTerraform(struct!.vdom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanDynamicMappingScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanDynamicMappingScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vdom !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdom = this._vdom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanDynamicMappingScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._vdom = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._vdom = value.vdom;
    }
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

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }
}

export class ObjectFspVlanDynamicMappingScopeList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanDynamicMappingScope[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanDynamicMappingScopeOutputReference {
    return new ObjectFspVlanDynamicMappingScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanDynamicMappingDhcpServerExcludeRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#end_ip ObjectFspVlan#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#id ObjectFspVlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#lease_time ObjectFspVlan#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#start_ip ObjectFspVlan#start_ip}
  */
  readonly startIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#uci_match ObjectFspVlan#uci_match}
  */
  readonly uciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#uci_string ObjectFspVlan#uci_string}
  */
  readonly uciString?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vci_match ObjectFspVlan#vci_match}
  */
  readonly vciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vci_string ObjectFspVlan#vci_string}
  */
  readonly vciString?: string[];
}

export function objectFspVlanDynamicMappingDhcpServerExcludeRangeToTerraform(struct?: ObjectFspVlanDynamicMappingDhcpServerExcludeRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ip: cdktf.stringToTerraform(struct!.endIp),
    id: cdktf.numberToTerraform(struct!.id),
    lease_time: cdktf.numberToTerraform(struct!.leaseTime),
    start_ip: cdktf.stringToTerraform(struct!.startIp),
    uci_match: cdktf.stringToTerraform(struct!.uciMatch),
    uci_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uciString),
    vci_match: cdktf.stringToTerraform(struct!.vciMatch),
    vci_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vciString),
  }
}


export function objectFspVlanDynamicMappingDhcpServerExcludeRangeToHclTerraform(struct?: ObjectFspVlanDynamicMappingDhcpServerExcludeRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_ip: {
      value: cdktf.stringToHclTerraform(struct!.endIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lease_time: {
      value: cdktf.numberToHclTerraform(struct!.leaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_ip: {
      value: cdktf.stringToHclTerraform(struct!.startIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uci_match: {
      value: cdktf.stringToHclTerraform(struct!.uciMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uci_string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uciString),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vci_match: {
      value: cdktf.stringToHclTerraform(struct!.vciMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vci_string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vciString),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanDynamicMappingDhcpServerExcludeRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanDynamicMappingDhcpServerExcludeRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIp = this._endIp;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._leaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTime = this._leaseTime;
    }
    if (this._startIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIp = this._startIp;
    }
    if (this._uciMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.uciMatch = this._uciMatch;
    }
    if (this._uciString !== undefined) {
      hasAnyValues = true;
      internalValueResult.uciString = this._uciString;
    }
    if (this._vciMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.vciMatch = this._vciMatch;
    }
    if (this._vciString !== undefined) {
      hasAnyValues = true;
      internalValueResult.vciString = this._vciString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanDynamicMappingDhcpServerExcludeRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIp = undefined;
      this._id = undefined;
      this._leaseTime = undefined;
      this._startIp = undefined;
      this._uciMatch = undefined;
      this._uciString = undefined;
      this._vciMatch = undefined;
      this._vciString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIp = value.endIp;
      this._id = value.id;
      this._leaseTime = value.leaseTime;
      this._startIp = value.startIp;
      this._uciMatch = value.uciMatch;
      this._uciString = value.uciString;
      this._vciMatch = value.vciMatch;
      this._vciString = value.vciString;
    }
  }

  // end_ip - computed: true, optional: true, required: false
  private _endIp?: string; 
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }
  public set endIp(value: string) {
    this._endIp = value;
  }
  public resetEndIp() {
    this._endIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpInput() {
    return this._endIp;
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

  // lease_time - computed: false, optional: true, required: false
  private _leaseTime?: number; 
  public get leaseTime() {
    return this.getNumberAttribute('lease_time');
  }
  public set leaseTime(value: number) {
    this._leaseTime = value;
  }
  public resetLeaseTime() {
    this._leaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime;
  }

  // start_ip - computed: true, optional: true, required: false
  private _startIp?: string; 
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }
  public set startIp(value: string) {
    this._startIp = value;
  }
  public resetStartIp() {
    this._startIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpInput() {
    return this._startIp;
  }

  // uci_match - computed: true, optional: true, required: false
  private _uciMatch?: string; 
  public get uciMatch() {
    return this.getStringAttribute('uci_match');
  }
  public set uciMatch(value: string) {
    this._uciMatch = value;
  }
  public resetUciMatch() {
    this._uciMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uciMatchInput() {
    return this._uciMatch;
  }

  // uci_string - computed: true, optional: true, required: false
  private _uciString?: string[]; 
  public get uciString() {
    return cdktf.Fn.tolist(this.getListAttribute('uci_string'));
  }
  public set uciString(value: string[]) {
    this._uciString = value;
  }
  public resetUciString() {
    this._uciString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uciStringInput() {
    return this._uciString;
  }

  // vci_match - computed: true, optional: true, required: false
  private _vciMatch?: string; 
  public get vciMatch() {
    return this.getStringAttribute('vci_match');
  }
  public set vciMatch(value: string) {
    this._vciMatch = value;
  }
  public resetVciMatch() {
    this._vciMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciMatchInput() {
    return this._vciMatch;
  }

  // vci_string - computed: true, optional: true, required: false
  private _vciString?: string[]; 
  public get vciString() {
    return cdktf.Fn.tolist(this.getListAttribute('vci_string'));
  }
  public set vciString(value: string[]) {
    this._vciString = value;
  }
  public resetVciString() {
    this._vciString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciStringInput() {
    return this._vciString;
  }
}

export class ObjectFspVlanDynamicMappingDhcpServerExcludeRangeList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanDynamicMappingDhcpServerExcludeRange[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanDynamicMappingDhcpServerExcludeRangeOutputReference {
    return new ObjectFspVlanDynamicMappingDhcpServerExcludeRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanDynamicMappingDhcpServerIpRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#end_ip ObjectFspVlan#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#id ObjectFspVlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#lease_time ObjectFspVlan#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#start_ip ObjectFspVlan#start_ip}
  */
  readonly startIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#uci_match ObjectFspVlan#uci_match}
  */
  readonly uciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#uci_string ObjectFspVlan#uci_string}
  */
  readonly uciString?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vci_match ObjectFspVlan#vci_match}
  */
  readonly vciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vci_string ObjectFspVlan#vci_string}
  */
  readonly vciString?: string[];
}

export function objectFspVlanDynamicMappingDhcpServerIpRangeToTerraform(struct?: ObjectFspVlanDynamicMappingDhcpServerIpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ip: cdktf.stringToTerraform(struct!.endIp),
    id: cdktf.numberToTerraform(struct!.id),
    lease_time: cdktf.numberToTerraform(struct!.leaseTime),
    start_ip: cdktf.stringToTerraform(struct!.startIp),
    uci_match: cdktf.stringToTerraform(struct!.uciMatch),
    uci_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uciString),
    vci_match: cdktf.stringToTerraform(struct!.vciMatch),
    vci_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vciString),
  }
}


export function objectFspVlanDynamicMappingDhcpServerIpRangeToHclTerraform(struct?: ObjectFspVlanDynamicMappingDhcpServerIpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_ip: {
      value: cdktf.stringToHclTerraform(struct!.endIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lease_time: {
      value: cdktf.numberToHclTerraform(struct!.leaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_ip: {
      value: cdktf.stringToHclTerraform(struct!.startIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uci_match: {
      value: cdktf.stringToHclTerraform(struct!.uciMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uci_string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uciString),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vci_match: {
      value: cdktf.stringToHclTerraform(struct!.vciMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vci_string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vciString),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanDynamicMappingDhcpServerIpRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanDynamicMappingDhcpServerIpRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIp = this._endIp;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._leaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTime = this._leaseTime;
    }
    if (this._startIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIp = this._startIp;
    }
    if (this._uciMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.uciMatch = this._uciMatch;
    }
    if (this._uciString !== undefined) {
      hasAnyValues = true;
      internalValueResult.uciString = this._uciString;
    }
    if (this._vciMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.vciMatch = this._vciMatch;
    }
    if (this._vciString !== undefined) {
      hasAnyValues = true;
      internalValueResult.vciString = this._vciString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanDynamicMappingDhcpServerIpRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIp = undefined;
      this._id = undefined;
      this._leaseTime = undefined;
      this._startIp = undefined;
      this._uciMatch = undefined;
      this._uciString = undefined;
      this._vciMatch = undefined;
      this._vciString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIp = value.endIp;
      this._id = value.id;
      this._leaseTime = value.leaseTime;
      this._startIp = value.startIp;
      this._uciMatch = value.uciMatch;
      this._uciString = value.uciString;
      this._vciMatch = value.vciMatch;
      this._vciString = value.vciString;
    }
  }

  // end_ip - computed: true, optional: true, required: false
  private _endIp?: string; 
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }
  public set endIp(value: string) {
    this._endIp = value;
  }
  public resetEndIp() {
    this._endIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpInput() {
    return this._endIp;
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

  // lease_time - computed: false, optional: true, required: false
  private _leaseTime?: number; 
  public get leaseTime() {
    return this.getNumberAttribute('lease_time');
  }
  public set leaseTime(value: number) {
    this._leaseTime = value;
  }
  public resetLeaseTime() {
    this._leaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime;
  }

  // start_ip - computed: true, optional: true, required: false
  private _startIp?: string; 
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }
  public set startIp(value: string) {
    this._startIp = value;
  }
  public resetStartIp() {
    this._startIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpInput() {
    return this._startIp;
  }

  // uci_match - computed: true, optional: true, required: false
  private _uciMatch?: string; 
  public get uciMatch() {
    return this.getStringAttribute('uci_match');
  }
  public set uciMatch(value: string) {
    this._uciMatch = value;
  }
  public resetUciMatch() {
    this._uciMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uciMatchInput() {
    return this._uciMatch;
  }

  // uci_string - computed: true, optional: true, required: false
  private _uciString?: string[]; 
  public get uciString() {
    return cdktf.Fn.tolist(this.getListAttribute('uci_string'));
  }
  public set uciString(value: string[]) {
    this._uciString = value;
  }
  public resetUciString() {
    this._uciString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uciStringInput() {
    return this._uciString;
  }

  // vci_match - computed: true, optional: true, required: false
  private _vciMatch?: string; 
  public get vciMatch() {
    return this.getStringAttribute('vci_match');
  }
  public set vciMatch(value: string) {
    this._vciMatch = value;
  }
  public resetVciMatch() {
    this._vciMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciMatchInput() {
    return this._vciMatch;
  }

  // vci_string - computed: true, optional: true, required: false
  private _vciString?: string[]; 
  public get vciString() {
    return cdktf.Fn.tolist(this.getListAttribute('vci_string'));
  }
  public set vciString(value: string[]) {
    this._vciString = value;
  }
  public resetVciString() {
    this._vciString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciStringInput() {
    return this._vciString;
  }
}

export class ObjectFspVlanDynamicMappingDhcpServerIpRangeList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanDynamicMappingDhcpServerIpRange[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanDynamicMappingDhcpServerIpRangeOutputReference {
    return new ObjectFspVlanDynamicMappingDhcpServerIpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanDynamicMappingDhcpServerOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#code ObjectFspVlan#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#id ObjectFspVlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip ObjectFspVlan#ip}
  */
  readonly ip?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#type ObjectFspVlan#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#uci_match ObjectFspVlan#uci_match}
  */
  readonly uciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#uci_string ObjectFspVlan#uci_string}
  */
  readonly uciString?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#value ObjectFspVlan#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vci_match ObjectFspVlan#vci_match}
  */
  readonly vciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vci_string ObjectFspVlan#vci_string}
  */
  readonly vciString?: string[];
}

export function objectFspVlanDynamicMappingDhcpServerOptionsToTerraform(struct?: ObjectFspVlanDynamicMappingDhcpServerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ip),
    type: cdktf.stringToTerraform(struct!.type),
    uci_match: cdktf.stringToTerraform(struct!.uciMatch),
    uci_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uciString),
    value: cdktf.stringToTerraform(struct!.value),
    vci_match: cdktf.stringToTerraform(struct!.vciMatch),
    vci_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vciString),
  }
}


export function objectFspVlanDynamicMappingDhcpServerOptionsToHclTerraform(struct?: ObjectFspVlanDynamicMappingDhcpServerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ip),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uci_match: {
      value: cdktf.stringToHclTerraform(struct!.uciMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uci_string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uciString),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vci_match: {
      value: cdktf.stringToHclTerraform(struct!.vciMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vci_string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vciString),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanDynamicMappingDhcpServerOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanDynamicMappingDhcpServerOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uciMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.uciMatch = this._uciMatch;
    }
    if (this._uciString !== undefined) {
      hasAnyValues = true;
      internalValueResult.uciString = this._uciString;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._vciMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.vciMatch = this._vciMatch;
    }
    if (this._vciString !== undefined) {
      hasAnyValues = true;
      internalValueResult.vciString = this._vciString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanDynamicMappingDhcpServerOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._id = undefined;
      this._ip = undefined;
      this._type = undefined;
      this._uciMatch = undefined;
      this._uciString = undefined;
      this._value = undefined;
      this._vciMatch = undefined;
      this._vciString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._id = value.id;
      this._ip = value.ip;
      this._type = value.type;
      this._uciMatch = value.uciMatch;
      this._uciString = value.uciString;
      this._value = value.value;
      this._vciMatch = value.vciMatch;
      this._vciString = value.vciString;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

  // ip - computed: true, optional: true, required: false
  private _ip?: string[]; 
  public get ip() {
    return cdktf.Fn.tolist(this.getListAttribute('ip'));
  }
  public set ip(value: string[]) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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

  // uci_match - computed: true, optional: true, required: false
  private _uciMatch?: string; 
  public get uciMatch() {
    return this.getStringAttribute('uci_match');
  }
  public set uciMatch(value: string) {
    this._uciMatch = value;
  }
  public resetUciMatch() {
    this._uciMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uciMatchInput() {
    return this._uciMatch;
  }

  // uci_string - computed: true, optional: true, required: false
  private _uciString?: string[]; 
  public get uciString() {
    return cdktf.Fn.tolist(this.getListAttribute('uci_string'));
  }
  public set uciString(value: string[]) {
    this._uciString = value;
  }
  public resetUciString() {
    this._uciString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uciStringInput() {
    return this._uciString;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // vci_match - computed: true, optional: true, required: false
  private _vciMatch?: string; 
  public get vciMatch() {
    return this.getStringAttribute('vci_match');
  }
  public set vciMatch(value: string) {
    this._vciMatch = value;
  }
  public resetVciMatch() {
    this._vciMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciMatchInput() {
    return this._vciMatch;
  }

  // vci_string - computed: true, optional: true, required: false
  private _vciString?: string[]; 
  public get vciString() {
    return cdktf.Fn.tolist(this.getListAttribute('vci_string'));
  }
  public set vciString(value: string[]) {
    this._vciString = value;
  }
  public resetVciString() {
    this._vciString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciStringInput() {
    return this._vciString;
  }
}

export class ObjectFspVlanDynamicMappingDhcpServerOptionsList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanDynamicMappingDhcpServerOptions[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanDynamicMappingDhcpServerOptionsOutputReference {
    return new ObjectFspVlanDynamicMappingDhcpServerOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanDynamicMappingDhcpServerReservedAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#action ObjectFspVlan#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#circuit_id ObjectFspVlan#circuit_id}
  */
  readonly circuitId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#circuit_id_type ObjectFspVlan#circuit_id_type}
  */
  readonly circuitIdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#description ObjectFspVlan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#id ObjectFspVlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip ObjectFspVlan#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#mac ObjectFspVlan#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#remote_id ObjectFspVlan#remote_id}
  */
  readonly remoteId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#remote_id_type ObjectFspVlan#remote_id_type}
  */
  readonly remoteIdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#type ObjectFspVlan#type}
  */
  readonly type?: string;
}

export function objectFspVlanDynamicMappingDhcpServerReservedAddressToTerraform(struct?: ObjectFspVlanDynamicMappingDhcpServerReservedAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    circuit_id: cdktf.stringToTerraform(struct!.circuitId),
    circuit_id_type: cdktf.stringToTerraform(struct!.circuitIdType),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
    mac: cdktf.stringToTerraform(struct!.mac),
    remote_id: cdktf.stringToTerraform(struct!.remoteId),
    remote_id_type: cdktf.stringToTerraform(struct!.remoteIdType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function objectFspVlanDynamicMappingDhcpServerReservedAddressToHclTerraform(struct?: ObjectFspVlanDynamicMappingDhcpServerReservedAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    circuit_id: {
      value: cdktf.stringToHclTerraform(struct!.circuitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    circuit_id_type: {
      value: cdktf.stringToHclTerraform(struct!.circuitIdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
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
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_id: {
      value: cdktf.stringToHclTerraform(struct!.remoteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_id_type: {
      value: cdktf.stringToHclTerraform(struct!.remoteIdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ObjectFspVlanDynamicMappingDhcpServerReservedAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanDynamicMappingDhcpServerReservedAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._circuitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.circuitId = this._circuitId;
    }
    if (this._circuitIdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.circuitIdType = this._circuitIdType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._remoteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteId = this._remoteId;
    }
    if (this._remoteIdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIdType = this._remoteIdType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanDynamicMappingDhcpServerReservedAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._circuitId = undefined;
      this._circuitIdType = undefined;
      this._description = undefined;
      this._id = undefined;
      this._ip = undefined;
      this._mac = undefined;
      this._remoteId = undefined;
      this._remoteIdType = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._circuitId = value.circuitId;
      this._circuitIdType = value.circuitIdType;
      this._description = value.description;
      this._id = value.id;
      this._ip = value.ip;
      this._mac = value.mac;
      this._remoteId = value.remoteId;
      this._remoteIdType = value.remoteIdType;
      this._type = value.type;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // circuit_id - computed: false, optional: true, required: false
  private _circuitId?: string; 
  public get circuitId() {
    return this.getStringAttribute('circuit_id');
  }
  public set circuitId(value: string) {
    this._circuitId = value;
  }
  public resetCircuitId() {
    this._circuitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitIdInput() {
    return this._circuitId;
  }

  // circuit_id_type - computed: false, optional: true, required: false
  private _circuitIdType?: string; 
  public get circuitIdType() {
    return this.getStringAttribute('circuit_id_type');
  }
  public set circuitIdType(value: string) {
    this._circuitIdType = value;
  }
  public resetCircuitIdType() {
    this._circuitIdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitIdTypeInput() {
    return this._circuitIdType;
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

  // ip - computed: true, optional: true, required: false
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

  // mac - computed: true, optional: true, required: false
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

  // remote_id - computed: false, optional: true, required: false
  private _remoteId?: string; 
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }
  public set remoteId(value: string) {
    this._remoteId = value;
  }
  public resetRemoteId() {
    this._remoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdInput() {
    return this._remoteId;
  }

  // remote_id_type - computed: false, optional: true, required: false
  private _remoteIdType?: string; 
  public get remoteIdType() {
    return this.getStringAttribute('remote_id_type');
  }
  public set remoteIdType(value: string) {
    this._remoteIdType = value;
  }
  public resetRemoteIdType() {
    this._remoteIdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdTypeInput() {
    return this._remoteIdType;
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

export class ObjectFspVlanDynamicMappingDhcpServerReservedAddressList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanDynamicMappingDhcpServerReservedAddress[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanDynamicMappingDhcpServerReservedAddressOutputReference {
    return new ObjectFspVlanDynamicMappingDhcpServerReservedAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanDynamicMappingDhcpServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#auto_configuration ObjectFspVlan#auto_configuration}
  */
  readonly autoConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#auto_managed_status ObjectFspVlan#auto_managed_status}
  */
  readonly autoManagedStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#conflicted_ip_timeout ObjectFspVlan#conflicted_ip_timeout}
  */
  readonly conflictedIpTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ddns_auth ObjectFspVlan#ddns_auth}
  */
  readonly ddnsAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ddns_key ObjectFspVlan#ddns_key}
  */
  readonly ddnsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ddns_keyname ObjectFspVlan#ddns_keyname}
  */
  readonly ddnsKeyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ddns_server_ip ObjectFspVlan#ddns_server_ip}
  */
  readonly ddnsServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ddns_ttl ObjectFspVlan#ddns_ttl}
  */
  readonly ddnsTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ddns_update ObjectFspVlan#ddns_update}
  */
  readonly ddnsUpdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ddns_update_override ObjectFspVlan#ddns_update_override}
  */
  readonly ddnsUpdateOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ddns_zone ObjectFspVlan#ddns_zone}
  */
  readonly ddnsZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#default_gateway ObjectFspVlan#default_gateway}
  */
  readonly defaultGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp_settings_from_fortiipam ObjectFspVlan#dhcp_settings_from_fortiipam}
  */
  readonly dhcpSettingsFromFortiipam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dns_server1 ObjectFspVlan#dns_server1}
  */
  readonly dnsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dns_server2 ObjectFspVlan#dns_server2}
  */
  readonly dnsServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dns_server3 ObjectFspVlan#dns_server3}
  */
  readonly dnsServer3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dns_server4 ObjectFspVlan#dns_server4}
  */
  readonly dnsServer4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dns_service ObjectFspVlan#dns_service}
  */
  readonly dnsService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#domain ObjectFspVlan#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#enable ObjectFspVlan#enable}
  */
  readonly enable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#filename ObjectFspVlan#filename}
  */
  readonly filename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#forticlient_on_net_status ObjectFspVlan#forticlient_on_net_status}
  */
  readonly forticlientOnNetStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#id ObjectFspVlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip_mode ObjectFspVlan#ip_mode}
  */
  readonly ipMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ipsec_lease_hold ObjectFspVlan#ipsec_lease_hold}
  */
  readonly ipsecLeaseHold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#lease_time ObjectFspVlan#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#mac_acl_default_action ObjectFspVlan#mac_acl_default_action}
  */
  readonly macAclDefaultAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#netmask ObjectFspVlan#netmask}
  */
  readonly netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#next_server ObjectFspVlan#next_server}
  */
  readonly nextServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ntp_server1 ObjectFspVlan#ntp_server1}
  */
  readonly ntpServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ntp_server2 ObjectFspVlan#ntp_server2}
  */
  readonly ntpServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ntp_server3 ObjectFspVlan#ntp_server3}
  */
  readonly ntpServer3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ntp_service ObjectFspVlan#ntp_service}
  */
  readonly ntpService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#option1 ObjectFspVlan#option1}
  */
  readonly option1?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#option2 ObjectFspVlan#option2}
  */
  readonly option2?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#option3 ObjectFspVlan#option3}
  */
  readonly option3?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#option4 ObjectFspVlan#option4}
  */
  readonly option4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#option5 ObjectFspVlan#option5}
  */
  readonly option5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#option6 ObjectFspVlan#option6}
  */
  readonly option6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#relay_agent ObjectFspVlan#relay_agent}
  */
  readonly relayAgent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#server_type ObjectFspVlan#server_type}
  */
  readonly serverType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#shared_subnet ObjectFspVlan#shared_subnet}
  */
  readonly sharedSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#status ObjectFspVlan#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#tftp_server ObjectFspVlan#tftp_server}
  */
  readonly tftpServer?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#timezone ObjectFspVlan#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#timezone_option ObjectFspVlan#timezone_option}
  */
  readonly timezoneOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vci_match ObjectFspVlan#vci_match}
  */
  readonly vciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vci_string ObjectFspVlan#vci_string}
  */
  readonly vciString?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wifi_ac1 ObjectFspVlan#wifi_ac1}
  */
  readonly wifiAc1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wifi_ac2 ObjectFspVlan#wifi_ac2}
  */
  readonly wifiAc2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wifi_ac3 ObjectFspVlan#wifi_ac3}
  */
  readonly wifiAc3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wifi_ac_service ObjectFspVlan#wifi_ac_service}
  */
  readonly wifiAcService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wins_server1 ObjectFspVlan#wins_server1}
  */
  readonly winsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wins_server2 ObjectFspVlan#wins_server2}
  */
  readonly winsServer2?: string;
  /**
  * exclude_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#exclude_range ObjectFspVlan#exclude_range}
  */
  readonly excludeRange?: ObjectFspVlanDynamicMappingDhcpServerExcludeRange[] | cdktf.IResolvable;
  /**
  * ip_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip_range ObjectFspVlan#ip_range}
  */
  readonly ipRange?: ObjectFspVlanDynamicMappingDhcpServerIpRange[] | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#options ObjectFspVlan#options}
  */
  readonly options?: ObjectFspVlanDynamicMappingDhcpServerOptions[] | cdktf.IResolvable;
  /**
  * reserved_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#reserved_address ObjectFspVlan#reserved_address}
  */
  readonly reservedAddress?: ObjectFspVlanDynamicMappingDhcpServerReservedAddress[] | cdktf.IResolvable;
}

export function objectFspVlanDynamicMappingDhcpServerToTerraform(struct?: ObjectFspVlanDynamicMappingDhcpServerOutputReference | ObjectFspVlanDynamicMappingDhcpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_configuration: cdktf.stringToTerraform(struct!.autoConfiguration),
    auto_managed_status: cdktf.stringToTerraform(struct!.autoManagedStatus),
    conflicted_ip_timeout: cdktf.numberToTerraform(struct!.conflictedIpTimeout),
    ddns_auth: cdktf.stringToTerraform(struct!.ddnsAuth),
    ddns_key: cdktf.stringToTerraform(struct!.ddnsKey),
    ddns_keyname: cdktf.stringToTerraform(struct!.ddnsKeyname),
    ddns_server_ip: cdktf.stringToTerraform(struct!.ddnsServerIp),
    ddns_ttl: cdktf.numberToTerraform(struct!.ddnsTtl),
    ddns_update: cdktf.stringToTerraform(struct!.ddnsUpdate),
    ddns_update_override: cdktf.stringToTerraform(struct!.ddnsUpdateOverride),
    ddns_zone: cdktf.stringToTerraform(struct!.ddnsZone),
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    dhcp_settings_from_fortiipam: cdktf.stringToTerraform(struct!.dhcpSettingsFromFortiipam),
    dns_server1: cdktf.stringToTerraform(struct!.dnsServer1),
    dns_server2: cdktf.stringToTerraform(struct!.dnsServer2),
    dns_server3: cdktf.stringToTerraform(struct!.dnsServer3),
    dns_server4: cdktf.stringToTerraform(struct!.dnsServer4),
    dns_service: cdktf.stringToTerraform(struct!.dnsService),
    domain: cdktf.stringToTerraform(struct!.domain),
    enable: cdktf.stringToTerraform(struct!.enable),
    filename: cdktf.stringToTerraform(struct!.filename),
    forticlient_on_net_status: cdktf.stringToTerraform(struct!.forticlientOnNetStatus),
    id: cdktf.numberToTerraform(struct!.id),
    ip_mode: cdktf.stringToTerraform(struct!.ipMode),
    ipsec_lease_hold: cdktf.numberToTerraform(struct!.ipsecLeaseHold),
    lease_time: cdktf.numberToTerraform(struct!.leaseTime),
    mac_acl_default_action: cdktf.stringToTerraform(struct!.macAclDefaultAction),
    netmask: cdktf.stringToTerraform(struct!.netmask),
    next_server: cdktf.stringToTerraform(struct!.nextServer),
    ntp_server1: cdktf.stringToTerraform(struct!.ntpServer1),
    ntp_server2: cdktf.stringToTerraform(struct!.ntpServer2),
    ntp_server3: cdktf.stringToTerraform(struct!.ntpServer3),
    ntp_service: cdktf.stringToTerraform(struct!.ntpService),
    option1: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.option1),
    option2: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.option2),
    option3: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.option3),
    option4: cdktf.stringToTerraform(struct!.option4),
    option5: cdktf.stringToTerraform(struct!.option5),
    option6: cdktf.stringToTerraform(struct!.option6),
    relay_agent: cdktf.stringToTerraform(struct!.relayAgent),
    server_type: cdktf.stringToTerraform(struct!.serverType),
    shared_subnet: cdktf.stringToTerraform(struct!.sharedSubnet),
    status: cdktf.stringToTerraform(struct!.status),
    tftp_server: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tftpServer),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    timezone_option: cdktf.stringToTerraform(struct!.timezoneOption),
    vci_match: cdktf.stringToTerraform(struct!.vciMatch),
    vci_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vciString),
    wifi_ac1: cdktf.stringToTerraform(struct!.wifiAc1),
    wifi_ac2: cdktf.stringToTerraform(struct!.wifiAc2),
    wifi_ac3: cdktf.stringToTerraform(struct!.wifiAc3),
    wifi_ac_service: cdktf.stringToTerraform(struct!.wifiAcService),
    wins_server1: cdktf.stringToTerraform(struct!.winsServer1),
    wins_server2: cdktf.stringToTerraform(struct!.winsServer2),
    exclude_range: cdktf.listMapper(objectFspVlanDynamicMappingDhcpServerExcludeRangeToTerraform, true)(struct!.excludeRange),
    ip_range: cdktf.listMapper(objectFspVlanDynamicMappingDhcpServerIpRangeToTerraform, true)(struct!.ipRange),
    options: cdktf.listMapper(objectFspVlanDynamicMappingDhcpServerOptionsToTerraform, true)(struct!.options),
    reserved_address: cdktf.listMapper(objectFspVlanDynamicMappingDhcpServerReservedAddressToTerraform, true)(struct!.reservedAddress),
  }
}


export function objectFspVlanDynamicMappingDhcpServerToHclTerraform(struct?: ObjectFspVlanDynamicMappingDhcpServerOutputReference | ObjectFspVlanDynamicMappingDhcpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_configuration: {
      value: cdktf.stringToHclTerraform(struct!.autoConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_managed_status: {
      value: cdktf.stringToHclTerraform(struct!.autoManagedStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conflicted_ip_timeout: {
      value: cdktf.numberToHclTerraform(struct!.conflictedIpTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddns_auth: {
      value: cdktf.stringToHclTerraform(struct!.ddnsAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_key: {
      value: cdktf.stringToHclTerraform(struct!.ddnsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_keyname: {
      value: cdktf.stringToHclTerraform(struct!.ddnsKeyname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_server_ip: {
      value: cdktf.stringToHclTerraform(struct!.ddnsServerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_ttl: {
      value: cdktf.numberToHclTerraform(struct!.ddnsTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddns_update: {
      value: cdktf.stringToHclTerraform(struct!.ddnsUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_update_override: {
      value: cdktf.stringToHclTerraform(struct!.ddnsUpdateOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_zone: {
      value: cdktf.stringToHclTerraform(struct!.ddnsZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_gateway: {
      value: cdktf.stringToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_settings_from_fortiipam: {
      value: cdktf.stringToHclTerraform(struct!.dhcpSettingsFromFortiipam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server1: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server2: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server3: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server4: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_service: {
      value: cdktf.stringToHclTerraform(struct!.dnsService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.stringToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forticlient_on_net_status: {
      value: cdktf.stringToHclTerraform(struct!.forticlientOnNetStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_mode: {
      value: cdktf.stringToHclTerraform(struct!.ipMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_lease_hold: {
      value: cdktf.numberToHclTerraform(struct!.ipsecLeaseHold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lease_time: {
      value: cdktf.numberToHclTerraform(struct!.leaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_acl_default_action: {
      value: cdktf.stringToHclTerraform(struct!.macAclDefaultAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_server: {
      value: cdktf.stringToHclTerraform(struct!.nextServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ntp_server1: {
      value: cdktf.stringToHclTerraform(struct!.ntpServer1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ntp_server2: {
      value: cdktf.stringToHclTerraform(struct!.ntpServer2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ntp_server3: {
      value: cdktf.stringToHclTerraform(struct!.ntpServer3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ntp_service: {
      value: cdktf.stringToHclTerraform(struct!.ntpService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option1: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.option1),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    option2: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.option2),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    option3: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.option3),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    option4: {
      value: cdktf.stringToHclTerraform(struct!.option4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option5: {
      value: cdktf.stringToHclTerraform(struct!.option5),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option6: {
      value: cdktf.stringToHclTerraform(struct!.option6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relay_agent: {
      value: cdktf.stringToHclTerraform(struct!.relayAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_type: {
      value: cdktf.stringToHclTerraform(struct!.serverType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_subnet: {
      value: cdktf.stringToHclTerraform(struct!.sharedSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tftp_server: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tftpServer),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone_option: {
      value: cdktf.stringToHclTerraform(struct!.timezoneOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vci_match: {
      value: cdktf.stringToHclTerraform(struct!.vciMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vci_string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vciString),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    wifi_ac1: {
      value: cdktf.stringToHclTerraform(struct!.wifiAc1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wifi_ac2: {
      value: cdktf.stringToHclTerraform(struct!.wifiAc2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wifi_ac3: {
      value: cdktf.stringToHclTerraform(struct!.wifiAc3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wifi_ac_service: {
      value: cdktf.stringToHclTerraform(struct!.wifiAcService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wins_server1: {
      value: cdktf.stringToHclTerraform(struct!.winsServer1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wins_server2: {
      value: cdktf.stringToHclTerraform(struct!.winsServer2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_range: {
      value: cdktf.listMapperHcl(objectFspVlanDynamicMappingDhcpServerExcludeRangeToHclTerraform, true)(struct!.excludeRange),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanDynamicMappingDhcpServerExcludeRangeList",
    },
    ip_range: {
      value: cdktf.listMapperHcl(objectFspVlanDynamicMappingDhcpServerIpRangeToHclTerraform, true)(struct!.ipRange),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanDynamicMappingDhcpServerIpRangeList",
    },
    options: {
      value: cdktf.listMapperHcl(objectFspVlanDynamicMappingDhcpServerOptionsToHclTerraform, true)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanDynamicMappingDhcpServerOptionsList",
    },
    reserved_address: {
      value: cdktf.listMapperHcl(objectFspVlanDynamicMappingDhcpServerReservedAddressToHclTerraform, true)(struct!.reservedAddress),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanDynamicMappingDhcpServerReservedAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanDynamicMappingDhcpServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFspVlanDynamicMappingDhcpServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoConfiguration = this._autoConfiguration;
    }
    if (this._autoManagedStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoManagedStatus = this._autoManagedStatus;
    }
    if (this._conflictedIpTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.conflictedIpTimeout = this._conflictedIpTimeout;
    }
    if (this._ddnsAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsAuth = this._ddnsAuth;
    }
    if (this._ddnsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsKey = this._ddnsKey;
    }
    if (this._ddnsKeyname !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsKeyname = this._ddnsKeyname;
    }
    if (this._ddnsServerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsServerIp = this._ddnsServerIp;
    }
    if (this._ddnsTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsTtl = this._ddnsTtl;
    }
    if (this._ddnsUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsUpdate = this._ddnsUpdate;
    }
    if (this._ddnsUpdateOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsUpdateOverride = this._ddnsUpdateOverride;
    }
    if (this._ddnsZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsZone = this._ddnsZone;
    }
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._dhcpSettingsFromFortiipam !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpSettingsFromFortiipam = this._dhcpSettingsFromFortiipam;
    }
    if (this._dnsServer1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer1 = this._dnsServer1;
    }
    if (this._dnsServer2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer2 = this._dnsServer2;
    }
    if (this._dnsServer3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer3 = this._dnsServer3;
    }
    if (this._dnsServer4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer4 = this._dnsServer4;
    }
    if (this._dnsService !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsService = this._dnsService;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    if (this._forticlientOnNetStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.forticlientOnNetStatus = this._forticlientOnNetStatus;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMode = this._ipMode;
    }
    if (this._ipsecLeaseHold !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecLeaseHold = this._ipsecLeaseHold;
    }
    if (this._leaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTime = this._leaseTime;
    }
    if (this._macAclDefaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAclDefaultAction = this._macAclDefaultAction;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    if (this._nextServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextServer = this._nextServer;
    }
    if (this._ntpServer1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpServer1 = this._ntpServer1;
    }
    if (this._ntpServer2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpServer2 = this._ntpServer2;
    }
    if (this._ntpServer3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpServer3 = this._ntpServer3;
    }
    if (this._ntpService !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpService = this._ntpService;
    }
    if (this._option1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.option1 = this._option1;
    }
    if (this._option2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.option2 = this._option2;
    }
    if (this._option3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.option3 = this._option3;
    }
    if (this._option4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.option4 = this._option4;
    }
    if (this._option5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.option5 = this._option5;
    }
    if (this._option6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.option6 = this._option6;
    }
    if (this._relayAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.relayAgent = this._relayAgent;
    }
    if (this._serverType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverType = this._serverType;
    }
    if (this._sharedSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedSubnet = this._sharedSubnet;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tftpServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.tftpServer = this._tftpServer;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._timezoneOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezoneOption = this._timezoneOption;
    }
    if (this._vciMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.vciMatch = this._vciMatch;
    }
    if (this._vciString !== undefined) {
      hasAnyValues = true;
      internalValueResult.vciString = this._vciString;
    }
    if (this._wifiAc1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiAc1 = this._wifiAc1;
    }
    if (this._wifiAc2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiAc2 = this._wifiAc2;
    }
    if (this._wifiAc3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiAc3 = this._wifiAc3;
    }
    if (this._wifiAcService !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiAcService = this._wifiAcService;
    }
    if (this._winsServer1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.winsServer1 = this._winsServer1;
    }
    if (this._winsServer2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.winsServer2 = this._winsServer2;
    }
    if (this._excludeRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeRange = this._excludeRange?.internalValue;
    }
    if (this._ipRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRange = this._ipRange?.internalValue;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._reservedAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedAddress = this._reservedAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanDynamicMappingDhcpServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoConfiguration = undefined;
      this._autoManagedStatus = undefined;
      this._conflictedIpTimeout = undefined;
      this._ddnsAuth = undefined;
      this._ddnsKey = undefined;
      this._ddnsKeyname = undefined;
      this._ddnsServerIp = undefined;
      this._ddnsTtl = undefined;
      this._ddnsUpdate = undefined;
      this._ddnsUpdateOverride = undefined;
      this._ddnsZone = undefined;
      this._defaultGateway = undefined;
      this._dhcpSettingsFromFortiipam = undefined;
      this._dnsServer1 = undefined;
      this._dnsServer2 = undefined;
      this._dnsServer3 = undefined;
      this._dnsServer4 = undefined;
      this._dnsService = undefined;
      this._domain = undefined;
      this._enable = undefined;
      this._filename = undefined;
      this._forticlientOnNetStatus = undefined;
      this._id = undefined;
      this._ipMode = undefined;
      this._ipsecLeaseHold = undefined;
      this._leaseTime = undefined;
      this._macAclDefaultAction = undefined;
      this._netmask = undefined;
      this._nextServer = undefined;
      this._ntpServer1 = undefined;
      this._ntpServer2 = undefined;
      this._ntpServer3 = undefined;
      this._ntpService = undefined;
      this._option1 = undefined;
      this._option2 = undefined;
      this._option3 = undefined;
      this._option4 = undefined;
      this._option5 = undefined;
      this._option6 = undefined;
      this._relayAgent = undefined;
      this._serverType = undefined;
      this._sharedSubnet = undefined;
      this._status = undefined;
      this._tftpServer = undefined;
      this._timezone = undefined;
      this._timezoneOption = undefined;
      this._vciMatch = undefined;
      this._vciString = undefined;
      this._wifiAc1 = undefined;
      this._wifiAc2 = undefined;
      this._wifiAc3 = undefined;
      this._wifiAcService = undefined;
      this._winsServer1 = undefined;
      this._winsServer2 = undefined;
      this._excludeRange.internalValue = undefined;
      this._ipRange.internalValue = undefined;
      this._options.internalValue = undefined;
      this._reservedAddress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoConfiguration = value.autoConfiguration;
      this._autoManagedStatus = value.autoManagedStatus;
      this._conflictedIpTimeout = value.conflictedIpTimeout;
      this._ddnsAuth = value.ddnsAuth;
      this._ddnsKey = value.ddnsKey;
      this._ddnsKeyname = value.ddnsKeyname;
      this._ddnsServerIp = value.ddnsServerIp;
      this._ddnsTtl = value.ddnsTtl;
      this._ddnsUpdate = value.ddnsUpdate;
      this._ddnsUpdateOverride = value.ddnsUpdateOverride;
      this._ddnsZone = value.ddnsZone;
      this._defaultGateway = value.defaultGateway;
      this._dhcpSettingsFromFortiipam = value.dhcpSettingsFromFortiipam;
      this._dnsServer1 = value.dnsServer1;
      this._dnsServer2 = value.dnsServer2;
      this._dnsServer3 = value.dnsServer3;
      this._dnsServer4 = value.dnsServer4;
      this._dnsService = value.dnsService;
      this._domain = value.domain;
      this._enable = value.enable;
      this._filename = value.filename;
      this._forticlientOnNetStatus = value.forticlientOnNetStatus;
      this._id = value.id;
      this._ipMode = value.ipMode;
      this._ipsecLeaseHold = value.ipsecLeaseHold;
      this._leaseTime = value.leaseTime;
      this._macAclDefaultAction = value.macAclDefaultAction;
      this._netmask = value.netmask;
      this._nextServer = value.nextServer;
      this._ntpServer1 = value.ntpServer1;
      this._ntpServer2 = value.ntpServer2;
      this._ntpServer3 = value.ntpServer3;
      this._ntpService = value.ntpService;
      this._option1 = value.option1;
      this._option2 = value.option2;
      this._option3 = value.option3;
      this._option4 = value.option4;
      this._option5 = value.option5;
      this._option6 = value.option6;
      this._relayAgent = value.relayAgent;
      this._serverType = value.serverType;
      this._sharedSubnet = value.sharedSubnet;
      this._status = value.status;
      this._tftpServer = value.tftpServer;
      this._timezone = value.timezone;
      this._timezoneOption = value.timezoneOption;
      this._vciMatch = value.vciMatch;
      this._vciString = value.vciString;
      this._wifiAc1 = value.wifiAc1;
      this._wifiAc2 = value.wifiAc2;
      this._wifiAc3 = value.wifiAc3;
      this._wifiAcService = value.wifiAcService;
      this._winsServer1 = value.winsServer1;
      this._winsServer2 = value.winsServer2;
      this._excludeRange.internalValue = value.excludeRange;
      this._ipRange.internalValue = value.ipRange;
      this._options.internalValue = value.options;
      this._reservedAddress.internalValue = value.reservedAddress;
    }
  }

  // auto_configuration - computed: true, optional: true, required: false
  private _autoConfiguration?: string; 
  public get autoConfiguration() {
    return this.getStringAttribute('auto_configuration');
  }
  public set autoConfiguration(value: string) {
    this._autoConfiguration = value;
  }
  public resetAutoConfiguration() {
    this._autoConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoConfigurationInput() {
    return this._autoConfiguration;
  }

  // auto_managed_status - computed: true, optional: true, required: false
  private _autoManagedStatus?: string; 
  public get autoManagedStatus() {
    return this.getStringAttribute('auto_managed_status');
  }
  public set autoManagedStatus(value: string) {
    this._autoManagedStatus = value;
  }
  public resetAutoManagedStatus() {
    this._autoManagedStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoManagedStatusInput() {
    return this._autoManagedStatus;
  }

  // conflicted_ip_timeout - computed: true, optional: true, required: false
  private _conflictedIpTimeout?: number; 
  public get conflictedIpTimeout() {
    return this.getNumberAttribute('conflicted_ip_timeout');
  }
  public set conflictedIpTimeout(value: number) {
    this._conflictedIpTimeout = value;
  }
  public resetConflictedIpTimeout() {
    this._conflictedIpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictedIpTimeoutInput() {
    return this._conflictedIpTimeout;
  }

  // ddns_auth - computed: true, optional: true, required: false
  private _ddnsAuth?: string; 
  public get ddnsAuth() {
    return this.getStringAttribute('ddns_auth');
  }
  public set ddnsAuth(value: string) {
    this._ddnsAuth = value;
  }
  public resetDdnsAuth() {
    this._ddnsAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsAuthInput() {
    return this._ddnsAuth;
  }

  // ddns_key - computed: false, optional: true, required: false
  private _ddnsKey?: string; 
  public get ddnsKey() {
    return this.getStringAttribute('ddns_key');
  }
  public set ddnsKey(value: string) {
    this._ddnsKey = value;
  }
  public resetDdnsKey() {
    this._ddnsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsKeyInput() {
    return this._ddnsKey;
  }

  // ddns_keyname - computed: false, optional: true, required: false
  private _ddnsKeyname?: string; 
  public get ddnsKeyname() {
    return this.getStringAttribute('ddns_keyname');
  }
  public set ddnsKeyname(value: string) {
    this._ddnsKeyname = value;
  }
  public resetDdnsKeyname() {
    this._ddnsKeyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsKeynameInput() {
    return this._ddnsKeyname;
  }

  // ddns_server_ip - computed: true, optional: true, required: false
  private _ddnsServerIp?: string; 
  public get ddnsServerIp() {
    return this.getStringAttribute('ddns_server_ip');
  }
  public set ddnsServerIp(value: string) {
    this._ddnsServerIp = value;
  }
  public resetDdnsServerIp() {
    this._ddnsServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsServerIpInput() {
    return this._ddnsServerIp;
  }

  // ddns_ttl - computed: true, optional: true, required: false
  private _ddnsTtl?: number; 
  public get ddnsTtl() {
    return this.getNumberAttribute('ddns_ttl');
  }
  public set ddnsTtl(value: number) {
    this._ddnsTtl = value;
  }
  public resetDdnsTtl() {
    this._ddnsTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsTtlInput() {
    return this._ddnsTtl;
  }

  // ddns_update - computed: true, optional: true, required: false
  private _ddnsUpdate?: string; 
  public get ddnsUpdate() {
    return this.getStringAttribute('ddns_update');
  }
  public set ddnsUpdate(value: string) {
    this._ddnsUpdate = value;
  }
  public resetDdnsUpdate() {
    this._ddnsUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUpdateInput() {
    return this._ddnsUpdate;
  }

  // ddns_update_override - computed: true, optional: true, required: false
  private _ddnsUpdateOverride?: string; 
  public get ddnsUpdateOverride() {
    return this.getStringAttribute('ddns_update_override');
  }
  public set ddnsUpdateOverride(value: string) {
    this._ddnsUpdateOverride = value;
  }
  public resetDdnsUpdateOverride() {
    this._ddnsUpdateOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUpdateOverrideInput() {
    return this._ddnsUpdateOverride;
  }

  // ddns_zone - computed: false, optional: true, required: false
  private _ddnsZone?: string; 
  public get ddnsZone() {
    return this.getStringAttribute('ddns_zone');
  }
  public set ddnsZone(value: string) {
    this._ddnsZone = value;
  }
  public resetDdnsZone() {
    this._ddnsZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsZoneInput() {
    return this._ddnsZone;
  }

  // default_gateway - computed: true, optional: true, required: false
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // dhcp_settings_from_fortiipam - computed: true, optional: true, required: false
  private _dhcpSettingsFromFortiipam?: string; 
  public get dhcpSettingsFromFortiipam() {
    return this.getStringAttribute('dhcp_settings_from_fortiipam');
  }
  public set dhcpSettingsFromFortiipam(value: string) {
    this._dhcpSettingsFromFortiipam = value;
  }
  public resetDhcpSettingsFromFortiipam() {
    this._dhcpSettingsFromFortiipam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSettingsFromFortiipamInput() {
    return this._dhcpSettingsFromFortiipam;
  }

  // dns_server1 - computed: true, optional: true, required: false
  private _dnsServer1?: string; 
  public get dnsServer1() {
    return this.getStringAttribute('dns_server1');
  }
  public set dnsServer1(value: string) {
    this._dnsServer1 = value;
  }
  public resetDnsServer1() {
    this._dnsServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServer1Input() {
    return this._dnsServer1;
  }

  // dns_server2 - computed: true, optional: true, required: false
  private _dnsServer2?: string; 
  public get dnsServer2() {
    return this.getStringAttribute('dns_server2');
  }
  public set dnsServer2(value: string) {
    this._dnsServer2 = value;
  }
  public resetDnsServer2() {
    this._dnsServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServer2Input() {
    return this._dnsServer2;
  }

  // dns_server3 - computed: true, optional: true, required: false
  private _dnsServer3?: string; 
  public get dnsServer3() {
    return this.getStringAttribute('dns_server3');
  }
  public set dnsServer3(value: string) {
    this._dnsServer3 = value;
  }
  public resetDnsServer3() {
    this._dnsServer3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServer3Input() {
    return this._dnsServer3;
  }

  // dns_server4 - computed: true, optional: true, required: false
  private _dnsServer4?: string; 
  public get dnsServer4() {
    return this.getStringAttribute('dns_server4');
  }
  public set dnsServer4(value: string) {
    this._dnsServer4 = value;
  }
  public resetDnsServer4() {
    this._dnsServer4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServer4Input() {
    return this._dnsServer4;
  }

  // dns_service - computed: true, optional: true, required: false
  private _dnsService?: string; 
  public get dnsService() {
    return this.getStringAttribute('dns_service');
  }
  public set dnsService(value: string) {
    this._dnsService = value;
  }
  public resetDnsService() {
    this._dnsService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServiceInput() {
    return this._dnsService;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // forticlient_on_net_status - computed: true, optional: true, required: false
  private _forticlientOnNetStatus?: string; 
  public get forticlientOnNetStatus() {
    return this.getStringAttribute('forticlient_on_net_status');
  }
  public set forticlientOnNetStatus(value: string) {
    this._forticlientOnNetStatus = value;
  }
  public resetForticlientOnNetStatus() {
    this._forticlientOnNetStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticlientOnNetStatusInput() {
    return this._forticlientOnNetStatus;
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

  // ip_mode - computed: false, optional: true, required: false
  private _ipMode?: string; 
  public get ipMode() {
    return this.getStringAttribute('ip_mode');
  }
  public set ipMode(value: string) {
    this._ipMode = value;
  }
  public resetIpMode() {
    this._ipMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipModeInput() {
    return this._ipMode;
  }

  // ipsec_lease_hold - computed: false, optional: true, required: false
  private _ipsecLeaseHold?: number; 
  public get ipsecLeaseHold() {
    return this.getNumberAttribute('ipsec_lease_hold');
  }
  public set ipsecLeaseHold(value: number) {
    this._ipsecLeaseHold = value;
  }
  public resetIpsecLeaseHold() {
    this._ipsecLeaseHold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecLeaseHoldInput() {
    return this._ipsecLeaseHold;
  }

  // lease_time - computed: true, optional: true, required: false
  private _leaseTime?: number; 
  public get leaseTime() {
    return this.getNumberAttribute('lease_time');
  }
  public set leaseTime(value: number) {
    this._leaseTime = value;
  }
  public resetLeaseTime() {
    this._leaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime;
  }

  // mac_acl_default_action - computed: true, optional: true, required: false
  private _macAclDefaultAction?: string; 
  public get macAclDefaultAction() {
    return this.getStringAttribute('mac_acl_default_action');
  }
  public set macAclDefaultAction(value: string) {
    this._macAclDefaultAction = value;
  }
  public resetMacAclDefaultAction() {
    this._macAclDefaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAclDefaultActionInput() {
    return this._macAclDefaultAction;
  }

  // netmask - computed: true, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // next_server - computed: true, optional: true, required: false
  private _nextServer?: string; 
  public get nextServer() {
    return this.getStringAttribute('next_server');
  }
  public set nextServer(value: string) {
    this._nextServer = value;
  }
  public resetNextServer() {
    this._nextServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextServerInput() {
    return this._nextServer;
  }

  // ntp_server1 - computed: true, optional: true, required: false
  private _ntpServer1?: string; 
  public get ntpServer1() {
    return this.getStringAttribute('ntp_server1');
  }
  public set ntpServer1(value: string) {
    this._ntpServer1 = value;
  }
  public resetNtpServer1() {
    this._ntpServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServer1Input() {
    return this._ntpServer1;
  }

  // ntp_server2 - computed: true, optional: true, required: false
  private _ntpServer2?: string; 
  public get ntpServer2() {
    return this.getStringAttribute('ntp_server2');
  }
  public set ntpServer2(value: string) {
    this._ntpServer2 = value;
  }
  public resetNtpServer2() {
    this._ntpServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServer2Input() {
    return this._ntpServer2;
  }

  // ntp_server3 - computed: true, optional: true, required: false
  private _ntpServer3?: string; 
  public get ntpServer3() {
    return this.getStringAttribute('ntp_server3');
  }
  public set ntpServer3(value: string) {
    this._ntpServer3 = value;
  }
  public resetNtpServer3() {
    this._ntpServer3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServer3Input() {
    return this._ntpServer3;
  }

  // ntp_service - computed: true, optional: true, required: false
  private _ntpService?: string; 
  public get ntpService() {
    return this.getStringAttribute('ntp_service');
  }
  public set ntpService(value: string) {
    this._ntpService = value;
  }
  public resetNtpService() {
    this._ntpService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServiceInput() {
    return this._ntpService;
  }

  // option1 - computed: true, optional: true, required: false
  private _option1?: string[]; 
  public get option1() {
    return cdktf.Fn.tolist(this.getListAttribute('option1'));
  }
  public set option1(value: string[]) {
    this._option1 = value;
  }
  public resetOption1() {
    this._option1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get option1Input() {
    return this._option1;
  }

  // option2 - computed: true, optional: true, required: false
  private _option2?: string[]; 
  public get option2() {
    return cdktf.Fn.tolist(this.getListAttribute('option2'));
  }
  public set option2(value: string[]) {
    this._option2 = value;
  }
  public resetOption2() {
    this._option2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get option2Input() {
    return this._option2;
  }

  // option3 - computed: true, optional: true, required: false
  private _option3?: string[]; 
  public get option3() {
    return cdktf.Fn.tolist(this.getListAttribute('option3'));
  }
  public set option3(value: string[]) {
    this._option3 = value;
  }
  public resetOption3() {
    this._option3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get option3Input() {
    return this._option3;
  }

  // option4 - computed: false, optional: true, required: false
  private _option4?: string; 
  public get option4() {
    return this.getStringAttribute('option4');
  }
  public set option4(value: string) {
    this._option4 = value;
  }
  public resetOption4() {
    this._option4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get option4Input() {
    return this._option4;
  }

  // option5 - computed: false, optional: true, required: false
  private _option5?: string; 
  public get option5() {
    return this.getStringAttribute('option5');
  }
  public set option5(value: string) {
    this._option5 = value;
  }
  public resetOption5() {
    this._option5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get option5Input() {
    return this._option5;
  }

  // option6 - computed: false, optional: true, required: false
  private _option6?: string; 
  public get option6() {
    return this.getStringAttribute('option6');
  }
  public set option6(value: string) {
    this._option6 = value;
  }
  public resetOption6() {
    this._option6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get option6Input() {
    return this._option6;
  }

  // relay_agent - computed: true, optional: true, required: false
  private _relayAgent?: string; 
  public get relayAgent() {
    return this.getStringAttribute('relay_agent');
  }
  public set relayAgent(value: string) {
    this._relayAgent = value;
  }
  public resetRelayAgent() {
    this._relayAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayAgentInput() {
    return this._relayAgent;
  }

  // server_type - computed: true, optional: true, required: false
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  public resetServerType() {
    this._serverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // shared_subnet - computed: true, optional: true, required: false
  private _sharedSubnet?: string; 
  public get sharedSubnet() {
    return this.getStringAttribute('shared_subnet');
  }
  public set sharedSubnet(value: string) {
    this._sharedSubnet = value;
  }
  public resetSharedSubnet() {
    this._sharedSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSubnetInput() {
    return this._sharedSubnet;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tftp_server - computed: true, optional: true, required: false
  private _tftpServer?: string[]; 
  public get tftpServer() {
    return cdktf.Fn.tolist(this.getListAttribute('tftp_server'));
  }
  public set tftpServer(value: string[]) {
    this._tftpServer = value;
  }
  public resetTftpServer() {
    this._tftpServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tftpServerInput() {
    return this._tftpServer;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // timezone_option - computed: true, optional: true, required: false
  private _timezoneOption?: string; 
  public get timezoneOption() {
    return this.getStringAttribute('timezone_option');
  }
  public set timezoneOption(value: string) {
    this._timezoneOption = value;
  }
  public resetTimezoneOption() {
    this._timezoneOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneOptionInput() {
    return this._timezoneOption;
  }

  // vci_match - computed: true, optional: true, required: false
  private _vciMatch?: string; 
  public get vciMatch() {
    return this.getStringAttribute('vci_match');
  }
  public set vciMatch(value: string) {
    this._vciMatch = value;
  }
  public resetVciMatch() {
    this._vciMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciMatchInput() {
    return this._vciMatch;
  }

  // vci_string - computed: true, optional: true, required: false
  private _vciString?: string[]; 
  public get vciString() {
    return cdktf.Fn.tolist(this.getListAttribute('vci_string'));
  }
  public set vciString(value: string[]) {
    this._vciString = value;
  }
  public resetVciString() {
    this._vciString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciStringInput() {
    return this._vciString;
  }

  // wifi_ac1 - computed: true, optional: true, required: false
  private _wifiAc1?: string; 
  public get wifiAc1() {
    return this.getStringAttribute('wifi_ac1');
  }
  public set wifiAc1(value: string) {
    this._wifiAc1 = value;
  }
  public resetWifiAc1() {
    this._wifiAc1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiAc1Input() {
    return this._wifiAc1;
  }

  // wifi_ac2 - computed: true, optional: true, required: false
  private _wifiAc2?: string; 
  public get wifiAc2() {
    return this.getStringAttribute('wifi_ac2');
  }
  public set wifiAc2(value: string) {
    this._wifiAc2 = value;
  }
  public resetWifiAc2() {
    this._wifiAc2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiAc2Input() {
    return this._wifiAc2;
  }

  // wifi_ac3 - computed: true, optional: true, required: false
  private _wifiAc3?: string; 
  public get wifiAc3() {
    return this.getStringAttribute('wifi_ac3');
  }
  public set wifiAc3(value: string) {
    this._wifiAc3 = value;
  }
  public resetWifiAc3() {
    this._wifiAc3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiAc3Input() {
    return this._wifiAc3;
  }

  // wifi_ac_service - computed: true, optional: true, required: false
  private _wifiAcService?: string; 
  public get wifiAcService() {
    return this.getStringAttribute('wifi_ac_service');
  }
  public set wifiAcService(value: string) {
    this._wifiAcService = value;
  }
  public resetWifiAcService() {
    this._wifiAcService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiAcServiceInput() {
    return this._wifiAcService;
  }

  // wins_server1 - computed: true, optional: true, required: false
  private _winsServer1?: string; 
  public get winsServer1() {
    return this.getStringAttribute('wins_server1');
  }
  public set winsServer1(value: string) {
    this._winsServer1 = value;
  }
  public resetWinsServer1() {
    this._winsServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winsServer1Input() {
    return this._winsServer1;
  }

  // wins_server2 - computed: true, optional: true, required: false
  private _winsServer2?: string; 
  public get winsServer2() {
    return this.getStringAttribute('wins_server2');
  }
  public set winsServer2(value: string) {
    this._winsServer2 = value;
  }
  public resetWinsServer2() {
    this._winsServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winsServer2Input() {
    return this._winsServer2;
  }

  // exclude_range - computed: false, optional: true, required: false
  private _excludeRange = new ObjectFspVlanDynamicMappingDhcpServerExcludeRangeList(this, "exclude_range", false);
  public get excludeRange() {
    return this._excludeRange;
  }
  public putExcludeRange(value: ObjectFspVlanDynamicMappingDhcpServerExcludeRange[] | cdktf.IResolvable) {
    this._excludeRange.internalValue = value;
  }
  public resetExcludeRange() {
    this._excludeRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeRangeInput() {
    return this._excludeRange.internalValue;
  }

  // ip_range - computed: false, optional: true, required: false
  private _ipRange = new ObjectFspVlanDynamicMappingDhcpServerIpRangeList(this, "ip_range", false);
  public get ipRange() {
    return this._ipRange;
  }
  public putIpRange(value: ObjectFspVlanDynamicMappingDhcpServerIpRange[] | cdktf.IResolvable) {
    this._ipRange.internalValue = value;
  }
  public resetIpRange() {
    this._ipRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new ObjectFspVlanDynamicMappingDhcpServerOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: ObjectFspVlanDynamicMappingDhcpServerOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // reserved_address - computed: false, optional: true, required: false
  private _reservedAddress = new ObjectFspVlanDynamicMappingDhcpServerReservedAddressList(this, "reserved_address", false);
  public get reservedAddress() {
    return this._reservedAddress;
  }
  public putReservedAddress(value: ObjectFspVlanDynamicMappingDhcpServerReservedAddress[] | cdktf.IResolvable) {
    this._reservedAddress.internalValue = value;
  }
  public resetReservedAddress() {
    this._reservedAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedAddressInput() {
    return this._reservedAddress.internalValue;
  }
}
export interface ObjectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#autonomous_flag ObjectFspVlan#autonomous_flag}
  */
  readonly autonomousFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#delegated_prefix_iaid ObjectFspVlan#delegated_prefix_iaid}
  */
  readonly delegatedPrefixIaid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#onlink_flag ObjectFspVlan#onlink_flag}
  */
  readonly onlinkFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#prefix_id ObjectFspVlan#prefix_id}
  */
  readonly prefixId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#rdnss ObjectFspVlan#rdnss}
  */
  readonly rdnss?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#rdnss_service ObjectFspVlan#rdnss_service}
  */
  readonly rdnssService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#subnet ObjectFspVlan#subnet}
  */
  readonly subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#upstream_interface ObjectFspVlan#upstream_interface}
  */
  readonly upstreamInterface?: string;
}

export function objectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStructToTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autonomous_flag: cdktf.stringToTerraform(struct!.autonomousFlag),
    delegated_prefix_iaid: cdktf.numberToTerraform(struct!.delegatedPrefixIaid),
    onlink_flag: cdktf.stringToTerraform(struct!.onlinkFlag),
    prefix_id: cdktf.numberToTerraform(struct!.prefixId),
    rdnss: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rdnss),
    rdnss_service: cdktf.stringToTerraform(struct!.rdnssService),
    subnet: cdktf.stringToTerraform(struct!.subnet),
    upstream_interface: cdktf.stringToTerraform(struct!.upstreamInterface),
  }
}


export function objectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStructToHclTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autonomous_flag: {
      value: cdktf.stringToHclTerraform(struct!.autonomousFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delegated_prefix_iaid: {
      value: cdktf.numberToHclTerraform(struct!.delegatedPrefixIaid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    onlink_flag: {
      value: cdktf.stringToHclTerraform(struct!.onlinkFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_id: {
      value: cdktf.numberToHclTerraform(struct!.prefixId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdnss: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rdnss),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rdnss_service: {
      value: cdktf.stringToHclTerraform(struct!.rdnssService),
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
    upstream_interface: {
      value: cdktf.stringToHclTerraform(struct!.upstreamInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autonomousFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.autonomousFlag = this._autonomousFlag;
    }
    if (this._delegatedPrefixIaid !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegatedPrefixIaid = this._delegatedPrefixIaid;
    }
    if (this._onlinkFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlinkFlag = this._onlinkFlag;
    }
    if (this._prefixId !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixId = this._prefixId;
    }
    if (this._rdnss !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdnss = this._rdnss;
    }
    if (this._rdnssService !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdnssService = this._rdnssService;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._upstreamInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamInterface = this._upstreamInterface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autonomousFlag = undefined;
      this._delegatedPrefixIaid = undefined;
      this._onlinkFlag = undefined;
      this._prefixId = undefined;
      this._rdnss = undefined;
      this._rdnssService = undefined;
      this._subnet = undefined;
      this._upstreamInterface = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autonomousFlag = value.autonomousFlag;
      this._delegatedPrefixIaid = value.delegatedPrefixIaid;
      this._onlinkFlag = value.onlinkFlag;
      this._prefixId = value.prefixId;
      this._rdnss = value.rdnss;
      this._rdnssService = value.rdnssService;
      this._subnet = value.subnet;
      this._upstreamInterface = value.upstreamInterface;
    }
  }

  // autonomous_flag - computed: false, optional: true, required: false
  private _autonomousFlag?: string; 
  public get autonomousFlag() {
    return this.getStringAttribute('autonomous_flag');
  }
  public set autonomousFlag(value: string) {
    this._autonomousFlag = value;
  }
  public resetAutonomousFlag() {
    this._autonomousFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousFlagInput() {
    return this._autonomousFlag;
  }

  // delegated_prefix_iaid - computed: false, optional: true, required: false
  private _delegatedPrefixIaid?: number; 
  public get delegatedPrefixIaid() {
    return this.getNumberAttribute('delegated_prefix_iaid');
  }
  public set delegatedPrefixIaid(value: number) {
    this._delegatedPrefixIaid = value;
  }
  public resetDelegatedPrefixIaid() {
    this._delegatedPrefixIaid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedPrefixIaidInput() {
    return this._delegatedPrefixIaid;
  }

  // onlink_flag - computed: false, optional: true, required: false
  private _onlinkFlag?: string; 
  public get onlinkFlag() {
    return this.getStringAttribute('onlink_flag');
  }
  public set onlinkFlag(value: string) {
    this._onlinkFlag = value;
  }
  public resetOnlinkFlag() {
    this._onlinkFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlinkFlagInput() {
    return this._onlinkFlag;
  }

  // prefix_id - computed: false, optional: true, required: false
  private _prefixId?: number; 
  public get prefixId() {
    return this.getNumberAttribute('prefix_id');
  }
  public set prefixId(value: number) {
    this._prefixId = value;
  }
  public resetPrefixId() {
    this._prefixId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixIdInput() {
    return this._prefixId;
  }

  // rdnss - computed: true, optional: true, required: false
  private _rdnss?: string[]; 
  public get rdnss() {
    return cdktf.Fn.tolist(this.getListAttribute('rdnss'));
  }
  public set rdnss(value: string[]) {
    this._rdnss = value;
  }
  public resetRdnss() {
    this._rdnss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdnssInput() {
    return this._rdnss;
  }

  // rdnss_service - computed: false, optional: true, required: false
  private _rdnssService?: string; 
  public get rdnssService() {
    return this.getStringAttribute('rdnss_service');
  }
  public set rdnssService(value: string) {
    this._rdnssService = value;
  }
  public resetRdnssService() {
    this._rdnssService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdnssServiceInput() {
    return this._rdnssService;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // upstream_interface - computed: false, optional: true, required: false
  private _upstreamInterface?: string; 
  public get upstreamInterface() {
    return this.getStringAttribute('upstream_interface');
  }
  public set upstreamInterface(value: string) {
    this._upstreamInterface = value;
  }
  public resetUpstreamInterface() {
    this._upstreamInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamInterfaceInput() {
    return this._upstreamInterface;
  }
}

export class ObjectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStructList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStruct[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStructOutputReference {
    return new ObjectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#prefix ObjectFspVlan#prefix}
  */
  readonly prefix?: string;
}

export function objectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddrToTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function objectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddrToHclTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefix = value.prefix;
    }
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class ObjectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddrList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddr[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddrOutputReference {
    return new ObjectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#autonomous_flag ObjectFspVlan#autonomous_flag}
  */
  readonly autonomousFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dnssl ObjectFspVlan#dnssl}
  */
  readonly dnssl?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#onlink_flag ObjectFspVlan#onlink_flag}
  */
  readonly onlinkFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#preferred_life_time ObjectFspVlan#preferred_life_time}
  */
  readonly preferredLifeTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#prefix ObjectFspVlan#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#rdnss ObjectFspVlan#rdnss}
  */
  readonly rdnss?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#valid_life_time ObjectFspVlan#valid_life_time}
  */
  readonly validLifeTime?: number;
}

export function objectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStructToTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autonomous_flag: cdktf.stringToTerraform(struct!.autonomousFlag),
    dnssl: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnssl),
    onlink_flag: cdktf.stringToTerraform(struct!.onlinkFlag),
    preferred_life_time: cdktf.numberToTerraform(struct!.preferredLifeTime),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    rdnss: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rdnss),
    valid_life_time: cdktf.numberToTerraform(struct!.validLifeTime),
  }
}


export function objectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStructToHclTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autonomous_flag: {
      value: cdktf.stringToHclTerraform(struct!.autonomousFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dnssl: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnssl),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    onlink_flag: {
      value: cdktf.stringToHclTerraform(struct!.onlinkFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_life_time: {
      value: cdktf.numberToHclTerraform(struct!.preferredLifeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rdnss: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rdnss),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    valid_life_time: {
      value: cdktf.numberToHclTerraform(struct!.validLifeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autonomousFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.autonomousFlag = this._autonomousFlag;
    }
    if (this._dnssl !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnssl = this._dnssl;
    }
    if (this._onlinkFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlinkFlag = this._onlinkFlag;
    }
    if (this._preferredLifeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredLifeTime = this._preferredLifeTime;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._rdnss !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdnss = this._rdnss;
    }
    if (this._validLifeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.validLifeTime = this._validLifeTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autonomousFlag = undefined;
      this._dnssl = undefined;
      this._onlinkFlag = undefined;
      this._preferredLifeTime = undefined;
      this._prefix = undefined;
      this._rdnss = undefined;
      this._validLifeTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autonomousFlag = value.autonomousFlag;
      this._dnssl = value.dnssl;
      this._onlinkFlag = value.onlinkFlag;
      this._preferredLifeTime = value.preferredLifeTime;
      this._prefix = value.prefix;
      this._rdnss = value.rdnss;
      this._validLifeTime = value.validLifeTime;
    }
  }

  // autonomous_flag - computed: false, optional: true, required: false
  private _autonomousFlag?: string; 
  public get autonomousFlag() {
    return this.getStringAttribute('autonomous_flag');
  }
  public set autonomousFlag(value: string) {
    this._autonomousFlag = value;
  }
  public resetAutonomousFlag() {
    this._autonomousFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousFlagInput() {
    return this._autonomousFlag;
  }

  // dnssl - computed: true, optional: true, required: false
  private _dnssl?: string[]; 
  public get dnssl() {
    return cdktf.Fn.tolist(this.getListAttribute('dnssl'));
  }
  public set dnssl(value: string[]) {
    this._dnssl = value;
  }
  public resetDnssl() {
    this._dnssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsslInput() {
    return this._dnssl;
  }

  // onlink_flag - computed: false, optional: true, required: false
  private _onlinkFlag?: string; 
  public get onlinkFlag() {
    return this.getStringAttribute('onlink_flag');
  }
  public set onlinkFlag(value: string) {
    this._onlinkFlag = value;
  }
  public resetOnlinkFlag() {
    this._onlinkFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlinkFlagInput() {
    return this._onlinkFlag;
  }

  // preferred_life_time - computed: false, optional: true, required: false
  private _preferredLifeTime?: number; 
  public get preferredLifeTime() {
    return this.getNumberAttribute('preferred_life_time');
  }
  public set preferredLifeTime(value: number) {
    this._preferredLifeTime = value;
  }
  public resetPreferredLifeTime() {
    this._preferredLifeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLifeTimeInput() {
    return this._preferredLifeTime;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // rdnss - computed: true, optional: true, required: false
  private _rdnss?: string[]; 
  public get rdnss() {
    return cdktf.Fn.tolist(this.getListAttribute('rdnss'));
  }
  public set rdnss(value: string[]) {
    this._rdnss = value;
  }
  public resetRdnss() {
    this._rdnss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdnssInput() {
    return this._rdnss;
  }

  // valid_life_time - computed: false, optional: true, required: false
  private _validLifeTime?: number; 
  public get validLifeTime() {
    return this.getNumberAttribute('valid_life_time');
  }
  public set validLifeTime(value: number) {
    this._validLifeTime = value;
  }
  public resetValidLifeTime() {
    this._validLifeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validLifeTimeInput() {
    return this._validLifeTime;
  }
}

export class ObjectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStructList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStruct[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStructOutputReference {
    return new ObjectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanDynamicMappingInterfaceIpv6Vrrp6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#accept_mode ObjectFspVlan#accept_mode}
  */
  readonly acceptMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#adv_interval ObjectFspVlan#adv_interval}
  */
  readonly advInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ignore_default_route ObjectFspVlan#ignore_default_route}
  */
  readonly ignoreDefaultRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#preempt ObjectFspVlan#preempt}
  */
  readonly preempt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#priority ObjectFspVlan#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#start_time ObjectFspVlan#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#status ObjectFspVlan#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vrdst6 ObjectFspVlan#vrdst6}
  */
  readonly vrdst6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vrgrp ObjectFspVlan#vrgrp}
  */
  readonly vrgrp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vrid ObjectFspVlan#vrid}
  */
  readonly vrid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vrip6 ObjectFspVlan#vrip6}
  */
  readonly vrip6?: string;
}

export function objectFspVlanDynamicMappingInterfaceIpv6Vrrp6ToTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceIpv6Vrrp6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_mode: cdktf.stringToTerraform(struct!.acceptMode),
    adv_interval: cdktf.numberToTerraform(struct!.advInterval),
    ignore_default_route: cdktf.stringToTerraform(struct!.ignoreDefaultRoute),
    preempt: cdktf.stringToTerraform(struct!.preempt),
    priority: cdktf.numberToTerraform(struct!.priority),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    status: cdktf.stringToTerraform(struct!.status),
    vrdst6: cdktf.stringToTerraform(struct!.vrdst6),
    vrgrp: cdktf.numberToTerraform(struct!.vrgrp),
    vrid: cdktf.numberToTerraform(struct!.vrid),
    vrip6: cdktf.stringToTerraform(struct!.vrip6),
  }
}


export function objectFspVlanDynamicMappingInterfaceIpv6Vrrp6ToHclTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceIpv6Vrrp6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_mode: {
      value: cdktf.stringToHclTerraform(struct!.acceptMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    adv_interval: {
      value: cdktf.numberToHclTerraform(struct!.advInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_default_route: {
      value: cdktf.stringToHclTerraform(struct!.ignoreDefaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preempt: {
      value: cdktf.stringToHclTerraform(struct!.preempt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrdst6: {
      value: cdktf.stringToHclTerraform(struct!.vrdst6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrgrp: {
      value: cdktf.numberToHclTerraform(struct!.vrgrp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrip6: {
      value: cdktf.stringToHclTerraform(struct!.vrip6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanDynamicMappingInterfaceIpv6Vrrp6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanDynamicMappingInterfaceIpv6Vrrp6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptMode = this._acceptMode;
    }
    if (this._advInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.advInterval = this._advInterval;
    }
    if (this._ignoreDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDefaultRoute = this._ignoreDefaultRoute;
    }
    if (this._preempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.preempt = this._preempt;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._vrdst6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrdst6 = this._vrdst6;
    }
    if (this._vrgrp !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrgrp = this._vrgrp;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    if (this._vrip6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrip6 = this._vrip6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanDynamicMappingInterfaceIpv6Vrrp6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptMode = undefined;
      this._advInterval = undefined;
      this._ignoreDefaultRoute = undefined;
      this._preempt = undefined;
      this._priority = undefined;
      this._startTime = undefined;
      this._status = undefined;
      this._vrdst6 = undefined;
      this._vrgrp = undefined;
      this._vrid = undefined;
      this._vrip6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptMode = value.acceptMode;
      this._advInterval = value.advInterval;
      this._ignoreDefaultRoute = value.ignoreDefaultRoute;
      this._preempt = value.preempt;
      this._priority = value.priority;
      this._startTime = value.startTime;
      this._status = value.status;
      this._vrdst6 = value.vrdst6;
      this._vrgrp = value.vrgrp;
      this._vrid = value.vrid;
      this._vrip6 = value.vrip6;
    }
  }

  // accept_mode - computed: false, optional: true, required: false
  private _acceptMode?: string; 
  public get acceptMode() {
    return this.getStringAttribute('accept_mode');
  }
  public set acceptMode(value: string) {
    this._acceptMode = value;
  }
  public resetAcceptMode() {
    this._acceptMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptModeInput() {
    return this._acceptMode;
  }

  // adv_interval - computed: false, optional: true, required: false
  private _advInterval?: number; 
  public get advInterval() {
    return this.getNumberAttribute('adv_interval');
  }
  public set advInterval(value: number) {
    this._advInterval = value;
  }
  public resetAdvInterval() {
    this._advInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advIntervalInput() {
    return this._advInterval;
  }

  // ignore_default_route - computed: false, optional: true, required: false
  private _ignoreDefaultRoute?: string; 
  public get ignoreDefaultRoute() {
    return this.getStringAttribute('ignore_default_route');
  }
  public set ignoreDefaultRoute(value: string) {
    this._ignoreDefaultRoute = value;
  }
  public resetIgnoreDefaultRoute() {
    this._ignoreDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDefaultRouteInput() {
    return this._ignoreDefaultRoute;
  }

  // preempt - computed: false, optional: true, required: false
  private _preempt?: string; 
  public get preempt() {
    return this.getStringAttribute('preempt');
  }
  public set preempt(value: string) {
    this._preempt = value;
  }
  public resetPreempt() {
    this._preempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptInput() {
    return this._preempt;
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

  // start_time - computed: false, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // vrdst6 - computed: false, optional: true, required: false
  private _vrdst6?: string; 
  public get vrdst6() {
    return this.getStringAttribute('vrdst6');
  }
  public set vrdst6(value: string) {
    this._vrdst6 = value;
  }
  public resetVrdst6() {
    this._vrdst6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrdst6Input() {
    return this._vrdst6;
  }

  // vrgrp - computed: false, optional: true, required: false
  private _vrgrp?: number; 
  public get vrgrp() {
    return this.getNumberAttribute('vrgrp');
  }
  public set vrgrp(value: number) {
    this._vrgrp = value;
  }
  public resetVrgrp() {
    this._vrgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrgrpInput() {
    return this._vrgrp;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }

  // vrip6 - computed: false, optional: true, required: false
  private _vrip6?: string; 
  public get vrip6() {
    return this.getStringAttribute('vrip6');
  }
  public set vrip6(value: string) {
    this._vrip6 = value;
  }
  public resetVrip6() {
    this._vrip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrip6Input() {
    return this._vrip6;
  }
}

export class ObjectFspVlanDynamicMappingInterfaceIpv6Vrrp6List extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanDynamicMappingInterfaceIpv6Vrrp6[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanDynamicMappingInterfaceIpv6Vrrp6OutputReference {
    return new ObjectFspVlanDynamicMappingInterfaceIpv6Vrrp6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanDynamicMappingInterfaceIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#autoconf ObjectFspVlan#autoconf}
  */
  readonly autoconf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#cli_conn6_status ObjectFspVlan#cli_conn6_status}
  */
  readonly cliConn6Status?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp6_client_options ObjectFspVlan#dhcp6_client_options}
  */
  readonly dhcp6ClientOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp6_information_request ObjectFspVlan#dhcp6_information_request}
  */
  readonly dhcp6InformationRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp6_prefix_delegation ObjectFspVlan#dhcp6_prefix_delegation}
  */
  readonly dhcp6PrefixDelegation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp6_prefix_hint ObjectFspVlan#dhcp6_prefix_hint}
  */
  readonly dhcp6PrefixHint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp6_prefix_hint_plt ObjectFspVlan#dhcp6_prefix_hint_plt}
  */
  readonly dhcp6PrefixHintPlt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp6_prefix_hint_vlt ObjectFspVlan#dhcp6_prefix_hint_vlt}
  */
  readonly dhcp6PrefixHintVlt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp6_relay_interface_id ObjectFspVlan#dhcp6_relay_interface_id}
  */
  readonly dhcp6RelayInterfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp6_relay_ip ObjectFspVlan#dhcp6_relay_ip}
  */
  readonly dhcp6RelayIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp6_relay_service ObjectFspVlan#dhcp6_relay_service}
  */
  readonly dhcp6RelayService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp6_relay_source_interface ObjectFspVlan#dhcp6_relay_source_interface}
  */
  readonly dhcp6RelaySourceInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp6_relay_source_ip ObjectFspVlan#dhcp6_relay_source_ip}
  */
  readonly dhcp6RelaySourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp6_relay_type ObjectFspVlan#dhcp6_relay_type}
  */
  readonly dhcp6RelayType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#icmp6_send_redirect ObjectFspVlan#icmp6_send_redirect}
  */
  readonly icmp6SendRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#interface_identifier ObjectFspVlan#interface_identifier}
  */
  readonly interfaceIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_address ObjectFspVlan#ip6_address}
  */
  readonly ip6Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_allowaccess ObjectFspVlan#ip6_allowaccess}
  */
  readonly ip6Allowaccess?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_default_life ObjectFspVlan#ip6_default_life}
  */
  readonly ip6DefaultLife?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_delegated_prefix_iaid ObjectFspVlan#ip6_delegated_prefix_iaid}
  */
  readonly ip6DelegatedPrefixIaid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_dns_server_override ObjectFspVlan#ip6_dns_server_override}
  */
  readonly ip6DnsServerOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_hop_limit ObjectFspVlan#ip6_hop_limit}
  */
  readonly ip6HopLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_link_mtu ObjectFspVlan#ip6_link_mtu}
  */
  readonly ip6LinkMtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_manage_flag ObjectFspVlan#ip6_manage_flag}
  */
  readonly ip6ManageFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_max_interval ObjectFspVlan#ip6_max_interval}
  */
  readonly ip6MaxInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_min_interval ObjectFspVlan#ip6_min_interval}
  */
  readonly ip6MinInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_mode ObjectFspVlan#ip6_mode}
  */
  readonly ip6Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_other_flag ObjectFspVlan#ip6_other_flag}
  */
  readonly ip6OtherFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_prefix_mode ObjectFspVlan#ip6_prefix_mode}
  */
  readonly ip6PrefixMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_reachable_time ObjectFspVlan#ip6_reachable_time}
  */
  readonly ip6ReachableTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_retrans_time ObjectFspVlan#ip6_retrans_time}
  */
  readonly ip6RetransTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_send_adv ObjectFspVlan#ip6_send_adv}
  */
  readonly ip6SendAdv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_subnet ObjectFspVlan#ip6_subnet}
  */
  readonly ip6Subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_upstream_interface ObjectFspVlan#ip6_upstream_interface}
  */
  readonly ip6UpstreamInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#nd_cert ObjectFspVlan#nd_cert}
  */
  readonly ndCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#nd_cga_modifier ObjectFspVlan#nd_cga_modifier}
  */
  readonly ndCgaModifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#nd_mode ObjectFspVlan#nd_mode}
  */
  readonly ndMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#nd_security_level ObjectFspVlan#nd_security_level}
  */
  readonly ndSecurityLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#nd_timestamp_delta ObjectFspVlan#nd_timestamp_delta}
  */
  readonly ndTimestampDelta?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#nd_timestamp_fuzz ObjectFspVlan#nd_timestamp_fuzz}
  */
  readonly ndTimestampFuzz?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ra_send_mtu ObjectFspVlan#ra_send_mtu}
  */
  readonly raSendMtu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#unique_autoconf_addr ObjectFspVlan#unique_autoconf_addr}
  */
  readonly uniqueAutoconfAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vrip6_link_local ObjectFspVlan#vrip6_link_local}
  */
  readonly vrip6LinkLocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vrrp_virtual_mac6 ObjectFspVlan#vrrp_virtual_mac6}
  */
  readonly vrrpVirtualMac6?: string;
  /**
  * ip6_delegated_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_delegated_prefix_list ObjectFspVlan#ip6_delegated_prefix_list}
  */
  readonly ip6DelegatedPrefixList?: ObjectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStruct[] | cdktf.IResolvable;
  /**
  * ip6_extra_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_extra_addr ObjectFspVlan#ip6_extra_addr}
  */
  readonly ip6ExtraAddr?: ObjectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddr[] | cdktf.IResolvable;
  /**
  * ip6_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_prefix_list ObjectFspVlan#ip6_prefix_list}
  */
  readonly ip6PrefixList?: ObjectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStruct[] | cdktf.IResolvable;
  /**
  * vrrp6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vrrp6 ObjectFspVlan#vrrp6}
  */
  readonly vrrp6?: ObjectFspVlanDynamicMappingInterfaceIpv6Vrrp6[] | cdktf.IResolvable;
}

export function objectFspVlanDynamicMappingInterfaceIpv6ToTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceIpv6OutputReference | ObjectFspVlanDynamicMappingInterfaceIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoconf: cdktf.stringToTerraform(struct!.autoconf),
    cli_conn6_status: cdktf.numberToTerraform(struct!.cliConn6Status),
    dhcp6_client_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dhcp6ClientOptions),
    dhcp6_information_request: cdktf.stringToTerraform(struct!.dhcp6InformationRequest),
    dhcp6_prefix_delegation: cdktf.stringToTerraform(struct!.dhcp6PrefixDelegation),
    dhcp6_prefix_hint: cdktf.stringToTerraform(struct!.dhcp6PrefixHint),
    dhcp6_prefix_hint_plt: cdktf.numberToTerraform(struct!.dhcp6PrefixHintPlt),
    dhcp6_prefix_hint_vlt: cdktf.numberToTerraform(struct!.dhcp6PrefixHintVlt),
    dhcp6_relay_interface_id: cdktf.stringToTerraform(struct!.dhcp6RelayInterfaceId),
    dhcp6_relay_ip: cdktf.stringToTerraform(struct!.dhcp6RelayIp),
    dhcp6_relay_service: cdktf.stringToTerraform(struct!.dhcp6RelayService),
    dhcp6_relay_source_interface: cdktf.stringToTerraform(struct!.dhcp6RelaySourceInterface),
    dhcp6_relay_source_ip: cdktf.stringToTerraform(struct!.dhcp6RelaySourceIp),
    dhcp6_relay_type: cdktf.stringToTerraform(struct!.dhcp6RelayType),
    icmp6_send_redirect: cdktf.stringToTerraform(struct!.icmp6SendRedirect),
    interface_identifier: cdktf.stringToTerraform(struct!.interfaceIdentifier),
    ip6_address: cdktf.stringToTerraform(struct!.ip6Address),
    ip6_allowaccess: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ip6Allowaccess),
    ip6_default_life: cdktf.numberToTerraform(struct!.ip6DefaultLife),
    ip6_delegated_prefix_iaid: cdktf.numberToTerraform(struct!.ip6DelegatedPrefixIaid),
    ip6_dns_server_override: cdktf.stringToTerraform(struct!.ip6DnsServerOverride),
    ip6_hop_limit: cdktf.numberToTerraform(struct!.ip6HopLimit),
    ip6_link_mtu: cdktf.numberToTerraform(struct!.ip6LinkMtu),
    ip6_manage_flag: cdktf.stringToTerraform(struct!.ip6ManageFlag),
    ip6_max_interval: cdktf.numberToTerraform(struct!.ip6MaxInterval),
    ip6_min_interval: cdktf.numberToTerraform(struct!.ip6MinInterval),
    ip6_mode: cdktf.stringToTerraform(struct!.ip6Mode),
    ip6_other_flag: cdktf.stringToTerraform(struct!.ip6OtherFlag),
    ip6_prefix_mode: cdktf.stringToTerraform(struct!.ip6PrefixMode),
    ip6_reachable_time: cdktf.numberToTerraform(struct!.ip6ReachableTime),
    ip6_retrans_time: cdktf.numberToTerraform(struct!.ip6RetransTime),
    ip6_send_adv: cdktf.stringToTerraform(struct!.ip6SendAdv),
    ip6_subnet: cdktf.stringToTerraform(struct!.ip6Subnet),
    ip6_upstream_interface: cdktf.stringToTerraform(struct!.ip6UpstreamInterface),
    nd_cert: cdktf.stringToTerraform(struct!.ndCert),
    nd_cga_modifier: cdktf.stringToTerraform(struct!.ndCgaModifier),
    nd_mode: cdktf.stringToTerraform(struct!.ndMode),
    nd_security_level: cdktf.numberToTerraform(struct!.ndSecurityLevel),
    nd_timestamp_delta: cdktf.numberToTerraform(struct!.ndTimestampDelta),
    nd_timestamp_fuzz: cdktf.numberToTerraform(struct!.ndTimestampFuzz),
    ra_send_mtu: cdktf.stringToTerraform(struct!.raSendMtu),
    unique_autoconf_addr: cdktf.stringToTerraform(struct!.uniqueAutoconfAddr),
    vrip6_link_local: cdktf.stringToTerraform(struct!.vrip6LinkLocal),
    vrrp_virtual_mac6: cdktf.stringToTerraform(struct!.vrrpVirtualMac6),
    ip6_delegated_prefix_list: cdktf.listMapper(objectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStructToTerraform, true)(struct!.ip6DelegatedPrefixList),
    ip6_extra_addr: cdktf.listMapper(objectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddrToTerraform, true)(struct!.ip6ExtraAddr),
    ip6_prefix_list: cdktf.listMapper(objectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStructToTerraform, true)(struct!.ip6PrefixList),
    vrrp6: cdktf.listMapper(objectFspVlanDynamicMappingInterfaceIpv6Vrrp6ToTerraform, true)(struct!.vrrp6),
  }
}


export function objectFspVlanDynamicMappingInterfaceIpv6ToHclTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceIpv6OutputReference | ObjectFspVlanDynamicMappingInterfaceIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoconf: {
      value: cdktf.stringToHclTerraform(struct!.autoconf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cli_conn6_status: {
      value: cdktf.numberToHclTerraform(struct!.cliConn6Status),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dhcp6_client_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dhcp6ClientOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    dhcp6_information_request: {
      value: cdktf.stringToHclTerraform(struct!.dhcp6InformationRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp6_prefix_delegation: {
      value: cdktf.stringToHclTerraform(struct!.dhcp6PrefixDelegation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp6_prefix_hint: {
      value: cdktf.stringToHclTerraform(struct!.dhcp6PrefixHint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp6_prefix_hint_plt: {
      value: cdktf.numberToHclTerraform(struct!.dhcp6PrefixHintPlt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dhcp6_prefix_hint_vlt: {
      value: cdktf.numberToHclTerraform(struct!.dhcp6PrefixHintVlt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dhcp6_relay_interface_id: {
      value: cdktf.stringToHclTerraform(struct!.dhcp6RelayInterfaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp6_relay_ip: {
      value: cdktf.stringToHclTerraform(struct!.dhcp6RelayIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp6_relay_service: {
      value: cdktf.stringToHclTerraform(struct!.dhcp6RelayService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp6_relay_source_interface: {
      value: cdktf.stringToHclTerraform(struct!.dhcp6RelaySourceInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp6_relay_source_ip: {
      value: cdktf.stringToHclTerraform(struct!.dhcp6RelaySourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp6_relay_type: {
      value: cdktf.stringToHclTerraform(struct!.dhcp6RelayType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp6_send_redirect: {
      value: cdktf.stringToHclTerraform(struct!.icmp6SendRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_identifier: {
      value: cdktf.stringToHclTerraform(struct!.interfaceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_address: {
      value: cdktf.stringToHclTerraform(struct!.ip6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_allowaccess: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ip6Allowaccess),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ip6_default_life: {
      value: cdktf.numberToHclTerraform(struct!.ip6DefaultLife),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_delegated_prefix_iaid: {
      value: cdktf.numberToHclTerraform(struct!.ip6DelegatedPrefixIaid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_dns_server_override: {
      value: cdktf.stringToHclTerraform(struct!.ip6DnsServerOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_hop_limit: {
      value: cdktf.numberToHclTerraform(struct!.ip6HopLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_link_mtu: {
      value: cdktf.numberToHclTerraform(struct!.ip6LinkMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_manage_flag: {
      value: cdktf.stringToHclTerraform(struct!.ip6ManageFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_max_interval: {
      value: cdktf.numberToHclTerraform(struct!.ip6MaxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_min_interval: {
      value: cdktf.numberToHclTerraform(struct!.ip6MinInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_mode: {
      value: cdktf.stringToHclTerraform(struct!.ip6Mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_other_flag: {
      value: cdktf.stringToHclTerraform(struct!.ip6OtherFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_prefix_mode: {
      value: cdktf.stringToHclTerraform(struct!.ip6PrefixMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_reachable_time: {
      value: cdktf.numberToHclTerraform(struct!.ip6ReachableTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_retrans_time: {
      value: cdktf.numberToHclTerraform(struct!.ip6RetransTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_send_adv: {
      value: cdktf.stringToHclTerraform(struct!.ip6SendAdv),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_subnet: {
      value: cdktf.stringToHclTerraform(struct!.ip6Subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_upstream_interface: {
      value: cdktf.stringToHclTerraform(struct!.ip6UpstreamInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nd_cert: {
      value: cdktf.stringToHclTerraform(struct!.ndCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nd_cga_modifier: {
      value: cdktf.stringToHclTerraform(struct!.ndCgaModifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nd_mode: {
      value: cdktf.stringToHclTerraform(struct!.ndMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nd_security_level: {
      value: cdktf.numberToHclTerraform(struct!.ndSecurityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd_timestamp_delta: {
      value: cdktf.numberToHclTerraform(struct!.ndTimestampDelta),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd_timestamp_fuzz: {
      value: cdktf.numberToHclTerraform(struct!.ndTimestampFuzz),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ra_send_mtu: {
      value: cdktf.stringToHclTerraform(struct!.raSendMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unique_autoconf_addr: {
      value: cdktf.stringToHclTerraform(struct!.uniqueAutoconfAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrip6_link_local: {
      value: cdktf.stringToHclTerraform(struct!.vrip6LinkLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrrp_virtual_mac6: {
      value: cdktf.stringToHclTerraform(struct!.vrrpVirtualMac6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_delegated_prefix_list: {
      value: cdktf.listMapperHcl(objectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStructToHclTerraform, true)(struct!.ip6DelegatedPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStructList",
    },
    ip6_extra_addr: {
      value: cdktf.listMapperHcl(objectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddrToHclTerraform, true)(struct!.ip6ExtraAddr),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddrList",
    },
    ip6_prefix_list: {
      value: cdktf.listMapperHcl(objectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStructToHclTerraform, true)(struct!.ip6PrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStructList",
    },
    vrrp6: {
      value: cdktf.listMapperHcl(objectFspVlanDynamicMappingInterfaceIpv6Vrrp6ToHclTerraform, true)(struct!.vrrp6),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanDynamicMappingInterfaceIpv6Vrrp6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanDynamicMappingInterfaceIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFspVlanDynamicMappingInterfaceIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoconf !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoconf = this._autoconf;
    }
    if (this._cliConn6Status !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliConn6Status = this._cliConn6Status;
    }
    if (this._dhcp6ClientOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6ClientOptions = this._dhcp6ClientOptions;
    }
    if (this._dhcp6InformationRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6InformationRequest = this._dhcp6InformationRequest;
    }
    if (this._dhcp6PrefixDelegation !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6PrefixDelegation = this._dhcp6PrefixDelegation;
    }
    if (this._dhcp6PrefixHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6PrefixHint = this._dhcp6PrefixHint;
    }
    if (this._dhcp6PrefixHintPlt !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6PrefixHintPlt = this._dhcp6PrefixHintPlt;
    }
    if (this._dhcp6PrefixHintVlt !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6PrefixHintVlt = this._dhcp6PrefixHintVlt;
    }
    if (this._dhcp6RelayInterfaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6RelayInterfaceId = this._dhcp6RelayInterfaceId;
    }
    if (this._dhcp6RelayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6RelayIp = this._dhcp6RelayIp;
    }
    if (this._dhcp6RelayService !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6RelayService = this._dhcp6RelayService;
    }
    if (this._dhcp6RelaySourceInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6RelaySourceInterface = this._dhcp6RelaySourceInterface;
    }
    if (this._dhcp6RelaySourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6RelaySourceIp = this._dhcp6RelaySourceIp;
    }
    if (this._dhcp6RelayType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6RelayType = this._dhcp6RelayType;
    }
    if (this._icmp6SendRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp6SendRedirect = this._icmp6SendRedirect;
    }
    if (this._interfaceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIdentifier = this._interfaceIdentifier;
    }
    if (this._ip6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Address = this._ip6Address;
    }
    if (this._ip6Allowaccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Allowaccess = this._ip6Allowaccess;
    }
    if (this._ip6DefaultLife !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6DefaultLife = this._ip6DefaultLife;
    }
    if (this._ip6DelegatedPrefixIaid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6DelegatedPrefixIaid = this._ip6DelegatedPrefixIaid;
    }
    if (this._ip6DnsServerOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6DnsServerOverride = this._ip6DnsServerOverride;
    }
    if (this._ip6HopLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6HopLimit = this._ip6HopLimit;
    }
    if (this._ip6LinkMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6LinkMtu = this._ip6LinkMtu;
    }
    if (this._ip6ManageFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6ManageFlag = this._ip6ManageFlag;
    }
    if (this._ip6MaxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6MaxInterval = this._ip6MaxInterval;
    }
    if (this._ip6MinInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6MinInterval = this._ip6MinInterval;
    }
    if (this._ip6Mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Mode = this._ip6Mode;
    }
    if (this._ip6OtherFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6OtherFlag = this._ip6OtherFlag;
    }
    if (this._ip6PrefixMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6PrefixMode = this._ip6PrefixMode;
    }
    if (this._ip6ReachableTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6ReachableTime = this._ip6ReachableTime;
    }
    if (this._ip6RetransTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6RetransTime = this._ip6RetransTime;
    }
    if (this._ip6SendAdv !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6SendAdv = this._ip6SendAdv;
    }
    if (this._ip6Subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Subnet = this._ip6Subnet;
    }
    if (this._ip6UpstreamInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6UpstreamInterface = this._ip6UpstreamInterface;
    }
    if (this._ndCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.ndCert = this._ndCert;
    }
    if (this._ndCgaModifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.ndCgaModifier = this._ndCgaModifier;
    }
    if (this._ndMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ndMode = this._ndMode;
    }
    if (this._ndSecurityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.ndSecurityLevel = this._ndSecurityLevel;
    }
    if (this._ndTimestampDelta !== undefined) {
      hasAnyValues = true;
      internalValueResult.ndTimestampDelta = this._ndTimestampDelta;
    }
    if (this._ndTimestampFuzz !== undefined) {
      hasAnyValues = true;
      internalValueResult.ndTimestampFuzz = this._ndTimestampFuzz;
    }
    if (this._raSendMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.raSendMtu = this._raSendMtu;
    }
    if (this._uniqueAutoconfAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueAutoconfAddr = this._uniqueAutoconfAddr;
    }
    if (this._vrip6LinkLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrip6LinkLocal = this._vrip6LinkLocal;
    }
    if (this._vrrpVirtualMac6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrrpVirtualMac6 = this._vrrpVirtualMac6;
    }
    if (this._ip6DelegatedPrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6DelegatedPrefixList = this._ip6DelegatedPrefixList?.internalValue;
    }
    if (this._ip6ExtraAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6ExtraAddr = this._ip6ExtraAddr?.internalValue;
    }
    if (this._ip6PrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6PrefixList = this._ip6PrefixList?.internalValue;
    }
    if (this._vrrp6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrrp6 = this._vrrp6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanDynamicMappingInterfaceIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoconf = undefined;
      this._cliConn6Status = undefined;
      this._dhcp6ClientOptions = undefined;
      this._dhcp6InformationRequest = undefined;
      this._dhcp6PrefixDelegation = undefined;
      this._dhcp6PrefixHint = undefined;
      this._dhcp6PrefixHintPlt = undefined;
      this._dhcp6PrefixHintVlt = undefined;
      this._dhcp6RelayInterfaceId = undefined;
      this._dhcp6RelayIp = undefined;
      this._dhcp6RelayService = undefined;
      this._dhcp6RelaySourceInterface = undefined;
      this._dhcp6RelaySourceIp = undefined;
      this._dhcp6RelayType = undefined;
      this._icmp6SendRedirect = undefined;
      this._interfaceIdentifier = undefined;
      this._ip6Address = undefined;
      this._ip6Allowaccess = undefined;
      this._ip6DefaultLife = undefined;
      this._ip6DelegatedPrefixIaid = undefined;
      this._ip6DnsServerOverride = undefined;
      this._ip6HopLimit = undefined;
      this._ip6LinkMtu = undefined;
      this._ip6ManageFlag = undefined;
      this._ip6MaxInterval = undefined;
      this._ip6MinInterval = undefined;
      this._ip6Mode = undefined;
      this._ip6OtherFlag = undefined;
      this._ip6PrefixMode = undefined;
      this._ip6ReachableTime = undefined;
      this._ip6RetransTime = undefined;
      this._ip6SendAdv = undefined;
      this._ip6Subnet = undefined;
      this._ip6UpstreamInterface = undefined;
      this._ndCert = undefined;
      this._ndCgaModifier = undefined;
      this._ndMode = undefined;
      this._ndSecurityLevel = undefined;
      this._ndTimestampDelta = undefined;
      this._ndTimestampFuzz = undefined;
      this._raSendMtu = undefined;
      this._uniqueAutoconfAddr = undefined;
      this._vrip6LinkLocal = undefined;
      this._vrrpVirtualMac6 = undefined;
      this._ip6DelegatedPrefixList.internalValue = undefined;
      this._ip6ExtraAddr.internalValue = undefined;
      this._ip6PrefixList.internalValue = undefined;
      this._vrrp6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoconf = value.autoconf;
      this._cliConn6Status = value.cliConn6Status;
      this._dhcp6ClientOptions = value.dhcp6ClientOptions;
      this._dhcp6InformationRequest = value.dhcp6InformationRequest;
      this._dhcp6PrefixDelegation = value.dhcp6PrefixDelegation;
      this._dhcp6PrefixHint = value.dhcp6PrefixHint;
      this._dhcp6PrefixHintPlt = value.dhcp6PrefixHintPlt;
      this._dhcp6PrefixHintVlt = value.dhcp6PrefixHintVlt;
      this._dhcp6RelayInterfaceId = value.dhcp6RelayInterfaceId;
      this._dhcp6RelayIp = value.dhcp6RelayIp;
      this._dhcp6RelayService = value.dhcp6RelayService;
      this._dhcp6RelaySourceInterface = value.dhcp6RelaySourceInterface;
      this._dhcp6RelaySourceIp = value.dhcp6RelaySourceIp;
      this._dhcp6RelayType = value.dhcp6RelayType;
      this._icmp6SendRedirect = value.icmp6SendRedirect;
      this._interfaceIdentifier = value.interfaceIdentifier;
      this._ip6Address = value.ip6Address;
      this._ip6Allowaccess = value.ip6Allowaccess;
      this._ip6DefaultLife = value.ip6DefaultLife;
      this._ip6DelegatedPrefixIaid = value.ip6DelegatedPrefixIaid;
      this._ip6DnsServerOverride = value.ip6DnsServerOverride;
      this._ip6HopLimit = value.ip6HopLimit;
      this._ip6LinkMtu = value.ip6LinkMtu;
      this._ip6ManageFlag = value.ip6ManageFlag;
      this._ip6MaxInterval = value.ip6MaxInterval;
      this._ip6MinInterval = value.ip6MinInterval;
      this._ip6Mode = value.ip6Mode;
      this._ip6OtherFlag = value.ip6OtherFlag;
      this._ip6PrefixMode = value.ip6PrefixMode;
      this._ip6ReachableTime = value.ip6ReachableTime;
      this._ip6RetransTime = value.ip6RetransTime;
      this._ip6SendAdv = value.ip6SendAdv;
      this._ip6Subnet = value.ip6Subnet;
      this._ip6UpstreamInterface = value.ip6UpstreamInterface;
      this._ndCert = value.ndCert;
      this._ndCgaModifier = value.ndCgaModifier;
      this._ndMode = value.ndMode;
      this._ndSecurityLevel = value.ndSecurityLevel;
      this._ndTimestampDelta = value.ndTimestampDelta;
      this._ndTimestampFuzz = value.ndTimestampFuzz;
      this._raSendMtu = value.raSendMtu;
      this._uniqueAutoconfAddr = value.uniqueAutoconfAddr;
      this._vrip6LinkLocal = value.vrip6LinkLocal;
      this._vrrpVirtualMac6 = value.vrrpVirtualMac6;
      this._ip6DelegatedPrefixList.internalValue = value.ip6DelegatedPrefixList;
      this._ip6ExtraAddr.internalValue = value.ip6ExtraAddr;
      this._ip6PrefixList.internalValue = value.ip6PrefixList;
      this._vrrp6.internalValue = value.vrrp6;
    }
  }

  // autoconf - computed: false, optional: true, required: false
  private _autoconf?: string; 
  public get autoconf() {
    return this.getStringAttribute('autoconf');
  }
  public set autoconf(value: string) {
    this._autoconf = value;
  }
  public resetAutoconf() {
    this._autoconf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoconfInput() {
    return this._autoconf;
  }

  // cli_conn6_status - computed: false, optional: true, required: false
  private _cliConn6Status?: number; 
  public get cliConn6Status() {
    return this.getNumberAttribute('cli_conn6_status');
  }
  public set cliConn6Status(value: number) {
    this._cliConn6Status = value;
  }
  public resetCliConn6Status() {
    this._cliConn6Status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliConn6StatusInput() {
    return this._cliConn6Status;
  }

  // dhcp6_client_options - computed: true, optional: true, required: false
  private _dhcp6ClientOptions?: string[]; 
  public get dhcp6ClientOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('dhcp6_client_options'));
  }
  public set dhcp6ClientOptions(value: string[]) {
    this._dhcp6ClientOptions = value;
  }
  public resetDhcp6ClientOptions() {
    this._dhcp6ClientOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6ClientOptionsInput() {
    return this._dhcp6ClientOptions;
  }

  // dhcp6_information_request - computed: false, optional: true, required: false
  private _dhcp6InformationRequest?: string; 
  public get dhcp6InformationRequest() {
    return this.getStringAttribute('dhcp6_information_request');
  }
  public set dhcp6InformationRequest(value: string) {
    this._dhcp6InformationRequest = value;
  }
  public resetDhcp6InformationRequest() {
    this._dhcp6InformationRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6InformationRequestInput() {
    return this._dhcp6InformationRequest;
  }

  // dhcp6_prefix_delegation - computed: false, optional: true, required: false
  private _dhcp6PrefixDelegation?: string; 
  public get dhcp6PrefixDelegation() {
    return this.getStringAttribute('dhcp6_prefix_delegation');
  }
  public set dhcp6PrefixDelegation(value: string) {
    this._dhcp6PrefixDelegation = value;
  }
  public resetDhcp6PrefixDelegation() {
    this._dhcp6PrefixDelegation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6PrefixDelegationInput() {
    return this._dhcp6PrefixDelegation;
  }

  // dhcp6_prefix_hint - computed: false, optional: true, required: false
  private _dhcp6PrefixHint?: string; 
  public get dhcp6PrefixHint() {
    return this.getStringAttribute('dhcp6_prefix_hint');
  }
  public set dhcp6PrefixHint(value: string) {
    this._dhcp6PrefixHint = value;
  }
  public resetDhcp6PrefixHint() {
    this._dhcp6PrefixHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6PrefixHintInput() {
    return this._dhcp6PrefixHint;
  }

  // dhcp6_prefix_hint_plt - computed: false, optional: true, required: false
  private _dhcp6PrefixHintPlt?: number; 
  public get dhcp6PrefixHintPlt() {
    return this.getNumberAttribute('dhcp6_prefix_hint_plt');
  }
  public set dhcp6PrefixHintPlt(value: number) {
    this._dhcp6PrefixHintPlt = value;
  }
  public resetDhcp6PrefixHintPlt() {
    this._dhcp6PrefixHintPlt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6PrefixHintPltInput() {
    return this._dhcp6PrefixHintPlt;
  }

  // dhcp6_prefix_hint_vlt - computed: false, optional: true, required: false
  private _dhcp6PrefixHintVlt?: number; 
  public get dhcp6PrefixHintVlt() {
    return this.getNumberAttribute('dhcp6_prefix_hint_vlt');
  }
  public set dhcp6PrefixHintVlt(value: number) {
    this._dhcp6PrefixHintVlt = value;
  }
  public resetDhcp6PrefixHintVlt() {
    this._dhcp6PrefixHintVlt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6PrefixHintVltInput() {
    return this._dhcp6PrefixHintVlt;
  }

  // dhcp6_relay_interface_id - computed: false, optional: true, required: false
  private _dhcp6RelayInterfaceId?: string; 
  public get dhcp6RelayInterfaceId() {
    return this.getStringAttribute('dhcp6_relay_interface_id');
  }
  public set dhcp6RelayInterfaceId(value: string) {
    this._dhcp6RelayInterfaceId = value;
  }
  public resetDhcp6RelayInterfaceId() {
    this._dhcp6RelayInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6RelayInterfaceIdInput() {
    return this._dhcp6RelayInterfaceId;
  }

  // dhcp6_relay_ip - computed: false, optional: true, required: false
  private _dhcp6RelayIp?: string; 
  public get dhcp6RelayIp() {
    return this.getStringAttribute('dhcp6_relay_ip');
  }
  public set dhcp6RelayIp(value: string) {
    this._dhcp6RelayIp = value;
  }
  public resetDhcp6RelayIp() {
    this._dhcp6RelayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6RelayIpInput() {
    return this._dhcp6RelayIp;
  }

  // dhcp6_relay_service - computed: false, optional: true, required: false
  private _dhcp6RelayService?: string; 
  public get dhcp6RelayService() {
    return this.getStringAttribute('dhcp6_relay_service');
  }
  public set dhcp6RelayService(value: string) {
    this._dhcp6RelayService = value;
  }
  public resetDhcp6RelayService() {
    this._dhcp6RelayService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6RelayServiceInput() {
    return this._dhcp6RelayService;
  }

  // dhcp6_relay_source_interface - computed: false, optional: true, required: false
  private _dhcp6RelaySourceInterface?: string; 
  public get dhcp6RelaySourceInterface() {
    return this.getStringAttribute('dhcp6_relay_source_interface');
  }
  public set dhcp6RelaySourceInterface(value: string) {
    this._dhcp6RelaySourceInterface = value;
  }
  public resetDhcp6RelaySourceInterface() {
    this._dhcp6RelaySourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6RelaySourceInterfaceInput() {
    return this._dhcp6RelaySourceInterface;
  }

  // dhcp6_relay_source_ip - computed: false, optional: true, required: false
  private _dhcp6RelaySourceIp?: string; 
  public get dhcp6RelaySourceIp() {
    return this.getStringAttribute('dhcp6_relay_source_ip');
  }
  public set dhcp6RelaySourceIp(value: string) {
    this._dhcp6RelaySourceIp = value;
  }
  public resetDhcp6RelaySourceIp() {
    this._dhcp6RelaySourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6RelaySourceIpInput() {
    return this._dhcp6RelaySourceIp;
  }

  // dhcp6_relay_type - computed: false, optional: true, required: false
  private _dhcp6RelayType?: string; 
  public get dhcp6RelayType() {
    return this.getStringAttribute('dhcp6_relay_type');
  }
  public set dhcp6RelayType(value: string) {
    this._dhcp6RelayType = value;
  }
  public resetDhcp6RelayType() {
    this._dhcp6RelayType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6RelayTypeInput() {
    return this._dhcp6RelayType;
  }

  // icmp6_send_redirect - computed: false, optional: true, required: false
  private _icmp6SendRedirect?: string; 
  public get icmp6SendRedirect() {
    return this.getStringAttribute('icmp6_send_redirect');
  }
  public set icmp6SendRedirect(value: string) {
    this._icmp6SendRedirect = value;
  }
  public resetIcmp6SendRedirect() {
    this._icmp6SendRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmp6SendRedirectInput() {
    return this._icmp6SendRedirect;
  }

  // interface_identifier - computed: false, optional: true, required: false
  private _interfaceIdentifier?: string; 
  public get interfaceIdentifier() {
    return this.getStringAttribute('interface_identifier');
  }
  public set interfaceIdentifier(value: string) {
    this._interfaceIdentifier = value;
  }
  public resetInterfaceIdentifier() {
    this._interfaceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIdentifierInput() {
    return this._interfaceIdentifier;
  }

  // ip6_address - computed: false, optional: true, required: false
  private _ip6Address?: string; 
  public get ip6Address() {
    return this.getStringAttribute('ip6_address');
  }
  public set ip6Address(value: string) {
    this._ip6Address = value;
  }
  public resetIp6Address() {
    this._ip6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6AddressInput() {
    return this._ip6Address;
  }

  // ip6_allowaccess - computed: true, optional: true, required: false
  private _ip6Allowaccess?: string[]; 
  public get ip6Allowaccess() {
    return cdktf.Fn.tolist(this.getListAttribute('ip6_allowaccess'));
  }
  public set ip6Allowaccess(value: string[]) {
    this._ip6Allowaccess = value;
  }
  public resetIp6Allowaccess() {
    this._ip6Allowaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6AllowaccessInput() {
    return this._ip6Allowaccess;
  }

  // ip6_default_life - computed: false, optional: true, required: false
  private _ip6DefaultLife?: number; 
  public get ip6DefaultLife() {
    return this.getNumberAttribute('ip6_default_life');
  }
  public set ip6DefaultLife(value: number) {
    this._ip6DefaultLife = value;
  }
  public resetIp6DefaultLife() {
    this._ip6DefaultLife = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6DefaultLifeInput() {
    return this._ip6DefaultLife;
  }

  // ip6_delegated_prefix_iaid - computed: false, optional: true, required: false
  private _ip6DelegatedPrefixIaid?: number; 
  public get ip6DelegatedPrefixIaid() {
    return this.getNumberAttribute('ip6_delegated_prefix_iaid');
  }
  public set ip6DelegatedPrefixIaid(value: number) {
    this._ip6DelegatedPrefixIaid = value;
  }
  public resetIp6DelegatedPrefixIaid() {
    this._ip6DelegatedPrefixIaid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6DelegatedPrefixIaidInput() {
    return this._ip6DelegatedPrefixIaid;
  }

  // ip6_dns_server_override - computed: false, optional: true, required: false
  private _ip6DnsServerOverride?: string; 
  public get ip6DnsServerOverride() {
    return this.getStringAttribute('ip6_dns_server_override');
  }
  public set ip6DnsServerOverride(value: string) {
    this._ip6DnsServerOverride = value;
  }
  public resetIp6DnsServerOverride() {
    this._ip6DnsServerOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6DnsServerOverrideInput() {
    return this._ip6DnsServerOverride;
  }

  // ip6_hop_limit - computed: false, optional: true, required: false
  private _ip6HopLimit?: number; 
  public get ip6HopLimit() {
    return this.getNumberAttribute('ip6_hop_limit');
  }
  public set ip6HopLimit(value: number) {
    this._ip6HopLimit = value;
  }
  public resetIp6HopLimit() {
    this._ip6HopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6HopLimitInput() {
    return this._ip6HopLimit;
  }

  // ip6_link_mtu - computed: false, optional: true, required: false
  private _ip6LinkMtu?: number; 
  public get ip6LinkMtu() {
    return this.getNumberAttribute('ip6_link_mtu');
  }
  public set ip6LinkMtu(value: number) {
    this._ip6LinkMtu = value;
  }
  public resetIp6LinkMtu() {
    this._ip6LinkMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6LinkMtuInput() {
    return this._ip6LinkMtu;
  }

  // ip6_manage_flag - computed: false, optional: true, required: false
  private _ip6ManageFlag?: string; 
  public get ip6ManageFlag() {
    return this.getStringAttribute('ip6_manage_flag');
  }
  public set ip6ManageFlag(value: string) {
    this._ip6ManageFlag = value;
  }
  public resetIp6ManageFlag() {
    this._ip6ManageFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6ManageFlagInput() {
    return this._ip6ManageFlag;
  }

  // ip6_max_interval - computed: false, optional: true, required: false
  private _ip6MaxInterval?: number; 
  public get ip6MaxInterval() {
    return this.getNumberAttribute('ip6_max_interval');
  }
  public set ip6MaxInterval(value: number) {
    this._ip6MaxInterval = value;
  }
  public resetIp6MaxInterval() {
    this._ip6MaxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6MaxIntervalInput() {
    return this._ip6MaxInterval;
  }

  // ip6_min_interval - computed: false, optional: true, required: false
  private _ip6MinInterval?: number; 
  public get ip6MinInterval() {
    return this.getNumberAttribute('ip6_min_interval');
  }
  public set ip6MinInterval(value: number) {
    this._ip6MinInterval = value;
  }
  public resetIp6MinInterval() {
    this._ip6MinInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6MinIntervalInput() {
    return this._ip6MinInterval;
  }

  // ip6_mode - computed: false, optional: true, required: false
  private _ip6Mode?: string; 
  public get ip6Mode() {
    return this.getStringAttribute('ip6_mode');
  }
  public set ip6Mode(value: string) {
    this._ip6Mode = value;
  }
  public resetIp6Mode() {
    this._ip6Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6ModeInput() {
    return this._ip6Mode;
  }

  // ip6_other_flag - computed: false, optional: true, required: false
  private _ip6OtherFlag?: string; 
  public get ip6OtherFlag() {
    return this.getStringAttribute('ip6_other_flag');
  }
  public set ip6OtherFlag(value: string) {
    this._ip6OtherFlag = value;
  }
  public resetIp6OtherFlag() {
    this._ip6OtherFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6OtherFlagInput() {
    return this._ip6OtherFlag;
  }

  // ip6_prefix_mode - computed: false, optional: true, required: false
  private _ip6PrefixMode?: string; 
  public get ip6PrefixMode() {
    return this.getStringAttribute('ip6_prefix_mode');
  }
  public set ip6PrefixMode(value: string) {
    this._ip6PrefixMode = value;
  }
  public resetIp6PrefixMode() {
    this._ip6PrefixMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6PrefixModeInput() {
    return this._ip6PrefixMode;
  }

  // ip6_reachable_time - computed: false, optional: true, required: false
  private _ip6ReachableTime?: number; 
  public get ip6ReachableTime() {
    return this.getNumberAttribute('ip6_reachable_time');
  }
  public set ip6ReachableTime(value: number) {
    this._ip6ReachableTime = value;
  }
  public resetIp6ReachableTime() {
    this._ip6ReachableTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6ReachableTimeInput() {
    return this._ip6ReachableTime;
  }

  // ip6_retrans_time - computed: false, optional: true, required: false
  private _ip6RetransTime?: number; 
  public get ip6RetransTime() {
    return this.getNumberAttribute('ip6_retrans_time');
  }
  public set ip6RetransTime(value: number) {
    this._ip6RetransTime = value;
  }
  public resetIp6RetransTime() {
    this._ip6RetransTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6RetransTimeInput() {
    return this._ip6RetransTime;
  }

  // ip6_send_adv - computed: false, optional: true, required: false
  private _ip6SendAdv?: string; 
  public get ip6SendAdv() {
    return this.getStringAttribute('ip6_send_adv');
  }
  public set ip6SendAdv(value: string) {
    this._ip6SendAdv = value;
  }
  public resetIp6SendAdv() {
    this._ip6SendAdv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6SendAdvInput() {
    return this._ip6SendAdv;
  }

  // ip6_subnet - computed: false, optional: true, required: false
  private _ip6Subnet?: string; 
  public get ip6Subnet() {
    return this.getStringAttribute('ip6_subnet');
  }
  public set ip6Subnet(value: string) {
    this._ip6Subnet = value;
  }
  public resetIp6Subnet() {
    this._ip6Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6SubnetInput() {
    return this._ip6Subnet;
  }

  // ip6_upstream_interface - computed: false, optional: true, required: false
  private _ip6UpstreamInterface?: string; 
  public get ip6UpstreamInterface() {
    return this.getStringAttribute('ip6_upstream_interface');
  }
  public set ip6UpstreamInterface(value: string) {
    this._ip6UpstreamInterface = value;
  }
  public resetIp6UpstreamInterface() {
    this._ip6UpstreamInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6UpstreamInterfaceInput() {
    return this._ip6UpstreamInterface;
  }

  // nd_cert - computed: false, optional: true, required: false
  private _ndCert?: string; 
  public get ndCert() {
    return this.getStringAttribute('nd_cert');
  }
  public set ndCert(value: string) {
    this._ndCert = value;
  }
  public resetNdCert() {
    this._ndCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndCertInput() {
    return this._ndCert;
  }

  // nd_cga_modifier - computed: false, optional: true, required: false
  private _ndCgaModifier?: string; 
  public get ndCgaModifier() {
    return this.getStringAttribute('nd_cga_modifier');
  }
  public set ndCgaModifier(value: string) {
    this._ndCgaModifier = value;
  }
  public resetNdCgaModifier() {
    this._ndCgaModifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndCgaModifierInput() {
    return this._ndCgaModifier;
  }

  // nd_mode - computed: false, optional: true, required: false
  private _ndMode?: string; 
  public get ndMode() {
    return this.getStringAttribute('nd_mode');
  }
  public set ndMode(value: string) {
    this._ndMode = value;
  }
  public resetNdMode() {
    this._ndMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndModeInput() {
    return this._ndMode;
  }

  // nd_security_level - computed: false, optional: true, required: false
  private _ndSecurityLevel?: number; 
  public get ndSecurityLevel() {
    return this.getNumberAttribute('nd_security_level');
  }
  public set ndSecurityLevel(value: number) {
    this._ndSecurityLevel = value;
  }
  public resetNdSecurityLevel() {
    this._ndSecurityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndSecurityLevelInput() {
    return this._ndSecurityLevel;
  }

  // nd_timestamp_delta - computed: false, optional: true, required: false
  private _ndTimestampDelta?: number; 
  public get ndTimestampDelta() {
    return this.getNumberAttribute('nd_timestamp_delta');
  }
  public set ndTimestampDelta(value: number) {
    this._ndTimestampDelta = value;
  }
  public resetNdTimestampDelta() {
    this._ndTimestampDelta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndTimestampDeltaInput() {
    return this._ndTimestampDelta;
  }

  // nd_timestamp_fuzz - computed: false, optional: true, required: false
  private _ndTimestampFuzz?: number; 
  public get ndTimestampFuzz() {
    return this.getNumberAttribute('nd_timestamp_fuzz');
  }
  public set ndTimestampFuzz(value: number) {
    this._ndTimestampFuzz = value;
  }
  public resetNdTimestampFuzz() {
    this._ndTimestampFuzz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndTimestampFuzzInput() {
    return this._ndTimestampFuzz;
  }

  // ra_send_mtu - computed: false, optional: true, required: false
  private _raSendMtu?: string; 
  public get raSendMtu() {
    return this.getStringAttribute('ra_send_mtu');
  }
  public set raSendMtu(value: string) {
    this._raSendMtu = value;
  }
  public resetRaSendMtu() {
    this._raSendMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raSendMtuInput() {
    return this._raSendMtu;
  }

  // unique_autoconf_addr - computed: false, optional: true, required: false
  private _uniqueAutoconfAddr?: string; 
  public get uniqueAutoconfAddr() {
    return this.getStringAttribute('unique_autoconf_addr');
  }
  public set uniqueAutoconfAddr(value: string) {
    this._uniqueAutoconfAddr = value;
  }
  public resetUniqueAutoconfAddr() {
    this._uniqueAutoconfAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueAutoconfAddrInput() {
    return this._uniqueAutoconfAddr;
  }

  // vrip6_link_local - computed: false, optional: true, required: false
  private _vrip6LinkLocal?: string; 
  public get vrip6LinkLocal() {
    return this.getStringAttribute('vrip6_link_local');
  }
  public set vrip6LinkLocal(value: string) {
    this._vrip6LinkLocal = value;
  }
  public resetVrip6LinkLocal() {
    this._vrip6LinkLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrip6LinkLocalInput() {
    return this._vrip6LinkLocal;
  }

  // vrrp_virtual_mac6 - computed: false, optional: true, required: false
  private _vrrpVirtualMac6?: string; 
  public get vrrpVirtualMac6() {
    return this.getStringAttribute('vrrp_virtual_mac6');
  }
  public set vrrpVirtualMac6(value: string) {
    this._vrrpVirtualMac6 = value;
  }
  public resetVrrpVirtualMac6() {
    this._vrrpVirtualMac6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpVirtualMac6Input() {
    return this._vrrpVirtualMac6;
  }

  // ip6_delegated_prefix_list - computed: false, optional: true, required: false
  private _ip6DelegatedPrefixList = new ObjectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStructList(this, "ip6_delegated_prefix_list", false);
  public get ip6DelegatedPrefixList() {
    return this._ip6DelegatedPrefixList;
  }
  public putIp6DelegatedPrefixList(value: ObjectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStruct[] | cdktf.IResolvable) {
    this._ip6DelegatedPrefixList.internalValue = value;
  }
  public resetIp6DelegatedPrefixList() {
    this._ip6DelegatedPrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6DelegatedPrefixListInput() {
    return this._ip6DelegatedPrefixList.internalValue;
  }

  // ip6_extra_addr - computed: false, optional: true, required: false
  private _ip6ExtraAddr = new ObjectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddrList(this, "ip6_extra_addr", false);
  public get ip6ExtraAddr() {
    return this._ip6ExtraAddr;
  }
  public putIp6ExtraAddr(value: ObjectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddr[] | cdktf.IResolvable) {
    this._ip6ExtraAddr.internalValue = value;
  }
  public resetIp6ExtraAddr() {
    this._ip6ExtraAddr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6ExtraAddrInput() {
    return this._ip6ExtraAddr.internalValue;
  }

  // ip6_prefix_list - computed: false, optional: true, required: false
  private _ip6PrefixList = new ObjectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStructList(this, "ip6_prefix_list", false);
  public get ip6PrefixList() {
    return this._ip6PrefixList;
  }
  public putIp6PrefixList(value: ObjectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStruct[] | cdktf.IResolvable) {
    this._ip6PrefixList.internalValue = value;
  }
  public resetIp6PrefixList() {
    this._ip6PrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6PrefixListInput() {
    return this._ip6PrefixList.internalValue;
  }

  // vrrp6 - computed: false, optional: true, required: false
  private _vrrp6 = new ObjectFspVlanDynamicMappingInterfaceIpv6Vrrp6List(this, "vrrp6", false);
  public get vrrp6() {
    return this._vrrp6;
  }
  public putVrrp6(value: ObjectFspVlanDynamicMappingInterfaceIpv6Vrrp6[] | cdktf.IResolvable) {
    this._vrrp6.internalValue = value;
  }
  public resetVrrp6() {
    this._vrrp6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrp6Input() {
    return this._vrrp6.internalValue;
  }
}
export interface ObjectFspVlanDynamicMappingInterfaceSecondaryip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#allowaccess ObjectFspVlan#allowaccess}
  */
  readonly allowaccess?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#detectprotocol ObjectFspVlan#detectprotocol}
  */
  readonly detectprotocol?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#detectserver ObjectFspVlan#detectserver}
  */
  readonly detectserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#gwdetect ObjectFspVlan#gwdetect}
  */
  readonly gwdetect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ha_priority ObjectFspVlan#ha_priority}
  */
  readonly haPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#id ObjectFspVlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip ObjectFspVlan#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ping_serv_status ObjectFspVlan#ping_serv_status}
  */
  readonly pingServStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#secip_relay_ip ObjectFspVlan#secip_relay_ip}
  */
  readonly secipRelayIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#seq ObjectFspVlan#seq}
  */
  readonly seq?: number;
}

export function objectFspVlanDynamicMappingInterfaceSecondaryipToTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceSecondaryip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowaccess: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowaccess),
    detectprotocol: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.detectprotocol),
    detectserver: cdktf.stringToTerraform(struct!.detectserver),
    gwdetect: cdktf.stringToTerraform(struct!.gwdetect),
    ha_priority: cdktf.numberToTerraform(struct!.haPriority),
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
    ping_serv_status: cdktf.numberToTerraform(struct!.pingServStatus),
    secip_relay_ip: cdktf.stringToTerraform(struct!.secipRelayIp),
    seq: cdktf.numberToTerraform(struct!.seq),
  }
}


export function objectFspVlanDynamicMappingInterfaceSecondaryipToHclTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceSecondaryip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowaccess: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowaccess),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    detectprotocol: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.detectprotocol),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    detectserver: {
      value: cdktf.stringToHclTerraform(struct!.detectserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gwdetect: {
      value: cdktf.stringToHclTerraform(struct!.gwdetect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ha_priority: {
      value: cdktf.numberToHclTerraform(struct!.haPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
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
    ping_serv_status: {
      value: cdktf.numberToHclTerraform(struct!.pingServStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secip_relay_ip: {
      value: cdktf.stringToHclTerraform(struct!.secipRelayIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seq: {
      value: cdktf.numberToHclTerraform(struct!.seq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanDynamicMappingInterfaceSecondaryipOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanDynamicMappingInterfaceSecondaryip | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowaccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowaccess = this._allowaccess;
    }
    if (this._detectprotocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectprotocol = this._detectprotocol;
    }
    if (this._detectserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectserver = this._detectserver;
    }
    if (this._gwdetect !== undefined) {
      hasAnyValues = true;
      internalValueResult.gwdetect = this._gwdetect;
    }
    if (this._haPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.haPriority = this._haPriority;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._pingServStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingServStatus = this._pingServStatus;
    }
    if (this._secipRelayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.secipRelayIp = this._secipRelayIp;
    }
    if (this._seq !== undefined) {
      hasAnyValues = true;
      internalValueResult.seq = this._seq;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanDynamicMappingInterfaceSecondaryip | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowaccess = undefined;
      this._detectprotocol = undefined;
      this._detectserver = undefined;
      this._gwdetect = undefined;
      this._haPriority = undefined;
      this._id = undefined;
      this._ip = undefined;
      this._pingServStatus = undefined;
      this._secipRelayIp = undefined;
      this._seq = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowaccess = value.allowaccess;
      this._detectprotocol = value.detectprotocol;
      this._detectserver = value.detectserver;
      this._gwdetect = value.gwdetect;
      this._haPriority = value.haPriority;
      this._id = value.id;
      this._ip = value.ip;
      this._pingServStatus = value.pingServStatus;
      this._secipRelayIp = value.secipRelayIp;
      this._seq = value.seq;
    }
  }

  // allowaccess - computed: true, optional: true, required: false
  private _allowaccess?: string[]; 
  public get allowaccess() {
    return cdktf.Fn.tolist(this.getListAttribute('allowaccess'));
  }
  public set allowaccess(value: string[]) {
    this._allowaccess = value;
  }
  public resetAllowaccess() {
    this._allowaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowaccessInput() {
    return this._allowaccess;
  }

  // detectprotocol - computed: true, optional: true, required: false
  private _detectprotocol?: string[]; 
  public get detectprotocol() {
    return cdktf.Fn.tolist(this.getListAttribute('detectprotocol'));
  }
  public set detectprotocol(value: string[]) {
    this._detectprotocol = value;
  }
  public resetDetectprotocol() {
    this._detectprotocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectprotocolInput() {
    return this._detectprotocol;
  }

  // detectserver - computed: false, optional: true, required: false
  private _detectserver?: string; 
  public get detectserver() {
    return this.getStringAttribute('detectserver');
  }
  public set detectserver(value: string) {
    this._detectserver = value;
  }
  public resetDetectserver() {
    this._detectserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectserverInput() {
    return this._detectserver;
  }

  // gwdetect - computed: false, optional: true, required: false
  private _gwdetect?: string; 
  public get gwdetect() {
    return this.getStringAttribute('gwdetect');
  }
  public set gwdetect(value: string) {
    this._gwdetect = value;
  }
  public resetGwdetect() {
    this._gwdetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwdetectInput() {
    return this._gwdetect;
  }

  // ha_priority - computed: false, optional: true, required: false
  private _haPriority?: number; 
  public get haPriority() {
    return this.getNumberAttribute('ha_priority');
  }
  public set haPriority(value: number) {
    this._haPriority = value;
  }
  public resetHaPriority() {
    this._haPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haPriorityInput() {
    return this._haPriority;
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

  // ping_serv_status - computed: false, optional: true, required: false
  private _pingServStatus?: number; 
  public get pingServStatus() {
    return this.getNumberAttribute('ping_serv_status');
  }
  public set pingServStatus(value: number) {
    this._pingServStatus = value;
  }
  public resetPingServStatus() {
    this._pingServStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingServStatusInput() {
    return this._pingServStatus;
  }

  // secip_relay_ip - computed: false, optional: true, required: false
  private _secipRelayIp?: string; 
  public get secipRelayIp() {
    return this.getStringAttribute('secip_relay_ip');
  }
  public set secipRelayIp(value: string) {
    this._secipRelayIp = value;
  }
  public resetSecipRelayIp() {
    this._secipRelayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secipRelayIpInput() {
    return this._secipRelayIp;
  }

  // seq - computed: false, optional: true, required: false
  private _seq?: number; 
  public get seq() {
    return this.getNumberAttribute('seq');
  }
  public set seq(value: number) {
    this._seq = value;
  }
  public resetSeq() {
    this._seq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqInput() {
    return this._seq;
  }
}

export class ObjectFspVlanDynamicMappingInterfaceSecondaryipList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanDynamicMappingInterfaceSecondaryip[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanDynamicMappingInterfaceSecondaryipOutputReference {
    return new ObjectFspVlanDynamicMappingInterfaceSecondaryipOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanDynamicMappingInterfaceVrrpProxyArp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#id ObjectFspVlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip ObjectFspVlan#ip}
  */
  readonly ip?: string;
}

export function objectFspVlanDynamicMappingInterfaceVrrpProxyArpToTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceVrrpProxyArp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function objectFspVlanDynamicMappingInterfaceVrrpProxyArpToHclTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceVrrpProxyArp | cdktf.IResolvable): any {
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

export class ObjectFspVlanDynamicMappingInterfaceVrrpProxyArpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanDynamicMappingInterfaceVrrpProxyArp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanDynamicMappingInterfaceVrrpProxyArp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._ip = value.ip;
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
}

export class ObjectFspVlanDynamicMappingInterfaceVrrpProxyArpList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanDynamicMappingInterfaceVrrpProxyArp[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanDynamicMappingInterfaceVrrpProxyArpOutputReference {
    return new ObjectFspVlanDynamicMappingInterfaceVrrpProxyArpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanDynamicMappingInterfaceVrrp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#accept_mode ObjectFspVlan#accept_mode}
  */
  readonly acceptMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#adv_interval ObjectFspVlan#adv_interval}
  */
  readonly advInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ignore_default_route ObjectFspVlan#ignore_default_route}
  */
  readonly ignoreDefaultRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#preempt ObjectFspVlan#preempt}
  */
  readonly preempt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#priority ObjectFspVlan#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#start_time ObjectFspVlan#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#status ObjectFspVlan#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#version ObjectFspVlan#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vrdst ObjectFspVlan#vrdst}
  */
  readonly vrdst?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vrdst_priority ObjectFspVlan#vrdst_priority}
  */
  readonly vrdstPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vrgrp ObjectFspVlan#vrgrp}
  */
  readonly vrgrp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vrid ObjectFspVlan#vrid}
  */
  readonly vrid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vrip ObjectFspVlan#vrip}
  */
  readonly vrip?: string;
  /**
  * proxy_arp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#proxy_arp ObjectFspVlan#proxy_arp}
  */
  readonly proxyArp?: ObjectFspVlanDynamicMappingInterfaceVrrpProxyArp[] | cdktf.IResolvable;
}

export function objectFspVlanDynamicMappingInterfaceVrrpToTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceVrrp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_mode: cdktf.stringToTerraform(struct!.acceptMode),
    adv_interval: cdktf.numberToTerraform(struct!.advInterval),
    ignore_default_route: cdktf.stringToTerraform(struct!.ignoreDefaultRoute),
    preempt: cdktf.stringToTerraform(struct!.preempt),
    priority: cdktf.numberToTerraform(struct!.priority),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    status: cdktf.stringToTerraform(struct!.status),
    version: cdktf.stringToTerraform(struct!.version),
    vrdst: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vrdst),
    vrdst_priority: cdktf.numberToTerraform(struct!.vrdstPriority),
    vrgrp: cdktf.numberToTerraform(struct!.vrgrp),
    vrid: cdktf.numberToTerraform(struct!.vrid),
    vrip: cdktf.stringToTerraform(struct!.vrip),
    proxy_arp: cdktf.listMapper(objectFspVlanDynamicMappingInterfaceVrrpProxyArpToTerraform, true)(struct!.proxyArp),
  }
}


export function objectFspVlanDynamicMappingInterfaceVrrpToHclTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceVrrp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_mode: {
      value: cdktf.stringToHclTerraform(struct!.acceptMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    adv_interval: {
      value: cdktf.numberToHclTerraform(struct!.advInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_default_route: {
      value: cdktf.stringToHclTerraform(struct!.ignoreDefaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preempt: {
      value: cdktf.stringToHclTerraform(struct!.preempt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrdst: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vrdst),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vrdst_priority: {
      value: cdktf.numberToHclTerraform(struct!.vrdstPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrgrp: {
      value: cdktf.numberToHclTerraform(struct!.vrgrp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrip: {
      value: cdktf.stringToHclTerraform(struct!.vrip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_arp: {
      value: cdktf.listMapperHcl(objectFspVlanDynamicMappingInterfaceVrrpProxyArpToHclTerraform, true)(struct!.proxyArp),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanDynamicMappingInterfaceVrrpProxyArpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanDynamicMappingInterfaceVrrpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanDynamicMappingInterfaceVrrp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptMode = this._acceptMode;
    }
    if (this._advInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.advInterval = this._advInterval;
    }
    if (this._ignoreDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDefaultRoute = this._ignoreDefaultRoute;
    }
    if (this._preempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.preempt = this._preempt;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._vrdst !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrdst = this._vrdst;
    }
    if (this._vrdstPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrdstPriority = this._vrdstPriority;
    }
    if (this._vrgrp !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrgrp = this._vrgrp;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    if (this._vrip !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrip = this._vrip;
    }
    if (this._proxyArp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyArp = this._proxyArp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanDynamicMappingInterfaceVrrp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptMode = undefined;
      this._advInterval = undefined;
      this._ignoreDefaultRoute = undefined;
      this._preempt = undefined;
      this._priority = undefined;
      this._startTime = undefined;
      this._status = undefined;
      this._version = undefined;
      this._vrdst = undefined;
      this._vrdstPriority = undefined;
      this._vrgrp = undefined;
      this._vrid = undefined;
      this._vrip = undefined;
      this._proxyArp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptMode = value.acceptMode;
      this._advInterval = value.advInterval;
      this._ignoreDefaultRoute = value.ignoreDefaultRoute;
      this._preempt = value.preempt;
      this._priority = value.priority;
      this._startTime = value.startTime;
      this._status = value.status;
      this._version = value.version;
      this._vrdst = value.vrdst;
      this._vrdstPriority = value.vrdstPriority;
      this._vrgrp = value.vrgrp;
      this._vrid = value.vrid;
      this._vrip = value.vrip;
      this._proxyArp.internalValue = value.proxyArp;
    }
  }

  // accept_mode - computed: false, optional: true, required: false
  private _acceptMode?: string; 
  public get acceptMode() {
    return this.getStringAttribute('accept_mode');
  }
  public set acceptMode(value: string) {
    this._acceptMode = value;
  }
  public resetAcceptMode() {
    this._acceptMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptModeInput() {
    return this._acceptMode;
  }

  // adv_interval - computed: false, optional: true, required: false
  private _advInterval?: number; 
  public get advInterval() {
    return this.getNumberAttribute('adv_interval');
  }
  public set advInterval(value: number) {
    this._advInterval = value;
  }
  public resetAdvInterval() {
    this._advInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advIntervalInput() {
    return this._advInterval;
  }

  // ignore_default_route - computed: false, optional: true, required: false
  private _ignoreDefaultRoute?: string; 
  public get ignoreDefaultRoute() {
    return this.getStringAttribute('ignore_default_route');
  }
  public set ignoreDefaultRoute(value: string) {
    this._ignoreDefaultRoute = value;
  }
  public resetIgnoreDefaultRoute() {
    this._ignoreDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDefaultRouteInput() {
    return this._ignoreDefaultRoute;
  }

  // preempt - computed: false, optional: true, required: false
  private _preempt?: string; 
  public get preempt() {
    return this.getStringAttribute('preempt');
  }
  public set preempt(value: string) {
    this._preempt = value;
  }
  public resetPreempt() {
    this._preempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptInput() {
    return this._preempt;
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

  // start_time - computed: false, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // vrdst - computed: true, optional: true, required: false
  private _vrdst?: string[]; 
  public get vrdst() {
    return cdktf.Fn.tolist(this.getListAttribute('vrdst'));
  }
  public set vrdst(value: string[]) {
    this._vrdst = value;
  }
  public resetVrdst() {
    this._vrdst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrdstInput() {
    return this._vrdst;
  }

  // vrdst_priority - computed: false, optional: true, required: false
  private _vrdstPriority?: number; 
  public get vrdstPriority() {
    return this.getNumberAttribute('vrdst_priority');
  }
  public set vrdstPriority(value: number) {
    this._vrdstPriority = value;
  }
  public resetVrdstPriority() {
    this._vrdstPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrdstPriorityInput() {
    return this._vrdstPriority;
  }

  // vrgrp - computed: false, optional: true, required: false
  private _vrgrp?: number; 
  public get vrgrp() {
    return this.getNumberAttribute('vrgrp');
  }
  public set vrgrp(value: number) {
    this._vrgrp = value;
  }
  public resetVrgrp() {
    this._vrgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrgrpInput() {
    return this._vrgrp;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }

  // vrip - computed: false, optional: true, required: false
  private _vrip?: string; 
  public get vrip() {
    return this.getStringAttribute('vrip');
  }
  public set vrip(value: string) {
    this._vrip = value;
  }
  public resetVrip() {
    this._vrip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vripInput() {
    return this._vrip;
  }

  // proxy_arp - computed: false, optional: true, required: false
  private _proxyArp = new ObjectFspVlanDynamicMappingInterfaceVrrpProxyArpList(this, "proxy_arp", false);
  public get proxyArp() {
    return this._proxyArp;
  }
  public putProxyArp(value: ObjectFspVlanDynamicMappingInterfaceVrrpProxyArp[] | cdktf.IResolvable) {
    this._proxyArp.internalValue = value;
  }
  public resetProxyArp() {
    this._proxyArp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyArpInput() {
    return this._proxyArp.internalValue;
  }
}

export class ObjectFspVlanDynamicMappingInterfaceVrrpList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanDynamicMappingInterfaceVrrp[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanDynamicMappingInterfaceVrrpOutputReference {
    return new ObjectFspVlanDynamicMappingInterfaceVrrpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanDynamicMappingInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp_relay_agent_option ObjectFspVlan#dhcp_relay_agent_option}
  */
  readonly dhcpRelayAgentOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp_relay_interface_select_method ObjectFspVlan#dhcp_relay_interface_select_method}
  */
  readonly dhcpRelayInterfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp_relay_ip ObjectFspVlan#dhcp_relay_ip}
  */
  readonly dhcpRelayIp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp_relay_service ObjectFspVlan#dhcp_relay_service}
  */
  readonly dhcpRelayService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp_relay_type ObjectFspVlan#dhcp_relay_type}
  */
  readonly dhcpRelayType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip ObjectFspVlan#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#secondary_ip ObjectFspVlan#secondary_ip}
  */
  readonly secondaryIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vlanid ObjectFspVlan#vlanid}
  */
  readonly vlanid?: number;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ipv6 ObjectFspVlan#ipv6}
  */
  readonly ipv6?: ObjectFspVlanDynamicMappingInterfaceIpv6;
  /**
  * secondaryip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#secondaryip ObjectFspVlan#secondaryip}
  */
  readonly secondaryip?: ObjectFspVlanDynamicMappingInterfaceSecondaryip[] | cdktf.IResolvable;
  /**
  * vrrp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vrrp ObjectFspVlan#vrrp}
  */
  readonly vrrp?: ObjectFspVlanDynamicMappingInterfaceVrrp[] | cdktf.IResolvable;
}

export function objectFspVlanDynamicMappingInterfaceToTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceOutputReference | ObjectFspVlanDynamicMappingInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp_relay_agent_option: cdktf.stringToTerraform(struct!.dhcpRelayAgentOption),
    dhcp_relay_interface_select_method: cdktf.stringToTerraform(struct!.dhcpRelayInterfaceSelectMethod),
    dhcp_relay_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dhcpRelayIp),
    dhcp_relay_service: cdktf.stringToTerraform(struct!.dhcpRelayService),
    dhcp_relay_type: cdktf.stringToTerraform(struct!.dhcpRelayType),
    ip: cdktf.stringToTerraform(struct!.ip),
    secondary_ip: cdktf.stringToTerraform(struct!.secondaryIp),
    vlanid: cdktf.numberToTerraform(struct!.vlanid),
    ipv6: objectFspVlanDynamicMappingInterfaceIpv6ToTerraform(struct!.ipv6),
    secondaryip: cdktf.listMapper(objectFspVlanDynamicMappingInterfaceSecondaryipToTerraform, true)(struct!.secondaryip),
    vrrp: cdktf.listMapper(objectFspVlanDynamicMappingInterfaceVrrpToTerraform, true)(struct!.vrrp),
  }
}


export function objectFspVlanDynamicMappingInterfaceToHclTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceOutputReference | ObjectFspVlanDynamicMappingInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp_relay_agent_option: {
      value: cdktf.stringToHclTerraform(struct!.dhcpRelayAgentOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_relay_interface_select_method: {
      value: cdktf.stringToHclTerraform(struct!.dhcpRelayInterfaceSelectMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_relay_ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dhcpRelayIp),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    dhcp_relay_service: {
      value: cdktf.stringToHclTerraform(struct!.dhcpRelayService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_relay_type: {
      value: cdktf.stringToHclTerraform(struct!.dhcpRelayType),
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
    secondary_ip: {
      value: cdktf.stringToHclTerraform(struct!.secondaryIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlanid: {
      value: cdktf.numberToHclTerraform(struct!.vlanid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6: {
      value: objectFspVlanDynamicMappingInterfaceIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanDynamicMappingInterfaceIpv6List",
    },
    secondaryip: {
      value: cdktf.listMapperHcl(objectFspVlanDynamicMappingInterfaceSecondaryipToHclTerraform, true)(struct!.secondaryip),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanDynamicMappingInterfaceSecondaryipList",
    },
    vrrp: {
      value: cdktf.listMapperHcl(objectFspVlanDynamicMappingInterfaceVrrpToHclTerraform, true)(struct!.vrrp),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanDynamicMappingInterfaceVrrpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanDynamicMappingInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFspVlanDynamicMappingInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpRelayAgentOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRelayAgentOption = this._dhcpRelayAgentOption;
    }
    if (this._dhcpRelayInterfaceSelectMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRelayInterfaceSelectMethod = this._dhcpRelayInterfaceSelectMethod;
    }
    if (this._dhcpRelayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRelayIp = this._dhcpRelayIp;
    }
    if (this._dhcpRelayService !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRelayService = this._dhcpRelayService;
    }
    if (this._dhcpRelayType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRelayType = this._dhcpRelayType;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._secondaryIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryIp = this._secondaryIp;
    }
    if (this._vlanid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanid = this._vlanid;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    if (this._secondaryip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryip = this._secondaryip?.internalValue;
    }
    if (this._vrrp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrrp = this._vrrp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanDynamicMappingInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dhcpRelayAgentOption = undefined;
      this._dhcpRelayInterfaceSelectMethod = undefined;
      this._dhcpRelayIp = undefined;
      this._dhcpRelayService = undefined;
      this._dhcpRelayType = undefined;
      this._ip = undefined;
      this._secondaryIp = undefined;
      this._vlanid = undefined;
      this._ipv6.internalValue = undefined;
      this._secondaryip.internalValue = undefined;
      this._vrrp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dhcpRelayAgentOption = value.dhcpRelayAgentOption;
      this._dhcpRelayInterfaceSelectMethod = value.dhcpRelayInterfaceSelectMethod;
      this._dhcpRelayIp = value.dhcpRelayIp;
      this._dhcpRelayService = value.dhcpRelayService;
      this._dhcpRelayType = value.dhcpRelayType;
      this._ip = value.ip;
      this._secondaryIp = value.secondaryIp;
      this._vlanid = value.vlanid;
      this._ipv6.internalValue = value.ipv6;
      this._secondaryip.internalValue = value.secondaryip;
      this._vrrp.internalValue = value.vrrp;
    }
  }

  // dhcp_relay_agent_option - computed: false, optional: true, required: false
  private _dhcpRelayAgentOption?: string; 
  public get dhcpRelayAgentOption() {
    return this.getStringAttribute('dhcp_relay_agent_option');
  }
  public set dhcpRelayAgentOption(value: string) {
    this._dhcpRelayAgentOption = value;
  }
  public resetDhcpRelayAgentOption() {
    this._dhcpRelayAgentOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayAgentOptionInput() {
    return this._dhcpRelayAgentOption;
  }

  // dhcp_relay_interface_select_method - computed: false, optional: true, required: false
  private _dhcpRelayInterfaceSelectMethod?: string; 
  public get dhcpRelayInterfaceSelectMethod() {
    return this.getStringAttribute('dhcp_relay_interface_select_method');
  }
  public set dhcpRelayInterfaceSelectMethod(value: string) {
    this._dhcpRelayInterfaceSelectMethod = value;
  }
  public resetDhcpRelayInterfaceSelectMethod() {
    this._dhcpRelayInterfaceSelectMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayInterfaceSelectMethodInput() {
    return this._dhcpRelayInterfaceSelectMethod;
  }

  // dhcp_relay_ip - computed: true, optional: true, required: false
  private _dhcpRelayIp?: string[]; 
  public get dhcpRelayIp() {
    return cdktf.Fn.tolist(this.getListAttribute('dhcp_relay_ip'));
  }
  public set dhcpRelayIp(value: string[]) {
    this._dhcpRelayIp = value;
  }
  public resetDhcpRelayIp() {
    this._dhcpRelayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayIpInput() {
    return this._dhcpRelayIp;
  }

  // dhcp_relay_service - computed: false, optional: true, required: false
  private _dhcpRelayService?: string; 
  public get dhcpRelayService() {
    return this.getStringAttribute('dhcp_relay_service');
  }
  public set dhcpRelayService(value: string) {
    this._dhcpRelayService = value;
  }
  public resetDhcpRelayService() {
    this._dhcpRelayService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayServiceInput() {
    return this._dhcpRelayService;
  }

  // dhcp_relay_type - computed: false, optional: true, required: false
  private _dhcpRelayType?: string; 
  public get dhcpRelayType() {
    return this.getStringAttribute('dhcp_relay_type');
  }
  public set dhcpRelayType(value: string) {
    this._dhcpRelayType = value;
  }
  public resetDhcpRelayType() {
    this._dhcpRelayType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayTypeInput() {
    return this._dhcpRelayType;
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

  // secondary_ip - computed: false, optional: true, required: false
  private _secondaryIp?: string; 
  public get secondaryIp() {
    return this.getStringAttribute('secondary_ip');
  }
  public set secondaryIp(value: string) {
    this._secondaryIp = value;
  }
  public resetSecondaryIp() {
    this._secondaryIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryIpInput() {
    return this._secondaryIp;
  }

  // vlanid - computed: false, optional: true, required: false
  private _vlanid?: number; 
  public get vlanid() {
    return this.getNumberAttribute('vlanid');
  }
  public set vlanid(value: number) {
    this._vlanid = value;
  }
  public resetVlanid() {
    this._vlanid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanidInput() {
    return this._vlanid;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new ObjectFspVlanDynamicMappingInterfaceIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ObjectFspVlanDynamicMappingInterfaceIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // secondaryip - computed: false, optional: true, required: false
  private _secondaryip = new ObjectFspVlanDynamicMappingInterfaceSecondaryipList(this, "secondaryip", false);
  public get secondaryip() {
    return this._secondaryip;
  }
  public putSecondaryip(value: ObjectFspVlanDynamicMappingInterfaceSecondaryip[] | cdktf.IResolvable) {
    this._secondaryip.internalValue = value;
  }
  public resetSecondaryip() {
    this._secondaryip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryipInput() {
    return this._secondaryip.internalValue;
  }

  // vrrp - computed: false, optional: true, required: false
  private _vrrp = new ObjectFspVlanDynamicMappingInterfaceVrrpList(this, "vrrp", false);
  public get vrrp() {
    return this._vrrp;
  }
  public putVrrp(value: ObjectFspVlanDynamicMappingInterfaceVrrp[] | cdktf.IResolvable) {
    this._vrrp.internalValue = value;
  }
  public resetVrrp() {
    this._vrrp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpInput() {
    return this._vrrp.internalValue;
  }
}
export interface ObjectFspVlanDynamicMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#_dhcp_status ObjectFspVlan#_dhcp_status}
  */
  readonly dhcpStatus?: string;
  /**
  * _scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#_scope ObjectFspVlan#_scope}
  */
  readonly scope?: ObjectFspVlanDynamicMappingScope[] | cdktf.IResolvable;
  /**
  * dhcp_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp_server ObjectFspVlan#dhcp_server}
  */
  readonly dhcpServer?: ObjectFspVlanDynamicMappingDhcpServer;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#interface ObjectFspVlan#interface}
  */
  readonly interface?: ObjectFspVlanDynamicMappingInterface;
}

export function objectFspVlanDynamicMappingToTerraform(struct?: ObjectFspVlanDynamicMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    _dhcp_status: cdktf.stringToTerraform(struct!.dhcpStatus),
    _scope: cdktf.listMapper(objectFspVlanDynamicMappingScopeToTerraform, true)(struct!.scope),
    dhcp_server: objectFspVlanDynamicMappingDhcpServerToTerraform(struct!.dhcpServer),
    interface: objectFspVlanDynamicMappingInterfaceToTerraform(struct!.interface),
  }
}


export function objectFspVlanDynamicMappingToHclTerraform(struct?: ObjectFspVlanDynamicMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    _dhcp_status: {
      value: cdktf.stringToHclTerraform(struct!.dhcpStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    _scope: {
      value: cdktf.listMapperHcl(objectFspVlanDynamicMappingScopeToHclTerraform, true)(struct!.scope),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanDynamicMappingScopeList",
    },
    dhcp_server: {
      value: objectFspVlanDynamicMappingDhcpServerToHclTerraform(struct!.dhcpServer),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanDynamicMappingDhcpServerList",
    },
    interface: {
      value: objectFspVlanDynamicMappingInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanDynamicMappingInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanDynamicMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanDynamicMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpStatus = this._dhcpStatus;
    }
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    if (this._dhcpServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpServer = this._dhcpServer?.internalValue;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanDynamicMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcpStatus = undefined;
      this._scope.internalValue = undefined;
      this._dhcpServer.internalValue = undefined;
      this._interface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcpStatus = value.dhcpStatus;
      this._scope.internalValue = value.scope;
      this._dhcpServer.internalValue = value.dhcpServer;
      this._interface.internalValue = value.interface;
    }
  }

  // _dhcp_status - computed: false, optional: true, required: false
  private _dhcpStatus?: string; 
  public get dhcpStatus() {
    return this.getStringAttribute('_dhcp_status');
  }
  public set dhcpStatus(value: string) {
    this._dhcpStatus = value;
  }
  public resetDhcpStatus() {
    this._dhcpStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpStatusInput() {
    return this._dhcpStatus;
  }

  // _scope - computed: false, optional: true, required: false
  private _scope = new ObjectFspVlanDynamicMappingScopeList(this, "_scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: ObjectFspVlanDynamicMappingScope[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // dhcp_server - computed: false, optional: true, required: false
  private _dhcpServer = new ObjectFspVlanDynamicMappingDhcpServerOutputReference(this, "dhcp_server");
  public get dhcpServer() {
    return this._dhcpServer;
  }
  public putDhcpServer(value: ObjectFspVlanDynamicMappingDhcpServer) {
    this._dhcpServer.internalValue = value;
  }
  public resetDhcpServer() {
    this._dhcpServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerInput() {
    return this._dhcpServer.internalValue;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new ObjectFspVlanDynamicMappingInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: ObjectFspVlanDynamicMappingInterface) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }
}

export class ObjectFspVlanDynamicMappingList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanDynamicMapping[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanDynamicMappingOutputReference {
    return new ObjectFspVlanDynamicMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#autonomous_flag ObjectFspVlan#autonomous_flag}
  */
  readonly autonomousFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#delegated_prefix_iaid ObjectFspVlan#delegated_prefix_iaid}
  */
  readonly delegatedPrefixIaid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#onlink_flag ObjectFspVlan#onlink_flag}
  */
  readonly onlinkFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#prefix_id ObjectFspVlan#prefix_id}
  */
  readonly prefixId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#rdnss ObjectFspVlan#rdnss}
  */
  readonly rdnss?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#rdnss_service ObjectFspVlan#rdnss_service}
  */
  readonly rdnssService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#subnet ObjectFspVlan#subnet}
  */
  readonly subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#upstream_interface ObjectFspVlan#upstream_interface}
  */
  readonly upstreamInterface?: string;
}

export function objectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructToTerraform(struct?: ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autonomous_flag: cdktf.stringToTerraform(struct!.autonomousFlag),
    delegated_prefix_iaid: cdktf.numberToTerraform(struct!.delegatedPrefixIaid),
    onlink_flag: cdktf.stringToTerraform(struct!.onlinkFlag),
    prefix_id: cdktf.numberToTerraform(struct!.prefixId),
    rdnss: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rdnss),
    rdnss_service: cdktf.stringToTerraform(struct!.rdnssService),
    subnet: cdktf.stringToTerraform(struct!.subnet),
    upstream_interface: cdktf.stringToTerraform(struct!.upstreamInterface),
  }
}


export function objectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructToHclTerraform(struct?: ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autonomous_flag: {
      value: cdktf.stringToHclTerraform(struct!.autonomousFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delegated_prefix_iaid: {
      value: cdktf.numberToHclTerraform(struct!.delegatedPrefixIaid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    onlink_flag: {
      value: cdktf.stringToHclTerraform(struct!.onlinkFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_id: {
      value: cdktf.numberToHclTerraform(struct!.prefixId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdnss: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rdnss),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rdnss_service: {
      value: cdktf.stringToHclTerraform(struct!.rdnssService),
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
    upstream_interface: {
      value: cdktf.stringToHclTerraform(struct!.upstreamInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autonomousFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.autonomousFlag = this._autonomousFlag;
    }
    if (this._delegatedPrefixIaid !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegatedPrefixIaid = this._delegatedPrefixIaid;
    }
    if (this._onlinkFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlinkFlag = this._onlinkFlag;
    }
    if (this._prefixId !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixId = this._prefixId;
    }
    if (this._rdnss !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdnss = this._rdnss;
    }
    if (this._rdnssService !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdnssService = this._rdnssService;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._upstreamInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamInterface = this._upstreamInterface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autonomousFlag = undefined;
      this._delegatedPrefixIaid = undefined;
      this._onlinkFlag = undefined;
      this._prefixId = undefined;
      this._rdnss = undefined;
      this._rdnssService = undefined;
      this._subnet = undefined;
      this._upstreamInterface = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autonomousFlag = value.autonomousFlag;
      this._delegatedPrefixIaid = value.delegatedPrefixIaid;
      this._onlinkFlag = value.onlinkFlag;
      this._prefixId = value.prefixId;
      this._rdnss = value.rdnss;
      this._rdnssService = value.rdnssService;
      this._subnet = value.subnet;
      this._upstreamInterface = value.upstreamInterface;
    }
  }

  // autonomous_flag - computed: false, optional: true, required: false
  private _autonomousFlag?: string; 
  public get autonomousFlag() {
    return this.getStringAttribute('autonomous_flag');
  }
  public set autonomousFlag(value: string) {
    this._autonomousFlag = value;
  }
  public resetAutonomousFlag() {
    this._autonomousFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousFlagInput() {
    return this._autonomousFlag;
  }

  // delegated_prefix_iaid - computed: false, optional: true, required: false
  private _delegatedPrefixIaid?: number; 
  public get delegatedPrefixIaid() {
    return this.getNumberAttribute('delegated_prefix_iaid');
  }
  public set delegatedPrefixIaid(value: number) {
    this._delegatedPrefixIaid = value;
  }
  public resetDelegatedPrefixIaid() {
    this._delegatedPrefixIaid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedPrefixIaidInput() {
    return this._delegatedPrefixIaid;
  }

  // onlink_flag - computed: false, optional: true, required: false
  private _onlinkFlag?: string; 
  public get onlinkFlag() {
    return this.getStringAttribute('onlink_flag');
  }
  public set onlinkFlag(value: string) {
    this._onlinkFlag = value;
  }
  public resetOnlinkFlag() {
    this._onlinkFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlinkFlagInput() {
    return this._onlinkFlag;
  }

  // prefix_id - computed: false, optional: true, required: false
  private _prefixId?: number; 
  public get prefixId() {
    return this.getNumberAttribute('prefix_id');
  }
  public set prefixId(value: number) {
    this._prefixId = value;
  }
  public resetPrefixId() {
    this._prefixId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixIdInput() {
    return this._prefixId;
  }

  // rdnss - computed: true, optional: true, required: false
  private _rdnss?: string[]; 
  public get rdnss() {
    return cdktf.Fn.tolist(this.getListAttribute('rdnss'));
  }
  public set rdnss(value: string[]) {
    this._rdnss = value;
  }
  public resetRdnss() {
    this._rdnss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdnssInput() {
    return this._rdnss;
  }

  // rdnss_service - computed: false, optional: true, required: false
  private _rdnssService?: string; 
  public get rdnssService() {
    return this.getStringAttribute('rdnss_service');
  }
  public set rdnssService(value: string) {
    this._rdnssService = value;
  }
  public resetRdnssService() {
    this._rdnssService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdnssServiceInput() {
    return this._rdnssService;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // upstream_interface - computed: false, optional: true, required: false
  private _upstreamInterface?: string; 
  public get upstreamInterface() {
    return this.getStringAttribute('upstream_interface');
  }
  public set upstreamInterface(value: string) {
    this._upstreamInterface = value;
  }
  public resetUpstreamInterface() {
    this._upstreamInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamInterfaceInput() {
    return this._upstreamInterface;
  }
}

export class ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStruct[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructOutputReference {
    return new ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanInterfaceIpv6Ip6ExtraAddr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#prefix ObjectFspVlan#prefix}
  */
  readonly prefix?: string;
}

export function objectFspVlanInterfaceIpv6Ip6ExtraAddrToTerraform(struct?: ObjectFspVlanInterfaceIpv6Ip6ExtraAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function objectFspVlanInterfaceIpv6Ip6ExtraAddrToHclTerraform(struct?: ObjectFspVlanInterfaceIpv6Ip6ExtraAddr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanInterfaceIpv6Ip6ExtraAddrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanInterfaceIpv6Ip6ExtraAddr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanInterfaceIpv6Ip6ExtraAddr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefix = value.prefix;
    }
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class ObjectFspVlanInterfaceIpv6Ip6ExtraAddrList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanInterfaceIpv6Ip6ExtraAddr[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanInterfaceIpv6Ip6ExtraAddrOutputReference {
    return new ObjectFspVlanInterfaceIpv6Ip6ExtraAddrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanInterfaceIpv6Ip6PrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#autonomous_flag ObjectFspVlan#autonomous_flag}
  */
  readonly autonomousFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dnssl ObjectFspVlan#dnssl}
  */
  readonly dnssl?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#onlink_flag ObjectFspVlan#onlink_flag}
  */
  readonly onlinkFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#preferred_life_time ObjectFspVlan#preferred_life_time}
  */
  readonly preferredLifeTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#prefix ObjectFspVlan#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#rdnss ObjectFspVlan#rdnss}
  */
  readonly rdnss?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#valid_life_time ObjectFspVlan#valid_life_time}
  */
  readonly validLifeTime?: number;
}

export function objectFspVlanInterfaceIpv6Ip6PrefixListStructToTerraform(struct?: ObjectFspVlanInterfaceIpv6Ip6PrefixListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autonomous_flag: cdktf.stringToTerraform(struct!.autonomousFlag),
    dnssl: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnssl),
    onlink_flag: cdktf.stringToTerraform(struct!.onlinkFlag),
    preferred_life_time: cdktf.numberToTerraform(struct!.preferredLifeTime),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    rdnss: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rdnss),
    valid_life_time: cdktf.numberToTerraform(struct!.validLifeTime),
  }
}


export function objectFspVlanInterfaceIpv6Ip6PrefixListStructToHclTerraform(struct?: ObjectFspVlanInterfaceIpv6Ip6PrefixListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autonomous_flag: {
      value: cdktf.stringToHclTerraform(struct!.autonomousFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dnssl: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnssl),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    onlink_flag: {
      value: cdktf.stringToHclTerraform(struct!.onlinkFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preferred_life_time: {
      value: cdktf.numberToHclTerraform(struct!.preferredLifeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rdnss: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rdnss),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    valid_life_time: {
      value: cdktf.numberToHclTerraform(struct!.validLifeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanInterfaceIpv6Ip6PrefixListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanInterfaceIpv6Ip6PrefixListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autonomousFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.autonomousFlag = this._autonomousFlag;
    }
    if (this._dnssl !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnssl = this._dnssl;
    }
    if (this._onlinkFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlinkFlag = this._onlinkFlag;
    }
    if (this._preferredLifeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredLifeTime = this._preferredLifeTime;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._rdnss !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdnss = this._rdnss;
    }
    if (this._validLifeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.validLifeTime = this._validLifeTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanInterfaceIpv6Ip6PrefixListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autonomousFlag = undefined;
      this._dnssl = undefined;
      this._onlinkFlag = undefined;
      this._preferredLifeTime = undefined;
      this._prefix = undefined;
      this._rdnss = undefined;
      this._validLifeTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autonomousFlag = value.autonomousFlag;
      this._dnssl = value.dnssl;
      this._onlinkFlag = value.onlinkFlag;
      this._preferredLifeTime = value.preferredLifeTime;
      this._prefix = value.prefix;
      this._rdnss = value.rdnss;
      this._validLifeTime = value.validLifeTime;
    }
  }

  // autonomous_flag - computed: false, optional: true, required: false
  private _autonomousFlag?: string; 
  public get autonomousFlag() {
    return this.getStringAttribute('autonomous_flag');
  }
  public set autonomousFlag(value: string) {
    this._autonomousFlag = value;
  }
  public resetAutonomousFlag() {
    this._autonomousFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousFlagInput() {
    return this._autonomousFlag;
  }

  // dnssl - computed: true, optional: true, required: false
  private _dnssl?: string[]; 
  public get dnssl() {
    return cdktf.Fn.tolist(this.getListAttribute('dnssl'));
  }
  public set dnssl(value: string[]) {
    this._dnssl = value;
  }
  public resetDnssl() {
    this._dnssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsslInput() {
    return this._dnssl;
  }

  // onlink_flag - computed: false, optional: true, required: false
  private _onlinkFlag?: string; 
  public get onlinkFlag() {
    return this.getStringAttribute('onlink_flag');
  }
  public set onlinkFlag(value: string) {
    this._onlinkFlag = value;
  }
  public resetOnlinkFlag() {
    this._onlinkFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlinkFlagInput() {
    return this._onlinkFlag;
  }

  // preferred_life_time - computed: false, optional: true, required: false
  private _preferredLifeTime?: number; 
  public get preferredLifeTime() {
    return this.getNumberAttribute('preferred_life_time');
  }
  public set preferredLifeTime(value: number) {
    this._preferredLifeTime = value;
  }
  public resetPreferredLifeTime() {
    this._preferredLifeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLifeTimeInput() {
    return this._preferredLifeTime;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // rdnss - computed: true, optional: true, required: false
  private _rdnss?: string[]; 
  public get rdnss() {
    return cdktf.Fn.tolist(this.getListAttribute('rdnss'));
  }
  public set rdnss(value: string[]) {
    this._rdnss = value;
  }
  public resetRdnss() {
    this._rdnss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdnssInput() {
    return this._rdnss;
  }

  // valid_life_time - computed: false, optional: true, required: false
  private _validLifeTime?: number; 
  public get validLifeTime() {
    return this.getNumberAttribute('valid_life_time');
  }
  public set validLifeTime(value: number) {
    this._validLifeTime = value;
  }
  public resetValidLifeTime() {
    this._validLifeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validLifeTimeInput() {
    return this._validLifeTime;
  }
}

export class ObjectFspVlanInterfaceIpv6Ip6PrefixListStructList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanInterfaceIpv6Ip6PrefixListStruct[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanInterfaceIpv6Ip6PrefixListStructOutputReference {
    return new ObjectFspVlanInterfaceIpv6Ip6PrefixListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanInterfaceIpv6Vrrp6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#accept_mode ObjectFspVlan#accept_mode}
  */
  readonly acceptMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#adv_interval ObjectFspVlan#adv_interval}
  */
  readonly advInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ignore_default_route ObjectFspVlan#ignore_default_route}
  */
  readonly ignoreDefaultRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#preempt ObjectFspVlan#preempt}
  */
  readonly preempt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#priority ObjectFspVlan#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#start_time ObjectFspVlan#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#status ObjectFspVlan#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vrdst6 ObjectFspVlan#vrdst6}
  */
  readonly vrdst6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vrgrp ObjectFspVlan#vrgrp}
  */
  readonly vrgrp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vrid ObjectFspVlan#vrid}
  */
  readonly vrid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vrip6 ObjectFspVlan#vrip6}
  */
  readonly vrip6?: string;
}

export function objectFspVlanInterfaceIpv6Vrrp6ToTerraform(struct?: ObjectFspVlanInterfaceIpv6Vrrp6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_mode: cdktf.stringToTerraform(struct!.acceptMode),
    adv_interval: cdktf.numberToTerraform(struct!.advInterval),
    ignore_default_route: cdktf.stringToTerraform(struct!.ignoreDefaultRoute),
    preempt: cdktf.stringToTerraform(struct!.preempt),
    priority: cdktf.numberToTerraform(struct!.priority),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    status: cdktf.stringToTerraform(struct!.status),
    vrdst6: cdktf.stringToTerraform(struct!.vrdst6),
    vrgrp: cdktf.numberToTerraform(struct!.vrgrp),
    vrid: cdktf.numberToTerraform(struct!.vrid),
    vrip6: cdktf.stringToTerraform(struct!.vrip6),
  }
}


export function objectFspVlanInterfaceIpv6Vrrp6ToHclTerraform(struct?: ObjectFspVlanInterfaceIpv6Vrrp6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_mode: {
      value: cdktf.stringToHclTerraform(struct!.acceptMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    adv_interval: {
      value: cdktf.numberToHclTerraform(struct!.advInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_default_route: {
      value: cdktf.stringToHclTerraform(struct!.ignoreDefaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preempt: {
      value: cdktf.stringToHclTerraform(struct!.preempt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrdst6: {
      value: cdktf.stringToHclTerraform(struct!.vrdst6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrgrp: {
      value: cdktf.numberToHclTerraform(struct!.vrgrp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrip6: {
      value: cdktf.stringToHclTerraform(struct!.vrip6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanInterfaceIpv6Vrrp6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanInterfaceIpv6Vrrp6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptMode = this._acceptMode;
    }
    if (this._advInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.advInterval = this._advInterval;
    }
    if (this._ignoreDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDefaultRoute = this._ignoreDefaultRoute;
    }
    if (this._preempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.preempt = this._preempt;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._vrdst6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrdst6 = this._vrdst6;
    }
    if (this._vrgrp !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrgrp = this._vrgrp;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    if (this._vrip6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrip6 = this._vrip6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanInterfaceIpv6Vrrp6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptMode = undefined;
      this._advInterval = undefined;
      this._ignoreDefaultRoute = undefined;
      this._preempt = undefined;
      this._priority = undefined;
      this._startTime = undefined;
      this._status = undefined;
      this._vrdst6 = undefined;
      this._vrgrp = undefined;
      this._vrid = undefined;
      this._vrip6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptMode = value.acceptMode;
      this._advInterval = value.advInterval;
      this._ignoreDefaultRoute = value.ignoreDefaultRoute;
      this._preempt = value.preempt;
      this._priority = value.priority;
      this._startTime = value.startTime;
      this._status = value.status;
      this._vrdst6 = value.vrdst6;
      this._vrgrp = value.vrgrp;
      this._vrid = value.vrid;
      this._vrip6 = value.vrip6;
    }
  }

  // accept_mode - computed: true, optional: true, required: false
  private _acceptMode?: string; 
  public get acceptMode() {
    return this.getStringAttribute('accept_mode');
  }
  public set acceptMode(value: string) {
    this._acceptMode = value;
  }
  public resetAcceptMode() {
    this._acceptMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptModeInput() {
    return this._acceptMode;
  }

  // adv_interval - computed: true, optional: true, required: false
  private _advInterval?: number; 
  public get advInterval() {
    return this.getNumberAttribute('adv_interval');
  }
  public set advInterval(value: number) {
    this._advInterval = value;
  }
  public resetAdvInterval() {
    this._advInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advIntervalInput() {
    return this._advInterval;
  }

  // ignore_default_route - computed: true, optional: true, required: false
  private _ignoreDefaultRoute?: string; 
  public get ignoreDefaultRoute() {
    return this.getStringAttribute('ignore_default_route');
  }
  public set ignoreDefaultRoute(value: string) {
    this._ignoreDefaultRoute = value;
  }
  public resetIgnoreDefaultRoute() {
    this._ignoreDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDefaultRouteInput() {
    return this._ignoreDefaultRoute;
  }

  // preempt - computed: true, optional: true, required: false
  private _preempt?: string; 
  public get preempt() {
    return this.getStringAttribute('preempt');
  }
  public set preempt(value: string) {
    this._preempt = value;
  }
  public resetPreempt() {
    this._preempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptInput() {
    return this._preempt;
  }

  // priority - computed: true, optional: true, required: false
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

  // start_time - computed: true, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // vrdst6 - computed: false, optional: true, required: false
  private _vrdst6?: string; 
  public get vrdst6() {
    return this.getStringAttribute('vrdst6');
  }
  public set vrdst6(value: string) {
    this._vrdst6 = value;
  }
  public resetVrdst6() {
    this._vrdst6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrdst6Input() {
    return this._vrdst6;
  }

  // vrgrp - computed: false, optional: true, required: false
  private _vrgrp?: number; 
  public get vrgrp() {
    return this.getNumberAttribute('vrgrp');
  }
  public set vrgrp(value: number) {
    this._vrgrp = value;
  }
  public resetVrgrp() {
    this._vrgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrgrpInput() {
    return this._vrgrp;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }

  // vrip6 - computed: true, optional: true, required: false
  private _vrip6?: string; 
  public get vrip6() {
    return this.getStringAttribute('vrip6');
  }
  public set vrip6(value: string) {
    this._vrip6 = value;
  }
  public resetVrip6() {
    this._vrip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrip6Input() {
    return this._vrip6;
  }
}

export class ObjectFspVlanInterfaceIpv6Vrrp6List extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanInterfaceIpv6Vrrp6[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanInterfaceIpv6Vrrp6OutputReference {
    return new ObjectFspVlanInterfaceIpv6Vrrp6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanInterfaceIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#autoconf ObjectFspVlan#autoconf}
  */
  readonly autoconf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#cli_conn6_status ObjectFspVlan#cli_conn6_status}
  */
  readonly cliConn6Status?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp6_client_options ObjectFspVlan#dhcp6_client_options}
  */
  readonly dhcp6ClientOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp6_information_request ObjectFspVlan#dhcp6_information_request}
  */
  readonly dhcp6InformationRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp6_prefix_delegation ObjectFspVlan#dhcp6_prefix_delegation}
  */
  readonly dhcp6PrefixDelegation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp6_prefix_hint ObjectFspVlan#dhcp6_prefix_hint}
  */
  readonly dhcp6PrefixHint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp6_prefix_hint_plt ObjectFspVlan#dhcp6_prefix_hint_plt}
  */
  readonly dhcp6PrefixHintPlt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp6_prefix_hint_vlt ObjectFspVlan#dhcp6_prefix_hint_vlt}
  */
  readonly dhcp6PrefixHintVlt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp6_relay_interface_id ObjectFspVlan#dhcp6_relay_interface_id}
  */
  readonly dhcp6RelayInterfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp6_relay_ip ObjectFspVlan#dhcp6_relay_ip}
  */
  readonly dhcp6RelayIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp6_relay_service ObjectFspVlan#dhcp6_relay_service}
  */
  readonly dhcp6RelayService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp6_relay_source_interface ObjectFspVlan#dhcp6_relay_source_interface}
  */
  readonly dhcp6RelaySourceInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp6_relay_source_ip ObjectFspVlan#dhcp6_relay_source_ip}
  */
  readonly dhcp6RelaySourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp6_relay_type ObjectFspVlan#dhcp6_relay_type}
  */
  readonly dhcp6RelayType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#icmp6_send_redirect ObjectFspVlan#icmp6_send_redirect}
  */
  readonly icmp6SendRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#interface_identifier ObjectFspVlan#interface_identifier}
  */
  readonly interfaceIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_address ObjectFspVlan#ip6_address}
  */
  readonly ip6Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_allowaccess ObjectFspVlan#ip6_allowaccess}
  */
  readonly ip6Allowaccess?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_default_life ObjectFspVlan#ip6_default_life}
  */
  readonly ip6DefaultLife?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_delegated_prefix_iaid ObjectFspVlan#ip6_delegated_prefix_iaid}
  */
  readonly ip6DelegatedPrefixIaid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_dns_server_override ObjectFspVlan#ip6_dns_server_override}
  */
  readonly ip6DnsServerOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_hop_limit ObjectFspVlan#ip6_hop_limit}
  */
  readonly ip6HopLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_link_mtu ObjectFspVlan#ip6_link_mtu}
  */
  readonly ip6LinkMtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_manage_flag ObjectFspVlan#ip6_manage_flag}
  */
  readonly ip6ManageFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_max_interval ObjectFspVlan#ip6_max_interval}
  */
  readonly ip6MaxInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_min_interval ObjectFspVlan#ip6_min_interval}
  */
  readonly ip6MinInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_mode ObjectFspVlan#ip6_mode}
  */
  readonly ip6Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_other_flag ObjectFspVlan#ip6_other_flag}
  */
  readonly ip6OtherFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_prefix_mode ObjectFspVlan#ip6_prefix_mode}
  */
  readonly ip6PrefixMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_reachable_time ObjectFspVlan#ip6_reachable_time}
  */
  readonly ip6ReachableTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_retrans_time ObjectFspVlan#ip6_retrans_time}
  */
  readonly ip6RetransTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_send_adv ObjectFspVlan#ip6_send_adv}
  */
  readonly ip6SendAdv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_subnet ObjectFspVlan#ip6_subnet}
  */
  readonly ip6Subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_upstream_interface ObjectFspVlan#ip6_upstream_interface}
  */
  readonly ip6UpstreamInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#nd_cert ObjectFspVlan#nd_cert}
  */
  readonly ndCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#nd_cga_modifier ObjectFspVlan#nd_cga_modifier}
  */
  readonly ndCgaModifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#nd_mode ObjectFspVlan#nd_mode}
  */
  readonly ndMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#nd_security_level ObjectFspVlan#nd_security_level}
  */
  readonly ndSecurityLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#nd_timestamp_delta ObjectFspVlan#nd_timestamp_delta}
  */
  readonly ndTimestampDelta?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#nd_timestamp_fuzz ObjectFspVlan#nd_timestamp_fuzz}
  */
  readonly ndTimestampFuzz?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ra_send_mtu ObjectFspVlan#ra_send_mtu}
  */
  readonly raSendMtu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#unique_autoconf_addr ObjectFspVlan#unique_autoconf_addr}
  */
  readonly uniqueAutoconfAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vrip6_link_local ObjectFspVlan#vrip6_link_local}
  */
  readonly vrip6LinkLocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vrrp_virtual_mac6 ObjectFspVlan#vrrp_virtual_mac6}
  */
  readonly vrrpVirtualMac6?: string;
  /**
  * ip6_delegated_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_delegated_prefix_list ObjectFspVlan#ip6_delegated_prefix_list}
  */
  readonly ip6DelegatedPrefixList?: ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStruct[] | cdktf.IResolvable;
  /**
  * ip6_extra_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_extra_addr ObjectFspVlan#ip6_extra_addr}
  */
  readonly ip6ExtraAddr?: ObjectFspVlanInterfaceIpv6Ip6ExtraAddr[] | cdktf.IResolvable;
  /**
  * ip6_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip6_prefix_list ObjectFspVlan#ip6_prefix_list}
  */
  readonly ip6PrefixList?: ObjectFspVlanInterfaceIpv6Ip6PrefixListStruct[] | cdktf.IResolvable;
  /**
  * vrrp6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vrrp6 ObjectFspVlan#vrrp6}
  */
  readonly vrrp6?: ObjectFspVlanInterfaceIpv6Vrrp6[] | cdktf.IResolvable;
}

export function objectFspVlanInterfaceIpv6ToTerraform(struct?: ObjectFspVlanInterfaceIpv6OutputReference | ObjectFspVlanInterfaceIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoconf: cdktf.stringToTerraform(struct!.autoconf),
    cli_conn6_status: cdktf.numberToTerraform(struct!.cliConn6Status),
    dhcp6_client_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dhcp6ClientOptions),
    dhcp6_information_request: cdktf.stringToTerraform(struct!.dhcp6InformationRequest),
    dhcp6_prefix_delegation: cdktf.stringToTerraform(struct!.dhcp6PrefixDelegation),
    dhcp6_prefix_hint: cdktf.stringToTerraform(struct!.dhcp6PrefixHint),
    dhcp6_prefix_hint_plt: cdktf.numberToTerraform(struct!.dhcp6PrefixHintPlt),
    dhcp6_prefix_hint_vlt: cdktf.numberToTerraform(struct!.dhcp6PrefixHintVlt),
    dhcp6_relay_interface_id: cdktf.stringToTerraform(struct!.dhcp6RelayInterfaceId),
    dhcp6_relay_ip: cdktf.stringToTerraform(struct!.dhcp6RelayIp),
    dhcp6_relay_service: cdktf.stringToTerraform(struct!.dhcp6RelayService),
    dhcp6_relay_source_interface: cdktf.stringToTerraform(struct!.dhcp6RelaySourceInterface),
    dhcp6_relay_source_ip: cdktf.stringToTerraform(struct!.dhcp6RelaySourceIp),
    dhcp6_relay_type: cdktf.stringToTerraform(struct!.dhcp6RelayType),
    icmp6_send_redirect: cdktf.stringToTerraform(struct!.icmp6SendRedirect),
    interface_identifier: cdktf.stringToTerraform(struct!.interfaceIdentifier),
    ip6_address: cdktf.stringToTerraform(struct!.ip6Address),
    ip6_allowaccess: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ip6Allowaccess),
    ip6_default_life: cdktf.numberToTerraform(struct!.ip6DefaultLife),
    ip6_delegated_prefix_iaid: cdktf.numberToTerraform(struct!.ip6DelegatedPrefixIaid),
    ip6_dns_server_override: cdktf.stringToTerraform(struct!.ip6DnsServerOverride),
    ip6_hop_limit: cdktf.numberToTerraform(struct!.ip6HopLimit),
    ip6_link_mtu: cdktf.numberToTerraform(struct!.ip6LinkMtu),
    ip6_manage_flag: cdktf.stringToTerraform(struct!.ip6ManageFlag),
    ip6_max_interval: cdktf.numberToTerraform(struct!.ip6MaxInterval),
    ip6_min_interval: cdktf.numberToTerraform(struct!.ip6MinInterval),
    ip6_mode: cdktf.stringToTerraform(struct!.ip6Mode),
    ip6_other_flag: cdktf.stringToTerraform(struct!.ip6OtherFlag),
    ip6_prefix_mode: cdktf.stringToTerraform(struct!.ip6PrefixMode),
    ip6_reachable_time: cdktf.numberToTerraform(struct!.ip6ReachableTime),
    ip6_retrans_time: cdktf.numberToTerraform(struct!.ip6RetransTime),
    ip6_send_adv: cdktf.stringToTerraform(struct!.ip6SendAdv),
    ip6_subnet: cdktf.stringToTerraform(struct!.ip6Subnet),
    ip6_upstream_interface: cdktf.stringToTerraform(struct!.ip6UpstreamInterface),
    nd_cert: cdktf.stringToTerraform(struct!.ndCert),
    nd_cga_modifier: cdktf.stringToTerraform(struct!.ndCgaModifier),
    nd_mode: cdktf.stringToTerraform(struct!.ndMode),
    nd_security_level: cdktf.numberToTerraform(struct!.ndSecurityLevel),
    nd_timestamp_delta: cdktf.numberToTerraform(struct!.ndTimestampDelta),
    nd_timestamp_fuzz: cdktf.numberToTerraform(struct!.ndTimestampFuzz),
    ra_send_mtu: cdktf.stringToTerraform(struct!.raSendMtu),
    unique_autoconf_addr: cdktf.stringToTerraform(struct!.uniqueAutoconfAddr),
    vrip6_link_local: cdktf.stringToTerraform(struct!.vrip6LinkLocal),
    vrrp_virtual_mac6: cdktf.stringToTerraform(struct!.vrrpVirtualMac6),
    ip6_delegated_prefix_list: cdktf.listMapper(objectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructToTerraform, true)(struct!.ip6DelegatedPrefixList),
    ip6_extra_addr: cdktf.listMapper(objectFspVlanInterfaceIpv6Ip6ExtraAddrToTerraform, true)(struct!.ip6ExtraAddr),
    ip6_prefix_list: cdktf.listMapper(objectFspVlanInterfaceIpv6Ip6PrefixListStructToTerraform, true)(struct!.ip6PrefixList),
    vrrp6: cdktf.listMapper(objectFspVlanInterfaceIpv6Vrrp6ToTerraform, true)(struct!.vrrp6),
  }
}


export function objectFspVlanInterfaceIpv6ToHclTerraform(struct?: ObjectFspVlanInterfaceIpv6OutputReference | ObjectFspVlanInterfaceIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoconf: {
      value: cdktf.stringToHclTerraform(struct!.autoconf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cli_conn6_status: {
      value: cdktf.numberToHclTerraform(struct!.cliConn6Status),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dhcp6_client_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dhcp6ClientOptions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    dhcp6_information_request: {
      value: cdktf.stringToHclTerraform(struct!.dhcp6InformationRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp6_prefix_delegation: {
      value: cdktf.stringToHclTerraform(struct!.dhcp6PrefixDelegation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp6_prefix_hint: {
      value: cdktf.stringToHclTerraform(struct!.dhcp6PrefixHint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp6_prefix_hint_plt: {
      value: cdktf.numberToHclTerraform(struct!.dhcp6PrefixHintPlt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dhcp6_prefix_hint_vlt: {
      value: cdktf.numberToHclTerraform(struct!.dhcp6PrefixHintVlt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dhcp6_relay_interface_id: {
      value: cdktf.stringToHclTerraform(struct!.dhcp6RelayInterfaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp6_relay_ip: {
      value: cdktf.stringToHclTerraform(struct!.dhcp6RelayIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp6_relay_service: {
      value: cdktf.stringToHclTerraform(struct!.dhcp6RelayService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp6_relay_source_interface: {
      value: cdktf.stringToHclTerraform(struct!.dhcp6RelaySourceInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp6_relay_source_ip: {
      value: cdktf.stringToHclTerraform(struct!.dhcp6RelaySourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp6_relay_type: {
      value: cdktf.stringToHclTerraform(struct!.dhcp6RelayType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp6_send_redirect: {
      value: cdktf.stringToHclTerraform(struct!.icmp6SendRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_identifier: {
      value: cdktf.stringToHclTerraform(struct!.interfaceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_address: {
      value: cdktf.stringToHclTerraform(struct!.ip6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_allowaccess: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ip6Allowaccess),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ip6_default_life: {
      value: cdktf.numberToHclTerraform(struct!.ip6DefaultLife),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_delegated_prefix_iaid: {
      value: cdktf.numberToHclTerraform(struct!.ip6DelegatedPrefixIaid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_dns_server_override: {
      value: cdktf.stringToHclTerraform(struct!.ip6DnsServerOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_hop_limit: {
      value: cdktf.numberToHclTerraform(struct!.ip6HopLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_link_mtu: {
      value: cdktf.numberToHclTerraform(struct!.ip6LinkMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_manage_flag: {
      value: cdktf.stringToHclTerraform(struct!.ip6ManageFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_max_interval: {
      value: cdktf.numberToHclTerraform(struct!.ip6MaxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_min_interval: {
      value: cdktf.numberToHclTerraform(struct!.ip6MinInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_mode: {
      value: cdktf.stringToHclTerraform(struct!.ip6Mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_other_flag: {
      value: cdktf.stringToHclTerraform(struct!.ip6OtherFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_prefix_mode: {
      value: cdktf.stringToHclTerraform(struct!.ip6PrefixMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_reachable_time: {
      value: cdktf.numberToHclTerraform(struct!.ip6ReachableTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_retrans_time: {
      value: cdktf.numberToHclTerraform(struct!.ip6RetransTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip6_send_adv: {
      value: cdktf.stringToHclTerraform(struct!.ip6SendAdv),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_subnet: {
      value: cdktf.stringToHclTerraform(struct!.ip6Subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_upstream_interface: {
      value: cdktf.stringToHclTerraform(struct!.ip6UpstreamInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nd_cert: {
      value: cdktf.stringToHclTerraform(struct!.ndCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nd_cga_modifier: {
      value: cdktf.stringToHclTerraform(struct!.ndCgaModifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nd_mode: {
      value: cdktf.stringToHclTerraform(struct!.ndMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nd_security_level: {
      value: cdktf.numberToHclTerraform(struct!.ndSecurityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd_timestamp_delta: {
      value: cdktf.numberToHclTerraform(struct!.ndTimestampDelta),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd_timestamp_fuzz: {
      value: cdktf.numberToHclTerraform(struct!.ndTimestampFuzz),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ra_send_mtu: {
      value: cdktf.stringToHclTerraform(struct!.raSendMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unique_autoconf_addr: {
      value: cdktf.stringToHclTerraform(struct!.uniqueAutoconfAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrip6_link_local: {
      value: cdktf.stringToHclTerraform(struct!.vrip6LinkLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrrp_virtual_mac6: {
      value: cdktf.stringToHclTerraform(struct!.vrrpVirtualMac6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6_delegated_prefix_list: {
      value: cdktf.listMapperHcl(objectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructToHclTerraform, true)(struct!.ip6DelegatedPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructList",
    },
    ip6_extra_addr: {
      value: cdktf.listMapperHcl(objectFspVlanInterfaceIpv6Ip6ExtraAddrToHclTerraform, true)(struct!.ip6ExtraAddr),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanInterfaceIpv6Ip6ExtraAddrList",
    },
    ip6_prefix_list: {
      value: cdktf.listMapperHcl(objectFspVlanInterfaceIpv6Ip6PrefixListStructToHclTerraform, true)(struct!.ip6PrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanInterfaceIpv6Ip6PrefixListStructList",
    },
    vrrp6: {
      value: cdktf.listMapperHcl(objectFspVlanInterfaceIpv6Vrrp6ToHclTerraform, true)(struct!.vrrp6),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanInterfaceIpv6Vrrp6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanInterfaceIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFspVlanInterfaceIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoconf !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoconf = this._autoconf;
    }
    if (this._cliConn6Status !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliConn6Status = this._cliConn6Status;
    }
    if (this._dhcp6ClientOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6ClientOptions = this._dhcp6ClientOptions;
    }
    if (this._dhcp6InformationRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6InformationRequest = this._dhcp6InformationRequest;
    }
    if (this._dhcp6PrefixDelegation !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6PrefixDelegation = this._dhcp6PrefixDelegation;
    }
    if (this._dhcp6PrefixHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6PrefixHint = this._dhcp6PrefixHint;
    }
    if (this._dhcp6PrefixHintPlt !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6PrefixHintPlt = this._dhcp6PrefixHintPlt;
    }
    if (this._dhcp6PrefixHintVlt !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6PrefixHintVlt = this._dhcp6PrefixHintVlt;
    }
    if (this._dhcp6RelayInterfaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6RelayInterfaceId = this._dhcp6RelayInterfaceId;
    }
    if (this._dhcp6RelayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6RelayIp = this._dhcp6RelayIp;
    }
    if (this._dhcp6RelayService !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6RelayService = this._dhcp6RelayService;
    }
    if (this._dhcp6RelaySourceInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6RelaySourceInterface = this._dhcp6RelaySourceInterface;
    }
    if (this._dhcp6RelaySourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6RelaySourceIp = this._dhcp6RelaySourceIp;
    }
    if (this._dhcp6RelayType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6RelayType = this._dhcp6RelayType;
    }
    if (this._icmp6SendRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp6SendRedirect = this._icmp6SendRedirect;
    }
    if (this._interfaceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIdentifier = this._interfaceIdentifier;
    }
    if (this._ip6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Address = this._ip6Address;
    }
    if (this._ip6Allowaccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Allowaccess = this._ip6Allowaccess;
    }
    if (this._ip6DefaultLife !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6DefaultLife = this._ip6DefaultLife;
    }
    if (this._ip6DelegatedPrefixIaid !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6DelegatedPrefixIaid = this._ip6DelegatedPrefixIaid;
    }
    if (this._ip6DnsServerOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6DnsServerOverride = this._ip6DnsServerOverride;
    }
    if (this._ip6HopLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6HopLimit = this._ip6HopLimit;
    }
    if (this._ip6LinkMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6LinkMtu = this._ip6LinkMtu;
    }
    if (this._ip6ManageFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6ManageFlag = this._ip6ManageFlag;
    }
    if (this._ip6MaxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6MaxInterval = this._ip6MaxInterval;
    }
    if (this._ip6MinInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6MinInterval = this._ip6MinInterval;
    }
    if (this._ip6Mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Mode = this._ip6Mode;
    }
    if (this._ip6OtherFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6OtherFlag = this._ip6OtherFlag;
    }
    if (this._ip6PrefixMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6PrefixMode = this._ip6PrefixMode;
    }
    if (this._ip6ReachableTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6ReachableTime = this._ip6ReachableTime;
    }
    if (this._ip6RetransTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6RetransTime = this._ip6RetransTime;
    }
    if (this._ip6SendAdv !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6SendAdv = this._ip6SendAdv;
    }
    if (this._ip6Subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Subnet = this._ip6Subnet;
    }
    if (this._ip6UpstreamInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6UpstreamInterface = this._ip6UpstreamInterface;
    }
    if (this._ndCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.ndCert = this._ndCert;
    }
    if (this._ndCgaModifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.ndCgaModifier = this._ndCgaModifier;
    }
    if (this._ndMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ndMode = this._ndMode;
    }
    if (this._ndSecurityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.ndSecurityLevel = this._ndSecurityLevel;
    }
    if (this._ndTimestampDelta !== undefined) {
      hasAnyValues = true;
      internalValueResult.ndTimestampDelta = this._ndTimestampDelta;
    }
    if (this._ndTimestampFuzz !== undefined) {
      hasAnyValues = true;
      internalValueResult.ndTimestampFuzz = this._ndTimestampFuzz;
    }
    if (this._raSendMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.raSendMtu = this._raSendMtu;
    }
    if (this._uniqueAutoconfAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueAutoconfAddr = this._uniqueAutoconfAddr;
    }
    if (this._vrip6LinkLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrip6LinkLocal = this._vrip6LinkLocal;
    }
    if (this._vrrpVirtualMac6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrrpVirtualMac6 = this._vrrpVirtualMac6;
    }
    if (this._ip6DelegatedPrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6DelegatedPrefixList = this._ip6DelegatedPrefixList?.internalValue;
    }
    if (this._ip6ExtraAddr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6ExtraAddr = this._ip6ExtraAddr?.internalValue;
    }
    if (this._ip6PrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6PrefixList = this._ip6PrefixList?.internalValue;
    }
    if (this._vrrp6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrrp6 = this._vrrp6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanInterfaceIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoconf = undefined;
      this._cliConn6Status = undefined;
      this._dhcp6ClientOptions = undefined;
      this._dhcp6InformationRequest = undefined;
      this._dhcp6PrefixDelegation = undefined;
      this._dhcp6PrefixHint = undefined;
      this._dhcp6PrefixHintPlt = undefined;
      this._dhcp6PrefixHintVlt = undefined;
      this._dhcp6RelayInterfaceId = undefined;
      this._dhcp6RelayIp = undefined;
      this._dhcp6RelayService = undefined;
      this._dhcp6RelaySourceInterface = undefined;
      this._dhcp6RelaySourceIp = undefined;
      this._dhcp6RelayType = undefined;
      this._icmp6SendRedirect = undefined;
      this._interfaceIdentifier = undefined;
      this._ip6Address = undefined;
      this._ip6Allowaccess = undefined;
      this._ip6DefaultLife = undefined;
      this._ip6DelegatedPrefixIaid = undefined;
      this._ip6DnsServerOverride = undefined;
      this._ip6HopLimit = undefined;
      this._ip6LinkMtu = undefined;
      this._ip6ManageFlag = undefined;
      this._ip6MaxInterval = undefined;
      this._ip6MinInterval = undefined;
      this._ip6Mode = undefined;
      this._ip6OtherFlag = undefined;
      this._ip6PrefixMode = undefined;
      this._ip6ReachableTime = undefined;
      this._ip6RetransTime = undefined;
      this._ip6SendAdv = undefined;
      this._ip6Subnet = undefined;
      this._ip6UpstreamInterface = undefined;
      this._ndCert = undefined;
      this._ndCgaModifier = undefined;
      this._ndMode = undefined;
      this._ndSecurityLevel = undefined;
      this._ndTimestampDelta = undefined;
      this._ndTimestampFuzz = undefined;
      this._raSendMtu = undefined;
      this._uniqueAutoconfAddr = undefined;
      this._vrip6LinkLocal = undefined;
      this._vrrpVirtualMac6 = undefined;
      this._ip6DelegatedPrefixList.internalValue = undefined;
      this._ip6ExtraAddr.internalValue = undefined;
      this._ip6PrefixList.internalValue = undefined;
      this._vrrp6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoconf = value.autoconf;
      this._cliConn6Status = value.cliConn6Status;
      this._dhcp6ClientOptions = value.dhcp6ClientOptions;
      this._dhcp6InformationRequest = value.dhcp6InformationRequest;
      this._dhcp6PrefixDelegation = value.dhcp6PrefixDelegation;
      this._dhcp6PrefixHint = value.dhcp6PrefixHint;
      this._dhcp6PrefixHintPlt = value.dhcp6PrefixHintPlt;
      this._dhcp6PrefixHintVlt = value.dhcp6PrefixHintVlt;
      this._dhcp6RelayInterfaceId = value.dhcp6RelayInterfaceId;
      this._dhcp6RelayIp = value.dhcp6RelayIp;
      this._dhcp6RelayService = value.dhcp6RelayService;
      this._dhcp6RelaySourceInterface = value.dhcp6RelaySourceInterface;
      this._dhcp6RelaySourceIp = value.dhcp6RelaySourceIp;
      this._dhcp6RelayType = value.dhcp6RelayType;
      this._icmp6SendRedirect = value.icmp6SendRedirect;
      this._interfaceIdentifier = value.interfaceIdentifier;
      this._ip6Address = value.ip6Address;
      this._ip6Allowaccess = value.ip6Allowaccess;
      this._ip6DefaultLife = value.ip6DefaultLife;
      this._ip6DelegatedPrefixIaid = value.ip6DelegatedPrefixIaid;
      this._ip6DnsServerOverride = value.ip6DnsServerOverride;
      this._ip6HopLimit = value.ip6HopLimit;
      this._ip6LinkMtu = value.ip6LinkMtu;
      this._ip6ManageFlag = value.ip6ManageFlag;
      this._ip6MaxInterval = value.ip6MaxInterval;
      this._ip6MinInterval = value.ip6MinInterval;
      this._ip6Mode = value.ip6Mode;
      this._ip6OtherFlag = value.ip6OtherFlag;
      this._ip6PrefixMode = value.ip6PrefixMode;
      this._ip6ReachableTime = value.ip6ReachableTime;
      this._ip6RetransTime = value.ip6RetransTime;
      this._ip6SendAdv = value.ip6SendAdv;
      this._ip6Subnet = value.ip6Subnet;
      this._ip6UpstreamInterface = value.ip6UpstreamInterface;
      this._ndCert = value.ndCert;
      this._ndCgaModifier = value.ndCgaModifier;
      this._ndMode = value.ndMode;
      this._ndSecurityLevel = value.ndSecurityLevel;
      this._ndTimestampDelta = value.ndTimestampDelta;
      this._ndTimestampFuzz = value.ndTimestampFuzz;
      this._raSendMtu = value.raSendMtu;
      this._uniqueAutoconfAddr = value.uniqueAutoconfAddr;
      this._vrip6LinkLocal = value.vrip6LinkLocal;
      this._vrrpVirtualMac6 = value.vrrpVirtualMac6;
      this._ip6DelegatedPrefixList.internalValue = value.ip6DelegatedPrefixList;
      this._ip6ExtraAddr.internalValue = value.ip6ExtraAddr;
      this._ip6PrefixList.internalValue = value.ip6PrefixList;
      this._vrrp6.internalValue = value.vrrp6;
    }
  }

  // autoconf - computed: true, optional: true, required: false
  private _autoconf?: string; 
  public get autoconf() {
    return this.getStringAttribute('autoconf');
  }
  public set autoconf(value: string) {
    this._autoconf = value;
  }
  public resetAutoconf() {
    this._autoconf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoconfInput() {
    return this._autoconf;
  }

  // cli_conn6_status - computed: false, optional: true, required: false
  private _cliConn6Status?: number; 
  public get cliConn6Status() {
    return this.getNumberAttribute('cli_conn6_status');
  }
  public set cliConn6Status(value: number) {
    this._cliConn6Status = value;
  }
  public resetCliConn6Status() {
    this._cliConn6Status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliConn6StatusInput() {
    return this._cliConn6Status;
  }

  // dhcp6_client_options - computed: true, optional: true, required: false
  private _dhcp6ClientOptions?: string[]; 
  public get dhcp6ClientOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('dhcp6_client_options'));
  }
  public set dhcp6ClientOptions(value: string[]) {
    this._dhcp6ClientOptions = value;
  }
  public resetDhcp6ClientOptions() {
    this._dhcp6ClientOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6ClientOptionsInput() {
    return this._dhcp6ClientOptions;
  }

  // dhcp6_information_request - computed: true, optional: true, required: false
  private _dhcp6InformationRequest?: string; 
  public get dhcp6InformationRequest() {
    return this.getStringAttribute('dhcp6_information_request');
  }
  public set dhcp6InformationRequest(value: string) {
    this._dhcp6InformationRequest = value;
  }
  public resetDhcp6InformationRequest() {
    this._dhcp6InformationRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6InformationRequestInput() {
    return this._dhcp6InformationRequest;
  }

  // dhcp6_prefix_delegation - computed: true, optional: true, required: false
  private _dhcp6PrefixDelegation?: string; 
  public get dhcp6PrefixDelegation() {
    return this.getStringAttribute('dhcp6_prefix_delegation');
  }
  public set dhcp6PrefixDelegation(value: string) {
    this._dhcp6PrefixDelegation = value;
  }
  public resetDhcp6PrefixDelegation() {
    this._dhcp6PrefixDelegation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6PrefixDelegationInput() {
    return this._dhcp6PrefixDelegation;
  }

  // dhcp6_prefix_hint - computed: true, optional: true, required: false
  private _dhcp6PrefixHint?: string; 
  public get dhcp6PrefixHint() {
    return this.getStringAttribute('dhcp6_prefix_hint');
  }
  public set dhcp6PrefixHint(value: string) {
    this._dhcp6PrefixHint = value;
  }
  public resetDhcp6PrefixHint() {
    this._dhcp6PrefixHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6PrefixHintInput() {
    return this._dhcp6PrefixHint;
  }

  // dhcp6_prefix_hint_plt - computed: true, optional: true, required: false
  private _dhcp6PrefixHintPlt?: number; 
  public get dhcp6PrefixHintPlt() {
    return this.getNumberAttribute('dhcp6_prefix_hint_plt');
  }
  public set dhcp6PrefixHintPlt(value: number) {
    this._dhcp6PrefixHintPlt = value;
  }
  public resetDhcp6PrefixHintPlt() {
    this._dhcp6PrefixHintPlt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6PrefixHintPltInput() {
    return this._dhcp6PrefixHintPlt;
  }

  // dhcp6_prefix_hint_vlt - computed: true, optional: true, required: false
  private _dhcp6PrefixHintVlt?: number; 
  public get dhcp6PrefixHintVlt() {
    return this.getNumberAttribute('dhcp6_prefix_hint_vlt');
  }
  public set dhcp6PrefixHintVlt(value: number) {
    this._dhcp6PrefixHintVlt = value;
  }
  public resetDhcp6PrefixHintVlt() {
    this._dhcp6PrefixHintVlt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6PrefixHintVltInput() {
    return this._dhcp6PrefixHintVlt;
  }

  // dhcp6_relay_interface_id - computed: false, optional: true, required: false
  private _dhcp6RelayInterfaceId?: string; 
  public get dhcp6RelayInterfaceId() {
    return this.getStringAttribute('dhcp6_relay_interface_id');
  }
  public set dhcp6RelayInterfaceId(value: string) {
    this._dhcp6RelayInterfaceId = value;
  }
  public resetDhcp6RelayInterfaceId() {
    this._dhcp6RelayInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6RelayInterfaceIdInput() {
    return this._dhcp6RelayInterfaceId;
  }

  // dhcp6_relay_ip - computed: false, optional: true, required: false
  private _dhcp6RelayIp?: string; 
  public get dhcp6RelayIp() {
    return this.getStringAttribute('dhcp6_relay_ip');
  }
  public set dhcp6RelayIp(value: string) {
    this._dhcp6RelayIp = value;
  }
  public resetDhcp6RelayIp() {
    this._dhcp6RelayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6RelayIpInput() {
    return this._dhcp6RelayIp;
  }

  // dhcp6_relay_service - computed: true, optional: true, required: false
  private _dhcp6RelayService?: string; 
  public get dhcp6RelayService() {
    return this.getStringAttribute('dhcp6_relay_service');
  }
  public set dhcp6RelayService(value: string) {
    this._dhcp6RelayService = value;
  }
  public resetDhcp6RelayService() {
    this._dhcp6RelayService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6RelayServiceInput() {
    return this._dhcp6RelayService;
  }

  // dhcp6_relay_source_interface - computed: true, optional: true, required: false
  private _dhcp6RelaySourceInterface?: string; 
  public get dhcp6RelaySourceInterface() {
    return this.getStringAttribute('dhcp6_relay_source_interface');
  }
  public set dhcp6RelaySourceInterface(value: string) {
    this._dhcp6RelaySourceInterface = value;
  }
  public resetDhcp6RelaySourceInterface() {
    this._dhcp6RelaySourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6RelaySourceInterfaceInput() {
    return this._dhcp6RelaySourceInterface;
  }

  // dhcp6_relay_source_ip - computed: true, optional: true, required: false
  private _dhcp6RelaySourceIp?: string; 
  public get dhcp6RelaySourceIp() {
    return this.getStringAttribute('dhcp6_relay_source_ip');
  }
  public set dhcp6RelaySourceIp(value: string) {
    this._dhcp6RelaySourceIp = value;
  }
  public resetDhcp6RelaySourceIp() {
    this._dhcp6RelaySourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6RelaySourceIpInput() {
    return this._dhcp6RelaySourceIp;
  }

  // dhcp6_relay_type - computed: true, optional: true, required: false
  private _dhcp6RelayType?: string; 
  public get dhcp6RelayType() {
    return this.getStringAttribute('dhcp6_relay_type');
  }
  public set dhcp6RelayType(value: string) {
    this._dhcp6RelayType = value;
  }
  public resetDhcp6RelayType() {
    this._dhcp6RelayType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6RelayTypeInput() {
    return this._dhcp6RelayType;
  }

  // icmp6_send_redirect - computed: true, optional: true, required: false
  private _icmp6SendRedirect?: string; 
  public get icmp6SendRedirect() {
    return this.getStringAttribute('icmp6_send_redirect');
  }
  public set icmp6SendRedirect(value: string) {
    this._icmp6SendRedirect = value;
  }
  public resetIcmp6SendRedirect() {
    this._icmp6SendRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmp6SendRedirectInput() {
    return this._icmp6SendRedirect;
  }

  // interface_identifier - computed: true, optional: true, required: false
  private _interfaceIdentifier?: string; 
  public get interfaceIdentifier() {
    return this.getStringAttribute('interface_identifier');
  }
  public set interfaceIdentifier(value: string) {
    this._interfaceIdentifier = value;
  }
  public resetInterfaceIdentifier() {
    this._interfaceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIdentifierInput() {
    return this._interfaceIdentifier;
  }

  // ip6_address - computed: true, optional: true, required: false
  private _ip6Address?: string; 
  public get ip6Address() {
    return this.getStringAttribute('ip6_address');
  }
  public set ip6Address(value: string) {
    this._ip6Address = value;
  }
  public resetIp6Address() {
    this._ip6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6AddressInput() {
    return this._ip6Address;
  }

  // ip6_allowaccess - computed: true, optional: true, required: false
  private _ip6Allowaccess?: string[]; 
  public get ip6Allowaccess() {
    return cdktf.Fn.tolist(this.getListAttribute('ip6_allowaccess'));
  }
  public set ip6Allowaccess(value: string[]) {
    this._ip6Allowaccess = value;
  }
  public resetIp6Allowaccess() {
    this._ip6Allowaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6AllowaccessInput() {
    return this._ip6Allowaccess;
  }

  // ip6_default_life - computed: true, optional: true, required: false
  private _ip6DefaultLife?: number; 
  public get ip6DefaultLife() {
    return this.getNumberAttribute('ip6_default_life');
  }
  public set ip6DefaultLife(value: number) {
    this._ip6DefaultLife = value;
  }
  public resetIp6DefaultLife() {
    this._ip6DefaultLife = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6DefaultLifeInput() {
    return this._ip6DefaultLife;
  }

  // ip6_delegated_prefix_iaid - computed: false, optional: true, required: false
  private _ip6DelegatedPrefixIaid?: number; 
  public get ip6DelegatedPrefixIaid() {
    return this.getNumberAttribute('ip6_delegated_prefix_iaid');
  }
  public set ip6DelegatedPrefixIaid(value: number) {
    this._ip6DelegatedPrefixIaid = value;
  }
  public resetIp6DelegatedPrefixIaid() {
    this._ip6DelegatedPrefixIaid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6DelegatedPrefixIaidInput() {
    return this._ip6DelegatedPrefixIaid;
  }

  // ip6_dns_server_override - computed: true, optional: true, required: false
  private _ip6DnsServerOverride?: string; 
  public get ip6DnsServerOverride() {
    return this.getStringAttribute('ip6_dns_server_override');
  }
  public set ip6DnsServerOverride(value: string) {
    this._ip6DnsServerOverride = value;
  }
  public resetIp6DnsServerOverride() {
    this._ip6DnsServerOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6DnsServerOverrideInput() {
    return this._ip6DnsServerOverride;
  }

  // ip6_hop_limit - computed: false, optional: true, required: false
  private _ip6HopLimit?: number; 
  public get ip6HopLimit() {
    return this.getNumberAttribute('ip6_hop_limit');
  }
  public set ip6HopLimit(value: number) {
    this._ip6HopLimit = value;
  }
  public resetIp6HopLimit() {
    this._ip6HopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6HopLimitInput() {
    return this._ip6HopLimit;
  }

  // ip6_link_mtu - computed: false, optional: true, required: false
  private _ip6LinkMtu?: number; 
  public get ip6LinkMtu() {
    return this.getNumberAttribute('ip6_link_mtu');
  }
  public set ip6LinkMtu(value: number) {
    this._ip6LinkMtu = value;
  }
  public resetIp6LinkMtu() {
    this._ip6LinkMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6LinkMtuInput() {
    return this._ip6LinkMtu;
  }

  // ip6_manage_flag - computed: true, optional: true, required: false
  private _ip6ManageFlag?: string; 
  public get ip6ManageFlag() {
    return this.getStringAttribute('ip6_manage_flag');
  }
  public set ip6ManageFlag(value: string) {
    this._ip6ManageFlag = value;
  }
  public resetIp6ManageFlag() {
    this._ip6ManageFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6ManageFlagInput() {
    return this._ip6ManageFlag;
  }

  // ip6_max_interval - computed: true, optional: true, required: false
  private _ip6MaxInterval?: number; 
  public get ip6MaxInterval() {
    return this.getNumberAttribute('ip6_max_interval');
  }
  public set ip6MaxInterval(value: number) {
    this._ip6MaxInterval = value;
  }
  public resetIp6MaxInterval() {
    this._ip6MaxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6MaxIntervalInput() {
    return this._ip6MaxInterval;
  }

  // ip6_min_interval - computed: true, optional: true, required: false
  private _ip6MinInterval?: number; 
  public get ip6MinInterval() {
    return this.getNumberAttribute('ip6_min_interval');
  }
  public set ip6MinInterval(value: number) {
    this._ip6MinInterval = value;
  }
  public resetIp6MinInterval() {
    this._ip6MinInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6MinIntervalInput() {
    return this._ip6MinInterval;
  }

  // ip6_mode - computed: true, optional: true, required: false
  private _ip6Mode?: string; 
  public get ip6Mode() {
    return this.getStringAttribute('ip6_mode');
  }
  public set ip6Mode(value: string) {
    this._ip6Mode = value;
  }
  public resetIp6Mode() {
    this._ip6Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6ModeInput() {
    return this._ip6Mode;
  }

  // ip6_other_flag - computed: true, optional: true, required: false
  private _ip6OtherFlag?: string; 
  public get ip6OtherFlag() {
    return this.getStringAttribute('ip6_other_flag');
  }
  public set ip6OtherFlag(value: string) {
    this._ip6OtherFlag = value;
  }
  public resetIp6OtherFlag() {
    this._ip6OtherFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6OtherFlagInput() {
    return this._ip6OtherFlag;
  }

  // ip6_prefix_mode - computed: true, optional: true, required: false
  private _ip6PrefixMode?: string; 
  public get ip6PrefixMode() {
    return this.getStringAttribute('ip6_prefix_mode');
  }
  public set ip6PrefixMode(value: string) {
    this._ip6PrefixMode = value;
  }
  public resetIp6PrefixMode() {
    this._ip6PrefixMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6PrefixModeInput() {
    return this._ip6PrefixMode;
  }

  // ip6_reachable_time - computed: false, optional: true, required: false
  private _ip6ReachableTime?: number; 
  public get ip6ReachableTime() {
    return this.getNumberAttribute('ip6_reachable_time');
  }
  public set ip6ReachableTime(value: number) {
    this._ip6ReachableTime = value;
  }
  public resetIp6ReachableTime() {
    this._ip6ReachableTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6ReachableTimeInput() {
    return this._ip6ReachableTime;
  }

  // ip6_retrans_time - computed: false, optional: true, required: false
  private _ip6RetransTime?: number; 
  public get ip6RetransTime() {
    return this.getNumberAttribute('ip6_retrans_time');
  }
  public set ip6RetransTime(value: number) {
    this._ip6RetransTime = value;
  }
  public resetIp6RetransTime() {
    this._ip6RetransTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6RetransTimeInput() {
    return this._ip6RetransTime;
  }

  // ip6_send_adv - computed: true, optional: true, required: false
  private _ip6SendAdv?: string; 
  public get ip6SendAdv() {
    return this.getStringAttribute('ip6_send_adv');
  }
  public set ip6SendAdv(value: string) {
    this._ip6SendAdv = value;
  }
  public resetIp6SendAdv() {
    this._ip6SendAdv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6SendAdvInput() {
    return this._ip6SendAdv;
  }

  // ip6_subnet - computed: true, optional: true, required: false
  private _ip6Subnet?: string; 
  public get ip6Subnet() {
    return this.getStringAttribute('ip6_subnet');
  }
  public set ip6Subnet(value: string) {
    this._ip6Subnet = value;
  }
  public resetIp6Subnet() {
    this._ip6Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6SubnetInput() {
    return this._ip6Subnet;
  }

  // ip6_upstream_interface - computed: false, optional: true, required: false
  private _ip6UpstreamInterface?: string; 
  public get ip6UpstreamInterface() {
    return this.getStringAttribute('ip6_upstream_interface');
  }
  public set ip6UpstreamInterface(value: string) {
    this._ip6UpstreamInterface = value;
  }
  public resetIp6UpstreamInterface() {
    this._ip6UpstreamInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6UpstreamInterfaceInput() {
    return this._ip6UpstreamInterface;
  }

  // nd_cert - computed: false, optional: true, required: false
  private _ndCert?: string; 
  public get ndCert() {
    return this.getStringAttribute('nd_cert');
  }
  public set ndCert(value: string) {
    this._ndCert = value;
  }
  public resetNdCert() {
    this._ndCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndCertInput() {
    return this._ndCert;
  }

  // nd_cga_modifier - computed: false, optional: true, required: false
  private _ndCgaModifier?: string; 
  public get ndCgaModifier() {
    return this.getStringAttribute('nd_cga_modifier');
  }
  public set ndCgaModifier(value: string) {
    this._ndCgaModifier = value;
  }
  public resetNdCgaModifier() {
    this._ndCgaModifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndCgaModifierInput() {
    return this._ndCgaModifier;
  }

  // nd_mode - computed: true, optional: true, required: false
  private _ndMode?: string; 
  public get ndMode() {
    return this.getStringAttribute('nd_mode');
  }
  public set ndMode(value: string) {
    this._ndMode = value;
  }
  public resetNdMode() {
    this._ndMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndModeInput() {
    return this._ndMode;
  }

  // nd_security_level - computed: false, optional: true, required: false
  private _ndSecurityLevel?: number; 
  public get ndSecurityLevel() {
    return this.getNumberAttribute('nd_security_level');
  }
  public set ndSecurityLevel(value: number) {
    this._ndSecurityLevel = value;
  }
  public resetNdSecurityLevel() {
    this._ndSecurityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndSecurityLevelInput() {
    return this._ndSecurityLevel;
  }

  // nd_timestamp_delta - computed: false, optional: true, required: false
  private _ndTimestampDelta?: number; 
  public get ndTimestampDelta() {
    return this.getNumberAttribute('nd_timestamp_delta');
  }
  public set ndTimestampDelta(value: number) {
    this._ndTimestampDelta = value;
  }
  public resetNdTimestampDelta() {
    this._ndTimestampDelta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndTimestampDeltaInput() {
    return this._ndTimestampDelta;
  }

  // nd_timestamp_fuzz - computed: false, optional: true, required: false
  private _ndTimestampFuzz?: number; 
  public get ndTimestampFuzz() {
    return this.getNumberAttribute('nd_timestamp_fuzz');
  }
  public set ndTimestampFuzz(value: number) {
    this._ndTimestampFuzz = value;
  }
  public resetNdTimestampFuzz() {
    this._ndTimestampFuzz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndTimestampFuzzInput() {
    return this._ndTimestampFuzz;
  }

  // ra_send_mtu - computed: true, optional: true, required: false
  private _raSendMtu?: string; 
  public get raSendMtu() {
    return this.getStringAttribute('ra_send_mtu');
  }
  public set raSendMtu(value: string) {
    this._raSendMtu = value;
  }
  public resetRaSendMtu() {
    this._raSendMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raSendMtuInput() {
    return this._raSendMtu;
  }

  // unique_autoconf_addr - computed: true, optional: true, required: false
  private _uniqueAutoconfAddr?: string; 
  public get uniqueAutoconfAddr() {
    return this.getStringAttribute('unique_autoconf_addr');
  }
  public set uniqueAutoconfAddr(value: string) {
    this._uniqueAutoconfAddr = value;
  }
  public resetUniqueAutoconfAddr() {
    this._uniqueAutoconfAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueAutoconfAddrInput() {
    return this._uniqueAutoconfAddr;
  }

  // vrip6_link_local - computed: true, optional: true, required: false
  private _vrip6LinkLocal?: string; 
  public get vrip6LinkLocal() {
    return this.getStringAttribute('vrip6_link_local');
  }
  public set vrip6LinkLocal(value: string) {
    this._vrip6LinkLocal = value;
  }
  public resetVrip6LinkLocal() {
    this._vrip6LinkLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrip6LinkLocalInput() {
    return this._vrip6LinkLocal;
  }

  // vrrp_virtual_mac6 - computed: true, optional: true, required: false
  private _vrrpVirtualMac6?: string; 
  public get vrrpVirtualMac6() {
    return this.getStringAttribute('vrrp_virtual_mac6');
  }
  public set vrrpVirtualMac6(value: string) {
    this._vrrpVirtualMac6 = value;
  }
  public resetVrrpVirtualMac6() {
    this._vrrpVirtualMac6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpVirtualMac6Input() {
    return this._vrrpVirtualMac6;
  }

  // ip6_delegated_prefix_list - computed: false, optional: true, required: false
  private _ip6DelegatedPrefixList = new ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStructList(this, "ip6_delegated_prefix_list", false);
  public get ip6DelegatedPrefixList() {
    return this._ip6DelegatedPrefixList;
  }
  public putIp6DelegatedPrefixList(value: ObjectFspVlanInterfaceIpv6Ip6DelegatedPrefixListStruct[] | cdktf.IResolvable) {
    this._ip6DelegatedPrefixList.internalValue = value;
  }
  public resetIp6DelegatedPrefixList() {
    this._ip6DelegatedPrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6DelegatedPrefixListInput() {
    return this._ip6DelegatedPrefixList.internalValue;
  }

  // ip6_extra_addr - computed: false, optional: true, required: false
  private _ip6ExtraAddr = new ObjectFspVlanInterfaceIpv6Ip6ExtraAddrList(this, "ip6_extra_addr", false);
  public get ip6ExtraAddr() {
    return this._ip6ExtraAddr;
  }
  public putIp6ExtraAddr(value: ObjectFspVlanInterfaceIpv6Ip6ExtraAddr[] | cdktf.IResolvable) {
    this._ip6ExtraAddr.internalValue = value;
  }
  public resetIp6ExtraAddr() {
    this._ip6ExtraAddr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6ExtraAddrInput() {
    return this._ip6ExtraAddr.internalValue;
  }

  // ip6_prefix_list - computed: false, optional: true, required: false
  private _ip6PrefixList = new ObjectFspVlanInterfaceIpv6Ip6PrefixListStructList(this, "ip6_prefix_list", false);
  public get ip6PrefixList() {
    return this._ip6PrefixList;
  }
  public putIp6PrefixList(value: ObjectFspVlanInterfaceIpv6Ip6PrefixListStruct[] | cdktf.IResolvable) {
    this._ip6PrefixList.internalValue = value;
  }
  public resetIp6PrefixList() {
    this._ip6PrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6PrefixListInput() {
    return this._ip6PrefixList.internalValue;
  }

  // vrrp6 - computed: false, optional: true, required: false
  private _vrrp6 = new ObjectFspVlanInterfaceIpv6Vrrp6List(this, "vrrp6", false);
  public get vrrp6() {
    return this._vrrp6;
  }
  public putVrrp6(value: ObjectFspVlanInterfaceIpv6Vrrp6[] | cdktf.IResolvable) {
    this._vrrp6.internalValue = value;
  }
  public resetVrrp6() {
    this._vrrp6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrp6Input() {
    return this._vrrp6.internalValue;
  }
}
export interface ObjectFspVlanInterfaceSecondaryip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#allowaccess ObjectFspVlan#allowaccess}
  */
  readonly allowaccess?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#detectprotocol ObjectFspVlan#detectprotocol}
  */
  readonly detectprotocol?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#detectserver ObjectFspVlan#detectserver}
  */
  readonly detectserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#gwdetect ObjectFspVlan#gwdetect}
  */
  readonly gwdetect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ha_priority ObjectFspVlan#ha_priority}
  */
  readonly haPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#id ObjectFspVlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip ObjectFspVlan#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ping_serv_status ObjectFspVlan#ping_serv_status}
  */
  readonly pingServStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#secip_relay_ip ObjectFspVlan#secip_relay_ip}
  */
  readonly secipRelayIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#seq ObjectFspVlan#seq}
  */
  readonly seq?: number;
}

export function objectFspVlanInterfaceSecondaryipToTerraform(struct?: ObjectFspVlanInterfaceSecondaryip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowaccess: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowaccess),
    detectprotocol: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.detectprotocol),
    detectserver: cdktf.stringToTerraform(struct!.detectserver),
    gwdetect: cdktf.stringToTerraform(struct!.gwdetect),
    ha_priority: cdktf.numberToTerraform(struct!.haPriority),
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
    ping_serv_status: cdktf.numberToTerraform(struct!.pingServStatus),
    secip_relay_ip: cdktf.stringToTerraform(struct!.secipRelayIp),
    seq: cdktf.numberToTerraform(struct!.seq),
  }
}


export function objectFspVlanInterfaceSecondaryipToHclTerraform(struct?: ObjectFspVlanInterfaceSecondaryip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowaccess: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowaccess),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    detectprotocol: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.detectprotocol),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    detectserver: {
      value: cdktf.stringToHclTerraform(struct!.detectserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gwdetect: {
      value: cdktf.stringToHclTerraform(struct!.gwdetect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ha_priority: {
      value: cdktf.numberToHclTerraform(struct!.haPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
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
    ping_serv_status: {
      value: cdktf.numberToHclTerraform(struct!.pingServStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secip_relay_ip: {
      value: cdktf.stringToHclTerraform(struct!.secipRelayIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seq: {
      value: cdktf.numberToHclTerraform(struct!.seq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanInterfaceSecondaryipOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanInterfaceSecondaryip | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowaccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowaccess = this._allowaccess;
    }
    if (this._detectprotocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectprotocol = this._detectprotocol;
    }
    if (this._detectserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectserver = this._detectserver;
    }
    if (this._gwdetect !== undefined) {
      hasAnyValues = true;
      internalValueResult.gwdetect = this._gwdetect;
    }
    if (this._haPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.haPriority = this._haPriority;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._pingServStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingServStatus = this._pingServStatus;
    }
    if (this._secipRelayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.secipRelayIp = this._secipRelayIp;
    }
    if (this._seq !== undefined) {
      hasAnyValues = true;
      internalValueResult.seq = this._seq;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanInterfaceSecondaryip | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowaccess = undefined;
      this._detectprotocol = undefined;
      this._detectserver = undefined;
      this._gwdetect = undefined;
      this._haPriority = undefined;
      this._id = undefined;
      this._ip = undefined;
      this._pingServStatus = undefined;
      this._secipRelayIp = undefined;
      this._seq = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowaccess = value.allowaccess;
      this._detectprotocol = value.detectprotocol;
      this._detectserver = value.detectserver;
      this._gwdetect = value.gwdetect;
      this._haPriority = value.haPriority;
      this._id = value.id;
      this._ip = value.ip;
      this._pingServStatus = value.pingServStatus;
      this._secipRelayIp = value.secipRelayIp;
      this._seq = value.seq;
    }
  }

  // allowaccess - computed: true, optional: true, required: false
  private _allowaccess?: string[]; 
  public get allowaccess() {
    return cdktf.Fn.tolist(this.getListAttribute('allowaccess'));
  }
  public set allowaccess(value: string[]) {
    this._allowaccess = value;
  }
  public resetAllowaccess() {
    this._allowaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowaccessInput() {
    return this._allowaccess;
  }

  // detectprotocol - computed: true, optional: true, required: false
  private _detectprotocol?: string[]; 
  public get detectprotocol() {
    return cdktf.Fn.tolist(this.getListAttribute('detectprotocol'));
  }
  public set detectprotocol(value: string[]) {
    this._detectprotocol = value;
  }
  public resetDetectprotocol() {
    this._detectprotocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectprotocolInput() {
    return this._detectprotocol;
  }

  // detectserver - computed: false, optional: true, required: false
  private _detectserver?: string; 
  public get detectserver() {
    return this.getStringAttribute('detectserver');
  }
  public set detectserver(value: string) {
    this._detectserver = value;
  }
  public resetDetectserver() {
    this._detectserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectserverInput() {
    return this._detectserver;
  }

  // gwdetect - computed: false, optional: true, required: false
  private _gwdetect?: string; 
  public get gwdetect() {
    return this.getStringAttribute('gwdetect');
  }
  public set gwdetect(value: string) {
    this._gwdetect = value;
  }
  public resetGwdetect() {
    this._gwdetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwdetectInput() {
    return this._gwdetect;
  }

  // ha_priority - computed: false, optional: true, required: false
  private _haPriority?: number; 
  public get haPriority() {
    return this.getNumberAttribute('ha_priority');
  }
  public set haPriority(value: number) {
    this._haPriority = value;
  }
  public resetHaPriority() {
    this._haPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haPriorityInput() {
    return this._haPriority;
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

  // ping_serv_status - computed: false, optional: true, required: false
  private _pingServStatus?: number; 
  public get pingServStatus() {
    return this.getNumberAttribute('ping_serv_status');
  }
  public set pingServStatus(value: number) {
    this._pingServStatus = value;
  }
  public resetPingServStatus() {
    this._pingServStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingServStatusInput() {
    return this._pingServStatus;
  }

  // secip_relay_ip - computed: false, optional: true, required: false
  private _secipRelayIp?: string; 
  public get secipRelayIp() {
    return this.getStringAttribute('secip_relay_ip');
  }
  public set secipRelayIp(value: string) {
    this._secipRelayIp = value;
  }
  public resetSecipRelayIp() {
    this._secipRelayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secipRelayIpInput() {
    return this._secipRelayIp;
  }

  // seq - computed: false, optional: true, required: false
  private _seq?: number; 
  public get seq() {
    return this.getNumberAttribute('seq');
  }
  public set seq(value: number) {
    this._seq = value;
  }
  public resetSeq() {
    this._seq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqInput() {
    return this._seq;
  }
}

export class ObjectFspVlanInterfaceSecondaryipList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanInterfaceSecondaryip[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanInterfaceSecondaryipOutputReference {
    return new ObjectFspVlanInterfaceSecondaryipOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanInterfaceVrrpProxyArp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#id ObjectFspVlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip ObjectFspVlan#ip}
  */
  readonly ip?: string;
}

export function objectFspVlanInterfaceVrrpProxyArpToTerraform(struct?: ObjectFspVlanInterfaceVrrpProxyArp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function objectFspVlanInterfaceVrrpProxyArpToHclTerraform(struct?: ObjectFspVlanInterfaceVrrpProxyArp | cdktf.IResolvable): any {
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

export class ObjectFspVlanInterfaceVrrpProxyArpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanInterfaceVrrpProxyArp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanInterfaceVrrpProxyArp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._ip = value.ip;
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

  // ip - computed: true, optional: true, required: false
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
}

export class ObjectFspVlanInterfaceVrrpProxyArpList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanInterfaceVrrpProxyArp[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanInterfaceVrrpProxyArpOutputReference {
    return new ObjectFspVlanInterfaceVrrpProxyArpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanInterfaceVrrp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#accept_mode ObjectFspVlan#accept_mode}
  */
  readonly acceptMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#adv_interval ObjectFspVlan#adv_interval}
  */
  readonly advInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ignore_default_route ObjectFspVlan#ignore_default_route}
  */
  readonly ignoreDefaultRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#preempt ObjectFspVlan#preempt}
  */
  readonly preempt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#priority ObjectFspVlan#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#start_time ObjectFspVlan#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#status ObjectFspVlan#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#version ObjectFspVlan#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vrdst ObjectFspVlan#vrdst}
  */
  readonly vrdst?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vrdst_priority ObjectFspVlan#vrdst_priority}
  */
  readonly vrdstPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vrgrp ObjectFspVlan#vrgrp}
  */
  readonly vrgrp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vrid ObjectFspVlan#vrid}
  */
  readonly vrid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vrip ObjectFspVlan#vrip}
  */
  readonly vrip?: string;
  /**
  * proxy_arp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#proxy_arp ObjectFspVlan#proxy_arp}
  */
  readonly proxyArp?: ObjectFspVlanInterfaceVrrpProxyArp[] | cdktf.IResolvable;
}

export function objectFspVlanInterfaceVrrpToTerraform(struct?: ObjectFspVlanInterfaceVrrp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_mode: cdktf.stringToTerraform(struct!.acceptMode),
    adv_interval: cdktf.numberToTerraform(struct!.advInterval),
    ignore_default_route: cdktf.stringToTerraform(struct!.ignoreDefaultRoute),
    preempt: cdktf.stringToTerraform(struct!.preempt),
    priority: cdktf.numberToTerraform(struct!.priority),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    status: cdktf.stringToTerraform(struct!.status),
    version: cdktf.stringToTerraform(struct!.version),
    vrdst: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vrdst),
    vrdst_priority: cdktf.numberToTerraform(struct!.vrdstPriority),
    vrgrp: cdktf.numberToTerraform(struct!.vrgrp),
    vrid: cdktf.numberToTerraform(struct!.vrid),
    vrip: cdktf.stringToTerraform(struct!.vrip),
    proxy_arp: cdktf.listMapper(objectFspVlanInterfaceVrrpProxyArpToTerraform, true)(struct!.proxyArp),
  }
}


export function objectFspVlanInterfaceVrrpToHclTerraform(struct?: ObjectFspVlanInterfaceVrrp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_mode: {
      value: cdktf.stringToHclTerraform(struct!.acceptMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    adv_interval: {
      value: cdktf.numberToHclTerraform(struct!.advInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_default_route: {
      value: cdktf.stringToHclTerraform(struct!.ignoreDefaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preempt: {
      value: cdktf.stringToHclTerraform(struct!.preempt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrdst: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vrdst),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vrdst_priority: {
      value: cdktf.numberToHclTerraform(struct!.vrdstPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrgrp: {
      value: cdktf.numberToHclTerraform(struct!.vrgrp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrid: {
      value: cdktf.numberToHclTerraform(struct!.vrid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrip: {
      value: cdktf.stringToHclTerraform(struct!.vrip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_arp: {
      value: cdktf.listMapperHcl(objectFspVlanInterfaceVrrpProxyArpToHclTerraform, true)(struct!.proxyArp),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanInterfaceVrrpProxyArpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanInterfaceVrrpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanInterfaceVrrp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptMode = this._acceptMode;
    }
    if (this._advInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.advInterval = this._advInterval;
    }
    if (this._ignoreDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDefaultRoute = this._ignoreDefaultRoute;
    }
    if (this._preempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.preempt = this._preempt;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._vrdst !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrdst = this._vrdst;
    }
    if (this._vrdstPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrdstPriority = this._vrdstPriority;
    }
    if (this._vrgrp !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrgrp = this._vrgrp;
    }
    if (this._vrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrid = this._vrid;
    }
    if (this._vrip !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrip = this._vrip;
    }
    if (this._proxyArp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyArp = this._proxyArp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanInterfaceVrrp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptMode = undefined;
      this._advInterval = undefined;
      this._ignoreDefaultRoute = undefined;
      this._preempt = undefined;
      this._priority = undefined;
      this._startTime = undefined;
      this._status = undefined;
      this._version = undefined;
      this._vrdst = undefined;
      this._vrdstPriority = undefined;
      this._vrgrp = undefined;
      this._vrid = undefined;
      this._vrip = undefined;
      this._proxyArp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptMode = value.acceptMode;
      this._advInterval = value.advInterval;
      this._ignoreDefaultRoute = value.ignoreDefaultRoute;
      this._preempt = value.preempt;
      this._priority = value.priority;
      this._startTime = value.startTime;
      this._status = value.status;
      this._version = value.version;
      this._vrdst = value.vrdst;
      this._vrdstPriority = value.vrdstPriority;
      this._vrgrp = value.vrgrp;
      this._vrid = value.vrid;
      this._vrip = value.vrip;
      this._proxyArp.internalValue = value.proxyArp;
    }
  }

  // accept_mode - computed: true, optional: true, required: false
  private _acceptMode?: string; 
  public get acceptMode() {
    return this.getStringAttribute('accept_mode');
  }
  public set acceptMode(value: string) {
    this._acceptMode = value;
  }
  public resetAcceptMode() {
    this._acceptMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptModeInput() {
    return this._acceptMode;
  }

  // adv_interval - computed: true, optional: true, required: false
  private _advInterval?: number; 
  public get advInterval() {
    return this.getNumberAttribute('adv_interval');
  }
  public set advInterval(value: number) {
    this._advInterval = value;
  }
  public resetAdvInterval() {
    this._advInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advIntervalInput() {
    return this._advInterval;
  }

  // ignore_default_route - computed: true, optional: true, required: false
  private _ignoreDefaultRoute?: string; 
  public get ignoreDefaultRoute() {
    return this.getStringAttribute('ignore_default_route');
  }
  public set ignoreDefaultRoute(value: string) {
    this._ignoreDefaultRoute = value;
  }
  public resetIgnoreDefaultRoute() {
    this._ignoreDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDefaultRouteInput() {
    return this._ignoreDefaultRoute;
  }

  // preempt - computed: true, optional: true, required: false
  private _preempt?: string; 
  public get preempt() {
    return this.getStringAttribute('preempt');
  }
  public set preempt(value: string) {
    this._preempt = value;
  }
  public resetPreempt() {
    this._preempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptInput() {
    return this._preempt;
  }

  // priority - computed: true, optional: true, required: false
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

  // start_time - computed: true, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // vrdst - computed: true, optional: true, required: false
  private _vrdst?: string[]; 
  public get vrdst() {
    return cdktf.Fn.tolist(this.getListAttribute('vrdst'));
  }
  public set vrdst(value: string[]) {
    this._vrdst = value;
  }
  public resetVrdst() {
    this._vrdst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrdstInput() {
    return this._vrdst;
  }

  // vrdst_priority - computed: false, optional: true, required: false
  private _vrdstPriority?: number; 
  public get vrdstPriority() {
    return this.getNumberAttribute('vrdst_priority');
  }
  public set vrdstPriority(value: number) {
    this._vrdstPriority = value;
  }
  public resetVrdstPriority() {
    this._vrdstPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrdstPriorityInput() {
    return this._vrdstPriority;
  }

  // vrgrp - computed: false, optional: true, required: false
  private _vrgrp?: number; 
  public get vrgrp() {
    return this.getNumberAttribute('vrgrp');
  }
  public set vrgrp(value: number) {
    this._vrgrp = value;
  }
  public resetVrgrp() {
    this._vrgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrgrpInput() {
    return this._vrgrp;
  }

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }

  // vrip - computed: true, optional: true, required: false
  private _vrip?: string; 
  public get vrip() {
    return this.getStringAttribute('vrip');
  }
  public set vrip(value: string) {
    this._vrip = value;
  }
  public resetVrip() {
    this._vrip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vripInput() {
    return this._vrip;
  }

  // proxy_arp - computed: false, optional: true, required: false
  private _proxyArp = new ObjectFspVlanInterfaceVrrpProxyArpList(this, "proxy_arp", false);
  public get proxyArp() {
    return this._proxyArp;
  }
  public putProxyArp(value: ObjectFspVlanInterfaceVrrpProxyArp[] | cdktf.IResolvable) {
    this._proxyArp.internalValue = value;
  }
  public resetProxyArp() {
    this._proxyArp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyArpInput() {
    return this._proxyArp.internalValue;
  }
}

export class ObjectFspVlanInterfaceVrrpList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanInterfaceVrrp[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanInterfaceVrrpOutputReference {
    return new ObjectFspVlanInterfaceVrrpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ac_name ObjectFspVlan#ac_name}
  */
  readonly acName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#aggregate ObjectFspVlan#aggregate}
  */
  readonly aggregate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#aggregate_type ObjectFspVlan#aggregate_type}
  */
  readonly aggregateType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#algorithm ObjectFspVlan#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#alias ObjectFspVlan#alias}
  */
  readonly alias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#allowaccess ObjectFspVlan#allowaccess}
  */
  readonly allowaccess?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#annex ObjectFspVlan#annex}
  */
  readonly annex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ap_discover ObjectFspVlan#ap_discover}
  */
  readonly apDiscover?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#arpforward ObjectFspVlan#arpforward}
  */
  readonly arpforward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#atm_protocol ObjectFspVlan#atm_protocol}
  */
  readonly atmProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#auth_cert ObjectFspVlan#auth_cert}
  */
  readonly authCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#auth_portal_addr ObjectFspVlan#auth_portal_addr}
  */
  readonly authPortalAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#auth_type ObjectFspVlan#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#auto_auth_extension_device ObjectFspVlan#auto_auth_extension_device}
  */
  readonly autoAuthExtensionDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#bandwidth_measure_time ObjectFspVlan#bandwidth_measure_time}
  */
  readonly bandwidthMeasureTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#bfd ObjectFspVlan#bfd}
  */
  readonly bfd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#bfd_desired_min_tx ObjectFspVlan#bfd_desired_min_tx}
  */
  readonly bfdDesiredMinTx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#bfd_detect_mult ObjectFspVlan#bfd_detect_mult}
  */
  readonly bfdDetectMult?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#bfd_required_min_rx ObjectFspVlan#bfd_required_min_rx}
  */
  readonly bfdRequiredMinRx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#broadcast_forticlient_discovery ObjectFspVlan#broadcast_forticlient_discovery}
  */
  readonly broadcastForticlientDiscovery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#broadcast_forward ObjectFspVlan#broadcast_forward}
  */
  readonly broadcastForward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#captive_portal ObjectFspVlan#captive_portal}
  */
  readonly captivePortal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#cli_conn_status ObjectFspVlan#cli_conn_status}
  */
  readonly cliConnStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#color ObjectFspVlan#color}
  */
  readonly color?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ddns ObjectFspVlan#ddns}
  */
  readonly ddns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ddns_auth ObjectFspVlan#ddns_auth}
  */
  readonly ddnsAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ddns_domain ObjectFspVlan#ddns_domain}
  */
  readonly ddnsDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ddns_key ObjectFspVlan#ddns_key}
  */
  readonly ddnsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ddns_keyname ObjectFspVlan#ddns_keyname}
  */
  readonly ddnsKeyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ddns_password ObjectFspVlan#ddns_password}
  */
  readonly ddnsPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ddns_server ObjectFspVlan#ddns_server}
  */
  readonly ddnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ddns_server_ip ObjectFspVlan#ddns_server_ip}
  */
  readonly ddnsServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ddns_sn ObjectFspVlan#ddns_sn}
  */
  readonly ddnsSn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ddns_ttl ObjectFspVlan#ddns_ttl}
  */
  readonly ddnsTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ddns_username ObjectFspVlan#ddns_username}
  */
  readonly ddnsUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ddns_zone ObjectFspVlan#ddns_zone}
  */
  readonly ddnsZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dedicated_to ObjectFspVlan#dedicated_to}
  */
  readonly dedicatedTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#default_purdue_level ObjectFspVlan#default_purdue_level}
  */
  readonly defaultPurdueLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#defaultgw ObjectFspVlan#defaultgw}
  */
  readonly defaultgw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#description ObjectFspVlan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#detected_peer_mtu ObjectFspVlan#detected_peer_mtu}
  */
  readonly detectedPeerMtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#detectprotocol ObjectFspVlan#detectprotocol}
  */
  readonly detectprotocol?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#detectserver ObjectFspVlan#detectserver}
  */
  readonly detectserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#device_access_list ObjectFspVlan#device_access_list}
  */
  readonly deviceAccessList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#device_identification ObjectFspVlan#device_identification}
  */
  readonly deviceIdentification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#device_identification_active_scan ObjectFspVlan#device_identification_active_scan}
  */
  readonly deviceIdentificationActiveScan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#device_netscan ObjectFspVlan#device_netscan}
  */
  readonly deviceNetscan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#device_user_identification ObjectFspVlan#device_user_identification}
  */
  readonly deviceUserIdentification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#devindex ObjectFspVlan#devindex}
  */
  readonly devindex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp_broadcast_flag ObjectFspVlan#dhcp_broadcast_flag}
  */
  readonly dhcpBroadcastFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp_classless_route_addition ObjectFspVlan#dhcp_classless_route_addition}
  */
  readonly dhcpClasslessRouteAddition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp_client_identifier ObjectFspVlan#dhcp_client_identifier}
  */
  readonly dhcpClientIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp_relay_agent_option ObjectFspVlan#dhcp_relay_agent_option}
  */
  readonly dhcpRelayAgentOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp_relay_circuit_id ObjectFspVlan#dhcp_relay_circuit_id}
  */
  readonly dhcpRelayCircuitId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp_relay_interface ObjectFspVlan#dhcp_relay_interface}
  */
  readonly dhcpRelayInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp_relay_interface_select_method ObjectFspVlan#dhcp_relay_interface_select_method}
  */
  readonly dhcpRelayInterfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp_relay_ip ObjectFspVlan#dhcp_relay_ip}
  */
  readonly dhcpRelayIp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp_relay_link_selection ObjectFspVlan#dhcp_relay_link_selection}
  */
  readonly dhcpRelayLinkSelection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp_relay_request_all_server ObjectFspVlan#dhcp_relay_request_all_server}
  */
  readonly dhcpRelayRequestAllServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp_relay_service ObjectFspVlan#dhcp_relay_service}
  */
  readonly dhcpRelayService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp_relay_source_ip ObjectFspVlan#dhcp_relay_source_ip}
  */
  readonly dhcpRelaySourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp_relay_type ObjectFspVlan#dhcp_relay_type}
  */
  readonly dhcpRelayType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp_renew_time ObjectFspVlan#dhcp_renew_time}
  */
  readonly dhcpRenewTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dhcp_smart_relay ObjectFspVlan#dhcp_smart_relay}
  */
  readonly dhcpSmartRelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#disc_retry_timeout ObjectFspVlan#disc_retry_timeout}
  */
  readonly discRetryTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#disconnect_threshold ObjectFspVlan#disconnect_threshold}
  */
  readonly disconnectThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#distance ObjectFspVlan#distance}
  */
  readonly distance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dns_query ObjectFspVlan#dns_query}
  */
  readonly dnsQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dns_server_override ObjectFspVlan#dns_server_override}
  */
  readonly dnsServerOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#dns_server_protocol ObjectFspVlan#dns_server_protocol}
  */
  readonly dnsServerProtocol?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#drop_fragment ObjectFspVlan#drop_fragment}
  */
  readonly dropFragment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#drop_overlapped_fragment ObjectFspVlan#drop_overlapped_fragment}
  */
  readonly dropOverlappedFragment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#eap_ca_cert ObjectFspVlan#eap_ca_cert}
  */
  readonly eapCaCert?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#eap_identity ObjectFspVlan#eap_identity}
  */
  readonly eapIdentity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#eap_method ObjectFspVlan#eap_method}
  */
  readonly eapMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#eap_password ObjectFspVlan#eap_password}
  */
  readonly eapPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#eap_supplicant ObjectFspVlan#eap_supplicant}
  */
  readonly eapSupplicant?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#eap_user_cert ObjectFspVlan#eap_user_cert}
  */
  readonly eapUserCert?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#egress_cos ObjectFspVlan#egress_cos}
  */
  readonly egressCos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#egress_shaping_profile ObjectFspVlan#egress_shaping_profile}
  */
  readonly egressShapingProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#eip ObjectFspVlan#eip}
  */
  readonly eip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#endpoint_compliance ObjectFspVlan#endpoint_compliance}
  */
  readonly endpointCompliance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#estimated_downstream_bandwidth ObjectFspVlan#estimated_downstream_bandwidth}
  */
  readonly estimatedDownstreamBandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#estimated_upstream_bandwidth ObjectFspVlan#estimated_upstream_bandwidth}
  */
  readonly estimatedUpstreamBandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#explicit_ftp_proxy ObjectFspVlan#explicit_ftp_proxy}
  */
  readonly explicitFtpProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#explicit_web_proxy ObjectFspVlan#explicit_web_proxy}
  */
  readonly explicitWebProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#external ObjectFspVlan#external}
  */
  readonly external?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#fail_action_on_extender ObjectFspVlan#fail_action_on_extender}
  */
  readonly failActionOnExtender?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#fail_alert_interfaces ObjectFspVlan#fail_alert_interfaces}
  */
  readonly failAlertInterfaces?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#fail_alert_method ObjectFspVlan#fail_alert_method}
  */
  readonly failAlertMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#fail_detect ObjectFspVlan#fail_detect}
  */
  readonly failDetect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#fail_detect_option ObjectFspVlan#fail_detect_option}
  */
  readonly failDetectOption?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#fdp ObjectFspVlan#fdp}
  */
  readonly fdp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#fortiheartbeat ObjectFspVlan#fortiheartbeat}
  */
  readonly fortiheartbeat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#fortilink ObjectFspVlan#fortilink}
  */
  readonly fortilink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#fortilink_backup_link ObjectFspVlan#fortilink_backup_link}
  */
  readonly fortilinkBackupLink?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#fortilink_neighbor_detect ObjectFspVlan#fortilink_neighbor_detect}
  */
  readonly fortilinkNeighborDetect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#fortilink_split_interface ObjectFspVlan#fortilink_split_interface}
  */
  readonly fortilinkSplitInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#fortilink_stacking ObjectFspVlan#fortilink_stacking}
  */
  readonly fortilinkStacking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#forward_domain ObjectFspVlan#forward_domain}
  */
  readonly forwardDomain?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#forward_error_correction ObjectFspVlan#forward_error_correction}
  */
  readonly forwardErrorCorrection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#fp_anomaly ObjectFspVlan#fp_anomaly}
  */
  readonly fpAnomaly?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#fp_disable ObjectFspVlan#fp_disable}
  */
  readonly fpDisable?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#gateway_address ObjectFspVlan#gateway_address}
  */
  readonly gatewayAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#generic_receive_offload ObjectFspVlan#generic_receive_offload}
  */
  readonly genericReceiveOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#gi_gk ObjectFspVlan#gi_gk}
  */
  readonly giGk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#gwaddr ObjectFspVlan#gwaddr}
  */
  readonly gwaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#gwdetect ObjectFspVlan#gwdetect}
  */
  readonly gwdetect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ha_priority ObjectFspVlan#ha_priority}
  */
  readonly haPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#icmp_accept_redirect ObjectFspVlan#icmp_accept_redirect}
  */
  readonly icmpAcceptRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#icmp_redirect ObjectFspVlan#icmp_redirect}
  */
  readonly icmpRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#icmp_send_redirect ObjectFspVlan#icmp_send_redirect}
  */
  readonly icmpSendRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ident_accept ObjectFspVlan#ident_accept}
  */
  readonly identAccept?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#idle_timeout ObjectFspVlan#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#if_mdix ObjectFspVlan#if_mdix}
  */
  readonly ifMdix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#if_media ObjectFspVlan#if_media}
  */
  readonly ifMedia?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ike_saml_server ObjectFspVlan#ike_saml_server}
  */
  readonly ikeSamlServer?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#in_force_vlan_cos ObjectFspVlan#in_force_vlan_cos}
  */
  readonly inForceVlanCos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#inbandwidth ObjectFspVlan#inbandwidth}
  */
  readonly inbandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ingress_cos ObjectFspVlan#ingress_cos}
  */
  readonly ingressCos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ingress_shaping_profile ObjectFspVlan#ingress_shaping_profile}
  */
  readonly ingressShapingProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ingress_spillover_threshold ObjectFspVlan#ingress_spillover_threshold}
  */
  readonly ingressSpilloverThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#interconnect_profile ObjectFspVlan#interconnect_profile}
  */
  readonly interconnectProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#internal ObjectFspVlan#internal}
  */
  readonly internal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip ObjectFspVlan#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ip_managed_by_fortiipam ObjectFspVlan#ip_managed_by_fortiipam}
  */
  readonly ipManagedByFortiipam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ipmac ObjectFspVlan#ipmac}
  */
  readonly ipmac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ips_sniffer_mode ObjectFspVlan#ips_sniffer_mode}
  */
  readonly ipsSnifferMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ipunnumbered ObjectFspVlan#ipunnumbered}
  */
  readonly ipunnumbered?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#l2forward ObjectFspVlan#l2forward}
  */
  readonly l2Forward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#l2tp_client ObjectFspVlan#l2tp_client}
  */
  readonly l2TpClient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#lacp_ha_secondary ObjectFspVlan#lacp_ha_secondary}
  */
  readonly lacpHaSecondary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#lacp_ha_slave ObjectFspVlan#lacp_ha_slave}
  */
  readonly lacpHaSlave?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#lacp_mode ObjectFspVlan#lacp_mode}
  */
  readonly lacpMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#lacp_speed ObjectFspVlan#lacp_speed}
  */
  readonly lacpSpeed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#large_receive_offload ObjectFspVlan#large_receive_offload}
  */
  readonly largeReceiveOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#lcp_echo_interval ObjectFspVlan#lcp_echo_interval}
  */
  readonly lcpEchoInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#lcp_max_echo_fails ObjectFspVlan#lcp_max_echo_fails}
  */
  readonly lcpMaxEchoFails?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#link_up_delay ObjectFspVlan#link_up_delay}
  */
  readonly linkUpDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#listen_forticlient_connection ObjectFspVlan#listen_forticlient_connection}
  */
  readonly listenForticlientConnection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#lldp_network_policy ObjectFspVlan#lldp_network_policy}
  */
  readonly lldpNetworkPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#lldp_reception ObjectFspVlan#lldp_reception}
  */
  readonly lldpReception?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#lldp_transmission ObjectFspVlan#lldp_transmission}
  */
  readonly lldpTransmission?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#log ObjectFspVlan#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#macaddr ObjectFspVlan#macaddr}
  */
  readonly macaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#managed_subnetwork_size ObjectFspVlan#managed_subnetwork_size}
  */
  readonly managedSubnetworkSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#management_ip ObjectFspVlan#management_ip}
  */
  readonly managementIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#max_egress_burst_rate ObjectFspVlan#max_egress_burst_rate}
  */
  readonly maxEgressBurstRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#max_egress_rate ObjectFspVlan#max_egress_rate}
  */
  readonly maxEgressRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#measured_downstream_bandwidth ObjectFspVlan#measured_downstream_bandwidth}
  */
  readonly measuredDownstreamBandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#measured_upstream_bandwidth ObjectFspVlan#measured_upstream_bandwidth}
  */
  readonly measuredUpstreamBandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#mediatype ObjectFspVlan#mediatype}
  */
  readonly mediatype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#member ObjectFspVlan#member}
  */
  readonly member?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#min_links ObjectFspVlan#min_links}
  */
  readonly minLinks?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#min_links_down ObjectFspVlan#min_links_down}
  */
  readonly minLinksDown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#mirroring_direction ObjectFspVlan#mirroring_direction}
  */
  readonly mirroringDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#mirroring_port ObjectFspVlan#mirroring_port}
  */
  readonly mirroringPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#mode ObjectFspVlan#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#monitor_bandwidth ObjectFspVlan#monitor_bandwidth}
  */
  readonly monitorBandwidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#mtu ObjectFspVlan#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#mtu_override ObjectFspVlan#mtu_override}
  */
  readonly mtuOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#mux_type ObjectFspVlan#mux_type}
  */
  readonly muxType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#name ObjectFspVlan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ndiscforward ObjectFspVlan#ndiscforward}
  */
  readonly ndiscforward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#netbios_forward ObjectFspVlan#netbios_forward}
  */
  readonly netbiosForward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#netflow_sampler ObjectFspVlan#netflow_sampler}
  */
  readonly netflowSampler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#np_qos_profile ObjectFspVlan#np_qos_profile}
  */
  readonly npQosProfile?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#npu_fastpath ObjectFspVlan#npu_fastpath}
  */
  readonly npuFastpath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#nst ObjectFspVlan#nst}
  */
  readonly nst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#out_force_vlan_cos ObjectFspVlan#out_force_vlan_cos}
  */
  readonly outForceVlanCos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#outbandwidth ObjectFspVlan#outbandwidth}
  */
  readonly outbandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#padt_retry_timeout ObjectFspVlan#padt_retry_timeout}
  */
  readonly padtRetryTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#password ObjectFspVlan#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#peer_interface ObjectFspVlan#peer_interface}
  */
  readonly peerInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#phy_mode ObjectFspVlan#phy_mode}
  */
  readonly phyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ping_serv_status ObjectFspVlan#ping_serv_status}
  */
  readonly pingServStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#poe ObjectFspVlan#poe}
  */
  readonly poe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#polling_interval ObjectFspVlan#polling_interval}
  */
  readonly pollingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#port_mirroring ObjectFspVlan#port_mirroring}
  */
  readonly portMirroring?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#pppoe_unnumbered_negotiate ObjectFspVlan#pppoe_unnumbered_negotiate}
  */
  readonly pppoeUnnumberedNegotiate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#pptp_auth_type ObjectFspVlan#pptp_auth_type}
  */
  readonly pptpAuthType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#pptp_client ObjectFspVlan#pptp_client}
  */
  readonly pptpClient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#pptp_password ObjectFspVlan#pptp_password}
  */
  readonly pptpPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#pptp_server_ip ObjectFspVlan#pptp_server_ip}
  */
  readonly pptpServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#pptp_timeout ObjectFspVlan#pptp_timeout}
  */
  readonly pptpTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#pptp_user ObjectFspVlan#pptp_user}
  */
  readonly pptpUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#preserve_session_route ObjectFspVlan#preserve_session_route}
  */
  readonly preserveSessionRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#priority ObjectFspVlan#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#priority_override ObjectFspVlan#priority_override}
  */
  readonly priorityOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#proxy_captive_portal ObjectFspVlan#proxy_captive_portal}
  */
  readonly proxyCaptivePortal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#pvc_atm_qos ObjectFspVlan#pvc_atm_qos}
  */
  readonly pvcAtmQos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#pvc_chan ObjectFspVlan#pvc_chan}
  */
  readonly pvcChan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#pvc_crc ObjectFspVlan#pvc_crc}
  */
  readonly pvcCrc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#pvc_pcr ObjectFspVlan#pvc_pcr}
  */
  readonly pvcPcr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#pvc_scr ObjectFspVlan#pvc_scr}
  */
  readonly pvcScr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#pvc_vlan_id ObjectFspVlan#pvc_vlan_id}
  */
  readonly pvcVlanId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#pvc_vlan_rx_id ObjectFspVlan#pvc_vlan_rx_id}
  */
  readonly pvcVlanRxId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#pvc_vlan_rx_op ObjectFspVlan#pvc_vlan_rx_op}
  */
  readonly pvcVlanRxOp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#pvc_vlan_tx_id ObjectFspVlan#pvc_vlan_tx_id}
  */
  readonly pvcVlanTxId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#pvc_vlan_tx_op ObjectFspVlan#pvc_vlan_tx_op}
  */
  readonly pvcVlanTxOp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#reachable_time ObjectFspVlan#reachable_time}
  */
  readonly reachableTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#redundant_interface ObjectFspVlan#redundant_interface}
  */
  readonly redundantInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#remote_ip ObjectFspVlan#remote_ip}
  */
  readonly remoteIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#replacemsg_override_group ObjectFspVlan#replacemsg_override_group}
  */
  readonly replacemsgOverrideGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#retransmission ObjectFspVlan#retransmission}
  */
  readonly retransmission?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ring_rx ObjectFspVlan#ring_rx}
  */
  readonly ringRx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ring_tx ObjectFspVlan#ring_tx}
  */
  readonly ringTx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#role ObjectFspVlan#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#sample_direction ObjectFspVlan#sample_direction}
  */
  readonly sampleDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#sample_rate ObjectFspVlan#sample_rate}
  */
  readonly sampleRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#scan_botnet_connections ObjectFspVlan#scan_botnet_connections}
  */
  readonly scanBotnetConnections?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#secondary_ip ObjectFspVlan#secondary_ip}
  */
  readonly secondaryIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#security_8021x_dynamic_vlan_id ObjectFspVlan#security_8021x_dynamic_vlan_id}
  */
  readonly security8021XDynamicVlanId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#security_8021x_master ObjectFspVlan#security_8021x_master}
  */
  readonly security8021XMaster?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#security_8021x_member_mode ObjectFspVlan#security_8021x_member_mode}
  */
  readonly security8021XMemberMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#security_8021x_mode ObjectFspVlan#security_8021x_mode}
  */
  readonly security8021XMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#security_exempt_list ObjectFspVlan#security_exempt_list}
  */
  readonly securityExemptList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#security_external_logout ObjectFspVlan#security_external_logout}
  */
  readonly securityExternalLogout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#security_external_web ObjectFspVlan#security_external_web}
  */
  readonly securityExternalWeb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#security_groups ObjectFspVlan#security_groups}
  */
  readonly securityGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#security_mac_auth_bypass ObjectFspVlan#security_mac_auth_bypass}
  */
  readonly securityMacAuthBypass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#security_mode ObjectFspVlan#security_mode}
  */
  readonly securityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#security_redirect_url ObjectFspVlan#security_redirect_url}
  */
  readonly securityRedirectUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#select_profile_30a_35b ObjectFspVlan#select_profile_30a_35b}
  */
  readonly selectProfile30A35B?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#service_name ObjectFspVlan#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#sflow_sampler ObjectFspVlan#sflow_sampler}
  */
  readonly sflowSampler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#sfp_dsl ObjectFspVlan#sfp_dsl}
  */
  readonly sfpDsl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#sfp_dsl_adsl_fallback ObjectFspVlan#sfp_dsl_adsl_fallback}
  */
  readonly sfpDslAdslFallback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#sfp_dsl_autodetect ObjectFspVlan#sfp_dsl_autodetect}
  */
  readonly sfpDslAutodetect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#sfp_dsl_mac ObjectFspVlan#sfp_dsl_mac}
  */
  readonly sfpDslMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#speed ObjectFspVlan#speed}
  */
  readonly speed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#spillover_threshold ObjectFspVlan#spillover_threshold}
  */
  readonly spilloverThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#src_check ObjectFspVlan#src_check}
  */
  readonly srcCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#status ObjectFspVlan#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#stp ObjectFspVlan#stp}
  */
  readonly stp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#stp_edge ObjectFspVlan#stp_edge}
  */
  readonly stpEdge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#stp_ha_secondary ObjectFspVlan#stp_ha_secondary}
  */
  readonly stpHaSecondary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#stp_ha_slave ObjectFspVlan#stp_ha_slave}
  */
  readonly stpHaSlave?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#stpforward ObjectFspVlan#stpforward}
  */
  readonly stpforward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#stpforward_mode ObjectFspVlan#stpforward_mode}
  */
  readonly stpforwardMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#strip_priority_vlan_tag ObjectFspVlan#strip_priority_vlan_tag}
  */
  readonly stripPriorityVlanTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#subst ObjectFspVlan#subst}
  */
  readonly subst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#substitute_dst_mac ObjectFspVlan#substitute_dst_mac}
  */
  readonly substituteDstMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#sw_algorithm ObjectFspVlan#sw_algorithm}
  */
  readonly swAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#swc_first_create ObjectFspVlan#swc_first_create}
  */
  readonly swcFirstCreate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#swc_vlan ObjectFspVlan#swc_vlan}
  */
  readonly swcVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#switch ObjectFspVlan#switch}
  */
  readonly switch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#switch_controller_access_vlan ObjectFspVlan#switch_controller_access_vlan}
  */
  readonly switchControllerAccessVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#switch_controller_arp_inspection ObjectFspVlan#switch_controller_arp_inspection}
  */
  readonly switchControllerArpInspection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#switch_controller_auth ObjectFspVlan#switch_controller_auth}
  */
  readonly switchControllerAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#switch_controller_dhcp_snooping ObjectFspVlan#switch_controller_dhcp_snooping}
  */
  readonly switchControllerDhcpSnooping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#switch_controller_dhcp_snooping_option82 ObjectFspVlan#switch_controller_dhcp_snooping_option82}
  */
  readonly switchControllerDhcpSnoopingOption82?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#switch_controller_dhcp_snooping_verify_mac ObjectFspVlan#switch_controller_dhcp_snooping_verify_mac}
  */
  readonly switchControllerDhcpSnoopingVerifyMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#switch_controller_dynamic ObjectFspVlan#switch_controller_dynamic}
  */
  readonly switchControllerDynamic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#switch_controller_feature ObjectFspVlan#switch_controller_feature}
  */
  readonly switchControllerFeature?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#switch_controller_igmp_snooping ObjectFspVlan#switch_controller_igmp_snooping}
  */
  readonly switchControllerIgmpSnooping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#switch_controller_igmp_snooping_fast_leave ObjectFspVlan#switch_controller_igmp_snooping_fast_leave}
  */
  readonly switchControllerIgmpSnoopingFastLeave?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#switch_controller_igmp_snooping_proxy ObjectFspVlan#switch_controller_igmp_snooping_proxy}
  */
  readonly switchControllerIgmpSnoopingProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#switch_controller_iot_scanning ObjectFspVlan#switch_controller_iot_scanning}
  */
  readonly switchControllerIotScanning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#switch_controller_learning_limit ObjectFspVlan#switch_controller_learning_limit}
  */
  readonly switchControllerLearningLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#switch_controller_mgmt_vlan ObjectFspVlan#switch_controller_mgmt_vlan}
  */
  readonly switchControllerMgmtVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#switch_controller_nac ObjectFspVlan#switch_controller_nac}
  */
  readonly switchControllerNac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#switch_controller_netflow_collect ObjectFspVlan#switch_controller_netflow_collect}
  */
  readonly switchControllerNetflowCollect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#switch_controller_offload ObjectFspVlan#switch_controller_offload}
  */
  readonly switchControllerOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#switch_controller_offload_gw ObjectFspVlan#switch_controller_offload_gw}
  */
  readonly switchControllerOffloadGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#switch_controller_offload_ip ObjectFspVlan#switch_controller_offload_ip}
  */
  readonly switchControllerOffloadIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#switch_controller_offloading ObjectFspVlan#switch_controller_offloading}
  */
  readonly switchControllerOffloading?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#switch_controller_offloading_gw ObjectFspVlan#switch_controller_offloading_gw}
  */
  readonly switchControllerOffloadingGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#switch_controller_offloading_ip ObjectFspVlan#switch_controller_offloading_ip}
  */
  readonly switchControllerOffloadingIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#switch_controller_radius_server ObjectFspVlan#switch_controller_radius_server}
  */
  readonly switchControllerRadiusServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#switch_controller_rspan_mode ObjectFspVlan#switch_controller_rspan_mode}
  */
  readonly switchControllerRspanMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#switch_controller_source_ip ObjectFspVlan#switch_controller_source_ip}
  */
  readonly switchControllerSourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#switch_controller_traffic_policy ObjectFspVlan#switch_controller_traffic_policy}
  */
  readonly switchControllerTrafficPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#system_id ObjectFspVlan#system_id}
  */
  readonly systemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#system_id_type ObjectFspVlan#system_id_type}
  */
  readonly systemIdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#tc_mode ObjectFspVlan#tc_mode}
  */
  readonly tcMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#tcp_mss ObjectFspVlan#tcp_mss}
  */
  readonly tcpMss?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#trunk ObjectFspVlan#trunk}
  */
  readonly trunk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#trust_ip6_1 ObjectFspVlan#trust_ip6_1}
  */
  readonly trustIp61?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#trust_ip6_2 ObjectFspVlan#trust_ip6_2}
  */
  readonly trustIp62?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#trust_ip6_3 ObjectFspVlan#trust_ip6_3}
  */
  readonly trustIp63?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#trust_ip_1 ObjectFspVlan#trust_ip_1}
  */
  readonly trustIp1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#trust_ip_2 ObjectFspVlan#trust_ip_2}
  */
  readonly trustIp2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#trust_ip_3 ObjectFspVlan#trust_ip_3}
  */
  readonly trustIp3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#type ObjectFspVlan#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#username ObjectFspVlan#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vci ObjectFspVlan#vci}
  */
  readonly vci?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vectoring ObjectFspVlan#vectoring}
  */
  readonly vectoring?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vindex ObjectFspVlan#vindex}
  */
  readonly vindex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vlan_op_mode ObjectFspVlan#vlan_op_mode}
  */
  readonly vlanOpMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vlan_protocol ObjectFspVlan#vlan_protocol}
  */
  readonly vlanProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vlanforward ObjectFspVlan#vlanforward}
  */
  readonly vlanforward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vlanid ObjectFspVlan#vlanid}
  */
  readonly vlanid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vpi ObjectFspVlan#vpi}
  */
  readonly vpi?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vrf ObjectFspVlan#vrf}
  */
  readonly vrf?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vrrp_virtual_mac ObjectFspVlan#vrrp_virtual_mac}
  */
  readonly vrrpVirtualMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wccp ObjectFspVlan#wccp}
  */
  readonly wccp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#weight ObjectFspVlan#weight}
  */
  readonly weight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wifi_5g_threshold ObjectFspVlan#wifi_5g_threshold}
  */
  readonly wifi5GThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wifi_acl ObjectFspVlan#wifi_acl}
  */
  readonly wifiAcl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wifi_ap_band ObjectFspVlan#wifi_ap_band}
  */
  readonly wifiApBand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wifi_auth ObjectFspVlan#wifi_auth}
  */
  readonly wifiAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wifi_auto_connect ObjectFspVlan#wifi_auto_connect}
  */
  readonly wifiAutoConnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wifi_auto_save ObjectFspVlan#wifi_auto_save}
  */
  readonly wifiAutoSave?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wifi_broadcast_ssid ObjectFspVlan#wifi_broadcast_ssid}
  */
  readonly wifiBroadcastSsid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wifi_dns_server1 ObjectFspVlan#wifi_dns_server1}
  */
  readonly wifiDnsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wifi_dns_server2 ObjectFspVlan#wifi_dns_server2}
  */
  readonly wifiDnsServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wifi_encrypt ObjectFspVlan#wifi_encrypt}
  */
  readonly wifiEncrypt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wifi_fragment_threshold ObjectFspVlan#wifi_fragment_threshold}
  */
  readonly wifiFragmentThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wifi_gateway ObjectFspVlan#wifi_gateway}
  */
  readonly wifiGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wifi_key ObjectFspVlan#wifi_key}
  */
  readonly wifiKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wifi_keyindex ObjectFspVlan#wifi_keyindex}
  */
  readonly wifiKeyindex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wifi_mac_filter ObjectFspVlan#wifi_mac_filter}
  */
  readonly wifiMacFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wifi_passphrase ObjectFspVlan#wifi_passphrase}
  */
  readonly wifiPassphrase?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wifi_radius_server ObjectFspVlan#wifi_radius_server}
  */
  readonly wifiRadiusServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wifi_rts_threshold ObjectFspVlan#wifi_rts_threshold}
  */
  readonly wifiRtsThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wifi_security ObjectFspVlan#wifi_security}
  */
  readonly wifiSecurity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wifi_ssid ObjectFspVlan#wifi_ssid}
  */
  readonly wifiSsid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wifi_usergroup ObjectFspVlan#wifi_usergroup}
  */
  readonly wifiUsergroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#wins_ip ObjectFspVlan#wins_ip}
  */
  readonly winsIp?: string;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#ipv6 ObjectFspVlan#ipv6}
  */
  readonly ipv6?: ObjectFspVlanInterfaceIpv6;
  /**
  * secondaryip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#secondaryip ObjectFspVlan#secondaryip}
  */
  readonly secondaryip?: ObjectFspVlanInterfaceSecondaryip[] | cdktf.IResolvable;
  /**
  * vrrp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#vrrp ObjectFspVlan#vrrp}
  */
  readonly vrrp?: ObjectFspVlanInterfaceVrrp[] | cdktf.IResolvable;
}

export function objectFspVlanInterfaceToTerraform(struct?: ObjectFspVlanInterfaceOutputReference | ObjectFspVlanInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ac_name: cdktf.stringToTerraform(struct!.acName),
    aggregate: cdktf.stringToTerraform(struct!.aggregate),
    aggregate_type: cdktf.stringToTerraform(struct!.aggregateType),
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    alias: cdktf.stringToTerraform(struct!.alias),
    allowaccess: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowaccess),
    annex: cdktf.stringToTerraform(struct!.annex),
    ap_discover: cdktf.stringToTerraform(struct!.apDiscover),
    arpforward: cdktf.stringToTerraform(struct!.arpforward),
    atm_protocol: cdktf.stringToTerraform(struct!.atmProtocol),
    auth_cert: cdktf.stringToTerraform(struct!.authCert),
    auth_portal_addr: cdktf.stringToTerraform(struct!.authPortalAddr),
    auth_type: cdktf.stringToTerraform(struct!.authType),
    auto_auth_extension_device: cdktf.stringToTerraform(struct!.autoAuthExtensionDevice),
    bandwidth_measure_time: cdktf.numberToTerraform(struct!.bandwidthMeasureTime),
    bfd: cdktf.stringToTerraform(struct!.bfd),
    bfd_desired_min_tx: cdktf.numberToTerraform(struct!.bfdDesiredMinTx),
    bfd_detect_mult: cdktf.numberToTerraform(struct!.bfdDetectMult),
    bfd_required_min_rx: cdktf.numberToTerraform(struct!.bfdRequiredMinRx),
    broadcast_forticlient_discovery: cdktf.stringToTerraform(struct!.broadcastForticlientDiscovery),
    broadcast_forward: cdktf.stringToTerraform(struct!.broadcastForward),
    captive_portal: cdktf.numberToTerraform(struct!.captivePortal),
    cli_conn_status: cdktf.numberToTerraform(struct!.cliConnStatus),
    color: cdktf.numberToTerraform(struct!.color),
    ddns: cdktf.stringToTerraform(struct!.ddns),
    ddns_auth: cdktf.stringToTerraform(struct!.ddnsAuth),
    ddns_domain: cdktf.stringToTerraform(struct!.ddnsDomain),
    ddns_key: cdktf.stringToTerraform(struct!.ddnsKey),
    ddns_keyname: cdktf.stringToTerraform(struct!.ddnsKeyname),
    ddns_password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ddnsPassword),
    ddns_server: cdktf.stringToTerraform(struct!.ddnsServer),
    ddns_server_ip: cdktf.stringToTerraform(struct!.ddnsServerIp),
    ddns_sn: cdktf.stringToTerraform(struct!.ddnsSn),
    ddns_ttl: cdktf.numberToTerraform(struct!.ddnsTtl),
    ddns_username: cdktf.stringToTerraform(struct!.ddnsUsername),
    ddns_zone: cdktf.stringToTerraform(struct!.ddnsZone),
    dedicated_to: cdktf.stringToTerraform(struct!.dedicatedTo),
    default_purdue_level: cdktf.stringToTerraform(struct!.defaultPurdueLevel),
    defaultgw: cdktf.stringToTerraform(struct!.defaultgw),
    description: cdktf.stringToTerraform(struct!.description),
    detected_peer_mtu: cdktf.numberToTerraform(struct!.detectedPeerMtu),
    detectprotocol: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.detectprotocol),
    detectserver: cdktf.stringToTerraform(struct!.detectserver),
    device_access_list: cdktf.stringToTerraform(struct!.deviceAccessList),
    device_identification: cdktf.stringToTerraform(struct!.deviceIdentification),
    device_identification_active_scan: cdktf.stringToTerraform(struct!.deviceIdentificationActiveScan),
    device_netscan: cdktf.stringToTerraform(struct!.deviceNetscan),
    device_user_identification: cdktf.stringToTerraform(struct!.deviceUserIdentification),
    devindex: cdktf.numberToTerraform(struct!.devindex),
    dhcp_broadcast_flag: cdktf.stringToTerraform(struct!.dhcpBroadcastFlag),
    dhcp_classless_route_addition: cdktf.stringToTerraform(struct!.dhcpClasslessRouteAddition),
    dhcp_client_identifier: cdktf.stringToTerraform(struct!.dhcpClientIdentifier),
    dhcp_relay_agent_option: cdktf.stringToTerraform(struct!.dhcpRelayAgentOption),
    dhcp_relay_circuit_id: cdktf.stringToTerraform(struct!.dhcpRelayCircuitId),
    dhcp_relay_interface: cdktf.stringToTerraform(struct!.dhcpRelayInterface),
    dhcp_relay_interface_select_method: cdktf.stringToTerraform(struct!.dhcpRelayInterfaceSelectMethod),
    dhcp_relay_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dhcpRelayIp),
    dhcp_relay_link_selection: cdktf.stringToTerraform(struct!.dhcpRelayLinkSelection),
    dhcp_relay_request_all_server: cdktf.stringToTerraform(struct!.dhcpRelayRequestAllServer),
    dhcp_relay_service: cdktf.stringToTerraform(struct!.dhcpRelayService),
    dhcp_relay_source_ip: cdktf.stringToTerraform(struct!.dhcpRelaySourceIp),
    dhcp_relay_type: cdktf.stringToTerraform(struct!.dhcpRelayType),
    dhcp_renew_time: cdktf.numberToTerraform(struct!.dhcpRenewTime),
    dhcp_smart_relay: cdktf.stringToTerraform(struct!.dhcpSmartRelay),
    disc_retry_timeout: cdktf.numberToTerraform(struct!.discRetryTimeout),
    disconnect_threshold: cdktf.numberToTerraform(struct!.disconnectThreshold),
    distance: cdktf.numberToTerraform(struct!.distance),
    dns_query: cdktf.stringToTerraform(struct!.dnsQuery),
    dns_server_override: cdktf.stringToTerraform(struct!.dnsServerOverride),
    dns_server_protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServerProtocol),
    drop_fragment: cdktf.stringToTerraform(struct!.dropFragment),
    drop_overlapped_fragment: cdktf.stringToTerraform(struct!.dropOverlappedFragment),
    eap_ca_cert: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eapCaCert),
    eap_identity: cdktf.stringToTerraform(struct!.eapIdentity),
    eap_method: cdktf.stringToTerraform(struct!.eapMethod),
    eap_password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eapPassword),
    eap_supplicant: cdktf.stringToTerraform(struct!.eapSupplicant),
    eap_user_cert: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eapUserCert),
    egress_cos: cdktf.stringToTerraform(struct!.egressCos),
    egress_shaping_profile: cdktf.stringToTerraform(struct!.egressShapingProfile),
    eip: cdktf.stringToTerraform(struct!.eip),
    endpoint_compliance: cdktf.stringToTerraform(struct!.endpointCompliance),
    estimated_downstream_bandwidth: cdktf.numberToTerraform(struct!.estimatedDownstreamBandwidth),
    estimated_upstream_bandwidth: cdktf.numberToTerraform(struct!.estimatedUpstreamBandwidth),
    explicit_ftp_proxy: cdktf.stringToTerraform(struct!.explicitFtpProxy),
    explicit_web_proxy: cdktf.stringToTerraform(struct!.explicitWebProxy),
    external: cdktf.stringToTerraform(struct!.external),
    fail_action_on_extender: cdktf.stringToTerraform(struct!.failActionOnExtender),
    fail_alert_interfaces: cdktf.stringToTerraform(struct!.failAlertInterfaces),
    fail_alert_method: cdktf.stringToTerraform(struct!.failAlertMethod),
    fail_detect: cdktf.stringToTerraform(struct!.failDetect),
    fail_detect_option: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.failDetectOption),
    fdp: cdktf.stringToTerraform(struct!.fdp),
    fortiheartbeat: cdktf.stringToTerraform(struct!.fortiheartbeat),
    fortilink: cdktf.stringToTerraform(struct!.fortilink),
    fortilink_backup_link: cdktf.numberToTerraform(struct!.fortilinkBackupLink),
    fortilink_neighbor_detect: cdktf.stringToTerraform(struct!.fortilinkNeighborDetect),
    fortilink_split_interface: cdktf.stringToTerraform(struct!.fortilinkSplitInterface),
    fortilink_stacking: cdktf.stringToTerraform(struct!.fortilinkStacking),
    forward_domain: cdktf.numberToTerraform(struct!.forwardDomain),
    forward_error_correction: cdktf.stringToTerraform(struct!.forwardErrorCorrection),
    fp_anomaly: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fpAnomaly),
    fp_disable: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fpDisable),
    gateway_address: cdktf.stringToTerraform(struct!.gatewayAddress),
    generic_receive_offload: cdktf.stringToTerraform(struct!.genericReceiveOffload),
    gi_gk: cdktf.stringToTerraform(struct!.giGk),
    gwaddr: cdktf.stringToTerraform(struct!.gwaddr),
    gwdetect: cdktf.stringToTerraform(struct!.gwdetect),
    ha_priority: cdktf.numberToTerraform(struct!.haPriority),
    icmp_accept_redirect: cdktf.stringToTerraform(struct!.icmpAcceptRedirect),
    icmp_redirect: cdktf.stringToTerraform(struct!.icmpRedirect),
    icmp_send_redirect: cdktf.stringToTerraform(struct!.icmpSendRedirect),
    ident_accept: cdktf.stringToTerraform(struct!.identAccept),
    idle_timeout: cdktf.numberToTerraform(struct!.idleTimeout),
    if_mdix: cdktf.stringToTerraform(struct!.ifMdix),
    if_media: cdktf.stringToTerraform(struct!.ifMedia),
    ike_saml_server: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ikeSamlServer),
    in_force_vlan_cos: cdktf.numberToTerraform(struct!.inForceVlanCos),
    inbandwidth: cdktf.numberToTerraform(struct!.inbandwidth),
    ingress_cos: cdktf.stringToTerraform(struct!.ingressCos),
    ingress_shaping_profile: cdktf.stringToTerraform(struct!.ingressShapingProfile),
    ingress_spillover_threshold: cdktf.numberToTerraform(struct!.ingressSpilloverThreshold),
    interconnect_profile: cdktf.stringToTerraform(struct!.interconnectProfile),
    internal: cdktf.numberToTerraform(struct!.internal),
    ip: cdktf.stringToTerraform(struct!.ip),
    ip_managed_by_fortiipam: cdktf.stringToTerraform(struct!.ipManagedByFortiipam),
    ipmac: cdktf.stringToTerraform(struct!.ipmac),
    ips_sniffer_mode: cdktf.stringToTerraform(struct!.ipsSnifferMode),
    ipunnumbered: cdktf.stringToTerraform(struct!.ipunnumbered),
    l2forward: cdktf.stringToTerraform(struct!.l2Forward),
    l2tp_client: cdktf.stringToTerraform(struct!.l2TpClient),
    lacp_ha_secondary: cdktf.stringToTerraform(struct!.lacpHaSecondary),
    lacp_ha_slave: cdktf.stringToTerraform(struct!.lacpHaSlave),
    lacp_mode: cdktf.stringToTerraform(struct!.lacpMode),
    lacp_speed: cdktf.stringToTerraform(struct!.lacpSpeed),
    large_receive_offload: cdktf.stringToTerraform(struct!.largeReceiveOffload),
    lcp_echo_interval: cdktf.numberToTerraform(struct!.lcpEchoInterval),
    lcp_max_echo_fails: cdktf.numberToTerraform(struct!.lcpMaxEchoFails),
    link_up_delay: cdktf.numberToTerraform(struct!.linkUpDelay),
    listen_forticlient_connection: cdktf.stringToTerraform(struct!.listenForticlientConnection),
    lldp_network_policy: cdktf.stringToTerraform(struct!.lldpNetworkPolicy),
    lldp_reception: cdktf.stringToTerraform(struct!.lldpReception),
    lldp_transmission: cdktf.stringToTerraform(struct!.lldpTransmission),
    log: cdktf.stringToTerraform(struct!.log),
    macaddr: cdktf.stringToTerraform(struct!.macaddr),
    managed_subnetwork_size: cdktf.stringToTerraform(struct!.managedSubnetworkSize),
    management_ip: cdktf.stringToTerraform(struct!.managementIp),
    max_egress_burst_rate: cdktf.numberToTerraform(struct!.maxEgressBurstRate),
    max_egress_rate: cdktf.numberToTerraform(struct!.maxEgressRate),
    measured_downstream_bandwidth: cdktf.numberToTerraform(struct!.measuredDownstreamBandwidth),
    measured_upstream_bandwidth: cdktf.numberToTerraform(struct!.measuredUpstreamBandwidth),
    mediatype: cdktf.stringToTerraform(struct!.mediatype),
    member: cdktf.stringToTerraform(struct!.member),
    min_links: cdktf.numberToTerraform(struct!.minLinks),
    min_links_down: cdktf.stringToTerraform(struct!.minLinksDown),
    mirroring_direction: cdktf.stringToTerraform(struct!.mirroringDirection),
    mirroring_port: cdktf.stringToTerraform(struct!.mirroringPort),
    mode: cdktf.stringToTerraform(struct!.mode),
    monitor_bandwidth: cdktf.stringToTerraform(struct!.monitorBandwidth),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    mtu_override: cdktf.stringToTerraform(struct!.mtuOverride),
    mux_type: cdktf.stringToTerraform(struct!.muxType),
    name: cdktf.stringToTerraform(struct!.name),
    ndiscforward: cdktf.stringToTerraform(struct!.ndiscforward),
    netbios_forward: cdktf.stringToTerraform(struct!.netbiosForward),
    netflow_sampler: cdktf.stringToTerraform(struct!.netflowSampler),
    np_qos_profile: cdktf.numberToTerraform(struct!.npQosProfile),
    npu_fastpath: cdktf.stringToTerraform(struct!.npuFastpath),
    nst: cdktf.stringToTerraform(struct!.nst),
    out_force_vlan_cos: cdktf.numberToTerraform(struct!.outForceVlanCos),
    outbandwidth: cdktf.numberToTerraform(struct!.outbandwidth),
    padt_retry_timeout: cdktf.numberToTerraform(struct!.padtRetryTimeout),
    password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.password),
    peer_interface: cdktf.stringToTerraform(struct!.peerInterface),
    phy_mode: cdktf.stringToTerraform(struct!.phyMode),
    ping_serv_status: cdktf.numberToTerraform(struct!.pingServStatus),
    poe: cdktf.stringToTerraform(struct!.poe),
    polling_interval: cdktf.numberToTerraform(struct!.pollingInterval),
    port_mirroring: cdktf.stringToTerraform(struct!.portMirroring),
    pppoe_unnumbered_negotiate: cdktf.stringToTerraform(struct!.pppoeUnnumberedNegotiate),
    pptp_auth_type: cdktf.stringToTerraform(struct!.pptpAuthType),
    pptp_client: cdktf.stringToTerraform(struct!.pptpClient),
    pptp_password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pptpPassword),
    pptp_server_ip: cdktf.stringToTerraform(struct!.pptpServerIp),
    pptp_timeout: cdktf.numberToTerraform(struct!.pptpTimeout),
    pptp_user: cdktf.stringToTerraform(struct!.pptpUser),
    preserve_session_route: cdktf.stringToTerraform(struct!.preserveSessionRoute),
    priority: cdktf.numberToTerraform(struct!.priority),
    priority_override: cdktf.stringToTerraform(struct!.priorityOverride),
    proxy_captive_portal: cdktf.stringToTerraform(struct!.proxyCaptivePortal),
    pvc_atm_qos: cdktf.stringToTerraform(struct!.pvcAtmQos),
    pvc_chan: cdktf.numberToTerraform(struct!.pvcChan),
    pvc_crc: cdktf.numberToTerraform(struct!.pvcCrc),
    pvc_pcr: cdktf.numberToTerraform(struct!.pvcPcr),
    pvc_scr: cdktf.numberToTerraform(struct!.pvcScr),
    pvc_vlan_id: cdktf.numberToTerraform(struct!.pvcVlanId),
    pvc_vlan_rx_id: cdktf.numberToTerraform(struct!.pvcVlanRxId),
    pvc_vlan_rx_op: cdktf.stringToTerraform(struct!.pvcVlanRxOp),
    pvc_vlan_tx_id: cdktf.numberToTerraform(struct!.pvcVlanTxId),
    pvc_vlan_tx_op: cdktf.stringToTerraform(struct!.pvcVlanTxOp),
    reachable_time: cdktf.numberToTerraform(struct!.reachableTime),
    redundant_interface: cdktf.stringToTerraform(struct!.redundantInterface),
    remote_ip: cdktf.stringToTerraform(struct!.remoteIp),
    replacemsg_override_group: cdktf.stringToTerraform(struct!.replacemsgOverrideGroup),
    retransmission: cdktf.stringToTerraform(struct!.retransmission),
    ring_rx: cdktf.numberToTerraform(struct!.ringRx),
    ring_tx: cdktf.numberToTerraform(struct!.ringTx),
    role: cdktf.stringToTerraform(struct!.role),
    sample_direction: cdktf.stringToTerraform(struct!.sampleDirection),
    sample_rate: cdktf.numberToTerraform(struct!.sampleRate),
    scan_botnet_connections: cdktf.stringToTerraform(struct!.scanBotnetConnections),
    secondary_ip: cdktf.stringToTerraform(struct!.secondaryIp),
    security_8021x_dynamic_vlan_id: cdktf.numberToTerraform(struct!.security8021XDynamicVlanId),
    security_8021x_master: cdktf.stringToTerraform(struct!.security8021XMaster),
    security_8021x_member_mode: cdktf.stringToTerraform(struct!.security8021XMemberMode),
    security_8021x_mode: cdktf.stringToTerraform(struct!.security8021XMode),
    security_exempt_list: cdktf.stringToTerraform(struct!.securityExemptList),
    security_external_logout: cdktf.stringToTerraform(struct!.securityExternalLogout),
    security_external_web: cdktf.stringToTerraform(struct!.securityExternalWeb),
    security_groups: cdktf.stringToTerraform(struct!.securityGroups),
    security_mac_auth_bypass: cdktf.stringToTerraform(struct!.securityMacAuthBypass),
    security_mode: cdktf.stringToTerraform(struct!.securityMode),
    security_redirect_url: cdktf.stringToTerraform(struct!.securityRedirectUrl),
    select_profile_30a_35b: cdktf.stringToTerraform(struct!.selectProfile30A35B),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    sflow_sampler: cdktf.stringToTerraform(struct!.sflowSampler),
    sfp_dsl: cdktf.stringToTerraform(struct!.sfpDsl),
    sfp_dsl_adsl_fallback: cdktf.stringToTerraform(struct!.sfpDslAdslFallback),
    sfp_dsl_autodetect: cdktf.stringToTerraform(struct!.sfpDslAutodetect),
    sfp_dsl_mac: cdktf.stringToTerraform(struct!.sfpDslMac),
    speed: cdktf.stringToTerraform(struct!.speed),
    spillover_threshold: cdktf.numberToTerraform(struct!.spilloverThreshold),
    src_check: cdktf.stringToTerraform(struct!.srcCheck),
    status: cdktf.stringToTerraform(struct!.status),
    stp: cdktf.stringToTerraform(struct!.stp),
    stp_edge: cdktf.stringToTerraform(struct!.stpEdge),
    stp_ha_secondary: cdktf.stringToTerraform(struct!.stpHaSecondary),
    stp_ha_slave: cdktf.stringToTerraform(struct!.stpHaSlave),
    stpforward: cdktf.stringToTerraform(struct!.stpforward),
    stpforward_mode: cdktf.stringToTerraform(struct!.stpforwardMode),
    strip_priority_vlan_tag: cdktf.stringToTerraform(struct!.stripPriorityVlanTag),
    subst: cdktf.stringToTerraform(struct!.subst),
    substitute_dst_mac: cdktf.stringToTerraform(struct!.substituteDstMac),
    sw_algorithm: cdktf.stringToTerraform(struct!.swAlgorithm),
    swc_first_create: cdktf.numberToTerraform(struct!.swcFirstCreate),
    swc_vlan: cdktf.numberToTerraform(struct!.swcVlan),
    switch: cdktf.stringToTerraform(struct!.switch),
    switch_controller_access_vlan: cdktf.stringToTerraform(struct!.switchControllerAccessVlan),
    switch_controller_arp_inspection: cdktf.stringToTerraform(struct!.switchControllerArpInspection),
    switch_controller_auth: cdktf.stringToTerraform(struct!.switchControllerAuth),
    switch_controller_dhcp_snooping: cdktf.stringToTerraform(struct!.switchControllerDhcpSnooping),
    switch_controller_dhcp_snooping_option82: cdktf.stringToTerraform(struct!.switchControllerDhcpSnoopingOption82),
    switch_controller_dhcp_snooping_verify_mac: cdktf.stringToTerraform(struct!.switchControllerDhcpSnoopingVerifyMac),
    switch_controller_dynamic: cdktf.stringToTerraform(struct!.switchControllerDynamic),
    switch_controller_feature: cdktf.stringToTerraform(struct!.switchControllerFeature),
    switch_controller_igmp_snooping: cdktf.stringToTerraform(struct!.switchControllerIgmpSnooping),
    switch_controller_igmp_snooping_fast_leave: cdktf.stringToTerraform(struct!.switchControllerIgmpSnoopingFastLeave),
    switch_controller_igmp_snooping_proxy: cdktf.stringToTerraform(struct!.switchControllerIgmpSnoopingProxy),
    switch_controller_iot_scanning: cdktf.stringToTerraform(struct!.switchControllerIotScanning),
    switch_controller_learning_limit: cdktf.numberToTerraform(struct!.switchControllerLearningLimit),
    switch_controller_mgmt_vlan: cdktf.numberToTerraform(struct!.switchControllerMgmtVlan),
    switch_controller_nac: cdktf.stringToTerraform(struct!.switchControllerNac),
    switch_controller_netflow_collect: cdktf.stringToTerraform(struct!.switchControllerNetflowCollect),
    switch_controller_offload: cdktf.stringToTerraform(struct!.switchControllerOffload),
    switch_controller_offload_gw: cdktf.stringToTerraform(struct!.switchControllerOffloadGw),
    switch_controller_offload_ip: cdktf.stringToTerraform(struct!.switchControllerOffloadIp),
    switch_controller_offloading: cdktf.stringToTerraform(struct!.switchControllerOffloading),
    switch_controller_offloading_gw: cdktf.stringToTerraform(struct!.switchControllerOffloadingGw),
    switch_controller_offloading_ip: cdktf.stringToTerraform(struct!.switchControllerOffloadingIp),
    switch_controller_radius_server: cdktf.stringToTerraform(struct!.switchControllerRadiusServer),
    switch_controller_rspan_mode: cdktf.stringToTerraform(struct!.switchControllerRspanMode),
    switch_controller_source_ip: cdktf.stringToTerraform(struct!.switchControllerSourceIp),
    switch_controller_traffic_policy: cdktf.stringToTerraform(struct!.switchControllerTrafficPolicy),
    system_id: cdktf.stringToTerraform(struct!.systemId),
    system_id_type: cdktf.stringToTerraform(struct!.systemIdType),
    tc_mode: cdktf.stringToTerraform(struct!.tcMode),
    tcp_mss: cdktf.numberToTerraform(struct!.tcpMss),
    trunk: cdktf.stringToTerraform(struct!.trunk),
    trust_ip6_1: cdktf.stringToTerraform(struct!.trustIp61),
    trust_ip6_2: cdktf.stringToTerraform(struct!.trustIp62),
    trust_ip6_3: cdktf.stringToTerraform(struct!.trustIp63),
    trust_ip_1: cdktf.stringToTerraform(struct!.trustIp1),
    trust_ip_2: cdktf.stringToTerraform(struct!.trustIp2),
    trust_ip_3: cdktf.stringToTerraform(struct!.trustIp3),
    type: cdktf.stringToTerraform(struct!.type),
    username: cdktf.stringToTerraform(struct!.username),
    vci: cdktf.numberToTerraform(struct!.vci),
    vectoring: cdktf.stringToTerraform(struct!.vectoring),
    vindex: cdktf.numberToTerraform(struct!.vindex),
    vlan_op_mode: cdktf.stringToTerraform(struct!.vlanOpMode),
    vlan_protocol: cdktf.stringToTerraform(struct!.vlanProtocol),
    vlanforward: cdktf.stringToTerraform(struct!.vlanforward),
    vlanid: cdktf.numberToTerraform(struct!.vlanid),
    vpi: cdktf.numberToTerraform(struct!.vpi),
    vrf: cdktf.numberToTerraform(struct!.vrf),
    vrrp_virtual_mac: cdktf.stringToTerraform(struct!.vrrpVirtualMac),
    wccp: cdktf.stringToTerraform(struct!.wccp),
    weight: cdktf.numberToTerraform(struct!.weight),
    wifi_5g_threshold: cdktf.stringToTerraform(struct!.wifi5GThreshold),
    wifi_acl: cdktf.stringToTerraform(struct!.wifiAcl),
    wifi_ap_band: cdktf.stringToTerraform(struct!.wifiApBand),
    wifi_auth: cdktf.stringToTerraform(struct!.wifiAuth),
    wifi_auto_connect: cdktf.stringToTerraform(struct!.wifiAutoConnect),
    wifi_auto_save: cdktf.stringToTerraform(struct!.wifiAutoSave),
    wifi_broadcast_ssid: cdktf.stringToTerraform(struct!.wifiBroadcastSsid),
    wifi_dns_server1: cdktf.stringToTerraform(struct!.wifiDnsServer1),
    wifi_dns_server2: cdktf.stringToTerraform(struct!.wifiDnsServer2),
    wifi_encrypt: cdktf.stringToTerraform(struct!.wifiEncrypt),
    wifi_fragment_threshold: cdktf.numberToTerraform(struct!.wifiFragmentThreshold),
    wifi_gateway: cdktf.stringToTerraform(struct!.wifiGateway),
    wifi_key: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.wifiKey),
    wifi_keyindex: cdktf.numberToTerraform(struct!.wifiKeyindex),
    wifi_mac_filter: cdktf.stringToTerraform(struct!.wifiMacFilter),
    wifi_passphrase: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.wifiPassphrase),
    wifi_radius_server: cdktf.stringToTerraform(struct!.wifiRadiusServer),
    wifi_rts_threshold: cdktf.numberToTerraform(struct!.wifiRtsThreshold),
    wifi_security: cdktf.stringToTerraform(struct!.wifiSecurity),
    wifi_ssid: cdktf.stringToTerraform(struct!.wifiSsid),
    wifi_usergroup: cdktf.stringToTerraform(struct!.wifiUsergroup),
    wins_ip: cdktf.stringToTerraform(struct!.winsIp),
    ipv6: objectFspVlanInterfaceIpv6ToTerraform(struct!.ipv6),
    secondaryip: cdktf.listMapper(objectFspVlanInterfaceSecondaryipToTerraform, true)(struct!.secondaryip),
    vrrp: cdktf.listMapper(objectFspVlanInterfaceVrrpToTerraform, true)(struct!.vrrp),
  }
}


export function objectFspVlanInterfaceToHclTerraform(struct?: ObjectFspVlanInterfaceOutputReference | ObjectFspVlanInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ac_name: {
      value: cdktf.stringToHclTerraform(struct!.acName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aggregate: {
      value: cdktf.stringToHclTerraform(struct!.aggregate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aggregate_type: {
      value: cdktf.stringToHclTerraform(struct!.aggregateType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowaccess: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowaccess),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    annex: {
      value: cdktf.stringToHclTerraform(struct!.annex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ap_discover: {
      value: cdktf.stringToHclTerraform(struct!.apDiscover),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arpforward: {
      value: cdktf.stringToHclTerraform(struct!.arpforward),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    atm_protocol: {
      value: cdktf.stringToHclTerraform(struct!.atmProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_cert: {
      value: cdktf.stringToHclTerraform(struct!.authCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_portal_addr: {
      value: cdktf.stringToHclTerraform(struct!.authPortalAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_auth_extension_device: {
      value: cdktf.stringToHclTerraform(struct!.autoAuthExtensionDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth_measure_time: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthMeasureTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd: {
      value: cdktf.stringToHclTerraform(struct!.bfd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bfd_desired_min_tx: {
      value: cdktf.numberToHclTerraform(struct!.bfdDesiredMinTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd_detect_mult: {
      value: cdktf.numberToHclTerraform(struct!.bfdDetectMult),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd_required_min_rx: {
      value: cdktf.numberToHclTerraform(struct!.bfdRequiredMinRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    broadcast_forticlient_discovery: {
      value: cdktf.stringToHclTerraform(struct!.broadcastForticlientDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    broadcast_forward: {
      value: cdktf.stringToHclTerraform(struct!.broadcastForward),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    captive_portal: {
      value: cdktf.numberToHclTerraform(struct!.captivePortal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cli_conn_status: {
      value: cdktf.numberToHclTerraform(struct!.cliConnStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    color: {
      value: cdktf.numberToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddns: {
      value: cdktf.stringToHclTerraform(struct!.ddns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_auth: {
      value: cdktf.stringToHclTerraform(struct!.ddnsAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_domain: {
      value: cdktf.stringToHclTerraform(struct!.ddnsDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_key: {
      value: cdktf.stringToHclTerraform(struct!.ddnsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_keyname: {
      value: cdktf.stringToHclTerraform(struct!.ddnsKeyname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_password: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ddnsPassword),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ddns_server: {
      value: cdktf.stringToHclTerraform(struct!.ddnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_server_ip: {
      value: cdktf.stringToHclTerraform(struct!.ddnsServerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_sn: {
      value: cdktf.stringToHclTerraform(struct!.ddnsSn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_ttl: {
      value: cdktf.numberToHclTerraform(struct!.ddnsTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddns_username: {
      value: cdktf.stringToHclTerraform(struct!.ddnsUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_zone: {
      value: cdktf.stringToHclTerraform(struct!.ddnsZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dedicated_to: {
      value: cdktf.stringToHclTerraform(struct!.dedicatedTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_purdue_level: {
      value: cdktf.stringToHclTerraform(struct!.defaultPurdueLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    defaultgw: {
      value: cdktf.stringToHclTerraform(struct!.defaultgw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detected_peer_mtu: {
      value: cdktf.numberToHclTerraform(struct!.detectedPeerMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    detectprotocol: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.detectprotocol),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    detectserver: {
      value: cdktf.stringToHclTerraform(struct!.detectserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_access_list: {
      value: cdktf.stringToHclTerraform(struct!.deviceAccessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_identification: {
      value: cdktf.stringToHclTerraform(struct!.deviceIdentification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_identification_active_scan: {
      value: cdktf.stringToHclTerraform(struct!.deviceIdentificationActiveScan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_netscan: {
      value: cdktf.stringToHclTerraform(struct!.deviceNetscan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_user_identification: {
      value: cdktf.stringToHclTerraform(struct!.deviceUserIdentification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    devindex: {
      value: cdktf.numberToHclTerraform(struct!.devindex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dhcp_broadcast_flag: {
      value: cdktf.stringToHclTerraform(struct!.dhcpBroadcastFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_classless_route_addition: {
      value: cdktf.stringToHclTerraform(struct!.dhcpClasslessRouteAddition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_client_identifier: {
      value: cdktf.stringToHclTerraform(struct!.dhcpClientIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_relay_agent_option: {
      value: cdktf.stringToHclTerraform(struct!.dhcpRelayAgentOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_relay_circuit_id: {
      value: cdktf.stringToHclTerraform(struct!.dhcpRelayCircuitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_relay_interface: {
      value: cdktf.stringToHclTerraform(struct!.dhcpRelayInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_relay_interface_select_method: {
      value: cdktf.stringToHclTerraform(struct!.dhcpRelayInterfaceSelectMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_relay_ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dhcpRelayIp),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    dhcp_relay_link_selection: {
      value: cdktf.stringToHclTerraform(struct!.dhcpRelayLinkSelection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_relay_request_all_server: {
      value: cdktf.stringToHclTerraform(struct!.dhcpRelayRequestAllServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_relay_service: {
      value: cdktf.stringToHclTerraform(struct!.dhcpRelayService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_relay_source_ip: {
      value: cdktf.stringToHclTerraform(struct!.dhcpRelaySourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_relay_type: {
      value: cdktf.stringToHclTerraform(struct!.dhcpRelayType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_renew_time: {
      value: cdktf.numberToHclTerraform(struct!.dhcpRenewTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dhcp_smart_relay: {
      value: cdktf.stringToHclTerraform(struct!.dhcpSmartRelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disc_retry_timeout: {
      value: cdktf.numberToHclTerraform(struct!.discRetryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disconnect_threshold: {
      value: cdktf.numberToHclTerraform(struct!.disconnectThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    distance: {
      value: cdktf.numberToHclTerraform(struct!.distance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_query: {
      value: cdktf.stringToHclTerraform(struct!.dnsQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server_override: {
      value: cdktf.stringToHclTerraform(struct!.dnsServerOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server_protocol: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsServerProtocol),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    drop_fragment: {
      value: cdktf.stringToHclTerraform(struct!.dropFragment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drop_overlapped_fragment: {
      value: cdktf.stringToHclTerraform(struct!.dropOverlappedFragment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eap_ca_cert: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eapCaCert),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    eap_identity: {
      value: cdktf.stringToHclTerraform(struct!.eapIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eap_method: {
      value: cdktf.stringToHclTerraform(struct!.eapMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eap_password: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eapPassword),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    eap_supplicant: {
      value: cdktf.stringToHclTerraform(struct!.eapSupplicant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eap_user_cert: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eapUserCert),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    egress_cos: {
      value: cdktf.stringToHclTerraform(struct!.egressCos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress_shaping_profile: {
      value: cdktf.stringToHclTerraform(struct!.egressShapingProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eip: {
      value: cdktf.stringToHclTerraform(struct!.eip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_compliance: {
      value: cdktf.stringToHclTerraform(struct!.endpointCompliance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    estimated_downstream_bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.estimatedDownstreamBandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    estimated_upstream_bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.estimatedUpstreamBandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    explicit_ftp_proxy: {
      value: cdktf.stringToHclTerraform(struct!.explicitFtpProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    explicit_web_proxy: {
      value: cdktf.stringToHclTerraform(struct!.explicitWebProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external: {
      value: cdktf.stringToHclTerraform(struct!.external),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_action_on_extender: {
      value: cdktf.stringToHclTerraform(struct!.failActionOnExtender),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_alert_interfaces: {
      value: cdktf.stringToHclTerraform(struct!.failAlertInterfaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_alert_method: {
      value: cdktf.stringToHclTerraform(struct!.failAlertMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_detect: {
      value: cdktf.stringToHclTerraform(struct!.failDetect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_detect_option: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.failDetectOption),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    fdp: {
      value: cdktf.stringToHclTerraform(struct!.fdp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortiheartbeat: {
      value: cdktf.stringToHclTerraform(struct!.fortiheartbeat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortilink: {
      value: cdktf.stringToHclTerraform(struct!.fortilink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortilink_backup_link: {
      value: cdktf.numberToHclTerraform(struct!.fortilinkBackupLink),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fortilink_neighbor_detect: {
      value: cdktf.stringToHclTerraform(struct!.fortilinkNeighborDetect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortilink_split_interface: {
      value: cdktf.stringToHclTerraform(struct!.fortilinkSplitInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortilink_stacking: {
      value: cdktf.stringToHclTerraform(struct!.fortilinkStacking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forward_domain: {
      value: cdktf.numberToHclTerraform(struct!.forwardDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forward_error_correction: {
      value: cdktf.stringToHclTerraform(struct!.forwardErrorCorrection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fp_anomaly: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fpAnomaly),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    fp_disable: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fpDisable),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    gateway_address: {
      value: cdktf.stringToHclTerraform(struct!.gatewayAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generic_receive_offload: {
      value: cdktf.stringToHclTerraform(struct!.genericReceiveOffload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gi_gk: {
      value: cdktf.stringToHclTerraform(struct!.giGk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gwaddr: {
      value: cdktf.stringToHclTerraform(struct!.gwaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gwdetect: {
      value: cdktf.stringToHclTerraform(struct!.gwdetect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ha_priority: {
      value: cdktf.numberToHclTerraform(struct!.haPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_accept_redirect: {
      value: cdktf.stringToHclTerraform(struct!.icmpAcceptRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_redirect: {
      value: cdktf.stringToHclTerraform(struct!.icmpRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_send_redirect: {
      value: cdktf.stringToHclTerraform(struct!.icmpSendRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ident_accept: {
      value: cdktf.stringToHclTerraform(struct!.identAccept),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    if_mdix: {
      value: cdktf.stringToHclTerraform(struct!.ifMdix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    if_media: {
      value: cdktf.stringToHclTerraform(struct!.ifMedia),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_saml_server: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ikeSamlServer),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    in_force_vlan_cos: {
      value: cdktf.numberToHclTerraform(struct!.inForceVlanCos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbandwidth: {
      value: cdktf.numberToHclTerraform(struct!.inbandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ingress_cos: {
      value: cdktf.stringToHclTerraform(struct!.ingressCos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_shaping_profile: {
      value: cdktf.stringToHclTerraform(struct!.ingressShapingProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_spillover_threshold: {
      value: cdktf.numberToHclTerraform(struct!.ingressSpilloverThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interconnect_profile: {
      value: cdktf.stringToHclTerraform(struct!.interconnectProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internal: {
      value: cdktf.numberToHclTerraform(struct!.internal),
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
    ip_managed_by_fortiipam: {
      value: cdktf.stringToHclTerraform(struct!.ipManagedByFortiipam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipmac: {
      value: cdktf.stringToHclTerraform(struct!.ipmac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ips_sniffer_mode: {
      value: cdktf.stringToHclTerraform(struct!.ipsSnifferMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipunnumbered: {
      value: cdktf.stringToHclTerraform(struct!.ipunnumbered),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l2forward: {
      value: cdktf.stringToHclTerraform(struct!.l2Forward),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    l2tp_client: {
      value: cdktf.stringToHclTerraform(struct!.l2TpClient),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lacp_ha_secondary: {
      value: cdktf.stringToHclTerraform(struct!.lacpHaSecondary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lacp_ha_slave: {
      value: cdktf.stringToHclTerraform(struct!.lacpHaSlave),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lacp_mode: {
      value: cdktf.stringToHclTerraform(struct!.lacpMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lacp_speed: {
      value: cdktf.stringToHclTerraform(struct!.lacpSpeed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    large_receive_offload: {
      value: cdktf.stringToHclTerraform(struct!.largeReceiveOffload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lcp_echo_interval: {
      value: cdktf.numberToHclTerraform(struct!.lcpEchoInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lcp_max_echo_fails: {
      value: cdktf.numberToHclTerraform(struct!.lcpMaxEchoFails),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_up_delay: {
      value: cdktf.numberToHclTerraform(struct!.linkUpDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    listen_forticlient_connection: {
      value: cdktf.stringToHclTerraform(struct!.listenForticlientConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lldp_network_policy: {
      value: cdktf.stringToHclTerraform(struct!.lldpNetworkPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lldp_reception: {
      value: cdktf.stringToHclTerraform(struct!.lldpReception),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lldp_transmission: {
      value: cdktf.stringToHclTerraform(struct!.lldpTransmission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    macaddr: {
      value: cdktf.stringToHclTerraform(struct!.macaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_subnetwork_size: {
      value: cdktf.stringToHclTerraform(struct!.managedSubnetworkSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_ip: {
      value: cdktf.stringToHclTerraform(struct!.managementIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_egress_burst_rate: {
      value: cdktf.numberToHclTerraform(struct!.maxEgressBurstRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_egress_rate: {
      value: cdktf.numberToHclTerraform(struct!.maxEgressRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    measured_downstream_bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.measuredDownstreamBandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    measured_upstream_bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.measuredUpstreamBandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mediatype: {
      value: cdktf.stringToHclTerraform(struct!.mediatype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member: {
      value: cdktf.stringToHclTerraform(struct!.member),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_links: {
      value: cdktf.numberToHclTerraform(struct!.minLinks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_links_down: {
      value: cdktf.stringToHclTerraform(struct!.minLinksDown),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mirroring_direction: {
      value: cdktf.stringToHclTerraform(struct!.mirroringDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mirroring_port: {
      value: cdktf.stringToHclTerraform(struct!.mirroringPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor_bandwidth: {
      value: cdktf.stringToHclTerraform(struct!.monitorBandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtu_override: {
      value: cdktf.stringToHclTerraform(struct!.mtuOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mux_type: {
      value: cdktf.stringToHclTerraform(struct!.muxType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ndiscforward: {
      value: cdktf.stringToHclTerraform(struct!.ndiscforward),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netbios_forward: {
      value: cdktf.stringToHclTerraform(struct!.netbiosForward),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netflow_sampler: {
      value: cdktf.stringToHclTerraform(struct!.netflowSampler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    np_qos_profile: {
      value: cdktf.numberToHclTerraform(struct!.npQosProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    npu_fastpath: {
      value: cdktf.stringToHclTerraform(struct!.npuFastpath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nst: {
      value: cdktf.stringToHclTerraform(struct!.nst),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    out_force_vlan_cos: {
      value: cdktf.numberToHclTerraform(struct!.outForceVlanCos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbandwidth: {
      value: cdktf.numberToHclTerraform(struct!.outbandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    padt_retry_timeout: {
      value: cdktf.numberToHclTerraform(struct!.padtRetryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.password),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    peer_interface: {
      value: cdktf.stringToHclTerraform(struct!.peerInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phy_mode: {
      value: cdktf.stringToHclTerraform(struct!.phyMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ping_serv_status: {
      value: cdktf.numberToHclTerraform(struct!.pingServStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    poe: {
      value: cdktf.stringToHclTerraform(struct!.poe),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.pollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_mirroring: {
      value: cdktf.stringToHclTerraform(struct!.portMirroring),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pppoe_unnumbered_negotiate: {
      value: cdktf.stringToHclTerraform(struct!.pppoeUnnumberedNegotiate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pptp_auth_type: {
      value: cdktf.stringToHclTerraform(struct!.pptpAuthType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pptp_client: {
      value: cdktf.stringToHclTerraform(struct!.pptpClient),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pptp_password: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pptpPassword),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    pptp_server_ip: {
      value: cdktf.stringToHclTerraform(struct!.pptpServerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pptp_timeout: {
      value: cdktf.numberToHclTerraform(struct!.pptpTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pptp_user: {
      value: cdktf.stringToHclTerraform(struct!.pptpUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preserve_session_route: {
      value: cdktf.stringToHclTerraform(struct!.preserveSessionRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_override: {
      value: cdktf.stringToHclTerraform(struct!.priorityOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_captive_portal: {
      value: cdktf.stringToHclTerraform(struct!.proxyCaptivePortal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pvc_atm_qos: {
      value: cdktf.stringToHclTerraform(struct!.pvcAtmQos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pvc_chan: {
      value: cdktf.numberToHclTerraform(struct!.pvcChan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pvc_crc: {
      value: cdktf.numberToHclTerraform(struct!.pvcCrc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pvc_pcr: {
      value: cdktf.numberToHclTerraform(struct!.pvcPcr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pvc_scr: {
      value: cdktf.numberToHclTerraform(struct!.pvcScr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pvc_vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.pvcVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pvc_vlan_rx_id: {
      value: cdktf.numberToHclTerraform(struct!.pvcVlanRxId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pvc_vlan_rx_op: {
      value: cdktf.stringToHclTerraform(struct!.pvcVlanRxOp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pvc_vlan_tx_id: {
      value: cdktf.numberToHclTerraform(struct!.pvcVlanTxId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pvc_vlan_tx_op: {
      value: cdktf.stringToHclTerraform(struct!.pvcVlanTxOp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reachable_time: {
      value: cdktf.numberToHclTerraform(struct!.reachableTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redundant_interface: {
      value: cdktf.stringToHclTerraform(struct!.redundantInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ip: {
      value: cdktf.stringToHclTerraform(struct!.remoteIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replacemsg_override_group: {
      value: cdktf.stringToHclTerraform(struct!.replacemsgOverrideGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retransmission: {
      value: cdktf.stringToHclTerraform(struct!.retransmission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ring_rx: {
      value: cdktf.numberToHclTerraform(struct!.ringRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ring_tx: {
      value: cdktf.numberToHclTerraform(struct!.ringTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_direction: {
      value: cdktf.stringToHclTerraform(struct!.sampleDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_rate: {
      value: cdktf.numberToHclTerraform(struct!.sampleRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scan_botnet_connections: {
      value: cdktf.stringToHclTerraform(struct!.scanBotnetConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_ip: {
      value: cdktf.stringToHclTerraform(struct!.secondaryIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_8021x_dynamic_vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.security8021XDynamicVlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    security_8021x_master: {
      value: cdktf.stringToHclTerraform(struct!.security8021XMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_8021x_member_mode: {
      value: cdktf.stringToHclTerraform(struct!.security8021XMemberMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_8021x_mode: {
      value: cdktf.stringToHclTerraform(struct!.security8021XMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_exempt_list: {
      value: cdktf.stringToHclTerraform(struct!.securityExemptList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_external_logout: {
      value: cdktf.stringToHclTerraform(struct!.securityExternalLogout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_external_web: {
      value: cdktf.stringToHclTerraform(struct!.securityExternalWeb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups: {
      value: cdktf.stringToHclTerraform(struct!.securityGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_mac_auth_bypass: {
      value: cdktf.stringToHclTerraform(struct!.securityMacAuthBypass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_mode: {
      value: cdktf.stringToHclTerraform(struct!.securityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_redirect_url: {
      value: cdktf.stringToHclTerraform(struct!.securityRedirectUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    select_profile_30a_35b: {
      value: cdktf.stringToHclTerraform(struct!.selectProfile30A35B),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sflow_sampler: {
      value: cdktf.stringToHclTerraform(struct!.sflowSampler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sfp_dsl: {
      value: cdktf.stringToHclTerraform(struct!.sfpDsl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sfp_dsl_adsl_fallback: {
      value: cdktf.stringToHclTerraform(struct!.sfpDslAdslFallback),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sfp_dsl_autodetect: {
      value: cdktf.stringToHclTerraform(struct!.sfpDslAutodetect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sfp_dsl_mac: {
      value: cdktf.stringToHclTerraform(struct!.sfpDslMac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    speed: {
      value: cdktf.stringToHclTerraform(struct!.speed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spillover_threshold: {
      value: cdktf.numberToHclTerraform(struct!.spilloverThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_check: {
      value: cdktf.stringToHclTerraform(struct!.srcCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stp: {
      value: cdktf.stringToHclTerraform(struct!.stp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stp_edge: {
      value: cdktf.stringToHclTerraform(struct!.stpEdge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stp_ha_secondary: {
      value: cdktf.stringToHclTerraform(struct!.stpHaSecondary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stp_ha_slave: {
      value: cdktf.stringToHclTerraform(struct!.stpHaSlave),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stpforward: {
      value: cdktf.stringToHclTerraform(struct!.stpforward),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stpforward_mode: {
      value: cdktf.stringToHclTerraform(struct!.stpforwardMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strip_priority_vlan_tag: {
      value: cdktf.stringToHclTerraform(struct!.stripPriorityVlanTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subst: {
      value: cdktf.stringToHclTerraform(struct!.subst),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    substitute_dst_mac: {
      value: cdktf.stringToHclTerraform(struct!.substituteDstMac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sw_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.swAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    swc_first_create: {
      value: cdktf.numberToHclTerraform(struct!.swcFirstCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    swc_vlan: {
      value: cdktf.numberToHclTerraform(struct!.swcVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_controller_access_vlan: {
      value: cdktf.stringToHclTerraform(struct!.switchControllerAccessVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_controller_arp_inspection: {
      value: cdktf.stringToHclTerraform(struct!.switchControllerArpInspection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_controller_auth: {
      value: cdktf.stringToHclTerraform(struct!.switchControllerAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_controller_dhcp_snooping: {
      value: cdktf.stringToHclTerraform(struct!.switchControllerDhcpSnooping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_controller_dhcp_snooping_option82: {
      value: cdktf.stringToHclTerraform(struct!.switchControllerDhcpSnoopingOption82),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_controller_dhcp_snooping_verify_mac: {
      value: cdktf.stringToHclTerraform(struct!.switchControllerDhcpSnoopingVerifyMac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_controller_dynamic: {
      value: cdktf.stringToHclTerraform(struct!.switchControllerDynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_controller_feature: {
      value: cdktf.stringToHclTerraform(struct!.switchControllerFeature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_controller_igmp_snooping: {
      value: cdktf.stringToHclTerraform(struct!.switchControllerIgmpSnooping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_controller_igmp_snooping_fast_leave: {
      value: cdktf.stringToHclTerraform(struct!.switchControllerIgmpSnoopingFastLeave),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_controller_igmp_snooping_proxy: {
      value: cdktf.stringToHclTerraform(struct!.switchControllerIgmpSnoopingProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_controller_iot_scanning: {
      value: cdktf.stringToHclTerraform(struct!.switchControllerIotScanning),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_controller_learning_limit: {
      value: cdktf.numberToHclTerraform(struct!.switchControllerLearningLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch_controller_mgmt_vlan: {
      value: cdktf.numberToHclTerraform(struct!.switchControllerMgmtVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch_controller_nac: {
      value: cdktf.stringToHclTerraform(struct!.switchControllerNac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_controller_netflow_collect: {
      value: cdktf.stringToHclTerraform(struct!.switchControllerNetflowCollect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_controller_offload: {
      value: cdktf.stringToHclTerraform(struct!.switchControllerOffload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_controller_offload_gw: {
      value: cdktf.stringToHclTerraform(struct!.switchControllerOffloadGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_controller_offload_ip: {
      value: cdktf.stringToHclTerraform(struct!.switchControllerOffloadIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_controller_offloading: {
      value: cdktf.stringToHclTerraform(struct!.switchControllerOffloading),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_controller_offloading_gw: {
      value: cdktf.stringToHclTerraform(struct!.switchControllerOffloadingGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_controller_offloading_ip: {
      value: cdktf.stringToHclTerraform(struct!.switchControllerOffloadingIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_controller_radius_server: {
      value: cdktf.stringToHclTerraform(struct!.switchControllerRadiusServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_controller_rspan_mode: {
      value: cdktf.stringToHclTerraform(struct!.switchControllerRspanMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_controller_source_ip: {
      value: cdktf.stringToHclTerraform(struct!.switchControllerSourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_controller_traffic_policy: {
      value: cdktf.stringToHclTerraform(struct!.switchControllerTrafficPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_id: {
      value: cdktf.stringToHclTerraform(struct!.systemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_id_type: {
      value: cdktf.stringToHclTerraform(struct!.systemIdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tc_mode: {
      value: cdktf.stringToHclTerraform(struct!.tcMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_mss: {
      value: cdktf.numberToHclTerraform(struct!.tcpMss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trunk: {
      value: cdktf.stringToHclTerraform(struct!.trunk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_ip6_1: {
      value: cdktf.stringToHclTerraform(struct!.trustIp61),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_ip6_2: {
      value: cdktf.stringToHclTerraform(struct!.trustIp62),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_ip6_3: {
      value: cdktf.stringToHclTerraform(struct!.trustIp63),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_ip_1: {
      value: cdktf.stringToHclTerraform(struct!.trustIp1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_ip_2: {
      value: cdktf.stringToHclTerraform(struct!.trustIp2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_ip_3: {
      value: cdktf.stringToHclTerraform(struct!.trustIp3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vci: {
      value: cdktf.numberToHclTerraform(struct!.vci),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vectoring: {
      value: cdktf.stringToHclTerraform(struct!.vectoring),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vindex: {
      value: cdktf.numberToHclTerraform(struct!.vindex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_op_mode: {
      value: cdktf.stringToHclTerraform(struct!.vlanOpMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_protocol: {
      value: cdktf.stringToHclTerraform(struct!.vlanProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlanforward: {
      value: cdktf.stringToHclTerraform(struct!.vlanforward),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlanid: {
      value: cdktf.numberToHclTerraform(struct!.vlanid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpi: {
      value: cdktf.numberToHclTerraform(struct!.vpi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrf: {
      value: cdktf.numberToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrrp_virtual_mac: {
      value: cdktf.stringToHclTerraform(struct!.vrrpVirtualMac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wccp: {
      value: cdktf.stringToHclTerraform(struct!.wccp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wifi_5g_threshold: {
      value: cdktf.stringToHclTerraform(struct!.wifi5GThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wifi_acl: {
      value: cdktf.stringToHclTerraform(struct!.wifiAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wifi_ap_band: {
      value: cdktf.stringToHclTerraform(struct!.wifiApBand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wifi_auth: {
      value: cdktf.stringToHclTerraform(struct!.wifiAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wifi_auto_connect: {
      value: cdktf.stringToHclTerraform(struct!.wifiAutoConnect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wifi_auto_save: {
      value: cdktf.stringToHclTerraform(struct!.wifiAutoSave),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wifi_broadcast_ssid: {
      value: cdktf.stringToHclTerraform(struct!.wifiBroadcastSsid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wifi_dns_server1: {
      value: cdktf.stringToHclTerraform(struct!.wifiDnsServer1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wifi_dns_server2: {
      value: cdktf.stringToHclTerraform(struct!.wifiDnsServer2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wifi_encrypt: {
      value: cdktf.stringToHclTerraform(struct!.wifiEncrypt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wifi_fragment_threshold: {
      value: cdktf.numberToHclTerraform(struct!.wifiFragmentThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wifi_gateway: {
      value: cdktf.stringToHclTerraform(struct!.wifiGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wifi_key: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.wifiKey),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    wifi_keyindex: {
      value: cdktf.numberToHclTerraform(struct!.wifiKeyindex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wifi_mac_filter: {
      value: cdktf.stringToHclTerraform(struct!.wifiMacFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wifi_passphrase: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.wifiPassphrase),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    wifi_radius_server: {
      value: cdktf.stringToHclTerraform(struct!.wifiRadiusServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wifi_rts_threshold: {
      value: cdktf.numberToHclTerraform(struct!.wifiRtsThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wifi_security: {
      value: cdktf.stringToHclTerraform(struct!.wifiSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wifi_ssid: {
      value: cdktf.stringToHclTerraform(struct!.wifiSsid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wifi_usergroup: {
      value: cdktf.stringToHclTerraform(struct!.wifiUsergroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wins_ip: {
      value: cdktf.stringToHclTerraform(struct!.winsIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: objectFspVlanInterfaceIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanInterfaceIpv6List",
    },
    secondaryip: {
      value: cdktf.listMapperHcl(objectFspVlanInterfaceSecondaryipToHclTerraform, true)(struct!.secondaryip),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanInterfaceSecondaryipList",
    },
    vrrp: {
      value: cdktf.listMapperHcl(objectFspVlanInterfaceVrrpToHclTerraform, true)(struct!.vrrp),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanInterfaceVrrpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFspVlanInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acName !== undefined) {
      hasAnyValues = true;
      internalValueResult.acName = this._acName;
    }
    if (this._aggregate !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregate = this._aggregate;
    }
    if (this._aggregateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregateType = this._aggregateType;
    }
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._allowaccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowaccess = this._allowaccess;
    }
    if (this._annex !== undefined) {
      hasAnyValues = true;
      internalValueResult.annex = this._annex;
    }
    if (this._apDiscover !== undefined) {
      hasAnyValues = true;
      internalValueResult.apDiscover = this._apDiscover;
    }
    if (this._arpforward !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpforward = this._arpforward;
    }
    if (this._atmProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.atmProtocol = this._atmProtocol;
    }
    if (this._authCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCert = this._authCert;
    }
    if (this._authPortalAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPortalAddr = this._authPortalAddr;
    }
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._autoAuthExtensionDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoAuthExtensionDevice = this._autoAuthExtensionDevice;
    }
    if (this._bandwidthMeasureTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthMeasureTime = this._bandwidthMeasureTime;
    }
    if (this._bfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd;
    }
    if (this._bfdDesiredMinTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdDesiredMinTx = this._bfdDesiredMinTx;
    }
    if (this._bfdDetectMult !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdDetectMult = this._bfdDetectMult;
    }
    if (this._bfdRequiredMinRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdRequiredMinRx = this._bfdRequiredMinRx;
    }
    if (this._broadcastForticlientDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcastForticlientDiscovery = this._broadcastForticlientDiscovery;
    }
    if (this._broadcastForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcastForward = this._broadcastForward;
    }
    if (this._captivePortal !== undefined) {
      hasAnyValues = true;
      internalValueResult.captivePortal = this._captivePortal;
    }
    if (this._cliConnStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliConnStatus = this._cliConnStatus;
    }
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._ddns !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddns = this._ddns;
    }
    if (this._ddnsAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsAuth = this._ddnsAuth;
    }
    if (this._ddnsDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsDomain = this._ddnsDomain;
    }
    if (this._ddnsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsKey = this._ddnsKey;
    }
    if (this._ddnsKeyname !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsKeyname = this._ddnsKeyname;
    }
    if (this._ddnsPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsPassword = this._ddnsPassword;
    }
    if (this._ddnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsServer = this._ddnsServer;
    }
    if (this._ddnsServerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsServerIp = this._ddnsServerIp;
    }
    if (this._ddnsSn !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsSn = this._ddnsSn;
    }
    if (this._ddnsTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsTtl = this._ddnsTtl;
    }
    if (this._ddnsUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsUsername = this._ddnsUsername;
    }
    if (this._ddnsZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsZone = this._ddnsZone;
    }
    if (this._dedicatedTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedTo = this._dedicatedTo;
    }
    if (this._defaultPurdueLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPurdueLevel = this._defaultPurdueLevel;
    }
    if (this._defaultgw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultgw = this._defaultgw;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._detectedPeerMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectedPeerMtu = this._detectedPeerMtu;
    }
    if (this._detectprotocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectprotocol = this._detectprotocol;
    }
    if (this._detectserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectserver = this._detectserver;
    }
    if (this._deviceAccessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceAccessList = this._deviceAccessList;
    }
    if (this._deviceIdentification !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceIdentification = this._deviceIdentification;
    }
    if (this._deviceIdentificationActiveScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceIdentificationActiveScan = this._deviceIdentificationActiveScan;
    }
    if (this._deviceNetscan !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceNetscan = this._deviceNetscan;
    }
    if (this._deviceUserIdentification !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceUserIdentification = this._deviceUserIdentification;
    }
    if (this._devindex !== undefined) {
      hasAnyValues = true;
      internalValueResult.devindex = this._devindex;
    }
    if (this._dhcpBroadcastFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpBroadcastFlag = this._dhcpBroadcastFlag;
    }
    if (this._dhcpClasslessRouteAddition !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpClasslessRouteAddition = this._dhcpClasslessRouteAddition;
    }
    if (this._dhcpClientIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpClientIdentifier = this._dhcpClientIdentifier;
    }
    if (this._dhcpRelayAgentOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRelayAgentOption = this._dhcpRelayAgentOption;
    }
    if (this._dhcpRelayCircuitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRelayCircuitId = this._dhcpRelayCircuitId;
    }
    if (this._dhcpRelayInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRelayInterface = this._dhcpRelayInterface;
    }
    if (this._dhcpRelayInterfaceSelectMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRelayInterfaceSelectMethod = this._dhcpRelayInterfaceSelectMethod;
    }
    if (this._dhcpRelayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRelayIp = this._dhcpRelayIp;
    }
    if (this._dhcpRelayLinkSelection !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRelayLinkSelection = this._dhcpRelayLinkSelection;
    }
    if (this._dhcpRelayRequestAllServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRelayRequestAllServer = this._dhcpRelayRequestAllServer;
    }
    if (this._dhcpRelayService !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRelayService = this._dhcpRelayService;
    }
    if (this._dhcpRelaySourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRelaySourceIp = this._dhcpRelaySourceIp;
    }
    if (this._dhcpRelayType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRelayType = this._dhcpRelayType;
    }
    if (this._dhcpRenewTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRenewTime = this._dhcpRenewTime;
    }
    if (this._dhcpSmartRelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpSmartRelay = this._dhcpSmartRelay;
    }
    if (this._discRetryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.discRetryTimeout = this._discRetryTimeout;
    }
    if (this._disconnectThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.disconnectThreshold = this._disconnectThreshold;
    }
    if (this._distance !== undefined) {
      hasAnyValues = true;
      internalValueResult.distance = this._distance;
    }
    if (this._dnsQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsQuery = this._dnsQuery;
    }
    if (this._dnsServerOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServerOverride = this._dnsServerOverride;
    }
    if (this._dnsServerProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServerProtocol = this._dnsServerProtocol;
    }
    if (this._dropFragment !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropFragment = this._dropFragment;
    }
    if (this._dropOverlappedFragment !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropOverlappedFragment = this._dropOverlappedFragment;
    }
    if (this._eapCaCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.eapCaCert = this._eapCaCert;
    }
    if (this._eapIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.eapIdentity = this._eapIdentity;
    }
    if (this._eapMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.eapMethod = this._eapMethod;
    }
    if (this._eapPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.eapPassword = this._eapPassword;
    }
    if (this._eapSupplicant !== undefined) {
      hasAnyValues = true;
      internalValueResult.eapSupplicant = this._eapSupplicant;
    }
    if (this._eapUserCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.eapUserCert = this._eapUserCert;
    }
    if (this._egressCos !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressCos = this._egressCos;
    }
    if (this._egressShapingProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressShapingProfile = this._egressShapingProfile;
    }
    if (this._eip !== undefined) {
      hasAnyValues = true;
      internalValueResult.eip = this._eip;
    }
    if (this._endpointCompliance !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointCompliance = this._endpointCompliance;
    }
    if (this._estimatedDownstreamBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.estimatedDownstreamBandwidth = this._estimatedDownstreamBandwidth;
    }
    if (this._estimatedUpstreamBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.estimatedUpstreamBandwidth = this._estimatedUpstreamBandwidth;
    }
    if (this._explicitFtpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitFtpProxy = this._explicitFtpProxy;
    }
    if (this._explicitWebProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitWebProxy = this._explicitWebProxy;
    }
    if (this._external !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external;
    }
    if (this._failActionOnExtender !== undefined) {
      hasAnyValues = true;
      internalValueResult.failActionOnExtender = this._failActionOnExtender;
    }
    if (this._failAlertInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.failAlertInterfaces = this._failAlertInterfaces;
    }
    if (this._failAlertMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.failAlertMethod = this._failAlertMethod;
    }
    if (this._failDetect !== undefined) {
      hasAnyValues = true;
      internalValueResult.failDetect = this._failDetect;
    }
    if (this._failDetectOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.failDetectOption = this._failDetectOption;
    }
    if (this._fdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fdp = this._fdp;
    }
    if (this._fortiheartbeat !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortiheartbeat = this._fortiheartbeat;
    }
    if (this._fortilink !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortilink = this._fortilink;
    }
    if (this._fortilinkBackupLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortilinkBackupLink = this._fortilinkBackupLink;
    }
    if (this._fortilinkNeighborDetect !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortilinkNeighborDetect = this._fortilinkNeighborDetect;
    }
    if (this._fortilinkSplitInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortilinkSplitInterface = this._fortilinkSplitInterface;
    }
    if (this._fortilinkStacking !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortilinkStacking = this._fortilinkStacking;
    }
    if (this._forwardDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardDomain = this._forwardDomain;
    }
    if (this._forwardErrorCorrection !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardErrorCorrection = this._forwardErrorCorrection;
    }
    if (this._fpAnomaly !== undefined) {
      hasAnyValues = true;
      internalValueResult.fpAnomaly = this._fpAnomaly;
    }
    if (this._fpDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.fpDisable = this._fpDisable;
    }
    if (this._gatewayAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayAddress = this._gatewayAddress;
    }
    if (this._genericReceiveOffload !== undefined) {
      hasAnyValues = true;
      internalValueResult.genericReceiveOffload = this._genericReceiveOffload;
    }
    if (this._giGk !== undefined) {
      hasAnyValues = true;
      internalValueResult.giGk = this._giGk;
    }
    if (this._gwaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.gwaddr = this._gwaddr;
    }
    if (this._gwdetect !== undefined) {
      hasAnyValues = true;
      internalValueResult.gwdetect = this._gwdetect;
    }
    if (this._haPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.haPriority = this._haPriority;
    }
    if (this._icmpAcceptRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpAcceptRedirect = this._icmpAcceptRedirect;
    }
    if (this._icmpRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpRedirect = this._icmpRedirect;
    }
    if (this._icmpSendRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpSendRedirect = this._icmpSendRedirect;
    }
    if (this._identAccept !== undefined) {
      hasAnyValues = true;
      internalValueResult.identAccept = this._identAccept;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._ifMdix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifMdix = this._ifMdix;
    }
    if (this._ifMedia !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifMedia = this._ifMedia;
    }
    if (this._ikeSamlServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeSamlServer = this._ikeSamlServer;
    }
    if (this._inForceVlanCos !== undefined) {
      hasAnyValues = true;
      internalValueResult.inForceVlanCos = this._inForceVlanCos;
    }
    if (this._inbandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbandwidth = this._inbandwidth;
    }
    if (this._ingressCos !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressCos = this._ingressCos;
    }
    if (this._ingressShapingProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressShapingProfile = this._ingressShapingProfile;
    }
    if (this._ingressSpilloverThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressSpilloverThreshold = this._ingressSpilloverThreshold;
    }
    if (this._interconnectProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.interconnectProfile = this._interconnectProfile;
    }
    if (this._internal !== undefined) {
      hasAnyValues = true;
      internalValueResult.internal = this._internal;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipManagedByFortiipam !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipManagedByFortiipam = this._ipManagedByFortiipam;
    }
    if (this._ipmac !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipmac = this._ipmac;
    }
    if (this._ipsSnifferMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsSnifferMode = this._ipsSnifferMode;
    }
    if (this._ipunnumbered !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipunnumbered = this._ipunnumbered;
    }
    if (this._l2Forward !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2Forward = this._l2Forward;
    }
    if (this._l2TpClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2TpClient = this._l2TpClient;
    }
    if (this._lacpHaSecondary !== undefined) {
      hasAnyValues = true;
      internalValueResult.lacpHaSecondary = this._lacpHaSecondary;
    }
    if (this._lacpHaSlave !== undefined) {
      hasAnyValues = true;
      internalValueResult.lacpHaSlave = this._lacpHaSlave;
    }
    if (this._lacpMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.lacpMode = this._lacpMode;
    }
    if (this._lacpSpeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.lacpSpeed = this._lacpSpeed;
    }
    if (this._largeReceiveOffload !== undefined) {
      hasAnyValues = true;
      internalValueResult.largeReceiveOffload = this._largeReceiveOffload;
    }
    if (this._lcpEchoInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.lcpEchoInterval = this._lcpEchoInterval;
    }
    if (this._lcpMaxEchoFails !== undefined) {
      hasAnyValues = true;
      internalValueResult.lcpMaxEchoFails = this._lcpMaxEchoFails;
    }
    if (this._linkUpDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkUpDelay = this._linkUpDelay;
    }
    if (this._listenForticlientConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenForticlientConnection = this._listenForticlientConnection;
    }
    if (this._lldpNetworkPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.lldpNetworkPolicy = this._lldpNetworkPolicy;
    }
    if (this._lldpReception !== undefined) {
      hasAnyValues = true;
      internalValueResult.lldpReception = this._lldpReception;
    }
    if (this._lldpTransmission !== undefined) {
      hasAnyValues = true;
      internalValueResult.lldpTransmission = this._lldpTransmission;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._macaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.macaddr = this._macaddr;
    }
    if (this._managedSubnetworkSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedSubnetworkSize = this._managedSubnetworkSize;
    }
    if (this._managementIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementIp = this._managementIp;
    }
    if (this._maxEgressBurstRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEgressBurstRate = this._maxEgressBurstRate;
    }
    if (this._maxEgressRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEgressRate = this._maxEgressRate;
    }
    if (this._measuredDownstreamBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.measuredDownstreamBandwidth = this._measuredDownstreamBandwidth;
    }
    if (this._measuredUpstreamBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.measuredUpstreamBandwidth = this._measuredUpstreamBandwidth;
    }
    if (this._mediatype !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediatype = this._mediatype;
    }
    if (this._member !== undefined) {
      hasAnyValues = true;
      internalValueResult.member = this._member;
    }
    if (this._minLinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLinks = this._minLinks;
    }
    if (this._minLinksDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLinksDown = this._minLinksDown;
    }
    if (this._mirroringDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirroringDirection = this._mirroringDirection;
    }
    if (this._mirroringPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirroringPort = this._mirroringPort;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._monitorBandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorBandwidth = this._monitorBandwidth;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._mtuOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuOverride = this._mtuOverride;
    }
    if (this._muxType !== undefined) {
      hasAnyValues = true;
      internalValueResult.muxType = this._muxType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ndiscforward !== undefined) {
      hasAnyValues = true;
      internalValueResult.ndiscforward = this._ndiscforward;
    }
    if (this._netbiosForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.netbiosForward = this._netbiosForward;
    }
    if (this._netflowSampler !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowSampler = this._netflowSampler;
    }
    if (this._npQosProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.npQosProfile = this._npQosProfile;
    }
    if (this._npuFastpath !== undefined) {
      hasAnyValues = true;
      internalValueResult.npuFastpath = this._npuFastpath;
    }
    if (this._nst !== undefined) {
      hasAnyValues = true;
      internalValueResult.nst = this._nst;
    }
    if (this._outForceVlanCos !== undefined) {
      hasAnyValues = true;
      internalValueResult.outForceVlanCos = this._outForceVlanCos;
    }
    if (this._outbandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.outbandwidth = this._outbandwidth;
    }
    if (this._padtRetryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.padtRetryTimeout = this._padtRetryTimeout;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._peerInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerInterface = this._peerInterface;
    }
    if (this._phyMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.phyMode = this._phyMode;
    }
    if (this._pingServStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingServStatus = this._pingServStatus;
    }
    if (this._poe !== undefined) {
      hasAnyValues = true;
      internalValueResult.poe = this._poe;
    }
    if (this._pollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollingInterval = this._pollingInterval;
    }
    if (this._portMirroring !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMirroring = this._portMirroring;
    }
    if (this._pppoeUnnumberedNegotiate !== undefined) {
      hasAnyValues = true;
      internalValueResult.pppoeUnnumberedNegotiate = this._pppoeUnnumberedNegotiate;
    }
    if (this._pptpAuthType !== undefined) {
      hasAnyValues = true;
      internalValueResult.pptpAuthType = this._pptpAuthType;
    }
    if (this._pptpClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.pptpClient = this._pptpClient;
    }
    if (this._pptpPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.pptpPassword = this._pptpPassword;
    }
    if (this._pptpServerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.pptpServerIp = this._pptpServerIp;
    }
    if (this._pptpTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.pptpTimeout = this._pptpTimeout;
    }
    if (this._pptpUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.pptpUser = this._pptpUser;
    }
    if (this._preserveSessionRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveSessionRoute = this._preserveSessionRoute;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._priorityOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityOverride = this._priorityOverride;
    }
    if (this._proxyCaptivePortal !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyCaptivePortal = this._proxyCaptivePortal;
    }
    if (this._pvcAtmQos !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcAtmQos = this._pvcAtmQos;
    }
    if (this._pvcChan !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcChan = this._pvcChan;
    }
    if (this._pvcCrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcCrc = this._pvcCrc;
    }
    if (this._pvcPcr !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcPcr = this._pvcPcr;
    }
    if (this._pvcScr !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcScr = this._pvcScr;
    }
    if (this._pvcVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcVlanId = this._pvcVlanId;
    }
    if (this._pvcVlanRxId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcVlanRxId = this._pvcVlanRxId;
    }
    if (this._pvcVlanRxOp !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcVlanRxOp = this._pvcVlanRxOp;
    }
    if (this._pvcVlanTxId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcVlanTxId = this._pvcVlanTxId;
    }
    if (this._pvcVlanTxOp !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcVlanTxOp = this._pvcVlanTxOp;
    }
    if (this._reachableTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.reachableTime = this._reachableTime;
    }
    if (this._redundantInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.redundantInterface = this._redundantInterface;
    }
    if (this._remoteIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIp = this._remoteIp;
    }
    if (this._replacemsgOverrideGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacemsgOverrideGroup = this._replacemsgOverrideGroup;
    }
    if (this._retransmission !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmission = this._retransmission;
    }
    if (this._ringRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.ringRx = this._ringRx;
    }
    if (this._ringTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.ringTx = this._ringTx;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._sampleDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleDirection = this._sampleDirection;
    }
    if (this._sampleRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleRate = this._sampleRate;
    }
    if (this._scanBotnetConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanBotnetConnections = this._scanBotnetConnections;
    }
    if (this._secondaryIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryIp = this._secondaryIp;
    }
    if (this._security8021XDynamicVlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.security8021XDynamicVlanId = this._security8021XDynamicVlanId;
    }
    if (this._security8021XMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.security8021XMaster = this._security8021XMaster;
    }
    if (this._security8021XMemberMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.security8021XMemberMode = this._security8021XMemberMode;
    }
    if (this._security8021XMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.security8021XMode = this._security8021XMode;
    }
    if (this._securityExemptList !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityExemptList = this._securityExemptList;
    }
    if (this._securityExternalLogout !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityExternalLogout = this._securityExternalLogout;
    }
    if (this._securityExternalWeb !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityExternalWeb = this._securityExternalWeb;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._securityMacAuthBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityMacAuthBypass = this._securityMacAuthBypass;
    }
    if (this._securityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityMode = this._securityMode;
    }
    if (this._securityRedirectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityRedirectUrl = this._securityRedirectUrl;
    }
    if (this._selectProfile30A35B !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectProfile30A35B = this._selectProfile30A35B;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._sflowSampler !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowSampler = this._sflowSampler;
    }
    if (this._sfpDsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sfpDsl = this._sfpDsl;
    }
    if (this._sfpDslAdslFallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.sfpDslAdslFallback = this._sfpDslAdslFallback;
    }
    if (this._sfpDslAutodetect !== undefined) {
      hasAnyValues = true;
      internalValueResult.sfpDslAutodetect = this._sfpDslAutodetect;
    }
    if (this._sfpDslMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.sfpDslMac = this._sfpDslMac;
    }
    if (this._speed !== undefined) {
      hasAnyValues = true;
      internalValueResult.speed = this._speed;
    }
    if (this._spilloverThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.spilloverThreshold = this._spilloverThreshold;
    }
    if (this._srcCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcCheck = this._srcCheck;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._stp !== undefined) {
      hasAnyValues = true;
      internalValueResult.stp = this._stp;
    }
    if (this._stpEdge !== undefined) {
      hasAnyValues = true;
      internalValueResult.stpEdge = this._stpEdge;
    }
    if (this._stpHaSecondary !== undefined) {
      hasAnyValues = true;
      internalValueResult.stpHaSecondary = this._stpHaSecondary;
    }
    if (this._stpHaSlave !== undefined) {
      hasAnyValues = true;
      internalValueResult.stpHaSlave = this._stpHaSlave;
    }
    if (this._stpforward !== undefined) {
      hasAnyValues = true;
      internalValueResult.stpforward = this._stpforward;
    }
    if (this._stpforwardMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.stpforwardMode = this._stpforwardMode;
    }
    if (this._stripPriorityVlanTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripPriorityVlanTag = this._stripPriorityVlanTag;
    }
    if (this._subst !== undefined) {
      hasAnyValues = true;
      internalValueResult.subst = this._subst;
    }
    if (this._substituteDstMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.substituteDstMac = this._substituteDstMac;
    }
    if (this._swAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.swAlgorithm = this._swAlgorithm;
    }
    if (this._swcFirstCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.swcFirstCreate = this._swcFirstCreate;
    }
    if (this._swcVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.swcVlan = this._swcVlan;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._switchControllerAccessVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchControllerAccessVlan = this._switchControllerAccessVlan;
    }
    if (this._switchControllerArpInspection !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchControllerArpInspection = this._switchControllerArpInspection;
    }
    if (this._switchControllerAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchControllerAuth = this._switchControllerAuth;
    }
    if (this._switchControllerDhcpSnooping !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchControllerDhcpSnooping = this._switchControllerDhcpSnooping;
    }
    if (this._switchControllerDhcpSnoopingOption82 !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchControllerDhcpSnoopingOption82 = this._switchControllerDhcpSnoopingOption82;
    }
    if (this._switchControllerDhcpSnoopingVerifyMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchControllerDhcpSnoopingVerifyMac = this._switchControllerDhcpSnoopingVerifyMac;
    }
    if (this._switchControllerDynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchControllerDynamic = this._switchControllerDynamic;
    }
    if (this._switchControllerFeature !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchControllerFeature = this._switchControllerFeature;
    }
    if (this._switchControllerIgmpSnooping !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchControllerIgmpSnooping = this._switchControllerIgmpSnooping;
    }
    if (this._switchControllerIgmpSnoopingFastLeave !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchControllerIgmpSnoopingFastLeave = this._switchControllerIgmpSnoopingFastLeave;
    }
    if (this._switchControllerIgmpSnoopingProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchControllerIgmpSnoopingProxy = this._switchControllerIgmpSnoopingProxy;
    }
    if (this._switchControllerIotScanning !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchControllerIotScanning = this._switchControllerIotScanning;
    }
    if (this._switchControllerLearningLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchControllerLearningLimit = this._switchControllerLearningLimit;
    }
    if (this._switchControllerMgmtVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchControllerMgmtVlan = this._switchControllerMgmtVlan;
    }
    if (this._switchControllerNac !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchControllerNac = this._switchControllerNac;
    }
    if (this._switchControllerNetflowCollect !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchControllerNetflowCollect = this._switchControllerNetflowCollect;
    }
    if (this._switchControllerOffload !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchControllerOffload = this._switchControllerOffload;
    }
    if (this._switchControllerOffloadGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchControllerOffloadGw = this._switchControllerOffloadGw;
    }
    if (this._switchControllerOffloadIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchControllerOffloadIp = this._switchControllerOffloadIp;
    }
    if (this._switchControllerOffloading !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchControllerOffloading = this._switchControllerOffloading;
    }
    if (this._switchControllerOffloadingGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchControllerOffloadingGw = this._switchControllerOffloadingGw;
    }
    if (this._switchControllerOffloadingIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchControllerOffloadingIp = this._switchControllerOffloadingIp;
    }
    if (this._switchControllerRadiusServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchControllerRadiusServer = this._switchControllerRadiusServer;
    }
    if (this._switchControllerRspanMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchControllerRspanMode = this._switchControllerRspanMode;
    }
    if (this._switchControllerSourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchControllerSourceIp = this._switchControllerSourceIp;
    }
    if (this._switchControllerTrafficPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchControllerTrafficPolicy = this._switchControllerTrafficPolicy;
    }
    if (this._systemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemId = this._systemId;
    }
    if (this._systemIdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemIdType = this._systemIdType;
    }
    if (this._tcMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcMode = this._tcMode;
    }
    if (this._tcpMss !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpMss = this._tcpMss;
    }
    if (this._trunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk;
    }
    if (this._trustIp61 !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustIp61 = this._trustIp61;
    }
    if (this._trustIp62 !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustIp62 = this._trustIp62;
    }
    if (this._trustIp63 !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustIp63 = this._trustIp63;
    }
    if (this._trustIp1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustIp1 = this._trustIp1;
    }
    if (this._trustIp2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustIp2 = this._trustIp2;
    }
    if (this._trustIp3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustIp3 = this._trustIp3;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._vci !== undefined) {
      hasAnyValues = true;
      internalValueResult.vci = this._vci;
    }
    if (this._vectoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectoring = this._vectoring;
    }
    if (this._vindex !== undefined) {
      hasAnyValues = true;
      internalValueResult.vindex = this._vindex;
    }
    if (this._vlanOpMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanOpMode = this._vlanOpMode;
    }
    if (this._vlanProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanProtocol = this._vlanProtocol;
    }
    if (this._vlanforward !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanforward = this._vlanforward;
    }
    if (this._vlanid !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanid = this._vlanid;
    }
    if (this._vpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpi = this._vpi;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    if (this._vrrpVirtualMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrrpVirtualMac = this._vrrpVirtualMac;
    }
    if (this._wccp !== undefined) {
      hasAnyValues = true;
      internalValueResult.wccp = this._wccp;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._wifi5GThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifi5GThreshold = this._wifi5GThreshold;
    }
    if (this._wifiAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiAcl = this._wifiAcl;
    }
    if (this._wifiApBand !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiApBand = this._wifiApBand;
    }
    if (this._wifiAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiAuth = this._wifiAuth;
    }
    if (this._wifiAutoConnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiAutoConnect = this._wifiAutoConnect;
    }
    if (this._wifiAutoSave !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiAutoSave = this._wifiAutoSave;
    }
    if (this._wifiBroadcastSsid !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiBroadcastSsid = this._wifiBroadcastSsid;
    }
    if (this._wifiDnsServer1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiDnsServer1 = this._wifiDnsServer1;
    }
    if (this._wifiDnsServer2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiDnsServer2 = this._wifiDnsServer2;
    }
    if (this._wifiEncrypt !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiEncrypt = this._wifiEncrypt;
    }
    if (this._wifiFragmentThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiFragmentThreshold = this._wifiFragmentThreshold;
    }
    if (this._wifiGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiGateway = this._wifiGateway;
    }
    if (this._wifiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiKey = this._wifiKey;
    }
    if (this._wifiKeyindex !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiKeyindex = this._wifiKeyindex;
    }
    if (this._wifiMacFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiMacFilter = this._wifiMacFilter;
    }
    if (this._wifiPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiPassphrase = this._wifiPassphrase;
    }
    if (this._wifiRadiusServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiRadiusServer = this._wifiRadiusServer;
    }
    if (this._wifiRtsThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiRtsThreshold = this._wifiRtsThreshold;
    }
    if (this._wifiSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiSecurity = this._wifiSecurity;
    }
    if (this._wifiSsid !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiSsid = this._wifiSsid;
    }
    if (this._wifiUsergroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiUsergroup = this._wifiUsergroup;
    }
    if (this._winsIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.winsIp = this._winsIp;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    if (this._secondaryip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryip = this._secondaryip?.internalValue;
    }
    if (this._vrrp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrrp = this._vrrp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFspVlanInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acName = undefined;
      this._aggregate = undefined;
      this._aggregateType = undefined;
      this._algorithm = undefined;
      this._alias = undefined;
      this._allowaccess = undefined;
      this._annex = undefined;
      this._apDiscover = undefined;
      this._arpforward = undefined;
      this._atmProtocol = undefined;
      this._authCert = undefined;
      this._authPortalAddr = undefined;
      this._authType = undefined;
      this._autoAuthExtensionDevice = undefined;
      this._bandwidthMeasureTime = undefined;
      this._bfd = undefined;
      this._bfdDesiredMinTx = undefined;
      this._bfdDetectMult = undefined;
      this._bfdRequiredMinRx = undefined;
      this._broadcastForticlientDiscovery = undefined;
      this._broadcastForward = undefined;
      this._captivePortal = undefined;
      this._cliConnStatus = undefined;
      this._color = undefined;
      this._ddns = undefined;
      this._ddnsAuth = undefined;
      this._ddnsDomain = undefined;
      this._ddnsKey = undefined;
      this._ddnsKeyname = undefined;
      this._ddnsPassword = undefined;
      this._ddnsServer = undefined;
      this._ddnsServerIp = undefined;
      this._ddnsSn = undefined;
      this._ddnsTtl = undefined;
      this._ddnsUsername = undefined;
      this._ddnsZone = undefined;
      this._dedicatedTo = undefined;
      this._defaultPurdueLevel = undefined;
      this._defaultgw = undefined;
      this._description = undefined;
      this._detectedPeerMtu = undefined;
      this._detectprotocol = undefined;
      this._detectserver = undefined;
      this._deviceAccessList = undefined;
      this._deviceIdentification = undefined;
      this._deviceIdentificationActiveScan = undefined;
      this._deviceNetscan = undefined;
      this._deviceUserIdentification = undefined;
      this._devindex = undefined;
      this._dhcpBroadcastFlag = undefined;
      this._dhcpClasslessRouteAddition = undefined;
      this._dhcpClientIdentifier = undefined;
      this._dhcpRelayAgentOption = undefined;
      this._dhcpRelayCircuitId = undefined;
      this._dhcpRelayInterface = undefined;
      this._dhcpRelayInterfaceSelectMethod = undefined;
      this._dhcpRelayIp = undefined;
      this._dhcpRelayLinkSelection = undefined;
      this._dhcpRelayRequestAllServer = undefined;
      this._dhcpRelayService = undefined;
      this._dhcpRelaySourceIp = undefined;
      this._dhcpRelayType = undefined;
      this._dhcpRenewTime = undefined;
      this._dhcpSmartRelay = undefined;
      this._discRetryTimeout = undefined;
      this._disconnectThreshold = undefined;
      this._distance = undefined;
      this._dnsQuery = undefined;
      this._dnsServerOverride = undefined;
      this._dnsServerProtocol = undefined;
      this._dropFragment = undefined;
      this._dropOverlappedFragment = undefined;
      this._eapCaCert = undefined;
      this._eapIdentity = undefined;
      this._eapMethod = undefined;
      this._eapPassword = undefined;
      this._eapSupplicant = undefined;
      this._eapUserCert = undefined;
      this._egressCos = undefined;
      this._egressShapingProfile = undefined;
      this._eip = undefined;
      this._endpointCompliance = undefined;
      this._estimatedDownstreamBandwidth = undefined;
      this._estimatedUpstreamBandwidth = undefined;
      this._explicitFtpProxy = undefined;
      this._explicitWebProxy = undefined;
      this._external = undefined;
      this._failActionOnExtender = undefined;
      this._failAlertInterfaces = undefined;
      this._failAlertMethod = undefined;
      this._failDetect = undefined;
      this._failDetectOption = undefined;
      this._fdp = undefined;
      this._fortiheartbeat = undefined;
      this._fortilink = undefined;
      this._fortilinkBackupLink = undefined;
      this._fortilinkNeighborDetect = undefined;
      this._fortilinkSplitInterface = undefined;
      this._fortilinkStacking = undefined;
      this._forwardDomain = undefined;
      this._forwardErrorCorrection = undefined;
      this._fpAnomaly = undefined;
      this._fpDisable = undefined;
      this._gatewayAddress = undefined;
      this._genericReceiveOffload = undefined;
      this._giGk = undefined;
      this._gwaddr = undefined;
      this._gwdetect = undefined;
      this._haPriority = undefined;
      this._icmpAcceptRedirect = undefined;
      this._icmpRedirect = undefined;
      this._icmpSendRedirect = undefined;
      this._identAccept = undefined;
      this._idleTimeout = undefined;
      this._ifMdix = undefined;
      this._ifMedia = undefined;
      this._ikeSamlServer = undefined;
      this._inForceVlanCos = undefined;
      this._inbandwidth = undefined;
      this._ingressCos = undefined;
      this._ingressShapingProfile = undefined;
      this._ingressSpilloverThreshold = undefined;
      this._interconnectProfile = undefined;
      this._internal = undefined;
      this._ip = undefined;
      this._ipManagedByFortiipam = undefined;
      this._ipmac = undefined;
      this._ipsSnifferMode = undefined;
      this._ipunnumbered = undefined;
      this._l2Forward = undefined;
      this._l2TpClient = undefined;
      this._lacpHaSecondary = undefined;
      this._lacpHaSlave = undefined;
      this._lacpMode = undefined;
      this._lacpSpeed = undefined;
      this._largeReceiveOffload = undefined;
      this._lcpEchoInterval = undefined;
      this._lcpMaxEchoFails = undefined;
      this._linkUpDelay = undefined;
      this._listenForticlientConnection = undefined;
      this._lldpNetworkPolicy = undefined;
      this._lldpReception = undefined;
      this._lldpTransmission = undefined;
      this._log = undefined;
      this._macaddr = undefined;
      this._managedSubnetworkSize = undefined;
      this._managementIp = undefined;
      this._maxEgressBurstRate = undefined;
      this._maxEgressRate = undefined;
      this._measuredDownstreamBandwidth = undefined;
      this._measuredUpstreamBandwidth = undefined;
      this._mediatype = undefined;
      this._member = undefined;
      this._minLinks = undefined;
      this._minLinksDown = undefined;
      this._mirroringDirection = undefined;
      this._mirroringPort = undefined;
      this._mode = undefined;
      this._monitorBandwidth = undefined;
      this._mtu = undefined;
      this._mtuOverride = undefined;
      this._muxType = undefined;
      this._name = undefined;
      this._ndiscforward = undefined;
      this._netbiosForward = undefined;
      this._netflowSampler = undefined;
      this._npQosProfile = undefined;
      this._npuFastpath = undefined;
      this._nst = undefined;
      this._outForceVlanCos = undefined;
      this._outbandwidth = undefined;
      this._padtRetryTimeout = undefined;
      this._password = undefined;
      this._peerInterface = undefined;
      this._phyMode = undefined;
      this._pingServStatus = undefined;
      this._poe = undefined;
      this._pollingInterval = undefined;
      this._portMirroring = undefined;
      this._pppoeUnnumberedNegotiate = undefined;
      this._pptpAuthType = undefined;
      this._pptpClient = undefined;
      this._pptpPassword = undefined;
      this._pptpServerIp = undefined;
      this._pptpTimeout = undefined;
      this._pptpUser = undefined;
      this._preserveSessionRoute = undefined;
      this._priority = undefined;
      this._priorityOverride = undefined;
      this._proxyCaptivePortal = undefined;
      this._pvcAtmQos = undefined;
      this._pvcChan = undefined;
      this._pvcCrc = undefined;
      this._pvcPcr = undefined;
      this._pvcScr = undefined;
      this._pvcVlanId = undefined;
      this._pvcVlanRxId = undefined;
      this._pvcVlanRxOp = undefined;
      this._pvcVlanTxId = undefined;
      this._pvcVlanTxOp = undefined;
      this._reachableTime = undefined;
      this._redundantInterface = undefined;
      this._remoteIp = undefined;
      this._replacemsgOverrideGroup = undefined;
      this._retransmission = undefined;
      this._ringRx = undefined;
      this._ringTx = undefined;
      this._role = undefined;
      this._sampleDirection = undefined;
      this._sampleRate = undefined;
      this._scanBotnetConnections = undefined;
      this._secondaryIp = undefined;
      this._security8021XDynamicVlanId = undefined;
      this._security8021XMaster = undefined;
      this._security8021XMemberMode = undefined;
      this._security8021XMode = undefined;
      this._securityExemptList = undefined;
      this._securityExternalLogout = undefined;
      this._securityExternalWeb = undefined;
      this._securityGroups = undefined;
      this._securityMacAuthBypass = undefined;
      this._securityMode = undefined;
      this._securityRedirectUrl = undefined;
      this._selectProfile30A35B = undefined;
      this._serviceName = undefined;
      this._sflowSampler = undefined;
      this._sfpDsl = undefined;
      this._sfpDslAdslFallback = undefined;
      this._sfpDslAutodetect = undefined;
      this._sfpDslMac = undefined;
      this._speed = undefined;
      this._spilloverThreshold = undefined;
      this._srcCheck = undefined;
      this._status = undefined;
      this._stp = undefined;
      this._stpEdge = undefined;
      this._stpHaSecondary = undefined;
      this._stpHaSlave = undefined;
      this._stpforward = undefined;
      this._stpforwardMode = undefined;
      this._stripPriorityVlanTag = undefined;
      this._subst = undefined;
      this._substituteDstMac = undefined;
      this._swAlgorithm = undefined;
      this._swcFirstCreate = undefined;
      this._swcVlan = undefined;
      this._switch = undefined;
      this._switchControllerAccessVlan = undefined;
      this._switchControllerArpInspection = undefined;
      this._switchControllerAuth = undefined;
      this._switchControllerDhcpSnooping = undefined;
      this._switchControllerDhcpSnoopingOption82 = undefined;
      this._switchControllerDhcpSnoopingVerifyMac = undefined;
      this._switchControllerDynamic = undefined;
      this._switchControllerFeature = undefined;
      this._switchControllerIgmpSnooping = undefined;
      this._switchControllerIgmpSnoopingFastLeave = undefined;
      this._switchControllerIgmpSnoopingProxy = undefined;
      this._switchControllerIotScanning = undefined;
      this._switchControllerLearningLimit = undefined;
      this._switchControllerMgmtVlan = undefined;
      this._switchControllerNac = undefined;
      this._switchControllerNetflowCollect = undefined;
      this._switchControllerOffload = undefined;
      this._switchControllerOffloadGw = undefined;
      this._switchControllerOffloadIp = undefined;
      this._switchControllerOffloading = undefined;
      this._switchControllerOffloadingGw = undefined;
      this._switchControllerOffloadingIp = undefined;
      this._switchControllerRadiusServer = undefined;
      this._switchControllerRspanMode = undefined;
      this._switchControllerSourceIp = undefined;
      this._switchControllerTrafficPolicy = undefined;
      this._systemId = undefined;
      this._systemIdType = undefined;
      this._tcMode = undefined;
      this._tcpMss = undefined;
      this._trunk = undefined;
      this._trustIp61 = undefined;
      this._trustIp62 = undefined;
      this._trustIp63 = undefined;
      this._trustIp1 = undefined;
      this._trustIp2 = undefined;
      this._trustIp3 = undefined;
      this._type = undefined;
      this._username = undefined;
      this._vci = undefined;
      this._vectoring = undefined;
      this._vindex = undefined;
      this._vlanOpMode = undefined;
      this._vlanProtocol = undefined;
      this._vlanforward = undefined;
      this._vlanid = undefined;
      this._vpi = undefined;
      this._vrf = undefined;
      this._vrrpVirtualMac = undefined;
      this._wccp = undefined;
      this._weight = undefined;
      this._wifi5GThreshold = undefined;
      this._wifiAcl = undefined;
      this._wifiApBand = undefined;
      this._wifiAuth = undefined;
      this._wifiAutoConnect = undefined;
      this._wifiAutoSave = undefined;
      this._wifiBroadcastSsid = undefined;
      this._wifiDnsServer1 = undefined;
      this._wifiDnsServer2 = undefined;
      this._wifiEncrypt = undefined;
      this._wifiFragmentThreshold = undefined;
      this._wifiGateway = undefined;
      this._wifiKey = undefined;
      this._wifiKeyindex = undefined;
      this._wifiMacFilter = undefined;
      this._wifiPassphrase = undefined;
      this._wifiRadiusServer = undefined;
      this._wifiRtsThreshold = undefined;
      this._wifiSecurity = undefined;
      this._wifiSsid = undefined;
      this._wifiUsergroup = undefined;
      this._winsIp = undefined;
      this._ipv6.internalValue = undefined;
      this._secondaryip.internalValue = undefined;
      this._vrrp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acName = value.acName;
      this._aggregate = value.aggregate;
      this._aggregateType = value.aggregateType;
      this._algorithm = value.algorithm;
      this._alias = value.alias;
      this._allowaccess = value.allowaccess;
      this._annex = value.annex;
      this._apDiscover = value.apDiscover;
      this._arpforward = value.arpforward;
      this._atmProtocol = value.atmProtocol;
      this._authCert = value.authCert;
      this._authPortalAddr = value.authPortalAddr;
      this._authType = value.authType;
      this._autoAuthExtensionDevice = value.autoAuthExtensionDevice;
      this._bandwidthMeasureTime = value.bandwidthMeasureTime;
      this._bfd = value.bfd;
      this._bfdDesiredMinTx = value.bfdDesiredMinTx;
      this._bfdDetectMult = value.bfdDetectMult;
      this._bfdRequiredMinRx = value.bfdRequiredMinRx;
      this._broadcastForticlientDiscovery = value.broadcastForticlientDiscovery;
      this._broadcastForward = value.broadcastForward;
      this._captivePortal = value.captivePortal;
      this._cliConnStatus = value.cliConnStatus;
      this._color = value.color;
      this._ddns = value.ddns;
      this._ddnsAuth = value.ddnsAuth;
      this._ddnsDomain = value.ddnsDomain;
      this._ddnsKey = value.ddnsKey;
      this._ddnsKeyname = value.ddnsKeyname;
      this._ddnsPassword = value.ddnsPassword;
      this._ddnsServer = value.ddnsServer;
      this._ddnsServerIp = value.ddnsServerIp;
      this._ddnsSn = value.ddnsSn;
      this._ddnsTtl = value.ddnsTtl;
      this._ddnsUsername = value.ddnsUsername;
      this._ddnsZone = value.ddnsZone;
      this._dedicatedTo = value.dedicatedTo;
      this._defaultPurdueLevel = value.defaultPurdueLevel;
      this._defaultgw = value.defaultgw;
      this._description = value.description;
      this._detectedPeerMtu = value.detectedPeerMtu;
      this._detectprotocol = value.detectprotocol;
      this._detectserver = value.detectserver;
      this._deviceAccessList = value.deviceAccessList;
      this._deviceIdentification = value.deviceIdentification;
      this._deviceIdentificationActiveScan = value.deviceIdentificationActiveScan;
      this._deviceNetscan = value.deviceNetscan;
      this._deviceUserIdentification = value.deviceUserIdentification;
      this._devindex = value.devindex;
      this._dhcpBroadcastFlag = value.dhcpBroadcastFlag;
      this._dhcpClasslessRouteAddition = value.dhcpClasslessRouteAddition;
      this._dhcpClientIdentifier = value.dhcpClientIdentifier;
      this._dhcpRelayAgentOption = value.dhcpRelayAgentOption;
      this._dhcpRelayCircuitId = value.dhcpRelayCircuitId;
      this._dhcpRelayInterface = value.dhcpRelayInterface;
      this._dhcpRelayInterfaceSelectMethod = value.dhcpRelayInterfaceSelectMethod;
      this._dhcpRelayIp = value.dhcpRelayIp;
      this._dhcpRelayLinkSelection = value.dhcpRelayLinkSelection;
      this._dhcpRelayRequestAllServer = value.dhcpRelayRequestAllServer;
      this._dhcpRelayService = value.dhcpRelayService;
      this._dhcpRelaySourceIp = value.dhcpRelaySourceIp;
      this._dhcpRelayType = value.dhcpRelayType;
      this._dhcpRenewTime = value.dhcpRenewTime;
      this._dhcpSmartRelay = value.dhcpSmartRelay;
      this._discRetryTimeout = value.discRetryTimeout;
      this._disconnectThreshold = value.disconnectThreshold;
      this._distance = value.distance;
      this._dnsQuery = value.dnsQuery;
      this._dnsServerOverride = value.dnsServerOverride;
      this._dnsServerProtocol = value.dnsServerProtocol;
      this._dropFragment = value.dropFragment;
      this._dropOverlappedFragment = value.dropOverlappedFragment;
      this._eapCaCert = value.eapCaCert;
      this._eapIdentity = value.eapIdentity;
      this._eapMethod = value.eapMethod;
      this._eapPassword = value.eapPassword;
      this._eapSupplicant = value.eapSupplicant;
      this._eapUserCert = value.eapUserCert;
      this._egressCos = value.egressCos;
      this._egressShapingProfile = value.egressShapingProfile;
      this._eip = value.eip;
      this._endpointCompliance = value.endpointCompliance;
      this._estimatedDownstreamBandwidth = value.estimatedDownstreamBandwidth;
      this._estimatedUpstreamBandwidth = value.estimatedUpstreamBandwidth;
      this._explicitFtpProxy = value.explicitFtpProxy;
      this._explicitWebProxy = value.explicitWebProxy;
      this._external = value.external;
      this._failActionOnExtender = value.failActionOnExtender;
      this._failAlertInterfaces = value.failAlertInterfaces;
      this._failAlertMethod = value.failAlertMethod;
      this._failDetect = value.failDetect;
      this._failDetectOption = value.failDetectOption;
      this._fdp = value.fdp;
      this._fortiheartbeat = value.fortiheartbeat;
      this._fortilink = value.fortilink;
      this._fortilinkBackupLink = value.fortilinkBackupLink;
      this._fortilinkNeighborDetect = value.fortilinkNeighborDetect;
      this._fortilinkSplitInterface = value.fortilinkSplitInterface;
      this._fortilinkStacking = value.fortilinkStacking;
      this._forwardDomain = value.forwardDomain;
      this._forwardErrorCorrection = value.forwardErrorCorrection;
      this._fpAnomaly = value.fpAnomaly;
      this._fpDisable = value.fpDisable;
      this._gatewayAddress = value.gatewayAddress;
      this._genericReceiveOffload = value.genericReceiveOffload;
      this._giGk = value.giGk;
      this._gwaddr = value.gwaddr;
      this._gwdetect = value.gwdetect;
      this._haPriority = value.haPriority;
      this._icmpAcceptRedirect = value.icmpAcceptRedirect;
      this._icmpRedirect = value.icmpRedirect;
      this._icmpSendRedirect = value.icmpSendRedirect;
      this._identAccept = value.identAccept;
      this._idleTimeout = value.idleTimeout;
      this._ifMdix = value.ifMdix;
      this._ifMedia = value.ifMedia;
      this._ikeSamlServer = value.ikeSamlServer;
      this._inForceVlanCos = value.inForceVlanCos;
      this._inbandwidth = value.inbandwidth;
      this._ingressCos = value.ingressCos;
      this._ingressShapingProfile = value.ingressShapingProfile;
      this._ingressSpilloverThreshold = value.ingressSpilloverThreshold;
      this._interconnectProfile = value.interconnectProfile;
      this._internal = value.internal;
      this._ip = value.ip;
      this._ipManagedByFortiipam = value.ipManagedByFortiipam;
      this._ipmac = value.ipmac;
      this._ipsSnifferMode = value.ipsSnifferMode;
      this._ipunnumbered = value.ipunnumbered;
      this._l2Forward = value.l2Forward;
      this._l2TpClient = value.l2TpClient;
      this._lacpHaSecondary = value.lacpHaSecondary;
      this._lacpHaSlave = value.lacpHaSlave;
      this._lacpMode = value.lacpMode;
      this._lacpSpeed = value.lacpSpeed;
      this._largeReceiveOffload = value.largeReceiveOffload;
      this._lcpEchoInterval = value.lcpEchoInterval;
      this._lcpMaxEchoFails = value.lcpMaxEchoFails;
      this._linkUpDelay = value.linkUpDelay;
      this._listenForticlientConnection = value.listenForticlientConnection;
      this._lldpNetworkPolicy = value.lldpNetworkPolicy;
      this._lldpReception = value.lldpReception;
      this._lldpTransmission = value.lldpTransmission;
      this._log = value.log;
      this._macaddr = value.macaddr;
      this._managedSubnetworkSize = value.managedSubnetworkSize;
      this._managementIp = value.managementIp;
      this._maxEgressBurstRate = value.maxEgressBurstRate;
      this._maxEgressRate = value.maxEgressRate;
      this._measuredDownstreamBandwidth = value.measuredDownstreamBandwidth;
      this._measuredUpstreamBandwidth = value.measuredUpstreamBandwidth;
      this._mediatype = value.mediatype;
      this._member = value.member;
      this._minLinks = value.minLinks;
      this._minLinksDown = value.minLinksDown;
      this._mirroringDirection = value.mirroringDirection;
      this._mirroringPort = value.mirroringPort;
      this._mode = value.mode;
      this._monitorBandwidth = value.monitorBandwidth;
      this._mtu = value.mtu;
      this._mtuOverride = value.mtuOverride;
      this._muxType = value.muxType;
      this._name = value.name;
      this._ndiscforward = value.ndiscforward;
      this._netbiosForward = value.netbiosForward;
      this._netflowSampler = value.netflowSampler;
      this._npQosProfile = value.npQosProfile;
      this._npuFastpath = value.npuFastpath;
      this._nst = value.nst;
      this._outForceVlanCos = value.outForceVlanCos;
      this._outbandwidth = value.outbandwidth;
      this._padtRetryTimeout = value.padtRetryTimeout;
      this._password = value.password;
      this._peerInterface = value.peerInterface;
      this._phyMode = value.phyMode;
      this._pingServStatus = value.pingServStatus;
      this._poe = value.poe;
      this._pollingInterval = value.pollingInterval;
      this._portMirroring = value.portMirroring;
      this._pppoeUnnumberedNegotiate = value.pppoeUnnumberedNegotiate;
      this._pptpAuthType = value.pptpAuthType;
      this._pptpClient = value.pptpClient;
      this._pptpPassword = value.pptpPassword;
      this._pptpServerIp = value.pptpServerIp;
      this._pptpTimeout = value.pptpTimeout;
      this._pptpUser = value.pptpUser;
      this._preserveSessionRoute = value.preserveSessionRoute;
      this._priority = value.priority;
      this._priorityOverride = value.priorityOverride;
      this._proxyCaptivePortal = value.proxyCaptivePortal;
      this._pvcAtmQos = value.pvcAtmQos;
      this._pvcChan = value.pvcChan;
      this._pvcCrc = value.pvcCrc;
      this._pvcPcr = value.pvcPcr;
      this._pvcScr = value.pvcScr;
      this._pvcVlanId = value.pvcVlanId;
      this._pvcVlanRxId = value.pvcVlanRxId;
      this._pvcVlanRxOp = value.pvcVlanRxOp;
      this._pvcVlanTxId = value.pvcVlanTxId;
      this._pvcVlanTxOp = value.pvcVlanTxOp;
      this._reachableTime = value.reachableTime;
      this._redundantInterface = value.redundantInterface;
      this._remoteIp = value.remoteIp;
      this._replacemsgOverrideGroup = value.replacemsgOverrideGroup;
      this._retransmission = value.retransmission;
      this._ringRx = value.ringRx;
      this._ringTx = value.ringTx;
      this._role = value.role;
      this._sampleDirection = value.sampleDirection;
      this._sampleRate = value.sampleRate;
      this._scanBotnetConnections = value.scanBotnetConnections;
      this._secondaryIp = value.secondaryIp;
      this._security8021XDynamicVlanId = value.security8021XDynamicVlanId;
      this._security8021XMaster = value.security8021XMaster;
      this._security8021XMemberMode = value.security8021XMemberMode;
      this._security8021XMode = value.security8021XMode;
      this._securityExemptList = value.securityExemptList;
      this._securityExternalLogout = value.securityExternalLogout;
      this._securityExternalWeb = value.securityExternalWeb;
      this._securityGroups = value.securityGroups;
      this._securityMacAuthBypass = value.securityMacAuthBypass;
      this._securityMode = value.securityMode;
      this._securityRedirectUrl = value.securityRedirectUrl;
      this._selectProfile30A35B = value.selectProfile30A35B;
      this._serviceName = value.serviceName;
      this._sflowSampler = value.sflowSampler;
      this._sfpDsl = value.sfpDsl;
      this._sfpDslAdslFallback = value.sfpDslAdslFallback;
      this._sfpDslAutodetect = value.sfpDslAutodetect;
      this._sfpDslMac = value.sfpDslMac;
      this._speed = value.speed;
      this._spilloverThreshold = value.spilloverThreshold;
      this._srcCheck = value.srcCheck;
      this._status = value.status;
      this._stp = value.stp;
      this._stpEdge = value.stpEdge;
      this._stpHaSecondary = value.stpHaSecondary;
      this._stpHaSlave = value.stpHaSlave;
      this._stpforward = value.stpforward;
      this._stpforwardMode = value.stpforwardMode;
      this._stripPriorityVlanTag = value.stripPriorityVlanTag;
      this._subst = value.subst;
      this._substituteDstMac = value.substituteDstMac;
      this._swAlgorithm = value.swAlgorithm;
      this._swcFirstCreate = value.swcFirstCreate;
      this._swcVlan = value.swcVlan;
      this._switch = value.switch;
      this._switchControllerAccessVlan = value.switchControllerAccessVlan;
      this._switchControllerArpInspection = value.switchControllerArpInspection;
      this._switchControllerAuth = value.switchControllerAuth;
      this._switchControllerDhcpSnooping = value.switchControllerDhcpSnooping;
      this._switchControllerDhcpSnoopingOption82 = value.switchControllerDhcpSnoopingOption82;
      this._switchControllerDhcpSnoopingVerifyMac = value.switchControllerDhcpSnoopingVerifyMac;
      this._switchControllerDynamic = value.switchControllerDynamic;
      this._switchControllerFeature = value.switchControllerFeature;
      this._switchControllerIgmpSnooping = value.switchControllerIgmpSnooping;
      this._switchControllerIgmpSnoopingFastLeave = value.switchControllerIgmpSnoopingFastLeave;
      this._switchControllerIgmpSnoopingProxy = value.switchControllerIgmpSnoopingProxy;
      this._switchControllerIotScanning = value.switchControllerIotScanning;
      this._switchControllerLearningLimit = value.switchControllerLearningLimit;
      this._switchControllerMgmtVlan = value.switchControllerMgmtVlan;
      this._switchControllerNac = value.switchControllerNac;
      this._switchControllerNetflowCollect = value.switchControllerNetflowCollect;
      this._switchControllerOffload = value.switchControllerOffload;
      this._switchControllerOffloadGw = value.switchControllerOffloadGw;
      this._switchControllerOffloadIp = value.switchControllerOffloadIp;
      this._switchControllerOffloading = value.switchControllerOffloading;
      this._switchControllerOffloadingGw = value.switchControllerOffloadingGw;
      this._switchControllerOffloadingIp = value.switchControllerOffloadingIp;
      this._switchControllerRadiusServer = value.switchControllerRadiusServer;
      this._switchControllerRspanMode = value.switchControllerRspanMode;
      this._switchControllerSourceIp = value.switchControllerSourceIp;
      this._switchControllerTrafficPolicy = value.switchControllerTrafficPolicy;
      this._systemId = value.systemId;
      this._systemIdType = value.systemIdType;
      this._tcMode = value.tcMode;
      this._tcpMss = value.tcpMss;
      this._trunk = value.trunk;
      this._trustIp61 = value.trustIp61;
      this._trustIp62 = value.trustIp62;
      this._trustIp63 = value.trustIp63;
      this._trustIp1 = value.trustIp1;
      this._trustIp2 = value.trustIp2;
      this._trustIp3 = value.trustIp3;
      this._type = value.type;
      this._username = value.username;
      this._vci = value.vci;
      this._vectoring = value.vectoring;
      this._vindex = value.vindex;
      this._vlanOpMode = value.vlanOpMode;
      this._vlanProtocol = value.vlanProtocol;
      this._vlanforward = value.vlanforward;
      this._vlanid = value.vlanid;
      this._vpi = value.vpi;
      this._vrf = value.vrf;
      this._vrrpVirtualMac = value.vrrpVirtualMac;
      this._wccp = value.wccp;
      this._weight = value.weight;
      this._wifi5GThreshold = value.wifi5GThreshold;
      this._wifiAcl = value.wifiAcl;
      this._wifiApBand = value.wifiApBand;
      this._wifiAuth = value.wifiAuth;
      this._wifiAutoConnect = value.wifiAutoConnect;
      this._wifiAutoSave = value.wifiAutoSave;
      this._wifiBroadcastSsid = value.wifiBroadcastSsid;
      this._wifiDnsServer1 = value.wifiDnsServer1;
      this._wifiDnsServer2 = value.wifiDnsServer2;
      this._wifiEncrypt = value.wifiEncrypt;
      this._wifiFragmentThreshold = value.wifiFragmentThreshold;
      this._wifiGateway = value.wifiGateway;
      this._wifiKey = value.wifiKey;
      this._wifiKeyindex = value.wifiKeyindex;
      this._wifiMacFilter = value.wifiMacFilter;
      this._wifiPassphrase = value.wifiPassphrase;
      this._wifiRadiusServer = value.wifiRadiusServer;
      this._wifiRtsThreshold = value.wifiRtsThreshold;
      this._wifiSecurity = value.wifiSecurity;
      this._wifiSsid = value.wifiSsid;
      this._wifiUsergroup = value.wifiUsergroup;
      this._winsIp = value.winsIp;
      this._ipv6.internalValue = value.ipv6;
      this._secondaryip.internalValue = value.secondaryip;
      this._vrrp.internalValue = value.vrrp;
    }
  }

  // ac_name - computed: false, optional: true, required: false
  private _acName?: string; 
  public get acName() {
    return this.getStringAttribute('ac_name');
  }
  public set acName(value: string) {
    this._acName = value;
  }
  public resetAcName() {
    this._acName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acNameInput() {
    return this._acName;
  }

  // aggregate - computed: false, optional: true, required: false
  private _aggregate?: string; 
  public get aggregate() {
    return this.getStringAttribute('aggregate');
  }
  public set aggregate(value: string) {
    this._aggregate = value;
  }
  public resetAggregate() {
    this._aggregate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateInput() {
    return this._aggregate;
  }

  // aggregate_type - computed: true, optional: true, required: false
  private _aggregateType?: string; 
  public get aggregateType() {
    return this.getStringAttribute('aggregate_type');
  }
  public set aggregateType(value: string) {
    this._aggregateType = value;
  }
  public resetAggregateType() {
    this._aggregateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateTypeInput() {
    return this._aggregateType;
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // allowaccess - computed: true, optional: true, required: false
  private _allowaccess?: string[]; 
  public get allowaccess() {
    return cdktf.Fn.tolist(this.getListAttribute('allowaccess'));
  }
  public set allowaccess(value: string[]) {
    this._allowaccess = value;
  }
  public resetAllowaccess() {
    this._allowaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowaccessInput() {
    return this._allowaccess;
  }

  // annex - computed: true, optional: true, required: false
  private _annex?: string; 
  public get annex() {
    return this.getStringAttribute('annex');
  }
  public set annex(value: string) {
    this._annex = value;
  }
  public resetAnnex() {
    this._annex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annexInput() {
    return this._annex;
  }

  // ap_discover - computed: true, optional: true, required: false
  private _apDiscover?: string; 
  public get apDiscover() {
    return this.getStringAttribute('ap_discover');
  }
  public set apDiscover(value: string) {
    this._apDiscover = value;
  }
  public resetApDiscover() {
    this._apDiscover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apDiscoverInput() {
    return this._apDiscover;
  }

  // arpforward - computed: true, optional: true, required: false
  private _arpforward?: string; 
  public get arpforward() {
    return this.getStringAttribute('arpforward');
  }
  public set arpforward(value: string) {
    this._arpforward = value;
  }
  public resetArpforward() {
    this._arpforward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpforwardInput() {
    return this._arpforward;
  }

  // atm_protocol - computed: false, optional: true, required: false
  private _atmProtocol?: string; 
  public get atmProtocol() {
    return this.getStringAttribute('atm_protocol');
  }
  public set atmProtocol(value: string) {
    this._atmProtocol = value;
  }
  public resetAtmProtocol() {
    this._atmProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atmProtocolInput() {
    return this._atmProtocol;
  }

  // auth_cert - computed: false, optional: true, required: false
  private _authCert?: string; 
  public get authCert() {
    return this.getStringAttribute('auth_cert');
  }
  public set authCert(value: string) {
    this._authCert = value;
  }
  public resetAuthCert() {
    this._authCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCertInput() {
    return this._authCert;
  }

  // auth_portal_addr - computed: false, optional: true, required: false
  private _authPortalAddr?: string; 
  public get authPortalAddr() {
    return this.getStringAttribute('auth_portal_addr');
  }
  public set authPortalAddr(value: string) {
    this._authPortalAddr = value;
  }
  public resetAuthPortalAddr() {
    this._authPortalAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPortalAddrInput() {
    return this._authPortalAddr;
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // auto_auth_extension_device - computed: true, optional: true, required: false
  private _autoAuthExtensionDevice?: string; 
  public get autoAuthExtensionDevice() {
    return this.getStringAttribute('auto_auth_extension_device');
  }
  public set autoAuthExtensionDevice(value: string) {
    this._autoAuthExtensionDevice = value;
  }
  public resetAutoAuthExtensionDevice() {
    this._autoAuthExtensionDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAuthExtensionDeviceInput() {
    return this._autoAuthExtensionDevice;
  }

  // bandwidth_measure_time - computed: false, optional: true, required: false
  private _bandwidthMeasureTime?: number; 
  public get bandwidthMeasureTime() {
    return this.getNumberAttribute('bandwidth_measure_time');
  }
  public set bandwidthMeasureTime(value: number) {
    this._bandwidthMeasureTime = value;
  }
  public resetBandwidthMeasureTime() {
    this._bandwidthMeasureTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthMeasureTimeInput() {
    return this._bandwidthMeasureTime;
  }

  // bfd - computed: true, optional: true, required: false
  private _bfd?: string; 
  public get bfd() {
    return this.getStringAttribute('bfd');
  }
  public set bfd(value: string) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
  }

  // bfd_desired_min_tx - computed: false, optional: true, required: false
  private _bfdDesiredMinTx?: number; 
  public get bfdDesiredMinTx() {
    return this.getNumberAttribute('bfd_desired_min_tx');
  }
  public set bfdDesiredMinTx(value: number) {
    this._bfdDesiredMinTx = value;
  }
  public resetBfdDesiredMinTx() {
    this._bfdDesiredMinTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdDesiredMinTxInput() {
    return this._bfdDesiredMinTx;
  }

  // bfd_detect_mult - computed: false, optional: true, required: false
  private _bfdDetectMult?: number; 
  public get bfdDetectMult() {
    return this.getNumberAttribute('bfd_detect_mult');
  }
  public set bfdDetectMult(value: number) {
    this._bfdDetectMult = value;
  }
  public resetBfdDetectMult() {
    this._bfdDetectMult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdDetectMultInput() {
    return this._bfdDetectMult;
  }

  // bfd_required_min_rx - computed: false, optional: true, required: false
  private _bfdRequiredMinRx?: number; 
  public get bfdRequiredMinRx() {
    return this.getNumberAttribute('bfd_required_min_rx');
  }
  public set bfdRequiredMinRx(value: number) {
    this._bfdRequiredMinRx = value;
  }
  public resetBfdRequiredMinRx() {
    this._bfdRequiredMinRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdRequiredMinRxInput() {
    return this._bfdRequiredMinRx;
  }

  // broadcast_forticlient_discovery - computed: false, optional: true, required: false
  private _broadcastForticlientDiscovery?: string; 
  public get broadcastForticlientDiscovery() {
    return this.getStringAttribute('broadcast_forticlient_discovery');
  }
  public set broadcastForticlientDiscovery(value: string) {
    this._broadcastForticlientDiscovery = value;
  }
  public resetBroadcastForticlientDiscovery() {
    this._broadcastForticlientDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastForticlientDiscoveryInput() {
    return this._broadcastForticlientDiscovery;
  }

  // broadcast_forward - computed: true, optional: true, required: false
  private _broadcastForward?: string; 
  public get broadcastForward() {
    return this.getStringAttribute('broadcast_forward');
  }
  public set broadcastForward(value: string) {
    this._broadcastForward = value;
  }
  public resetBroadcastForward() {
    this._broadcastForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastForwardInput() {
    return this._broadcastForward;
  }

  // captive_portal - computed: false, optional: true, required: false
  private _captivePortal?: number; 
  public get captivePortal() {
    return this.getNumberAttribute('captive_portal');
  }
  public set captivePortal(value: number) {
    this._captivePortal = value;
  }
  public resetCaptivePortal() {
    this._captivePortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captivePortalInput() {
    return this._captivePortal;
  }

  // cli_conn_status - computed: false, optional: true, required: false
  private _cliConnStatus?: number; 
  public get cliConnStatus() {
    return this.getNumberAttribute('cli_conn_status');
  }
  public set cliConnStatus(value: number) {
    this._cliConnStatus = value;
  }
  public resetCliConnStatus() {
    this._cliConnStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliConnStatusInput() {
    return this._cliConnStatus;
  }

  // color - computed: false, optional: true, required: false
  private _color?: number; 
  public get color() {
    return this.getNumberAttribute('color');
  }
  public set color(value: number) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // ddns - computed: false, optional: true, required: false
  private _ddns?: string; 
  public get ddns() {
    return this.getStringAttribute('ddns');
  }
  public set ddns(value: string) {
    this._ddns = value;
  }
  public resetDdns() {
    this._ddns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsInput() {
    return this._ddns;
  }

  // ddns_auth - computed: false, optional: true, required: false
  private _ddnsAuth?: string; 
  public get ddnsAuth() {
    return this.getStringAttribute('ddns_auth');
  }
  public set ddnsAuth(value: string) {
    this._ddnsAuth = value;
  }
  public resetDdnsAuth() {
    this._ddnsAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsAuthInput() {
    return this._ddnsAuth;
  }

  // ddns_domain - computed: false, optional: true, required: false
  private _ddnsDomain?: string; 
  public get ddnsDomain() {
    return this.getStringAttribute('ddns_domain');
  }
  public set ddnsDomain(value: string) {
    this._ddnsDomain = value;
  }
  public resetDdnsDomain() {
    this._ddnsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsDomainInput() {
    return this._ddnsDomain;
  }

  // ddns_key - computed: false, optional: true, required: false
  private _ddnsKey?: string; 
  public get ddnsKey() {
    return this.getStringAttribute('ddns_key');
  }
  public set ddnsKey(value: string) {
    this._ddnsKey = value;
  }
  public resetDdnsKey() {
    this._ddnsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsKeyInput() {
    return this._ddnsKey;
  }

  // ddns_keyname - computed: false, optional: true, required: false
  private _ddnsKeyname?: string; 
  public get ddnsKeyname() {
    return this.getStringAttribute('ddns_keyname');
  }
  public set ddnsKeyname(value: string) {
    this._ddnsKeyname = value;
  }
  public resetDdnsKeyname() {
    this._ddnsKeyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsKeynameInput() {
    return this._ddnsKeyname;
  }

  // ddns_password - computed: true, optional: true, required: false
  private _ddnsPassword?: string[]; 
  public get ddnsPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('ddns_password'));
  }
  public set ddnsPassword(value: string[]) {
    this._ddnsPassword = value;
  }
  public resetDdnsPassword() {
    this._ddnsPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsPasswordInput() {
    return this._ddnsPassword;
  }

  // ddns_server - computed: false, optional: true, required: false
  private _ddnsServer?: string; 
  public get ddnsServer() {
    return this.getStringAttribute('ddns_server');
  }
  public set ddnsServer(value: string) {
    this._ddnsServer = value;
  }
  public resetDdnsServer() {
    this._ddnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsServerInput() {
    return this._ddnsServer;
  }

  // ddns_server_ip - computed: false, optional: true, required: false
  private _ddnsServerIp?: string; 
  public get ddnsServerIp() {
    return this.getStringAttribute('ddns_server_ip');
  }
  public set ddnsServerIp(value: string) {
    this._ddnsServerIp = value;
  }
  public resetDdnsServerIp() {
    this._ddnsServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsServerIpInput() {
    return this._ddnsServerIp;
  }

  // ddns_sn - computed: false, optional: true, required: false
  private _ddnsSn?: string; 
  public get ddnsSn() {
    return this.getStringAttribute('ddns_sn');
  }
  public set ddnsSn(value: string) {
    this._ddnsSn = value;
  }
  public resetDdnsSn() {
    this._ddnsSn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsSnInput() {
    return this._ddnsSn;
  }

  // ddns_ttl - computed: false, optional: true, required: false
  private _ddnsTtl?: number; 
  public get ddnsTtl() {
    return this.getNumberAttribute('ddns_ttl');
  }
  public set ddnsTtl(value: number) {
    this._ddnsTtl = value;
  }
  public resetDdnsTtl() {
    this._ddnsTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsTtlInput() {
    return this._ddnsTtl;
  }

  // ddns_username - computed: false, optional: true, required: false
  private _ddnsUsername?: string; 
  public get ddnsUsername() {
    return this.getStringAttribute('ddns_username');
  }
  public set ddnsUsername(value: string) {
    this._ddnsUsername = value;
  }
  public resetDdnsUsername() {
    this._ddnsUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsUsernameInput() {
    return this._ddnsUsername;
  }

  // ddns_zone - computed: false, optional: true, required: false
  private _ddnsZone?: string; 
  public get ddnsZone() {
    return this.getStringAttribute('ddns_zone');
  }
  public set ddnsZone(value: string) {
    this._ddnsZone = value;
  }
  public resetDdnsZone() {
    this._ddnsZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsZoneInput() {
    return this._ddnsZone;
  }

  // dedicated_to - computed: true, optional: true, required: false
  private _dedicatedTo?: string; 
  public get dedicatedTo() {
    return this.getStringAttribute('dedicated_to');
  }
  public set dedicatedTo(value: string) {
    this._dedicatedTo = value;
  }
  public resetDedicatedTo() {
    this._dedicatedTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedToInput() {
    return this._dedicatedTo;
  }

  // default_purdue_level - computed: true, optional: true, required: false
  private _defaultPurdueLevel?: string; 
  public get defaultPurdueLevel() {
    return this.getStringAttribute('default_purdue_level');
  }
  public set defaultPurdueLevel(value: string) {
    this._defaultPurdueLevel = value;
  }
  public resetDefaultPurdueLevel() {
    this._defaultPurdueLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPurdueLevelInput() {
    return this._defaultPurdueLevel;
  }

  // defaultgw - computed: false, optional: true, required: false
  private _defaultgw?: string; 
  public get defaultgw() {
    return this.getStringAttribute('defaultgw');
  }
  public set defaultgw(value: string) {
    this._defaultgw = value;
  }
  public resetDefaultgw() {
    this._defaultgw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultgwInput() {
    return this._defaultgw;
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

  // detected_peer_mtu - computed: false, optional: true, required: false
  private _detectedPeerMtu?: number; 
  public get detectedPeerMtu() {
    return this.getNumberAttribute('detected_peer_mtu');
  }
  public set detectedPeerMtu(value: number) {
    this._detectedPeerMtu = value;
  }
  public resetDetectedPeerMtu() {
    this._detectedPeerMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectedPeerMtuInput() {
    return this._detectedPeerMtu;
  }

  // detectprotocol - computed: true, optional: true, required: false
  private _detectprotocol?: string[]; 
  public get detectprotocol() {
    return cdktf.Fn.tolist(this.getListAttribute('detectprotocol'));
  }
  public set detectprotocol(value: string[]) {
    this._detectprotocol = value;
  }
  public resetDetectprotocol() {
    this._detectprotocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectprotocolInput() {
    return this._detectprotocol;
  }

  // detectserver - computed: false, optional: true, required: false
  private _detectserver?: string; 
  public get detectserver() {
    return this.getStringAttribute('detectserver');
  }
  public set detectserver(value: string) {
    this._detectserver = value;
  }
  public resetDetectserver() {
    this._detectserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectserverInput() {
    return this._detectserver;
  }

  // device_access_list - computed: false, optional: true, required: false
  private _deviceAccessList?: string; 
  public get deviceAccessList() {
    return this.getStringAttribute('device_access_list');
  }
  public set deviceAccessList(value: string) {
    this._deviceAccessList = value;
  }
  public resetDeviceAccessList() {
    this._deviceAccessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceAccessListInput() {
    return this._deviceAccessList;
  }

  // device_identification - computed: true, optional: true, required: false
  private _deviceIdentification?: string; 
  public get deviceIdentification() {
    return this.getStringAttribute('device_identification');
  }
  public set deviceIdentification(value: string) {
    this._deviceIdentification = value;
  }
  public resetDeviceIdentification() {
    this._deviceIdentification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdentificationInput() {
    return this._deviceIdentification;
  }

  // device_identification_active_scan - computed: false, optional: true, required: false
  private _deviceIdentificationActiveScan?: string; 
  public get deviceIdentificationActiveScan() {
    return this.getStringAttribute('device_identification_active_scan');
  }
  public set deviceIdentificationActiveScan(value: string) {
    this._deviceIdentificationActiveScan = value;
  }
  public resetDeviceIdentificationActiveScan() {
    this._deviceIdentificationActiveScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdentificationActiveScanInput() {
    return this._deviceIdentificationActiveScan;
  }

  // device_netscan - computed: false, optional: true, required: false
  private _deviceNetscan?: string; 
  public get deviceNetscan() {
    return this.getStringAttribute('device_netscan');
  }
  public set deviceNetscan(value: string) {
    this._deviceNetscan = value;
  }
  public resetDeviceNetscan() {
    this._deviceNetscan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNetscanInput() {
    return this._deviceNetscan;
  }

  // device_user_identification - computed: false, optional: true, required: false
  private _deviceUserIdentification?: string; 
  public get deviceUserIdentification() {
    return this.getStringAttribute('device_user_identification');
  }
  public set deviceUserIdentification(value: string) {
    this._deviceUserIdentification = value;
  }
  public resetDeviceUserIdentification() {
    this._deviceUserIdentification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceUserIdentificationInput() {
    return this._deviceUserIdentification;
  }

  // devindex - computed: false, optional: true, required: false
  private _devindex?: number; 
  public get devindex() {
    return this.getNumberAttribute('devindex');
  }
  public set devindex(value: number) {
    this._devindex = value;
  }
  public resetDevindex() {
    this._devindex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devindexInput() {
    return this._devindex;
  }

  // dhcp_broadcast_flag - computed: true, optional: true, required: false
  private _dhcpBroadcastFlag?: string; 
  public get dhcpBroadcastFlag() {
    return this.getStringAttribute('dhcp_broadcast_flag');
  }
  public set dhcpBroadcastFlag(value: string) {
    this._dhcpBroadcastFlag = value;
  }
  public resetDhcpBroadcastFlag() {
    this._dhcpBroadcastFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpBroadcastFlagInput() {
    return this._dhcpBroadcastFlag;
  }

  // dhcp_classless_route_addition - computed: true, optional: true, required: false
  private _dhcpClasslessRouteAddition?: string; 
  public get dhcpClasslessRouteAddition() {
    return this.getStringAttribute('dhcp_classless_route_addition');
  }
  public set dhcpClasslessRouteAddition(value: string) {
    this._dhcpClasslessRouteAddition = value;
  }
  public resetDhcpClasslessRouteAddition() {
    this._dhcpClasslessRouteAddition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpClasslessRouteAdditionInput() {
    return this._dhcpClasslessRouteAddition;
  }

  // dhcp_client_identifier - computed: false, optional: true, required: false
  private _dhcpClientIdentifier?: string; 
  public get dhcpClientIdentifier() {
    return this.getStringAttribute('dhcp_client_identifier');
  }
  public set dhcpClientIdentifier(value: string) {
    this._dhcpClientIdentifier = value;
  }
  public resetDhcpClientIdentifier() {
    this._dhcpClientIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpClientIdentifierInput() {
    return this._dhcpClientIdentifier;
  }

  // dhcp_relay_agent_option - computed: false, optional: true, required: false
  private _dhcpRelayAgentOption?: string; 
  public get dhcpRelayAgentOption() {
    return this.getStringAttribute('dhcp_relay_agent_option');
  }
  public set dhcpRelayAgentOption(value: string) {
    this._dhcpRelayAgentOption = value;
  }
  public resetDhcpRelayAgentOption() {
    this._dhcpRelayAgentOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayAgentOptionInput() {
    return this._dhcpRelayAgentOption;
  }

  // dhcp_relay_circuit_id - computed: false, optional: true, required: false
  private _dhcpRelayCircuitId?: string; 
  public get dhcpRelayCircuitId() {
    return this.getStringAttribute('dhcp_relay_circuit_id');
  }
  public set dhcpRelayCircuitId(value: string) {
    this._dhcpRelayCircuitId = value;
  }
  public resetDhcpRelayCircuitId() {
    this._dhcpRelayCircuitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayCircuitIdInput() {
    return this._dhcpRelayCircuitId;
  }

  // dhcp_relay_interface - computed: false, optional: true, required: false
  private _dhcpRelayInterface?: string; 
  public get dhcpRelayInterface() {
    return this.getStringAttribute('dhcp_relay_interface');
  }
  public set dhcpRelayInterface(value: string) {
    this._dhcpRelayInterface = value;
  }
  public resetDhcpRelayInterface() {
    this._dhcpRelayInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayInterfaceInput() {
    return this._dhcpRelayInterface;
  }

  // dhcp_relay_interface_select_method - computed: true, optional: true, required: false
  private _dhcpRelayInterfaceSelectMethod?: string; 
  public get dhcpRelayInterfaceSelectMethod() {
    return this.getStringAttribute('dhcp_relay_interface_select_method');
  }
  public set dhcpRelayInterfaceSelectMethod(value: string) {
    this._dhcpRelayInterfaceSelectMethod = value;
  }
  public resetDhcpRelayInterfaceSelectMethod() {
    this._dhcpRelayInterfaceSelectMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayInterfaceSelectMethodInput() {
    return this._dhcpRelayInterfaceSelectMethod;
  }

  // dhcp_relay_ip - computed: true, optional: true, required: false
  private _dhcpRelayIp?: string[]; 
  public get dhcpRelayIp() {
    return cdktf.Fn.tolist(this.getListAttribute('dhcp_relay_ip'));
  }
  public set dhcpRelayIp(value: string[]) {
    this._dhcpRelayIp = value;
  }
  public resetDhcpRelayIp() {
    this._dhcpRelayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayIpInput() {
    return this._dhcpRelayIp;
  }

  // dhcp_relay_link_selection - computed: true, optional: true, required: false
  private _dhcpRelayLinkSelection?: string; 
  public get dhcpRelayLinkSelection() {
    return this.getStringAttribute('dhcp_relay_link_selection');
  }
  public set dhcpRelayLinkSelection(value: string) {
    this._dhcpRelayLinkSelection = value;
  }
  public resetDhcpRelayLinkSelection() {
    this._dhcpRelayLinkSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayLinkSelectionInput() {
    return this._dhcpRelayLinkSelection;
  }

  // dhcp_relay_request_all_server - computed: true, optional: true, required: false
  private _dhcpRelayRequestAllServer?: string; 
  public get dhcpRelayRequestAllServer() {
    return this.getStringAttribute('dhcp_relay_request_all_server');
  }
  public set dhcpRelayRequestAllServer(value: string) {
    this._dhcpRelayRequestAllServer = value;
  }
  public resetDhcpRelayRequestAllServer() {
    this._dhcpRelayRequestAllServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayRequestAllServerInput() {
    return this._dhcpRelayRequestAllServer;
  }

  // dhcp_relay_service - computed: true, optional: true, required: false
  private _dhcpRelayService?: string; 
  public get dhcpRelayService() {
    return this.getStringAttribute('dhcp_relay_service');
  }
  public set dhcpRelayService(value: string) {
    this._dhcpRelayService = value;
  }
  public resetDhcpRelayService() {
    this._dhcpRelayService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayServiceInput() {
    return this._dhcpRelayService;
  }

  // dhcp_relay_source_ip - computed: true, optional: true, required: false
  private _dhcpRelaySourceIp?: string; 
  public get dhcpRelaySourceIp() {
    return this.getStringAttribute('dhcp_relay_source_ip');
  }
  public set dhcpRelaySourceIp(value: string) {
    this._dhcpRelaySourceIp = value;
  }
  public resetDhcpRelaySourceIp() {
    this._dhcpRelaySourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelaySourceIpInput() {
    return this._dhcpRelaySourceIp;
  }

  // dhcp_relay_type - computed: false, optional: true, required: false
  private _dhcpRelayType?: string; 
  public get dhcpRelayType() {
    return this.getStringAttribute('dhcp_relay_type');
  }
  public set dhcpRelayType(value: string) {
    this._dhcpRelayType = value;
  }
  public resetDhcpRelayType() {
    this._dhcpRelayType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayTypeInput() {
    return this._dhcpRelayType;
  }

  // dhcp_renew_time - computed: false, optional: true, required: false
  private _dhcpRenewTime?: number; 
  public get dhcpRenewTime() {
    return this.getNumberAttribute('dhcp_renew_time');
  }
  public set dhcpRenewTime(value: number) {
    this._dhcpRenewTime = value;
  }
  public resetDhcpRenewTime() {
    this._dhcpRenewTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRenewTimeInput() {
    return this._dhcpRenewTime;
  }

  // dhcp_smart_relay - computed: true, optional: true, required: false
  private _dhcpSmartRelay?: string; 
  public get dhcpSmartRelay() {
    return this.getStringAttribute('dhcp_smart_relay');
  }
  public set dhcpSmartRelay(value: string) {
    this._dhcpSmartRelay = value;
  }
  public resetDhcpSmartRelay() {
    this._dhcpSmartRelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSmartRelayInput() {
    return this._dhcpSmartRelay;
  }

  // disc_retry_timeout - computed: false, optional: true, required: false
  private _discRetryTimeout?: number; 
  public get discRetryTimeout() {
    return this.getNumberAttribute('disc_retry_timeout');
  }
  public set discRetryTimeout(value: number) {
    this._discRetryTimeout = value;
  }
  public resetDiscRetryTimeout() {
    this._discRetryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discRetryTimeoutInput() {
    return this._discRetryTimeout;
  }

  // disconnect_threshold - computed: false, optional: true, required: false
  private _disconnectThreshold?: number; 
  public get disconnectThreshold() {
    return this.getNumberAttribute('disconnect_threshold');
  }
  public set disconnectThreshold(value: number) {
    this._disconnectThreshold = value;
  }
  public resetDisconnectThreshold() {
    this._disconnectThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disconnectThresholdInput() {
    return this._disconnectThreshold;
  }

  // distance - computed: false, optional: true, required: false
  private _distance?: number; 
  public get distance() {
    return this.getNumberAttribute('distance');
  }
  public set distance(value: number) {
    this._distance = value;
  }
  public resetDistance() {
    this._distance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance;
  }

  // dns_query - computed: false, optional: true, required: false
  private _dnsQuery?: string; 
  public get dnsQuery() {
    return this.getStringAttribute('dns_query');
  }
  public set dnsQuery(value: string) {
    this._dnsQuery = value;
  }
  public resetDnsQuery() {
    this._dnsQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsQueryInput() {
    return this._dnsQuery;
  }

  // dns_server_override - computed: false, optional: true, required: false
  private _dnsServerOverride?: string; 
  public get dnsServerOverride() {
    return this.getStringAttribute('dns_server_override');
  }
  public set dnsServerOverride(value: string) {
    this._dnsServerOverride = value;
  }
  public resetDnsServerOverride() {
    this._dnsServerOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerOverrideInput() {
    return this._dnsServerOverride;
  }

  // dns_server_protocol - computed: true, optional: true, required: false
  private _dnsServerProtocol?: string[]; 
  public get dnsServerProtocol() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_server_protocol'));
  }
  public set dnsServerProtocol(value: string[]) {
    this._dnsServerProtocol = value;
  }
  public resetDnsServerProtocol() {
    this._dnsServerProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerProtocolInput() {
    return this._dnsServerProtocol;
  }

  // drop_fragment - computed: true, optional: true, required: false
  private _dropFragment?: string; 
  public get dropFragment() {
    return this.getStringAttribute('drop_fragment');
  }
  public set dropFragment(value: string) {
    this._dropFragment = value;
  }
  public resetDropFragment() {
    this._dropFragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropFragmentInput() {
    return this._dropFragment;
  }

  // drop_overlapped_fragment - computed: true, optional: true, required: false
  private _dropOverlappedFragment?: string; 
  public get dropOverlappedFragment() {
    return this.getStringAttribute('drop_overlapped_fragment');
  }
  public set dropOverlappedFragment(value: string) {
    this._dropOverlappedFragment = value;
  }
  public resetDropOverlappedFragment() {
    this._dropOverlappedFragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropOverlappedFragmentInput() {
    return this._dropOverlappedFragment;
  }

  // eap_ca_cert - computed: true, optional: true, required: false
  private _eapCaCert?: string[]; 
  public get eapCaCert() {
    return cdktf.Fn.tolist(this.getListAttribute('eap_ca_cert'));
  }
  public set eapCaCert(value: string[]) {
    this._eapCaCert = value;
  }
  public resetEapCaCert() {
    this._eapCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapCaCertInput() {
    return this._eapCaCert;
  }

  // eap_identity - computed: false, optional: true, required: false
  private _eapIdentity?: string; 
  public get eapIdentity() {
    return this.getStringAttribute('eap_identity');
  }
  public set eapIdentity(value: string) {
    this._eapIdentity = value;
  }
  public resetEapIdentity() {
    this._eapIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapIdentityInput() {
    return this._eapIdentity;
  }

  // eap_method - computed: false, optional: true, required: false
  private _eapMethod?: string; 
  public get eapMethod() {
    return this.getStringAttribute('eap_method');
  }
  public set eapMethod(value: string) {
    this._eapMethod = value;
  }
  public resetEapMethod() {
    this._eapMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapMethodInput() {
    return this._eapMethod;
  }

  // eap_password - computed: true, optional: true, required: false
  private _eapPassword?: string[]; 
  public get eapPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('eap_password'));
  }
  public set eapPassword(value: string[]) {
    this._eapPassword = value;
  }
  public resetEapPassword() {
    this._eapPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapPasswordInput() {
    return this._eapPassword;
  }

  // eap_supplicant - computed: true, optional: true, required: false
  private _eapSupplicant?: string; 
  public get eapSupplicant() {
    return this.getStringAttribute('eap_supplicant');
  }
  public set eapSupplicant(value: string) {
    this._eapSupplicant = value;
  }
  public resetEapSupplicant() {
    this._eapSupplicant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapSupplicantInput() {
    return this._eapSupplicant;
  }

  // eap_user_cert - computed: true, optional: true, required: false
  private _eapUserCert?: string[]; 
  public get eapUserCert() {
    return cdktf.Fn.tolist(this.getListAttribute('eap_user_cert'));
  }
  public set eapUserCert(value: string[]) {
    this._eapUserCert = value;
  }
  public resetEapUserCert() {
    this._eapUserCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapUserCertInput() {
    return this._eapUserCert;
  }

  // egress_cos - computed: true, optional: true, required: false
  private _egressCos?: string; 
  public get egressCos() {
    return this.getStringAttribute('egress_cos');
  }
  public set egressCos(value: string) {
    this._egressCos = value;
  }
  public resetEgressCos() {
    this._egressCos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressCosInput() {
    return this._egressCos;
  }

  // egress_shaping_profile - computed: false, optional: true, required: false
  private _egressShapingProfile?: string; 
  public get egressShapingProfile() {
    return this.getStringAttribute('egress_shaping_profile');
  }
  public set egressShapingProfile(value: string) {
    this._egressShapingProfile = value;
  }
  public resetEgressShapingProfile() {
    this._egressShapingProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressShapingProfileInput() {
    return this._egressShapingProfile;
  }

  // eip - computed: true, optional: true, required: false
  private _eip?: string; 
  public get eip() {
    return this.getStringAttribute('eip');
  }
  public set eip(value: string) {
    this._eip = value;
  }
  public resetEip() {
    this._eip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipInput() {
    return this._eip;
  }

  // endpoint_compliance - computed: false, optional: true, required: false
  private _endpointCompliance?: string; 
  public get endpointCompliance() {
    return this.getStringAttribute('endpoint_compliance');
  }
  public set endpointCompliance(value: string) {
    this._endpointCompliance = value;
  }
  public resetEndpointCompliance() {
    this._endpointCompliance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointComplianceInput() {
    return this._endpointCompliance;
  }

  // estimated_downstream_bandwidth - computed: false, optional: true, required: false
  private _estimatedDownstreamBandwidth?: number; 
  public get estimatedDownstreamBandwidth() {
    return this.getNumberAttribute('estimated_downstream_bandwidth');
  }
  public set estimatedDownstreamBandwidth(value: number) {
    this._estimatedDownstreamBandwidth = value;
  }
  public resetEstimatedDownstreamBandwidth() {
    this._estimatedDownstreamBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimatedDownstreamBandwidthInput() {
    return this._estimatedDownstreamBandwidth;
  }

  // estimated_upstream_bandwidth - computed: false, optional: true, required: false
  private _estimatedUpstreamBandwidth?: number; 
  public get estimatedUpstreamBandwidth() {
    return this.getNumberAttribute('estimated_upstream_bandwidth');
  }
  public set estimatedUpstreamBandwidth(value: number) {
    this._estimatedUpstreamBandwidth = value;
  }
  public resetEstimatedUpstreamBandwidth() {
    this._estimatedUpstreamBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estimatedUpstreamBandwidthInput() {
    return this._estimatedUpstreamBandwidth;
  }

  // explicit_ftp_proxy - computed: true, optional: true, required: false
  private _explicitFtpProxy?: string; 
  public get explicitFtpProxy() {
    return this.getStringAttribute('explicit_ftp_proxy');
  }
  public set explicitFtpProxy(value: string) {
    this._explicitFtpProxy = value;
  }
  public resetExplicitFtpProxy() {
    this._explicitFtpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitFtpProxyInput() {
    return this._explicitFtpProxy;
  }

  // explicit_web_proxy - computed: true, optional: true, required: false
  private _explicitWebProxy?: string; 
  public get explicitWebProxy() {
    return this.getStringAttribute('explicit_web_proxy');
  }
  public set explicitWebProxy(value: string) {
    this._explicitWebProxy = value;
  }
  public resetExplicitWebProxy() {
    this._explicitWebProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitWebProxyInput() {
    return this._explicitWebProxy;
  }

  // external - computed: true, optional: true, required: false
  private _external?: string; 
  public get external() {
    return this.getStringAttribute('external');
  }
  public set external(value: string) {
    this._external = value;
  }
  public resetExternal() {
    this._external = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
  }

  // fail_action_on_extender - computed: true, optional: true, required: false
  private _failActionOnExtender?: string; 
  public get failActionOnExtender() {
    return this.getStringAttribute('fail_action_on_extender');
  }
  public set failActionOnExtender(value: string) {
    this._failActionOnExtender = value;
  }
  public resetFailActionOnExtender() {
    this._failActionOnExtender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failActionOnExtenderInput() {
    return this._failActionOnExtender;
  }

  // fail_alert_interfaces - computed: false, optional: true, required: false
  private _failAlertInterfaces?: string; 
  public get failAlertInterfaces() {
    return this.getStringAttribute('fail_alert_interfaces');
  }
  public set failAlertInterfaces(value: string) {
    this._failAlertInterfaces = value;
  }
  public resetFailAlertInterfaces() {
    this._failAlertInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failAlertInterfacesInput() {
    return this._failAlertInterfaces;
  }

  // fail_alert_method - computed: false, optional: true, required: false
  private _failAlertMethod?: string; 
  public get failAlertMethod() {
    return this.getStringAttribute('fail_alert_method');
  }
  public set failAlertMethod(value: string) {
    this._failAlertMethod = value;
  }
  public resetFailAlertMethod() {
    this._failAlertMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failAlertMethodInput() {
    return this._failAlertMethod;
  }

  // fail_detect - computed: true, optional: true, required: false
  private _failDetect?: string; 
  public get failDetect() {
    return this.getStringAttribute('fail_detect');
  }
  public set failDetect(value: string) {
    this._failDetect = value;
  }
  public resetFailDetect() {
    this._failDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failDetectInput() {
    return this._failDetect;
  }

  // fail_detect_option - computed: true, optional: true, required: false
  private _failDetectOption?: string[]; 
  public get failDetectOption() {
    return cdktf.Fn.tolist(this.getListAttribute('fail_detect_option'));
  }
  public set failDetectOption(value: string[]) {
    this._failDetectOption = value;
  }
  public resetFailDetectOption() {
    this._failDetectOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failDetectOptionInput() {
    return this._failDetectOption;
  }

  // fdp - computed: false, optional: true, required: false
  private _fdp?: string; 
  public get fdp() {
    return this.getStringAttribute('fdp');
  }
  public set fdp(value: string) {
    this._fdp = value;
  }
  public resetFdp() {
    this._fdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fdpInput() {
    return this._fdp;
  }

  // fortiheartbeat - computed: false, optional: true, required: false
  private _fortiheartbeat?: string; 
  public get fortiheartbeat() {
    return this.getStringAttribute('fortiheartbeat');
  }
  public set fortiheartbeat(value: string) {
    this._fortiheartbeat = value;
  }
  public resetFortiheartbeat() {
    this._fortiheartbeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiheartbeatInput() {
    return this._fortiheartbeat;
  }

  // fortilink - computed: true, optional: true, required: false
  private _fortilink?: string; 
  public get fortilink() {
    return this.getStringAttribute('fortilink');
  }
  public set fortilink(value: string) {
    this._fortilink = value;
  }
  public resetFortilink() {
    this._fortilink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortilinkInput() {
    return this._fortilink;
  }

  // fortilink_backup_link - computed: false, optional: true, required: false
  private _fortilinkBackupLink?: number; 
  public get fortilinkBackupLink() {
    return this.getNumberAttribute('fortilink_backup_link');
  }
  public set fortilinkBackupLink(value: number) {
    this._fortilinkBackupLink = value;
  }
  public resetFortilinkBackupLink() {
    this._fortilinkBackupLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortilinkBackupLinkInput() {
    return this._fortilinkBackupLink;
  }

  // fortilink_neighbor_detect - computed: true, optional: true, required: false
  private _fortilinkNeighborDetect?: string; 
  public get fortilinkNeighborDetect() {
    return this.getStringAttribute('fortilink_neighbor_detect');
  }
  public set fortilinkNeighborDetect(value: string) {
    this._fortilinkNeighborDetect = value;
  }
  public resetFortilinkNeighborDetect() {
    this._fortilinkNeighborDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortilinkNeighborDetectInput() {
    return this._fortilinkNeighborDetect;
  }

  // fortilink_split_interface - computed: false, optional: true, required: false
  private _fortilinkSplitInterface?: string; 
  public get fortilinkSplitInterface() {
    return this.getStringAttribute('fortilink_split_interface');
  }
  public set fortilinkSplitInterface(value: string) {
    this._fortilinkSplitInterface = value;
  }
  public resetFortilinkSplitInterface() {
    this._fortilinkSplitInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortilinkSplitInterfaceInput() {
    return this._fortilinkSplitInterface;
  }

  // fortilink_stacking - computed: true, optional: true, required: false
  private _fortilinkStacking?: string; 
  public get fortilinkStacking() {
    return this.getStringAttribute('fortilink_stacking');
  }
  public set fortilinkStacking(value: string) {
    this._fortilinkStacking = value;
  }
  public resetFortilinkStacking() {
    this._fortilinkStacking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortilinkStackingInput() {
    return this._fortilinkStacking;
  }

  // forward_domain - computed: false, optional: true, required: false
  private _forwardDomain?: number; 
  public get forwardDomain() {
    return this.getNumberAttribute('forward_domain');
  }
  public set forwardDomain(value: number) {
    this._forwardDomain = value;
  }
  public resetForwardDomain() {
    this._forwardDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardDomainInput() {
    return this._forwardDomain;
  }

  // forward_error_correction - computed: true, optional: true, required: false
  private _forwardErrorCorrection?: string; 
  public get forwardErrorCorrection() {
    return this.getStringAttribute('forward_error_correction');
  }
  public set forwardErrorCorrection(value: string) {
    this._forwardErrorCorrection = value;
  }
  public resetForwardErrorCorrection() {
    this._forwardErrorCorrection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardErrorCorrectionInput() {
    return this._forwardErrorCorrection;
  }

  // fp_anomaly - computed: true, optional: true, required: false
  private _fpAnomaly?: string[]; 
  public get fpAnomaly() {
    return cdktf.Fn.tolist(this.getListAttribute('fp_anomaly'));
  }
  public set fpAnomaly(value: string[]) {
    this._fpAnomaly = value;
  }
  public resetFpAnomaly() {
    this._fpAnomaly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpAnomalyInput() {
    return this._fpAnomaly;
  }

  // fp_disable - computed: true, optional: true, required: false
  private _fpDisable?: string[]; 
  public get fpDisable() {
    return cdktf.Fn.tolist(this.getListAttribute('fp_disable'));
  }
  public set fpDisable(value: string[]) {
    this._fpDisable = value;
  }
  public resetFpDisable() {
    this._fpDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpDisableInput() {
    return this._fpDisable;
  }

  // gateway_address - computed: false, optional: true, required: false
  private _gatewayAddress?: string; 
  public get gatewayAddress() {
    return this.getStringAttribute('gateway_address');
  }
  public set gatewayAddress(value: string) {
    this._gatewayAddress = value;
  }
  public resetGatewayAddress() {
    this._gatewayAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayAddressInput() {
    return this._gatewayAddress;
  }

  // generic_receive_offload - computed: false, optional: true, required: false
  private _genericReceiveOffload?: string; 
  public get genericReceiveOffload() {
    return this.getStringAttribute('generic_receive_offload');
  }
  public set genericReceiveOffload(value: string) {
    this._genericReceiveOffload = value;
  }
  public resetGenericReceiveOffload() {
    this._genericReceiveOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericReceiveOffloadInput() {
    return this._genericReceiveOffload;
  }

  // gi_gk - computed: true, optional: true, required: false
  private _giGk?: string; 
  public get giGk() {
    return this.getStringAttribute('gi_gk');
  }
  public set giGk(value: string) {
    this._giGk = value;
  }
  public resetGiGk() {
    this._giGk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get giGkInput() {
    return this._giGk;
  }

  // gwaddr - computed: false, optional: true, required: false
  private _gwaddr?: string; 
  public get gwaddr() {
    return this.getStringAttribute('gwaddr');
  }
  public set gwaddr(value: string) {
    this._gwaddr = value;
  }
  public resetGwaddr() {
    this._gwaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwaddrInput() {
    return this._gwaddr;
  }

  // gwdetect - computed: false, optional: true, required: false
  private _gwdetect?: string; 
  public get gwdetect() {
    return this.getStringAttribute('gwdetect');
  }
  public set gwdetect(value: string) {
    this._gwdetect = value;
  }
  public resetGwdetect() {
    this._gwdetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwdetectInput() {
    return this._gwdetect;
  }

  // ha_priority - computed: false, optional: true, required: false
  private _haPriority?: number; 
  public get haPriority() {
    return this.getNumberAttribute('ha_priority');
  }
  public set haPriority(value: number) {
    this._haPriority = value;
  }
  public resetHaPriority() {
    this._haPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haPriorityInput() {
    return this._haPriority;
  }

  // icmp_accept_redirect - computed: true, optional: true, required: false
  private _icmpAcceptRedirect?: string; 
  public get icmpAcceptRedirect() {
    return this.getStringAttribute('icmp_accept_redirect');
  }
  public set icmpAcceptRedirect(value: string) {
    this._icmpAcceptRedirect = value;
  }
  public resetIcmpAcceptRedirect() {
    this._icmpAcceptRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpAcceptRedirectInput() {
    return this._icmpAcceptRedirect;
  }

  // icmp_redirect - computed: false, optional: true, required: false
  private _icmpRedirect?: string; 
  public get icmpRedirect() {
    return this.getStringAttribute('icmp_redirect');
  }
  public set icmpRedirect(value: string) {
    this._icmpRedirect = value;
  }
  public resetIcmpRedirect() {
    this._icmpRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpRedirectInput() {
    return this._icmpRedirect;
  }

  // icmp_send_redirect - computed: true, optional: true, required: false
  private _icmpSendRedirect?: string; 
  public get icmpSendRedirect() {
    return this.getStringAttribute('icmp_send_redirect');
  }
  public set icmpSendRedirect(value: string) {
    this._icmpSendRedirect = value;
  }
  public resetIcmpSendRedirect() {
    this._icmpSendRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpSendRedirectInput() {
    return this._icmpSendRedirect;
  }

  // ident_accept - computed: true, optional: true, required: false
  private _identAccept?: string; 
  public get identAccept() {
    return this.getStringAttribute('ident_accept');
  }
  public set identAccept(value: string) {
    this._identAccept = value;
  }
  public resetIdentAccept() {
    this._identAccept = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identAcceptInput() {
    return this._identAccept;
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // if_mdix - computed: false, optional: true, required: false
  private _ifMdix?: string; 
  public get ifMdix() {
    return this.getStringAttribute('if_mdix');
  }
  public set ifMdix(value: string) {
    this._ifMdix = value;
  }
  public resetIfMdix() {
    this._ifMdix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifMdixInput() {
    return this._ifMdix;
  }

  // if_media - computed: false, optional: true, required: false
  private _ifMedia?: string; 
  public get ifMedia() {
    return this.getStringAttribute('if_media');
  }
  public set ifMedia(value: string) {
    this._ifMedia = value;
  }
  public resetIfMedia() {
    this._ifMedia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifMediaInput() {
    return this._ifMedia;
  }

  // ike_saml_server - computed: true, optional: true, required: false
  private _ikeSamlServer?: string[]; 
  public get ikeSamlServer() {
    return cdktf.Fn.tolist(this.getListAttribute('ike_saml_server'));
  }
  public set ikeSamlServer(value: string[]) {
    this._ikeSamlServer = value;
  }
  public resetIkeSamlServer() {
    this._ikeSamlServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeSamlServerInput() {
    return this._ikeSamlServer;
  }

  // in_force_vlan_cos - computed: false, optional: true, required: false
  private _inForceVlanCos?: number; 
  public get inForceVlanCos() {
    return this.getNumberAttribute('in_force_vlan_cos');
  }
  public set inForceVlanCos(value: number) {
    this._inForceVlanCos = value;
  }
  public resetInForceVlanCos() {
    this._inForceVlanCos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inForceVlanCosInput() {
    return this._inForceVlanCos;
  }

  // inbandwidth - computed: false, optional: true, required: false
  private _inbandwidth?: number; 
  public get inbandwidth() {
    return this.getNumberAttribute('inbandwidth');
  }
  public set inbandwidth(value: number) {
    this._inbandwidth = value;
  }
  public resetInbandwidth() {
    this._inbandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inbandwidthInput() {
    return this._inbandwidth;
  }

  // ingress_cos - computed: true, optional: true, required: false
  private _ingressCos?: string; 
  public get ingressCos() {
    return this.getStringAttribute('ingress_cos');
  }
  public set ingressCos(value: string) {
    this._ingressCos = value;
  }
  public resetIngressCos() {
    this._ingressCos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressCosInput() {
    return this._ingressCos;
  }

  // ingress_shaping_profile - computed: false, optional: true, required: false
  private _ingressShapingProfile?: string; 
  public get ingressShapingProfile() {
    return this.getStringAttribute('ingress_shaping_profile');
  }
  public set ingressShapingProfile(value: string) {
    this._ingressShapingProfile = value;
  }
  public resetIngressShapingProfile() {
    this._ingressShapingProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressShapingProfileInput() {
    return this._ingressShapingProfile;
  }

  // ingress_spillover_threshold - computed: false, optional: true, required: false
  private _ingressSpilloverThreshold?: number; 
  public get ingressSpilloverThreshold() {
    return this.getNumberAttribute('ingress_spillover_threshold');
  }
  public set ingressSpilloverThreshold(value: number) {
    this._ingressSpilloverThreshold = value;
  }
  public resetIngressSpilloverThreshold() {
    this._ingressSpilloverThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressSpilloverThresholdInput() {
    return this._ingressSpilloverThreshold;
  }

  // interconnect_profile - computed: true, optional: true, required: false
  private _interconnectProfile?: string; 
  public get interconnectProfile() {
    return this.getStringAttribute('interconnect_profile');
  }
  public set interconnectProfile(value: string) {
    this._interconnectProfile = value;
  }
  public resetInterconnectProfile() {
    this._interconnectProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interconnectProfileInput() {
    return this._interconnectProfile;
  }

  // internal - computed: false, optional: true, required: false
  private _internal?: number; 
  public get internal() {
    return this.getNumberAttribute('internal');
  }
  public set internal(value: number) {
    this._internal = value;
  }
  public resetInternal() {
    this._internal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalInput() {
    return this._internal;
  }

  // ip - computed: true, optional: true, required: false
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

  // ip_managed_by_fortiipam - computed: true, optional: true, required: false
  private _ipManagedByFortiipam?: string; 
  public get ipManagedByFortiipam() {
    return this.getStringAttribute('ip_managed_by_fortiipam');
  }
  public set ipManagedByFortiipam(value: string) {
    this._ipManagedByFortiipam = value;
  }
  public resetIpManagedByFortiipam() {
    this._ipManagedByFortiipam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipManagedByFortiipamInput() {
    return this._ipManagedByFortiipam;
  }

  // ipmac - computed: true, optional: true, required: false
  private _ipmac?: string; 
  public get ipmac() {
    return this.getStringAttribute('ipmac');
  }
  public set ipmac(value: string) {
    this._ipmac = value;
  }
  public resetIpmac() {
    this._ipmac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipmacInput() {
    return this._ipmac;
  }

  // ips_sniffer_mode - computed: true, optional: true, required: false
  private _ipsSnifferMode?: string; 
  public get ipsSnifferMode() {
    return this.getStringAttribute('ips_sniffer_mode');
  }
  public set ipsSnifferMode(value: string) {
    this._ipsSnifferMode = value;
  }
  public resetIpsSnifferMode() {
    this._ipsSnifferMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsSnifferModeInput() {
    return this._ipsSnifferMode;
  }

  // ipunnumbered - computed: false, optional: true, required: false
  private _ipunnumbered?: string; 
  public get ipunnumbered() {
    return this.getStringAttribute('ipunnumbered');
  }
  public set ipunnumbered(value: string) {
    this._ipunnumbered = value;
  }
  public resetIpunnumbered() {
    this._ipunnumbered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipunnumberedInput() {
    return this._ipunnumbered;
  }

  // l2forward - computed: true, optional: true, required: false
  private _l2Forward?: string; 
  public get l2Forward() {
    return this.getStringAttribute('l2forward');
  }
  public set l2Forward(value: string) {
    this._l2Forward = value;
  }
  public resetL2Forward() {
    this._l2Forward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2ForwardInput() {
    return this._l2Forward;
  }

  // l2tp_client - computed: true, optional: true, required: false
  private _l2TpClient?: string; 
  public get l2TpClient() {
    return this.getStringAttribute('l2tp_client');
  }
  public set l2TpClient(value: string) {
    this._l2TpClient = value;
  }
  public resetL2TpClient() {
    this._l2TpClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2TpClientInput() {
    return this._l2TpClient;
  }

  // lacp_ha_secondary - computed: true, optional: true, required: false
  private _lacpHaSecondary?: string; 
  public get lacpHaSecondary() {
    return this.getStringAttribute('lacp_ha_secondary');
  }
  public set lacpHaSecondary(value: string) {
    this._lacpHaSecondary = value;
  }
  public resetLacpHaSecondary() {
    this._lacpHaSecondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpHaSecondaryInput() {
    return this._lacpHaSecondary;
  }

  // lacp_ha_slave - computed: false, optional: true, required: false
  private _lacpHaSlave?: string; 
  public get lacpHaSlave() {
    return this.getStringAttribute('lacp_ha_slave');
  }
  public set lacpHaSlave(value: string) {
    this._lacpHaSlave = value;
  }
  public resetLacpHaSlave() {
    this._lacpHaSlave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpHaSlaveInput() {
    return this._lacpHaSlave;
  }

  // lacp_mode - computed: false, optional: true, required: false
  private _lacpMode?: string; 
  public get lacpMode() {
    return this.getStringAttribute('lacp_mode');
  }
  public set lacpMode(value: string) {
    this._lacpMode = value;
  }
  public resetLacpMode() {
    this._lacpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpModeInput() {
    return this._lacpMode;
  }

  // lacp_speed - computed: false, optional: true, required: false
  private _lacpSpeed?: string; 
  public get lacpSpeed() {
    return this.getStringAttribute('lacp_speed');
  }
  public set lacpSpeed(value: string) {
    this._lacpSpeed = value;
  }
  public resetLacpSpeed() {
    this._lacpSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpSpeedInput() {
    return this._lacpSpeed;
  }

  // large_receive_offload - computed: false, optional: true, required: false
  private _largeReceiveOffload?: string; 
  public get largeReceiveOffload() {
    return this.getStringAttribute('large_receive_offload');
  }
  public set largeReceiveOffload(value: string) {
    this._largeReceiveOffload = value;
  }
  public resetLargeReceiveOffload() {
    this._largeReceiveOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeReceiveOffloadInput() {
    return this._largeReceiveOffload;
  }

  // lcp_echo_interval - computed: false, optional: true, required: false
  private _lcpEchoInterval?: number; 
  public get lcpEchoInterval() {
    return this.getNumberAttribute('lcp_echo_interval');
  }
  public set lcpEchoInterval(value: number) {
    this._lcpEchoInterval = value;
  }
  public resetLcpEchoInterval() {
    this._lcpEchoInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lcpEchoIntervalInput() {
    return this._lcpEchoInterval;
  }

  // lcp_max_echo_fails - computed: false, optional: true, required: false
  private _lcpMaxEchoFails?: number; 
  public get lcpMaxEchoFails() {
    return this.getNumberAttribute('lcp_max_echo_fails');
  }
  public set lcpMaxEchoFails(value: number) {
    this._lcpMaxEchoFails = value;
  }
  public resetLcpMaxEchoFails() {
    this._lcpMaxEchoFails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lcpMaxEchoFailsInput() {
    return this._lcpMaxEchoFails;
  }

  // link_up_delay - computed: false, optional: true, required: false
  private _linkUpDelay?: number; 
  public get linkUpDelay() {
    return this.getNumberAttribute('link_up_delay');
  }
  public set linkUpDelay(value: number) {
    this._linkUpDelay = value;
  }
  public resetLinkUpDelay() {
    this._linkUpDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkUpDelayInput() {
    return this._linkUpDelay;
  }

  // listen_forticlient_connection - computed: false, optional: true, required: false
  private _listenForticlientConnection?: string; 
  public get listenForticlientConnection() {
    return this.getStringAttribute('listen_forticlient_connection');
  }
  public set listenForticlientConnection(value: string) {
    this._listenForticlientConnection = value;
  }
  public resetListenForticlientConnection() {
    this._listenForticlientConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenForticlientConnectionInput() {
    return this._listenForticlientConnection;
  }

  // lldp_network_policy - computed: false, optional: true, required: false
  private _lldpNetworkPolicy?: string; 
  public get lldpNetworkPolicy() {
    return this.getStringAttribute('lldp_network_policy');
  }
  public set lldpNetworkPolicy(value: string) {
    this._lldpNetworkPolicy = value;
  }
  public resetLldpNetworkPolicy() {
    this._lldpNetworkPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpNetworkPolicyInput() {
    return this._lldpNetworkPolicy;
  }

  // lldp_reception - computed: false, optional: true, required: false
  private _lldpReception?: string; 
  public get lldpReception() {
    return this.getStringAttribute('lldp_reception');
  }
  public set lldpReception(value: string) {
    this._lldpReception = value;
  }
  public resetLldpReception() {
    this._lldpReception = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpReceptionInput() {
    return this._lldpReception;
  }

  // lldp_transmission - computed: false, optional: true, required: false
  private _lldpTransmission?: string; 
  public get lldpTransmission() {
    return this.getStringAttribute('lldp_transmission');
  }
  public set lldpTransmission(value: string) {
    this._lldpTransmission = value;
  }
  public resetLldpTransmission() {
    this._lldpTransmission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpTransmissionInput() {
    return this._lldpTransmission;
  }

  // log - computed: false, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // macaddr - computed: true, optional: true, required: false
  private _macaddr?: string; 
  public get macaddr() {
    return this.getStringAttribute('macaddr');
  }
  public set macaddr(value: string) {
    this._macaddr = value;
  }
  public resetMacaddr() {
    this._macaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macaddrInput() {
    return this._macaddr;
  }

  // managed_subnetwork_size - computed: true, optional: true, required: false
  private _managedSubnetworkSize?: string; 
  public get managedSubnetworkSize() {
    return this.getStringAttribute('managed_subnetwork_size');
  }
  public set managedSubnetworkSize(value: string) {
    this._managedSubnetworkSize = value;
  }
  public resetManagedSubnetworkSize() {
    this._managedSubnetworkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedSubnetworkSizeInput() {
    return this._managedSubnetworkSize;
  }

  // management_ip - computed: true, optional: true, required: false
  private _managementIp?: string; 
  public get managementIp() {
    return this.getStringAttribute('management_ip');
  }
  public set managementIp(value: string) {
    this._managementIp = value;
  }
  public resetManagementIp() {
    this._managementIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementIpInput() {
    return this._managementIp;
  }

  // max_egress_burst_rate - computed: false, optional: true, required: false
  private _maxEgressBurstRate?: number; 
  public get maxEgressBurstRate() {
    return this.getNumberAttribute('max_egress_burst_rate');
  }
  public set maxEgressBurstRate(value: number) {
    this._maxEgressBurstRate = value;
  }
  public resetMaxEgressBurstRate() {
    this._maxEgressBurstRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEgressBurstRateInput() {
    return this._maxEgressBurstRate;
  }

  // max_egress_rate - computed: false, optional: true, required: false
  private _maxEgressRate?: number; 
  public get maxEgressRate() {
    return this.getNumberAttribute('max_egress_rate');
  }
  public set maxEgressRate(value: number) {
    this._maxEgressRate = value;
  }
  public resetMaxEgressRate() {
    this._maxEgressRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEgressRateInput() {
    return this._maxEgressRate;
  }

  // measured_downstream_bandwidth - computed: false, optional: true, required: false
  private _measuredDownstreamBandwidth?: number; 
  public get measuredDownstreamBandwidth() {
    return this.getNumberAttribute('measured_downstream_bandwidth');
  }
  public set measuredDownstreamBandwidth(value: number) {
    this._measuredDownstreamBandwidth = value;
  }
  public resetMeasuredDownstreamBandwidth() {
    this._measuredDownstreamBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measuredDownstreamBandwidthInput() {
    return this._measuredDownstreamBandwidth;
  }

  // measured_upstream_bandwidth - computed: false, optional: true, required: false
  private _measuredUpstreamBandwidth?: number; 
  public get measuredUpstreamBandwidth() {
    return this.getNumberAttribute('measured_upstream_bandwidth');
  }
  public set measuredUpstreamBandwidth(value: number) {
    this._measuredUpstreamBandwidth = value;
  }
  public resetMeasuredUpstreamBandwidth() {
    this._measuredUpstreamBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get measuredUpstreamBandwidthInput() {
    return this._measuredUpstreamBandwidth;
  }

  // mediatype - computed: false, optional: true, required: false
  private _mediatype?: string; 
  public get mediatype() {
    return this.getStringAttribute('mediatype');
  }
  public set mediatype(value: string) {
    this._mediatype = value;
  }
  public resetMediatype() {
    this._mediatype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediatypeInput() {
    return this._mediatype;
  }

  // member - computed: false, optional: true, required: false
  private _member?: string; 
  public get member() {
    return this.getStringAttribute('member');
  }
  public set member(value: string) {
    this._member = value;
  }
  public resetMember() {
    this._member = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member;
  }

  // min_links - computed: true, optional: true, required: false
  private _minLinks?: number; 
  public get minLinks() {
    return this.getNumberAttribute('min_links');
  }
  public set minLinks(value: number) {
    this._minLinks = value;
  }
  public resetMinLinks() {
    this._minLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLinksInput() {
    return this._minLinks;
  }

  // min_links_down - computed: true, optional: true, required: false
  private _minLinksDown?: string; 
  public get minLinksDown() {
    return this.getStringAttribute('min_links_down');
  }
  public set minLinksDown(value: string) {
    this._minLinksDown = value;
  }
  public resetMinLinksDown() {
    this._minLinksDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLinksDownInput() {
    return this._minLinksDown;
  }

  // mirroring_direction - computed: false, optional: true, required: false
  private _mirroringDirection?: string; 
  public get mirroringDirection() {
    return this.getStringAttribute('mirroring_direction');
  }
  public set mirroringDirection(value: string) {
    this._mirroringDirection = value;
  }
  public resetMirroringDirection() {
    this._mirroringDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirroringDirectionInput() {
    return this._mirroringDirection;
  }

  // mirroring_port - computed: false, optional: true, required: false
  private _mirroringPort?: string; 
  public get mirroringPort() {
    return this.getStringAttribute('mirroring_port');
  }
  public set mirroringPort(value: string) {
    this._mirroringPort = value;
  }
  public resetMirroringPort() {
    this._mirroringPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirroringPortInput() {
    return this._mirroringPort;
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

  // monitor_bandwidth - computed: true, optional: true, required: false
  private _monitorBandwidth?: string; 
  public get monitorBandwidth() {
    return this.getStringAttribute('monitor_bandwidth');
  }
  public set monitorBandwidth(value: string) {
    this._monitorBandwidth = value;
  }
  public resetMonitorBandwidth() {
    this._monitorBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorBandwidthInput() {
    return this._monitorBandwidth;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // mtu_override - computed: true, optional: true, required: false
  private _mtuOverride?: string; 
  public get mtuOverride() {
    return this.getStringAttribute('mtu_override');
  }
  public set mtuOverride(value: string) {
    this._mtuOverride = value;
  }
  public resetMtuOverride() {
    this._mtuOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuOverrideInput() {
    return this._mtuOverride;
  }

  // mux_type - computed: false, optional: true, required: false
  private _muxType?: string; 
  public get muxType() {
    return this.getStringAttribute('mux_type');
  }
  public set muxType(value: string) {
    this._muxType = value;
  }
  public resetMuxType() {
    this._muxType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get muxTypeInput() {
    return this._muxType;
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

  // ndiscforward - computed: true, optional: true, required: false
  private _ndiscforward?: string; 
  public get ndiscforward() {
    return this.getStringAttribute('ndiscforward');
  }
  public set ndiscforward(value: string) {
    this._ndiscforward = value;
  }
  public resetNdiscforward() {
    this._ndiscforward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndiscforwardInput() {
    return this._ndiscforward;
  }

  // netbios_forward - computed: true, optional: true, required: false
  private _netbiosForward?: string; 
  public get netbiosForward() {
    return this.getStringAttribute('netbios_forward');
  }
  public set netbiosForward(value: string) {
    this._netbiosForward = value;
  }
  public resetNetbiosForward() {
    this._netbiosForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netbiosForwardInput() {
    return this._netbiosForward;
  }

  // netflow_sampler - computed: true, optional: true, required: false
  private _netflowSampler?: string; 
  public get netflowSampler() {
    return this.getStringAttribute('netflow_sampler');
  }
  public set netflowSampler(value: string) {
    this._netflowSampler = value;
  }
  public resetNetflowSampler() {
    this._netflowSampler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowSamplerInput() {
    return this._netflowSampler;
  }

  // np_qos_profile - computed: false, optional: true, required: false
  private _npQosProfile?: number; 
  public get npQosProfile() {
    return this.getNumberAttribute('np_qos_profile');
  }
  public set npQosProfile(value: number) {
    this._npQosProfile = value;
  }
  public resetNpQosProfile() {
    this._npQosProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npQosProfileInput() {
    return this._npQosProfile;
  }

  // npu_fastpath - computed: false, optional: true, required: false
  private _npuFastpath?: string; 
  public get npuFastpath() {
    return this.getStringAttribute('npu_fastpath');
  }
  public set npuFastpath(value: string) {
    this._npuFastpath = value;
  }
  public resetNpuFastpath() {
    this._npuFastpath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npuFastpathInput() {
    return this._npuFastpath;
  }

  // nst - computed: false, optional: true, required: false
  private _nst?: string; 
  public get nst() {
    return this.getStringAttribute('nst');
  }
  public set nst(value: string) {
    this._nst = value;
  }
  public resetNst() {
    this._nst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nstInput() {
    return this._nst;
  }

  // out_force_vlan_cos - computed: false, optional: true, required: false
  private _outForceVlanCos?: number; 
  public get outForceVlanCos() {
    return this.getNumberAttribute('out_force_vlan_cos');
  }
  public set outForceVlanCos(value: number) {
    this._outForceVlanCos = value;
  }
  public resetOutForceVlanCos() {
    this._outForceVlanCos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outForceVlanCosInput() {
    return this._outForceVlanCos;
  }

  // outbandwidth - computed: false, optional: true, required: false
  private _outbandwidth?: number; 
  public get outbandwidth() {
    return this.getNumberAttribute('outbandwidth');
  }
  public set outbandwidth(value: number) {
    this._outbandwidth = value;
  }
  public resetOutbandwidth() {
    this._outbandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outbandwidthInput() {
    return this._outbandwidth;
  }

  // padt_retry_timeout - computed: false, optional: true, required: false
  private _padtRetryTimeout?: number; 
  public get padtRetryTimeout() {
    return this.getNumberAttribute('padt_retry_timeout');
  }
  public set padtRetryTimeout(value: number) {
    this._padtRetryTimeout = value;
  }
  public resetPadtRetryTimeout() {
    this._padtRetryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get padtRetryTimeoutInput() {
    return this._padtRetryTimeout;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string[]; 
  public get password() {
    return cdktf.Fn.tolist(this.getListAttribute('password'));
  }
  public set password(value: string[]) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // peer_interface - computed: false, optional: true, required: false
  private _peerInterface?: string; 
  public get peerInterface() {
    return this.getStringAttribute('peer_interface');
  }
  public set peerInterface(value: string) {
    this._peerInterface = value;
  }
  public resetPeerInterface() {
    this._peerInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInterfaceInput() {
    return this._peerInterface;
  }

  // phy_mode - computed: false, optional: true, required: false
  private _phyMode?: string; 
  public get phyMode() {
    return this.getStringAttribute('phy_mode');
  }
  public set phyMode(value: string) {
    this._phyMode = value;
  }
  public resetPhyMode() {
    this._phyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phyModeInput() {
    return this._phyMode;
  }

  // ping_serv_status - computed: false, optional: true, required: false
  private _pingServStatus?: number; 
  public get pingServStatus() {
    return this.getNumberAttribute('ping_serv_status');
  }
  public set pingServStatus(value: number) {
    this._pingServStatus = value;
  }
  public resetPingServStatus() {
    this._pingServStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingServStatusInput() {
    return this._pingServStatus;
  }

  // poe - computed: true, optional: true, required: false
  private _poe?: string; 
  public get poe() {
    return this.getStringAttribute('poe');
  }
  public set poe(value: string) {
    this._poe = value;
  }
  public resetPoe() {
    this._poe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeInput() {
    return this._poe;
  }

  // polling_interval - computed: true, optional: true, required: false
  private _pollingInterval?: number; 
  public get pollingInterval() {
    return this.getNumberAttribute('polling_interval');
  }
  public set pollingInterval(value: number) {
    this._pollingInterval = value;
  }
  public resetPollingInterval() {
    this._pollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingIntervalInput() {
    return this._pollingInterval;
  }

  // port_mirroring - computed: true, optional: true, required: false
  private _portMirroring?: string; 
  public get portMirroring() {
    return this.getStringAttribute('port_mirroring');
  }
  public set portMirroring(value: string) {
    this._portMirroring = value;
  }
  public resetPortMirroring() {
    this._portMirroring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portMirroringInput() {
    return this._portMirroring;
  }

  // pppoe_unnumbered_negotiate - computed: true, optional: true, required: false
  private _pppoeUnnumberedNegotiate?: string; 
  public get pppoeUnnumberedNegotiate() {
    return this.getStringAttribute('pppoe_unnumbered_negotiate');
  }
  public set pppoeUnnumberedNegotiate(value: string) {
    this._pppoeUnnumberedNegotiate = value;
  }
  public resetPppoeUnnumberedNegotiate() {
    this._pppoeUnnumberedNegotiate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pppoeUnnumberedNegotiateInput() {
    return this._pppoeUnnumberedNegotiate;
  }

  // pptp_auth_type - computed: true, optional: true, required: false
  private _pptpAuthType?: string; 
  public get pptpAuthType() {
    return this.getStringAttribute('pptp_auth_type');
  }
  public set pptpAuthType(value: string) {
    this._pptpAuthType = value;
  }
  public resetPptpAuthType() {
    this._pptpAuthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pptpAuthTypeInput() {
    return this._pptpAuthType;
  }

  // pptp_client - computed: true, optional: true, required: false
  private _pptpClient?: string; 
  public get pptpClient() {
    return this.getStringAttribute('pptp_client');
  }
  public set pptpClient(value: string) {
    this._pptpClient = value;
  }
  public resetPptpClient() {
    this._pptpClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pptpClientInput() {
    return this._pptpClient;
  }

  // pptp_password - computed: true, optional: true, required: false
  private _pptpPassword?: string[]; 
  public get pptpPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('pptp_password'));
  }
  public set pptpPassword(value: string[]) {
    this._pptpPassword = value;
  }
  public resetPptpPassword() {
    this._pptpPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pptpPasswordInput() {
    return this._pptpPassword;
  }

  // pptp_server_ip - computed: true, optional: true, required: false
  private _pptpServerIp?: string; 
  public get pptpServerIp() {
    return this.getStringAttribute('pptp_server_ip');
  }
  public set pptpServerIp(value: string) {
    this._pptpServerIp = value;
  }
  public resetPptpServerIp() {
    this._pptpServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pptpServerIpInput() {
    return this._pptpServerIp;
  }

  // pptp_timeout - computed: false, optional: true, required: false
  private _pptpTimeout?: number; 
  public get pptpTimeout() {
    return this.getNumberAttribute('pptp_timeout');
  }
  public set pptpTimeout(value: number) {
    this._pptpTimeout = value;
  }
  public resetPptpTimeout() {
    this._pptpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pptpTimeoutInput() {
    return this._pptpTimeout;
  }

  // pptp_user - computed: false, optional: true, required: false
  private _pptpUser?: string; 
  public get pptpUser() {
    return this.getStringAttribute('pptp_user');
  }
  public set pptpUser(value: string) {
    this._pptpUser = value;
  }
  public resetPptpUser() {
    this._pptpUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pptpUserInput() {
    return this._pptpUser;
  }

  // preserve_session_route - computed: true, optional: true, required: false
  private _preserveSessionRoute?: string; 
  public get preserveSessionRoute() {
    return this.getStringAttribute('preserve_session_route');
  }
  public set preserveSessionRoute(value: string) {
    this._preserveSessionRoute = value;
  }
  public resetPreserveSessionRoute() {
    this._preserveSessionRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveSessionRouteInput() {
    return this._preserveSessionRoute;
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

  // priority_override - computed: true, optional: true, required: false
  private _priorityOverride?: string; 
  public get priorityOverride() {
    return this.getStringAttribute('priority_override');
  }
  public set priorityOverride(value: string) {
    this._priorityOverride = value;
  }
  public resetPriorityOverride() {
    this._priorityOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityOverrideInput() {
    return this._priorityOverride;
  }

  // proxy_captive_portal - computed: true, optional: true, required: false
  private _proxyCaptivePortal?: string; 
  public get proxyCaptivePortal() {
    return this.getStringAttribute('proxy_captive_portal');
  }
  public set proxyCaptivePortal(value: string) {
    this._proxyCaptivePortal = value;
  }
  public resetProxyCaptivePortal() {
    this._proxyCaptivePortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyCaptivePortalInput() {
    return this._proxyCaptivePortal;
  }

  // pvc_atm_qos - computed: false, optional: true, required: false
  private _pvcAtmQos?: string; 
  public get pvcAtmQos() {
    return this.getStringAttribute('pvc_atm_qos');
  }
  public set pvcAtmQos(value: string) {
    this._pvcAtmQos = value;
  }
  public resetPvcAtmQos() {
    this._pvcAtmQos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcAtmQosInput() {
    return this._pvcAtmQos;
  }

  // pvc_chan - computed: false, optional: true, required: false
  private _pvcChan?: number; 
  public get pvcChan() {
    return this.getNumberAttribute('pvc_chan');
  }
  public set pvcChan(value: number) {
    this._pvcChan = value;
  }
  public resetPvcChan() {
    this._pvcChan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcChanInput() {
    return this._pvcChan;
  }

  // pvc_crc - computed: false, optional: true, required: false
  private _pvcCrc?: number; 
  public get pvcCrc() {
    return this.getNumberAttribute('pvc_crc');
  }
  public set pvcCrc(value: number) {
    this._pvcCrc = value;
  }
  public resetPvcCrc() {
    this._pvcCrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcCrcInput() {
    return this._pvcCrc;
  }

  // pvc_pcr - computed: false, optional: true, required: false
  private _pvcPcr?: number; 
  public get pvcPcr() {
    return this.getNumberAttribute('pvc_pcr');
  }
  public set pvcPcr(value: number) {
    this._pvcPcr = value;
  }
  public resetPvcPcr() {
    this._pvcPcr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcPcrInput() {
    return this._pvcPcr;
  }

  // pvc_scr - computed: false, optional: true, required: false
  private _pvcScr?: number; 
  public get pvcScr() {
    return this.getNumberAttribute('pvc_scr');
  }
  public set pvcScr(value: number) {
    this._pvcScr = value;
  }
  public resetPvcScr() {
    this._pvcScr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcScrInput() {
    return this._pvcScr;
  }

  // pvc_vlan_id - computed: false, optional: true, required: false
  private _pvcVlanId?: number; 
  public get pvcVlanId() {
    return this.getNumberAttribute('pvc_vlan_id');
  }
  public set pvcVlanId(value: number) {
    this._pvcVlanId = value;
  }
  public resetPvcVlanId() {
    this._pvcVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcVlanIdInput() {
    return this._pvcVlanId;
  }

  // pvc_vlan_rx_id - computed: false, optional: true, required: false
  private _pvcVlanRxId?: number; 
  public get pvcVlanRxId() {
    return this.getNumberAttribute('pvc_vlan_rx_id');
  }
  public set pvcVlanRxId(value: number) {
    this._pvcVlanRxId = value;
  }
  public resetPvcVlanRxId() {
    this._pvcVlanRxId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcVlanRxIdInput() {
    return this._pvcVlanRxId;
  }

  // pvc_vlan_rx_op - computed: false, optional: true, required: false
  private _pvcVlanRxOp?: string; 
  public get pvcVlanRxOp() {
    return this.getStringAttribute('pvc_vlan_rx_op');
  }
  public set pvcVlanRxOp(value: string) {
    this._pvcVlanRxOp = value;
  }
  public resetPvcVlanRxOp() {
    this._pvcVlanRxOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcVlanRxOpInput() {
    return this._pvcVlanRxOp;
  }

  // pvc_vlan_tx_id - computed: false, optional: true, required: false
  private _pvcVlanTxId?: number; 
  public get pvcVlanTxId() {
    return this.getNumberAttribute('pvc_vlan_tx_id');
  }
  public set pvcVlanTxId(value: number) {
    this._pvcVlanTxId = value;
  }
  public resetPvcVlanTxId() {
    this._pvcVlanTxId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcVlanTxIdInput() {
    return this._pvcVlanTxId;
  }

  // pvc_vlan_tx_op - computed: false, optional: true, required: false
  private _pvcVlanTxOp?: string; 
  public get pvcVlanTxOp() {
    return this.getStringAttribute('pvc_vlan_tx_op');
  }
  public set pvcVlanTxOp(value: string) {
    this._pvcVlanTxOp = value;
  }
  public resetPvcVlanTxOp() {
    this._pvcVlanTxOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcVlanTxOpInput() {
    return this._pvcVlanTxOp;
  }

  // reachable_time - computed: true, optional: true, required: false
  private _reachableTime?: number; 
  public get reachableTime() {
    return this.getNumberAttribute('reachable_time');
  }
  public set reachableTime(value: number) {
    this._reachableTime = value;
  }
  public resetReachableTime() {
    this._reachableTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachableTimeInput() {
    return this._reachableTime;
  }

  // redundant_interface - computed: false, optional: true, required: false
  private _redundantInterface?: string; 
  public get redundantInterface() {
    return this.getStringAttribute('redundant_interface');
  }
  public set redundantInterface(value: string) {
    this._redundantInterface = value;
  }
  public resetRedundantInterface() {
    this._redundantInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundantInterfaceInput() {
    return this._redundantInterface;
  }

  // remote_ip - computed: false, optional: true, required: false
  private _remoteIp?: string; 
  public get remoteIp() {
    return this.getStringAttribute('remote_ip');
  }
  public set remoteIp(value: string) {
    this._remoteIp = value;
  }
  public resetRemoteIp() {
    this._remoteIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpInput() {
    return this._remoteIp;
  }

  // replacemsg_override_group - computed: false, optional: true, required: false
  private _replacemsgOverrideGroup?: string; 
  public get replacemsgOverrideGroup() {
    return this.getStringAttribute('replacemsg_override_group');
  }
  public set replacemsgOverrideGroup(value: string) {
    this._replacemsgOverrideGroup = value;
  }
  public resetReplacemsgOverrideGroup() {
    this._replacemsgOverrideGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacemsgOverrideGroupInput() {
    return this._replacemsgOverrideGroup;
  }

  // retransmission - computed: true, optional: true, required: false
  private _retransmission?: string; 
  public get retransmission() {
    return this.getStringAttribute('retransmission');
  }
  public set retransmission(value: string) {
    this._retransmission = value;
  }
  public resetRetransmission() {
    this._retransmission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmissionInput() {
    return this._retransmission;
  }

  // ring_rx - computed: false, optional: true, required: false
  private _ringRx?: number; 
  public get ringRx() {
    return this.getNumberAttribute('ring_rx');
  }
  public set ringRx(value: number) {
    this._ringRx = value;
  }
  public resetRingRx() {
    this._ringRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ringRxInput() {
    return this._ringRx;
  }

  // ring_tx - computed: false, optional: true, required: false
  private _ringTx?: number; 
  public get ringTx() {
    return this.getNumberAttribute('ring_tx');
  }
  public set ringTx(value: number) {
    this._ringTx = value;
  }
  public resetRingTx() {
    this._ringTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ringTxInput() {
    return this._ringTx;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // sample_direction - computed: true, optional: true, required: false
  private _sampleDirection?: string; 
  public get sampleDirection() {
    return this.getStringAttribute('sample_direction');
  }
  public set sampleDirection(value: string) {
    this._sampleDirection = value;
  }
  public resetSampleDirection() {
    this._sampleDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleDirectionInput() {
    return this._sampleDirection;
  }

  // sample_rate - computed: true, optional: true, required: false
  private _sampleRate?: number; 
  public get sampleRate() {
    return this.getNumberAttribute('sample_rate');
  }
  public set sampleRate(value: number) {
    this._sampleRate = value;
  }
  public resetSampleRate() {
    this._sampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleRateInput() {
    return this._sampleRate;
  }

  // scan_botnet_connections - computed: false, optional: true, required: false
  private _scanBotnetConnections?: string; 
  public get scanBotnetConnections() {
    return this.getStringAttribute('scan_botnet_connections');
  }
  public set scanBotnetConnections(value: string) {
    this._scanBotnetConnections = value;
  }
  public resetScanBotnetConnections() {
    this._scanBotnetConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanBotnetConnectionsInput() {
    return this._scanBotnetConnections;
  }

  // secondary_ip - computed: true, optional: true, required: false
  private _secondaryIp?: string; 
  public get secondaryIp() {
    return this.getStringAttribute('secondary_ip');
  }
  public set secondaryIp(value: string) {
    this._secondaryIp = value;
  }
  public resetSecondaryIp() {
    this._secondaryIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryIpInput() {
    return this._secondaryIp;
  }

  // security_8021x_dynamic_vlan_id - computed: false, optional: true, required: false
  private _security8021XDynamicVlanId?: number; 
  public get security8021XDynamicVlanId() {
    return this.getNumberAttribute('security_8021x_dynamic_vlan_id');
  }
  public set security8021XDynamicVlanId(value: number) {
    this._security8021XDynamicVlanId = value;
  }
  public resetSecurity8021XDynamicVlanId() {
    this._security8021XDynamicVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get security8021XDynamicVlanIdInput() {
    return this._security8021XDynamicVlanId;
  }

  // security_8021x_master - computed: false, optional: true, required: false
  private _security8021XMaster?: string; 
  public get security8021XMaster() {
    return this.getStringAttribute('security_8021x_master');
  }
  public set security8021XMaster(value: string) {
    this._security8021XMaster = value;
  }
  public resetSecurity8021XMaster() {
    this._security8021XMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get security8021XMasterInput() {
    return this._security8021XMaster;
  }

  // security_8021x_member_mode - computed: true, optional: true, required: false
  private _security8021XMemberMode?: string; 
  public get security8021XMemberMode() {
    return this.getStringAttribute('security_8021x_member_mode');
  }
  public set security8021XMemberMode(value: string) {
    this._security8021XMemberMode = value;
  }
  public resetSecurity8021XMemberMode() {
    this._security8021XMemberMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get security8021XMemberModeInput() {
    return this._security8021XMemberMode;
  }

  // security_8021x_mode - computed: false, optional: true, required: false
  private _security8021XMode?: string; 
  public get security8021XMode() {
    return this.getStringAttribute('security_8021x_mode');
  }
  public set security8021XMode(value: string) {
    this._security8021XMode = value;
  }
  public resetSecurity8021XMode() {
    this._security8021XMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get security8021XModeInput() {
    return this._security8021XMode;
  }

  // security_exempt_list - computed: false, optional: true, required: false
  private _securityExemptList?: string; 
  public get securityExemptList() {
    return this.getStringAttribute('security_exempt_list');
  }
  public set securityExemptList(value: string) {
    this._securityExemptList = value;
  }
  public resetSecurityExemptList() {
    this._securityExemptList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityExemptListInput() {
    return this._securityExemptList;
  }

  // security_external_logout - computed: false, optional: true, required: false
  private _securityExternalLogout?: string; 
  public get securityExternalLogout() {
    return this.getStringAttribute('security_external_logout');
  }
  public set securityExternalLogout(value: string) {
    this._securityExternalLogout = value;
  }
  public resetSecurityExternalLogout() {
    this._securityExternalLogout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityExternalLogoutInput() {
    return this._securityExternalLogout;
  }

  // security_external_web - computed: false, optional: true, required: false
  private _securityExternalWeb?: string; 
  public get securityExternalWeb() {
    return this.getStringAttribute('security_external_web');
  }
  public set securityExternalWeb(value: string) {
    this._securityExternalWeb = value;
  }
  public resetSecurityExternalWeb() {
    this._securityExternalWeb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityExternalWebInput() {
    return this._securityExternalWeb;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string; 
  public get securityGroups() {
    return this.getStringAttribute('security_groups');
  }
  public set securityGroups(value: string) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // security_mac_auth_bypass - computed: true, optional: true, required: false
  private _securityMacAuthBypass?: string; 
  public get securityMacAuthBypass() {
    return this.getStringAttribute('security_mac_auth_bypass');
  }
  public set securityMacAuthBypass(value: string) {
    this._securityMacAuthBypass = value;
  }
  public resetSecurityMacAuthBypass() {
    this._securityMacAuthBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityMacAuthBypassInput() {
    return this._securityMacAuthBypass;
  }

  // security_mode - computed: true, optional: true, required: false
  private _securityMode?: string; 
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }
  public set securityMode(value: string) {
    this._securityMode = value;
  }
  public resetSecurityMode() {
    this._securityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModeInput() {
    return this._securityMode;
  }

  // security_redirect_url - computed: false, optional: true, required: false
  private _securityRedirectUrl?: string; 
  public get securityRedirectUrl() {
    return this.getStringAttribute('security_redirect_url');
  }
  public set securityRedirectUrl(value: string) {
    this._securityRedirectUrl = value;
  }
  public resetSecurityRedirectUrl() {
    this._securityRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityRedirectUrlInput() {
    return this._securityRedirectUrl;
  }

  // select_profile_30a_35b - computed: true, optional: true, required: false
  private _selectProfile30A35B?: string; 
  public get selectProfile30A35B() {
    return this.getStringAttribute('select_profile_30a_35b');
  }
  public set selectProfile30A35B(value: string) {
    this._selectProfile30A35B = value;
  }
  public resetSelectProfile30A35B() {
    this._selectProfile30A35B = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectProfile30A35BInput() {
    return this._selectProfile30A35B;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // sflow_sampler - computed: true, optional: true, required: false
  private _sflowSampler?: string; 
  public get sflowSampler() {
    return this.getStringAttribute('sflow_sampler');
  }
  public set sflowSampler(value: string) {
    this._sflowSampler = value;
  }
  public resetSflowSampler() {
    this._sflowSampler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowSamplerInput() {
    return this._sflowSampler;
  }

  // sfp_dsl - computed: true, optional: true, required: false
  private _sfpDsl?: string; 
  public get sfpDsl() {
    return this.getStringAttribute('sfp_dsl');
  }
  public set sfpDsl(value: string) {
    this._sfpDsl = value;
  }
  public resetSfpDsl() {
    this._sfpDsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sfpDslInput() {
    return this._sfpDsl;
  }

  // sfp_dsl_adsl_fallback - computed: true, optional: true, required: false
  private _sfpDslAdslFallback?: string; 
  public get sfpDslAdslFallback() {
    return this.getStringAttribute('sfp_dsl_adsl_fallback');
  }
  public set sfpDslAdslFallback(value: string) {
    this._sfpDslAdslFallback = value;
  }
  public resetSfpDslAdslFallback() {
    this._sfpDslAdslFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sfpDslAdslFallbackInput() {
    return this._sfpDslAdslFallback;
  }

  // sfp_dsl_autodetect - computed: true, optional: true, required: false
  private _sfpDslAutodetect?: string; 
  public get sfpDslAutodetect() {
    return this.getStringAttribute('sfp_dsl_autodetect');
  }
  public set sfpDslAutodetect(value: string) {
    this._sfpDslAutodetect = value;
  }
  public resetSfpDslAutodetect() {
    this._sfpDslAutodetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sfpDslAutodetectInput() {
    return this._sfpDslAutodetect;
  }

  // sfp_dsl_mac - computed: true, optional: true, required: false
  private _sfpDslMac?: string; 
  public get sfpDslMac() {
    return this.getStringAttribute('sfp_dsl_mac');
  }
  public set sfpDslMac(value: string) {
    this._sfpDslMac = value;
  }
  public resetSfpDslMac() {
    this._sfpDslMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sfpDslMacInput() {
    return this._sfpDslMac;
  }

  // speed - computed: true, optional: true, required: false
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  public resetSpeed() {
    this._speed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // spillover_threshold - computed: false, optional: true, required: false
  private _spilloverThreshold?: number; 
  public get spilloverThreshold() {
    return this.getNumberAttribute('spillover_threshold');
  }
  public set spilloverThreshold(value: number) {
    this._spilloverThreshold = value;
  }
  public resetSpilloverThreshold() {
    this._spilloverThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spilloverThresholdInput() {
    return this._spilloverThreshold;
  }

  // src_check - computed: true, optional: true, required: false
  private _srcCheck?: string; 
  public get srcCheck() {
    return this.getStringAttribute('src_check');
  }
  public set srcCheck(value: string) {
    this._srcCheck = value;
  }
  public resetSrcCheck() {
    this._srcCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCheckInput() {
    return this._srcCheck;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // stp - computed: true, optional: true, required: false
  private _stp?: string; 
  public get stp() {
    return this.getStringAttribute('stp');
  }
  public set stp(value: string) {
    this._stp = value;
  }
  public resetStp() {
    this._stp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpInput() {
    return this._stp;
  }

  // stp_edge - computed: true, optional: true, required: false
  private _stpEdge?: string; 
  public get stpEdge() {
    return this.getStringAttribute('stp_edge');
  }
  public set stpEdge(value: string) {
    this._stpEdge = value;
  }
  public resetStpEdge() {
    this._stpEdge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpEdgeInput() {
    return this._stpEdge;
  }

  // stp_ha_secondary - computed: true, optional: true, required: false
  private _stpHaSecondary?: string; 
  public get stpHaSecondary() {
    return this.getStringAttribute('stp_ha_secondary');
  }
  public set stpHaSecondary(value: string) {
    this._stpHaSecondary = value;
  }
  public resetStpHaSecondary() {
    this._stpHaSecondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpHaSecondaryInput() {
    return this._stpHaSecondary;
  }

  // stp_ha_slave - computed: true, optional: true, required: false
  private _stpHaSlave?: string; 
  public get stpHaSlave() {
    return this.getStringAttribute('stp_ha_slave');
  }
  public set stpHaSlave(value: string) {
    this._stpHaSlave = value;
  }
  public resetStpHaSlave() {
    this._stpHaSlave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpHaSlaveInput() {
    return this._stpHaSlave;
  }

  // stpforward - computed: true, optional: true, required: false
  private _stpforward?: string; 
  public get stpforward() {
    return this.getStringAttribute('stpforward');
  }
  public set stpforward(value: string) {
    this._stpforward = value;
  }
  public resetStpforward() {
    this._stpforward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpforwardInput() {
    return this._stpforward;
  }

  // stpforward_mode - computed: true, optional: true, required: false
  private _stpforwardMode?: string; 
  public get stpforwardMode() {
    return this.getStringAttribute('stpforward_mode');
  }
  public set stpforwardMode(value: string) {
    this._stpforwardMode = value;
  }
  public resetStpforwardMode() {
    this._stpforwardMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpforwardModeInput() {
    return this._stpforwardMode;
  }

  // strip_priority_vlan_tag - computed: false, optional: true, required: false
  private _stripPriorityVlanTag?: string; 
  public get stripPriorityVlanTag() {
    return this.getStringAttribute('strip_priority_vlan_tag');
  }
  public set stripPriorityVlanTag(value: string) {
    this._stripPriorityVlanTag = value;
  }
  public resetStripPriorityVlanTag() {
    this._stripPriorityVlanTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripPriorityVlanTagInput() {
    return this._stripPriorityVlanTag;
  }

  // subst - computed: true, optional: true, required: false
  private _subst?: string; 
  public get subst() {
    return this.getStringAttribute('subst');
  }
  public set subst(value: string) {
    this._subst = value;
  }
  public resetSubst() {
    this._subst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substInput() {
    return this._subst;
  }

  // substitute_dst_mac - computed: true, optional: true, required: false
  private _substituteDstMac?: string; 
  public get substituteDstMac() {
    return this.getStringAttribute('substitute_dst_mac');
  }
  public set substituteDstMac(value: string) {
    this._substituteDstMac = value;
  }
  public resetSubstituteDstMac() {
    this._substituteDstMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substituteDstMacInput() {
    return this._substituteDstMac;
  }

  // sw_algorithm - computed: true, optional: true, required: false
  private _swAlgorithm?: string; 
  public get swAlgorithm() {
    return this.getStringAttribute('sw_algorithm');
  }
  public set swAlgorithm(value: string) {
    this._swAlgorithm = value;
  }
  public resetSwAlgorithm() {
    this._swAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swAlgorithmInput() {
    return this._swAlgorithm;
  }

  // swc_first_create - computed: false, optional: true, required: false
  private _swcFirstCreate?: number; 
  public get swcFirstCreate() {
    return this.getNumberAttribute('swc_first_create');
  }
  public set swcFirstCreate(value: number) {
    this._swcFirstCreate = value;
  }
  public resetSwcFirstCreate() {
    this._swcFirstCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swcFirstCreateInput() {
    return this._swcFirstCreate;
  }

  // swc_vlan - computed: false, optional: true, required: false
  private _swcVlan?: number; 
  public get swcVlan() {
    return this.getNumberAttribute('swc_vlan');
  }
  public set swcVlan(value: number) {
    this._swcVlan = value;
  }
  public resetSwcVlan() {
    this._swcVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swcVlanInput() {
    return this._swcVlan;
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // switch_controller_access_vlan - computed: true, optional: true, required: false
  private _switchControllerAccessVlan?: string; 
  public get switchControllerAccessVlan() {
    return this.getStringAttribute('switch_controller_access_vlan');
  }
  public set switchControllerAccessVlan(value: string) {
    this._switchControllerAccessVlan = value;
  }
  public resetSwitchControllerAccessVlan() {
    this._switchControllerAccessVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerAccessVlanInput() {
    return this._switchControllerAccessVlan;
  }

  // switch_controller_arp_inspection - computed: true, optional: true, required: false
  private _switchControllerArpInspection?: string; 
  public get switchControllerArpInspection() {
    return this.getStringAttribute('switch_controller_arp_inspection');
  }
  public set switchControllerArpInspection(value: string) {
    this._switchControllerArpInspection = value;
  }
  public resetSwitchControllerArpInspection() {
    this._switchControllerArpInspection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerArpInspectionInput() {
    return this._switchControllerArpInspection;
  }

  // switch_controller_auth - computed: false, optional: true, required: false
  private _switchControllerAuth?: string; 
  public get switchControllerAuth() {
    return this.getStringAttribute('switch_controller_auth');
  }
  public set switchControllerAuth(value: string) {
    this._switchControllerAuth = value;
  }
  public resetSwitchControllerAuth() {
    this._switchControllerAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerAuthInput() {
    return this._switchControllerAuth;
  }

  // switch_controller_dhcp_snooping - computed: true, optional: true, required: false
  private _switchControllerDhcpSnooping?: string; 
  public get switchControllerDhcpSnooping() {
    return this.getStringAttribute('switch_controller_dhcp_snooping');
  }
  public set switchControllerDhcpSnooping(value: string) {
    this._switchControllerDhcpSnooping = value;
  }
  public resetSwitchControllerDhcpSnooping() {
    this._switchControllerDhcpSnooping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerDhcpSnoopingInput() {
    return this._switchControllerDhcpSnooping;
  }

  // switch_controller_dhcp_snooping_option82 - computed: true, optional: true, required: false
  private _switchControllerDhcpSnoopingOption82?: string; 
  public get switchControllerDhcpSnoopingOption82() {
    return this.getStringAttribute('switch_controller_dhcp_snooping_option82');
  }
  public set switchControllerDhcpSnoopingOption82(value: string) {
    this._switchControllerDhcpSnoopingOption82 = value;
  }
  public resetSwitchControllerDhcpSnoopingOption82() {
    this._switchControllerDhcpSnoopingOption82 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerDhcpSnoopingOption82Input() {
    return this._switchControllerDhcpSnoopingOption82;
  }

  // switch_controller_dhcp_snooping_verify_mac - computed: true, optional: true, required: false
  private _switchControllerDhcpSnoopingVerifyMac?: string; 
  public get switchControllerDhcpSnoopingVerifyMac() {
    return this.getStringAttribute('switch_controller_dhcp_snooping_verify_mac');
  }
  public set switchControllerDhcpSnoopingVerifyMac(value: string) {
    this._switchControllerDhcpSnoopingVerifyMac = value;
  }
  public resetSwitchControllerDhcpSnoopingVerifyMac() {
    this._switchControllerDhcpSnoopingVerifyMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerDhcpSnoopingVerifyMacInput() {
    return this._switchControllerDhcpSnoopingVerifyMac;
  }

  // switch_controller_dynamic - computed: false, optional: true, required: false
  private _switchControllerDynamic?: string; 
  public get switchControllerDynamic() {
    return this.getStringAttribute('switch_controller_dynamic');
  }
  public set switchControllerDynamic(value: string) {
    this._switchControllerDynamic = value;
  }
  public resetSwitchControllerDynamic() {
    this._switchControllerDynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerDynamicInput() {
    return this._switchControllerDynamic;
  }

  // switch_controller_feature - computed: true, optional: true, required: false
  private _switchControllerFeature?: string; 
  public get switchControllerFeature() {
    return this.getStringAttribute('switch_controller_feature');
  }
  public set switchControllerFeature(value: string) {
    this._switchControllerFeature = value;
  }
  public resetSwitchControllerFeature() {
    this._switchControllerFeature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerFeatureInput() {
    return this._switchControllerFeature;
  }

  // switch_controller_igmp_snooping - computed: true, optional: true, required: false
  private _switchControllerIgmpSnooping?: string; 
  public get switchControllerIgmpSnooping() {
    return this.getStringAttribute('switch_controller_igmp_snooping');
  }
  public set switchControllerIgmpSnooping(value: string) {
    this._switchControllerIgmpSnooping = value;
  }
  public resetSwitchControllerIgmpSnooping() {
    this._switchControllerIgmpSnooping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerIgmpSnoopingInput() {
    return this._switchControllerIgmpSnooping;
  }

  // switch_controller_igmp_snooping_fast_leave - computed: true, optional: true, required: false
  private _switchControllerIgmpSnoopingFastLeave?: string; 
  public get switchControllerIgmpSnoopingFastLeave() {
    return this.getStringAttribute('switch_controller_igmp_snooping_fast_leave');
  }
  public set switchControllerIgmpSnoopingFastLeave(value: string) {
    this._switchControllerIgmpSnoopingFastLeave = value;
  }
  public resetSwitchControllerIgmpSnoopingFastLeave() {
    this._switchControllerIgmpSnoopingFastLeave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerIgmpSnoopingFastLeaveInput() {
    return this._switchControllerIgmpSnoopingFastLeave;
  }

  // switch_controller_igmp_snooping_proxy - computed: true, optional: true, required: false
  private _switchControllerIgmpSnoopingProxy?: string; 
  public get switchControllerIgmpSnoopingProxy() {
    return this.getStringAttribute('switch_controller_igmp_snooping_proxy');
  }
  public set switchControllerIgmpSnoopingProxy(value: string) {
    this._switchControllerIgmpSnoopingProxy = value;
  }
  public resetSwitchControllerIgmpSnoopingProxy() {
    this._switchControllerIgmpSnoopingProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerIgmpSnoopingProxyInput() {
    return this._switchControllerIgmpSnoopingProxy;
  }

  // switch_controller_iot_scanning - computed: true, optional: true, required: false
  private _switchControllerIotScanning?: string; 
  public get switchControllerIotScanning() {
    return this.getStringAttribute('switch_controller_iot_scanning');
  }
  public set switchControllerIotScanning(value: string) {
    this._switchControllerIotScanning = value;
  }
  public resetSwitchControllerIotScanning() {
    this._switchControllerIotScanning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerIotScanningInput() {
    return this._switchControllerIotScanning;
  }

  // switch_controller_learning_limit - computed: false, optional: true, required: false
  private _switchControllerLearningLimit?: number; 
  public get switchControllerLearningLimit() {
    return this.getNumberAttribute('switch_controller_learning_limit');
  }
  public set switchControllerLearningLimit(value: number) {
    this._switchControllerLearningLimit = value;
  }
  public resetSwitchControllerLearningLimit() {
    this._switchControllerLearningLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerLearningLimitInput() {
    return this._switchControllerLearningLimit;
  }

  // switch_controller_mgmt_vlan - computed: true, optional: true, required: false
  private _switchControllerMgmtVlan?: number; 
  public get switchControllerMgmtVlan() {
    return this.getNumberAttribute('switch_controller_mgmt_vlan');
  }
  public set switchControllerMgmtVlan(value: number) {
    this._switchControllerMgmtVlan = value;
  }
  public resetSwitchControllerMgmtVlan() {
    this._switchControllerMgmtVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerMgmtVlanInput() {
    return this._switchControllerMgmtVlan;
  }

  // switch_controller_nac - computed: false, optional: true, required: false
  private _switchControllerNac?: string; 
  public get switchControllerNac() {
    return this.getStringAttribute('switch_controller_nac');
  }
  public set switchControllerNac(value: string) {
    this._switchControllerNac = value;
  }
  public resetSwitchControllerNac() {
    this._switchControllerNac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerNacInput() {
    return this._switchControllerNac;
  }

  // switch_controller_netflow_collect - computed: true, optional: true, required: false
  private _switchControllerNetflowCollect?: string; 
  public get switchControllerNetflowCollect() {
    return this.getStringAttribute('switch_controller_netflow_collect');
  }
  public set switchControllerNetflowCollect(value: string) {
    this._switchControllerNetflowCollect = value;
  }
  public resetSwitchControllerNetflowCollect() {
    this._switchControllerNetflowCollect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerNetflowCollectInput() {
    return this._switchControllerNetflowCollect;
  }

  // switch_controller_offload - computed: true, optional: true, required: false
  private _switchControllerOffload?: string; 
  public get switchControllerOffload() {
    return this.getStringAttribute('switch_controller_offload');
  }
  public set switchControllerOffload(value: string) {
    this._switchControllerOffload = value;
  }
  public resetSwitchControllerOffload() {
    this._switchControllerOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerOffloadInput() {
    return this._switchControllerOffload;
  }

  // switch_controller_offload_gw - computed: true, optional: true, required: false
  private _switchControllerOffloadGw?: string; 
  public get switchControllerOffloadGw() {
    return this.getStringAttribute('switch_controller_offload_gw');
  }
  public set switchControllerOffloadGw(value: string) {
    this._switchControllerOffloadGw = value;
  }
  public resetSwitchControllerOffloadGw() {
    this._switchControllerOffloadGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerOffloadGwInput() {
    return this._switchControllerOffloadGw;
  }

  // switch_controller_offload_ip - computed: true, optional: true, required: false
  private _switchControllerOffloadIp?: string; 
  public get switchControllerOffloadIp() {
    return this.getStringAttribute('switch_controller_offload_ip');
  }
  public set switchControllerOffloadIp(value: string) {
    this._switchControllerOffloadIp = value;
  }
  public resetSwitchControllerOffloadIp() {
    this._switchControllerOffloadIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerOffloadIpInput() {
    return this._switchControllerOffloadIp;
  }

  // switch_controller_offloading - computed: false, optional: true, required: false
  private _switchControllerOffloading?: string; 
  public get switchControllerOffloading() {
    return this.getStringAttribute('switch_controller_offloading');
  }
  public set switchControllerOffloading(value: string) {
    this._switchControllerOffloading = value;
  }
  public resetSwitchControllerOffloading() {
    this._switchControllerOffloading = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerOffloadingInput() {
    return this._switchControllerOffloading;
  }

  // switch_controller_offloading_gw - computed: false, optional: true, required: false
  private _switchControllerOffloadingGw?: string; 
  public get switchControllerOffloadingGw() {
    return this.getStringAttribute('switch_controller_offloading_gw');
  }
  public set switchControllerOffloadingGw(value: string) {
    this._switchControllerOffloadingGw = value;
  }
  public resetSwitchControllerOffloadingGw() {
    this._switchControllerOffloadingGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerOffloadingGwInput() {
    return this._switchControllerOffloadingGw;
  }

  // switch_controller_offloading_ip - computed: false, optional: true, required: false
  private _switchControllerOffloadingIp?: string; 
  public get switchControllerOffloadingIp() {
    return this.getStringAttribute('switch_controller_offloading_ip');
  }
  public set switchControllerOffloadingIp(value: string) {
    this._switchControllerOffloadingIp = value;
  }
  public resetSwitchControllerOffloadingIp() {
    this._switchControllerOffloadingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerOffloadingIpInput() {
    return this._switchControllerOffloadingIp;
  }

  // switch_controller_radius_server - computed: false, optional: true, required: false
  private _switchControllerRadiusServer?: string; 
  public get switchControllerRadiusServer() {
    return this.getStringAttribute('switch_controller_radius_server');
  }
  public set switchControllerRadiusServer(value: string) {
    this._switchControllerRadiusServer = value;
  }
  public resetSwitchControllerRadiusServer() {
    this._switchControllerRadiusServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerRadiusServerInput() {
    return this._switchControllerRadiusServer;
  }

  // switch_controller_rspan_mode - computed: true, optional: true, required: false
  private _switchControllerRspanMode?: string; 
  public get switchControllerRspanMode() {
    return this.getStringAttribute('switch_controller_rspan_mode');
  }
  public set switchControllerRspanMode(value: string) {
    this._switchControllerRspanMode = value;
  }
  public resetSwitchControllerRspanMode() {
    this._switchControllerRspanMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerRspanModeInput() {
    return this._switchControllerRspanMode;
  }

  // switch_controller_source_ip - computed: true, optional: true, required: false
  private _switchControllerSourceIp?: string; 
  public get switchControllerSourceIp() {
    return this.getStringAttribute('switch_controller_source_ip');
  }
  public set switchControllerSourceIp(value: string) {
    this._switchControllerSourceIp = value;
  }
  public resetSwitchControllerSourceIp() {
    this._switchControllerSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerSourceIpInput() {
    return this._switchControllerSourceIp;
  }

  // switch_controller_traffic_policy - computed: false, optional: true, required: false
  private _switchControllerTrafficPolicy?: string; 
  public get switchControllerTrafficPolicy() {
    return this.getStringAttribute('switch_controller_traffic_policy');
  }
  public set switchControllerTrafficPolicy(value: string) {
    this._switchControllerTrafficPolicy = value;
  }
  public resetSwitchControllerTrafficPolicy() {
    this._switchControllerTrafficPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchControllerTrafficPolicyInput() {
    return this._switchControllerTrafficPolicy;
  }

  // system_id - computed: true, optional: true, required: false
  private _systemId?: string; 
  public get systemId() {
    return this.getStringAttribute('system_id');
  }
  public set systemId(value: string) {
    this._systemId = value;
  }
  public resetSystemId() {
    this._systemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdInput() {
    return this._systemId;
  }

  // system_id_type - computed: true, optional: true, required: false
  private _systemIdType?: string; 
  public get systemIdType() {
    return this.getStringAttribute('system_id_type');
  }
  public set systemIdType(value: string) {
    this._systemIdType = value;
  }
  public resetSystemIdType() {
    this._systemIdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdTypeInput() {
    return this._systemIdType;
  }

  // tc_mode - computed: false, optional: true, required: false
  private _tcMode?: string; 
  public get tcMode() {
    return this.getStringAttribute('tc_mode');
  }
  public set tcMode(value: string) {
    this._tcMode = value;
  }
  public resetTcMode() {
    this._tcMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcModeInput() {
    return this._tcMode;
  }

  // tcp_mss - computed: false, optional: true, required: false
  private _tcpMss?: number; 
  public get tcpMss() {
    return this.getNumberAttribute('tcp_mss');
  }
  public set tcpMss(value: number) {
    this._tcpMss = value;
  }
  public resetTcpMss() {
    this._tcpMss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMssInput() {
    return this._tcpMss;
  }

  // trunk - computed: true, optional: true, required: false
  private _trunk?: string; 
  public get trunk() {
    return this.getStringAttribute('trunk');
  }
  public set trunk(value: string) {
    this._trunk = value;
  }
  public resetTrunk() {
    this._trunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk;
  }

  // trust_ip6_1 - computed: true, optional: true, required: false
  private _trustIp61?: string; 
  public get trustIp61() {
    return this.getStringAttribute('trust_ip6_1');
  }
  public set trustIp61(value: string) {
    this._trustIp61 = value;
  }
  public resetTrustIp61() {
    this._trustIp61 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustIp61Input() {
    return this._trustIp61;
  }

  // trust_ip6_2 - computed: true, optional: true, required: false
  private _trustIp62?: string; 
  public get trustIp62() {
    return this.getStringAttribute('trust_ip6_2');
  }
  public set trustIp62(value: string) {
    this._trustIp62 = value;
  }
  public resetTrustIp62() {
    this._trustIp62 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustIp62Input() {
    return this._trustIp62;
  }

  // trust_ip6_3 - computed: true, optional: true, required: false
  private _trustIp63?: string; 
  public get trustIp63() {
    return this.getStringAttribute('trust_ip6_3');
  }
  public set trustIp63(value: string) {
    this._trustIp63 = value;
  }
  public resetTrustIp63() {
    this._trustIp63 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustIp63Input() {
    return this._trustIp63;
  }

  // trust_ip_1 - computed: false, optional: true, required: false
  private _trustIp1?: string; 
  public get trustIp1() {
    return this.getStringAttribute('trust_ip_1');
  }
  public set trustIp1(value: string) {
    this._trustIp1 = value;
  }
  public resetTrustIp1() {
    this._trustIp1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustIp1Input() {
    return this._trustIp1;
  }

  // trust_ip_2 - computed: false, optional: true, required: false
  private _trustIp2?: string; 
  public get trustIp2() {
    return this.getStringAttribute('trust_ip_2');
  }
  public set trustIp2(value: string) {
    this._trustIp2 = value;
  }
  public resetTrustIp2() {
    this._trustIp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustIp2Input() {
    return this._trustIp2;
  }

  // trust_ip_3 - computed: false, optional: true, required: false
  private _trustIp3?: string; 
  public get trustIp3() {
    return this.getStringAttribute('trust_ip_3');
  }
  public set trustIp3(value: string) {
    this._trustIp3 = value;
  }
  public resetTrustIp3() {
    this._trustIp3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustIp3Input() {
    return this._trustIp3;
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

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vci - computed: false, optional: true, required: false
  private _vci?: number; 
  public get vci() {
    return this.getNumberAttribute('vci');
  }
  public set vci(value: number) {
    this._vci = value;
  }
  public resetVci() {
    this._vci = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciInput() {
    return this._vci;
  }

  // vectoring - computed: true, optional: true, required: false
  private _vectoring?: string; 
  public get vectoring() {
    return this.getStringAttribute('vectoring');
  }
  public set vectoring(value: string) {
    this._vectoring = value;
  }
  public resetVectoring() {
    this._vectoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectoringInput() {
    return this._vectoring;
  }

  // vindex - computed: false, optional: true, required: false
  private _vindex?: number; 
  public get vindex() {
    return this.getNumberAttribute('vindex');
  }
  public set vindex(value: number) {
    this._vindex = value;
  }
  public resetVindex() {
    this._vindex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vindexInput() {
    return this._vindex;
  }

  // vlan_op_mode - computed: true, optional: true, required: false
  private _vlanOpMode?: string; 
  public get vlanOpMode() {
    return this.getStringAttribute('vlan_op_mode');
  }
  public set vlanOpMode(value: string) {
    this._vlanOpMode = value;
  }
  public resetVlanOpMode() {
    this._vlanOpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanOpModeInput() {
    return this._vlanOpMode;
  }

  // vlan_protocol - computed: true, optional: true, required: false
  private _vlanProtocol?: string; 
  public get vlanProtocol() {
    return this.getStringAttribute('vlan_protocol');
  }
  public set vlanProtocol(value: string) {
    this._vlanProtocol = value;
  }
  public resetVlanProtocol() {
    this._vlanProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanProtocolInput() {
    return this._vlanProtocol;
  }

  // vlanforward - computed: true, optional: true, required: false
  private _vlanforward?: string; 
  public get vlanforward() {
    return this.getStringAttribute('vlanforward');
  }
  public set vlanforward(value: string) {
    this._vlanforward = value;
  }
  public resetVlanforward() {
    this._vlanforward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanforwardInput() {
    return this._vlanforward;
  }

  // vlanid - computed: false, optional: true, required: false
  private _vlanid?: number; 
  public get vlanid() {
    return this.getNumberAttribute('vlanid');
  }
  public set vlanid(value: number) {
    this._vlanid = value;
  }
  public resetVlanid() {
    this._vlanid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanidInput() {
    return this._vlanid;
  }

  // vpi - computed: false, optional: true, required: false
  private _vpi?: number; 
  public get vpi() {
    return this.getNumberAttribute('vpi');
  }
  public set vpi(value: number) {
    this._vpi = value;
  }
  public resetVpi() {
    this._vpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpiInput() {
    return this._vpi;
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: number; 
  public get vrf() {
    return this.getNumberAttribute('vrf');
  }
  public set vrf(value: number) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // vrrp_virtual_mac - computed: true, optional: true, required: false
  private _vrrpVirtualMac?: string; 
  public get vrrpVirtualMac() {
    return this.getStringAttribute('vrrp_virtual_mac');
  }
  public set vrrpVirtualMac(value: string) {
    this._vrrpVirtualMac = value;
  }
  public resetVrrpVirtualMac() {
    this._vrrpVirtualMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpVirtualMacInput() {
    return this._vrrpVirtualMac;
  }

  // wccp - computed: true, optional: true, required: false
  private _wccp?: string; 
  public get wccp() {
    return this.getStringAttribute('wccp');
  }
  public set wccp(value: string) {
    this._wccp = value;
  }
  public resetWccp() {
    this._wccp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wccpInput() {
    return this._wccp;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // wifi_5g_threshold - computed: true, optional: true, required: false
  private _wifi5GThreshold?: string; 
  public get wifi5GThreshold() {
    return this.getStringAttribute('wifi_5g_threshold');
  }
  public set wifi5GThreshold(value: string) {
    this._wifi5GThreshold = value;
  }
  public resetWifi5GThreshold() {
    this._wifi5GThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifi5GThresholdInput() {
    return this._wifi5GThreshold;
  }

  // wifi_acl - computed: false, optional: true, required: false
  private _wifiAcl?: string; 
  public get wifiAcl() {
    return this.getStringAttribute('wifi_acl');
  }
  public set wifiAcl(value: string) {
    this._wifiAcl = value;
  }
  public resetWifiAcl() {
    this._wifiAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiAclInput() {
    return this._wifiAcl;
  }

  // wifi_ap_band - computed: true, optional: true, required: false
  private _wifiApBand?: string; 
  public get wifiApBand() {
    return this.getStringAttribute('wifi_ap_band');
  }
  public set wifiApBand(value: string) {
    this._wifiApBand = value;
  }
  public resetWifiApBand() {
    this._wifiApBand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiApBandInput() {
    return this._wifiApBand;
  }

  // wifi_auth - computed: true, optional: true, required: false
  private _wifiAuth?: string; 
  public get wifiAuth() {
    return this.getStringAttribute('wifi_auth');
  }
  public set wifiAuth(value: string) {
    this._wifiAuth = value;
  }
  public resetWifiAuth() {
    this._wifiAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiAuthInput() {
    return this._wifiAuth;
  }

  // wifi_auto_connect - computed: true, optional: true, required: false
  private _wifiAutoConnect?: string; 
  public get wifiAutoConnect() {
    return this.getStringAttribute('wifi_auto_connect');
  }
  public set wifiAutoConnect(value: string) {
    this._wifiAutoConnect = value;
  }
  public resetWifiAutoConnect() {
    this._wifiAutoConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiAutoConnectInput() {
    return this._wifiAutoConnect;
  }

  // wifi_auto_save - computed: true, optional: true, required: false
  private _wifiAutoSave?: string; 
  public get wifiAutoSave() {
    return this.getStringAttribute('wifi_auto_save');
  }
  public set wifiAutoSave(value: string) {
    this._wifiAutoSave = value;
  }
  public resetWifiAutoSave() {
    this._wifiAutoSave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiAutoSaveInput() {
    return this._wifiAutoSave;
  }

  // wifi_broadcast_ssid - computed: false, optional: true, required: false
  private _wifiBroadcastSsid?: string; 
  public get wifiBroadcastSsid() {
    return this.getStringAttribute('wifi_broadcast_ssid');
  }
  public set wifiBroadcastSsid(value: string) {
    this._wifiBroadcastSsid = value;
  }
  public resetWifiBroadcastSsid() {
    this._wifiBroadcastSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiBroadcastSsidInput() {
    return this._wifiBroadcastSsid;
  }

  // wifi_dns_server1 - computed: true, optional: true, required: false
  private _wifiDnsServer1?: string; 
  public get wifiDnsServer1() {
    return this.getStringAttribute('wifi_dns_server1');
  }
  public set wifiDnsServer1(value: string) {
    this._wifiDnsServer1 = value;
  }
  public resetWifiDnsServer1() {
    this._wifiDnsServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiDnsServer1Input() {
    return this._wifiDnsServer1;
  }

  // wifi_dns_server2 - computed: true, optional: true, required: false
  private _wifiDnsServer2?: string; 
  public get wifiDnsServer2() {
    return this.getStringAttribute('wifi_dns_server2');
  }
  public set wifiDnsServer2(value: string) {
    this._wifiDnsServer2 = value;
  }
  public resetWifiDnsServer2() {
    this._wifiDnsServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiDnsServer2Input() {
    return this._wifiDnsServer2;
  }

  // wifi_encrypt - computed: true, optional: true, required: false
  private _wifiEncrypt?: string; 
  public get wifiEncrypt() {
    return this.getStringAttribute('wifi_encrypt');
  }
  public set wifiEncrypt(value: string) {
    this._wifiEncrypt = value;
  }
  public resetWifiEncrypt() {
    this._wifiEncrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiEncryptInput() {
    return this._wifiEncrypt;
  }

  // wifi_fragment_threshold - computed: false, optional: true, required: false
  private _wifiFragmentThreshold?: number; 
  public get wifiFragmentThreshold() {
    return this.getNumberAttribute('wifi_fragment_threshold');
  }
  public set wifiFragmentThreshold(value: number) {
    this._wifiFragmentThreshold = value;
  }
  public resetWifiFragmentThreshold() {
    this._wifiFragmentThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiFragmentThresholdInput() {
    return this._wifiFragmentThreshold;
  }

  // wifi_gateway - computed: true, optional: true, required: false
  private _wifiGateway?: string; 
  public get wifiGateway() {
    return this.getStringAttribute('wifi_gateway');
  }
  public set wifiGateway(value: string) {
    this._wifiGateway = value;
  }
  public resetWifiGateway() {
    this._wifiGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiGatewayInput() {
    return this._wifiGateway;
  }

  // wifi_key - computed: true, optional: true, required: false
  private _wifiKey?: string[]; 
  public get wifiKey() {
    return cdktf.Fn.tolist(this.getListAttribute('wifi_key'));
  }
  public set wifiKey(value: string[]) {
    this._wifiKey = value;
  }
  public resetWifiKey() {
    this._wifiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiKeyInput() {
    return this._wifiKey;
  }

  // wifi_keyindex - computed: false, optional: true, required: false
  private _wifiKeyindex?: number; 
  public get wifiKeyindex() {
    return this.getNumberAttribute('wifi_keyindex');
  }
  public set wifiKeyindex(value: number) {
    this._wifiKeyindex = value;
  }
  public resetWifiKeyindex() {
    this._wifiKeyindex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiKeyindexInput() {
    return this._wifiKeyindex;
  }

  // wifi_mac_filter - computed: false, optional: true, required: false
  private _wifiMacFilter?: string; 
  public get wifiMacFilter() {
    return this.getStringAttribute('wifi_mac_filter');
  }
  public set wifiMacFilter(value: string) {
    this._wifiMacFilter = value;
  }
  public resetWifiMacFilter() {
    this._wifiMacFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiMacFilterInput() {
    return this._wifiMacFilter;
  }

  // wifi_passphrase - computed: true, optional: true, required: false
  private _wifiPassphrase?: string[]; 
  public get wifiPassphrase() {
    return cdktf.Fn.tolist(this.getListAttribute('wifi_passphrase'));
  }
  public set wifiPassphrase(value: string[]) {
    this._wifiPassphrase = value;
  }
  public resetWifiPassphrase() {
    this._wifiPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiPassphraseInput() {
    return this._wifiPassphrase;
  }

  // wifi_radius_server - computed: false, optional: true, required: false
  private _wifiRadiusServer?: string; 
  public get wifiRadiusServer() {
    return this.getStringAttribute('wifi_radius_server');
  }
  public set wifiRadiusServer(value: string) {
    this._wifiRadiusServer = value;
  }
  public resetWifiRadiusServer() {
    this._wifiRadiusServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiRadiusServerInput() {
    return this._wifiRadiusServer;
  }

  // wifi_rts_threshold - computed: false, optional: true, required: false
  private _wifiRtsThreshold?: number; 
  public get wifiRtsThreshold() {
    return this.getNumberAttribute('wifi_rts_threshold');
  }
  public set wifiRtsThreshold(value: number) {
    this._wifiRtsThreshold = value;
  }
  public resetWifiRtsThreshold() {
    this._wifiRtsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiRtsThresholdInput() {
    return this._wifiRtsThreshold;
  }

  // wifi_security - computed: false, optional: true, required: false
  private _wifiSecurity?: string; 
  public get wifiSecurity() {
    return this.getStringAttribute('wifi_security');
  }
  public set wifiSecurity(value: string) {
    this._wifiSecurity = value;
  }
  public resetWifiSecurity() {
    this._wifiSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiSecurityInput() {
    return this._wifiSecurity;
  }

  // wifi_ssid - computed: false, optional: true, required: false
  private _wifiSsid?: string; 
  public get wifiSsid() {
    return this.getStringAttribute('wifi_ssid');
  }
  public set wifiSsid(value: string) {
    this._wifiSsid = value;
  }
  public resetWifiSsid() {
    this._wifiSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiSsidInput() {
    return this._wifiSsid;
  }

  // wifi_usergroup - computed: false, optional: true, required: false
  private _wifiUsergroup?: string; 
  public get wifiUsergroup() {
    return this.getStringAttribute('wifi_usergroup');
  }
  public set wifiUsergroup(value: string) {
    this._wifiUsergroup = value;
  }
  public resetWifiUsergroup() {
    this._wifiUsergroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiUsergroupInput() {
    return this._wifiUsergroup;
  }

  // wins_ip - computed: true, optional: true, required: false
  private _winsIp?: string; 
  public get winsIp() {
    return this.getStringAttribute('wins_ip');
  }
  public set winsIp(value: string) {
    this._winsIp = value;
  }
  public resetWinsIp() {
    this._winsIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get winsIpInput() {
    return this._winsIp;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new ObjectFspVlanInterfaceIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ObjectFspVlanInterfaceIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // secondaryip - computed: false, optional: true, required: false
  private _secondaryip = new ObjectFspVlanInterfaceSecondaryipList(this, "secondaryip", false);
  public get secondaryip() {
    return this._secondaryip;
  }
  public putSecondaryip(value: ObjectFspVlanInterfaceSecondaryip[] | cdktf.IResolvable) {
    this._secondaryip.internalValue = value;
  }
  public resetSecondaryip() {
    this._secondaryip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryipInput() {
    return this._secondaryip.internalValue;
  }

  // vrrp - computed: false, optional: true, required: false
  private _vrrp = new ObjectFspVlanInterfaceVrrpList(this, "vrrp", false);
  public get vrrp() {
    return this._vrrp;
  }
  public putVrrp(value: ObjectFspVlanInterfaceVrrp[] | cdktf.IResolvable) {
    this._vrrp.internalValue = value;
  }
  public resetVrrp() {
    this._vrrp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpInput() {
    return this._vrrp.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan fortimanager_object_fsp_vlan}
*/
export class ObjectFspVlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_fsp_vlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFspVlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFspVlan to import
  * @param importFromId The id of the existing ObjectFspVlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFspVlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_fsp_vlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan fortimanager_object_fsp_vlan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFspVlanConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectFspVlanConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_fsp_vlan',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dhcpStatus = config.dhcpStatus;
    this._adom = config.adom;
    this._color = config.color;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._name = config.name;
    this._scopetype = config.scopetype;
    this._vdom = config.vdom;
    this._vlanid = config.vlanid;
    this._dhcpServer.internalValue = config.dhcpServer;
    this._dynamicMapping.internalValue = config.dynamicMapping;
    this._interface.internalValue = config.interface;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // _dhcp_status - computed: false, optional: true, required: false
  private _dhcpStatus?: string; 
  public get dhcpStatus() {
    return this.getStringAttribute('_dhcp_status');
  }
  public set dhcpStatus(value: string) {
    this._dhcpStatus = value;
  }
  public resetDhcpStatus() {
    this._dhcpStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpStatusInput() {
    return this._dhcpStatus;
  }

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // color - computed: false, optional: true, required: false
  private _color?: number; 
  public get color() {
    return this.getNumberAttribute('color');
  }
  public set color(value: number) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // vlanid - computed: false, optional: true, required: false
  private _vlanid?: number; 
  public get vlanid() {
    return this.getNumberAttribute('vlanid');
  }
  public set vlanid(value: number) {
    this._vlanid = value;
  }
  public resetVlanid() {
    this._vlanid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanidInput() {
    return this._vlanid;
  }

  // dhcp_server - computed: false, optional: true, required: false
  private _dhcpServer = new ObjectFspVlanDhcpServerOutputReference(this, "dhcp_server");
  public get dhcpServer() {
    return this._dhcpServer;
  }
  public putDhcpServer(value: ObjectFspVlanDhcpServer) {
    this._dhcpServer.internalValue = value;
  }
  public resetDhcpServer() {
    this._dhcpServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerInput() {
    return this._dhcpServer.internalValue;
  }

  // dynamic_mapping - computed: false, optional: true, required: false
  private _dynamicMapping = new ObjectFspVlanDynamicMappingList(this, "dynamic_mapping", false);
  public get dynamicMapping() {
    return this._dynamicMapping;
  }
  public putDynamicMapping(value: ObjectFspVlanDynamicMapping[] | cdktf.IResolvable) {
    this._dynamicMapping.internalValue = value;
  }
  public resetDynamicMapping() {
    this._dynamicMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicMappingInput() {
    return this._dynamicMapping.internalValue;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new ObjectFspVlanInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: ObjectFspVlanInterface) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      _dhcp_status: cdktf.stringToTerraform(this._dhcpStatus),
      adom: cdktf.stringToTerraform(this._adom),
      color: cdktf.numberToTerraform(this._color),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      vdom: cdktf.stringToTerraform(this._vdom),
      vlanid: cdktf.numberToTerraform(this._vlanid),
      dhcp_server: objectFspVlanDhcpServerToTerraform(this._dhcpServer.internalValue),
      dynamic_mapping: cdktf.listMapper(objectFspVlanDynamicMappingToTerraform, true)(this._dynamicMapping.internalValue),
      interface: objectFspVlanInterfaceToTerraform(this._interface.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      _dhcp_status: {
        value: cdktf.stringToHclTerraform(this._dhcpStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      color: {
        value: cdktf.numberToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlanid: {
        value: cdktf.numberToHclTerraform(this._vlanid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dhcp_server: {
        value: objectFspVlanDhcpServerToHclTerraform(this._dhcpServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFspVlanDhcpServerList",
      },
      dynamic_mapping: {
        value: cdktf.listMapperHcl(objectFspVlanDynamicMappingToHclTerraform, true)(this._dynamicMapping.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFspVlanDynamicMappingList",
      },
      interface: {
        value: objectFspVlanInterfaceToHclTerraform(this._interface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFspVlanInterfaceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
