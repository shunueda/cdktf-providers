// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_addrgrp_dynamic_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallAddrgrpDynamicMappingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_addrgrp_dynamic_mapping#_image_base64 ObjectFirewallAddrgrpDynamicMappingA#_image_base64}
  */
  readonly imageBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_addrgrp_dynamic_mapping#addrgrp ObjectFirewallAddrgrpDynamicMappingA#addrgrp}
  */
  readonly addrgrp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_addrgrp_dynamic_mapping#adom ObjectFirewallAddrgrpDynamicMappingA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_addrgrp_dynamic_mapping#allow_routing ObjectFirewallAddrgrpDynamicMappingA#allow_routing}
  */
  readonly allowRouting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_addrgrp_dynamic_mapping#category ObjectFirewallAddrgrpDynamicMappingA#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_addrgrp_dynamic_mapping#color ObjectFirewallAddrgrpDynamicMappingA#color}
  */
  readonly color?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_addrgrp_dynamic_mapping#comment ObjectFirewallAddrgrpDynamicMappingA#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_addrgrp_dynamic_mapping#dynamic_sort_subtable ObjectFirewallAddrgrpDynamicMappingA#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_addrgrp_dynamic_mapping#exclude ObjectFirewallAddrgrpDynamicMappingA#exclude}
  */
  readonly exclude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_addrgrp_dynamic_mapping#exclude_member ObjectFirewallAddrgrpDynamicMappingA#exclude_member}
  */
  readonly excludeMember?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_addrgrp_dynamic_mapping#fabric_object ObjectFirewallAddrgrpDynamicMappingA#fabric_object}
  */
  readonly fabricObject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_addrgrp_dynamic_mapping#global_object ObjectFirewallAddrgrpDynamicMappingA#global_object}
  */
  readonly globalObject?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_addrgrp_dynamic_mapping#id ObjectFirewallAddrgrpDynamicMappingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_addrgrp_dynamic_mapping#member ObjectFirewallAddrgrpDynamicMappingA#member}
  */
  readonly member?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_addrgrp_dynamic_mapping#scopetype ObjectFirewallAddrgrpDynamicMappingA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_addrgrp_dynamic_mapping#tags ObjectFirewallAddrgrpDynamicMappingA#tags}
  */
  readonly tags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_addrgrp_dynamic_mapping#type ObjectFirewallAddrgrpDynamicMappingA#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_addrgrp_dynamic_mapping#uuid ObjectFirewallAddrgrpDynamicMappingA#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_addrgrp_dynamic_mapping#visibility ObjectFirewallAddrgrpDynamicMappingA#visibility}
  */
  readonly visibility?: string;
  /**
  * _scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_addrgrp_dynamic_mapping#_scope ObjectFirewallAddrgrpDynamicMappingA#_scope}
  */
  readonly scope?: ObjectFirewallAddrgrpDynamicMappingScopeA[] | cdktf.IResolvable;
}
export interface ObjectFirewallAddrgrpDynamicMappingScopeA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_addrgrp_dynamic_mapping#name ObjectFirewallAddrgrpDynamicMappingA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_addrgrp_dynamic_mapping#vdom ObjectFirewallAddrgrpDynamicMappingA#vdom}
  */
  readonly vdom?: string;
}

export function objectFirewallAddrgrpDynamicMappingScopeAToTerraform(struct?: ObjectFirewallAddrgrpDynamicMappingScopeA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vdom: cdktf.stringToTerraform(struct!.vdom),
  }
}


