// https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/alert#name Alert#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/alert#notification_lists Alert#notification_lists}
  */
  readonly notificationLists?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/alert#record_ids Alert#record_ids}
  */
  readonly recordIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/alert#subtype Alert#subtype}
  */
  readonly subtype: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/alert#type Alert#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/alert#zone_names Alert#zone_names}
  */
  readonly zoneNames?: string[];
  /**
  * data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/alert#data Alert#data}
  */
  readonly data?: AlertData[] | cdktf.IResolvable;
}
export interface AlertData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/alert#alert_at_percent Alert#alert_at_percent}
  */
  readonly alertAtPercent?: number;
}

export function alertDataToTerraform(struct?: AlertData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_at_percent: cdktf.numberToTerraform(struct!.alertAtPercent),
  }
}


export function alertDataToHclTerraform(struct?: AlertData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_at_percent: {
      value: cdktf.numberToHclTerraform(struct!.alertAtPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertAtPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertAtPercent = this._alertAtPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertAtPercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertAtPercent = value.alertAtPercent;
    }
  }

  // alert_at_percent - computed: false, optional: true, required: false
  private _alertAtPercent?: number; 
  public get alertAtPercent() {
    return this.getNumberAttribute('alert_at_percent');
  }
  public set alertAtPercent(value: number) {
    this._alertAtPercent = value;
  }
  public resetAlertAtPercent() {
    this._alertAtPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertAtPercentInput() {
    return this._alertAtPercent;
  }
}

export class AlertDataList extends cdktf.ComplexList {
  public internalValue? : AlertData[] | cdktf.IResolvable

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
  public get(index: number): AlertDataOutputReference {
    return new AlertDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/alert ns1_alert}
*/
export class Alert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ns1_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Alert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Alert to import
  * @param importFromId The id of the existing Alert that should be imported. Refer to the {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Alert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ns1_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.3/docs/resources/alert ns1_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertConfig
  */
  public constructor(scope: Construct, id: string, config: AlertConfig) {
    super(scope, id, {
      terraformResourceType: 'ns1_alert',
      terraformGeneratorMetadata: {
        providerName: 'ns1',
        providerVersion: '2.7.3',
        providerVersionConstraint: '2.7.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._notificationLists = config.notificationLists;
    this._recordIds = config.recordIds;
    this._subtype = config.subtype;
    this._type = config.type;
    this._zoneNames = config.zoneNames;
    this._data.internalValue = config.data;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notification_lists - computed: false, optional: true, required: false
  private _notificationLists?: string[]; 
  public get notificationLists() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_lists'));
  }
  public set notificationLists(value: string[]) {
    this._notificationLists = value;
  }
  public resetNotificationLists() {
    this._notificationLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationListsInput() {
    return this._notificationLists;
  }

  // record_ids - computed: false, optional: true, required: false
  private _recordIds?: string[]; 
  public get recordIds() {
    return cdktf.Fn.tolist(this.getListAttribute('record_ids'));
  }
  public set recordIds(value: string[]) {
    this._recordIds = value;
  }
  public resetRecordIds() {
    this._recordIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIdsInput() {
    return this._recordIds;
  }

  // subtype - computed: false, optional: false, required: true
  private _subtype?: string; 
  public get subtype() {
    return this.getStringAttribute('subtype');
  }
  public set subtype(value: string) {
    this._subtype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subtypeInput() {
    return this._subtype;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // zone_names - computed: false, optional: true, required: false
  private _zoneNames?: string[]; 
  public get zoneNames() {
    return cdktf.Fn.tolist(this.getListAttribute('zone_names'));
  }
  public set zoneNames(value: string[]) {
    this._zoneNames = value;
  }
  public resetZoneNames() {
    this._zoneNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNamesInput() {
    return this._zoneNames;
  }

  // data - computed: false, optional: true, required: false
  private _data = new AlertDataList(this, "data", true);
  public get data() {
    return this._data;
  }
  public putData(value: AlertData[] | cdktf.IResolvable) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      notification_lists: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notificationLists),
      record_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recordIds),
      subtype: cdktf.stringToTerraform(this._subtype),
      type: cdktf.stringToTerraform(this._type),
      zone_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zoneNames),
      data: cdktf.listMapper(alertDataToTerraform, true)(this._data.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_lists: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notificationLists),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      record_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recordIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      subtype: {
        value: cdktf.stringToHclTerraform(this._subtype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zoneNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      data: {
        value: cdktf.listMapperHcl(alertDataToHclTerraform, true)(this._data.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlertDataList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
