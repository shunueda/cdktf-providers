// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallAddress6Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#_image_base64 ObjectFirewallAddress6#_image_base64}
  */
  readonly imageBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#adom ObjectFirewallAddress6#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#cache_ttl ObjectFirewallAddress6#cache_ttl}
  */
  readonly cacheTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#color ObjectFirewallAddress6#color}
  */
  readonly color?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#comment ObjectFirewallAddress6#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#country ObjectFirewallAddress6#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#dynamic_sort_subtable ObjectFirewallAddress6#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#end_ip ObjectFirewallAddress6#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#end_mac ObjectFirewallAddress6#end_mac}
  */
  readonly endMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#epg_name ObjectFirewallAddress6#epg_name}
  */
  readonly epgName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#fabric_object ObjectFirewallAddress6#fabric_object}
  */
  readonly fabricObject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#filter ObjectFirewallAddress6#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#fqdn ObjectFirewallAddress6#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#global_object ObjectFirewallAddress6#global_object}
  */
  readonly globalObject?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#host ObjectFirewallAddress6#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#host_type ObjectFirewallAddress6#host_type}
  */
  readonly hostType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#id ObjectFirewallAddress6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#ip6 ObjectFirewallAddress6#ip6}
  */
  readonly ip6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#macaddr ObjectFirewallAddress6#macaddr}
  */
  readonly macaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#name ObjectFirewallAddress6#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#obj_id ObjectFirewallAddress6#obj_id}
  */
  readonly objId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#route_tag ObjectFirewallAddress6#route_tag}
  */
  readonly routeTag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#scopetype ObjectFirewallAddress6#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#sdn ObjectFirewallAddress6#sdn}
  */
  readonly sdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#sdn_addr_type ObjectFirewallAddress6#sdn_addr_type}
  */
  readonly sdnAddrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#sdn_tag ObjectFirewallAddress6#sdn_tag}
  */
  readonly sdnTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#start_ip ObjectFirewallAddress6#start_ip}
  */
  readonly startIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#start_mac ObjectFirewallAddress6#start_mac}
  */
  readonly startMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#template ObjectFirewallAddress6#template}
  */
  readonly template?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#tenant ObjectFirewallAddress6#tenant}
  */
  readonly tenant?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#type ObjectFirewallAddress6#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#uuid ObjectFirewallAddress6#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#visibility ObjectFirewallAddress6#visibility}
  */
  readonly visibility?: string;
  /**
  * dynamic_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#dynamic_mapping ObjectFirewallAddress6#dynamic_mapping}
  */
  readonly dynamicMapping?: ObjectFirewallAddress6DynamicMapping[] | cdktf.IResolvable;
  /**
  * list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#list ObjectFirewallAddress6#list}
  */
  readonly list?: ObjectFirewallAddress6ListStruct[] | cdktf.IResolvable;
  /**
  * subnet_segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#subnet_segment ObjectFirewallAddress6#subnet_segment}
  */
  readonly subnetSegment?: ObjectFirewallAddress6SubnetSegment[] | cdktf.IResolvable;
  /**
  * tagging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#tagging ObjectFirewallAddress6#tagging}
  */
  readonly tagging?: ObjectFirewallAddress6Tagging[] | cdktf.IResolvable;
}
export interface ObjectFirewallAddress6DynamicMappingScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#name ObjectFirewallAddress6#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#vdom ObjectFirewallAddress6#vdom}
  */
  readonly vdom?: string;
}

export function objectFirewallAddress6DynamicMappingScopeToTerraform(struct?: ObjectFirewallAddress6DynamicMappingScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vdom: cdktf.stringToTerraform(struct!.vdom),
  }
}


