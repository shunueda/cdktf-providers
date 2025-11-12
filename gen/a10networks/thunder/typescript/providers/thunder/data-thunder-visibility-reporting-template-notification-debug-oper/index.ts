// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_reporting_template_notification_debug_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityReportingTemplateNotificationDebugOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_reporting_template_notification_debug_oper#id DataThunderVisibilityReportingTemplateNotificationDebugOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_reporting_template_notification_debug_oper#oper DataThunderVisibilityReportingTemplateNotificationDebugOper#oper}
  */
  readonly oper?: DataThunderVisibilityReportingTemplateNotificationDebugOperOper;
}
export interface DataThunderVisibilityReportingTemplateNotificationDebugOperOperDebugListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_reporting_template_notification_debug_oper#debug_log DataThunderVisibilityReportingTemplateNotificationDebugOper#debug_log}
  */
  readonly debugLog?: string;
}

export function dataThunderVisibilityReportingTemplateNotificationDebugOperOperDebugListStructToTerraform(struct?: DataThunderVisibilityReportingTemplateNotificationDebugOperOperDebugListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug_log: cdktf.stringToTerraform(struct!.debugLog),
  }
}


export function dataThunderVisibilityReportingTemplateNotificationDebugOperOperDebugListStructToHclTerraform(struct?: DataThunderVisibilityReportingTemplateNotificationDebugOperOperDebugListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debug_log: {
      value: cdktf.stringToHclTerraform(struct!.debugLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityReportingTemplateNotificationDebugOperOperDebugListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityReportingTemplateNotificationDebugOperOperDebugListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debugLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugLog = this._debugLog;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityReportingTemplateNotificationDebugOperOperDebugListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._debugLog = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._debugLog = value.debugLog;
    }
  }

  // debug_log - computed: false, optional: true, required: false
  private _debugLog?: string; 
  public get debugLog() {
    return this.getStringAttribute('debug_log');
  }
  public set debugLog(value: string) {
    this._debugLog = value;
  }
  public resetDebugLog() {
    this._debugLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugLogInput() {
    return this._debugLog;
  }
}

export class DataThunderVisibilityReportingTemplateNotificationDebugOperOperDebugListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityReportingTemplateNotificationDebugOperOperDebugListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityReportingTemplateNotificationDebugOperOperDebugListStructOutputReference {
    return new DataThunderVisibilityReportingTemplateNotificationDebugOperOperDebugListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityReportingTemplateNotificationDebugOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_reporting_template_notification_debug_oper#log DataThunderVisibilityReportingTemplateNotificationDebugOper#log}
  */
  readonly log?: number;
  /**
  * debug_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_reporting_template_notification_debug_oper#debug_list DataThunderVisibilityReportingTemplateNotificationDebugOper#debug_list}
  */
  readonly debugList?: DataThunderVisibilityReportingTemplateNotificationDebugOperOperDebugListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityReportingTemplateNotificationDebugOperOperToTerraform(struct?: DataThunderVisibilityReportingTemplateNotificationDebugOperOperOutputReference | DataThunderVisibilityReportingTemplateNotificationDebugOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log: cdktf.numberToTerraform(struct!.log),
    debug_list: cdktf.listMapper(dataThunderVisibilityReportingTemplateNotificationDebugOperOperDebugListStructToTerraform, true)(struct!.debugList),
  }
}


export function dataThunderVisibilityReportingTemplateNotificationDebugOperOperToHclTerraform(struct?: DataThunderVisibilityReportingTemplateNotificationDebugOperOperOutputReference | DataThunderVisibilityReportingTemplateNotificationDebugOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log: {
      value: cdktf.numberToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    debug_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityReportingTemplateNotificationDebugOperOperDebugListStructToHclTerraform, true)(struct!.debugList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityReportingTemplateNotificationDebugOperOperDebugListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityReportingTemplateNotificationDebugOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityReportingTemplateNotificationDebugOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._debugList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugList = this._debugList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityReportingTemplateNotificationDebugOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._log = undefined;
      this._debugList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._log = value.log;
      this._debugList.internalValue = value.debugList;
    }
  }

  // log - computed: false, optional: true, required: false
  private _log?: number; 
  public get log() {
    return this.getNumberAttribute('log');
  }
  public set log(value: number) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // debug_list - computed: false, optional: true, required: false
  private _debugList = new DataThunderVisibilityReportingTemplateNotificationDebugOperOperDebugListStructList(this, "debug_list", false);
  public get debugList() {
    return this._debugList;
  }
  public putDebugList(value: DataThunderVisibilityReportingTemplateNotificationDebugOperOperDebugListStruct[] | cdktf.IResolvable) {
    this._debugList.internalValue = value;
  }
  public resetDebugList() {
    this._debugList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugListInput() {
    return this._debugList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_reporting_template_notification_debug_oper thunder_visibility_reporting_template_notification_debug_oper}
*/
export class DataThunderVisibilityReportingTemplateNotificationDebugOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_reporting_template_notification_debug_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityReportingTemplateNotificationDebugOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityReportingTemplateNotificationDebugOper to import
  * @param importFromId The id of the existing DataThunderVisibilityReportingTemplateNotificationDebugOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_reporting_template_notification_debug_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityReportingTemplateNotificationDebugOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_reporting_template_notification_debug_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_reporting_template_notification_debug_oper thunder_visibility_reporting_template_notification_debug_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityReportingTemplateNotificationDebugOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityReportingTemplateNotificationDebugOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_reporting_template_notification_debug_oper',
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
  private _oper = new DataThunderVisibilityReportingTemplateNotificationDebugOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityReportingTemplateNotificationDebugOperOper) {
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
      oper: dataThunderVisibilityReportingTemplateNotificationDebugOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderVisibilityReportingTemplateNotificationDebugOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityReportingTemplateNotificationDebugOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
