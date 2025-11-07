// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFspVlanDynamicMappingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#_dhcp_status ObjectFspVlanDynamicMappingA#_dhcp_status}
  */
  readonly dhcpStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#adom ObjectFspVlanDynamicMappingA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#dynamic_sort_subtable ObjectFspVlanDynamicMappingA#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#id ObjectFspVlanDynamicMappingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#scopetype ObjectFspVlanDynamicMappingA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#vlan ObjectFspVlanDynamicMappingA#vlan}
  */
  readonly vlan: string;
  /**
  * _scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#_scope ObjectFspVlanDynamicMappingA#_scope}
  */
  readonly scope?: ObjectFspVlanDynamicMappingScopeA[] | cdktf.IResolvable;
  /**
  * dhcp_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#dhcp_server ObjectFspVlanDynamicMappingA#dhcp_server}
  */
  readonly dhcpServer?: ObjectFspVlanDynamicMappingDhcpServerA;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#interface ObjectFspVlanDynamicMappingA#interface}
  */
  readonly interface?: ObjectFspVlanDynamicMappingInterfaceA;
}
export interface ObjectFspVlanDynamicMappingScopeA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#name ObjectFspVlanDynamicMappingA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#vdom ObjectFspVlanDynamicMappingA#vdom}
  */
  readonly vdom?: string;
}

export function objectFspVlanDynamicMappingScopeAToTerraform(struct?: ObjectFspVlanDynamicMappingScopeA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vdom: cdktf.stringToTerraform(struct!.vdom),
  }
}


