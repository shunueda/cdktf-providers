// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_bfd6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterBfd6Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_bfd6#dynamic_sort_subtable RouterBfd6#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_bfd6#get_all_tables RouterBfd6#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_bfd6#id RouterBfd6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_bfd6#vdomparam RouterBfd6#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * multihop_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_bfd6#multihop_template RouterBfd6#multihop_template}
  */
  readonly multihopTemplate?: RouterBfd6MultihopTemplate[] | cdktf.IResolvable;
  /**
  * neighbor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_bfd6#neighbor RouterBfd6#neighbor}
  */
  readonly neighbor?: RouterBfd6Neighbor[] | cdktf.IResolvable;
}
export interface RouterBfd6MultihopTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_bfd6#auth_mode RouterBfd6#auth_mode}
  */
  readonly authMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_bfd6#bfd_desired_min_tx RouterBfd6#bfd_desired_min_tx}
  */
  readonly bfdDesiredMinTx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_bfd6#bfd_detect_mult RouterBfd6#bfd_detect_mult}
  */
  readonly bfdDetectMult?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_bfd6#bfd_required_min_rx RouterBfd6#bfd_required_min_rx}
  */
  readonly bfdRequiredMinRx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_bfd6#dst RouterBfd6#dst}
  */
  readonly dst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_bfd6#id RouterBfd6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_bfd6#md5_key RouterBfd6#md5_key}
  */
  readonly md5Key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_bfd6#src RouterBfd6#src}
  */
  readonly src?: string;
}

export function routerBfd6MultihopTemplateToTerraform(struct?: RouterBfd6MultihopTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_mode: cdktf.stringToTerraform(struct!.authMode),
    bfd_desired_min_tx: cdktf.numberToTerraform(struct!.bfdDesiredMinTx),
    bfd_detect_mult: cdktf.numberToTerraform(struct!.bfdDetectMult),
    bfd_required_min_rx: cdktf.numberToTerraform(struct!.bfdRequiredMinRx),
    dst: cdktf.stringToTerraform(struct!.dst),
    id: cdktf.numberToTerraform(struct!.id),
    md5_key: cdktf.stringToTerraform(struct!.md5Key),
    src: cdktf.stringToTerraform(struct!.src),
  }
}


