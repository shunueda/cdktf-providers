// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_fib_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderIpv6FibOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_fib_oper#id DataThunderIpv6FibOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_fib_oper#oper DataThunderIpv6FibOper#oper}
  */
  readonly oper?: DataThunderIpv6FibOperOper;
}
export interface DataThunderIpv6FibOperOperIpv6Fib {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_fib_oper#distance DataThunderIpv6FibOper#distance}
  */
  readonly distance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_fib_oper#interface DataThunderIpv6FibOper#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_fib_oper#nexthop DataThunderIpv6FibOper#nexthop}
  */
  readonly nexthop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_fib_oper#prefix DataThunderIpv6FibOper#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_fib_oper#prefixlen DataThunderIpv6FibOper#prefixlen}
  */
  readonly prefixlen?: number;
}

export function dataThunderIpv6FibOperOperIpv6FibToTerraform(struct?: DataThunderIpv6FibOperOperIpv6Fib | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distance: cdktf.numberToTerraform(struct!.distance),
    interface: cdktf.stringToTerraform(struct!.interface),
    nexthop: cdktf.stringToTerraform(struct!.nexthop),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    prefixlen: cdktf.numberToTerraform(struct!.prefixlen),
  }
}


export function dataThunderIpv6FibOperOperIpv6FibToHclTerraform(struct?: DataThunderIpv6FibOperOperIpv6Fib | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distance: {
      value: cdktf.numberToHclTerraform(struct!.distance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nexthop: {
      value: cdktf.stringToHclTerraform(struct!.nexthop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefixlen: {
      value: cdktf.numberToHclTerraform(struct!.prefixlen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderIpv6FibOperOperIpv6FibOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderIpv6FibOperOperIpv6Fib | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distance !== undefined) {
      hasAnyValues = true;
      internalValueResult.distance = this._distance;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._nexthop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthop = this._nexthop;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._prefixlen !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixlen = this._prefixlen;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderIpv6FibOperOperIpv6Fib | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distance = undefined;
      this._interface = undefined;
      this._nexthop = undefined;
      this._prefix = undefined;
      this._prefixlen = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distance = value.distance;
      this._interface = value.interface;
      this._nexthop = value.nexthop;
      this._prefix = value.prefix;
      this._prefixlen = value.prefixlen;
    }
  }

  // distance - computed: false, optional: true, required: false
  private _distance?: number; 
  public get distance() {
    return this.getNumberAttribute('distance');
  }
  public set distance(value: number) {
    this._distance = value;
  }
  public resetDistance() {
    this._distance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance;
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

  // nexthop - computed: false, optional: true, required: false
  private _nexthop?: string; 
  public get nexthop() {
    return this.getStringAttribute('nexthop');
  }
  public set nexthop(value: string) {
    this._nexthop = value;
  }
  public resetNexthop() {
    this._nexthop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // prefixlen - computed: false, optional: true, required: false
  private _prefixlen?: number; 
  public get prefixlen() {
    return this.getNumberAttribute('prefixlen');
  }
  public set prefixlen(value: number) {
    this._prefixlen = value;
  }
  public resetPrefixlen() {
    this._prefixlen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixlenInput() {
    return this._prefixlen;
  }
}

export class DataThunderIpv6FibOperOperIpv6FibList extends cdktf.ComplexList {
  public internalValue? : DataThunderIpv6FibOperOperIpv6Fib[] | cdktf.IResolvable

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
  public get(index: number): DataThunderIpv6FibOperOperIpv6FibOutputReference {
    return new DataThunderIpv6FibOperOperIpv6FibOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderIpv6FibOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_fib_oper#total_paths DataThunderIpv6FibOper#total_paths}
  */
  readonly totalPaths?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_fib_oper#total_routes DataThunderIpv6FibOper#total_routes}
  */
  readonly totalRoutes?: number;
  /**
  * ipv6_fib block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_fib_oper#ipv6_fib DataThunderIpv6FibOper#ipv6_fib}
  */
  readonly ipv6Fib?: DataThunderIpv6FibOperOperIpv6Fib[] | cdktf.IResolvable;
}

export function dataThunderIpv6FibOperOperToTerraform(struct?: DataThunderIpv6FibOperOperOutputReference | DataThunderIpv6FibOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    total_paths: cdktf.numberToTerraform(struct!.totalPaths),
    total_routes: cdktf.numberToTerraform(struct!.totalRoutes),
    ipv6_fib: cdktf.listMapper(dataThunderIpv6FibOperOperIpv6FibToTerraform, true)(struct!.ipv6Fib),
  }
}


export function dataThunderIpv6FibOperOperToHclTerraform(struct?: DataThunderIpv6FibOperOperOutputReference | DataThunderIpv6FibOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    total_paths: {
      value: cdktf.numberToHclTerraform(struct!.totalPaths),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_routes: {
      value: cdktf.numberToHclTerraform(struct!.totalRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib: {
      value: cdktf.listMapperHcl(dataThunderIpv6FibOperOperIpv6FibToHclTerraform, true)(struct!.ipv6Fib),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderIpv6FibOperOperIpv6FibList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderIpv6FibOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderIpv6FibOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._totalPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalPaths = this._totalPaths;
    }
    if (this._totalRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalRoutes = this._totalRoutes;
    }
    if (this._ipv6Fib?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Fib = this._ipv6Fib?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderIpv6FibOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._totalPaths = undefined;
      this._totalRoutes = undefined;
      this._ipv6Fib.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._totalPaths = value.totalPaths;
      this._totalRoutes = value.totalRoutes;
      this._ipv6Fib.internalValue = value.ipv6Fib;
    }
  }

  // total_paths - computed: false, optional: true, required: false
  private _totalPaths?: number; 
  public get totalPaths() {
    return this.getNumberAttribute('total_paths');
  }
  public set totalPaths(value: number) {
    this._totalPaths = value;
  }
  public resetTotalPaths() {
    this._totalPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalPathsInput() {
    return this._totalPaths;
  }

  // total_routes - computed: false, optional: true, required: false
  private _totalRoutes?: number; 
  public get totalRoutes() {
    return this.getNumberAttribute('total_routes');
  }
  public set totalRoutes(value: number) {
    this._totalRoutes = value;
  }
  public resetTotalRoutes() {
    this._totalRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRoutesInput() {
    return this._totalRoutes;
  }

  // ipv6_fib - computed: false, optional: true, required: false
  private _ipv6Fib = new DataThunderIpv6FibOperOperIpv6FibList(this, "ipv6_fib", false);
  public get ipv6Fib() {
    return this._ipv6Fib;
  }
  public putIpv6Fib(value: DataThunderIpv6FibOperOperIpv6Fib[] | cdktf.IResolvable) {
    this._ipv6Fib.internalValue = value;
  }
  public resetIpv6Fib() {
    this._ipv6Fib.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibInput() {
    return this._ipv6Fib.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_fib_oper thunder_ipv6_fib_oper}
*/
export class DataThunderIpv6FibOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ipv6_fib_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderIpv6FibOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderIpv6FibOper to import
  * @param importFromId The id of the existing DataThunderIpv6FibOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_fib_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderIpv6FibOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ipv6_fib_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_fib_oper thunder_ipv6_fib_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderIpv6FibOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderIpv6FibOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ipv6_fib_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._oper.internalValue = config.oper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderIpv6FibOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderIpv6FibOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderIpv6FibOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderIpv6FibOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderIpv6FibOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
