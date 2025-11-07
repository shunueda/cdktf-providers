// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_multicastflow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterMulticastflowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_multicastflow#comments RouterMulticastflow#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_multicastflow#dynamic_sort_subtable RouterMulticastflow#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_multicastflow#id RouterMulticastflow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_multicastflow#name RouterMulticastflow#name}
  */
  readonly name?: string;
  /**
  * flows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_multicastflow#flows RouterMulticastflow#flows}
  */
  readonly flows?: RouterMulticastflowFlows[] | cdktf.IResolvable;
}
export interface RouterMulticastflowFlows {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_multicastflow#group_addr RouterMulticastflow#group_addr}
  */
  readonly groupAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_multicastflow#group_addr_end RouterMulticastflow#group_addr_end}
  */
  readonly groupAddrEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_multicastflow#id RouterMulticastflow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_multicastflow#source_addr RouterMulticastflow#source_addr}
  */
  readonly sourceAddr?: string;
}

export function routerMulticastflowFlowsToTerraform(struct?: RouterMulticastflowFlows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_addr: cdktf.stringToTerraform(struct!.groupAddr),
    group_addr_end: cdktf.stringToTerraform(struct!.groupAddrEnd),
    id: cdktf.numberToTerraform(struct!.id),
    source_addr: cdktf.stringToTerraform(struct!.sourceAddr),
  }
}


export function routerMulticastflowFlowsToHclTerraform(struct?: RouterMulticastflowFlows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_addr: {
      value: cdktf.stringToHclTerraform(struct!.groupAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_addr_end: {
      value: cdktf.stringToHclTerraform(struct!.groupAddrEnd),
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
    source_addr: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterMulticastflowFlowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterMulticastflowFlows | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupAddr = this._groupAddr;
    }
    if (this._groupAddrEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupAddrEnd = this._groupAddrEnd;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._sourceAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddr = this._sourceAddr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterMulticastflowFlows | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupAddr = undefined;
      this._groupAddrEnd = undefined;
      this._id = undefined;
      this._sourceAddr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupAddr = value.groupAddr;
      this._groupAddrEnd = value.groupAddrEnd;
      this._id = value.id;
      this._sourceAddr = value.sourceAddr;
    }
  }

  // group_addr - computed: true, optional: true, required: false
  private _groupAddr?: string; 
  public get groupAddr() {
    return this.getStringAttribute('group_addr');
  }
  public set groupAddr(value: string) {
    this._groupAddr = value;
  }
  public resetGroupAddr() {
    this._groupAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAddrInput() {
    return this._groupAddr;
  }

  // group_addr_end - computed: true, optional: true, required: false
  private _groupAddrEnd?: string; 
  public get groupAddrEnd() {
    return this.getStringAttribute('group_addr_end');
  }
  public set groupAddrEnd(value: string) {
    this._groupAddrEnd = value;
  }
  public resetGroupAddrEnd() {
    this._groupAddrEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAddrEndInput() {
    return this._groupAddrEnd;
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

  // source_addr - computed: true, optional: true, required: false
  private _sourceAddr?: string; 
  public get sourceAddr() {
    return this.getStringAttribute('source_addr');
  }
  public set sourceAddr(value: string) {
    this._sourceAddr = value;
  }
  public resetSourceAddr() {
    this._sourceAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddrInput() {
    return this._sourceAddr;
  }
}

export class RouterMulticastflowFlowsList extends cdktf.ComplexList {
  public internalValue? : RouterMulticastflowFlows[] | cdktf.IResolvable

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
  public get(index: number): RouterMulticastflowFlowsOutputReference {
    return new RouterMulticastflowFlowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_multicastflow fortiswitch_router_multicastflow}
*/
export class RouterMulticastflow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_router_multicastflow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterMulticastflow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterMulticastflow to import
  * @param importFromId The id of the existing RouterMulticastflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_multicastflow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterMulticastflow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_router_multicastflow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/router_multicastflow fortiswitch_router_multicastflow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterMulticastflowConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterMulticastflowConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_router_multicastflow',
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
    this._name = config.name;
    this._flows.internalValue = config.flows;
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

  // flows - computed: false, optional: true, required: false
  private _flows = new RouterMulticastflowFlowsList(this, "flows", false);
  public get flows() {
    return this._flows;
  }
  public putFlows(value: RouterMulticastflowFlows[] | cdktf.IResolvable) {
    this._flows.internalValue = value;
  }
  public resetFlows() {
    this._flows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowsInput() {
    return this._flows.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comments: cdktf.stringToTerraform(this._comments),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      flows: cdktf.listMapper(routerMulticastflowFlowsToTerraform, true)(this._flows.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flows: {
        value: cdktf.listMapperHcl(routerMulticastflowFlowsToHclTerraform, true)(this._flows.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterMulticastflowFlowsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