export function routerBfd6MultihopTemplateToHclTerraform(struct?: RouterBfd6MultihopTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_mode: {
      value: cdktf.stringToHclTerraform(struct!.authMode),
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
    dst: {
      value: cdktf.stringToHclTerraform(struct!.dst),
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
    md5_key: {
      value: cdktf.stringToHclTerraform(struct!.md5Key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src: {
      value: cdktf.stringToHclTerraform(struct!.src),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBfd6MultihopTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBfd6MultihopTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMode = this._authMode;
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
    if (this._dst !== undefined) {
      hasAnyValues = true;
      internalValueResult.dst = this._dst;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._md5Key !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5Key = this._md5Key;
    }
    if (this._src !== undefined) {
      hasAnyValues = true;
      internalValueResult.src = this._src;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBfd6MultihopTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authMode = undefined;
      this._bfdDesiredMinTx = undefined;
      this._bfdDetectMult = undefined;
      this._bfdRequiredMinRx = undefined;
      this._dst = undefined;
      this._id = undefined;
      this._md5Key = undefined;
      this._src = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authMode = value.authMode;
      this._bfdDesiredMinTx = value.bfdDesiredMinTx;
      this._bfdDetectMult = value.bfdDetectMult;
      this._bfdRequiredMinRx = value.bfdRequiredMinRx;
      this._dst = value.dst;
      this._id = value.id;
      this._md5Key = value.md5Key;
      this._src = value.src;
    }
  }

  // auth_mode - computed: true, optional: true, required: false
  private _authMode?: string; 
  public get authMode() {
    return this.getStringAttribute('auth_mode');
  }
  public set authMode(value: string) {
    this._authMode = value;
  }
  public resetAuthMode() {
    this._authMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authModeInput() {
    return this._authMode;
  }

  // bfd_desired_min_tx - computed: true, optional: true, required: false
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

  // bfd_detect_mult - computed: true, optional: true, required: false
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

  // bfd_required_min_rx - computed: true, optional: true, required: false
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

  // dst - computed: true, optional: true, required: false
  private _dst?: string; 
  public get dst() {
    return this.getStringAttribute('dst');
  }
  public set dst(value: string) {
    this._dst = value;
  }
  public resetDst() {
    this._dst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst;
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

  // md5_key - computed: false, optional: true, required: false
  private _md5Key?: string; 
  public get md5Key() {
    return this.getStringAttribute('md5_key');
  }
  public set md5Key(value: string) {
    this._md5Key = value;
  }
  public resetMd5Key() {
    this._md5Key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5KeyInput() {
    return this._md5Key;
  }

  // src - computed: true, optional: true, required: false
  private _src?: string; 
  public get src() {
    return this.getStringAttribute('src');
  }
  public set src(value: string) {
    this._src = value;
  }
  public resetSrc() {
    this._src = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src;
  }
}

export class RouterBfd6MultihopTemplateList extends cdktf.ComplexList {
  public internalValue? : RouterBfd6MultihopTemplate[] | cdktf.IResolvable

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
  public get(index: number): RouterBfd6MultihopTemplateOutputReference {
    return new RouterBfd6MultihopTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterBfd6Neighbor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_bfd6#interface RouterBfd6#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_bfd6#ip6_address RouterBfd6#ip6_address}
  */
  readonly ip6Address?: string;
}

export function routerBfd6NeighborToTerraform(struct?: RouterBfd6Neighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.stringToTerraform(struct!.interface),
    ip6_address: cdktf.stringToTerraform(struct!.ip6Address),
  }
}


export function routerBfd6NeighborToHclTerraform(struct?: RouterBfd6Neighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterBfd6NeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterBfd6Neighbor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._ip6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip6Address = this._ip6Address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterBfd6Neighbor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface = undefined;
      this._ip6Address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface = value.interface;
      this._ip6Address = value.ip6Address;
    }
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
}

export class RouterBfd6NeighborList extends cdktf.ComplexList {
  public internalValue? : RouterBfd6Neighbor[] | cdktf.IResolvable

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
  public get(index: number): RouterBfd6NeighborOutputReference {
    return new RouterBfd6NeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_bfd6 fortios_router_bfd6}
*/
export class RouterBfd6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_router_bfd6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterBfd6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterBfd6 to import
  * @param importFromId The id of the existing RouterBfd6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_bfd6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterBfd6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_router_bfd6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/router_bfd6 fortios_router_bfd6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterBfd6Config = {}
  */
  public constructor(scope: Construct, id: string, config: RouterBfd6Config = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_router_bfd6',
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
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._vdomparam = config.vdomparam;
    this._multihopTemplate.internalValue = config.multihopTemplate;
    this._neighbor.internalValue = config.neighbor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // vdomparam - computed: true, optional: true, required: false
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

  // multihop_template - computed: false, optional: true, required: false
  private _multihopTemplate = new RouterBfd6MultihopTemplateList(this, "multihop_template", false);
  public get multihopTemplate() {
    return this._multihopTemplate;
  }
  public putMultihopTemplate(value: RouterBfd6MultihopTemplate[] | cdktf.IResolvable) {
    this._multihopTemplate.internalValue = value;
  }
  public resetMultihopTemplate() {
    this._multihopTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multihopTemplateInput() {
    return this._multihopTemplate.internalValue;
  }

  // neighbor - computed: false, optional: true, required: false
  private _neighbor = new RouterBfd6NeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: RouterBfd6Neighbor[] | cdktf.IResolvable) {
    this._neighbor.internalValue = value;
  }
  public resetNeighbor() {
    this._neighbor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      multihop_template: cdktf.listMapper(routerBfd6MultihopTemplateToTerraform, true)(this._multihopTemplate.internalValue),
      neighbor: cdktf.listMapper(routerBfd6NeighborToTerraform, true)(this._neighbor.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multihop_template: {
        value: cdktf.listMapperHcl(routerBfd6MultihopTemplateToHclTerraform, true)(this._multihopTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBfd6MultihopTemplateList",
      },
      neighbor: {
        value: cdktf.listMapperHcl(routerBfd6NeighborToHclTerraform, true)(this._neighbor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterBfd6NeighborList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
