// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_fib_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderIpFibOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_fib_oper#id DataThunderIpFibOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_fib_oper#oper DataThunderIpFibOper#oper}
  */
  readonly oper?: DataThunderIpFibOperOper;
}
export interface DataThunderIpFibOperOperIpv4Fib {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_fib_oper#distance DataThunderIpFibOper#distance}
  */
  readonly distance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_fib_oper#interface DataThunderIpFibOper#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_fib_oper#nexthop DataThunderIpFibOper#nexthop}
  */
  readonly nexthop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_fib_oper#prefix DataThunderIpFibOper#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_fib_oper#prefixlen DataThunderIpFibOper#prefixlen}
  */
  readonly prefixlen?: number;
}

export function dataThunderIpFibOperOperIpv4FibToTerraform(struct?: DataThunderIpFibOperOperIpv4Fib | cdktf.IResolvable): any {
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


export function dataThunderIpFibOperOperIpv4FibToHclTerraform(struct?: DataThunderIpFibOperOperIpv4Fib | cdktf.IResolvable): any {
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

export class DataThunderIpFibOperOperIpv4FibOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderIpFibOperOperIpv4Fib | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderIpFibOperOperIpv4Fib | cdktf.IResolvable | undefined) {
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

export class DataThunderIpFibOperOperIpv4FibList extends cdktf.ComplexList {
  public internalValue? : DataThunderIpFibOperOperIpv4Fib[] | cdktf.IResolvable

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
  public get(index: number): DataThunderIpFibOperOperIpv4FibOutputReference {
    return new DataThunderIpFibOperOperIpv4FibOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderIpFibOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_fib_oper#total_paths DataThunderIpFibOper#total_paths}
  */
  readonly totalPaths?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_fib_oper#total_routes DataThunderIpFibOper#total_routes}
  */
  readonly totalRoutes?: number;
  /**
  * ipv4_fib block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_fib_oper#ipv4_fib DataThunderIpFibOper#ipv4_fib}
  */
  readonly ipv4Fib?: DataThunderIpFibOperOperIpv4Fib[] | cdktf.IResolvable;
}

export function dataThunderIpFibOperOperToTerraform(struct?: DataThunderIpFibOperOperOutputReference | DataThunderIpFibOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    total_paths: cdktf.numberToTerraform(struct!.totalPaths),
    total_routes: cdktf.numberToTerraform(struct!.totalRoutes),
    ipv4_fib: cdktf.listMapper(dataThunderIpFibOperOperIpv4FibToTerraform, true)(struct!.ipv4Fib),
  }
}


export function dataThunderIpFibOperOperToHclTerraform(struct?: DataThunderIpFibOperOperOutputReference | DataThunderIpFibOperOper): any {
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
    ipv4_fib: {
      value: cdktf.listMapperHcl(dataThunderIpFibOperOperIpv4FibToHclTerraform, true)(struct!.ipv4Fib),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderIpFibOperOperIpv4FibList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderIpFibOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderIpFibOperOper | undefined {
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
    if (this._ipv4Fib?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Fib = this._ipv4Fib?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderIpFibOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._totalPaths = undefined;
      this._totalRoutes = undefined;
      this._ipv4Fib.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._totalPaths = value.totalPaths;
      this._totalRoutes = value.totalRoutes;
      this._ipv4Fib.internalValue = value.ipv4Fib;
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

  // ipv4_fib - computed: false, optional: true, required: false
  private _ipv4Fib = new DataThunderIpFibOperOperIpv4FibList(this, "ipv4_fib", false);
  public get ipv4Fib() {
    return this._ipv4Fib;
  }
  public putIpv4Fib(value: DataThunderIpFibOperOperIpv4Fib[] | cdktf.IResolvable) {
    this._ipv4Fib.internalValue = value;
  }
  public resetIpv4Fib() {
    this._ipv4Fib.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibInput() {
    return this._ipv4Fib.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_fib_oper thunder_ip_fib_oper}
*/
export class DataThunderIpFibOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ip_fib_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderIpFibOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderIpFibOper to import
  * @param importFromId The id of the existing DataThunderIpFibOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_fib_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderIpFibOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ip_fib_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_fib_oper thunder_ip_fib_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderIpFibOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderIpFibOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ip_fib_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
  private _oper = new DataThunderIpFibOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderIpFibOperOper) {
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
      oper: dataThunderIpFibOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderIpFibOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderIpFibOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
