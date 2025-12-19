// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAcosEventsMessagesOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#id DataThunderAcosEventsMessagesOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#oper DataThunderAcosEventsMessagesOper#oper}
  */
  readonly oper?: DataThunderAcosEventsMessagesOperOper;
}
export interface DataThunderAcosEventsMessagesOperOperMessagesListCefCollectorGrpsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#name DataThunderAcosEventsMessagesOper#name}
  */
  readonly name?: string;
}

export function dataThunderAcosEventsMessagesOperOperMessagesListCefCollectorGrpsListStructToTerraform(struct?: DataThunderAcosEventsMessagesOperOperMessagesListCefCollectorGrpsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataThunderAcosEventsMessagesOperOperMessagesListCefCollectorGrpsListStructToHclTerraform(struct?: DataThunderAcosEventsMessagesOperOperMessagesListCefCollectorGrpsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAcosEventsMessagesOperOperMessagesListCefCollectorGrpsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAcosEventsMessagesOperOperMessagesListCefCollectorGrpsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAcosEventsMessagesOperOperMessagesListCefCollectorGrpsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class DataThunderAcosEventsMessagesOperOperMessagesListCefCollectorGrpsListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAcosEventsMessagesOperOperMessagesListCefCollectorGrpsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAcosEventsMessagesOperOperMessagesListCefCollectorGrpsListStructOutputReference {
    return new DataThunderAcosEventsMessagesOperOperMessagesListCefCollectorGrpsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAcosEventsMessagesOperOperMessagesListLeefCollectorGrpsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#name DataThunderAcosEventsMessagesOper#name}
  */
  readonly name?: string;
}

export function dataThunderAcosEventsMessagesOperOperMessagesListLeefCollectorGrpsListStructToTerraform(struct?: DataThunderAcosEventsMessagesOperOperMessagesListLeefCollectorGrpsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataThunderAcosEventsMessagesOperOperMessagesListLeefCollectorGrpsListStructToHclTerraform(struct?: DataThunderAcosEventsMessagesOperOperMessagesListLeefCollectorGrpsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAcosEventsMessagesOperOperMessagesListLeefCollectorGrpsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAcosEventsMessagesOperOperMessagesListLeefCollectorGrpsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAcosEventsMessagesOperOperMessagesListLeefCollectorGrpsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class DataThunderAcosEventsMessagesOperOperMessagesListLeefCollectorGrpsListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAcosEventsMessagesOperOperMessagesListLeefCollectorGrpsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAcosEventsMessagesOperOperMessagesListLeefCollectorGrpsListStructOutputReference {
    return new DataThunderAcosEventsMessagesOperOperMessagesListLeefCollectorGrpsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAcosEventsMessagesOperOperMessagesListLogDetailListCollectorGroupsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#name DataThunderAcosEventsMessagesOper#name}
  */
  readonly name?: string;
}

export function dataThunderAcosEventsMessagesOperOperMessagesListLogDetailListCollectorGroupsListStructToTerraform(struct?: DataThunderAcosEventsMessagesOperOperMessagesListLogDetailListCollectorGroupsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataThunderAcosEventsMessagesOperOperMessagesListLogDetailListCollectorGroupsListStructToHclTerraform(struct?: DataThunderAcosEventsMessagesOperOperMessagesListLogDetailListCollectorGroupsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAcosEventsMessagesOperOperMessagesListLogDetailListCollectorGroupsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAcosEventsMessagesOperOperMessagesListLogDetailListCollectorGroupsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAcosEventsMessagesOperOperMessagesListLogDetailListCollectorGroupsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class DataThunderAcosEventsMessagesOperOperMessagesListLogDetailListCollectorGroupsListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAcosEventsMessagesOperOperMessagesListLogDetailListCollectorGroupsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAcosEventsMessagesOperOperMessagesListLogDetailListCollectorGroupsListStructOutputReference {
    return new DataThunderAcosEventsMessagesOperOperMessagesListLogDetailListCollectorGroupsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAcosEventsMessagesOperOperMessagesListLogDetailListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#local_logging_conf DataThunderAcosEventsMessagesOper#local_logging_conf}
  */
  readonly localLoggingConf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#log_format DataThunderAcosEventsMessagesOper#log_format}
  */
  readonly logFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#log_name DataThunderAcosEventsMessagesOper#log_name}
  */
  readonly logName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#remote_logging_conf DataThunderAcosEventsMessagesOper#remote_logging_conf}
  */
  readonly remoteLoggingConf?: string;
  /**
  * collector_groups_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#collector_groups_list DataThunderAcosEventsMessagesOper#collector_groups_list}
  */
  readonly collectorGroupsList?: DataThunderAcosEventsMessagesOperOperMessagesListLogDetailListCollectorGroupsListStruct[] | cdktf.IResolvable;
}

export function dataThunderAcosEventsMessagesOperOperMessagesListLogDetailListStructToTerraform(struct?: DataThunderAcosEventsMessagesOperOperMessagesListLogDetailListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_logging_conf: cdktf.stringToTerraform(struct!.localLoggingConf),
    log_format: cdktf.stringToTerraform(struct!.logFormat),
    log_name: cdktf.stringToTerraform(struct!.logName),
    remote_logging_conf: cdktf.stringToTerraform(struct!.remoteLoggingConf),
    collector_groups_list: cdktf.listMapper(dataThunderAcosEventsMessagesOperOperMessagesListLogDetailListCollectorGroupsListStructToTerraform, true)(struct!.collectorGroupsList),
  }
}


export function dataThunderAcosEventsMessagesOperOperMessagesListLogDetailListStructToHclTerraform(struct?: DataThunderAcosEventsMessagesOperOperMessagesListLogDetailListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_logging_conf: {
      value: cdktf.stringToHclTerraform(struct!.localLoggingConf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_format: {
      value: cdktf.stringToHclTerraform(struct!.logFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_name: {
      value: cdktf.stringToHclTerraform(struct!.logName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_logging_conf: {
      value: cdktf.stringToHclTerraform(struct!.remoteLoggingConf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collector_groups_list: {
      value: cdktf.listMapperHcl(dataThunderAcosEventsMessagesOperOperMessagesListLogDetailListCollectorGroupsListStructToHclTerraform, true)(struct!.collectorGroupsList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAcosEventsMessagesOperOperMessagesListLogDetailListCollectorGroupsListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAcosEventsMessagesOperOperMessagesListLogDetailListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAcosEventsMessagesOperOperMessagesListLogDetailListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localLoggingConf !== undefined) {
      hasAnyValues = true;
      internalValueResult.localLoggingConf = this._localLoggingConf;
    }
    if (this._logFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFormat = this._logFormat;
    }
    if (this._logName !== undefined) {
      hasAnyValues = true;
      internalValueResult.logName = this._logName;
    }
    if (this._remoteLoggingConf !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteLoggingConf = this._remoteLoggingConf;
    }
    if (this._collectorGroupsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectorGroupsList = this._collectorGroupsList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAcosEventsMessagesOperOperMessagesListLogDetailListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localLoggingConf = undefined;
      this._logFormat = undefined;
      this._logName = undefined;
      this._remoteLoggingConf = undefined;
      this._collectorGroupsList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localLoggingConf = value.localLoggingConf;
      this._logFormat = value.logFormat;
      this._logName = value.logName;
      this._remoteLoggingConf = value.remoteLoggingConf;
      this._collectorGroupsList.internalValue = value.collectorGroupsList;
    }
  }

  // local_logging_conf - computed: false, optional: true, required: false
  private _localLoggingConf?: string; 
  public get localLoggingConf() {
    return this.getStringAttribute('local_logging_conf');
  }
  public set localLoggingConf(value: string) {
    this._localLoggingConf = value;
  }
  public resetLocalLoggingConf() {
    this._localLoggingConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localLoggingConfInput() {
    return this._localLoggingConf;
  }

  // log_format - computed: false, optional: true, required: false
  private _logFormat?: string; 
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string) {
    this._logFormat = value;
  }
  public resetLogFormat() {
    this._logFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat;
  }

  // log_name - computed: false, optional: true, required: false
  private _logName?: string; 
  public get logName() {
    return this.getStringAttribute('log_name');
  }
  public set logName(value: string) {
    this._logName = value;
  }
  public resetLogName() {
    this._logName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logNameInput() {
    return this._logName;
  }

  // remote_logging_conf - computed: false, optional: true, required: false
  private _remoteLoggingConf?: string; 
  public get remoteLoggingConf() {
    return this.getStringAttribute('remote_logging_conf');
  }
  public set remoteLoggingConf(value: string) {
    this._remoteLoggingConf = value;
  }
  public resetRemoteLoggingConf() {
    this._remoteLoggingConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteLoggingConfInput() {
    return this._remoteLoggingConf;
  }

  // collector_groups_list - computed: false, optional: true, required: false
  private _collectorGroupsList = new DataThunderAcosEventsMessagesOperOperMessagesListLogDetailListCollectorGroupsListStructList(this, "collector_groups_list", false);
  public get collectorGroupsList() {
    return this._collectorGroupsList;
  }
  public putCollectorGroupsList(value: DataThunderAcosEventsMessagesOperOperMessagesListLogDetailListCollectorGroupsListStruct[] | cdktf.IResolvable) {
    this._collectorGroupsList.internalValue = value;
  }
  public resetCollectorGroupsList() {
    this._collectorGroupsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorGroupsListInput() {
    return this._collectorGroupsList.internalValue;
  }
}

export class DataThunderAcosEventsMessagesOperOperMessagesListLogDetailListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAcosEventsMessagesOperOperMessagesListLogDetailListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAcosEventsMessagesOperOperMessagesListLogDetailListStructOutputReference {
    return new DataThunderAcosEventsMessagesOperOperMessagesListLogDetailListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAcosEventsMessagesOperOperMessagesListSyslogCollectorGrpsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#name DataThunderAcosEventsMessagesOper#name}
  */
  readonly name?: string;
}

export function dataThunderAcosEventsMessagesOperOperMessagesListSyslogCollectorGrpsListStructToTerraform(struct?: DataThunderAcosEventsMessagesOperOperMessagesListSyslogCollectorGrpsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataThunderAcosEventsMessagesOperOperMessagesListSyslogCollectorGrpsListStructToHclTerraform(struct?: DataThunderAcosEventsMessagesOperOperMessagesListSyslogCollectorGrpsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAcosEventsMessagesOperOperMessagesListSyslogCollectorGrpsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAcosEventsMessagesOperOperMessagesListSyslogCollectorGrpsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAcosEventsMessagesOperOperMessagesListSyslogCollectorGrpsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class DataThunderAcosEventsMessagesOperOperMessagesListSyslogCollectorGrpsListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAcosEventsMessagesOperOperMessagesListSyslogCollectorGrpsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAcosEventsMessagesOperOperMessagesListSyslogCollectorGrpsListStructOutputReference {
    return new DataThunderAcosEventsMessagesOperOperMessagesListSyslogCollectorGrpsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAcosEventsMessagesOperOperMessagesListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#cef DataThunderAcosEventsMessagesOper#cef}
  */
  readonly cef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#cef_importance DataThunderAcosEventsMessagesOper#cef_importance}
  */
  readonly cefImportance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#collector_group DataThunderAcosEventsMessagesOper#collector_group}
  */
  readonly collectorGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#configured_route DataThunderAcosEventsMessagesOper#configured_route}
  */
  readonly configuredRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#configured_severity DataThunderAcosEventsMessagesOper#configured_severity}
  */
  readonly configuredSeverity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#default_route DataThunderAcosEventsMessagesOper#default_route}
  */
  readonly defaultRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#defined_severity DataThunderAcosEventsMessagesOper#defined_severity}
  */
  readonly definedSeverity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#descriptive_name DataThunderAcosEventsMessagesOper#descriptive_name}
  */
  readonly descriptiveName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#disabled DataThunderAcosEventsMessagesOper#disabled}
  */
  readonly disabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#enabled DataThunderAcosEventsMessagesOper#enabled}
  */
  readonly enabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#leef DataThunderAcosEventsMessagesOper#leef}
  */
  readonly leef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#local DataThunderAcosEventsMessagesOper#local}
  */
  readonly local?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#message_id DataThunderAcosEventsMessagesOper#message_id}
  */
  readonly messageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#message_route DataThunderAcosEventsMessagesOper#message_route}
  */
  readonly messageRoute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#not_defined DataThunderAcosEventsMessagesOper#not_defined}
  */
  readonly notDefined?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#rate_limiting DataThunderAcosEventsMessagesOper#rate_limiting}
  */
  readonly rateLimiting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#remote DataThunderAcosEventsMessagesOper#remote}
  */
  readonly remote?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#signature DataThunderAcosEventsMessagesOper#signature}
  */
  readonly signature?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#syslog DataThunderAcosEventsMessagesOper#syslog}
  */
  readonly syslog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#trigger_reason DataThunderAcosEventsMessagesOper#trigger_reason}
  */
  readonly triggerReason?: string;
  /**
  * cef_collector_grps_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#cef_collector_grps_list DataThunderAcosEventsMessagesOper#cef_collector_grps_list}
  */
  readonly cefCollectorGrpsList?: DataThunderAcosEventsMessagesOperOperMessagesListCefCollectorGrpsListStruct[] | cdktf.IResolvable;
  /**
  * leef_collector_grps_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#leef_collector_grps_list DataThunderAcosEventsMessagesOper#leef_collector_grps_list}
  */
  readonly leefCollectorGrpsList?: DataThunderAcosEventsMessagesOperOperMessagesListLeefCollectorGrpsListStruct[] | cdktf.IResolvable;
  /**
  * log_detail_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#log_detail_list DataThunderAcosEventsMessagesOper#log_detail_list}
  */
  readonly logDetailList?: DataThunderAcosEventsMessagesOperOperMessagesListLogDetailListStruct[] | cdktf.IResolvable;
  /**
  * syslog_collector_grps_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#syslog_collector_grps_list DataThunderAcosEventsMessagesOper#syslog_collector_grps_list}
  */
  readonly syslogCollectorGrpsList?: DataThunderAcosEventsMessagesOperOperMessagesListSyslogCollectorGrpsListStruct[] | cdktf.IResolvable;
}

export function dataThunderAcosEventsMessagesOperOperMessagesListStructToTerraform(struct?: DataThunderAcosEventsMessagesOperOperMessagesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cef: cdktf.stringToTerraform(struct!.cef),
    cef_importance: cdktf.numberToTerraform(struct!.cefImportance),
    collector_group: cdktf.stringToTerraform(struct!.collectorGroup),
    configured_route: cdktf.stringToTerraform(struct!.configuredRoute),
    configured_severity: cdktf.numberToTerraform(struct!.configuredSeverity),
    default_route: cdktf.stringToTerraform(struct!.defaultRoute),
    defined_severity: cdktf.numberToTerraform(struct!.definedSeverity),
    descriptive_name: cdktf.stringToTerraform(struct!.descriptiveName),
    disabled: cdktf.numberToTerraform(struct!.disabled),
    enabled: cdktf.numberToTerraform(struct!.enabled),
    leef: cdktf.stringToTerraform(struct!.leef),
    local: cdktf.stringToTerraform(struct!.local),
    message_id: cdktf.stringToTerraform(struct!.messageId),
    message_route: cdktf.stringToTerraform(struct!.messageRoute),
    not_defined: cdktf.numberToTerraform(struct!.notDefined),
    rate_limiting: cdktf.stringToTerraform(struct!.rateLimiting),
    remote: cdktf.stringToTerraform(struct!.remote),
    signature: cdktf.stringToTerraform(struct!.signature),
    syslog: cdktf.stringToTerraform(struct!.syslog),
    trigger_reason: cdktf.stringToTerraform(struct!.triggerReason),
    cef_collector_grps_list: cdktf.listMapper(dataThunderAcosEventsMessagesOperOperMessagesListCefCollectorGrpsListStructToTerraform, true)(struct!.cefCollectorGrpsList),
    leef_collector_grps_list: cdktf.listMapper(dataThunderAcosEventsMessagesOperOperMessagesListLeefCollectorGrpsListStructToTerraform, true)(struct!.leefCollectorGrpsList),
    log_detail_list: cdktf.listMapper(dataThunderAcosEventsMessagesOperOperMessagesListLogDetailListStructToTerraform, true)(struct!.logDetailList),
    syslog_collector_grps_list: cdktf.listMapper(dataThunderAcosEventsMessagesOperOperMessagesListSyslogCollectorGrpsListStructToTerraform, true)(struct!.syslogCollectorGrpsList),
  }
}


export function dataThunderAcosEventsMessagesOperOperMessagesListStructToHclTerraform(struct?: DataThunderAcosEventsMessagesOperOperMessagesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cef: {
      value: cdktf.stringToHclTerraform(struct!.cef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cef_importance: {
      value: cdktf.numberToHclTerraform(struct!.cefImportance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    collector_group: {
      value: cdktf.stringToHclTerraform(struct!.collectorGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configured_route: {
      value: cdktf.stringToHclTerraform(struct!.configuredRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configured_severity: {
      value: cdktf.numberToHclTerraform(struct!.configuredSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_route: {
      value: cdktf.stringToHclTerraform(struct!.defaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    defined_severity: {
      value: cdktf.numberToHclTerraform(struct!.definedSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    descriptive_name: {
      value: cdktf.stringToHclTerraform(struct!.descriptiveName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.numberToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.numberToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    leef: {
      value: cdktf.stringToHclTerraform(struct!.leef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local: {
      value: cdktf.stringToHclTerraform(struct!.local),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_id: {
      value: cdktf.stringToHclTerraform(struct!.messageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_route: {
      value: cdktf.stringToHclTerraform(struct!.messageRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_defined: {
      value: cdktf.numberToHclTerraform(struct!.notDefined),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_limiting: {
      value: cdktf.stringToHclTerraform(struct!.rateLimiting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote: {
      value: cdktf.stringToHclTerraform(struct!.remote),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature: {
      value: cdktf.stringToHclTerraform(struct!.signature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syslog: {
      value: cdktf.stringToHclTerraform(struct!.syslog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_reason: {
      value: cdktf.stringToHclTerraform(struct!.triggerReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cef_collector_grps_list: {
      value: cdktf.listMapperHcl(dataThunderAcosEventsMessagesOperOperMessagesListCefCollectorGrpsListStructToHclTerraform, true)(struct!.cefCollectorGrpsList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAcosEventsMessagesOperOperMessagesListCefCollectorGrpsListStructList",
    },
    leef_collector_grps_list: {
      value: cdktf.listMapperHcl(dataThunderAcosEventsMessagesOperOperMessagesListLeefCollectorGrpsListStructToHclTerraform, true)(struct!.leefCollectorGrpsList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAcosEventsMessagesOperOperMessagesListLeefCollectorGrpsListStructList",
    },
    log_detail_list: {
      value: cdktf.listMapperHcl(dataThunderAcosEventsMessagesOperOperMessagesListLogDetailListStructToHclTerraform, true)(struct!.logDetailList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAcosEventsMessagesOperOperMessagesListLogDetailListStructList",
    },
    syslog_collector_grps_list: {
      value: cdktf.listMapperHcl(dataThunderAcosEventsMessagesOperOperMessagesListSyslogCollectorGrpsListStructToHclTerraform, true)(struct!.syslogCollectorGrpsList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAcosEventsMessagesOperOperMessagesListSyslogCollectorGrpsListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAcosEventsMessagesOperOperMessagesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAcosEventsMessagesOperOperMessagesListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cef !== undefined) {
      hasAnyValues = true;
      internalValueResult.cef = this._cef;
    }
    if (this._cefImportance !== undefined) {
      hasAnyValues = true;
      internalValueResult.cefImportance = this._cefImportance;
    }
    if (this._collectorGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectorGroup = this._collectorGroup;
    }
    if (this._configuredRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuredRoute = this._configuredRoute;
    }
    if (this._configuredSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuredSeverity = this._configuredSeverity;
    }
    if (this._defaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRoute = this._defaultRoute;
    }
    if (this._definedSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedSeverity = this._definedSeverity;
    }
    if (this._descriptiveName !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptiveName = this._descriptiveName;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._leef !== undefined) {
      hasAnyValues = true;
      internalValueResult.leef = this._leef;
    }
    if (this._local !== undefined) {
      hasAnyValues = true;
      internalValueResult.local = this._local;
    }
    if (this._messageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageId = this._messageId;
    }
    if (this._messageRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageRoute = this._messageRoute;
    }
    if (this._notDefined !== undefined) {
      hasAnyValues = true;
      internalValueResult.notDefined = this._notDefined;
    }
    if (this._rateLimiting !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimiting = this._rateLimiting;
    }
    if (this._remote !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote;
    }
    if (this._signature !== undefined) {
      hasAnyValues = true;
      internalValueResult.signature = this._signature;
    }
    if (this._syslog !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslog = this._syslog;
    }
    if (this._triggerReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerReason = this._triggerReason;
    }
    if (this._cefCollectorGrpsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cefCollectorGrpsList = this._cefCollectorGrpsList?.internalValue;
    }
    if (this._leefCollectorGrpsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.leefCollectorGrpsList = this._leefCollectorGrpsList?.internalValue;
    }
    if (this._logDetailList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDetailList = this._logDetailList?.internalValue;
    }
    if (this._syslogCollectorGrpsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslogCollectorGrpsList = this._syslogCollectorGrpsList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAcosEventsMessagesOperOperMessagesListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cef = undefined;
      this._cefImportance = undefined;
      this._collectorGroup = undefined;
      this._configuredRoute = undefined;
      this._configuredSeverity = undefined;
      this._defaultRoute = undefined;
      this._definedSeverity = undefined;
      this._descriptiveName = undefined;
      this._disabled = undefined;
      this._enabled = undefined;
      this._leef = undefined;
      this._local = undefined;
      this._messageId = undefined;
      this._messageRoute = undefined;
      this._notDefined = undefined;
      this._rateLimiting = undefined;
      this._remote = undefined;
      this._signature = undefined;
      this._syslog = undefined;
      this._triggerReason = undefined;
      this._cefCollectorGrpsList.internalValue = undefined;
      this._leefCollectorGrpsList.internalValue = undefined;
      this._logDetailList.internalValue = undefined;
      this._syslogCollectorGrpsList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cef = value.cef;
      this._cefImportance = value.cefImportance;
      this._collectorGroup = value.collectorGroup;
      this._configuredRoute = value.configuredRoute;
      this._configuredSeverity = value.configuredSeverity;
      this._defaultRoute = value.defaultRoute;
      this._definedSeverity = value.definedSeverity;
      this._descriptiveName = value.descriptiveName;
      this._disabled = value.disabled;
      this._enabled = value.enabled;
      this._leef = value.leef;
      this._local = value.local;
      this._messageId = value.messageId;
      this._messageRoute = value.messageRoute;
      this._notDefined = value.notDefined;
      this._rateLimiting = value.rateLimiting;
      this._remote = value.remote;
      this._signature = value.signature;
      this._syslog = value.syslog;
      this._triggerReason = value.triggerReason;
      this._cefCollectorGrpsList.internalValue = value.cefCollectorGrpsList;
      this._leefCollectorGrpsList.internalValue = value.leefCollectorGrpsList;
      this._logDetailList.internalValue = value.logDetailList;
      this._syslogCollectorGrpsList.internalValue = value.syslogCollectorGrpsList;
    }
  }

  // cef - computed: false, optional: true, required: false
  private _cef?: string; 
  public get cef() {
    return this.getStringAttribute('cef');
  }
  public set cef(value: string) {
    this._cef = value;
  }
  public resetCef() {
    this._cef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cefInput() {
    return this._cef;
  }

  // cef_importance - computed: false, optional: true, required: false
  private _cefImportance?: number; 
  public get cefImportance() {
    return this.getNumberAttribute('cef_importance');
  }
  public set cefImportance(value: number) {
    this._cefImportance = value;
  }
  public resetCefImportance() {
    this._cefImportance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cefImportanceInput() {
    return this._cefImportance;
  }

  // collector_group - computed: false, optional: true, required: false
  private _collectorGroup?: string; 
  public get collectorGroup() {
    return this.getStringAttribute('collector_group');
  }
  public set collectorGroup(value: string) {
    this._collectorGroup = value;
  }
  public resetCollectorGroup() {
    this._collectorGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorGroupInput() {
    return this._collectorGroup;
  }

  // configured_route - computed: false, optional: true, required: false
  private _configuredRoute?: string; 
  public get configuredRoute() {
    return this.getStringAttribute('configured_route');
  }
  public set configuredRoute(value: string) {
    this._configuredRoute = value;
  }
  public resetConfiguredRoute() {
    this._configuredRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredRouteInput() {
    return this._configuredRoute;
  }

  // configured_severity - computed: false, optional: true, required: false
  private _configuredSeverity?: number; 
  public get configuredSeverity() {
    return this.getNumberAttribute('configured_severity');
  }
  public set configuredSeverity(value: number) {
    this._configuredSeverity = value;
  }
  public resetConfiguredSeverity() {
    this._configuredSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredSeverityInput() {
    return this._configuredSeverity;
  }

  // default_route - computed: false, optional: true, required: false
  private _defaultRoute?: string; 
  public get defaultRoute() {
    return this.getStringAttribute('default_route');
  }
  public set defaultRoute(value: string) {
    this._defaultRoute = value;
  }
  public resetDefaultRoute() {
    this._defaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteInput() {
    return this._defaultRoute;
  }

  // defined_severity - computed: false, optional: true, required: false
  private _definedSeverity?: number; 
  public get definedSeverity() {
    return this.getNumberAttribute('defined_severity');
  }
  public set definedSeverity(value: number) {
    this._definedSeverity = value;
  }
  public resetDefinedSeverity() {
    this._definedSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedSeverityInput() {
    return this._definedSeverity;
  }

  // descriptive_name - computed: false, optional: true, required: false
  private _descriptiveName?: string; 
  public get descriptiveName() {
    return this.getStringAttribute('descriptive_name');
  }
  public set descriptiveName(value: string) {
    this._descriptiveName = value;
  }
  public resetDescriptiveName() {
    this._descriptiveName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptiveNameInput() {
    return this._descriptiveName;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: number; 
  public get disabled() {
    return this.getNumberAttribute('disabled');
  }
  public set disabled(value: number) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: number; 
  public get enabled() {
    return this.getNumberAttribute('enabled');
  }
  public set enabled(value: number) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // leef - computed: false, optional: true, required: false
  private _leef?: string; 
  public get leef() {
    return this.getStringAttribute('leef');
  }
  public set leef(value: string) {
    this._leef = value;
  }
  public resetLeef() {
    this._leef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leefInput() {
    return this._leef;
  }

  // local - computed: false, optional: true, required: false
  private _local?: string; 
  public get local() {
    return this.getStringAttribute('local');
  }
  public set local(value: string) {
    this._local = value;
  }
  public resetLocal() {
    this._local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local;
  }

  // message_id - computed: false, optional: true, required: false
  private _messageId?: string; 
  public get messageId() {
    return this.getStringAttribute('message_id');
  }
  public set messageId(value: string) {
    this._messageId = value;
  }
  public resetMessageId() {
    this._messageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageIdInput() {
    return this._messageId;
  }

  // message_route - computed: false, optional: true, required: false
  private _messageRoute?: string; 
  public get messageRoute() {
    return this.getStringAttribute('message_route');
  }
  public set messageRoute(value: string) {
    this._messageRoute = value;
  }
  public resetMessageRoute() {
    this._messageRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageRouteInput() {
    return this._messageRoute;
  }

  // not_defined - computed: false, optional: true, required: false
  private _notDefined?: number; 
  public get notDefined() {
    return this.getNumberAttribute('not_defined');
  }
  public set notDefined(value: number) {
    this._notDefined = value;
  }
  public resetNotDefined() {
    this._notDefined = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notDefinedInput() {
    return this._notDefined;
  }

  // rate_limiting - computed: false, optional: true, required: false
  private _rateLimiting?: string; 
  public get rateLimiting() {
    return this.getStringAttribute('rate_limiting');
  }
  public set rateLimiting(value: string) {
    this._rateLimiting = value;
  }
  public resetRateLimiting() {
    this._rateLimiting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitingInput() {
    return this._rateLimiting;
  }

  // remote - computed: false, optional: true, required: false
  private _remote?: string; 
  public get remote() {
    return this.getStringAttribute('remote');
  }
  public set remote(value: string) {
    this._remote = value;
  }
  public resetRemote() {
    this._remote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote;
  }

  // signature - computed: false, optional: true, required: false
  private _signature?: string; 
  public get signature() {
    return this.getStringAttribute('signature');
  }
  public set signature(value: string) {
    this._signature = value;
  }
  public resetSignature() {
    this._signature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureInput() {
    return this._signature;
  }

  // syslog - computed: false, optional: true, required: false
  private _syslog?: string; 
  public get syslog() {
    return this.getStringAttribute('syslog');
  }
  public set syslog(value: string) {
    this._syslog = value;
  }
  public resetSyslog() {
    this._syslog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogInput() {
    return this._syslog;
  }

  // trigger_reason - computed: false, optional: true, required: false
  private _triggerReason?: string; 
  public get triggerReason() {
    return this.getStringAttribute('trigger_reason');
  }
  public set triggerReason(value: string) {
    this._triggerReason = value;
  }
  public resetTriggerReason() {
    this._triggerReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerReasonInput() {
    return this._triggerReason;
  }

  // cef_collector_grps_list - computed: false, optional: true, required: false
  private _cefCollectorGrpsList = new DataThunderAcosEventsMessagesOperOperMessagesListCefCollectorGrpsListStructList(this, "cef_collector_grps_list", false);
  public get cefCollectorGrpsList() {
    return this._cefCollectorGrpsList;
  }
  public putCefCollectorGrpsList(value: DataThunderAcosEventsMessagesOperOperMessagesListCefCollectorGrpsListStruct[] | cdktf.IResolvable) {
    this._cefCollectorGrpsList.internalValue = value;
  }
  public resetCefCollectorGrpsList() {
    this._cefCollectorGrpsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cefCollectorGrpsListInput() {
    return this._cefCollectorGrpsList.internalValue;
  }

  // leef_collector_grps_list - computed: false, optional: true, required: false
  private _leefCollectorGrpsList = new DataThunderAcosEventsMessagesOperOperMessagesListLeefCollectorGrpsListStructList(this, "leef_collector_grps_list", false);
  public get leefCollectorGrpsList() {
    return this._leefCollectorGrpsList;
  }
  public putLeefCollectorGrpsList(value: DataThunderAcosEventsMessagesOperOperMessagesListLeefCollectorGrpsListStruct[] | cdktf.IResolvable) {
    this._leefCollectorGrpsList.internalValue = value;
  }
  public resetLeefCollectorGrpsList() {
    this._leefCollectorGrpsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leefCollectorGrpsListInput() {
    return this._leefCollectorGrpsList.internalValue;
  }

  // log_detail_list - computed: false, optional: true, required: false
  private _logDetailList = new DataThunderAcosEventsMessagesOperOperMessagesListLogDetailListStructList(this, "log_detail_list", false);
  public get logDetailList() {
    return this._logDetailList;
  }
  public putLogDetailList(value: DataThunderAcosEventsMessagesOperOperMessagesListLogDetailListStruct[] | cdktf.IResolvable) {
    this._logDetailList.internalValue = value;
  }
  public resetLogDetailList() {
    this._logDetailList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDetailListInput() {
    return this._logDetailList.internalValue;
  }

  // syslog_collector_grps_list - computed: false, optional: true, required: false
  private _syslogCollectorGrpsList = new DataThunderAcosEventsMessagesOperOperMessagesListSyslogCollectorGrpsListStructList(this, "syslog_collector_grps_list", false);
  public get syslogCollectorGrpsList() {
    return this._syslogCollectorGrpsList;
  }
  public putSyslogCollectorGrpsList(value: DataThunderAcosEventsMessagesOperOperMessagesListSyslogCollectorGrpsListStruct[] | cdktf.IResolvable) {
    this._syslogCollectorGrpsList.internalValue = value;
  }
  public resetSyslogCollectorGrpsList() {
    this._syslogCollectorGrpsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogCollectorGrpsListInput() {
    return this._syslogCollectorGrpsList.internalValue;
  }
}

export class DataThunderAcosEventsMessagesOperOperMessagesListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAcosEventsMessagesOperOperMessagesListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAcosEventsMessagesOperOperMessagesListStructOutputReference {
    return new DataThunderAcosEventsMessagesOperOperMessagesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAcosEventsMessagesOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#active_log_count DataThunderAcosEventsMessagesOper#active_log_count}
  */
  readonly activeLogCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#active_msgs DataThunderAcosEventsMessagesOper#active_msgs}
  */
  readonly activeMsgs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#all_msgs DataThunderAcosEventsMessagesOper#all_msgs}
  */
  readonly allMsgs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#debug_msgs DataThunderAcosEventsMessagesOper#debug_msgs}
  */
  readonly debugMsgs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#message_id DataThunderAcosEventsMessagesOper#message_id}
  */
  readonly messageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#message_id_scope DataThunderAcosEventsMessagesOper#message_id_scope}
  */
  readonly messageIdScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#total_log_count DataThunderAcosEventsMessagesOper#total_log_count}
  */
  readonly totalLogCount?: number;
  /**
  * messages_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#messages_list DataThunderAcosEventsMessagesOper#messages_list}
  */
  readonly messagesList?: DataThunderAcosEventsMessagesOperOperMessagesListStruct[] | cdktf.IResolvable;
}

export function dataThunderAcosEventsMessagesOperOperToTerraform(struct?: DataThunderAcosEventsMessagesOperOperOutputReference | DataThunderAcosEventsMessagesOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_log_count: cdktf.numberToTerraform(struct!.activeLogCount),
    active_msgs: cdktf.numberToTerraform(struct!.activeMsgs),
    all_msgs: cdktf.numberToTerraform(struct!.allMsgs),
    debug_msgs: cdktf.numberToTerraform(struct!.debugMsgs),
    message_id: cdktf.stringToTerraform(struct!.messageId),
    message_id_scope: cdktf.stringToTerraform(struct!.messageIdScope),
    total_log_count: cdktf.numberToTerraform(struct!.totalLogCount),
    messages_list: cdktf.listMapper(dataThunderAcosEventsMessagesOperOperMessagesListStructToTerraform, true)(struct!.messagesList),
  }
}


export function dataThunderAcosEventsMessagesOperOperToHclTerraform(struct?: DataThunderAcosEventsMessagesOperOperOutputReference | DataThunderAcosEventsMessagesOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_log_count: {
      value: cdktf.numberToHclTerraform(struct!.activeLogCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    active_msgs: {
      value: cdktf.numberToHclTerraform(struct!.activeMsgs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    all_msgs: {
      value: cdktf.numberToHclTerraform(struct!.allMsgs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    debug_msgs: {
      value: cdktf.numberToHclTerraform(struct!.debugMsgs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    message_id: {
      value: cdktf.stringToHclTerraform(struct!.messageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_id_scope: {
      value: cdktf.stringToHclTerraform(struct!.messageIdScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_log_count: {
      value: cdktf.numberToHclTerraform(struct!.totalLogCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    messages_list: {
      value: cdktf.listMapperHcl(dataThunderAcosEventsMessagesOperOperMessagesListStructToHclTerraform, true)(struct!.messagesList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAcosEventsMessagesOperOperMessagesListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAcosEventsMessagesOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAcosEventsMessagesOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeLogCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeLogCount = this._activeLogCount;
    }
    if (this._activeMsgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeMsgs = this._activeMsgs;
    }
    if (this._allMsgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.allMsgs = this._allMsgs;
    }
    if (this._debugMsgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugMsgs = this._debugMsgs;
    }
    if (this._messageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageId = this._messageId;
    }
    if (this._messageIdScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageIdScope = this._messageIdScope;
    }
    if (this._totalLogCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalLogCount = this._totalLogCount;
    }
    if (this._messagesList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messagesList = this._messagesList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAcosEventsMessagesOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeLogCount = undefined;
      this._activeMsgs = undefined;
      this._allMsgs = undefined;
      this._debugMsgs = undefined;
      this._messageId = undefined;
      this._messageIdScope = undefined;
      this._totalLogCount = undefined;
      this._messagesList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeLogCount = value.activeLogCount;
      this._activeMsgs = value.activeMsgs;
      this._allMsgs = value.allMsgs;
      this._debugMsgs = value.debugMsgs;
      this._messageId = value.messageId;
      this._messageIdScope = value.messageIdScope;
      this._totalLogCount = value.totalLogCount;
      this._messagesList.internalValue = value.messagesList;
    }
  }

  // active_log_count - computed: false, optional: true, required: false
  private _activeLogCount?: number; 
  public get activeLogCount() {
    return this.getNumberAttribute('active_log_count');
  }
  public set activeLogCount(value: number) {
    this._activeLogCount = value;
  }
  public resetActiveLogCount() {
    this._activeLogCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeLogCountInput() {
    return this._activeLogCount;
  }

  // active_msgs - computed: false, optional: true, required: false
  private _activeMsgs?: number; 
  public get activeMsgs() {
    return this.getNumberAttribute('active_msgs');
  }
  public set activeMsgs(value: number) {
    this._activeMsgs = value;
  }
  public resetActiveMsgs() {
    this._activeMsgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeMsgsInput() {
    return this._activeMsgs;
  }

  // all_msgs - computed: false, optional: true, required: false
  private _allMsgs?: number; 
  public get allMsgs() {
    return this.getNumberAttribute('all_msgs');
  }
  public set allMsgs(value: number) {
    this._allMsgs = value;
  }
  public resetAllMsgs() {
    this._allMsgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allMsgsInput() {
    return this._allMsgs;
  }

  // debug_msgs - computed: false, optional: true, required: false
  private _debugMsgs?: number; 
  public get debugMsgs() {
    return this.getNumberAttribute('debug_msgs');
  }
  public set debugMsgs(value: number) {
    this._debugMsgs = value;
  }
  public resetDebugMsgs() {
    this._debugMsgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugMsgsInput() {
    return this._debugMsgs;
  }

  // message_id - computed: false, optional: true, required: false
  private _messageId?: string; 
  public get messageId() {
    return this.getStringAttribute('message_id');
  }
  public set messageId(value: string) {
    this._messageId = value;
  }
  public resetMessageId() {
    this._messageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageIdInput() {
    return this._messageId;
  }

  // message_id_scope - computed: false, optional: true, required: false
  private _messageIdScope?: string; 
  public get messageIdScope() {
    return this.getStringAttribute('message_id_scope');
  }
  public set messageIdScope(value: string) {
    this._messageIdScope = value;
  }
  public resetMessageIdScope() {
    this._messageIdScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageIdScopeInput() {
    return this._messageIdScope;
  }

  // total_log_count - computed: false, optional: true, required: false
  private _totalLogCount?: number; 
  public get totalLogCount() {
    return this.getNumberAttribute('total_log_count');
  }
  public set totalLogCount(value: number) {
    this._totalLogCount = value;
  }
  public resetTotalLogCount() {
    this._totalLogCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalLogCountInput() {
    return this._totalLogCount;
  }

  // messages_list - computed: false, optional: true, required: false
  private _messagesList = new DataThunderAcosEventsMessagesOperOperMessagesListStructList(this, "messages_list", false);
  public get messagesList() {
    return this._messagesList;
  }
  public putMessagesList(value: DataThunderAcosEventsMessagesOperOperMessagesListStruct[] | cdktf.IResolvable) {
    this._messagesList.internalValue = value;
  }
  public resetMessagesList() {
    this._messagesList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesListInput() {
    return this._messagesList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper thunder_acos_events_messages_oper}
*/
export class DataThunderAcosEventsMessagesOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_acos_events_messages_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAcosEventsMessagesOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAcosEventsMessagesOper to import
  * @param importFromId The id of the existing DataThunderAcosEventsMessagesOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAcosEventsMessagesOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_acos_events_messages_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/acos_events_messages_oper thunder_acos_events_messages_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAcosEventsMessagesOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderAcosEventsMessagesOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_acos_events_messages_oper',
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
  private _oper = new DataThunderAcosEventsMessagesOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderAcosEventsMessagesOperOper) {
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
      oper: dataThunderAcosEventsMessagesOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderAcosEventsMessagesOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAcosEventsMessagesOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
