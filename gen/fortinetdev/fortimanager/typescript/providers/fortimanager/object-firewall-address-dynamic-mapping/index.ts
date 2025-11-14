// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallAddressDynamicMappingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#_image_base64 ObjectFirewallAddressDynamicMappingA#_image_base64}
  */
  readonly imageBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#address ObjectFirewallAddressDynamicMappingA#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#adom ObjectFirewallAddressDynamicMappingA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#agent_id ObjectFirewallAddressDynamicMappingA#agent_id}
  */
  readonly agentId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#allow_routing ObjectFirewallAddressDynamicMappingA#allow_routing}
  */
  readonly allowRouting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#associated_interface ObjectFirewallAddressDynamicMappingA#associated_interface}
  */
  readonly associatedInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#cache_ttl ObjectFirewallAddressDynamicMappingA#cache_ttl}
  */
  readonly cacheTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#clearpass_spt ObjectFirewallAddressDynamicMappingA#clearpass_spt}
  */
  readonly clearpassSpt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#color ObjectFirewallAddressDynamicMappingA#color}
  */
  readonly color?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#comment ObjectFirewallAddressDynamicMappingA#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#country ObjectFirewallAddressDynamicMappingA#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#dirty ObjectFirewallAddressDynamicMappingA#dirty}
  */
  readonly dirty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#dynamic_sort_subtable ObjectFirewallAddressDynamicMappingA#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#end_ip ObjectFirewallAddressDynamicMappingA#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#end_mac ObjectFirewallAddressDynamicMappingA#end_mac}
  */
  readonly endMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#epg_name ObjectFirewallAddressDynamicMappingA#epg_name}
  */
  readonly epgName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#fabric_object ObjectFirewallAddressDynamicMappingA#fabric_object}
  */
  readonly fabricObject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#filter ObjectFirewallAddressDynamicMappingA#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#fqdn ObjectFirewallAddressDynamicMappingA#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#fsso_group ObjectFirewallAddressDynamicMappingA#fsso_group}
  */
  readonly fssoGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#global_object ObjectFirewallAddressDynamicMappingA#global_object}
  */
  readonly globalObject?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#hw_model ObjectFirewallAddressDynamicMappingA#hw_model}
  */
  readonly hwModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#hw_vendor ObjectFirewallAddressDynamicMappingA#hw_vendor}
  */
  readonly hwVendor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#id ObjectFirewallAddressDynamicMappingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#interface ObjectFirewallAddressDynamicMappingA#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#macaddr ObjectFirewallAddressDynamicMappingA#macaddr}
  */
  readonly macaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#node_ip_only ObjectFirewallAddressDynamicMappingA#node_ip_only}
  */
  readonly nodeIpOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#obj_id ObjectFirewallAddressDynamicMappingA#obj_id}
  */
  readonly objId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#obj_tag ObjectFirewallAddressDynamicMappingA#obj_tag}
  */
  readonly objTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#obj_type ObjectFirewallAddressDynamicMappingA#obj_type}
  */
  readonly objType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#organization ObjectFirewallAddressDynamicMappingA#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#os ObjectFirewallAddressDynamicMappingA#os}
  */
  readonly os?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#pattern_end ObjectFirewallAddressDynamicMappingA#pattern_end}
  */
  readonly patternEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#pattern_start ObjectFirewallAddressDynamicMappingA#pattern_start}
  */
  readonly patternStart?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#policy_group ObjectFirewallAddressDynamicMappingA#policy_group}
  */
  readonly policyGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#route_tag ObjectFirewallAddressDynamicMappingA#route_tag}
  */
  readonly routeTag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#scopetype ObjectFirewallAddressDynamicMappingA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#sdn ObjectFirewallAddressDynamicMappingA#sdn}
  */
  readonly sdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#sdn_addr_type ObjectFirewallAddressDynamicMappingA#sdn_addr_type}
  */
  readonly sdnAddrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#sdn_tag ObjectFirewallAddressDynamicMappingA#sdn_tag}
  */
  readonly sdnTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#sso_attribute_value ObjectFirewallAddressDynamicMappingA#sso_attribute_value}
  */
  readonly ssoAttributeValue?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#start_ip ObjectFirewallAddressDynamicMappingA#start_ip}
  */
  readonly startIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#start_mac ObjectFirewallAddressDynamicMappingA#start_mac}
  */
  readonly startMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#sub_type ObjectFirewallAddressDynamicMappingA#sub_type}
  */
  readonly subType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#subnet ObjectFirewallAddressDynamicMappingA#subnet}
  */
  readonly subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#subnet_name ObjectFirewallAddressDynamicMappingA#subnet_name}
  */
  readonly subnetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#sw_version ObjectFirewallAddressDynamicMappingA#sw_version}
  */
  readonly swVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#tag_detection_level ObjectFirewallAddressDynamicMappingA#tag_detection_level}
  */
  readonly tagDetectionLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#tag_type ObjectFirewallAddressDynamicMappingA#tag_type}
  */
  readonly tagType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#tag_uuid ObjectFirewallAddressDynamicMappingA#tag_uuid}
  */
  readonly tagUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#tags ObjectFirewallAddressDynamicMappingA#tags}
  */
  readonly tags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#tenant ObjectFirewallAddressDynamicMappingA#tenant}
  */
  readonly tenant?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#type ObjectFirewallAddressDynamicMappingA#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#url ObjectFirewallAddressDynamicMappingA#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#uuid ObjectFirewallAddressDynamicMappingA#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#visibility ObjectFirewallAddressDynamicMappingA#visibility}
  */
  readonly visibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#wildcard ObjectFirewallAddressDynamicMappingA#wildcard}
  */
  readonly wildcard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#wildcard_fqdn ObjectFirewallAddressDynamicMappingA#wildcard_fqdn}
  */
  readonly wildcardFqdn?: string;
  /**
  * _scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#_scope ObjectFirewallAddressDynamicMappingA#_scope}
  */
  readonly scope?: ObjectFirewallAddressDynamicMappingScopeA[] | cdktf.IResolvable;
}
export interface ObjectFirewallAddressDynamicMappingScopeA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#name ObjectFirewallAddressDynamicMappingA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#vdom ObjectFirewallAddressDynamicMappingA#vdom}
  */
  readonly vdom?: string;
}

