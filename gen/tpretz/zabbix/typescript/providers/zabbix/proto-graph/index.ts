// https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_graph
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProtoGraphConfig extends cdktf.TerraformMetaArguments {
  /**
  * Show 3d graph
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_graph#do3d ProtoGraph#do3d}
  */
  readonly do3D?: boolean | cdktf.IResolvable;
  /**
  * Height
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_graph#height ProtoGraph#height}
  */
  readonly height: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_graph#id ProtoGraph#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Show legend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_graph#legend ProtoGraph#legend}
  */
  readonly legend?: boolean | cdktf.IResolvable;
  /**
  * Graph Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_graph#name ProtoGraph#name}
  */
  readonly name: string;
  /**
  * Left percentile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_graph#percent_left ProtoGraph#percent_left}
  */
  readonly percentLeft?: string;
  /**
  * Right percentile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_graph#percent_right ProtoGraph#percent_right}
  */
  readonly percentRight?: string;
  /**
  * Type, one of: exploded, normal, stacked, pie
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_graph#type ProtoGraph#type}
  */
  readonly type?: string;
  /**
  * Width
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_graph#width ProtoGraph#width}
  */
  readonly width: string;
  /**
  * Show work period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_graph#work_period ProtoGraph#work_period}
  */
  readonly workPeriod?: boolean | cdktf.IResolvable;
  /**
  * Y Axis Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_graph#ymax ProtoGraph#ymax}
  */
  readonly ymax?: string;
  /**
  * Y Axis Max ItemId
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_graph#ymax_itemid ProtoGraph#ymax_itemid}
  */
  readonly ymaxItemid?: string;
  /**
  * Y Axis Max Type, one of: item, calculated, fixed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_graph#ymax_type ProtoGraph#ymax_type}
  */
  readonly ymaxType?: string;
  /**
  * Y Axis Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_graph#ymin ProtoGraph#ymin}
  */
  readonly ymin?: string;
  /**
  * Y Axis Min ItemId
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_graph#ymin_itemid ProtoGraph#ymin_itemid}
  */
  readonly yminItemid?: string;
  /**
  * Y Axis Min Type, one of: item, calculated, fixed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_graph#ymin_type ProtoGraph#ymin_type}
  */
  readonly yminType?: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_graph#item ProtoGraph#item}
  */
  readonly item: ProtoGraphItem[] | cdktf.IResolvable;
}
export interface ProtoGraphItem {
  /**
  * color
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_graph#color ProtoGraph#color}
  */
  readonly color: string;
  /**
  * Draw Type, one of: line, filled, bold, dot, dashed, gradient
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_graph#drawtype ProtoGraph#drawtype}
  */
  readonly drawtype?: string;
  /**
  * Function, one of: min, average, max, all, last
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_graph#function ProtoGraph#function}
  */
  readonly function?: string;
  /**
  * itemid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_graph#itemid ProtoGraph#itemid}
  */
  readonly itemid: string;
  /**
  * sort order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_graph#sortorder ProtoGraph#sortorder}
  */
  readonly sortorder?: string;
  /**
  * Type, one of: simple, sum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_graph#type ProtoGraph#type}
  */
  readonly type?: string;
  /**
  * Y Axis Side, one of: left, right
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_graph#yaxis_side ProtoGraph#yaxis_side}
  */
  readonly yaxisSide?: string;
}

export function protoGraphItemToTerraform(struct?: ProtoGraphItem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    drawtype: cdktf.stringToTerraform(struct!.drawtype),
    function: cdktf.stringToTerraform(struct!.function),
    itemid: cdktf.stringToTerraform(struct!.itemid),
    sortorder: cdktf.stringToTerraform(struct!.sortorder),
    type: cdktf.stringToTerraform(struct!.type),
    yaxis_side: cdktf.stringToTerraform(struct!.yaxisSide),
  }
}


