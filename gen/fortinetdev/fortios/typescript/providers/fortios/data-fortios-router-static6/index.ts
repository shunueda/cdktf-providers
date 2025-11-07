// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_static6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiosRouterStatic6Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_static6#id DataFortiosRouterStatic6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_static6#seq_num DataFortiosRouterStatic6#seq_num}
  */
  readonly seqNum: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_static6#vdomparam DataFortiosRouterStatic6#vdomparam}
  */
  readonly vdomparam?: string;
}
export interface DataFortiosRouterStatic6SdwanZone {
}

export function dataFortiosRouterStatic6SdwanZoneToTerraform(struct?: DataFortiosRouterStatic6SdwanZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosRouterStatic6SdwanZoneToHclTerraform(struct?: DataFortiosRouterStatic6SdwanZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosRouterStatic6SdwanZoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiosRouterStatic6SdwanZone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosRouterStatic6SdwanZone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataFortiosRouterStatic6SdwanZoneList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosRouterStatic6SdwanZoneOutputReference {
    return new DataFortiosRouterStatic6SdwanZoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_static6 fortios_router_static6}
*/
export class DataFortiosRouterStatic6 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_router_static6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiosRouterStatic6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiosRouterStatic6 to import
  * @param importFromId The id of the existing DataFortiosRouterStatic6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_static6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiosRouterStatic6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_router_static6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/router_static6 fortios_router_static6} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiosRouterStatic6Config
  */
  public constructor(scope: Construct, id: string, config: DataFortiosRouterStatic6Config) {
    super(scope, id, {
      terraformResourceType: 'fortios_router_static6',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._seqNum = config.seqNum;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bfd - computed: true, optional: false, required: false
  public get bfd() {
    return this.getStringAttribute('bfd');
  }

  // blackhole - computed: true, optional: false, required: false
  public get blackhole() {
    return this.getStringAttribute('blackhole');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // devindex - computed: true, optional: false, required: false
  public get devindex() {
    return this.getNumberAttribute('devindex');
  }

  // distance - computed: true, optional: false, required: false
  public get distance() {
    return this.getNumberAttribute('distance');
  }

  // dst - computed: true, optional: false, required: false
  public get dst() {
    return this.getStringAttribute('dst');
  }

  // dstaddr - computed: true, optional: false, required: false
  public get dstaddr() {
    return this.getStringAttribute('dstaddr');
  }

  // dynamic_gateway - computed: true, optional: false, required: false
  public get dynamicGateway() {
    return this.getStringAttribute('dynamic_gateway');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
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

  // link_monitor_exempt - computed: true, optional: false, required: false
  public get linkMonitorExempt() {
    return this.getStringAttribute('link_monitor_exempt');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // sdwan - computed: true, optional: false, required: false
  public get sdwan() {
    return this.getStringAttribute('sdwan');
  }

  // sdwan_zone - computed: true, optional: false, required: false
  private _sdwanZone = new DataFortiosRouterStatic6SdwanZoneList(this, "sdwan_zone", false);
  public get sdwanZone() {
    return this._sdwanZone;
  }

  // seq_num - computed: false, optional: false, required: true
  private _seqNum?: number; 
  public get seqNum() {
    return this.getNumberAttribute('seq_num');
  }
  public set seqNum(value: number) {
    this._seqNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seqNumInput() {
    return this._seqNum;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getNumberAttribute('tag');
  }

  // vdomparam - computed: false, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // virtual_wan_link - computed: true, optional: false, required: false
  public get virtualWanLink() {
    return this.getStringAttribute('virtual_wan_link');
  }

  // vrf - computed: true, optional: false, required: false
  public get vrf() {
    return this.getNumberAttribute('vrf');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      seq_num: cdktf.numberToTerraform(this._seqNum),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      seq_num: {
        value: cdktf.numberToHclTerraform(this._seqNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
