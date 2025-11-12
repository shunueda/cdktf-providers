// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_fib_summary_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderIpv6FibSummaryOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_fib_summary_oper#id DataThunderIpv6FibSummaryOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_fib_summary_oper#oper DataThunderIpv6FibSummaryOper#oper}
  */
  readonly oper?: DataThunderIpv6FibSummaryOperOper;
}
export interface DataThunderIpv6FibSummaryOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_fib_summary_oper#connected_routes DataThunderIpv6FibSummaryOper#connected_routes}
  */
  readonly connectedRoutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_fib_summary_oper#static_dynamic_paths DataThunderIpv6FibSummaryOper#static_dynamic_paths}
  */
  readonly staticDynamicPaths?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_fib_summary_oper#static_dynamic_routes DataThunderIpv6FibSummaryOper#static_dynamic_routes}
  */
  readonly staticDynamicRoutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_fib_summary_oper#total_paths DataThunderIpv6FibSummaryOper#total_paths}
  */
  readonly totalPaths?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_fib_summary_oper#total_routes DataThunderIpv6FibSummaryOper#total_routes}
  */
  readonly totalRoutes?: number;
}

export function dataThunderIpv6FibSummaryOperOperToTerraform(struct?: DataThunderIpv6FibSummaryOperOperOutputReference | DataThunderIpv6FibSummaryOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connected_routes: cdktf.numberToTerraform(struct!.connectedRoutes),
    static_dynamic_paths: cdktf.numberToTerraform(struct!.staticDynamicPaths),
    static_dynamic_routes: cdktf.numberToTerraform(struct!.staticDynamicRoutes),
    total_paths: cdktf.numberToTerraform(struct!.totalPaths),
    total_routes: cdktf.numberToTerraform(struct!.totalRoutes),
  }
}


export function dataThunderIpv6FibSummaryOperOperToHclTerraform(struct?: DataThunderIpv6FibSummaryOperOperOutputReference | DataThunderIpv6FibSummaryOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connected_routes: {
      value: cdktf.numberToHclTerraform(struct!.connectedRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_dynamic_paths: {
      value: cdktf.numberToHclTerraform(struct!.staticDynamicPaths),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_dynamic_routes: {
      value: cdktf.numberToHclTerraform(struct!.staticDynamicRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderIpv6FibSummaryOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderIpv6FibSummaryOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectedRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectedRoutes = this._connectedRoutes;
    }
    if (this._staticDynamicPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticDynamicPaths = this._staticDynamicPaths;
    }
    if (this._staticDynamicRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticDynamicRoutes = this._staticDynamicRoutes;
    }
    if (this._totalPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalPaths = this._totalPaths;
    }
    if (this._totalRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalRoutes = this._totalRoutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderIpv6FibSummaryOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectedRoutes = undefined;
      this._staticDynamicPaths = undefined;
      this._staticDynamicRoutes = undefined;
      this._totalPaths = undefined;
      this._totalRoutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectedRoutes = value.connectedRoutes;
      this._staticDynamicPaths = value.staticDynamicPaths;
      this._staticDynamicRoutes = value.staticDynamicRoutes;
      this._totalPaths = value.totalPaths;
      this._totalRoutes = value.totalRoutes;
    }
  }

  // connected_routes - computed: false, optional: true, required: false
  private _connectedRoutes?: number; 
  public get connectedRoutes() {
    return this.getNumberAttribute('connected_routes');
  }
  public set connectedRoutes(value: number) {
    this._connectedRoutes = value;
  }
  public resetConnectedRoutes() {
    this._connectedRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedRoutesInput() {
    return this._connectedRoutes;
  }

  // static_dynamic_paths - computed: false, optional: true, required: false
  private _staticDynamicPaths?: number; 
  public get staticDynamicPaths() {
    return this.getNumberAttribute('static_dynamic_paths');
  }
  public set staticDynamicPaths(value: number) {
    this._staticDynamicPaths = value;
  }
  public resetStaticDynamicPaths() {
    this._staticDynamicPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticDynamicPathsInput() {
    return this._staticDynamicPaths;
  }

  // static_dynamic_routes - computed: false, optional: true, required: false
  private _staticDynamicRoutes?: number; 
  public get staticDynamicRoutes() {
    return this.getNumberAttribute('static_dynamic_routes');
  }
  public set staticDynamicRoutes(value: number) {
    this._staticDynamicRoutes = value;
  }
  public resetStaticDynamicRoutes() {
    this._staticDynamicRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticDynamicRoutesInput() {
    return this._staticDynamicRoutes;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_fib_summary_oper thunder_ipv6_fib_summary_oper}
*/
export class DataThunderIpv6FibSummaryOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ipv6_fib_summary_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderIpv6FibSummaryOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderIpv6FibSummaryOper to import
  * @param importFromId The id of the existing DataThunderIpv6FibSummaryOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_fib_summary_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderIpv6FibSummaryOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ipv6_fib_summary_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ipv6_fib_summary_oper thunder_ipv6_fib_summary_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderIpv6FibSummaryOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderIpv6FibSummaryOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ipv6_fib_summary_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
  private _oper = new DataThunderIpv6FibSummaryOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderIpv6FibSummaryOperOper) {
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
      oper: dataThunderIpv6FibSummaryOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderIpv6FibSummaryOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderIpv6FibSummaryOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