export function objectFirewallAddressDynamicMappingScopeAToTerraform(struct?: ObjectFirewallAddressDynamicMappingScopeA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vdom: cdktf.stringToTerraform(struct!.vdom),
  }
}


export function objectFirewallAddressDynamicMappingScopeAToHclTerraform(struct?: ObjectFirewallAddressDynamicMappingScopeA | cdktf.IResolvable): any {
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

export class ObjectFirewallAddressDynamicMappingScopeAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallAddressDynamicMappingScopeA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectFirewallAddressDynamicMappingScopeA | cdktf.IResolvable | undefined) {
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

export class ObjectFirewallAddressDynamicMappingScopeAList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallAddressDynamicMappingScopeA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallAddressDynamicMappingScopeAOutputReference {
    return new ObjectFirewallAddressDynamicMappingScopeAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping fortimanager_object_firewall_address_dynamic_mapping}
*/
export class ObjectFirewallAddressDynamicMappingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_address_dynamic_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallAddressDynamicMappingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallAddressDynamicMappingA to import
  * @param importFromId The id of the existing ObjectFirewallAddressDynamicMappingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallAddressDynamicMappingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_address_dynamic_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_address_dynamic_mapping fortimanager_object_firewall_address_dynamic_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallAddressDynamicMappingAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallAddressDynamicMappingAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_address_dynamic_mapping',
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
    this._address = config.address;
    this._adom = config.adom;
    this._agentId = config.agentId;
    this._allowRouting = config.allowRouting;
    this._associatedInterface = config.associatedInterface;
    this._cacheTtl = config.cacheTtl;
    this._clearpassSpt = config.clearpassSpt;
    this._color = config.color;
    this._comment = config.comment;
    this._country = config.country;
    this._dirty = config.dirty;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._endIp = config.endIp;
    this._endMac = config.endMac;
    this._epgName = config.epgName;
    this._fabricObject = config.fabricObject;
    this._filter = config.filter;
    this._fqdn = config.fqdn;
    this._fssoGroup = config.fssoGroup;
    this._globalObject = config.globalObject;
    this._hwModel = config.hwModel;
    this._hwVendor = config.hwVendor;
    this._id = config.id;
    this._interface = config.interface;
    this._macaddr = config.macaddr;
    this._nodeIpOnly = config.nodeIpOnly;
    this._objId = config.objId;
    this._objTag = config.objTag;
    this._objType = config.objType;
    this._organization = config.organization;
    this._os = config.os;
    this._patternEnd = config.patternEnd;
    this._patternStart = config.patternStart;
    this._policyGroup = config.policyGroup;
    this._routeTag = config.routeTag;
    this._scopetype = config.scopetype;
    this._sdn = config.sdn;
    this._sdnAddrType = config.sdnAddrType;
    this._sdnTag = config.sdnTag;
    this._ssoAttributeValue = config.ssoAttributeValue;
    this._startIp = config.startIp;
    this._startMac = config.startMac;
    this._subType = config.subType;
    this._subnet = config.subnet;
    this._subnetName = config.subnetName;
    this._swVersion = config.swVersion;
    this._tagDetectionLevel = config.tagDetectionLevel;
    this._tagType = config.tagType;
    this._tagUuid = config.tagUuid;
    this._tags = config.tags;
    this._tenant = config.tenant;
    this._type = config.type;
    this._url = config.url;
    this._uuid = config.uuid;
    this._visibility = config.visibility;
    this._wildcard = config.wildcard;
    this._wildcardFqdn = config.wildcardFqdn;
    this._scope.internalValue = config.scope;
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

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
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

