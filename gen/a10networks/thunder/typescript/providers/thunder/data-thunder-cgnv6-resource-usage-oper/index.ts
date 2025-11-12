// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_resource_usage_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6ResourceUsageOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_resource_usage_oper#id DataThunderCgnv6ResourceUsageOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_resource_usage_oper#oper DataThunderCgnv6ResourceUsageOper#oper}
  */
  readonly oper?: DataThunderCgnv6ResourceUsageOperOper;
}
export interface DataThunderCgnv6ResourceUsageOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_resource_usage_oper#fixed_nat_inside_user_count_default DataThunderCgnv6ResourceUsageOper#fixed_nat_inside_user_count_default}
  */
  readonly fixedNatInsideUserCountDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_resource_usage_oper#fixed_nat_inside_user_count_max DataThunderCgnv6ResourceUsageOper#fixed_nat_inside_user_count_max}
  */
  readonly fixedNatInsideUserCountMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_resource_usage_oper#fixed_nat_inside_user_count_min DataThunderCgnv6ResourceUsageOper#fixed_nat_inside_user_count_min}
  */
  readonly fixedNatInsideUserCountMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_resource_usage_oper#fixed_nat_ip_addr_count_default DataThunderCgnv6ResourceUsageOper#fixed_nat_ip_addr_count_default}
  */
  readonly fixedNatIpAddrCountDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_resource_usage_oper#fixed_nat_ip_addr_count_max DataThunderCgnv6ResourceUsageOper#fixed_nat_ip_addr_count_max}
  */
  readonly fixedNatIpAddrCountMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_resource_usage_oper#fixed_nat_ip_addr_count_min DataThunderCgnv6ResourceUsageOper#fixed_nat_ip_addr_count_min}
  */
  readonly fixedNatIpAddrCountMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_resource_usage_oper#lsn_nat_addr_count_default DataThunderCgnv6ResourceUsageOper#lsn_nat_addr_count_default}
  */
  readonly lsnNatAddrCountDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_resource_usage_oper#lsn_nat_addr_count_max DataThunderCgnv6ResourceUsageOper#lsn_nat_addr_count_max}
  */
  readonly lsnNatAddrCountMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_resource_usage_oper#lsn_nat_addr_count_min DataThunderCgnv6ResourceUsageOper#lsn_nat_addr_count_min}
  */
  readonly lsnNatAddrCountMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_resource_usage_oper#radius_table_size_default DataThunderCgnv6ResourceUsageOper#radius_table_size_default}
  */
  readonly radiusTableSizeDefault?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_resource_usage_oper#radius_table_size_max DataThunderCgnv6ResourceUsageOper#radius_table_size_max}
  */
  readonly radiusTableSizeMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_resource_usage_oper#radius_table_size_min DataThunderCgnv6ResourceUsageOper#radius_table_size_min}
  */
  readonly radiusTableSizeMin?: number;
}

export function dataThunderCgnv6ResourceUsageOperOperToTerraform(struct?: DataThunderCgnv6ResourceUsageOperOperOutputReference | DataThunderCgnv6ResourceUsageOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_nat_inside_user_count_default: cdktf.numberToTerraform(struct!.fixedNatInsideUserCountDefault),
    fixed_nat_inside_user_count_max: cdktf.numberToTerraform(struct!.fixedNatInsideUserCountMax),
    fixed_nat_inside_user_count_min: cdktf.numberToTerraform(struct!.fixedNatInsideUserCountMin),
    fixed_nat_ip_addr_count_default: cdktf.numberToTerraform(struct!.fixedNatIpAddrCountDefault),
    fixed_nat_ip_addr_count_max: cdktf.numberToTerraform(struct!.fixedNatIpAddrCountMax),
    fixed_nat_ip_addr_count_min: cdktf.numberToTerraform(struct!.fixedNatIpAddrCountMin),
    lsn_nat_addr_count_default: cdktf.numberToTerraform(struct!.lsnNatAddrCountDefault),
    lsn_nat_addr_count_max: cdktf.numberToTerraform(struct!.lsnNatAddrCountMax),
    lsn_nat_addr_count_min: cdktf.numberToTerraform(struct!.lsnNatAddrCountMin),
    radius_table_size_default: cdktf.numberToTerraform(struct!.radiusTableSizeDefault),
    radius_table_size_max: cdktf.numberToTerraform(struct!.radiusTableSizeMax),
    radius_table_size_min: cdktf.numberToTerraform(struct!.radiusTableSizeMin),
  }
}


