// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_telemetry_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderIpTelemetryOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_telemetry_oper#id DataThunderIpTelemetryOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_telemetry_oper#oper DataThunderIpTelemetryOper#oper}
  */
  readonly oper?: DataThunderIpTelemetryOperOper;
}
export interface DataThunderIpTelemetryOperOperDb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_telemetry_oper#class_list_id DataThunderIpTelemetryOper#class_list_id}
  */
  readonly classListId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_telemetry_oper#class_list_name DataThunderIpTelemetryOper#class_list_name}
  */
  readonly classListName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_telemetry_oper#ipv4_addr DataThunderIpTelemetryOper#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_telemetry_oper#ipv4_nexthop DataThunderIpTelemetryOper#ipv4_nexthop}
  */
  readonly ipv4Nexthop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_telemetry_oper#net_mask_len DataThunderIpTelemetryOper#net_mask_len}
  */
  readonly netMaskLen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_telemetry_oper#origin_as DataThunderIpTelemetryOper#origin_as}
  */
  readonly originAs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_telemetry_oper#peer_as DataThunderIpTelemetryOper#peer_as}
  */
  readonly peerAs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_telemetry_oper#zone_name DataThunderIpTelemetryOper#zone_name}
  */
  readonly zoneName?: string;
}

export function dataThunderIpTelemetryOperOperDbToTerraform(struct?: DataThunderIpTelemetryOperOperDb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_list_id: cdktf.numberToTerraform(struct!.classListId),
    class_list_name: cdktf.stringToTerraform(struct!.classListName),
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv4_nexthop: cdktf.stringToTerraform(struct!.ipv4Nexthop),
    net_mask_len: cdktf.numberToTerraform(struct!.netMaskLen),
    origin_as: cdktf.numberToTerraform(struct!.originAs),
    peer_as: cdktf.numberToTerraform(struct!.peerAs),
    zone_name: cdktf.stringToTerraform(struct!.zoneName),
  }
}


