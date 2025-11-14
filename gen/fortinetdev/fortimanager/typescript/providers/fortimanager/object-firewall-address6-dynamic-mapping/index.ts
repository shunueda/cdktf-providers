// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallAddress6DynamicMappingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#_image_base64 ObjectFirewallAddress6DynamicMappingA#_image_base64}
  */
  readonly imageBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#address6 ObjectFirewallAddress6DynamicMappingA#address6}
  */
  readonly address6: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#adom ObjectFirewallAddress6DynamicMappingA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#cache_ttl ObjectFirewallAddress6DynamicMappingA#cache_ttl}
  */
  readonly cacheTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#color ObjectFirewallAddress6DynamicMappingA#color}
  */
  readonly color?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#comment ObjectFirewallAddress6DynamicMappingA#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#country ObjectFirewallAddress6DynamicMappingA#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#dynamic_sort_subtable ObjectFirewallAddress6DynamicMappingA#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#end_ip ObjectFirewallAddress6DynamicMappingA#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#end_mac ObjectFirewallAddress6DynamicMappingA#end_mac}
  */
  readonly endMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#epg_name ObjectFirewallAddress6DynamicMappingA#epg_name}
  */
  readonly epgName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#fabric_object ObjectFirewallAddress6DynamicMappingA#fabric_object}
  */
  readonly fabricObject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#filter ObjectFirewallAddress6DynamicMappingA#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#fqdn ObjectFirewallAddress6DynamicMappingA#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#global_object ObjectFirewallAddress6DynamicMappingA#global_object}
  */
  readonly globalObject?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#host ObjectFirewallAddress6DynamicMappingA#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#host_type ObjectFirewallAddress6DynamicMappingA#host_type}
  */
  readonly hostType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#id ObjectFirewallAddress6DynamicMappingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#ip6 ObjectFirewallAddress6DynamicMappingA#ip6}
  */
  readonly ip6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#macaddr ObjectFirewallAddress6DynamicMappingA#macaddr}
  */
  readonly macaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#obj_id ObjectFirewallAddress6DynamicMappingA#obj_id}
  */
  readonly objId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#route_tag ObjectFirewallAddress6DynamicMappingA#route_tag}
  */
  readonly routeTag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#scopetype ObjectFirewallAddress6DynamicMappingA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#sdn ObjectFirewallAddress6DynamicMappingA#sdn}
  */
  readonly sdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#sdn_addr_type ObjectFirewallAddress6DynamicMappingA#sdn_addr_type}
  */
  readonly sdnAddrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#sdn_tag ObjectFirewallAddress6DynamicMappingA#sdn_tag}
  */
  readonly sdnTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#start_ip ObjectFirewallAddress6DynamicMappingA#start_ip}
  */
  readonly startIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#start_mac ObjectFirewallAddress6DynamicMappingA#start_mac}
  */
  readonly startMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#tags ObjectFirewallAddress6DynamicMappingA#tags}
  */
  readonly tags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#template ObjectFirewallAddress6DynamicMappingA#template}
  */
  readonly template?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#tenant ObjectFirewallAddress6DynamicMappingA#tenant}
  */
  readonly tenant?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#type ObjectFirewallAddress6DynamicMappingA#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#uuid ObjectFirewallAddress6DynamicMappingA#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#visibility ObjectFirewallAddress6DynamicMappingA#visibility}
  */
  readonly visibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#wildcard ObjectFirewallAddress6DynamicMappingA#wildcard}
  */
  readonly wildcard?: string;
  /**
  * _scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#_scope ObjectFirewallAddress6DynamicMappingA#_scope}
  */
  readonly scope?: ObjectFirewallAddress6DynamicMappingScopeA[] | cdktf.IResolvable;
  /**
  * subnet_segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#subnet_segment ObjectFirewallAddress6DynamicMappingA#subnet_segment}
  */
  readonly subnetSegment?: ObjectFirewallAddress6DynamicMappingSubnetSegmentA[] | cdktf.IResolvable;
}
export interface ObjectFirewallAddress6DynamicMappingScopeA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#name ObjectFirewallAddress6DynamicMappingA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#vdom ObjectFirewallAddress6DynamicMappingA#vdom}
  */
  readonly vdom?: string;
}

export function objectFirewallAddress6DynamicMappingScopeAToTerraform(struct?: ObjectFirewallAddress6DynamicMappingScopeA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vdom: cdktf.stringToTerraform(struct!.vdom),
  }
}