export function dataThunderCgnv6ResourceUsageOperOperToHclTerraform(struct?: DataThunderCgnv6ResourceUsageOperOperOutputReference | DataThunderCgnv6ResourceUsageOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_nat_inside_user_count_default: {
      value: cdktf.numberToHclTerraform(struct!.fixedNatInsideUserCountDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_nat_inside_user_count_max: {
      value: cdktf.numberToHclTerraform(struct!.fixedNatInsideUserCountMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_nat_inside_user_count_min: {
      value: cdktf.numberToHclTerraform(struct!.fixedNatInsideUserCountMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_nat_ip_addr_count_default: {
      value: cdktf.numberToHclTerraform(struct!.fixedNatIpAddrCountDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_nat_ip_addr_count_max: {
      value: cdktf.numberToHclTerraform(struct!.fixedNatIpAddrCountMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_nat_ip_addr_count_min: {
      value: cdktf.numberToHclTerraform(struct!.fixedNatIpAddrCountMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lsn_nat_addr_count_default: {
      value: cdktf.numberToHclTerraform(struct!.lsnNatAddrCountDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lsn_nat_addr_count_max: {
      value: cdktf.numberToHclTerraform(struct!.lsnNatAddrCountMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lsn_nat_addr_count_min: {
      value: cdktf.numberToHclTerraform(struct!.lsnNatAddrCountMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_table_size_default: {
      value: cdktf.numberToHclTerraform(struct!.radiusTableSizeDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_table_size_max: {
      value: cdktf.numberToHclTerraform(struct!.radiusTableSizeMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_table_size_min: {
      value: cdktf.numberToHclTerraform(struct!.radiusTableSizeMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6ResourceUsageOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6ResourceUsageOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedNatInsideUserCountDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedNatInsideUserCountDefault = this._fixedNatInsideUserCountDefault;
    }
    if (this._fixedNatInsideUserCountMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedNatInsideUserCountMax = this._fixedNatInsideUserCountMax;
    }
    if (this._fixedNatInsideUserCountMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedNatInsideUserCountMin = this._fixedNatInsideUserCountMin;
    }
    if (this._fixedNatIpAddrCountDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedNatIpAddrCountDefault = this._fixedNatIpAddrCountDefault;
    }
    if (this._fixedNatIpAddrCountMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedNatIpAddrCountMax = this._fixedNatIpAddrCountMax;
    }
    if (this._fixedNatIpAddrCountMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedNatIpAddrCountMin = this._fixedNatIpAddrCountMin;
    }
    if (this._lsnNatAddrCountDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsnNatAddrCountDefault = this._lsnNatAddrCountDefault;
    }
    if (this._lsnNatAddrCountMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsnNatAddrCountMax = this._lsnNatAddrCountMax;
    }
    if (this._lsnNatAddrCountMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsnNatAddrCountMin = this._lsnNatAddrCountMin;
    }
    if (this._radiusTableSizeDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusTableSizeDefault = this._radiusTableSizeDefault;
    }
    if (this._radiusTableSizeMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusTableSizeMax = this._radiusTableSizeMax;
    }
    if (this._radiusTableSizeMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusTableSizeMin = this._radiusTableSizeMin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6ResourceUsageOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixedNatInsideUserCountDefault = undefined;
      this._fixedNatInsideUserCountMax = undefined;
      this._fixedNatInsideUserCountMin = undefined;
      this._fixedNatIpAddrCountDefault = undefined;
      this._fixedNatIpAddrCountMax = undefined;
      this._fixedNatIpAddrCountMin = undefined;
      this._lsnNatAddrCountDefault = undefined;
      this._lsnNatAddrCountMax = undefined;
      this._lsnNatAddrCountMin = undefined;
      this._radiusTableSizeDefault = undefined;
      this._radiusTableSizeMax = undefined;
      this._radiusTableSizeMin = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixedNatInsideUserCountDefault = value.fixedNatInsideUserCountDefault;
      this._fixedNatInsideUserCountMax = value.fixedNatInsideUserCountMax;
      this._fixedNatInsideUserCountMin = value.fixedNatInsideUserCountMin;
      this._fixedNatIpAddrCountDefault = value.fixedNatIpAddrCountDefault;
      this._fixedNatIpAddrCountMax = value.fixedNatIpAddrCountMax;
      this._fixedNatIpAddrCountMin = value.fixedNatIpAddrCountMin;
      this._lsnNatAddrCountDefault = value.lsnNatAddrCountDefault;
      this._lsnNatAddrCountMax = value.lsnNatAddrCountMax;
      this._lsnNatAddrCountMin = value.lsnNatAddrCountMin;
      this._radiusTableSizeDefault = value.radiusTableSizeDefault;
      this._radiusTableSizeMax = value.radiusTableSizeMax;
      this._radiusTableSizeMin = value.radiusTableSizeMin;
    }
  }

  // fixed_nat_inside_user_count_default - computed: false, optional: true, required: false
  private _fixedNatInsideUserCountDefault?: number; 
  public get fixedNatInsideUserCountDefault() {
    return this.getNumberAttribute('fixed_nat_inside_user_count_default');
  }
  public set fixedNatInsideUserCountDefault(value: number) {
    this._fixedNatInsideUserCountDefault = value;
  }
  public resetFixedNatInsideUserCountDefault() {
    this._fixedNatInsideUserCountDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNatInsideUserCountDefaultInput() {
    return this._fixedNatInsideUserCountDefault;
  }

  // fixed_nat_inside_user_count_max - computed: false, optional: true, required: false
  private _fixedNatInsideUserCountMax?: number; 
  public get fixedNatInsideUserCountMax() {
    return this.getNumberAttribute('fixed_nat_inside_user_count_max');
  }
  public set fixedNatInsideUserCountMax(value: number) {
    this._fixedNatInsideUserCountMax = value;
  }
  public resetFixedNatInsideUserCountMax() {
    this._fixedNatInsideUserCountMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNatInsideUserCountMaxInput() {
    return this._fixedNatInsideUserCountMax;
  }

  // fixed_nat_inside_user_count_min - computed: false, optional: true, required: false
  private _fixedNatInsideUserCountMin?: number; 
  public get fixedNatInsideUserCountMin() {
    return this.getNumberAttribute('fixed_nat_inside_user_count_min');
  }
  public set fixedNatInsideUserCountMin(value: number) {
    this._fixedNatInsideUserCountMin = value;
  }
  public resetFixedNatInsideUserCountMin() {
    this._fixedNatInsideUserCountMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNatInsideUserCountMinInput() {
    return this._fixedNatInsideUserCountMin;
  }

  // fixed_nat_ip_addr_count_default - computed: false, optional: true, required: false
  private _fixedNatIpAddrCountDefault?: number; 
  public get fixedNatIpAddrCountDefault() {
    return this.getNumberAttribute('fixed_nat_ip_addr_count_default');
  }
  public set fixedNatIpAddrCountDefault(value: number) {
    this._fixedNatIpAddrCountDefault = value;
  }
  public resetFixedNatIpAddrCountDefault() {
    this._fixedNatIpAddrCountDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNatIpAddrCountDefaultInput() {
    return this._fixedNatIpAddrCountDefault;
  }

  // fixed_nat_ip_addr_count_max - computed: false, optional: true, required: false
  private _fixedNatIpAddrCountMax?: number; 
  public get fixedNatIpAddrCountMax() {
    return this.getNumberAttribute('fixed_nat_ip_addr_count_max');
  }
  public set fixedNatIpAddrCountMax(value: number) {
    this._fixedNatIpAddrCountMax = value;
  }
  public resetFixedNatIpAddrCountMax() {
    this._fixedNatIpAddrCountMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNatIpAddrCountMaxInput() {
    return this._fixedNatIpAddrCountMax;
  }

  // fixed_nat_ip_addr_count_min - computed: false, optional: true, required: false
  private _fixedNatIpAddrCountMin?: number; 
  public get fixedNatIpAddrCountMin() {
    return this.getNumberAttribute('fixed_nat_ip_addr_count_min');
  }
  public set fixedNatIpAddrCountMin(value: number) {
    this._fixedNatIpAddrCountMin = value;
  }
  public resetFixedNatIpAddrCountMin() {
    this._fixedNatIpAddrCountMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNatIpAddrCountMinInput() {
    return this._fixedNatIpAddrCountMin;
  }

  // lsn_nat_addr_count_default - computed: false, optional: true, required: false
  private _lsnNatAddrCountDefault?: number; 
  public get lsnNatAddrCountDefault() {
    return this.getNumberAttribute('lsn_nat_addr_count_default');
  }
  public set lsnNatAddrCountDefault(value: number) {
    this._lsnNatAddrCountDefault = value;
  }
  public resetLsnNatAddrCountDefault() {
    this._lsnNatAddrCountDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsnNatAddrCountDefaultInput() {
    return this._lsnNatAddrCountDefault;
  }

  // lsn_nat_addr_count_max - computed: false, optional: true, required: false
  private _lsnNatAddrCountMax?: number; 
  public get lsnNatAddrCountMax() {
    return this.getNumberAttribute('lsn_nat_addr_count_max');
  }
  public set lsnNatAddrCountMax(value: number) {
    this._lsnNatAddrCountMax = value;
  }
  public resetLsnNatAddrCountMax() {
    this._lsnNatAddrCountMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsnNatAddrCountMaxInput() {
    return this._lsnNatAddrCountMax;
  }

  // lsn_nat_addr_count_min - computed: false, optional: true, required: false
  private _lsnNatAddrCountMin?: number; 
  public get lsnNatAddrCountMin() {
    return this.getNumberAttribute('lsn_nat_addr_count_min');
  }
  public set lsnNatAddrCountMin(value: number) {
    this._lsnNatAddrCountMin = value;
  }
  public resetLsnNatAddrCountMin() {
    this._lsnNatAddrCountMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsnNatAddrCountMinInput() {
    return this._lsnNatAddrCountMin;
  }

  // radius_table_size_default - computed: false, optional: true, required: false
  private _radiusTableSizeDefault?: number; 
  public get radiusTableSizeDefault() {
    return this.getNumberAttribute('radius_table_size_default');
  }
  public set radiusTableSizeDefault(value: number) {
    this._radiusTableSizeDefault = value;
  }
  public resetRadiusTableSizeDefault() {
    this._radiusTableSizeDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusTableSizeDefaultInput() {
    return this._radiusTableSizeDefault;
  }

  // radius_table_size_max - computed: false, optional: true, required: false
  private _radiusTableSizeMax?: number; 
  public get radiusTableSizeMax() {
    return this.getNumberAttribute('radius_table_size_max');
  }
  public set radiusTableSizeMax(value: number) {
    this._radiusTableSizeMax = value;
  }
  public resetRadiusTableSizeMax() {
    this._radiusTableSizeMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusTableSizeMaxInput() {
    return this._radiusTableSizeMax;
  }

  // radius_table_size_min - computed: false, optional: true, required: false
  private _radiusTableSizeMin?: number; 
  public get radiusTableSizeMin() {
    return this.getNumberAttribute('radius_table_size_min');
  }
  public set radiusTableSizeMin(value: number) {
    this._radiusTableSizeMin = value;
  }
  public resetRadiusTableSizeMin() {
    this._radiusTableSizeMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusTableSizeMinInput() {
    return this._radiusTableSizeMin;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_resource_usage_oper thunder_cgnv6_resource_usage_oper}
*/
export class DataThunderCgnv6ResourceUsageOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_resource_usage_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6ResourceUsageOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6ResourceUsageOper to import
  * @param importFromId The id of the existing DataThunderCgnv6ResourceUsageOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_resource_usage_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6ResourceUsageOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_resource_usage_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_resource_usage_oper thunder_cgnv6_resource_usage_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6ResourceUsageOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6ResourceUsageOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_resource_usage_oper',
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
  private _oper = new DataThunderCgnv6ResourceUsageOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6ResourceUsageOperOper) {
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
      oper: dataThunderCgnv6ResourceUsageOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderCgnv6ResourceUsageOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6ResourceUsageOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