export function objectFirewallAddress6DynamicMappingScopeToHclTerraform(struct?: ObjectFirewallAddress6DynamicMappingScope | cdktf.IResolvable): any {
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

export class ObjectFirewallAddress6DynamicMappingScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallAddress6DynamicMappingScope | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectFirewallAddress6DynamicMappingScope | cdktf.IResolvable | undefined) {
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

export class ObjectFirewallAddress6DynamicMappingScopeList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallAddress6DynamicMappingScope[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallAddress6DynamicMappingScopeOutputReference {
    return new ObjectFirewallAddress6DynamicMappingScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallAddress6DynamicMappingSubnetSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#name ObjectFirewallAddress6#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#type ObjectFirewallAddress6#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#value ObjectFirewallAddress6#value}
  */
  readonly value?: string;
}

export function objectFirewallAddress6DynamicMappingSubnetSegmentToTerraform(struct?: ObjectFirewallAddress6DynamicMappingSubnetSegment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function objectFirewallAddress6DynamicMappingSubnetSegmentToHclTerraform(struct?: ObjectFirewallAddress6DynamicMappingSubnetSegment | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallAddress6DynamicMappingSubnetSegmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallAddress6DynamicMappingSubnetSegment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallAddress6DynamicMappingSubnetSegment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
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
}

export class ObjectFirewallAddress6DynamicMappingSubnetSegmentList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallAddress6DynamicMappingSubnetSegment[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallAddress6DynamicMappingSubnetSegmentOutputReference {
    return new ObjectFirewallAddress6DynamicMappingSubnetSegmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallAddress6DynamicMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#_image_base64 ObjectFirewallAddress6#_image_base64}
  */
  readonly imageBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#cache_ttl ObjectFirewallAddress6#cache_ttl}
  */
  readonly cacheTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#color ObjectFirewallAddress6#color}
  */
  readonly color?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#comment ObjectFirewallAddress6#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#country ObjectFirewallAddress6#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#end_ip ObjectFirewallAddress6#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#end_mac ObjectFirewallAddress6#end_mac}
  */
  readonly endMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#epg_name ObjectFirewallAddress6#epg_name}
  */
  readonly epgName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#fabric_object ObjectFirewallAddress6#fabric_object}
  */
  readonly fabricObject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#filter ObjectFirewallAddress6#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#fqdn ObjectFirewallAddress6#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#global_object ObjectFirewallAddress6#global_object}
  */
  readonly globalObject?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#host ObjectFirewallAddress6#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#host_type ObjectFirewallAddress6#host_type}
  */
  readonly hostType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#ip6 ObjectFirewallAddress6#ip6}
  */
  readonly ip6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#macaddr ObjectFirewallAddress6#macaddr}
  */
  readonly macaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#obj_id ObjectFirewallAddress6#obj_id}
  */
  readonly objId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#route_tag ObjectFirewallAddress6#route_tag}
  */
  readonly routeTag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#sdn ObjectFirewallAddress6#sdn}
  */
  readonly sdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#sdn_addr_type ObjectFirewallAddress6#sdn_addr_type}
  */
  readonly sdnAddrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#sdn_tag ObjectFirewallAddress6#sdn_tag}
  */
  readonly sdnTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#start_ip ObjectFirewallAddress6#start_ip}
  */
  readonly startIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#start_mac ObjectFirewallAddress6#start_mac}
  */
  readonly startMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#tags ObjectFirewallAddress6#tags}
  */
  readonly tags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#template ObjectFirewallAddress6#template}
  */
  readonly template?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#tenant ObjectFirewallAddress6#tenant}
  */
  readonly tenant?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#type ObjectFirewallAddress6#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#uuid ObjectFirewallAddress6#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#visibility ObjectFirewallAddress6#visibility}
  */
  readonly visibility?: string;
  /**
  * _scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#_scope ObjectFirewallAddress6#_scope}
  */
  readonly scope?: ObjectFirewallAddress6DynamicMappingScope[] | cdktf.IResolvable;
  /**
  * subnet_segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#subnet_segment ObjectFirewallAddress6#subnet_segment}
  */
  readonly subnetSegment?: ObjectFirewallAddress6DynamicMappingSubnetSegment[] | cdktf.IResolvable;
}

export function objectFirewallAddress6DynamicMappingToTerraform(struct?: ObjectFirewallAddress6DynamicMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    _image_base64: cdktf.stringToTerraform(struct!.imageBase64),
    cache_ttl: cdktf.numberToTerraform(struct!.cacheTtl),
    color: cdktf.numberToTerraform(struct!.color),
    comment: cdktf.stringToTerraform(struct!.comment),
    country: cdktf.stringToTerraform(struct!.country),
    end_ip: cdktf.stringToTerraform(struct!.endIp),
    end_mac: cdktf.stringToTerraform(struct!.endMac),
    epg_name: cdktf.stringToTerraform(struct!.epgName),
    fabric_object: cdktf.stringToTerraform(struct!.fabricObject),
    filter: cdktf.stringToTerraform(struct!.filter),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    global_object: cdktf.numberToTerraform(struct!.globalObject),
    host: cdktf.stringToTerraform(struct!.host),
    host_type: cdktf.stringToTerraform(struct!.hostType),
    ip6: cdktf.stringToTerraform(struct!.ip6),
    macaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.macaddr),
    obj_id: cdktf.stringToTerraform(struct!.objId),
    route_tag: cdktf.numberToTerraform(struct!.routeTag),
    sdn: cdktf.stringToTerraform(struct!.sdn),
    sdn_addr_type: cdktf.stringToTerraform(struct!.sdnAddrType),
    sdn_tag: cdktf.stringToTerraform(struct!.sdnTag),
    start_ip: cdktf.stringToTerraform(struct!.startIp),
    start_mac: cdktf.stringToTerraform(struct!.startMac),
    tags: cdktf.stringToTerraform(struct!.tags),
    template: cdktf.stringToTerraform(struct!.template),
    tenant: cdktf.stringToTerraform(struct!.tenant),
    type: cdktf.stringToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    visibility: cdktf.stringToTerraform(struct!.visibility),
    _scope: cdktf.listMapper(objectFirewallAddress6DynamicMappingScopeToTerraform, true)(struct!.scope),
    subnet_segment: cdktf.listMapper(objectFirewallAddress6DynamicMappingSubnetSegmentToTerraform, true)(struct!.subnetSegment),
  }
}


export function objectFirewallAddress6DynamicMappingToHclTerraform(struct?: ObjectFirewallAddress6DynamicMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    _image_base64: {
      value: cdktf.stringToHclTerraform(struct!.imageBase64),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_ttl: {
      value: cdktf.numberToHclTerraform(struct!.cacheTtl),
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
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_ip: {
      value: cdktf.stringToHclTerraform(struct!.endIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_mac: {
      value: cdktf.stringToHclTerraform(struct!.endMac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    epg_name: {
      value: cdktf.stringToHclTerraform(struct!.epgName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fabric_object: {
      value: cdktf.stringToHclTerraform(struct!.fabricObject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_object: {
      value: cdktf.numberToHclTerraform(struct!.globalObject),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_type: {
      value: cdktf.stringToHclTerraform(struct!.hostType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip6: {
      value: cdktf.stringToHclTerraform(struct!.ip6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    macaddr: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.macaddr),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    obj_id: {
      value: cdktf.stringToHclTerraform(struct!.objId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_tag: {
      value: cdktf.numberToHclTerraform(struct!.routeTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sdn: {
      value: cdktf.stringToHclTerraform(struct!.sdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdn_addr_type: {
      value: cdktf.stringToHclTerraform(struct!.sdnAddrType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdn_tag: {
      value: cdktf.stringToHclTerraform(struct!.sdnTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_ip: {
      value: cdktf.stringToHclTerraform(struct!.startIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_mac: {
      value: cdktf.stringToHclTerraform(struct!.startMac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.stringToHclTerraform(struct!.tags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
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
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visibility: {
      value: cdktf.stringToHclTerraform(struct!.visibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    _scope: {
      value: cdktf.listMapperHcl(objectFirewallAddress6DynamicMappingScopeToHclTerraform, true)(struct!.scope),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFirewallAddress6DynamicMappingScopeList",
    },
    subnet_segment: {
      value: cdktf.listMapperHcl(objectFirewallAddress6DynamicMappingSubnetSegmentToHclTerraform, true)(struct!.subnetSegment),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFirewallAddress6DynamicMappingSubnetSegmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallAddress6DynamicMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallAddress6DynamicMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageBase64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageBase64 = this._imageBase64;
    }
    if (this._cacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtl = this._cacheTtl;
    }
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._endIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIp = this._endIp;
    }
    if (this._endMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.endMac = this._endMac;
    }
    if (this._epgName !== undefined) {
      hasAnyValues = true;
      internalValueResult.epgName = this._epgName;
    }
    if (this._fabricObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.fabricObject = this._fabricObject;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._globalObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalObject = this._globalObject;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._hostType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostType = this._hostType;
    }
    if (this._ip6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6 = this._ip6;
    }
    if (this._macaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.macaddr = this._macaddr;
    }
    if (this._objId !== undefined) {
      hasAnyValues = true;
      internalValueResult.objId = this._objId;
    }
    if (this._routeTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTag = this._routeTag;
    }
    if (this._sdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdn = this._sdn;
    }
    if (this._sdnAddrType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdnAddrType = this._sdnAddrType;
    }
    if (this._sdnTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdnTag = this._sdnTag;
    }
    if (this._startIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIp = this._startIp;
    }
    if (this._startMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.startMac = this._startMac;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    if (this._subnetSegment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetSegment = this._subnetSegment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallAddress6DynamicMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageBase64 = undefined;
      this._cacheTtl = undefined;
      this._color = undefined;
      this._comment = undefined;
      this._country = undefined;
      this._endIp = undefined;
      this._endMac = undefined;
      this._epgName = undefined;
      this._fabricObject = undefined;
      this._filter = undefined;
      this._fqdn = undefined;
      this._globalObject = undefined;
      this._host = undefined;
      this._hostType = undefined;
      this._ip6 = undefined;
      this._macaddr = undefined;
      this._objId = undefined;
      this._routeTag = undefined;
      this._sdn = undefined;
      this._sdnAddrType = undefined;
      this._sdnTag = undefined;
      this._startIp = undefined;
      this._startMac = undefined;
      this._tags = undefined;
      this._template = undefined;
      this._tenant = undefined;
      this._type = undefined;
      this._uuid = undefined;
      this._visibility = undefined;
      this._scope.internalValue = undefined;
      this._subnetSegment.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageBase64 = value.imageBase64;
      this._cacheTtl = value.cacheTtl;
      this._color = value.color;
      this._comment = value.comment;
      this._country = value.country;
      this._endIp = value.endIp;
      this._endMac = value.endMac;
      this._epgName = value.epgName;
      this._fabricObject = value.fabricObject;
      this._filter = value.filter;
      this._fqdn = value.fqdn;
      this._globalObject = value.globalObject;
      this._host = value.host;
      this._hostType = value.hostType;
      this._ip6 = value.ip6;
      this._macaddr = value.macaddr;
      this._objId = value.objId;
      this._routeTag = value.routeTag;
      this._sdn = value.sdn;
      this._sdnAddrType = value.sdnAddrType;
      this._sdnTag = value.sdnTag;
      this._startIp = value.startIp;
      this._startMac = value.startMac;
      this._tags = value.tags;
      this._template = value.template;
      this._tenant = value.tenant;
      this._type = value.type;
      this._uuid = value.uuid;
      this._visibility = value.visibility;
      this._scope.internalValue = value.scope;
      this._subnetSegment.internalValue = value.subnetSegment;
    }
  }

  // _image_base64 - computed: false, optional: true, required: false
  private _imageBase64?: string; 
  public get imageBase64() {
    return this.getStringAttribute('_image_base64');
  }
  public set imageBase64(value: string) {
    this._imageBase64 = value;
  }
  public resetImageBase64() {
    this._imageBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageBase64Input() {
    return this._imageBase64;
  }

  // cache_ttl - computed: false, optional: true, required: false
  private _cacheTtl?: number; 
  public get cacheTtl() {
    return this.getNumberAttribute('cache_ttl');
  }
  public set cacheTtl(value: number) {
    this._cacheTtl = value;
  }
  public resetCacheTtl() {
    this._cacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
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

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // end_ip - computed: false, optional: true, required: false
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

  // end_mac - computed: true, optional: true, required: false
  private _endMac?: string; 
  public get endMac() {
    return this.getStringAttribute('end_mac');
  }
  public set endMac(value: string) {
    this._endMac = value;
  }
  public resetEndMac() {
    this._endMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endMacInput() {
    return this._endMac;
  }

  // epg_name - computed: false, optional: true, required: false
  private _epgName?: string; 
  public get epgName() {
    return this.getStringAttribute('epg_name');
  }
  public set epgName(value: string) {
    this._epgName = value;
  }
  public resetEpgName() {
    this._epgName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epgNameInput() {
    return this._epgName;
  }

  // fabric_object - computed: true, optional: true, required: false
  private _fabricObject?: string; 
  public get fabricObject() {
    return this.getStringAttribute('fabric_object');
  }
  public set fabricObject(value: string) {
    this._fabricObject = value;
  }
  public resetFabricObject() {
    this._fabricObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricObjectInput() {
    return this._fabricObject;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // global_object - computed: false, optional: true, required: false
  private _globalObject?: number; 
  public get globalObject() {
    return this.getNumberAttribute('global_object');
  }
  public set globalObject(value: number) {
    this._globalObject = value;
  }
  public resetGlobalObject() {
    this._globalObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalObjectInput() {
    return this._globalObject;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // host_type - computed: true, optional: true, required: false
  private _hostType?: string; 
  public get hostType() {
    return this.getStringAttribute('host_type');
  }
  public set hostType(value: string) {
    this._hostType = value;
  }
  public resetHostType() {
    this._hostType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostTypeInput() {
    return this._hostType;
  }

  // ip6 - computed: true, optional: true, required: false
  private _ip6?: string; 
  public get ip6() {
    return this.getStringAttribute('ip6');
  }
  public set ip6(value: string) {
    this._ip6 = value;
  }
  public resetIp6() {
    this._ip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Input() {
    return this._ip6;
  }

  // macaddr - computed: true, optional: true, required: false
  private _macaddr?: string[]; 
  public get macaddr() {
    return cdktf.Fn.tolist(this.getListAttribute('macaddr'));
  }
  public set macaddr(value: string[]) {
    this._macaddr = value;
  }
  public resetMacaddr() {
    this._macaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macaddrInput() {
    return this._macaddr;
  }

  // obj_id - computed: false, optional: true, required: false
  private _objId?: string; 
  public get objId() {
    return this.getStringAttribute('obj_id');
  }
  public set objId(value: string) {
    this._objId = value;
  }
  public resetObjId() {
    this._objId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objIdInput() {
    return this._objId;
  }

  // route_tag - computed: false, optional: true, required: false
  private _routeTag?: number; 
  public get routeTag() {
    return this.getNumberAttribute('route_tag');
  }
  public set routeTag(value: number) {
    this._routeTag = value;
  }
  public resetRouteTag() {
    this._routeTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTagInput() {
    return this._routeTag;
  }

  // sdn - computed: false, optional: true, required: false
  private _sdn?: string; 
  public get sdn() {
    return this.getStringAttribute('sdn');
  }
  public set sdn(value: string) {
    this._sdn = value;
  }
  public resetSdn() {
    this._sdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdnInput() {
    return this._sdn;
  }

  // sdn_addr_type - computed: true, optional: true, required: false
  private _sdnAddrType?: string; 
  public get sdnAddrType() {
    return this.getStringAttribute('sdn_addr_type');
  }
  public set sdnAddrType(value: string) {
    this._sdnAddrType = value;
  }
  public resetSdnAddrType() {
    this._sdnAddrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdnAddrTypeInput() {
    return this._sdnAddrType;
  }

  // sdn_tag - computed: false, optional: true, required: false
  private _sdnTag?: string; 
  public get sdnTag() {
    return this.getStringAttribute('sdn_tag');
  }
  public set sdnTag(value: string) {
    this._sdnTag = value;
  }
  public resetSdnTag() {
    this._sdnTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdnTagInput() {
    return this._sdnTag;
  }

  // start_ip - computed: false, optional: true, required: false
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

  // start_mac - computed: true, optional: true, required: false
  private _startMac?: string; 
  public get startMac() {
    return this.getStringAttribute('start_mac');
  }
  public set startMac(value: string) {
    this._startMac = value;
  }
  public resetStartMac() {
    this._startMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startMacInput() {
    return this._startMac;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
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

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // _scope - computed: false, optional: true, required: false
  private _scope = new ObjectFirewallAddress6DynamicMappingScopeList(this, "_scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: ObjectFirewallAddress6DynamicMappingScope[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // subnet_segment - computed: false, optional: true, required: false
  private _subnetSegment = new ObjectFirewallAddress6DynamicMappingSubnetSegmentList(this, "subnet_segment", false);
  public get subnetSegment() {
    return this._subnetSegment;
  }
  public putSubnetSegment(value: ObjectFirewallAddress6DynamicMappingSubnetSegment[] | cdktf.IResolvable) {
    this._subnetSegment.internalValue = value;
  }
  public resetSubnetSegment() {
    this._subnetSegment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetSegmentInput() {
    return this._subnetSegment.internalValue;
  }
}

export class ObjectFirewallAddress6DynamicMappingList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallAddress6DynamicMapping[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallAddress6DynamicMappingOutputReference {
    return new ObjectFirewallAddress6DynamicMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallAddress6ListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#ip ObjectFirewallAddress6#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#net_id ObjectFirewallAddress6#net_id}
  */
  readonly netId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#obj_id ObjectFirewallAddress6#obj_id}
  */
  readonly objId?: string;
}

export function objectFirewallAddress6ListStructToTerraform(struct?: ObjectFirewallAddress6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    net_id: cdktf.stringToTerraform(struct!.netId),
    obj_id: cdktf.stringToTerraform(struct!.objId),
  }
}


export function objectFirewallAddress6ListStructToHclTerraform(struct?: ObjectFirewallAddress6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    net_id: {
      value: cdktf.stringToHclTerraform(struct!.netId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    obj_id: {
      value: cdktf.stringToHclTerraform(struct!.objId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallAddress6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallAddress6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._netId !== undefined) {
      hasAnyValues = true;
      internalValueResult.netId = this._netId;
    }
    if (this._objId !== undefined) {
      hasAnyValues = true;
      internalValueResult.objId = this._objId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallAddress6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._netId = undefined;
      this._objId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._netId = value.netId;
      this._objId = value.objId;
    }
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

  // net_id - computed: false, optional: true, required: false
  private _netId?: string; 
  public get netId() {
    return this.getStringAttribute('net_id');
  }
  public set netId(value: string) {
    this._netId = value;
  }
  public resetNetId() {
    this._netId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIdInput() {
    return this._netId;
  }

  // obj_id - computed: false, optional: true, required: false
  private _objId?: string; 
  public get objId() {
    return this.getStringAttribute('obj_id');
  }
  public set objId(value: string) {
    this._objId = value;
  }
  public resetObjId() {
    this._objId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objIdInput() {
    return this._objId;
  }
}

export class ObjectFirewallAddress6ListStructList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallAddress6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallAddress6ListStructOutputReference {
    return new ObjectFirewallAddress6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallAddress6SubnetSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#name ObjectFirewallAddress6#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#type ObjectFirewallAddress6#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#value ObjectFirewallAddress6#value}
  */
  readonly value?: string;
}

export function objectFirewallAddress6SubnetSegmentToTerraform(struct?: ObjectFirewallAddress6SubnetSegment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function objectFirewallAddress6SubnetSegmentToHclTerraform(struct?: ObjectFirewallAddress6SubnetSegment | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallAddress6SubnetSegmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallAddress6SubnetSegment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallAddress6SubnetSegment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
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
}

export class ObjectFirewallAddress6SubnetSegmentList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallAddress6SubnetSegment[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallAddress6SubnetSegmentOutputReference {
    return new ObjectFirewallAddress6SubnetSegmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallAddress6Tagging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#category ObjectFirewallAddress6#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#name ObjectFirewallAddress6#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#tags ObjectFirewallAddress6#tags}
  */
  readonly tags?: string[];
}

export function objectFirewallAddress6TaggingToTerraform(struct?: ObjectFirewallAddress6Tagging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function objectFirewallAddress6TaggingToHclTerraform(struct?: ObjectFirewallAddress6Tagging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
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
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallAddress6TaggingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallAddress6Tagging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallAddress6Tagging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._name = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._name = value.name;
      this._tags = value.tags;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

export class ObjectFirewallAddress6TaggingList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallAddress6Tagging[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallAddress6TaggingOutputReference {
    return new ObjectFirewallAddress6TaggingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6 fortimanager_object_firewall_address6}
*/
export class ObjectFirewallAddress6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_address6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallAddress6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallAddress6 to import
  * @param importFromId The id of the existing ObjectFirewallAddress6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallAddress6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_address6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6 fortimanager_object_firewall_address6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallAddress6Config = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallAddress6Config = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_address6',
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
    this._imageBase64 = config.imageBase64;
    this._adom = config.adom;
    this._cacheTtl = config.cacheTtl;
    this._color = config.color;
    this._comment = config.comment;
    this._country = config.country;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._endIp = config.endIp;
    this._endMac = config.endMac;
    this._epgName = config.epgName;
    this._fabricObject = config.fabricObject;
    this._filter = config.filter;
    this._fqdn = config.fqdn;
    this._globalObject = config.globalObject;
    this._host = config.host;
    this._hostType = config.hostType;
    this._id = config.id;
    this._ip6 = config.ip6;
    this._macaddr = config.macaddr;
    this._name = config.name;
    this._objId = config.objId;
    this._routeTag = config.routeTag;
    this._scopetype = config.scopetype;
    this._sdn = config.sdn;
    this._sdnAddrType = config.sdnAddrType;
    this._sdnTag = config.sdnTag;
    this._startIp = config.startIp;
    this._startMac = config.startMac;
    this._template = config.template;
    this._tenant = config.tenant;
    this._type = config.type;
    this._uuid = config.uuid;
    this._visibility = config.visibility;
    this._dynamicMapping.internalValue = config.dynamicMapping;
    this._list.internalValue = config.list;
    this._subnetSegment.internalValue = config.subnetSegment;
    this._tagging.internalValue = config.tagging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // _image_base64 - computed: false, optional: true, required: false
  private _imageBase64?: string; 
  public get imageBase64() {
    return this.getStringAttribute('_image_base64');
  }
  public set imageBase64(value: string) {
    this._imageBase64 = value;
  }
  public resetImageBase64() {
    this._imageBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageBase64Input() {
    return this._imageBase64;
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

  // cache_ttl - computed: false, optional: true, required: false
  private _cacheTtl?: number; 
  public get cacheTtl() {
    return this.getNumberAttribute('cache_ttl');
  }
  public set cacheTtl(value: number) {
    this._cacheTtl = value;
  }
  public resetCacheTtl() {
    this._cacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
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

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
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

  // end_ip - computed: false, optional: true, required: false
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

  // end_mac - computed: true, optional: true, required: false
  private _endMac?: string; 
  public get endMac() {
    return this.getStringAttribute('end_mac');
  }
  public set endMac(value: string) {
    this._endMac = value;
  }
  public resetEndMac() {
    this._endMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endMacInput() {
    return this._endMac;
  }

  // epg_name - computed: false, optional: true, required: false
  private _epgName?: string; 
  public get epgName() {
    return this.getStringAttribute('epg_name');
  }
  public set epgName(value: string) {
    this._epgName = value;
  }
  public resetEpgName() {
    this._epgName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epgNameInput() {
    return this._epgName;
  }

  // fabric_object - computed: true, optional: true, required: false
  private _fabricObject?: string; 
  public get fabricObject() {
    return this.getStringAttribute('fabric_object');
  }
  public set fabricObject(value: string) {
    this._fabricObject = value;
  }
  public resetFabricObject() {
    this._fabricObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricObjectInput() {
    return this._fabricObject;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // global_object - computed: false, optional: true, required: false
  private _globalObject?: number; 
  public get globalObject() {
    return this.getNumberAttribute('global_object');
  }
  public set globalObject(value: number) {
    this._globalObject = value;
  }
  public resetGlobalObject() {
    this._globalObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalObjectInput() {
    return this._globalObject;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // host_type - computed: true, optional: true, required: false
  private _hostType?: string; 
  public get hostType() {
    return this.getStringAttribute('host_type');
  }
  public set hostType(value: string) {
    this._hostType = value;
  }
  public resetHostType() {
    this._hostType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostTypeInput() {
    return this._hostType;
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

  // ip6 - computed: true, optional: true, required: false
  private _ip6?: string; 
  public get ip6() {
    return this.getStringAttribute('ip6');
  }
  public set ip6(value: string) {
    this._ip6 = value;
  }
  public resetIp6() {
    this._ip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Input() {
    return this._ip6;
  }

  // macaddr - computed: true, optional: true, required: false
  private _macaddr?: string[]; 
  public get macaddr() {
    return cdktf.Fn.tolist(this.getListAttribute('macaddr'));
  }
  public set macaddr(value: string[]) {
    this._macaddr = value;
  }
  public resetMacaddr() {
    this._macaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macaddrInput() {
    return this._macaddr;
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

  // obj_id - computed: false, optional: true, required: false
  private _objId?: string; 
  public get objId() {
    return this.getStringAttribute('obj_id');
  }
  public set objId(value: string) {
    this._objId = value;
  }
  public resetObjId() {
    this._objId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objIdInput() {
    return this._objId;
  }

  // route_tag - computed: false, optional: true, required: false
  private _routeTag?: number; 
  public get routeTag() {
    return this.getNumberAttribute('route_tag');
  }
  public set routeTag(value: number) {
    this._routeTag = value;
  }
  public resetRouteTag() {
    this._routeTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTagInput() {
    return this._routeTag;
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

  // sdn - computed: false, optional: true, required: false
  private _sdn?: string; 
  public get sdn() {
    return this.getStringAttribute('sdn');
  }
  public set sdn(value: string) {
    this._sdn = value;
  }
  public resetSdn() {
    this._sdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdnInput() {
    return this._sdn;
  }

  // sdn_addr_type - computed: true, optional: true, required: false
  private _sdnAddrType?: string; 
  public get sdnAddrType() {
    return this.getStringAttribute('sdn_addr_type');
  }
  public set sdnAddrType(value: string) {
    this._sdnAddrType = value;
  }
  public resetSdnAddrType() {
    this._sdnAddrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdnAddrTypeInput() {
    return this._sdnAddrType;
  }

  // sdn_tag - computed: false, optional: true, required: false
  private _sdnTag?: string; 
  public get sdnTag() {
    return this.getStringAttribute('sdn_tag');
  }
  public set sdnTag(value: string) {
    this._sdnTag = value;
  }
  public resetSdnTag() {
    this._sdnTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdnTagInput() {
    return this._sdnTag;
  }

  // start_ip - computed: false, optional: true, required: false
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

  // start_mac - computed: true, optional: true, required: false
  private _startMac?: string; 
  public get startMac() {
    return this.getStringAttribute('start_mac');
  }
  public set startMac(value: string) {
    this._startMac = value;
  }
  public resetStartMac() {
    this._startMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startMacInput() {
    return this._startMac;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
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

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // dynamic_mapping - computed: false, optional: true, required: false
  private _dynamicMapping = new ObjectFirewallAddress6DynamicMappingList(this, "dynamic_mapping", false);
  public get dynamicMapping() {
    return this._dynamicMapping;
  }
  public putDynamicMapping(value: ObjectFirewallAddress6DynamicMapping[] | cdktf.IResolvable) {
    this._dynamicMapping.internalValue = value;
  }
  public resetDynamicMapping() {
    this._dynamicMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicMappingInput() {
    return this._dynamicMapping.internalValue;
  }

  // list - computed: false, optional: true, required: false
  private _list = new ObjectFirewallAddress6ListStructList(this, "list", false);
  public get list() {
    return this._list;
  }
  public putList(value: ObjectFirewallAddress6ListStruct[] | cdktf.IResolvable) {
    this._list.internalValue = value;
  }
  public resetList() {
    this._list.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list.internalValue;
  }

  // subnet_segment - computed: false, optional: true, required: false
  private _subnetSegment = new ObjectFirewallAddress6SubnetSegmentList(this, "subnet_segment", false);
  public get subnetSegment() {
    return this._subnetSegment;
  }
  public putSubnetSegment(value: ObjectFirewallAddress6SubnetSegment[] | cdktf.IResolvable) {
    this._subnetSegment.internalValue = value;
  }
  public resetSubnetSegment() {
    this._subnetSegment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetSegmentInput() {
    return this._subnetSegment.internalValue;
  }

  // tagging - computed: false, optional: true, required: false
  private _tagging = new ObjectFirewallAddress6TaggingList(this, "tagging", false);
  public get tagging() {
    return this._tagging;
  }
  public putTagging(value: ObjectFirewallAddress6Tagging[] | cdktf.IResolvable) {
    this._tagging.internalValue = value;
  }
  public resetTagging() {
    this._tagging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggingInput() {
    return this._tagging.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      _image_base64: cdktf.stringToTerraform(this._imageBase64),
      adom: cdktf.stringToTerraform(this._adom),
      cache_ttl: cdktf.numberToTerraform(this._cacheTtl),
      color: cdktf.numberToTerraform(this._color),
      comment: cdktf.stringToTerraform(this._comment),
      country: cdktf.stringToTerraform(this._country),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      end_ip: cdktf.stringToTerraform(this._endIp),
      end_mac: cdktf.stringToTerraform(this._endMac),
      epg_name: cdktf.stringToTerraform(this._epgName),
      fabric_object: cdktf.stringToTerraform(this._fabricObject),
      filter: cdktf.stringToTerraform(this._filter),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      global_object: cdktf.numberToTerraform(this._globalObject),
      host: cdktf.stringToTerraform(this._host),
      host_type: cdktf.stringToTerraform(this._hostType),
      id: cdktf.stringToTerraform(this._id),
      ip6: cdktf.stringToTerraform(this._ip6),
      macaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._macaddr),
      name: cdktf.stringToTerraform(this._name),
      obj_id: cdktf.stringToTerraform(this._objId),
      route_tag: cdktf.numberToTerraform(this._routeTag),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      sdn: cdktf.stringToTerraform(this._sdn),
      sdn_addr_type: cdktf.stringToTerraform(this._sdnAddrType),
      sdn_tag: cdktf.stringToTerraform(this._sdnTag),
      start_ip: cdktf.stringToTerraform(this._startIp),
      start_mac: cdktf.stringToTerraform(this._startMac),
      template: cdktf.stringToTerraform(this._template),
      tenant: cdktf.stringToTerraform(this._tenant),
      type: cdktf.stringToTerraform(this._type),
      uuid: cdktf.stringToTerraform(this._uuid),
      visibility: cdktf.stringToTerraform(this._visibility),
      dynamic_mapping: cdktf.listMapper(objectFirewallAddress6DynamicMappingToTerraform, true)(this._dynamicMapping.internalValue),
      list: cdktf.listMapper(objectFirewallAddress6ListStructToTerraform, true)(this._list.internalValue),
      subnet_segment: cdktf.listMapper(objectFirewallAddress6SubnetSegmentToTerraform, true)(this._subnetSegment.internalValue),
      tagging: cdktf.listMapper(objectFirewallAddress6TaggingToTerraform, true)(this._tagging.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      _image_base64: {
        value: cdktf.stringToHclTerraform(this._imageBase64),
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
      cache_ttl: {
        value: cdktf.numberToHclTerraform(this._cacheTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      color: {
        value: cdktf.numberToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country: {
        value: cdktf.stringToHclTerraform(this._country),
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
      end_ip: {
        value: cdktf.stringToHclTerraform(this._endIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_mac: {
        value: cdktf.stringToHclTerraform(this._endMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      epg_name: {
        value: cdktf.stringToHclTerraform(this._epgName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_object: {
        value: cdktf.stringToHclTerraform(this._fabricObject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fqdn: {
        value: cdktf.stringToHclTerraform(this._fqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_object: {
        value: cdktf.numberToHclTerraform(this._globalObject),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_type: {
        value: cdktf.stringToHclTerraform(this._hostType),
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
      ip6: {
        value: cdktf.stringToHclTerraform(this._ip6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      macaddr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._macaddr),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      obj_id: {
        value: cdktf.stringToHclTerraform(this._objId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_tag: {
        value: cdktf.numberToHclTerraform(this._routeTag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdn: {
        value: cdktf.stringToHclTerraform(this._sdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdn_addr_type: {
        value: cdktf.stringToHclTerraform(this._sdnAddrType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdn_tag: {
        value: cdktf.stringToHclTerraform(this._sdnTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_ip: {
        value: cdktf.stringToHclTerraform(this._startIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_mac: {
        value: cdktf.stringToHclTerraform(this._startMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant: {
        value: cdktf.stringToHclTerraform(this._tenant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_mapping: {
        value: cdktf.listMapperHcl(objectFirewallAddress6DynamicMappingToHclTerraform, true)(this._dynamicMapping.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallAddress6DynamicMappingList",
      },
      list: {
        value: cdktf.listMapperHcl(objectFirewallAddress6ListStructToHclTerraform, true)(this._list.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallAddress6ListStructList",
      },
      subnet_segment: {
        value: cdktf.listMapperHcl(objectFirewallAddress6SubnetSegmentToHclTerraform, true)(this._subnetSegment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallAddress6SubnetSegmentList",
      },
      tagging: {
        value: cdktf.listMapperHcl(objectFirewallAddress6TaggingToHclTerraform, true)(this._tagging.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallAddress6TaggingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
