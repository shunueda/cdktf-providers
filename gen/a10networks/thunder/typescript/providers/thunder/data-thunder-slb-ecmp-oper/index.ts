// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ecmp_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbEcmpOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ecmp_oper#id DataThunderSlbEcmpOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ecmp_oper#oper DataThunderSlbEcmpOper#oper}
  */
  readonly oper?: DataThunderSlbEcmpOperOper;
}
export interface DataThunderSlbEcmpOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ecmp_oper#dest_addr_v4 DataThunderSlbEcmpOper#dest_addr_v4}
  */
  readonly destAddrV4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ecmp_oper#dest_addr_v6 DataThunderSlbEcmpOper#dest_addr_v6}
  */
  readonly destAddrV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ecmp_oper#dst_port DataThunderSlbEcmpOper#dst_port}
  */
  readonly dstPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ecmp_oper#ecmp_path DataThunderSlbEcmpOper#ecmp_path}
  */
  readonly ecmpPath?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ecmp_oper#filter_type DataThunderSlbEcmpOper#filter_type}
  */
  readonly filterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ecmp_oper#source_addr_v4 DataThunderSlbEcmpOper#source_addr_v4}
  */
  readonly sourceAddrV4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ecmp_oper#source_addr_v6 DataThunderSlbEcmpOper#source_addr_v6}
  */
  readonly sourceAddrV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ecmp_oper#src_port DataThunderSlbEcmpOper#src_port}
  */
  readonly srcPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ecmp_oper#total_path DataThunderSlbEcmpOper#total_path}
  */
  readonly totalPath?: number;
}

export function dataThunderSlbEcmpOperOperToTerraform(struct?: DataThunderSlbEcmpOperOperOutputReference | DataThunderSlbEcmpOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_addr_v4: cdktf.stringToTerraform(struct!.destAddrV4),
    dest_addr_v6: cdktf.stringToTerraform(struct!.destAddrV6),
    dst_port: cdktf.numberToTerraform(struct!.dstPort),
    ecmp_path: cdktf.numberToTerraform(struct!.ecmpPath),
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    source_addr_v4: cdktf.stringToTerraform(struct!.sourceAddrV4),
    source_addr_v6: cdktf.stringToTerraform(struct!.sourceAddrV6),
    src_port: cdktf.numberToTerraform(struct!.srcPort),
    total_path: cdktf.numberToTerraform(struct!.totalPath),
  }
}


