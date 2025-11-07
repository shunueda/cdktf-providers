// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_multicast
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterMulticastConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_multicast#comments RouterMulticast#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_multicast#dynamic_sort_subtable RouterMulticast#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_multicast#id RouterMulticast#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_multicast#multicast_routing RouterMulticast#multicast_routing}
  */
  readonly multicastRouting?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_multicast#interface RouterMulticast#interface}
  */
  readonly interface?: RouterMulticastInterface[] | cdktf.IResolvable;
}
export interface RouterMulticastInterfaceIgmp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_multicast#query_interval RouterMulticast#query_interval}
  */
  readonly queryInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_multicast#query_max_response_time RouterMulticast#query_max_response_time}
  */
  readonly queryMaxResponseTime?: number;
}

export function routerMulticastInterfaceIgmpToTerraform(struct?: RouterMulticastInterfaceIgmpOutputReference | RouterMulticastInterfaceIgmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_interval: cdktf.numberToTerraform(struct!.queryInterval),
    query_max_response_time: cdktf.numberToTerraform(struct!.queryMaxResponseTime),
  }
}


export function routerMulticastInterfaceIgmpToHclTerraform(struct?: RouterMulticastInterfaceIgmpOutputReference | RouterMulticastInterfaceIgmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query_interval: {
      value: cdktf.numberToHclTerraform(struct!.queryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_max_response_time: {
      value: cdktf.numberToHclTerraform(struct!.queryMaxResponseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterMulticastInterfaceIgmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouterMulticastInterfaceIgmp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryInterval = this._queryInterval;
    }
    if (this._queryMaxResponseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryMaxResponseTime = this._queryMaxResponseTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterMulticastInterfaceIgmp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queryInterval = undefined;
      this._queryMaxResponseTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queryInterval = value.queryInterval;
      this._queryMaxResponseTime = value.queryMaxResponseTime;
    }
  }

  // query_interval - computed: true, optional: true, required: false
  private _queryInterval?: number; 
  public get queryInterval() {
    return this.getNumberAttribute('query_interval');
  }
  public set queryInterval(value: number) {
    this._queryInterval = value;
  }
  public resetQueryInterval() {
    this._queryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIntervalInput() {
    return this._queryInterval;
  }

  // query_max_response_time - computed: true, optional: true, required: false
  private _queryMaxResponseTime?: number; 
  public get queryMaxResponseTime() {
    return this.getNumberAttribute('query_max_response_time');
  }
  public set queryMaxResponseTime(value: number) {
    this._queryMaxResponseTime = value;
  }
  public resetQueryMaxResponseTime() {
    this._queryMaxResponseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryMaxResponseTimeInput() {
    return this._queryMaxResponseTime;
  }
}
export interface RouterMulticastInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_multicast#dr_priority RouterMulticast#dr_priority}
  */
  readonly drPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_multicast#hello_interval RouterMulticast#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_multicast#multicast_flow RouterMulticast#multicast_flow}
  */
  readonly multicastFlow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_multicast#name RouterMulticast#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_multicast#pim_mode RouterMulticast#pim_mode}
  */
  readonly pimMode?: string;
  /**
  * igmp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_multicast#igmp RouterMulticast#igmp}
  */
  readonly igmp?: RouterMulticastInterfaceIgmp;
}

export function routerMulticastInterfaceToTerraform(struct?: RouterMulticastInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dr_priority: cdktf.numberToTerraform(struct!.drPriority),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    multicast_flow: cdktf.stringToTerraform(struct!.multicastFlow),
    name: cdktf.stringToTerraform(struct!.name),
    pim_mode: cdktf.stringToTerraform(struct!.pimMode),
    igmp: routerMulticastInterfaceIgmpToTerraform(struct!.igmp),
  }
}


export function routerMulticastInterfaceToHclTerraform(struct?: RouterMulticastInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dr_priority: {
      value: cdktf.numberToHclTerraform(struct!.drPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multicast_flow: {
      value: cdktf.stringToHclTerraform(struct!.multicastFlow),
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
    pim_mode: {
      value: cdktf.stringToHclTerraform(struct!.pimMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    igmp: {
      value: routerMulticastInterfaceIgmpToHclTerraform(struct!.igmp),
      isBlock: true,
      type: "list",
      storageClassType: "RouterMulticastInterfaceIgmpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterMulticastInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterMulticastInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.drPriority = this._drPriority;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._multicastFlow !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicastFlow = this._multicastFlow;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pimMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pimMode = this._pimMode;
    }
    if (this._igmp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.igmp = this._igmp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterMulticastInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._drPriority = undefined;
      this._helloInterval = undefined;
      this._multicastFlow = undefined;
      this._name = undefined;
      this._pimMode = undefined;
      this._igmp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._drPriority = value.drPriority;
      this._helloInterval = value.helloInterval;
      this._multicastFlow = value.multicastFlow;
      this._name = value.name;
      this._pimMode = value.pimMode;
      this._igmp.internalValue = value.igmp;
    }
  }

  // dr_priority - computed: true, optional: true, required: false
  private _drPriority?: number; 
  public get drPriority() {
    return this.getNumberAttribute('dr_priority');
  }
  public set drPriority(value: number) {
    this._drPriority = value;
  }
  public resetDrPriority() {
    this._drPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drPriorityInput() {
    return this._drPriority;
  }

  // hello_interval - computed: true, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
  }

  // multicast_flow - computed: true, optional: true, required: false
  private _multicastFlow?: string; 
  public get multicastFlow() {
    return this.getStringAttribute('multicast_flow');
  }
  public set multicastFlow(value: string) {
    this._multicastFlow = value;
  }
  public resetMulticastFlow() {
    this._multicastFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastFlowInput() {
    return this._multicastFlow;
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

  // pim_mode - computed: true, optional: true, required: false
  private _pimMode?: string; 
  public get pimMode() {
    return this.getStringAttribute('pim_mode');
  }
  public set pimMode(value: string) {
    this._pimMode = value;
  }
  public resetPimMode() {
    this._pimMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pimModeInput() {
    return this._pimMode;
  }

  // igmp - computed: false, optional: true, required: false
  private _igmp = new RouterMulticastInterfaceIgmpOutputReference(this, "igmp");
  public get igmp() {
    return this._igmp;
  }
  public putIgmp(value: RouterMulticastInterfaceIgmp) {
    this._igmp.internalValue = value;
  }
  public resetIgmp() {
    this._igmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpInput() {
    return this._igmp.internalValue;
  }
}

export class RouterMulticastInterfaceList extends cdktf.ComplexList {
  public internalValue? : RouterMulticastInterface[] | cdktf.IResolvable

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
  public get(index: number): RouterMulticastInterfaceOutputReference {
    return new RouterMulticastInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_multicast fortiswitch_router_multicast}
*/
export class RouterMulticast extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_router_multicast";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterMulticast resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterMulticast to import
  * @param importFromId The id of the existing RouterMulticast that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_multicast#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterMulticast to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_router_multicast", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_multicast fortiswitch_router_multicast} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterMulticastConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterMulticastConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_router_multicast',
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
    this._comments = config.comments;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._id = config.id;
    this._multicastRouting = config.multicastRouting;
    this._interface.internalValue = config.interface;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comments - computed: true, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
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

  // multicast_routing - computed: true, optional: true, required: false
  private _multicastRouting?: string; 
  public get multicastRouting() {
    return this.getStringAttribute('multicast_routing');
  }
  public set multicastRouting(value: string) {
    this._multicastRouting = value;
  }
  public resetMulticastRouting() {
    this._multicastRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastRoutingInput() {
    return this._multicastRouting;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new RouterMulticastInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: RouterMulticastInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comments: cdktf.stringToTerraform(this._comments),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      multicast_routing: cdktf.stringToTerraform(this._multicastRouting),
      interface: cdktf.listMapper(routerMulticastInterfaceToTerraform, true)(this._interface.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
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
      multicast_routing: {
        value: cdktf.stringToHclTerraform(this._multicastRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.listMapperHcl(routerMulticastInterfaceToHclTerraform, true)(this._interface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterMulticastInterfaceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
