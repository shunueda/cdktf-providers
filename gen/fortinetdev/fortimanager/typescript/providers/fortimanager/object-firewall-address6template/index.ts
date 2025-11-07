// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallAddress6TemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6template#_image_base64 ObjectFirewallAddress6Template#_image_base64}
  */
  readonly imageBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6template#adom ObjectFirewallAddress6Template#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6template#dynamic_sort_subtable ObjectFirewallAddress6Template#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6template#fabric_object ObjectFirewallAddress6Template#fabric_object}
  */
  readonly fabricObject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6template#id ObjectFirewallAddress6Template#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6template#ip6 ObjectFirewallAddress6Template#ip6}
  */
  readonly ip6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6template#name ObjectFirewallAddress6Template#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6template#scopetype ObjectFirewallAddress6Template#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6template#subnet_segment_count ObjectFirewallAddress6Template#subnet_segment_count}
  */
  readonly subnetSegmentCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6template#uuid ObjectFirewallAddress6Template#uuid}
  */
  readonly uuid?: string;
  /**
  * subnet_segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6template#subnet_segment ObjectFirewallAddress6Template#subnet_segment}
  */
  readonly subnetSegment?: ObjectFirewallAddress6TemplateSubnetSegment[] | cdktf.IResolvable;
}
export interface ObjectFirewallAddress6TemplateSubnetSegmentValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6template#name ObjectFirewallAddress6Template#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6template#value ObjectFirewallAddress6Template#value}
  */
  readonly value?: string;
}

