// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_crl_srcip_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbCrlSrcipOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_crl_srcip_oper#id DataThunderSlbCrlSrcipOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_crl_srcip_oper#oper DataThunderSlbCrlSrcipOper#oper}
  */
  readonly oper?: DataThunderSlbCrlSrcipOperOper;
}
export interface DataThunderSlbCrlSrcipOperOperCrlSrcipLockedoutIps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_crl_srcip_oper#active DataThunderSlbCrlSrcipOper#active}
  */
  readonly active?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_crl_srcip_oper#client_ip DataThunderSlbCrlSrcipOper#client_ip}
  */
  readonly clientIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_crl_srcip_oper#drops DataThunderSlbCrlSrcipOper#drops}
  */
  readonly drops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_crl_srcip_oper#end DataThunderSlbCrlSrcipOper#end}
  */
  readonly end?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_crl_srcip_oper#start DataThunderSlbCrlSrcipOper#start}
  */
  readonly start?: string;
}

export function dataThunderSlbCrlSrcipOperOperCrlSrcipLockedoutIpsToTerraform(struct?: DataThunderSlbCrlSrcipOperOperCrlSrcipLockedoutIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.numberToTerraform(struct!.active),
    client_ip: cdktf.stringToTerraform(struct!.clientIp),
    drops: cdktf.numberToTerraform(struct!.drops),
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function dataThunderSlbCrlSrcipOperOperCrlSrcipLockedoutIpsToHclTerraform(struct?: DataThunderSlbCrlSrcipOperOperCrlSrcipLockedoutIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.numberToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_ip: {
      value: cdktf.stringToHclTerraform(struct!.clientIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drops: {
      value: cdktf.numberToHclTerraform(struct!.drops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbCrlSrcipOperOperCrlSrcipLockedoutIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbCrlSrcipOperOperCrlSrcipLockedoutIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._clientIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp;
    }
    if (this._drops !== undefined) {
      hasAnyValues = true;
      internalValueResult.drops = this._drops;
    }
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbCrlSrcipOperOperCrlSrcipLockedoutIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
      this._clientIp = undefined;
      this._drops = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
      this._clientIp = value.clientIp;
      this._drops = value.drops;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: number; 
  public get active() {
    return this.getNumberAttribute('active');
  }
  public set active(value: number) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp?: string; 
  public get clientIp() {
    return this.getStringAttribute('client_ip');
  }
  public set clientIp(value: string) {
    this._clientIp = value;
  }
  public resetClientIp() {
    this._clientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp;
  }

  // drops - computed: false, optional: true, required: false
  private _drops?: number; 
  public get drops() {
    return this.getNumberAttribute('drops');
  }
  public set drops(value: number) {
    this._drops = value;
  }
  public resetDrops() {
    this._drops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropsInput() {
    return this._drops;
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class DataThunderSlbCrlSrcipOperOperCrlSrcipLockedoutIpsList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbCrlSrcipOperOperCrlSrcipLockedoutIps[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbCrlSrcipOperOperCrlSrcipLockedoutIpsOutputReference {
    return new DataThunderSlbCrlSrcipOperOperCrlSrcipLockedoutIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbCrlSrcipOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_crl_srcip_oper#lockedout_ips_count DataThunderSlbCrlSrcipOper#lockedout_ips_count}
  */
  readonly lockedoutIpsCount?: number;
  /**
  * crl_srcip_lockedout_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_crl_srcip_oper#crl_srcip_lockedout_ips DataThunderSlbCrlSrcipOper#crl_srcip_lockedout_ips}
  */
  readonly crlSrcipLockedoutIps?: DataThunderSlbCrlSrcipOperOperCrlSrcipLockedoutIps[] | cdktf.IResolvable;
}

export function dataThunderSlbCrlSrcipOperOperToTerraform(struct?: DataThunderSlbCrlSrcipOperOperOutputReference | DataThunderSlbCrlSrcipOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lockedout_ips_count: cdktf.numberToTerraform(struct!.lockedoutIpsCount),
    crl_srcip_lockedout_ips: cdktf.listMapper(dataThunderSlbCrlSrcipOperOperCrlSrcipLockedoutIpsToTerraform, true)(struct!.crlSrcipLockedoutIps),
  }
}


export function dataThunderSlbCrlSrcipOperOperToHclTerraform(struct?: DataThunderSlbCrlSrcipOperOperOutputReference | DataThunderSlbCrlSrcipOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lockedout_ips_count: {
      value: cdktf.numberToHclTerraform(struct!.lockedoutIpsCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crl_srcip_lockedout_ips: {
      value: cdktf.listMapperHcl(dataThunderSlbCrlSrcipOperOperCrlSrcipLockedoutIpsToHclTerraform, true)(struct!.crlSrcipLockedoutIps),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbCrlSrcipOperOperCrlSrcipLockedoutIpsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbCrlSrcipOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbCrlSrcipOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lockedoutIpsCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockedoutIpsCount = this._lockedoutIpsCount;
    }
    if (this._crlSrcipLockedoutIps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlSrcipLockedoutIps = this._crlSrcipLockedoutIps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbCrlSrcipOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lockedoutIpsCount = undefined;
      this._crlSrcipLockedoutIps.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lockedoutIpsCount = value.lockedoutIpsCount;
      this._crlSrcipLockedoutIps.internalValue = value.crlSrcipLockedoutIps;
    }
  }

  // lockedout_ips_count - computed: false, optional: true, required: false
  private _lockedoutIpsCount?: number; 
  public get lockedoutIpsCount() {
    return this.getNumberAttribute('lockedout_ips_count');
  }
  public set lockedoutIpsCount(value: number) {
    this._lockedoutIpsCount = value;
  }
  public resetLockedoutIpsCount() {
    this._lockedoutIpsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedoutIpsCountInput() {
    return this._lockedoutIpsCount;
  }

  // crl_srcip_lockedout_ips - computed: false, optional: true, required: false
  private _crlSrcipLockedoutIps = new DataThunderSlbCrlSrcipOperOperCrlSrcipLockedoutIpsList(this, "crl_srcip_lockedout_ips", false);
  public get crlSrcipLockedoutIps() {
    return this._crlSrcipLockedoutIps;
  }
  public putCrlSrcipLockedoutIps(value: DataThunderSlbCrlSrcipOperOperCrlSrcipLockedoutIps[] | cdktf.IResolvable) {
    this._crlSrcipLockedoutIps.internalValue = value;
  }
  public resetCrlSrcipLockedoutIps() {
    this._crlSrcipLockedoutIps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlSrcipLockedoutIpsInput() {
    return this._crlSrcipLockedoutIps.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_crl_srcip_oper thunder_slb_crl_srcip_oper}
*/
export class DataThunderSlbCrlSrcipOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_crl_srcip_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbCrlSrcipOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbCrlSrcipOper to import
  * @param importFromId The id of the existing DataThunderSlbCrlSrcipOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_crl_srcip_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbCrlSrcipOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_crl_srcip_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_crl_srcip_oper thunder_slb_crl_srcip_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbCrlSrcipOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbCrlSrcipOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_crl_srcip_oper',
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
  private _oper = new DataThunderSlbCrlSrcipOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbCrlSrcipOperOper) {
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
      oper: dataThunderSlbCrlSrcipOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbCrlSrcipOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbCrlSrcipOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