export function dataThunderSlbEcmpOperOperToHclTerraform(struct?: DataThunderSlbEcmpOperOperOutputReference | DataThunderSlbEcmpOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dest_addr_v4: {
      value: cdktf.stringToHclTerraform(struct!.destAddrV4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dest_addr_v6: {
      value: cdktf.stringToHclTerraform(struct!.destAddrV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_port: {
      value: cdktf.numberToHclTerraform(struct!.dstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ecmp_path: {
      value: cdktf.numberToHclTerraform(struct!.ecmpPath),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_addr_v4: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddrV4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_addr_v6: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddrV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_port: {
      value: cdktf.numberToHclTerraform(struct!.srcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_path: {
      value: cdktf.numberToHclTerraform(struct!.totalPath),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbEcmpOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbEcmpOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destAddrV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.destAddrV4 = this._destAddrV4;
    }
    if (this._destAddrV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.destAddrV6 = this._destAddrV6;
    }
    if (this._dstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPort = this._dstPort;
    }
    if (this._ecmpPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecmpPath = this._ecmpPath;
    }
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._sourceAddrV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddrV4 = this._sourceAddrV4;
    }
    if (this._sourceAddrV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddrV6 = this._sourceAddrV6;
    }
    if (this._srcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPort = this._srcPort;
    }
    if (this._totalPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalPath = this._totalPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbEcmpOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destAddrV4 = undefined;
      this._destAddrV6 = undefined;
      this._dstPort = undefined;
      this._ecmpPath = undefined;
      this._filterType = undefined;
      this._sourceAddrV4 = undefined;
      this._sourceAddrV6 = undefined;
      this._srcPort = undefined;
      this._totalPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destAddrV4 = value.destAddrV4;
      this._destAddrV6 = value.destAddrV6;
      this._dstPort = value.dstPort;
      this._ecmpPath = value.ecmpPath;
      this._filterType = value.filterType;
      this._sourceAddrV4 = value.sourceAddrV4;
      this._sourceAddrV6 = value.sourceAddrV6;
      this._srcPort = value.srcPort;
      this._totalPath = value.totalPath;
    }
  }

  // dest_addr_v4 - computed: false, optional: true, required: false
  private _destAddrV4?: string; 
  public get destAddrV4() {
    return this.getStringAttribute('dest_addr_v4');
  }
  public set destAddrV4(value: string) {
    this._destAddrV4 = value;
  }
  public resetDestAddrV4() {
    this._destAddrV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destAddrV4Input() {
    return this._destAddrV4;
  }

  // dest_addr_v6 - computed: false, optional: true, required: false
  private _destAddrV6?: string; 
  public get destAddrV6() {
    return this.getStringAttribute('dest_addr_v6');
  }
  public set destAddrV6(value: string) {
    this._destAddrV6 = value;
  }
  public resetDestAddrV6() {
    this._destAddrV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destAddrV6Input() {
    return this._destAddrV6;
  }

  // dst_port - computed: false, optional: true, required: false
  private _dstPort?: number; 
  public get dstPort() {
    return this.getNumberAttribute('dst_port');
  }
  public set dstPort(value: number) {
    this._dstPort = value;
  }
  public resetDstPort() {
    this._dstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortInput() {
    return this._dstPort;
  }

  // ecmp_path - computed: false, optional: true, required: false
  private _ecmpPath?: number; 
  public get ecmpPath() {
    return this.getNumberAttribute('ecmp_path');
  }
  public set ecmpPath(value: number) {
    this._ecmpPath = value;
  }
  public resetEcmpPath() {
    this._ecmpPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecmpPathInput() {
    return this._ecmpPath;
  }

  // filter_type - computed: false, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // source_addr_v4 - computed: false, optional: true, required: false
  private _sourceAddrV4?: string; 
  public get sourceAddrV4() {
    return this.getStringAttribute('source_addr_v4');
  }
  public set sourceAddrV4(value: string) {
    this._sourceAddrV4 = value;
  }
  public resetSourceAddrV4() {
    this._sourceAddrV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddrV4Input() {
    return this._sourceAddrV4;
  }

  // source_addr_v6 - computed: false, optional: true, required: false
  private _sourceAddrV6?: string; 
  public get sourceAddrV6() {
    return this.getStringAttribute('source_addr_v6');
  }
  public set sourceAddrV6(value: string) {
    this._sourceAddrV6 = value;
  }
  public resetSourceAddrV6() {
    this._sourceAddrV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddrV6Input() {
    return this._sourceAddrV6;
  }

  // src_port - computed: false, optional: true, required: false
  private _srcPort?: number; 
  public get srcPort() {
    return this.getNumberAttribute('src_port');
  }
  public set srcPort(value: number) {
    this._srcPort = value;
  }
  public resetSrcPort() {
    this._srcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort;
  }

  // total_path - computed: false, optional: true, required: false
  private _totalPath?: number; 
  public get totalPath() {
    return this.getNumberAttribute('total_path');
  }
  public set totalPath(value: number) {
    this._totalPath = value;
  }
  public resetTotalPath() {
    this._totalPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalPathInput() {
    return this._totalPath;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ecmp_oper thunder_slb_ecmp_oper}
*/
export class DataThunderSlbEcmpOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_ecmp_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbEcmpOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbEcmpOper to import
  * @param importFromId The id of the existing DataThunderSlbEcmpOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ecmp_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbEcmpOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_ecmp_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ecmp_oper thunder_slb_ecmp_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbEcmpOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbEcmpOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_ecmp_oper',
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
  private _oper = new DataThunderSlbEcmpOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbEcmpOperOper) {
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
      oper: dataThunderSlbEcmpOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbEcmpOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbEcmpOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