export function objectFirewallAddress6TemplateSubnetSegmentValuesToTerraform(struct?: ObjectFirewallAddress6TemplateSubnetSegmentValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function objectFirewallAddress6TemplateSubnetSegmentValuesToHclTerraform(struct?: ObjectFirewallAddress6TemplateSubnetSegmentValues | cdktf.IResolvable): any {
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

export class ObjectFirewallAddress6TemplateSubnetSegmentValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallAddress6TemplateSubnetSegmentValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallAddress6TemplateSubnetSegmentValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
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

export class ObjectFirewallAddress6TemplateSubnetSegmentValuesList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallAddress6TemplateSubnetSegmentValues[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallAddress6TemplateSubnetSegmentValuesOutputReference {
    return new ObjectFirewallAddress6TemplateSubnetSegmentValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallAddress6TemplateSubnetSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6template#bits ObjectFirewallAddress6Template#bits}
  */
  readonly bits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6template#exclusive ObjectFirewallAddress6Template#exclusive}
  */
  readonly exclusive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6template#id ObjectFirewallAddress6Template#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6template#name ObjectFirewallAddress6Template#name}
  */
  readonly name?: string;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6template#values ObjectFirewallAddress6Template#values}
  */
  readonly values?: ObjectFirewallAddress6TemplateSubnetSegmentValues[] | cdktf.IResolvable;
}

export function objectFirewallAddress6TemplateSubnetSegmentToTerraform(struct?: ObjectFirewallAddress6TemplateSubnetSegment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bits: cdktf.numberToTerraform(struct!.bits),
    exclusive: cdktf.stringToTerraform(struct!.exclusive),
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(objectFirewallAddress6TemplateSubnetSegmentValuesToTerraform, true)(struct!.values),
  }
}


export function objectFirewallAddress6TemplateSubnetSegmentToHclTerraform(struct?: ObjectFirewallAddress6TemplateSubnetSegment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bits: {
      value: cdktf.numberToHclTerraform(struct!.bits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exclusive: {
      value: cdktf.stringToHclTerraform(struct!.exclusive),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(objectFirewallAddress6TemplateSubnetSegmentValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFirewallAddress6TemplateSubnetSegmentValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallAddress6TemplateSubnetSegmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallAddress6TemplateSubnetSegment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bits !== undefined) {
      hasAnyValues = true;
      internalValueResult.bits = this._bits;
    }
    if (this._exclusive !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusive = this._exclusive;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallAddress6TemplateSubnetSegment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bits = undefined;
      this._exclusive = undefined;
      this._id = undefined;
      this._name = undefined;
      this._values.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bits = value.bits;
      this._exclusive = value.exclusive;
      this._id = value.id;
      this._name = value.name;
      this._values.internalValue = value.values;
    }
  }

  // bits - computed: false, optional: true, required: false
  private _bits?: number; 
  public get bits() {
    return this.getNumberAttribute('bits');
  }
  public set bits(value: number) {
    this._bits = value;
  }
  public resetBits() {
    this._bits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitsInput() {
    return this._bits;
  }

  // exclusive - computed: true, optional: true, required: false
  private _exclusive?: string; 
  public get exclusive() {
    return this.getStringAttribute('exclusive');
  }
  public set exclusive(value: string) {
    this._exclusive = value;
  }
  public resetExclusive() {
    this._exclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveInput() {
    return this._exclusive;
  }

  // id - computed: true, optional: true, required: false
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

  // values - computed: false, optional: true, required: false
  private _values = new ObjectFirewallAddress6TemplateSubnetSegmentValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: ObjectFirewallAddress6TemplateSubnetSegmentValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  public resetValues() {
    this._values.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}

export class ObjectFirewallAddress6TemplateSubnetSegmentList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallAddress6TemplateSubnetSegment[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallAddress6TemplateSubnetSegmentOutputReference {
    return new ObjectFirewallAddress6TemplateSubnetSegmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6template fortimanager_object_firewall_address6template}
*/
export class ObjectFirewallAddress6Template extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_address6template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallAddress6Template resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallAddress6Template to import
  * @param importFromId The id of the existing ObjectFirewallAddress6Template that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallAddress6Template to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_address6template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_firewall_address6template fortimanager_object_firewall_address6template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallAddress6TemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallAddress6TemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_address6template',
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
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._fabricObject = config.fabricObject;
    this._id = config.id;
    this._ip6 = config.ip6;
    this._name = config.name;
    this._scopetype = config.scopetype;
    this._subnetSegmentCount = config.subnetSegmentCount;
    this._uuid = config.uuid;
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

  // subnet_segment_count - computed: false, optional: true, required: false
  private _subnetSegmentCount?: number; 
  public get subnetSegmentCount() {
    return this.getNumberAttribute('subnet_segment_count');
  }
  public set subnetSegmentCount(value: number) {
    this._subnetSegmentCount = value;
  }
  public resetSubnetSegmentCount() {
    this._subnetSegmentCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetSegmentCountInput() {
    return this._subnetSegmentCount;
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

  // subnet_segment - computed: false, optional: true, required: false
  private _subnetSegment = new ObjectFirewallAddress6TemplateSubnetSegmentList(this, "subnet_segment", false);
  public get subnetSegment() {
    return this._subnetSegment;
  }
  public putSubnetSegment(value: ObjectFirewallAddress6TemplateSubnetSegment[] | cdktf.IResolvable) {
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
      adom: cdktf.stringToTerraform(this._adom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fabric_object: cdktf.stringToTerraform(this._fabricObject),
      id: cdktf.stringToTerraform(this._id),
      ip6: cdktf.stringToTerraform(this._ip6),
      name: cdktf.stringToTerraform(this._name),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      subnet_segment_count: cdktf.numberToTerraform(this._subnetSegmentCount),
      uuid: cdktf.stringToTerraform(this._uuid),
      subnet_segment: cdktf.listMapper(objectFirewallAddress6TemplateSubnetSegmentToTerraform, true)(this._subnetSegment.internalValue),
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
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
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
      subnet_segment_count: {
        value: cdktf.numberToHclTerraform(this._subnetSegmentCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_segment: {
        value: cdktf.listMapperHcl(objectFirewallAddress6TemplateSubnetSegmentToHclTerraform, true)(this._subnetSegment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallAddress6TemplateSubnetSegmentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