  // agent_id - computed: true, optional: true, required: false
  private _agentId?: string[]; 
  public get agentId() {
    return cdktf.Fn.tolist(this.getListAttribute('agent_id'));
  }
  public set agentId(value: string[]) {
    this._agentId = value;
  }
  public resetAgentId() {
    this._agentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

  // allow_routing - computed: true, optional: true, required: false
  private _allowRouting?: string; 
  public get allowRouting() {
    return this.getStringAttribute('allow_routing');
  }
  public set allowRouting(value: string) {
    this._allowRouting = value;
  }
  public resetAllowRouting() {
    this._allowRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRoutingInput() {
    return this._allowRouting;
  }

  // associated_interface - computed: false, optional: true, required: false
  private _associatedInterface?: string; 
  public get associatedInterface() {
    return this.getStringAttribute('associated_interface');
  }
  public set associatedInterface(value: string) {
    this._associatedInterface = value;
  }
  public resetAssociatedInterface() {
    this._associatedInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedInterfaceInput() {
    return this._associatedInterface;
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

  // clearpass_spt - computed: true, optional: true, required: false
  private _clearpassSpt?: string; 
  public get clearpassSpt() {
    return this.getStringAttribute('clearpass_spt');
  }
  public set clearpassSpt(value: string) {
    this._clearpassSpt = value;
  }
  public resetClearpassSpt() {
    this._clearpassSpt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearpassSptInput() {
    return this._clearpassSpt;
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

  // dirty - computed: true, optional: true, required: false
  private _dirty?: string; 
  public get dirty() {
    return this.getStringAttribute('dirty');
  }
  public set dirty(value: string) {
    this._dirty = value;
  }
  public resetDirty() {
    this._dirty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirtyInput() {
    return this._dirty;
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

  // fsso_group - computed: false, optional: true, required: false
  private _fssoGroup?: string; 
  public get fssoGroup() {
    return this.getStringAttribute('fsso_group');
  }
  public set fssoGroup(value: string) {
    this._fssoGroup = value;
  }
  public resetFssoGroup() {
    this._fssoGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fssoGroupInput() {
    return this._fssoGroup;
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

  // hw_model - computed: false, optional: true, required: false
  private _hwModel?: string; 
  public get hwModel() {
    return this.getStringAttribute('hw_model');
  }
  public set hwModel(value: string) {
    this._hwModel = value;
  }
  public resetHwModel() {
    this._hwModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwModelInput() {
    return this._hwModel;
  }

  // hw_vendor - computed: false, optional: true, required: false
  private _hwVendor?: string; 
  public get hwVendor() {
    return this.getStringAttribute('hw_vendor');
  }
  public set hwVendor(value: string) {
    this._hwVendor = value;
  }
  public resetHwVendor() {
    this._hwVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwVendorInput() {
    return this._hwVendor;
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

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
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

  // node_ip_only - computed: true, optional: true, required: false
  private _nodeIpOnly?: string; 
  public get nodeIpOnly() {
    return this.getStringAttribute('node_ip_only');
  }
  public set nodeIpOnly(value: string) {
    this._nodeIpOnly = value;
  }
  public resetNodeIpOnly() {
    this._nodeIpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIpOnlyInput() {
    return this._nodeIpOnly;
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

  // obj_tag - computed: false, optional: true, required: false
  private _objTag?: string; 
  public get objTag() {
    return this.getStringAttribute('obj_tag');
  }
  public set objTag(value: string) {
    this._objTag = value;
  }
  public resetObjTag() {
    this._objTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objTagInput() {
    return this._objTag;
  }

  // obj_type - computed: true, optional: true, required: false
  private _objType?: string; 
  public get objType() {
    return this.getStringAttribute('obj_type');
  }
  public set objType(value: string) {
    this._objType = value;
  }
  public resetObjType() {
    this._objType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objTypeInput() {
    return this._objType;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // os - computed: false, optional: true, required: false
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // pattern_end - computed: false, optional: true, required: false
  private _patternEnd?: number; 
  public get patternEnd() {
    return this.getNumberAttribute('pattern_end');
  }
  public set patternEnd(value: number) {
    this._patternEnd = value;
  }
  public resetPatternEnd() {
    this._patternEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternEndInput() {
    return this._patternEnd;
  }

  // pattern_start - computed: false, optional: true, required: false
  private _patternStart?: number; 
  public get patternStart() {
    return this.getNumberAttribute('pattern_start');
  }
  public set patternStart(value: number) {
    this._patternStart = value;
  }
  public resetPatternStart() {
    this._patternStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternStartInput() {
    return this._patternStart;
  }

  // policy_group - computed: false, optional: true, required: false
  private _policyGroup?: string; 
  public get policyGroup() {
    return this.getStringAttribute('policy_group');
  }
  public set policyGroup(value: string) {
    this._policyGroup = value;
  }
  public resetPolicyGroup() {
    this._policyGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyGroupInput() {
    return this._policyGroup;
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

  // sso_attribute_value - computed: true, optional: true, required: false
  private _ssoAttributeValue?: string[]; 
  public get ssoAttributeValue() {
    return cdktf.Fn.tolist(this.getListAttribute('sso_attribute_value'));
  }
  public set ssoAttributeValue(value: string[]) {
    this._ssoAttributeValue = value;
  }
  public resetSsoAttributeValue() {
    this._ssoAttributeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoAttributeValueInput() {
    return this._ssoAttributeValue;
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

  // sub_type - computed: false, optional: true, required: false
  private _subType?: string; 
  public get subType() {
    return this.getStringAttribute('sub_type');
  }
  public set subType(value: string) {
    this._subType = value;
  }
  public resetSubType() {
    this._subType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subTypeInput() {
    return this._subType;
  }

  // subnet - computed: true, optional: true, required: false
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

  // subnet_name - computed: false, optional: true, required: false
  private _subnetName?: string; 
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }
  public set subnetName(value: string) {
    this._subnetName = value;
  }
  public resetSubnetName() {
    this._subnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNameInput() {
    return this._subnetName;
  }

  // sw_version - computed: false, optional: true, required: false
  private _swVersion?: string; 
  public get swVersion() {
    return this.getStringAttribute('sw_version');
  }
  public set swVersion(value: string) {
    this._swVersion = value;
  }
  public resetSwVersion() {
    this._swVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swVersionInput() {
    return this._swVersion;
  }

  // tag_detection_level - computed: false, optional: true, required: false
  private _tagDetectionLevel?: string; 
  public get tagDetectionLevel() {
    return this.getStringAttribute('tag_detection_level');
  }
  public set tagDetectionLevel(value: string) {
    this._tagDetectionLevel = value;
  }
  public resetTagDetectionLevel() {
    this._tagDetectionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagDetectionLevelInput() {
    return this._tagDetectionLevel;
  }

  // tag_type - computed: false, optional: true, required: false
  private _tagType?: string; 
  public get tagType() {
    return this.getStringAttribute('tag_type');
  }
  public set tagType(value: string) {
    this._tagType = value;
  }
  public resetTagType() {
    this._tagType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagTypeInput() {
    return this._tagType;
  }

  // tag_uuid - computed: false, optional: true, required: false
  private _tagUuid?: string; 
  public get tagUuid() {
    return this.getStringAttribute('tag_uuid');
  }
  public set tagUuid(value: string) {
    this._tagUuid = value;
  }
  public resetTagUuid() {
    this._tagUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagUuidInput() {
    return this._tagUuid;
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

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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

  // wildcard_fqdn - computed: false, optional: true, required: false
  private _wildcardFqdn?: string; 
  public get wildcardFqdn() {
    return this.getStringAttribute('wildcard_fqdn');
  }
  public set wildcardFqdn(value: string) {
    this._wildcardFqdn = value;
  }
  public resetWildcardFqdn() {
    this._wildcardFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardFqdnInput() {
    return this._wildcardFqdn;
  }

  // _scope - computed: false, optional: true, required: false
  private _scope = new ObjectFirewallAddressDynamicMappingScopeAList(this, "_scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: ObjectFirewallAddressDynamicMappingScopeA[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      _image_base64: cdktf.stringToTerraform(this._imageBase64),
      address: cdktf.stringToTerraform(this._address),
      adom: cdktf.stringToTerraform(this._adom),
      agent_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._agentId),
      allow_routing: cdktf.stringToTerraform(this._allowRouting),
      associated_interface: cdktf.stringToTerraform(this._associatedInterface),
      cache_ttl: cdktf.numberToTerraform(this._cacheTtl),
      clearpass_spt: cdktf.stringToTerraform(this._clearpassSpt),
      color: cdktf.numberToTerraform(this._color),
      comment: cdktf.stringToTerraform(this._comment),
      country: cdktf.stringToTerraform(this._country),
      dirty: cdktf.stringToTerraform(this._dirty),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      end_ip: cdktf.stringToTerraform(this._endIp),
      end_mac: cdktf.stringToTerraform(this._endMac),
      epg_name: cdktf.stringToTerraform(this._epgName),
      fabric_object: cdktf.stringToTerraform(this._fabricObject),
      filter: cdktf.stringToTerraform(this._filter),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      fsso_group: cdktf.stringToTerraform(this._fssoGroup),
      global_object: cdktf.numberToTerraform(this._globalObject),
      hw_model: cdktf.stringToTerraform(this._hwModel),
      hw_vendor: cdktf.stringToTerraform(this._hwVendor),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      macaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._macaddr),
      node_ip_only: cdktf.stringToTerraform(this._nodeIpOnly),
      obj_id: cdktf.stringToTerraform(this._objId),
      obj_tag: cdktf.stringToTerraform(this._objTag),
      obj_type: cdktf.stringToTerraform(this._objType),
      organization: cdktf.stringToTerraform(this._organization),
      os: cdktf.stringToTerraform(this._os),
      pattern_end: cdktf.numberToTerraform(this._patternEnd),
      pattern_start: cdktf.numberToTerraform(this._patternStart),
      policy_group: cdktf.stringToTerraform(this._policyGroup),
      route_tag: cdktf.numberToTerraform(this._routeTag),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      sdn: cdktf.stringToTerraform(this._sdn),
      sdn_addr_type: cdktf.stringToTerraform(this._sdnAddrType),
      sdn_tag: cdktf.stringToTerraform(this._sdnTag),
      sso_attribute_value: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ssoAttributeValue),
      start_ip: cdktf.stringToTerraform(this._startIp),
      start_mac: cdktf.stringToTerraform(this._startMac),
      sub_type: cdktf.stringToTerraform(this._subType),
      subnet: cdktf.stringToTerraform(this._subnet),
      subnet_name: cdktf.stringToTerraform(this._subnetName),
      sw_version: cdktf.stringToTerraform(this._swVersion),
      tag_detection_level: cdktf.stringToTerraform(this._tagDetectionLevel),
      tag_type: cdktf.stringToTerraform(this._tagType),
      tag_uuid: cdktf.stringToTerraform(this._tagUuid),
      tags: cdktf.stringToTerraform(this._tags),
      tenant: cdktf.stringToTerraform(this._tenant),
      type: cdktf.stringToTerraform(this._type),
      url: cdktf.stringToTerraform(this._url),
      uuid: cdktf.stringToTerraform(this._uuid),
      visibility: cdktf.stringToTerraform(this._visibility),
      wildcard: cdktf.stringToTerraform(this._wildcard),
      wildcard_fqdn: cdktf.stringToTerraform(this._wildcardFqdn),
      _scope: cdktf.listMapper(objectFirewallAddressDynamicMappingScopeAToTerraform, true)(this._scope.internalValue),
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
      address: {
        value: cdktf.stringToHclTerraform(this._address),
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
      agent_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._agentId),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allow_routing: {
        value: cdktf.stringToHclTerraform(this._allowRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      associated_interface: {
        value: cdktf.stringToHclTerraform(this._associatedInterface),
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
      clearpass_spt: {
        value: cdktf.stringToHclTerraform(this._clearpassSpt),
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
      dirty: {
        value: cdktf.stringToHclTerraform(this._dirty),
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
      fsso_group: {
        value: cdktf.stringToHclTerraform(this._fssoGroup),
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
      hw_model: {
        value: cdktf.stringToHclTerraform(this._hwModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hw_vendor: {
        value: cdktf.stringToHclTerraform(this._hwVendor),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
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
      node_ip_only: {
        value: cdktf.stringToHclTerraform(this._nodeIpOnly),
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
      obj_tag: {
        value: cdktf.stringToHclTerraform(this._objTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      obj_type: {
        value: cdktf.stringToHclTerraform(this._objType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os: {
        value: cdktf.stringToHclTerraform(this._os),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pattern_end: {
        value: cdktf.numberToHclTerraform(this._patternEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pattern_start: {
        value: cdktf.numberToHclTerraform(this._patternStart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policy_group: {
        value: cdktf.stringToHclTerraform(this._policyGroup),
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
      sso_attribute_value: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ssoAttributeValue),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      sub_type: {
        value: cdktf.stringToHclTerraform(this._subType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet: {
        value: cdktf.stringToHclTerraform(this._subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_name: {
        value: cdktf.stringToHclTerraform(this._subnetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sw_version: {
        value: cdktf.stringToHclTerraform(this._swVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_detection_level: {
        value: cdktf.stringToHclTerraform(this._tagDetectionLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_type: {
        value: cdktf.stringToHclTerraform(this._tagType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_uuid: {
        value: cdktf.stringToHclTerraform(this._tagUuid),
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
      url: {
        value: cdktf.stringToHclTerraform(this._url),
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
      wildcard_fqdn: {
        value: cdktf.stringToHclTerraform(this._wildcardFqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      _scope: {
        value: cdktf.listMapperHcl(objectFirewallAddressDynamicMappingScopeAToHclTerraform, true)(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallAddressDynamicMappingScopeAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
