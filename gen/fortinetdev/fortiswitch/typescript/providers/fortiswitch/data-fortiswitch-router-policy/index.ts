// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/router_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiswitchRouterPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/router_policy#id DataFortiswitchRouterPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/router_policy#seq_num DataFortiswitchRouterPolicy#seq_num}
  */
  readonly seqNum: number;
}
export interface DataFortiswitchRouterPolicyInterface {
}

export function dataFortiswitchRouterPolicyInterfaceToTerraform(struct?: DataFortiswitchRouterPolicyInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchRouterPolicyInterfaceToHclTerraform(struct?: DataFortiswitchRouterPolicyInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchRouterPolicyInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiswitchRouterPolicyInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchRouterPolicyInterface | undefined) {
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

  // pbr_map_name - computed: true, optional: false, required: false
  public get pbrMapName() {
    return this.getStringAttribute('pbr_map_name');
  }
}

export class DataFortiswitchRouterPolicyInterfaceList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchRouterPolicyInterfaceOutputReference {
    return new DataFortiswitchRouterPolicyInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiswitchRouterPolicyNexthopGroupNexthop {
}

export function dataFortiswitchRouterPolicyNexthopGroupNexthopToTerraform(struct?: DataFortiswitchRouterPolicyNexthopGroupNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchRouterPolicyNexthopGroupNexthopToHclTerraform(struct?: DataFortiswitchRouterPolicyNexthopGroupNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchRouterPolicyNexthopGroupNexthopOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiswitchRouterPolicyNexthopGroupNexthop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchRouterPolicyNexthopGroupNexthop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // nexthop_ip - computed: true, optional: false, required: false
  public get nexthopIp() {
    return this.getStringAttribute('nexthop_ip');
  }

  // nexthop_vrf_name - computed: true, optional: false, required: false
  public get nexthopVrfName() {
    return this.getStringAttribute('nexthop_vrf_name');
  }
}

export class DataFortiswitchRouterPolicyNexthopGroupNexthopList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchRouterPolicyNexthopGroupNexthopOutputReference {
    return new DataFortiswitchRouterPolicyNexthopGroupNexthopOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiswitchRouterPolicyNexthopGroup {
}

export function dataFortiswitchRouterPolicyNexthopGroupToTerraform(struct?: DataFortiswitchRouterPolicyNexthopGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchRouterPolicyNexthopGroupToHclTerraform(struct?: DataFortiswitchRouterPolicyNexthopGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchRouterPolicyNexthopGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiswitchRouterPolicyNexthopGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchRouterPolicyNexthopGroup | undefined) {
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

  // nexthop - computed: true, optional: false, required: false
  private _nexthop = new DataFortiswitchRouterPolicyNexthopGroupNexthopList(this, "nexthop", false);
  public get nexthop() {
    return this._nexthop;
  }
}

export class DataFortiswitchRouterPolicyNexthopGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchRouterPolicyNexthopGroupOutputReference {
    return new DataFortiswitchRouterPolicyNexthopGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiswitchRouterPolicyPbrMapRule {
}

export function dataFortiswitchRouterPolicyPbrMapRuleToTerraform(struct?: DataFortiswitchRouterPolicyPbrMapRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchRouterPolicyPbrMapRuleToHclTerraform(struct?: DataFortiswitchRouterPolicyPbrMapRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchRouterPolicyPbrMapRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiswitchRouterPolicyPbrMapRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchRouterPolicyPbrMapRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dst - computed: true, optional: false, required: false
  public get dst() {
    return this.getStringAttribute('dst');
  }

  // nexthop_group_name - computed: true, optional: false, required: false
  public get nexthopGroupName() {
    return this.getStringAttribute('nexthop_group_name');
  }

  // nexthop_ip - computed: true, optional: false, required: false
  public get nexthopIp() {
    return this.getStringAttribute('nexthop_ip');
  }

  // nexthop_vrf_name - computed: true, optional: false, required: false
  public get nexthopVrfName() {
    return this.getStringAttribute('nexthop_vrf_name');
  }

  // seq_num - computed: true, optional: false, required: false
  public get seqNum() {
    return this.getNumberAttribute('seq_num');
  }

  // src - computed: true, optional: false, required: false
  public get src() {
    return this.getStringAttribute('src');
  }
}

export class DataFortiswitchRouterPolicyPbrMapRuleList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchRouterPolicyPbrMapRuleOutputReference {
    return new DataFortiswitchRouterPolicyPbrMapRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiswitchRouterPolicyPbrMap {
}

export function dataFortiswitchRouterPolicyPbrMapToTerraform(struct?: DataFortiswitchRouterPolicyPbrMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchRouterPolicyPbrMapToHclTerraform(struct?: DataFortiswitchRouterPolicyPbrMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchRouterPolicyPbrMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiswitchRouterPolicyPbrMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchRouterPolicyPbrMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // rule - computed: true, optional: false, required: false
  private _rule = new DataFortiswitchRouterPolicyPbrMapRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
}

export class DataFortiswitchRouterPolicyPbrMapList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchRouterPolicyPbrMapOutputReference {
    return new DataFortiswitchRouterPolicyPbrMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/router_policy fortiswitch_router_policy}
*/
export class DataFortiswitchRouterPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_router_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiswitchRouterPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiswitchRouterPolicy to import
  * @param importFromId The id of the existing DataFortiswitchRouterPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/router_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiswitchRouterPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_router_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/router_policy fortiswitch_router_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiswitchRouterPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiswitchRouterPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_router_policy',
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
    this._id = config.id;
    this._seqNum = config.seqNum;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // dst - computed: true, optional: false, required: false
  public get dst() {
    return this.getStringAttribute('dst');
  }

  // end_port - computed: true, optional: false, required: false
  public get endPort() {
    return this.getNumberAttribute('end_port');
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

  // input_device - computed: true, optional: false, required: false
  public get inputDevice() {
    return this.getStringAttribute('input_device');
  }

  // interface - computed: true, optional: false, required: false
  private _interface = new DataFortiswitchRouterPolicyInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }

  // nexthop_group - computed: true, optional: false, required: false
  private _nexthopGroup = new DataFortiswitchRouterPolicyNexthopGroupList(this, "nexthop_group", false);
  public get nexthopGroup() {
    return this._nexthopGroup;
  }

  // output_device - computed: true, optional: false, required: false
  public get outputDevice() {
    return this.getStringAttribute('output_device');
  }

  // pbr_map - computed: true, optional: false, required: false
  private _pbrMap = new DataFortiswitchRouterPolicyPbrMapList(this, "pbr_map", false);
  public get pbrMap() {
    return this._pbrMap;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getNumberAttribute('protocol');
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

  // src - computed: true, optional: false, required: false
  public get src() {
    return this.getStringAttribute('src');
  }

  // start_port - computed: true, optional: false, required: false
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }

  // tos - computed: true, optional: false, required: false
  public get tos() {
    return this.getStringAttribute('tos');
  }

  // tos_mask - computed: true, optional: false, required: false
  public get tosMask() {
    return this.getStringAttribute('tos_mask');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      seq_num: cdktf.numberToTerraform(this._seqNum),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