export function objectFspVlanDynamicMappingScopeAToHclTerraform(struct?: ObjectFspVlanDynamicMappingScopeA | cdktf.IResolvable): any {
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

export class ObjectFspVlanDynamicMappingScopeAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanDynamicMappingScopeA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectFspVlanDynamicMappingScopeA | cdktf.IResolvable | undefined) {
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

export class ObjectFspVlanDynamicMappingScopeAList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanDynamicMappingScopeA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanDynamicMappingScopeAOutputReference {
    return new ObjectFspVlanDynamicMappingScopeAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanDynamicMappingDhcpServerExcludeRangeA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#end_ip ObjectFspVlanDynamicMappingA#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#id ObjectFspVlanDynamicMappingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#lease_time ObjectFspVlanDynamicMappingA#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#start_ip ObjectFspVlanDynamicMappingA#start_ip}
  */
  readonly startIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#uci_match ObjectFspVlanDynamicMappingA#uci_match}
  */
  readonly uciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#uci_string ObjectFspVlanDynamicMappingA#uci_string}
  */
  readonly uciString?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#vci_match ObjectFspVlanDynamicMappingA#vci_match}
  */
  readonly vciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#vci_string ObjectFspVlanDynamicMappingA#vci_string}
  */
  readonly vciString?: string[];
}

export function objectFspVlanDynamicMappingDhcpServerExcludeRangeAToTerraform(struct?: ObjectFspVlanDynamicMappingDhcpServerExcludeRangeA | cdktf.IResolvable): any {
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


export function objectFspVlanDynamicMappingDhcpServerExcludeRangeAToHclTerraform(struct?: ObjectFspVlanDynamicMappingDhcpServerExcludeRangeA | cdktf.IResolvable): any {
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

export class ObjectFspVlanDynamicMappingDhcpServerExcludeRangeAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanDynamicMappingDhcpServerExcludeRangeA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectFspVlanDynamicMappingDhcpServerExcludeRangeA | cdktf.IResolvable | undefined) {
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

export class ObjectFspVlanDynamicMappingDhcpServerExcludeRangeAList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanDynamicMappingDhcpServerExcludeRangeA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanDynamicMappingDhcpServerExcludeRangeAOutputReference {
    return new ObjectFspVlanDynamicMappingDhcpServerExcludeRangeAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanDynamicMappingDhcpServerIpRangeA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#end_ip ObjectFspVlanDynamicMappingA#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#id ObjectFspVlanDynamicMappingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#lease_time ObjectFspVlanDynamicMappingA#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#start_ip ObjectFspVlanDynamicMappingA#start_ip}
  */
  readonly startIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#uci_match ObjectFspVlanDynamicMappingA#uci_match}
  */
  readonly uciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#uci_string ObjectFspVlanDynamicMappingA#uci_string}
  */
  readonly uciString?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#vci_match ObjectFspVlanDynamicMappingA#vci_match}
  */
  readonly vciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#vci_string ObjectFspVlanDynamicMappingA#vci_string}
  */
  readonly vciString?: string[];
}

export function objectFspVlanDynamicMappingDhcpServerIpRangeAToTerraform(struct?: ObjectFspVlanDynamicMappingDhcpServerIpRangeA | cdktf.IResolvable): any {
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


export function objectFspVlanDynamicMappingDhcpServerIpRangeAToHclTerraform(struct?: ObjectFspVlanDynamicMappingDhcpServerIpRangeA | cdktf.IResolvable): any {
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

export class ObjectFspVlanDynamicMappingDhcpServerIpRangeAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanDynamicMappingDhcpServerIpRangeA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectFspVlanDynamicMappingDhcpServerIpRangeA | cdktf.IResolvable | undefined) {
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

export class ObjectFspVlanDynamicMappingDhcpServerIpRangeAList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanDynamicMappingDhcpServerIpRangeA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanDynamicMappingDhcpServerIpRangeAOutputReference {
    return new ObjectFspVlanDynamicMappingDhcpServerIpRangeAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanDynamicMappingDhcpServerOptionsA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#code ObjectFspVlanDynamicMappingA#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#id ObjectFspVlanDynamicMappingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ip ObjectFspVlanDynamicMappingA#ip}
  */
  readonly ip?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#type ObjectFspVlanDynamicMappingA#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#uci_match ObjectFspVlanDynamicMappingA#uci_match}
  */
  readonly uciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#uci_string ObjectFspVlanDynamicMappingA#uci_string}
  */
  readonly uciString?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#value ObjectFspVlanDynamicMappingA#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#vci_match ObjectFspVlanDynamicMappingA#vci_match}
  */
  readonly vciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#vci_string ObjectFspVlanDynamicMappingA#vci_string}
  */
  readonly vciString?: string[];
}

export function objectFspVlanDynamicMappingDhcpServerOptionsAToTerraform(struct?: ObjectFspVlanDynamicMappingDhcpServerOptionsA | cdktf.IResolvable): any {
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


export function objectFspVlanDynamicMappingDhcpServerOptionsAToHclTerraform(struct?: ObjectFspVlanDynamicMappingDhcpServerOptionsA | cdktf.IResolvable): any {
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

export class ObjectFspVlanDynamicMappingDhcpServerOptionsAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanDynamicMappingDhcpServerOptionsA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectFspVlanDynamicMappingDhcpServerOptionsA | cdktf.IResolvable | undefined) {
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

export class ObjectFspVlanDynamicMappingDhcpServerOptionsAList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanDynamicMappingDhcpServerOptionsA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanDynamicMappingDhcpServerOptionsAOutputReference {
    return new ObjectFspVlanDynamicMappingDhcpServerOptionsAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanDynamicMappingDhcpServerReservedAddressA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#action ObjectFspVlanDynamicMappingA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#circuit_id ObjectFspVlanDynamicMappingA#circuit_id}
  */
  readonly circuitId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#circuit_id_type ObjectFspVlanDynamicMappingA#circuit_id_type}
  */
  readonly circuitIdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#description ObjectFspVlanDynamicMappingA#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#id ObjectFspVlanDynamicMappingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ip ObjectFspVlanDynamicMappingA#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#mac ObjectFspVlanDynamicMappingA#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#remote_id ObjectFspVlanDynamicMappingA#remote_id}
  */
  readonly remoteId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#remote_id_type ObjectFspVlanDynamicMappingA#remote_id_type}
  */
  readonly remoteIdType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#type ObjectFspVlanDynamicMappingA#type}
  */
  readonly type?: string;
}

export function objectFspVlanDynamicMappingDhcpServerReservedAddressAToTerraform(struct?: ObjectFspVlanDynamicMappingDhcpServerReservedAddressA | cdktf.IResolvable): any {
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


export function objectFspVlanDynamicMappingDhcpServerReservedAddressAToHclTerraform(struct?: ObjectFspVlanDynamicMappingDhcpServerReservedAddressA | cdktf.IResolvable): any {
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

export class ObjectFspVlanDynamicMappingDhcpServerReservedAddressAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanDynamicMappingDhcpServerReservedAddressA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectFspVlanDynamicMappingDhcpServerReservedAddressA | cdktf.IResolvable | undefined) {
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

export class ObjectFspVlanDynamicMappingDhcpServerReservedAddressAList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanDynamicMappingDhcpServerReservedAddressA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanDynamicMappingDhcpServerReservedAddressAOutputReference {
    return new ObjectFspVlanDynamicMappingDhcpServerReservedAddressAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanDynamicMappingDhcpServerA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#auto_configuration ObjectFspVlanDynamicMappingA#auto_configuration}
  */
  readonly autoConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#auto_managed_status ObjectFspVlanDynamicMappingA#auto_managed_status}
  */
  readonly autoManagedStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#conflicted_ip_timeout ObjectFspVlanDynamicMappingA#conflicted_ip_timeout}
  */
  readonly conflictedIpTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ddns_auth ObjectFspVlanDynamicMappingA#ddns_auth}
  */
  readonly ddnsAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ddns_key ObjectFspVlanDynamicMappingA#ddns_key}
  */
  readonly ddnsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ddns_keyname ObjectFspVlanDynamicMappingA#ddns_keyname}
  */
  readonly ddnsKeyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ddns_server_ip ObjectFspVlanDynamicMappingA#ddns_server_ip}
  */
  readonly ddnsServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ddns_ttl ObjectFspVlanDynamicMappingA#ddns_ttl}
  */
  readonly ddnsTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ddns_update ObjectFspVlanDynamicMappingA#ddns_update}
  */
  readonly ddnsUpdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ddns_update_override ObjectFspVlanDynamicMappingA#ddns_update_override}
  */
  readonly ddnsUpdateOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ddns_zone ObjectFspVlanDynamicMappingA#ddns_zone}
  */
  readonly ddnsZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#default_gateway ObjectFspVlanDynamicMappingA#default_gateway}
  */
  readonly defaultGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#dhcp_settings_from_fortiipam ObjectFspVlanDynamicMappingA#dhcp_settings_from_fortiipam}
  */
  readonly dhcpSettingsFromFortiipam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#dns_server1 ObjectFspVlanDynamicMappingA#dns_server1}
  */
  readonly dnsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#dns_server2 ObjectFspVlanDynamicMappingA#dns_server2}
  */
  readonly dnsServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#dns_server3 ObjectFspVlanDynamicMappingA#dns_server3}
  */
  readonly dnsServer3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#dns_server4 ObjectFspVlanDynamicMappingA#dns_server4}
  */
  readonly dnsServer4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#dns_service ObjectFspVlanDynamicMappingA#dns_service}
  */
  readonly dnsService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#domain ObjectFspVlanDynamicMappingA#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#enable ObjectFspVlanDynamicMappingA#enable}
  */
  readonly enable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#filename ObjectFspVlanDynamicMappingA#filename}
  */
  readonly filename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#forticlient_on_net_status ObjectFspVlanDynamicMappingA#forticlient_on_net_status}
  */
  readonly forticlientOnNetStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#id ObjectFspVlanDynamicMappingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ip_mode ObjectFspVlanDynamicMappingA#ip_mode}
  */
  readonly ipMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ipsec_lease_hold ObjectFspVlanDynamicMappingA#ipsec_lease_hold}
  */
  readonly ipsecLeaseHold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#lease_time ObjectFspVlanDynamicMappingA#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#mac_acl_default_action ObjectFspVlanDynamicMappingA#mac_acl_default_action}
  */
  readonly macAclDefaultAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#netmask ObjectFspVlanDynamicMappingA#netmask}
  */
  readonly netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#next_server ObjectFspVlanDynamicMappingA#next_server}
  */
  readonly nextServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ntp_server1 ObjectFspVlanDynamicMappingA#ntp_server1}
  */
  readonly ntpServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ntp_server2 ObjectFspVlanDynamicMappingA#ntp_server2}
  */
  readonly ntpServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ntp_server3 ObjectFspVlanDynamicMappingA#ntp_server3}
  */
  readonly ntpServer3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ntp_service ObjectFspVlanDynamicMappingA#ntp_service}
  */
  readonly ntpService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#option1 ObjectFspVlanDynamicMappingA#option1}
  */
  readonly option1?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#option2 ObjectFspVlanDynamicMappingA#option2}
  */
  readonly option2?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#option3 ObjectFspVlanDynamicMappingA#option3}
  */
  readonly option3?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#option4 ObjectFspVlanDynamicMappingA#option4}
  */
  readonly option4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#option5 ObjectFspVlanDynamicMappingA#option5}
  */
  readonly option5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#option6 ObjectFspVlanDynamicMappingA#option6}
  */
  readonly option6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#relay_agent ObjectFspVlanDynamicMappingA#relay_agent}
  */
  readonly relayAgent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#server_type ObjectFspVlanDynamicMappingA#server_type}
  */
  readonly serverType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#shared_subnet ObjectFspVlanDynamicMappingA#shared_subnet}
  */
  readonly sharedSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#status ObjectFspVlanDynamicMappingA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#tftp_server ObjectFspVlanDynamicMappingA#tftp_server}
  */
  readonly tftpServer?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#timezone ObjectFspVlanDynamicMappingA#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#timezone_option ObjectFspVlanDynamicMappingA#timezone_option}
  */
  readonly timezoneOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#vci_match ObjectFspVlanDynamicMappingA#vci_match}
  */
  readonly vciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#vci_string ObjectFspVlanDynamicMappingA#vci_string}
  */
  readonly vciString?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#wifi_ac1 ObjectFspVlanDynamicMappingA#wifi_ac1}
  */
  readonly wifiAc1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#wifi_ac2 ObjectFspVlanDynamicMappingA#wifi_ac2}
  */
  readonly wifiAc2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#wifi_ac3 ObjectFspVlanDynamicMappingA#wifi_ac3}
  */
  readonly wifiAc3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#wifi_ac_service ObjectFspVlanDynamicMappingA#wifi_ac_service}
  */
  readonly wifiAcService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#wins_server1 ObjectFspVlanDynamicMappingA#wins_server1}
  */
  readonly winsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#wins_server2 ObjectFspVlanDynamicMappingA#wins_server2}
  */
  readonly winsServer2?: string;
  /**
  * exclude_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#exclude_range ObjectFspVlanDynamicMappingA#exclude_range}
  */
  readonly excludeRange?: ObjectFspVlanDynamicMappingDhcpServerExcludeRangeA[] | cdktf.IResolvable;
  /**
  * ip_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ip_range ObjectFspVlanDynamicMappingA#ip_range}
  */
  readonly ipRange?: ObjectFspVlanDynamicMappingDhcpServerIpRangeA[] | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#options ObjectFspVlanDynamicMappingA#options}
  */
  readonly options?: ObjectFspVlanDynamicMappingDhcpServerOptionsA[] | cdktf.IResolvable;
  /**
  * reserved_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#reserved_address ObjectFspVlanDynamicMappingA#reserved_address}
  */
  readonly reservedAddress?: ObjectFspVlanDynamicMappingDhcpServerReservedAddressA[] | cdktf.IResolvable;
}

export function objectFspVlanDynamicMappingDhcpServerAToTerraform(struct?: ObjectFspVlanDynamicMappingDhcpServerAOutputReference | ObjectFspVlanDynamicMappingDhcpServerA): any {
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
    exclude_range: cdktf.listMapper(objectFspVlanDynamicMappingDhcpServerExcludeRangeAToTerraform, true)(struct!.excludeRange),
    ip_range: cdktf.listMapper(objectFspVlanDynamicMappingDhcpServerIpRangeAToTerraform, true)(struct!.ipRange),
    options: cdktf.listMapper(objectFspVlanDynamicMappingDhcpServerOptionsAToTerraform, true)(struct!.options),
    reserved_address: cdktf.listMapper(objectFspVlanDynamicMappingDhcpServerReservedAddressAToTerraform, true)(struct!.reservedAddress),
  }
}


export function objectFspVlanDynamicMappingDhcpServerAToHclTerraform(struct?: ObjectFspVlanDynamicMappingDhcpServerAOutputReference | ObjectFspVlanDynamicMappingDhcpServerA): any {
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
      value: cdktf.listMapperHcl(objectFspVlanDynamicMappingDhcpServerExcludeRangeAToHclTerraform, true)(struct!.excludeRange),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanDynamicMappingDhcpServerExcludeRangeAList",
    },
    ip_range: {
      value: cdktf.listMapperHcl(objectFspVlanDynamicMappingDhcpServerIpRangeAToHclTerraform, true)(struct!.ipRange),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanDynamicMappingDhcpServerIpRangeAList",
    },
    options: {
      value: cdktf.listMapperHcl(objectFspVlanDynamicMappingDhcpServerOptionsAToHclTerraform, true)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanDynamicMappingDhcpServerOptionsAList",
    },
    reserved_address: {
      value: cdktf.listMapperHcl(objectFspVlanDynamicMappingDhcpServerReservedAddressAToHclTerraform, true)(struct!.reservedAddress),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanDynamicMappingDhcpServerReservedAddressAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanDynamicMappingDhcpServerAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFspVlanDynamicMappingDhcpServerA | undefined {
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

  public set internalValue(value: ObjectFspVlanDynamicMappingDhcpServerA | undefined) {
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
  private _excludeRange = new ObjectFspVlanDynamicMappingDhcpServerExcludeRangeAList(this, "exclude_range", false);
  public get excludeRange() {
    return this._excludeRange;
  }
  public putExcludeRange(value: ObjectFspVlanDynamicMappingDhcpServerExcludeRangeA[] | cdktf.IResolvable) {
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
  private _ipRange = new ObjectFspVlanDynamicMappingDhcpServerIpRangeAList(this, "ip_range", false);
  public get ipRange() {
    return this._ipRange;
  }
  public putIpRange(value: ObjectFspVlanDynamicMappingDhcpServerIpRangeA[] | cdktf.IResolvable) {
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
  private _options = new ObjectFspVlanDynamicMappingDhcpServerOptionsAList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: ObjectFspVlanDynamicMappingDhcpServerOptionsA[] | cdktf.IResolvable) {
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
  private _reservedAddress = new ObjectFspVlanDynamicMappingDhcpServerReservedAddressAList(this, "reserved_address", false);
  public get reservedAddress() {
    return this._reservedAddress;
  }
  public putReservedAddress(value: ObjectFspVlanDynamicMappingDhcpServerReservedAddressA[] | cdktf.IResolvable) {
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
export interface ObjectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStructA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#autonomous_flag ObjectFspVlanDynamicMappingA#autonomous_flag}
  */
  readonly autonomousFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#delegated_prefix_iaid ObjectFspVlanDynamicMappingA#delegated_prefix_iaid}
  */
  readonly delegatedPrefixIaid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#onlink_flag ObjectFspVlanDynamicMappingA#onlink_flag}
  */
  readonly onlinkFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#prefix_id ObjectFspVlanDynamicMappingA#prefix_id}
  */
  readonly prefixId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#rdnss ObjectFspVlanDynamicMappingA#rdnss}
  */
  readonly rdnss?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#rdnss_service ObjectFspVlanDynamicMappingA#rdnss_service}
  */
  readonly rdnssService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#subnet ObjectFspVlanDynamicMappingA#subnet}
  */
  readonly subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#upstream_interface ObjectFspVlanDynamicMappingA#upstream_interface}
  */
  readonly upstreamInterface?: string;
}

export function objectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStructAToTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStructA | cdktf.IResolvable): any {
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


export function objectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStructAToHclTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStructA | cdktf.IResolvable): any {
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

export class ObjectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStructA | cdktf.IResolvable | undefined) {
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

export class ObjectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStructAList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStructA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStructAOutputReference {
    return new ObjectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddrA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#prefix ObjectFspVlanDynamicMappingA#prefix}
  */
  readonly prefix?: string;
}

export function objectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddrAToTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddrA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function objectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddrAToHclTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddrA | cdktf.IResolvable): any {
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

export class ObjectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddrAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddrA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddrA | cdktf.IResolvable | undefined) {
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

export class ObjectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddrAList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddrA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddrAOutputReference {
    return new ObjectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddrAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStructA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#autonomous_flag ObjectFspVlanDynamicMappingA#autonomous_flag}
  */
  readonly autonomousFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#dnssl ObjectFspVlanDynamicMappingA#dnssl}
  */
  readonly dnssl?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#onlink_flag ObjectFspVlanDynamicMappingA#onlink_flag}
  */
  readonly onlinkFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#preferred_life_time ObjectFspVlanDynamicMappingA#preferred_life_time}
  */
  readonly preferredLifeTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#prefix ObjectFspVlanDynamicMappingA#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#rdnss ObjectFspVlanDynamicMappingA#rdnss}
  */
  readonly rdnss?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#valid_life_time ObjectFspVlanDynamicMappingA#valid_life_time}
  */
  readonly validLifeTime?: number;
}

export function objectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStructAToTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStructA | cdktf.IResolvable): any {
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


export function objectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStructAToHclTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStructA | cdktf.IResolvable): any {
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

export class ObjectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStructA | cdktf.IResolvable | undefined) {
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

export class ObjectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStructAList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStructA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStructAOutputReference {
    return new ObjectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanDynamicMappingInterfaceIpv6Vrrp6A {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#accept_mode ObjectFspVlanDynamicMappingA#accept_mode}
  */
  readonly acceptMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#adv_interval ObjectFspVlanDynamicMappingA#adv_interval}
  */
  readonly advInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ignore_default_route ObjectFspVlanDynamicMappingA#ignore_default_route}
  */
  readonly ignoreDefaultRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#preempt ObjectFspVlanDynamicMappingA#preempt}
  */
  readonly preempt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#priority ObjectFspVlanDynamicMappingA#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#start_time ObjectFspVlanDynamicMappingA#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#status ObjectFspVlanDynamicMappingA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#vrdst6 ObjectFspVlanDynamicMappingA#vrdst6}
  */
  readonly vrdst6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#vrgrp ObjectFspVlanDynamicMappingA#vrgrp}
  */
  readonly vrgrp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#vrid ObjectFspVlanDynamicMappingA#vrid}
  */
  readonly vrid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#vrip6 ObjectFspVlanDynamicMappingA#vrip6}
  */
  readonly vrip6?: string;
}

export function objectFspVlanDynamicMappingInterfaceIpv6Vrrp6AToTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceIpv6Vrrp6A | cdktf.IResolvable): any {
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


export function objectFspVlanDynamicMappingInterfaceIpv6Vrrp6AToHclTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceIpv6Vrrp6A | cdktf.IResolvable): any {
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

export class ObjectFspVlanDynamicMappingInterfaceIpv6Vrrp6AOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanDynamicMappingInterfaceIpv6Vrrp6A | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectFspVlanDynamicMappingInterfaceIpv6Vrrp6A | cdktf.IResolvable | undefined) {
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

export class ObjectFspVlanDynamicMappingInterfaceIpv6Vrrp6AList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanDynamicMappingInterfaceIpv6Vrrp6A[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanDynamicMappingInterfaceIpv6Vrrp6AOutputReference {
    return new ObjectFspVlanDynamicMappingInterfaceIpv6Vrrp6AOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanDynamicMappingInterfaceIpv6A {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#autoconf ObjectFspVlanDynamicMappingA#autoconf}
  */
  readonly autoconf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#cli_conn6_status ObjectFspVlanDynamicMappingA#cli_conn6_status}
  */
  readonly cliConn6Status?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#dhcp6_client_options ObjectFspVlanDynamicMappingA#dhcp6_client_options}
  */
  readonly dhcp6ClientOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#dhcp6_information_request ObjectFspVlanDynamicMappingA#dhcp6_information_request}
  */
  readonly dhcp6InformationRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#dhcp6_prefix_delegation ObjectFspVlanDynamicMappingA#dhcp6_prefix_delegation}
  */
  readonly dhcp6PrefixDelegation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#dhcp6_prefix_hint ObjectFspVlanDynamicMappingA#dhcp6_prefix_hint}
  */
  readonly dhcp6PrefixHint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#dhcp6_prefix_hint_plt ObjectFspVlanDynamicMappingA#dhcp6_prefix_hint_plt}
  */
  readonly dhcp6PrefixHintPlt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#dhcp6_prefix_hint_vlt ObjectFspVlanDynamicMappingA#dhcp6_prefix_hint_vlt}
  */
  readonly dhcp6PrefixHintVlt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#dhcp6_relay_interface_id ObjectFspVlanDynamicMappingA#dhcp6_relay_interface_id}
  */
  readonly dhcp6RelayInterfaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#dhcp6_relay_ip ObjectFspVlanDynamicMappingA#dhcp6_relay_ip}
  */
  readonly dhcp6RelayIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#dhcp6_relay_service ObjectFspVlanDynamicMappingA#dhcp6_relay_service}
  */
  readonly dhcp6RelayService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#dhcp6_relay_source_interface ObjectFspVlanDynamicMappingA#dhcp6_relay_source_interface}
  */
  readonly dhcp6RelaySourceInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#dhcp6_relay_source_ip ObjectFspVlanDynamicMappingA#dhcp6_relay_source_ip}
  */
  readonly dhcp6RelaySourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#dhcp6_relay_type ObjectFspVlanDynamicMappingA#dhcp6_relay_type}
  */
  readonly dhcp6RelayType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#icmp6_send_redirect ObjectFspVlanDynamicMappingA#icmp6_send_redirect}
  */
  readonly icmp6SendRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#interface_identifier ObjectFspVlanDynamicMappingA#interface_identifier}
  */
  readonly interfaceIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ip6_address ObjectFspVlanDynamicMappingA#ip6_address}
  */
  readonly ip6Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ip6_allowaccess ObjectFspVlanDynamicMappingA#ip6_allowaccess}
  */
  readonly ip6Allowaccess?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ip6_default_life ObjectFspVlanDynamicMappingA#ip6_default_life}
  */
  readonly ip6DefaultLife?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ip6_delegated_prefix_iaid ObjectFspVlanDynamicMappingA#ip6_delegated_prefix_iaid}
  */
  readonly ip6DelegatedPrefixIaid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ip6_dns_server_override ObjectFspVlanDynamicMappingA#ip6_dns_server_override}
  */
  readonly ip6DnsServerOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ip6_hop_limit ObjectFspVlanDynamicMappingA#ip6_hop_limit}
  */
  readonly ip6HopLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ip6_link_mtu ObjectFspVlanDynamicMappingA#ip6_link_mtu}
  */
  readonly ip6LinkMtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ip6_manage_flag ObjectFspVlanDynamicMappingA#ip6_manage_flag}
  */
  readonly ip6ManageFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ip6_max_interval ObjectFspVlanDynamicMappingA#ip6_max_interval}
  */
  readonly ip6MaxInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ip6_min_interval ObjectFspVlanDynamicMappingA#ip6_min_interval}
  */
  readonly ip6MinInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ip6_mode ObjectFspVlanDynamicMappingA#ip6_mode}
  */
  readonly ip6Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ip6_other_flag ObjectFspVlanDynamicMappingA#ip6_other_flag}
  */
  readonly ip6OtherFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ip6_prefix_mode ObjectFspVlanDynamicMappingA#ip6_prefix_mode}
  */
  readonly ip6PrefixMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ip6_reachable_time ObjectFspVlanDynamicMappingA#ip6_reachable_time}
  */
  readonly ip6ReachableTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ip6_retrans_time ObjectFspVlanDynamicMappingA#ip6_retrans_time}
  */
  readonly ip6RetransTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ip6_send_adv ObjectFspVlanDynamicMappingA#ip6_send_adv}
  */
  readonly ip6SendAdv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ip6_subnet ObjectFspVlanDynamicMappingA#ip6_subnet}
  */
  readonly ip6Subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ip6_upstream_interface ObjectFspVlanDynamicMappingA#ip6_upstream_interface}
  */
  readonly ip6UpstreamInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#nd_cert ObjectFspVlanDynamicMappingA#nd_cert}
  */
  readonly ndCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#nd_cga_modifier ObjectFspVlanDynamicMappingA#nd_cga_modifier}
  */
  readonly ndCgaModifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#nd_mode ObjectFspVlanDynamicMappingA#nd_mode}
  */
  readonly ndMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#nd_security_level ObjectFspVlanDynamicMappingA#nd_security_level}
  */
  readonly ndSecurityLevel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#nd_timestamp_delta ObjectFspVlanDynamicMappingA#nd_timestamp_delta}
  */
  readonly ndTimestampDelta?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#nd_timestamp_fuzz ObjectFspVlanDynamicMappingA#nd_timestamp_fuzz}
  */
  readonly ndTimestampFuzz?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ra_send_mtu ObjectFspVlanDynamicMappingA#ra_send_mtu}
  */
  readonly raSendMtu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#unique_autoconf_addr ObjectFspVlanDynamicMappingA#unique_autoconf_addr}
  */
  readonly uniqueAutoconfAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#vrip6_link_local ObjectFspVlanDynamicMappingA#vrip6_link_local}
  */
  readonly vrip6LinkLocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#vrrp_virtual_mac6 ObjectFspVlanDynamicMappingA#vrrp_virtual_mac6}
  */
  readonly vrrpVirtualMac6?: string;
  /**
  * ip6_delegated_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ip6_delegated_prefix_list ObjectFspVlanDynamicMappingA#ip6_delegated_prefix_list}
  */
  readonly ip6DelegatedPrefixList?: ObjectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStructA[] | cdktf.IResolvable;
  /**
  * ip6_extra_addr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ip6_extra_addr ObjectFspVlanDynamicMappingA#ip6_extra_addr}
  */
  readonly ip6ExtraAddr?: ObjectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddrA[] | cdktf.IResolvable;
  /**
  * ip6_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ip6_prefix_list ObjectFspVlanDynamicMappingA#ip6_prefix_list}
  */
  readonly ip6PrefixList?: ObjectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStructA[] | cdktf.IResolvable;
  /**
  * vrrp6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#vrrp6 ObjectFspVlanDynamicMappingA#vrrp6}
  */
  readonly vrrp6?: ObjectFspVlanDynamicMappingInterfaceIpv6Vrrp6A[] | cdktf.IResolvable;
}

export function objectFspVlanDynamicMappingInterfaceIpv6AToTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceIpv6AOutputReference | ObjectFspVlanDynamicMappingInterfaceIpv6A): any {
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
    ip6_delegated_prefix_list: cdktf.listMapper(objectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStructAToTerraform, true)(struct!.ip6DelegatedPrefixList),
    ip6_extra_addr: cdktf.listMapper(objectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddrAToTerraform, true)(struct!.ip6ExtraAddr),
    ip6_prefix_list: cdktf.listMapper(objectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStructAToTerraform, true)(struct!.ip6PrefixList),
    vrrp6: cdktf.listMapper(objectFspVlanDynamicMappingInterfaceIpv6Vrrp6AToTerraform, true)(struct!.vrrp6),
  }
}


export function objectFspVlanDynamicMappingInterfaceIpv6AToHclTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceIpv6AOutputReference | ObjectFspVlanDynamicMappingInterfaceIpv6A): any {
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
      value: cdktf.listMapperHcl(objectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStructAToHclTerraform, true)(struct!.ip6DelegatedPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStructAList",
    },
    ip6_extra_addr: {
      value: cdktf.listMapperHcl(objectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddrAToHclTerraform, true)(struct!.ip6ExtraAddr),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddrAList",
    },
    ip6_prefix_list: {
      value: cdktf.listMapperHcl(objectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStructAToHclTerraform, true)(struct!.ip6PrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStructAList",
    },
    vrrp6: {
      value: cdktf.listMapperHcl(objectFspVlanDynamicMappingInterfaceIpv6Vrrp6AToHclTerraform, true)(struct!.vrrp6),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanDynamicMappingInterfaceIpv6Vrrp6AList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanDynamicMappingInterfaceIpv6AOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFspVlanDynamicMappingInterfaceIpv6A | undefined {
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

  public set internalValue(value: ObjectFspVlanDynamicMappingInterfaceIpv6A | undefined) {
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
  private _ip6DelegatedPrefixList = new ObjectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStructAList(this, "ip6_delegated_prefix_list", false);
  public get ip6DelegatedPrefixList() {
    return this._ip6DelegatedPrefixList;
  }
  public putIp6DelegatedPrefixList(value: ObjectFspVlanDynamicMappingInterfaceIpv6Ip6DelegatedPrefixListStructA[] | cdktf.IResolvable) {
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
  private _ip6ExtraAddr = new ObjectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddrAList(this, "ip6_extra_addr", false);
  public get ip6ExtraAddr() {
    return this._ip6ExtraAddr;
  }
  public putIp6ExtraAddr(value: ObjectFspVlanDynamicMappingInterfaceIpv6Ip6ExtraAddrA[] | cdktf.IResolvable) {
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
  private _ip6PrefixList = new ObjectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStructAList(this, "ip6_prefix_list", false);
  public get ip6PrefixList() {
    return this._ip6PrefixList;
  }
  public putIp6PrefixList(value: ObjectFspVlanDynamicMappingInterfaceIpv6Ip6PrefixListStructA[] | cdktf.IResolvable) {
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
  private _vrrp6 = new ObjectFspVlanDynamicMappingInterfaceIpv6Vrrp6AList(this, "vrrp6", false);
  public get vrrp6() {
    return this._vrrp6;
  }
  public putVrrp6(value: ObjectFspVlanDynamicMappingInterfaceIpv6Vrrp6A[] | cdktf.IResolvable) {
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
export interface ObjectFspVlanDynamicMappingInterfaceSecondaryipA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#allowaccess ObjectFspVlanDynamicMappingA#allowaccess}
  */
  readonly allowaccess?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#detectprotocol ObjectFspVlanDynamicMappingA#detectprotocol}
  */
  readonly detectprotocol?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#detectserver ObjectFspVlanDynamicMappingA#detectserver}
  */
  readonly detectserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#gwdetect ObjectFspVlanDynamicMappingA#gwdetect}
  */
  readonly gwdetect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ha_priority ObjectFspVlanDynamicMappingA#ha_priority}
  */
  readonly haPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#id ObjectFspVlanDynamicMappingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ip ObjectFspVlanDynamicMappingA#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ping_serv_status ObjectFspVlanDynamicMappingA#ping_serv_status}
  */
  readonly pingServStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#secip_relay_ip ObjectFspVlanDynamicMappingA#secip_relay_ip}
  */
  readonly secipRelayIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#seq ObjectFspVlanDynamicMappingA#seq}
  */
  readonly seq?: number;
}

export function objectFspVlanDynamicMappingInterfaceSecondaryipAToTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceSecondaryipA | cdktf.IResolvable): any {
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


export function objectFspVlanDynamicMappingInterfaceSecondaryipAToHclTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceSecondaryipA | cdktf.IResolvable): any {
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

export class ObjectFspVlanDynamicMappingInterfaceSecondaryipAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanDynamicMappingInterfaceSecondaryipA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectFspVlanDynamicMappingInterfaceSecondaryipA | cdktf.IResolvable | undefined) {
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

export class ObjectFspVlanDynamicMappingInterfaceSecondaryipAList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanDynamicMappingInterfaceSecondaryipA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanDynamicMappingInterfaceSecondaryipAOutputReference {
    return new ObjectFspVlanDynamicMappingInterfaceSecondaryipAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanDynamicMappingInterfaceVrrpProxyArpA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#id ObjectFspVlanDynamicMappingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ip ObjectFspVlanDynamicMappingA#ip}
  */
  readonly ip?: string;
}

export function objectFspVlanDynamicMappingInterfaceVrrpProxyArpAToTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceVrrpProxyArpA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function objectFspVlanDynamicMappingInterfaceVrrpProxyArpAToHclTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceVrrpProxyArpA | cdktf.IResolvable): any {
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

export class ObjectFspVlanDynamicMappingInterfaceVrrpProxyArpAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanDynamicMappingInterfaceVrrpProxyArpA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectFspVlanDynamicMappingInterfaceVrrpProxyArpA | cdktf.IResolvable | undefined) {
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

export class ObjectFspVlanDynamicMappingInterfaceVrrpProxyArpAList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanDynamicMappingInterfaceVrrpProxyArpA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanDynamicMappingInterfaceVrrpProxyArpAOutputReference {
    return new ObjectFspVlanDynamicMappingInterfaceVrrpProxyArpAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanDynamicMappingInterfaceVrrpA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#accept_mode ObjectFspVlanDynamicMappingA#accept_mode}
  */
  readonly acceptMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#adv_interval ObjectFspVlanDynamicMappingA#adv_interval}
  */
  readonly advInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ignore_default_route ObjectFspVlanDynamicMappingA#ignore_default_route}
  */
  readonly ignoreDefaultRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#preempt ObjectFspVlanDynamicMappingA#preempt}
  */
  readonly preempt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#priority ObjectFspVlanDynamicMappingA#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#start_time ObjectFspVlanDynamicMappingA#start_time}
  */
  readonly startTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#status ObjectFspVlanDynamicMappingA#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#version ObjectFspVlanDynamicMappingA#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#vrdst ObjectFspVlanDynamicMappingA#vrdst}
  */
  readonly vrdst?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#vrdst_priority ObjectFspVlanDynamicMappingA#vrdst_priority}
  */
  readonly vrdstPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#vrgrp ObjectFspVlanDynamicMappingA#vrgrp}
  */
  readonly vrgrp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#vrid ObjectFspVlanDynamicMappingA#vrid}
  */
  readonly vrid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#vrip ObjectFspVlanDynamicMappingA#vrip}
  */
  readonly vrip?: string;
  /**
  * proxy_arp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#proxy_arp ObjectFspVlanDynamicMappingA#proxy_arp}
  */
  readonly proxyArp?: ObjectFspVlanDynamicMappingInterfaceVrrpProxyArpA[] | cdktf.IResolvable;
}

export function objectFspVlanDynamicMappingInterfaceVrrpAToTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceVrrpA | cdktf.IResolvable): any {
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
    proxy_arp: cdktf.listMapper(objectFspVlanDynamicMappingInterfaceVrrpProxyArpAToTerraform, true)(struct!.proxyArp),
  }
}


export function objectFspVlanDynamicMappingInterfaceVrrpAToHclTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceVrrpA | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(objectFspVlanDynamicMappingInterfaceVrrpProxyArpAToHclTerraform, true)(struct!.proxyArp),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanDynamicMappingInterfaceVrrpProxyArpAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanDynamicMappingInterfaceVrrpAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFspVlanDynamicMappingInterfaceVrrpA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectFspVlanDynamicMappingInterfaceVrrpA | cdktf.IResolvable | undefined) {
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
  private _proxyArp = new ObjectFspVlanDynamicMappingInterfaceVrrpProxyArpAList(this, "proxy_arp", false);
  public get proxyArp() {
    return this._proxyArp;
  }
  public putProxyArp(value: ObjectFspVlanDynamicMappingInterfaceVrrpProxyArpA[] | cdktf.IResolvable) {
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

export class ObjectFspVlanDynamicMappingInterfaceVrrpAList extends cdktf.ComplexList {
  public internalValue? : ObjectFspVlanDynamicMappingInterfaceVrrpA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFspVlanDynamicMappingInterfaceVrrpAOutputReference {
    return new ObjectFspVlanDynamicMappingInterfaceVrrpAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFspVlanDynamicMappingInterfaceA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#dhcp_relay_agent_option ObjectFspVlanDynamicMappingA#dhcp_relay_agent_option}
  */
  readonly dhcpRelayAgentOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#dhcp_relay_interface_select_method ObjectFspVlanDynamicMappingA#dhcp_relay_interface_select_method}
  */
  readonly dhcpRelayInterfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#dhcp_relay_ip ObjectFspVlanDynamicMappingA#dhcp_relay_ip}
  */
  readonly dhcpRelayIp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#dhcp_relay_service ObjectFspVlanDynamicMappingA#dhcp_relay_service}
  */
  readonly dhcpRelayService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#dhcp_relay_type ObjectFspVlanDynamicMappingA#dhcp_relay_type}
  */
  readonly dhcpRelayType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ip ObjectFspVlanDynamicMappingA#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#secondary_ip ObjectFspVlanDynamicMappingA#secondary_ip}
  */
  readonly secondaryIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#vlanid ObjectFspVlanDynamicMappingA#vlanid}
  */
  readonly vlanid?: number;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#ipv6 ObjectFspVlanDynamicMappingA#ipv6}
  */
  readonly ipv6?: ObjectFspVlanDynamicMappingInterfaceIpv6A;
  /**
  * secondaryip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#secondaryip ObjectFspVlanDynamicMappingA#secondaryip}
  */
  readonly secondaryip?: ObjectFspVlanDynamicMappingInterfaceSecondaryipA[] | cdktf.IResolvable;
  /**
  * vrrp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#vrrp ObjectFspVlanDynamicMappingA#vrrp}
  */
  readonly vrrp?: ObjectFspVlanDynamicMappingInterfaceVrrpA[] | cdktf.IResolvable;
}

export function objectFspVlanDynamicMappingInterfaceAToTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceAOutputReference | ObjectFspVlanDynamicMappingInterfaceA): any {
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
    ipv6: objectFspVlanDynamicMappingInterfaceIpv6AToTerraform(struct!.ipv6),
    secondaryip: cdktf.listMapper(objectFspVlanDynamicMappingInterfaceSecondaryipAToTerraform, true)(struct!.secondaryip),
    vrrp: cdktf.listMapper(objectFspVlanDynamicMappingInterfaceVrrpAToTerraform, true)(struct!.vrrp),
  }
}


export function objectFspVlanDynamicMappingInterfaceAToHclTerraform(struct?: ObjectFspVlanDynamicMappingInterfaceAOutputReference | ObjectFspVlanDynamicMappingInterfaceA): any {
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
      value: objectFspVlanDynamicMappingInterfaceIpv6AToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanDynamicMappingInterfaceIpv6AList",
    },
    secondaryip: {
      value: cdktf.listMapperHcl(objectFspVlanDynamicMappingInterfaceSecondaryipAToHclTerraform, true)(struct!.secondaryip),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanDynamicMappingInterfaceSecondaryipAList",
    },
    vrrp: {
      value: cdktf.listMapperHcl(objectFspVlanDynamicMappingInterfaceVrrpAToHclTerraform, true)(struct!.vrrp),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFspVlanDynamicMappingInterfaceVrrpAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFspVlanDynamicMappingInterfaceAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFspVlanDynamicMappingInterfaceA | undefined {
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

  public set internalValue(value: ObjectFspVlanDynamicMappingInterfaceA | undefined) {
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
  private _ipv6 = new ObjectFspVlanDynamicMappingInterfaceIpv6AOutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ObjectFspVlanDynamicMappingInterfaceIpv6A) {
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
  private _secondaryip = new ObjectFspVlanDynamicMappingInterfaceSecondaryipAList(this, "secondaryip", false);
  public get secondaryip() {
    return this._secondaryip;
  }
  public putSecondaryip(value: ObjectFspVlanDynamicMappingInterfaceSecondaryipA[] | cdktf.IResolvable) {
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
  private _vrrp = new ObjectFspVlanDynamicMappingInterfaceVrrpAList(this, "vrrp", false);
  public get vrrp() {
    return this._vrrp;
  }
  public putVrrp(value: ObjectFspVlanDynamicMappingInterfaceVrrpA[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping fortimanager_object_fsp_vlan_dynamic_mapping}
*/
export class ObjectFspVlanDynamicMappingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_fsp_vlan_dynamic_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFspVlanDynamicMappingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFspVlanDynamicMappingA to import
  * @param importFromId The id of the existing ObjectFspVlanDynamicMappingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFspVlanDynamicMappingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_fsp_vlan_dynamic_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping fortimanager_object_fsp_vlan_dynamic_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFspVlanDynamicMappingAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFspVlanDynamicMappingAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_fsp_vlan_dynamic_mapping',
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
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._scopetype = config.scopetype;
    this._vlan = config.vlan;
    this._scope.internalValue = config.scope;
    this._dhcpServer.internalValue = config.dhcpServer;
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

  // vlan - computed: false, optional: false, required: true
  private _vlan?: string; 
  public get vlan() {
    return this.getStringAttribute('vlan');
  }
  public set vlan(value: string) {
    this._vlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // _scope - computed: false, optional: true, required: false
  private _scope = new ObjectFspVlanDynamicMappingScopeAList(this, "_scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: ObjectFspVlanDynamicMappingScopeA[] | cdktf.IResolvable) {
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
  private _dhcpServer = new ObjectFspVlanDynamicMappingDhcpServerAOutputReference(this, "dhcp_server");
  public get dhcpServer() {
    return this._dhcpServer;
  }
  public putDhcpServer(value: ObjectFspVlanDynamicMappingDhcpServerA) {
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
  private _interface = new ObjectFspVlanDynamicMappingInterfaceAOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: ObjectFspVlanDynamicMappingInterfaceA) {
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
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      vlan: cdktf.stringToTerraform(this._vlan),
      _scope: cdktf.listMapper(objectFspVlanDynamicMappingScopeAToTerraform, true)(this._scope.internalValue),
      dhcp_server: objectFspVlanDynamicMappingDhcpServerAToTerraform(this._dhcpServer.internalValue),
      interface: objectFspVlanDynamicMappingInterfaceAToTerraform(this._interface.internalValue),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan: {
        value: cdktf.stringToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      _scope: {
        value: cdktf.listMapperHcl(objectFspVlanDynamicMappingScopeAToHclTerraform, true)(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFspVlanDynamicMappingScopeAList",
      },
      dhcp_server: {
        value: objectFspVlanDynamicMappingDhcpServerAToHclTerraform(this._dhcpServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFspVlanDynamicMappingDhcpServerAList",
      },
      interface: {
        value: objectFspVlanDynamicMappingInterfaceAToHclTerraform(this._interface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFspVlanDynamicMappingInterfaceAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
