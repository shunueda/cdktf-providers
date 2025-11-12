// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_notification_template_debug_log_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosNotificationTemplateDebugLogOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_notification_template_debug_log_oper#id DataThunderDdosNotificationTemplateDebugLogOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_notification_template_debug_log_oper#oper DataThunderDdosNotificationTemplateDebugLogOper#oper}
  */
  readonly oper?: DataThunderDdosNotificationTemplateDebugLogOperOper;
}
export interface DataThunderDdosNotificationTemplateDebugLogOperOperNotificationTemplateDebugListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_notification_template_debug_log_oper#notification_template_debug_log DataThunderDdosNotificationTemplateDebugLogOper#notification_template_debug_log}
  */
  readonly notificationTemplateDebugLog?: string;
}

export function dataThunderDdosNotificationTemplateDebugLogOperOperNotificationTemplateDebugListStructToTerraform(struct?: DataThunderDdosNotificationTemplateDebugLogOperOperNotificationTemplateDebugListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notification_template_debug_log: cdktf.stringToTerraform(struct!.notificationTemplateDebugLog),
  }
}


export function dataThunderDdosNotificationTemplateDebugLogOperOperNotificationTemplateDebugListStructToHclTerraform(struct?: DataThunderDdosNotificationTemplateDebugLogOperOperNotificationTemplateDebugListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notification_template_debug_log: {
      value: cdktf.stringToHclTerraform(struct!.notificationTemplateDebugLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosNotificationTemplateDebugLogOperOperNotificationTemplateDebugListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosNotificationTemplateDebugLogOperOperNotificationTemplateDebugListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notificationTemplateDebugLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationTemplateDebugLog = this._notificationTemplateDebugLog;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosNotificationTemplateDebugLogOperOperNotificationTemplateDebugListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notificationTemplateDebugLog = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notificationTemplateDebugLog = value.notificationTemplateDebugLog;
    }
  }

  // notification_template_debug_log - computed: false, optional: true, required: false
  private _notificationTemplateDebugLog?: string; 
  public get notificationTemplateDebugLog() {
    return this.getStringAttribute('notification_template_debug_log');
  }
  public set notificationTemplateDebugLog(value: string) {
    this._notificationTemplateDebugLog = value;
  }
  public resetNotificationTemplateDebugLog() {
    this._notificationTemplateDebugLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTemplateDebugLogInput() {
    return this._notificationTemplateDebugLog;
  }
}

export class DataThunderDdosNotificationTemplateDebugLogOperOperNotificationTemplateDebugListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosNotificationTemplateDebugLogOperOperNotificationTemplateDebugListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosNotificationTemplateDebugLogOperOperNotificationTemplateDebugListStructOutputReference {
    return new DataThunderDdosNotificationTemplateDebugLogOperOperNotificationTemplateDebugListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosNotificationTemplateDebugLogOperOper {
  /**
  * notification_template_debug_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_notification_template_debug_log_oper#notification_template_debug_list DataThunderDdosNotificationTemplateDebugLogOper#notification_template_debug_list}
  */
  readonly notificationTemplateDebugList?: DataThunderDdosNotificationTemplateDebugLogOperOperNotificationTemplateDebugListStruct[] | cdktf.IResolvable;
}

export function dataThunderDdosNotificationTemplateDebugLogOperOperToTerraform(struct?: DataThunderDdosNotificationTemplateDebugLogOperOperOutputReference | DataThunderDdosNotificationTemplateDebugLogOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notification_template_debug_list: cdktf.listMapper(dataThunderDdosNotificationTemplateDebugLogOperOperNotificationTemplateDebugListStructToTerraform, true)(struct!.notificationTemplateDebugList),
  }
}


export function dataThunderDdosNotificationTemplateDebugLogOperOperToHclTerraform(struct?: DataThunderDdosNotificationTemplateDebugLogOperOperOutputReference | DataThunderDdosNotificationTemplateDebugLogOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notification_template_debug_list: {
      value: cdktf.listMapperHcl(dataThunderDdosNotificationTemplateDebugLogOperOperNotificationTemplateDebugListStructToHclTerraform, true)(struct!.notificationTemplateDebugList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosNotificationTemplateDebugLogOperOperNotificationTemplateDebugListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosNotificationTemplateDebugLogOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosNotificationTemplateDebugLogOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notificationTemplateDebugList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationTemplateDebugList = this._notificationTemplateDebugList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosNotificationTemplateDebugLogOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notificationTemplateDebugList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notificationTemplateDebugList.internalValue = value.notificationTemplateDebugList;
    }
  }

  // notification_template_debug_list - computed: false, optional: true, required: false
  private _notificationTemplateDebugList = new DataThunderDdosNotificationTemplateDebugLogOperOperNotificationTemplateDebugListStructList(this, "notification_template_debug_list", false);
  public get notificationTemplateDebugList() {
    return this._notificationTemplateDebugList;
  }
  public putNotificationTemplateDebugList(value: DataThunderDdosNotificationTemplateDebugLogOperOperNotificationTemplateDebugListStruct[] | cdktf.IResolvable) {
    this._notificationTemplateDebugList.internalValue = value;
  }
  public resetNotificationTemplateDebugList() {
    this._notificationTemplateDebugList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTemplateDebugListInput() {
    return this._notificationTemplateDebugList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_notification_template_debug_log_oper thunder_ddos_notification_template_debug_log_oper}
*/
export class DataThunderDdosNotificationTemplateDebugLogOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_notification_template_debug_log_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosNotificationTemplateDebugLogOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosNotificationTemplateDebugLogOper to import
  * @param importFromId The id of the existing DataThunderDdosNotificationTemplateDebugLogOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_notification_template_debug_log_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosNotificationTemplateDebugLogOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_notification_template_debug_log_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_notification_template_debug_log_oper thunder_ddos_notification_template_debug_log_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosNotificationTemplateDebugLogOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosNotificationTemplateDebugLogOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_notification_template_debug_log_oper',
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
  private _oper = new DataThunderDdosNotificationTemplateDebugLogOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosNotificationTemplateDebugLogOperOper) {
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
      oper: dataThunderDdosNotificationTemplateDebugLogOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderDdosNotificationTemplateDebugLogOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosNotificationTemplateDebugLogOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
