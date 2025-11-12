// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_show_process_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemViewShowProcessOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_show_process_oper#id DataThunderSystemViewShowProcessOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_show_process_oper#oper DataThunderSystemViewShowProcessOper#oper}
  */
  readonly oper?: DataThunderSystemViewShowProcessOperOper;
}
export interface DataThunderSystemViewShowProcessOperOperProcInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_show_process_oper#proc_data DataThunderSystemViewShowProcessOper#proc_data}
  */
  readonly procData?: string;
}

export function dataThunderSystemViewShowProcessOperOperProcInfoToTerraform(struct?: DataThunderSystemViewShowProcessOperOperProcInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proc_data: cdktf.stringToTerraform(struct!.procData),
  }
}


export function dataThunderSystemViewShowProcessOperOperProcInfoToHclTerraform(struct?: DataThunderSystemViewShowProcessOperOperProcInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proc_data: {
      value: cdktf.stringToHclTerraform(struct!.procData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemViewShowProcessOperOperProcInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemViewShowProcessOperOperProcInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._procData !== undefined) {
      hasAnyValues = true;
      internalValueResult.procData = this._procData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemViewShowProcessOperOperProcInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._procData = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._procData = value.procData;
    }
  }

  // proc_data - computed: false, optional: true, required: false
  private _procData?: string; 
  public get procData() {
    return this.getStringAttribute('proc_data');
  }
  public set procData(value: string) {
    this._procData = value;
  }
  public resetProcData() {
    this._procData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procDataInput() {
    return this._procData;
  }
}

export class DataThunderSystemViewShowProcessOperOperProcInfoList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemViewShowProcessOperOperProcInfo[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemViewShowProcessOperOperProcInfoOutputReference {
    return new DataThunderSystemViewShowProcessOperOperProcInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemViewShowProcessOperOper {
  /**
  * proc_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_show_process_oper#proc_info DataThunderSystemViewShowProcessOper#proc_info}
  */
  readonly procInfo?: DataThunderSystemViewShowProcessOperOperProcInfo[] | cdktf.IResolvable;
}

export function dataThunderSystemViewShowProcessOperOperToTerraform(struct?: DataThunderSystemViewShowProcessOperOperOutputReference | DataThunderSystemViewShowProcessOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proc_info: cdktf.listMapper(dataThunderSystemViewShowProcessOperOperProcInfoToTerraform, true)(struct!.procInfo),
  }
}


export function dataThunderSystemViewShowProcessOperOperToHclTerraform(struct?: DataThunderSystemViewShowProcessOperOperOutputReference | DataThunderSystemViewShowProcessOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proc_info: {
      value: cdktf.listMapperHcl(dataThunderSystemViewShowProcessOperOperProcInfoToHclTerraform, true)(struct!.procInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemViewShowProcessOperOperProcInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemViewShowProcessOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemViewShowProcessOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._procInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.procInfo = this._procInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemViewShowProcessOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._procInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._procInfo.internalValue = value.procInfo;
    }
  }

  // proc_info - computed: false, optional: true, required: false
  private _procInfo = new DataThunderSystemViewShowProcessOperOperProcInfoList(this, "proc_info", false);
  public get procInfo() {
    return this._procInfo;
  }
  public putProcInfo(value: DataThunderSystemViewShowProcessOperOperProcInfo[] | cdktf.IResolvable) {
    this._procInfo.internalValue = value;
  }
  public resetProcInfo() {
    this._procInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procInfoInput() {
    return this._procInfo.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_show_process_oper thunder_system_view_show_process_oper}
*/
export class DataThunderSystemViewShowProcessOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_view_show_process_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemViewShowProcessOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemViewShowProcessOper to import
  * @param importFromId The id of the existing DataThunderSystemViewShowProcessOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_show_process_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemViewShowProcessOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_view_show_process_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_view_show_process_oper thunder_system_view_show_process_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemViewShowProcessOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemViewShowProcessOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_view_show_process_oper',
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
  private _oper = new DataThunderSystemViewShowProcessOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemViewShowProcessOperOper) {
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
      oper: dataThunderSystemViewShowProcessOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemViewShowProcessOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemViewShowProcessOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