export function objectFirewallAddrgrpDynamicMappingScopeAToHclTerraform(struct?: ObjectFirewallAddrgrpDynamicMappingScopeA | cdktf.IResolvable): any {
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

export class ObjectFirewallAddrgrpDynamicMappingScopeAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallAddrgrpDynamicMappingScopeA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectFirewallAddrgrpDynamicMappingScopeA | cdktf.IResolvable | undefined) {
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

export class ObjectFirewallAddrgrpDynamicMappingScopeAList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallAddrgrpDynamicMappingScopeA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallAddrgrpDynamicMappingScopeAOutputReference {
    return new ObjectFirewallAddrgrpDynamicMappingScopeAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_addrgrp_dynamic_mapping fortimanager_object_firewall_addrgrp_dynamic_mapping}
*/
export class ObjectFirewallAddrgrpDynamicMappingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_addrgrp_dynamic_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallAddrgrpDynamicMappingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallAddrgrpDynamicMappingA to import
  * @param importFromId The id of the existing ObjectFirewallAddrgrpDynamicMappingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_addrgrp_dynamic_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallAddrgrpDynamicMappingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_addrgrp_dynamic_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_addrgrp_dynamic_mapping fortimanager_object_firewall_addrgrp_dynamic_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallAddrgrpDynamicMappingAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallAddrgrpDynamicMappingAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_addrgrp_dynamic_mapping',
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
    this._addrgrp = config.addrgrp;
    this._adom = config.adom;
    this._allowRouting = config.allowRouting;
    this._category = config.category;
    this._color = config.color;
    this._comment = config.comment;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._exclude = config.exclude;
    this._excludeMember = config.excludeMember;
    this._fabricObject = config.fabricObject;
    this._globalObject = config.globalObject;
    this._id = config.id;
    this._member = config.member;
    this._scopetype = config.scopetype;
    this._tags = config.tags;
    this._type = config.type;
    this._uuid = config.uuid;
    this._visibility = config.visibility;
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

  // addrgrp - computed: false, optional: false, required: true
  private _addrgrp?: string; 
  public get addrgrp() {
    return this.getStringAttribute('addrgrp');
  }
  public set addrgrp(value: string) {
    this._addrgrp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrgrpInput() {
    return this._addrgrp;
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

  // category - computed: true, optional: true, required: false
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

  // exclude - computed: true, optional: true, required: false
  private _exclude?: string; 
  public get exclude() {
    return this.getStringAttribute('exclude');
  }
  public set exclude(value: string) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // exclude_member - computed: false, optional: true, required: false
  private _excludeMember?: string; 
  public get excludeMember() {
    return this.getStringAttribute('exclude_member');
  }
  public set excludeMember(value: string) {
    this._excludeMember = value;
  }
  public resetExcludeMember() {
    this._excludeMember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeMemberInput() {
    return this._excludeMember;
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

  // member - computed: true, optional: true, required: false
  private _member?: string[]; 
  public get member() {
    return cdktf.Fn.tolist(this.getListAttribute('member'));
  }
  public set member(value: string[]) {
    this._member = value;
  }
  public resetMember() {
    this._member = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member;
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
  private _scope = new ObjectFirewallAddrgrpDynamicMappingScopeAList(this, "_scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: ObjectFirewallAddrgrpDynamicMappingScopeA[] | cdktf.IResolvable) {
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
      addrgrp: cdktf.stringToTerraform(this._addrgrp),
      adom: cdktf.stringToTerraform(this._adom),
      allow_routing: cdktf.stringToTerraform(this._allowRouting),
      category: cdktf.stringToTerraform(this._category),
      color: cdktf.numberToTerraform(this._color),
      comment: cdktf.stringToTerraform(this._comment),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      exclude: cdktf.stringToTerraform(this._exclude),
      exclude_member: cdktf.stringToTerraform(this._excludeMember),
      fabric_object: cdktf.stringToTerraform(this._fabricObject),
      global_object: cdktf.numberToTerraform(this._globalObject),
      id: cdktf.stringToTerraform(this._id),
      member: cdktf.listMapper(cdktf.stringToTerraform, false)(this._member),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      tags: cdktf.stringToTerraform(this._tags),
      type: cdktf.stringToTerraform(this._type),
      uuid: cdktf.stringToTerraform(this._uuid),
      visibility: cdktf.stringToTerraform(this._visibility),
      _scope: cdktf.listMapper(objectFirewallAddrgrpDynamicMappingScopeAToTerraform, true)(this._scope.internalValue),
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
      addrgrp: {
        value: cdktf.stringToHclTerraform(this._addrgrp),
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
      allow_routing: {
        value: cdktf.stringToHclTerraform(this._allowRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      category: {
        value: cdktf.stringToHclTerraform(this._category),
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
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude: {
        value: cdktf.stringToHclTerraform(this._exclude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_member: {
        value: cdktf.stringToHclTerraform(this._excludeMember),
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
      global_object: {
        value: cdktf.numberToHclTerraform(this._globalObject),
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
      member: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._member),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
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
      _scope: {
        value: cdktf.listMapperHcl(objectFirewallAddrgrpDynamicMappingScopeAToHclTerraform, true)(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallAddrgrpDynamicMappingScopeAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
