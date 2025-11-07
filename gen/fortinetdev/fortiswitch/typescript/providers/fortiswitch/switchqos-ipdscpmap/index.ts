// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchqos_ipdscpmap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchqosIpdscpmapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchqos_ipdscpmap#description SwitchqosIpdscpmap#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchqos_ipdscpmap#dynamic_sort_subtable SwitchqosIpdscpmap#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchqos_ipdscpmap#id SwitchqosIpdscpmap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchqos_ipdscpmap#name SwitchqosIpdscpmap#name}
  */
  readonly name?: string;
  /**
  * map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchqos_ipdscpmap#map SwitchqosIpdscpmap#map}
  */
  readonly map?: SwitchqosIpdscpmapMap[] | cdktf.IResolvable;
}
export interface SwitchqosIpdscpmapMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchqos_ipdscpmap#cos_queue SwitchqosIpdscpmap#cos_queue}
  */
  readonly cosQueue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchqos_ipdscpmap#diffserv SwitchqosIpdscpmap#diffserv}
  */
  readonly diffserv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchqos_ipdscpmap#entry_name SwitchqosIpdscpmap#entry_name}
  */
  readonly entryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchqos_ipdscpmap#ip_precedence SwitchqosIpdscpmap#ip_precedence}
  */
  readonly ipPrecedence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchqos_ipdscpmap#type SwitchqosIpdscpmap#type}
  */
  readonly type?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchqos_ipdscpmap#value SwitchqosIpdscpmap#value}
  */
  readonly value?: string;
}

export function switchqosIpdscpmapMapToTerraform(struct?: SwitchqosIpdscpmapMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cos_queue: cdktf.numberToTerraform(struct!.cosQueue),
    diffserv: cdktf.stringToTerraform(struct!.diffserv),
    entry_name: cdktf.stringToTerraform(struct!.entryName),
    ip_precedence: cdktf.stringToTerraform(struct!.ipPrecedence),
    type: cdktf.numberToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function switchqosIpdscpmapMapToHclTerraform(struct?: SwitchqosIpdscpmapMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cos_queue: {
      value: cdktf.numberToHclTerraform(struct!.cosQueue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    diffserv: {
      value: cdktf.stringToHclTerraform(struct!.diffserv),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry_name: {
      value: cdktf.stringToHclTerraform(struct!.entryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_precedence: {
      value: cdktf.stringToHclTerraform(struct!.ipPrecedence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class SwitchqosIpdscpmapMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchqosIpdscpmapMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cosQueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosQueue = this._cosQueue;
    }
    if (this._diffserv !== undefined) {
      hasAnyValues = true;
      internalValueResult.diffserv = this._diffserv;
    }
    if (this._entryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryName = this._entryName;
    }
    if (this._ipPrecedence !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrecedence = this._ipPrecedence;
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

  public set internalValue(value: SwitchqosIpdscpmapMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cosQueue = undefined;
      this._diffserv = undefined;
      this._entryName = undefined;
      this._ipPrecedence = undefined;
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
      this._cosQueue = value.cosQueue;
      this._diffserv = value.diffserv;
      this._entryName = value.entryName;
      this._ipPrecedence = value.ipPrecedence;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // cos_queue - computed: true, optional: true, required: false
  private _cosQueue?: number; 
  public get cosQueue() {
    return this.getNumberAttribute('cos_queue');
  }
  public set cosQueue(value: number) {
    this._cosQueue = value;
  }
  public resetCosQueue() {
    this._cosQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosQueueInput() {
    return this._cosQueue;
  }

  // diffserv - computed: true, optional: true, required: false
  private _diffserv?: string; 
  public get diffserv() {
    return this.getStringAttribute('diffserv');
  }
  public set diffserv(value: string) {
    this._diffserv = value;
  }
  public resetDiffserv() {
    this._diffserv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffservInput() {
    return this._diffserv;
  }

  // entry_name - computed: true, optional: true, required: false
  private _entryName?: string; 
  public get entryName() {
    return this.getStringAttribute('entry_name');
  }
  public set entryName(value: string) {
    this._entryName = value;
  }
  public resetEntryName() {
    this._entryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryNameInput() {
    return this._entryName;
  }

  // ip_precedence - computed: true, optional: true, required: false
  private _ipPrecedence?: string; 
  public get ipPrecedence() {
    return this.getStringAttribute('ip_precedence');
  }
  public set ipPrecedence(value: string) {
    this._ipPrecedence = value;
  }
  public resetIpPrecedence() {
    this._ipPrecedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrecedenceInput() {
    return this._ipPrecedence;
  }

  // type - computed: true, optional: true, required: false
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: true, optional: true, required: false
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

export class SwitchqosIpdscpmapMapList extends cdktf.ComplexList {
  public internalValue? : SwitchqosIpdscpmapMap[] | cdktf.IResolvable

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
  public get(index: number): SwitchqosIpdscpmapMapOutputReference {
    return new SwitchqosIpdscpmapMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchqos_ipdscpmap fortiswitch_switchqos_ipdscpmap}
*/
export class SwitchqosIpdscpmap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_switchqos_ipdscpmap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchqosIpdscpmap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchqosIpdscpmap to import
  * @param importFromId The id of the existing SwitchqosIpdscpmap that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchqos_ipdscpmap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchqosIpdscpmap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_switchqos_ipdscpmap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switchqos_ipdscpmap fortiswitch_switchqos_ipdscpmap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchqosIpdscpmapConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchqosIpdscpmapConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_switchqos_ipdscpmap',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
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
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._name = config.name;
    this._map.internalValue = config.map;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // name - computed: true, optional: true, required: false
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

  // map - computed: false, optional: true, required: false
  private _map = new SwitchqosIpdscpmapMapList(this, "map", false);
  public get map() {
    return this._map;
  }
  public putMap(value: SwitchqosIpdscpmapMap[] | cdktf.IResolvable) {
    this._map.internalValue = value;
  }
  public resetMap() {
    this._map.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      map: cdktf.listMapper(switchqosIpdscpmapMapToTerraform, true)(this._map.internalValue),
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
      map: {
        value: cdktf.listMapperHcl(switchqosIpdscpmapMapToHclTerraform, true)(this._map.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchqosIpdscpmapMapList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