export function objectFirewallAddress6DynamicMappingScopeAToHclTerraform(struct?: ObjectFirewallAddress6DynamicMappingScopeA | cdktf.IResolvable): any {
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

export class ObjectFirewallAddress6DynamicMappingScopeAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallAddress6DynamicMappingScopeA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectFirewallAddress6DynamicMappingScopeA | cdktf.IResolvable | undefined) {
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

export class ObjectFirewallAddress6DynamicMappingScopeAList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallAddress6DynamicMappingScopeA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallAddress6DynamicMappingScopeAOutputReference {
    return new ObjectFirewallAddress6DynamicMappingScopeAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallAddress6DynamicMappingSubnetSegmentA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#name ObjectFirewallAddress6DynamicMappingA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#type ObjectFirewallAddress6DynamicMappingA#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#value ObjectFirewallAddress6DynamicMappingA#value}
  */
  readonly value?: string;
}

export function objectFirewallAddress6DynamicMappingSubnetSegmentAToTerraform(struct?: ObjectFirewallAddress6DynamicMappingSubnetSegmentA | cdktf.IResolvable): any {
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


export function objectFirewallAddress6DynamicMappingSubnetSegmentAToHclTerraform(struct?: ObjectFirewallAddress6DynamicMappingSubnetSegmentA | cdktf.IResolvable): any {
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

export class ObjectFirewallAddress6DynamicMappingSubnetSegmentAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallAddress6DynamicMappingSubnetSegmentA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectFirewallAddress6DynamicMappingSubnetSegmentA | cdktf.IResolvable | undefined) {
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

export class ObjectFirewallAddress6DynamicMappingSubnetSegmentAList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallAddress6DynamicMappingSubnetSegmentA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallAddress6DynamicMappingSubnetSegmentAOutputReference {
    return new ObjectFirewallAddress6DynamicMappingSubnetSegmentAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping fortimanager_object_firewall_address6_dynamic_mapping}
*/
export class ObjectFirewallAddress6DynamicMappingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_address6_dynamic_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallAddress6DynamicMappingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallAddress6DynamicMappingA to import
  * @param importFromId The id of the existing ObjectFirewallAddress6DynamicMappingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallAddress6DynamicMappingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_address6_dynamic_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address6_dynamic_mapping fortimanager_object_firewall_address6_dynamic_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallAddress6DynamicMappingAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallAddress6DynamicMappingAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_address6_dynamic_mapping',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
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
    this._address6 = config.address6;
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
    this._objId = config.objId;
    this._routeTag = config.routeTag;
    this._scopetype = config.scopetype;
    this._sdn = config.sdn;
    this._sdnAddrType = config.sdnAddrType;
    this._sdnTag = config.sdnTag;
    this._startIp = config.startIp;
    this._startMac = config.startMac;
    this._tags = config.tags;
    this._template = config.template;
    this._tenant = config.tenant;
    this._type = config.type;
    this._uuid = config.uuid;
    this._visibility = config.visibility;
    this._wildcard = config.wildcard;
    this._scope.internalValue = config.scope;
    this._subnetSegment.internalValue = config.subnetSegment;
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

  // address6 - computed: false, optional: false, required: true
  private _address6?: string; 
  public get address6() {
    return this.getStringAttribute('address6');
  }
  public set address6(value: string) {
    this._address6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get address6Input() {
    return this._address6;
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

  // wildcard - computed: false, optional: true, required: false
  private _wildcard?: string; 
  public get wildcard() {
    return this.getStringAttribute('wildcard');
  }
  public set wildcard(value: string) {
    this._wildcard = value;
  }
  public resetWildcard() {
    this._wildcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardInput() {
    return this._wildcard;
  }

  // _scope - computed: false, optional: true, required: false
  private _scope = new ObjectFirewallAddress6DynamicMappingScopeAList(this, "_scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: ObjectFirewallAddress6DynamicMappingScopeA[] | cdktf.IResolvable) {
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
  private _subnetSegment = new ObjectFirewallAddress6DynamicMappingSubnetSegmentAList(this, "subnet_segment", false);
  public get subnetSegment() {
    return this._subnetSegment;
  }
  public putSubnetSegment(value: ObjectFirewallAddress6DynamicMappingSubnetSegmentA[] | cdktf.IResolvable) {
    this._subnetSegment.internalValue = value;
  }
  public resetSubnetSegment() {
    this._subnetSegment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetSegmentInput() {
    return this._subnetSegment.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      _image_base64: cdktf.stringToTerraform(this._imageBase64),
      address6: cdktf.stringToTerraform(this._address6),
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
      obj_id: cdktf.stringToTerraform(this._objId),
      route_tag: cdktf.numberToTerraform(this._routeTag),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      sdn: cdktf.stringToTerraform(this._sdn),
      sdn_addr_type: cdktf.stringToTerraform(this._sdnAddrType),
      sdn_tag: cdktf.stringToTerraform(this._sdnTag),
      start_ip: cdktf.stringToTerraform(this._startIp),
      start_mac: cdktf.stringToTerraform(this._startMac),
      tags: cdktf.stringToTerraform(this._tags),
      template: cdktf.stringToTerraform(this._template),
      tenant: cdktf.stringToTerraform(this._tenant),
      type: cdktf.stringToTerraform(this._type),
      uuid: cdktf.stringToTerraform(this._uuid),
      visibility: cdktf.stringToTerraform(this._visibility),
      wildcard: cdktf.stringToTerraform(this._wildcard),
      _scope: cdktf.listMapper(objectFirewallAddress6DynamicMappingScopeAToTerraform, true)(this._scope.internalValue),
      subnet_segment: cdktf.listMapper(objectFirewallAddress6DynamicMappingSubnetSegmentAToTerraform, true)(this._subnetSegment.internalValue),
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
      address6: {
        value: cdktf.stringToHclTerraform(this._address6),
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
      tags: {
        value: cdktf.stringToHclTerraform(this._tags),
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
      wildcard: {
        value: cdktf.stringToHclTerraform(this._wildcard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      _scope: {
        value: cdktf.listMapperHcl(objectFirewallAddress6DynamicMappingScopeAToHclTerraform, true)(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallAddress6DynamicMappingScopeAList",
      },
      subnet_segment: {
        value: cdktf.listMapperHcl(objectFirewallAddress6DynamicMappingSubnetSegmentAToHclTerraform, true)(this._subnetSegment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallAddress6DynamicMappingSubnetSegmentAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