export function protoGraphItemToHclTerraform(struct?: ProtoGraphItem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drawtype: {
      value: cdktf.stringToHclTerraform(struct!.drawtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function: {
      value: cdktf.stringToHclTerraform(struct!.function),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    itemid: {
      value: cdktf.stringToHclTerraform(struct!.itemid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sortorder: {
      value: cdktf.stringToHclTerraform(struct!.sortorder),
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
    yaxis_side: {
      value: cdktf.stringToHclTerraform(struct!.yaxisSide),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProtoGraphItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtoGraphItem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._drawtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.drawtype = this._drawtype;
    }
    if (this._function !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function;
    }
    if (this._itemid !== undefined) {
      hasAnyValues = true;
      internalValueResult.itemid = this._itemid;
    }
    if (this._sortorder !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortorder = this._sortorder;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._yaxisSide !== undefined) {
      hasAnyValues = true;
      internalValueResult.yaxisSide = this._yaxisSide;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtoGraphItem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._drawtype = undefined;
      this._function = undefined;
      this._itemid = undefined;
      this._sortorder = undefined;
      this._type = undefined;
      this._yaxisSide = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._drawtype = value.drawtype;
      this._function = value.function;
      this._itemid = value.itemid;
      this._sortorder = value.sortorder;
      this._type = value.type;
      this._yaxisSide = value.yaxisSide;
    }
  }

  // color - computed: false, optional: false, required: true
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // drawtype - computed: false, optional: true, required: false
  private _drawtype?: string; 
  public get drawtype() {
    return this.getStringAttribute('drawtype');
  }
  public set drawtype(value: string) {
    this._drawtype = value;
  }
  public resetDrawtype() {
    this._drawtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drawtypeInput() {
    return this._drawtype;
  }

  // function - computed: false, optional: true, required: false
  private _function?: string; 
  public get function() {
    return this.getStringAttribute('function');
  }
  public set function(value: string) {
    this._function = value;
  }
  public resetFunction() {
    this._function = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // itemid - computed: false, optional: false, required: true
  private _itemid?: string; 
  public get itemid() {
    return this.getStringAttribute('itemid');
  }
  public set itemid(value: string) {
    this._itemid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemidInput() {
    return this._itemid;
  }

  // sortorder - computed: false, optional: true, required: false
  private _sortorder?: string; 
  public get sortorder() {
    return this.getStringAttribute('sortorder');
  }
  public set sortorder(value: string) {
    this._sortorder = value;
  }
  public resetSortorder() {
    this._sortorder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortorderInput() {
    return this._sortorder;
  }

  // type - computed: false, optional: true, required: false
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

  // yaxis_side - computed: false, optional: true, required: false
  private _yaxisSide?: string; 
  public get yaxisSide() {
    return this.getStringAttribute('yaxis_side');
  }
  public set yaxisSide(value: string) {
    this._yaxisSide = value;
  }
  public resetYaxisSide() {
    this._yaxisSide = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yaxisSideInput() {
    return this._yaxisSide;
  }
}

export class ProtoGraphItemList extends cdktf.ComplexList {
  public internalValue? : ProtoGraphItem[] | cdktf.IResolvable

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
  public get(index: number): ProtoGraphItemOutputReference {
    return new ProtoGraphItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_graph zabbix_proto_graph}
*/
export class ProtoGraph extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zabbix_proto_graph";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProtoGraph resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProtoGraph to import
  * @param importFromId The id of the existing ProtoGraph that should be imported. Refer to the {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_graph#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProtoGraph to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zabbix_proto_graph", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs/resources/proto_graph zabbix_proto_graph} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProtoGraphConfig
  */
  public constructor(scope: Construct, id: string, config: ProtoGraphConfig) {
    super(scope, id, {
      terraformResourceType: 'zabbix_proto_graph',
      terraformGeneratorMetadata: {
        providerName: 'zabbix',
        providerVersion: '0.17.0',
        providerVersionConstraint: '0.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._do3D = config.do3D;
    this._height = config.height;
    this._id = config.id;
    this._legend = config.legend;
    this._name = config.name;
    this._percentLeft = config.percentLeft;
    this._percentRight = config.percentRight;
    this._type = config.type;
    this._width = config.width;
    this._workPeriod = config.workPeriod;
    this._ymax = config.ymax;
    this._ymaxItemid = config.ymaxItemid;
    this._ymaxType = config.ymaxType;
    this._ymin = config.ymin;
    this._yminItemid = config.yminItemid;
    this._yminType = config.yminType;
    this._item.internalValue = config.item;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // do3d - computed: false, optional: true, required: false
  private _do3D?: boolean | cdktf.IResolvable; 
  public get do3D() {
    return this.getBooleanAttribute('do3d');
  }
  public set do3D(value: boolean | cdktf.IResolvable) {
    this._do3D = value;
  }
  public resetDo3D() {
    this._do3D = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get do3DInput() {
    return this._do3D;
  }

  // height - computed: false, optional: false, required: true
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
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

  // legend - computed: false, optional: true, required: false
  private _legend?: boolean | cdktf.IResolvable; 
  public get legend() {
    return this.getBooleanAttribute('legend');
  }
  public set legend(value: boolean | cdktf.IResolvable) {
    this._legend = value;
  }
  public resetLegend() {
    this._legend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legendInput() {
    return this._legend;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // percent_left - computed: false, optional: true, required: false
  private _percentLeft?: string; 
  public get percentLeft() {
    return this.getStringAttribute('percent_left');
  }
  public set percentLeft(value: string) {
    this._percentLeft = value;
  }
  public resetPercentLeft() {
    this._percentLeft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentLeftInput() {
    return this._percentLeft;
  }

  // percent_right - computed: false, optional: true, required: false
  private _percentRight?: string; 
  public get percentRight() {
    return this.getStringAttribute('percent_right');
  }
  public set percentRight(value: string) {
    this._percentRight = value;
  }
  public resetPercentRight() {
    this._percentRight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentRightInput() {
    return this._percentRight;
  }

  // type - computed: false, optional: true, required: false
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

  // width - computed: false, optional: false, required: true
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // work_period - computed: false, optional: true, required: false
  private _workPeriod?: boolean | cdktf.IResolvable; 
  public get workPeriod() {
    return this.getBooleanAttribute('work_period');
  }
  public set workPeriod(value: boolean | cdktf.IResolvable) {
    this._workPeriod = value;
  }
  public resetWorkPeriod() {
    this._workPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workPeriodInput() {
    return this._workPeriod;
  }

  // ymax - computed: false, optional: true, required: false
  private _ymax?: string; 
  public get ymax() {
    return this.getStringAttribute('ymax');
  }
  public set ymax(value: string) {
    this._ymax = value;
  }
  public resetYmax() {
    this._ymax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ymaxInput() {
    return this._ymax;
  }

  // ymax_itemid - computed: false, optional: true, required: false
  private _ymaxItemid?: string; 
  public get ymaxItemid() {
    return this.getStringAttribute('ymax_itemid');
  }
  public set ymaxItemid(value: string) {
    this._ymaxItemid = value;
  }
  public resetYmaxItemid() {
    this._ymaxItemid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ymaxItemidInput() {
    return this._ymaxItemid;
  }

  // ymax_type - computed: false, optional: true, required: false
  private _ymaxType?: string; 
  public get ymaxType() {
    return this.getStringAttribute('ymax_type');
  }
  public set ymaxType(value: string) {
    this._ymaxType = value;
  }
  public resetYmaxType() {
    this._ymaxType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ymaxTypeInput() {
    return this._ymaxType;
  }

  // ymin - computed: false, optional: true, required: false
  private _ymin?: string; 
  public get ymin() {
    return this.getStringAttribute('ymin');
  }
  public set ymin(value: string) {
    this._ymin = value;
  }
  public resetYmin() {
    this._ymin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yminInput() {
    return this._ymin;
  }

  // ymin_itemid - computed: false, optional: true, required: false
  private _yminItemid?: string; 
  public get yminItemid() {
    return this.getStringAttribute('ymin_itemid');
  }
  public set yminItemid(value: string) {
    this._yminItemid = value;
  }
  public resetYminItemid() {
    this._yminItemid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yminItemidInput() {
    return this._yminItemid;
  }

  // ymin_type - computed: false, optional: true, required: false
  private _yminType?: string; 
  public get yminType() {
    return this.getStringAttribute('ymin_type');
  }
  public set yminType(value: string) {
    this._yminType = value;
  }
  public resetYminType() {
    this._yminType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yminTypeInput() {
    return this._yminType;
  }

  // item - computed: false, optional: false, required: true
  private _item = new ProtoGraphItemList(this, "item", false);
  public get item() {
    return this._item;
  }
  public putItem(value: ProtoGraphItem[] | cdktf.IResolvable) {
    this._item.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      do3d: cdktf.booleanToTerraform(this._do3D),
      height: cdktf.stringToTerraform(this._height),
      id: cdktf.stringToTerraform(this._id),
      legend: cdktf.booleanToTerraform(this._legend),
      name: cdktf.stringToTerraform(this._name),
      percent_left: cdktf.stringToTerraform(this._percentLeft),
      percent_right: cdktf.stringToTerraform(this._percentRight),
      type: cdktf.stringToTerraform(this._type),
      width: cdktf.stringToTerraform(this._width),
      work_period: cdktf.booleanToTerraform(this._workPeriod),
      ymax: cdktf.stringToTerraform(this._ymax),
      ymax_itemid: cdktf.stringToTerraform(this._ymaxItemid),
      ymax_type: cdktf.stringToTerraform(this._ymaxType),
      ymin: cdktf.stringToTerraform(this._ymin),
      ymin_itemid: cdktf.stringToTerraform(this._yminItemid),
      ymin_type: cdktf.stringToTerraform(this._yminType),
      item: cdktf.listMapper(protoGraphItemToTerraform, true)(this._item.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      do3d: {
        value: cdktf.booleanToHclTerraform(this._do3D),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      height: {
        value: cdktf.stringToHclTerraform(this._height),
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
      legend: {
        value: cdktf.booleanToHclTerraform(this._legend),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      percent_left: {
        value: cdktf.stringToHclTerraform(this._percentLeft),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      percent_right: {
        value: cdktf.stringToHclTerraform(this._percentRight),
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
      width: {
        value: cdktf.stringToHclTerraform(this._width),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      work_period: {
        value: cdktf.booleanToHclTerraform(this._workPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ymax: {
        value: cdktf.stringToHclTerraform(this._ymax),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ymax_itemid: {
        value: cdktf.stringToHclTerraform(this._ymaxItemid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ymax_type: {
        value: cdktf.stringToHclTerraform(this._ymaxType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ymin: {
        value: cdktf.stringToHclTerraform(this._ymin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ymin_itemid: {
        value: cdktf.stringToHclTerraform(this._yminItemid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ymin_type: {
        value: cdktf.stringToHclTerraform(this._yminType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      item: {
        value: cdktf.listMapperHcl(protoGraphItemToHclTerraform, true)(this._item.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProtoGraphItemList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