export function dataThunderIpTelemetryOperOperDbToHclTerraform(struct?: DataThunderIpTelemetryOperOperDb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_list_id: {
      value: cdktf.numberToHclTerraform(struct!.classListId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_list_name: {
      value: cdktf.stringToHclTerraform(struct!.classListName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_nexthop: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Nexthop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    net_mask_len: {
      value: cdktf.numberToHclTerraform(struct!.netMaskLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin_as: {
      value: cdktf.numberToHclTerraform(struct!.originAs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_as: {
      value: cdktf.numberToHclTerraform(struct!.peerAs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_name: {
      value: cdktf.stringToHclTerraform(struct!.zoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderIpTelemetryOperOperDbOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderIpTelemetryOperOperDb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListId = this._classListId;
    }
    if (this._classListName !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListName = this._classListName;
    }
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._ipv4Nexthop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Nexthop = this._ipv4Nexthop;
    }
    if (this._netMaskLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.netMaskLen = this._netMaskLen;
    }
    if (this._originAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.originAs = this._originAs;
    }
    if (this._peerAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerAs = this._peerAs;
    }
    if (this._zoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneName = this._zoneName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderIpTelemetryOperOperDb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classListId = undefined;
      this._classListName = undefined;
      this._ipv4Addr = undefined;
      this._ipv4Nexthop = undefined;
      this._netMaskLen = undefined;
      this._originAs = undefined;
      this._peerAs = undefined;
      this._zoneName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classListId = value.classListId;
      this._classListName = value.classListName;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv4Nexthop = value.ipv4Nexthop;
      this._netMaskLen = value.netMaskLen;
      this._originAs = value.originAs;
      this._peerAs = value.peerAs;
      this._zoneName = value.zoneName;
    }
  }

  // class_list_id - computed: false, optional: true, required: false
  private _classListId?: number; 
  public get classListId() {
    return this.getNumberAttribute('class_list_id');
  }
  public set classListId(value: number) {
    this._classListId = value;
  }
  public resetClassListId() {
    this._classListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListIdInput() {
    return this._classListId;
  }

  // class_list_name - computed: false, optional: true, required: false
  private _classListName?: string; 
  public get classListName() {
    return this.getStringAttribute('class_list_name');
  }
  public set classListName(value: string) {
    this._classListName = value;
  }
  public resetClassListName() {
    this._classListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListNameInput() {
    return this._classListName;
  }

  // ipv4_addr - computed: false, optional: true, required: false
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4_addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  public resetIpv4Addr() {
    this._ipv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // ipv4_nexthop - computed: false, optional: true, required: false
  private _ipv4Nexthop?: string; 
  public get ipv4Nexthop() {
    return this.getStringAttribute('ipv4_nexthop');
  }
  public set ipv4Nexthop(value: string) {
    this._ipv4Nexthop = value;
  }
  public resetIpv4Nexthop() {
    this._ipv4Nexthop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NexthopInput() {
    return this._ipv4Nexthop;
  }

  // net_mask_len - computed: false, optional: true, required: false
  private _netMaskLen?: number; 
  public get netMaskLen() {
    return this.getNumberAttribute('net_mask_len');
  }
  public set netMaskLen(value: number) {
    this._netMaskLen = value;
  }
  public resetNetMaskLen() {
    this._netMaskLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netMaskLenInput() {
    return this._netMaskLen;
  }

  // origin_as - computed: false, optional: true, required: false
  private _originAs?: number; 
  public get originAs() {
    return this.getNumberAttribute('origin_as');
  }
  public set originAs(value: number) {
    this._originAs = value;
  }
  public resetOriginAs() {
    this._originAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originAsInput() {
    return this._originAs;
  }

  // peer_as - computed: false, optional: true, required: false
  private _peerAs?: number; 
  public get peerAs() {
    return this.getNumberAttribute('peer_as');
  }
  public set peerAs(value: number) {
    this._peerAs = value;
  }
  public resetPeerAs() {
    this._peerAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAsInput() {
    return this._peerAs;
  }

  // zone_name - computed: false, optional: true, required: false
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  public resetZoneName() {
    this._zoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }
}

export class DataThunderIpTelemetryOperOperDbList extends cdktf.ComplexList {
  public internalValue? : DataThunderIpTelemetryOperOperDb[] | cdktf.IResolvable

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
  public get(index: number): DataThunderIpTelemetryOperOperDbOutputReference {
    return new DataThunderIpTelemetryOperOperDbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderIpTelemetryOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_telemetry_oper#total DataThunderIpTelemetryOper#total}
  */
  readonly total?: number;
  /**
  * db block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_telemetry_oper#db DataThunderIpTelemetryOper#db}
  */
  readonly db?: DataThunderIpTelemetryOperOperDb[] | cdktf.IResolvable;
}

export function dataThunderIpTelemetryOperOperToTerraform(struct?: DataThunderIpTelemetryOperOperOutputReference | DataThunderIpTelemetryOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    total: cdktf.numberToTerraform(struct!.total),
    db: cdktf.listMapper(dataThunderIpTelemetryOperOperDbToTerraform, true)(struct!.db),
  }
}


export function dataThunderIpTelemetryOperOperToHclTerraform(struct?: DataThunderIpTelemetryOperOperOutputReference | DataThunderIpTelemetryOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    total: {
      value: cdktf.numberToHclTerraform(struct!.total),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db: {
      value: cdktf.listMapperHcl(dataThunderIpTelemetryOperOperDbToHclTerraform, true)(struct!.db),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderIpTelemetryOperOperDbList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderIpTelemetryOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderIpTelemetryOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._total !== undefined) {
      hasAnyValues = true;
      internalValueResult.total = this._total;
    }
    if (this._db?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.db = this._db?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderIpTelemetryOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._total = undefined;
      this._db.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._total = value.total;
      this._db.internalValue = value.db;
    }
  }

  // total - computed: false, optional: true, required: false
  private _total?: number; 
  public get total() {
    return this.getNumberAttribute('total');
  }
  public set total(value: number) {
    this._total = value;
  }
  public resetTotal() {
    this._total = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInput() {
    return this._total;
  }

  // db - computed: false, optional: true, required: false
  private _db = new DataThunderIpTelemetryOperOperDbList(this, "db", false);
  public get db() {
    return this._db;
  }
  public putDb(value: DataThunderIpTelemetryOperOperDb[] | cdktf.IResolvable) {
    this._db.internalValue = value;
  }
  public resetDb() {
    this._db.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInput() {
    return this._db.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_telemetry_oper thunder_ip_telemetry_oper}
*/
export class DataThunderIpTelemetryOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ip_telemetry_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderIpTelemetryOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderIpTelemetryOper to import
  * @param importFromId The id of the existing DataThunderIpTelemetryOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_telemetry_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderIpTelemetryOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ip_telemetry_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ip_telemetry_oper thunder_ip_telemetry_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderIpTelemetryOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderIpTelemetryOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ip_telemetry_oper',
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
  private _oper = new DataThunderIpTelemetryOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderIpTelemetryOperOper) {
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
      oper: dataThunderIpTelemetryOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderIpTelemetryOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderIpTelemetryOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
