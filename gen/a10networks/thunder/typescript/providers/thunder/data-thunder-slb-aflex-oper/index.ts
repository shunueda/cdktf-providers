// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbAflexOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#id DataThunderSlbAflexOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#oper DataThunderSlbAflexOper#oper}
  */
  readonly oper?: DataThunderSlbAflexOperOper;
}
export interface DataThunderSlbAflexOperOperFileListEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#aborts DataThunderSlbAflexOper#aborts}
  */
  readonly aborts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#event_type DataThunderSlbAflexOper#event_type}
  */
  readonly eventType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#exceed_time_limit DataThunderSlbAflexOper#exceed_time_limit}
  */
  readonly exceedTimeLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#failures DataThunderSlbAflexOper#failures}
  */
  readonly failures?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#total_executions DataThunderSlbAflexOper#total_executions}
  */
  readonly totalExecutions?: number;
}

export function dataThunderSlbAflexOperOperFileListEventsToTerraform(struct?: DataThunderSlbAflexOperOperFileListEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aborts: cdktf.numberToTerraform(struct!.aborts),
    event_type: cdktf.stringToTerraform(struct!.eventType),
    exceed_time_limit: cdktf.numberToTerraform(struct!.exceedTimeLimit),
    failures: cdktf.numberToTerraform(struct!.failures),
    total_executions: cdktf.numberToTerraform(struct!.totalExecutions),
  }
}


export function dataThunderSlbAflexOperOperFileListEventsToHclTerraform(struct?: DataThunderSlbAflexOperOperFileListEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aborts: {
      value: cdktf.numberToHclTerraform(struct!.aborts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    event_type: {
      value: cdktf.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exceed_time_limit: {
      value: cdktf.numberToHclTerraform(struct!.exceedTimeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failures: {
      value: cdktf.numberToHclTerraform(struct!.failures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_executions: {
      value: cdktf.numberToHclTerraform(struct!.totalExecutions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbAflexOperOperFileListEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbAflexOperOperFileListEvents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aborts !== undefined) {
      hasAnyValues = true;
      internalValueResult.aborts = this._aborts;
    }
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._exceedTimeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedTimeLimit = this._exceedTimeLimit;
    }
    if (this._failures !== undefined) {
      hasAnyValues = true;
      internalValueResult.failures = this._failures;
    }
    if (this._totalExecutions !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalExecutions = this._totalExecutions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbAflexOperOperFileListEvents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aborts = undefined;
      this._eventType = undefined;
      this._exceedTimeLimit = undefined;
      this._failures = undefined;
      this._totalExecutions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aborts = value.aborts;
      this._eventType = value.eventType;
      this._exceedTimeLimit = value.exceedTimeLimit;
      this._failures = value.failures;
      this._totalExecutions = value.totalExecutions;
    }
  }

  // aborts - computed: false, optional: true, required: false
  private _aborts?: number; 
  public get aborts() {
    return this.getNumberAttribute('aborts');
  }
  public set aborts(value: number) {
    this._aborts = value;
  }
  public resetAborts() {
    this._aborts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortsInput() {
    return this._aborts;
  }

  // event_type - computed: false, optional: true, required: false
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  public resetEventType() {
    this._eventType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // exceed_time_limit - computed: false, optional: true, required: false
  private _exceedTimeLimit?: number; 
  public get exceedTimeLimit() {
    return this.getNumberAttribute('exceed_time_limit');
  }
  public set exceedTimeLimit(value: number) {
    this._exceedTimeLimit = value;
  }
  public resetExceedTimeLimit() {
    this._exceedTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedTimeLimitInput() {
    return this._exceedTimeLimit;
  }

  // failures - computed: false, optional: true, required: false
  private _failures?: number; 
  public get failures() {
    return this.getNumberAttribute('failures');
  }
  public set failures(value: number) {
    this._failures = value;
  }
  public resetFailures() {
    this._failures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failuresInput() {
    return this._failures;
  }

  // total_executions - computed: false, optional: true, required: false
  private _totalExecutions?: number; 
  public get totalExecutions() {
    return this.getNumberAttribute('total_executions');
  }
  public set totalExecutions(value: number) {
    this._totalExecutions = value;
  }
  public resetTotalExecutions() {
    this._totalExecutions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalExecutionsInput() {
    return this._totalExecutions;
  }
}

export class DataThunderSlbAflexOperOperFileListEventsList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbAflexOperOperFileListEvents[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbAflexOperOperFileListEventsOutputReference {
    return new DataThunderSlbAflexOperOperFileListEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbAflexOperOperFileListVportListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#port DataThunderSlbAflexOper#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#vserver DataThunderSlbAflexOper#vserver}
  */
  readonly vserver?: string;
}

export function dataThunderSlbAflexOperOperFileListVportListStructToTerraform(struct?: DataThunderSlbAflexOperOperFileListVportListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    vserver: cdktf.stringToTerraform(struct!.vserver),
  }
}


export function dataThunderSlbAflexOperOperFileListVportListStructToHclTerraform(struct?: DataThunderSlbAflexOperOperFileListVportListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vserver: {
      value: cdktf.stringToHclTerraform(struct!.vserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbAflexOperOperFileListVportListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbAflexOperOperFileListVportListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._vserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.vserver = this._vserver;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbAflexOperOperFileListVportListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._vserver = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._vserver = value.vserver;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // vserver - computed: false, optional: true, required: false
  private _vserver?: string; 
  public get vserver() {
    return this.getStringAttribute('vserver');
  }
  public set vserver(value: string) {
    this._vserver = value;
  }
  public resetVserver() {
    this._vserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vserverInput() {
    return this._vserver;
  }
}

export class DataThunderSlbAflexOperOperFileListVportListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbAflexOperOperFileListVportListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbAflexOperOperFileListVportListStructOutputReference {
    return new DataThunderSlbAflexOperOperFileListVportListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbAflexOperOperFileListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#file DataThunderSlbAflexOper#file}
  */
  readonly file?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#syntax DataThunderSlbAflexOper#syntax}
  */
  readonly syntax?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#vport_bound DataThunderSlbAflexOper#vport_bound}
  */
  readonly vportBound?: string;
  /**
  * events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#events DataThunderSlbAflexOper#events}
  */
  readonly events?: DataThunderSlbAflexOperOperFileListEvents[] | cdktf.IResolvable;
  /**
  * vport_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#vport_list DataThunderSlbAflexOper#vport_list}
  */
  readonly vportList?: DataThunderSlbAflexOperOperFileListVportListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbAflexOperOperFileListStructToTerraform(struct?: DataThunderSlbAflexOperOperFileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: cdktf.stringToTerraform(struct!.file),
    syntax: cdktf.stringToTerraform(struct!.syntax),
    vport_bound: cdktf.stringToTerraform(struct!.vportBound),
    events: cdktf.listMapper(dataThunderSlbAflexOperOperFileListEventsToTerraform, true)(struct!.events),
    vport_list: cdktf.listMapper(dataThunderSlbAflexOperOperFileListVportListStructToTerraform, true)(struct!.vportList),
  }
}


export function dataThunderSlbAflexOperOperFileListStructToHclTerraform(struct?: DataThunderSlbAflexOperOperFileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syntax: {
      value: cdktf.stringToHclTerraform(struct!.syntax),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vport_bound: {
      value: cdktf.stringToHclTerraform(struct!.vportBound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    events: {
      value: cdktf.listMapperHcl(dataThunderSlbAflexOperOperFileListEventsToHclTerraform, true)(struct!.events),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbAflexOperOperFileListEventsList",
    },
    vport_list: {
      value: cdktf.listMapperHcl(dataThunderSlbAflexOperOperFileListVportListStructToHclTerraform, true)(struct!.vportList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbAflexOperOperFileListVportListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbAflexOperOperFileListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbAflexOperOperFileListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._syntax !== undefined) {
      hasAnyValues = true;
      internalValueResult.syntax = this._syntax;
    }
    if (this._vportBound !== undefined) {
      hasAnyValues = true;
      internalValueResult.vportBound = this._vportBound;
    }
    if (this._events?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events?.internalValue;
    }
    if (this._vportList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vportList = this._vportList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbAflexOperOperFileListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._file = undefined;
      this._syntax = undefined;
      this._vportBound = undefined;
      this._events.internalValue = undefined;
      this._vportList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._file = value.file;
      this._syntax = value.syntax;
      this._vportBound = value.vportBound;
      this._events.internalValue = value.events;
      this._vportList.internalValue = value.vportList;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // syntax - computed: false, optional: true, required: false
  private _syntax?: string; 
  public get syntax() {
    return this.getStringAttribute('syntax');
  }
  public set syntax(value: string) {
    this._syntax = value;
  }
  public resetSyntax() {
    this._syntax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syntaxInput() {
    return this._syntax;
  }

  // vport_bound - computed: false, optional: true, required: false
  private _vportBound?: string; 
  public get vportBound() {
    return this.getStringAttribute('vport_bound');
  }
  public set vportBound(value: string) {
    this._vportBound = value;
  }
  public resetVportBound() {
    this._vportBound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vportBoundInput() {
    return this._vportBound;
  }

  // events - computed: false, optional: true, required: false
  private _events = new DataThunderSlbAflexOperOperFileListEventsList(this, "events", false);
  public get events() {
    return this._events;
  }
  public putEvents(value: DataThunderSlbAflexOperOperFileListEvents[] | cdktf.IResolvable) {
    this._events.internalValue = value;
  }
  public resetEvents() {
    this._events.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events.internalValue;
  }

  // vport_list - computed: false, optional: true, required: false
  private _vportList = new DataThunderSlbAflexOperOperFileListVportListStructList(this, "vport_list", false);
  public get vportList() {
    return this._vportList;
  }
  public putVportList(value: DataThunderSlbAflexOperOperFileListVportListStruct[] | cdktf.IResolvable) {
    this._vportList.internalValue = value;
  }
  public resetVportList() {
    this._vportList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vportListInput() {
    return this._vportList.internalValue;
  }
}

export class DataThunderSlbAflexOperOperFileListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbAflexOperOperFileListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbAflexOperOperFileListStructOutputReference {
    return new DataThunderSlbAflexOperOperFileListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbAflexOperOperThreadListErrorListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#cmd_name DataThunderSlbAflexOper#cmd_name}
  */
  readonly cmdName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#err_msg DataThunderSlbAflexOper#err_msg}
  */
  readonly errMsg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#event_name DataThunderSlbAflexOper#event_name}
  */
  readonly eventName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#file_name DataThunderSlbAflexOper#file_name}
  */
  readonly fileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#line_number DataThunderSlbAflexOper#line_number}
  */
  readonly lineNumber?: number;
}

export function dataThunderSlbAflexOperOperThreadListErrorListStructToTerraform(struct?: DataThunderSlbAflexOperOperThreadListErrorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmd_name: cdktf.stringToTerraform(struct!.cmdName),
    err_msg: cdktf.stringToTerraform(struct!.errMsg),
    event_name: cdktf.stringToTerraform(struct!.eventName),
    file_name: cdktf.stringToTerraform(struct!.fileName),
    line_number: cdktf.numberToTerraform(struct!.lineNumber),
  }
}


export function dataThunderSlbAflexOperOperThreadListErrorListStructToHclTerraform(struct?: DataThunderSlbAflexOperOperThreadListErrorListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cmd_name: {
      value: cdktf.stringToHclTerraform(struct!.cmdName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    err_msg: {
      value: cdktf.stringToHclTerraform(struct!.errMsg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_name: {
      value: cdktf.stringToHclTerraform(struct!.eventName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    line_number: {
      value: cdktf.numberToHclTerraform(struct!.lineNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbAflexOperOperThreadListErrorListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbAflexOperOperThreadListErrorListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmdName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmdName = this._cmdName;
    }
    if (this._errMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.errMsg = this._errMsg;
    }
    if (this._eventName !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventName = this._eventName;
    }
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    if (this._lineNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineNumber = this._lineNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbAflexOperOperThreadListErrorListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cmdName = undefined;
      this._errMsg = undefined;
      this._eventName = undefined;
      this._fileName = undefined;
      this._lineNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cmdName = value.cmdName;
      this._errMsg = value.errMsg;
      this._eventName = value.eventName;
      this._fileName = value.fileName;
      this._lineNumber = value.lineNumber;
    }
  }

  // cmd_name - computed: false, optional: true, required: false
  private _cmdName?: string; 
  public get cmdName() {
    return this.getStringAttribute('cmd_name');
  }
  public set cmdName(value: string) {
    this._cmdName = value;
  }
  public resetCmdName() {
    this._cmdName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdNameInput() {
    return this._cmdName;
  }

  // err_msg - computed: false, optional: true, required: false
  private _errMsg?: string; 
  public get errMsg() {
    return this.getStringAttribute('err_msg');
  }
  public set errMsg(value: string) {
    this._errMsg = value;
  }
  public resetErrMsg() {
    this._errMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errMsgInput() {
    return this._errMsg;
  }

  // event_name - computed: false, optional: true, required: false
  private _eventName?: string; 
  public get eventName() {
    return this.getStringAttribute('event_name');
  }
  public set eventName(value: string) {
    this._eventName = value;
  }
  public resetEventName() {
    this._eventName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNameInput() {
    return this._eventName;
  }

  // file_name - computed: false, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }

  // line_number - computed: false, optional: true, required: false
  private _lineNumber?: number; 
  public get lineNumber() {
    return this.getNumberAttribute('line_number');
  }
  public set lineNumber(value: number) {
    this._lineNumber = value;
  }
  public resetLineNumber() {
    this._lineNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineNumberInput() {
    return this._lineNumber;
  }
}

export class DataThunderSlbAflexOperOperThreadListErrorListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbAflexOperOperThreadListErrorListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbAflexOperOperThreadListErrorListStructOutputReference {
    return new DataThunderSlbAflexOperOperThreadListErrorListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbAflexOperOperThreadListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#err_line DataThunderSlbAflexOper#err_line}
  */
  readonly errLine?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#last_msg DataThunderSlbAflexOper#last_msg}
  */
  readonly lastMsg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#thread DataThunderSlbAflexOper#thread}
  */
  readonly thread?: number;
  /**
  * error_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#error_list DataThunderSlbAflexOper#error_list}
  */
  readonly errorList?: DataThunderSlbAflexOperOperThreadListErrorListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbAflexOperOperThreadListStructToTerraform(struct?: DataThunderSlbAflexOperOperThreadListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    err_line: cdktf.numberToTerraform(struct!.errLine),
    last_msg: cdktf.stringToTerraform(struct!.lastMsg),
    thread: cdktf.numberToTerraform(struct!.thread),
    error_list: cdktf.listMapper(dataThunderSlbAflexOperOperThreadListErrorListStructToTerraform, true)(struct!.errorList),
  }
}


export function dataThunderSlbAflexOperOperThreadListStructToHclTerraform(struct?: DataThunderSlbAflexOperOperThreadListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    err_line: {
      value: cdktf.numberToHclTerraform(struct!.errLine),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last_msg: {
      value: cdktf.stringToHclTerraform(struct!.lastMsg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thread: {
      value: cdktf.numberToHclTerraform(struct!.thread),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_list: {
      value: cdktf.listMapperHcl(dataThunderSlbAflexOperOperThreadListErrorListStructToHclTerraform, true)(struct!.errorList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbAflexOperOperThreadListErrorListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbAflexOperOperThreadListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbAflexOperOperThreadListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.errLine = this._errLine;
    }
    if (this._lastMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastMsg = this._lastMsg;
    }
    if (this._thread !== undefined) {
      hasAnyValues = true;
      internalValueResult.thread = this._thread;
    }
    if (this._errorList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorList = this._errorList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbAflexOperOperThreadListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errLine = undefined;
      this._lastMsg = undefined;
      this._thread = undefined;
      this._errorList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errLine = value.errLine;
      this._lastMsg = value.lastMsg;
      this._thread = value.thread;
      this._errorList.internalValue = value.errorList;
    }
  }

  // err_line - computed: false, optional: true, required: false
  private _errLine?: number; 
  public get errLine() {
    return this.getNumberAttribute('err_line');
  }
  public set errLine(value: number) {
    this._errLine = value;
  }
  public resetErrLine() {
    this._errLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errLineInput() {
    return this._errLine;
  }

  // last_msg - computed: false, optional: true, required: false
  private _lastMsg?: string; 
  public get lastMsg() {
    return this.getStringAttribute('last_msg');
  }
  public set lastMsg(value: string) {
    this._lastMsg = value;
  }
  public resetLastMsg() {
    this._lastMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastMsgInput() {
    return this._lastMsg;
  }

  // thread - computed: false, optional: true, required: false
  private _thread?: number; 
  public get thread() {
    return this.getNumberAttribute('thread');
  }
  public set thread(value: number) {
    this._thread = value;
  }
  public resetThread() {
    this._thread = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadInput() {
    return this._thread;
  }

  // error_list - computed: false, optional: true, required: false
  private _errorList = new DataThunderSlbAflexOperOperThreadListErrorListStructList(this, "error_list", false);
  public get errorList() {
    return this._errorList;
  }
  public putErrorList(value: DataThunderSlbAflexOperOperThreadListErrorListStruct[] | cdktf.IResolvable) {
    this._errorList.internalValue = value;
  }
  public resetErrorList() {
    this._errorList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorListInput() {
    return this._errorList.internalValue;
  }
}

export class DataThunderSlbAflexOperOperThreadListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbAflexOperOperThreadListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbAflexOperOperThreadListStructOutputReference {
    return new DataThunderSlbAflexOperOperThreadListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbAflexOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#aflex_count DataThunderSlbAflexOper#aflex_count}
  */
  readonly aflexCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#aflex_file_size_max DataThunderSlbAflexOper#aflex_file_size_max}
  */
  readonly aflexFileSizeMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#event DataThunderSlbAflexOper#event}
  */
  readonly event?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#exact_match DataThunderSlbAflexOper#exact_match}
  */
  readonly exactMatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#filter_debug DataThunderSlbAflexOper#filter_debug}
  */
  readonly filterDebug?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#name DataThunderSlbAflexOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#substring DataThunderSlbAflexOper#substring}
  */
  readonly substring?: number;
  /**
  * file_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#file_list DataThunderSlbAflexOper#file_list}
  */
  readonly fileList?: DataThunderSlbAflexOperOperFileListStruct[] | cdktf.IResolvable;
  /**
  * thread_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#thread_list DataThunderSlbAflexOper#thread_list}
  */
  readonly threadList?: DataThunderSlbAflexOperOperThreadListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbAflexOperOperToTerraform(struct?: DataThunderSlbAflexOperOperOutputReference | DataThunderSlbAflexOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aflex_count: cdktf.numberToTerraform(struct!.aflexCount),
    aflex_file_size_max: cdktf.numberToTerraform(struct!.aflexFileSizeMax),
    event: cdktf.stringToTerraform(struct!.event),
    exact_match: cdktf.numberToTerraform(struct!.exactMatch),
    filter_debug: cdktf.numberToTerraform(struct!.filterDebug),
    name: cdktf.stringToTerraform(struct!.name),
    substring: cdktf.numberToTerraform(struct!.substring),
    file_list: cdktf.listMapper(dataThunderSlbAflexOperOperFileListStructToTerraform, true)(struct!.fileList),
    thread_list: cdktf.listMapper(dataThunderSlbAflexOperOperThreadListStructToTerraform, true)(struct!.threadList),
  }
}


export function dataThunderSlbAflexOperOperToHclTerraform(struct?: DataThunderSlbAflexOperOperOutputReference | DataThunderSlbAflexOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aflex_count: {
      value: cdktf.numberToHclTerraform(struct!.aflexCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflex_file_size_max: {
      value: cdktf.numberToHclTerraform(struct!.aflexFileSizeMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    event: {
      value: cdktf.stringToHclTerraform(struct!.event),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_match: {
      value: cdktf.numberToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_debug: {
      value: cdktf.numberToHclTerraform(struct!.filterDebug),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    substring: {
      value: cdktf.numberToHclTerraform(struct!.substring),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    file_list: {
      value: cdktf.listMapperHcl(dataThunderSlbAflexOperOperFileListStructToHclTerraform, true)(struct!.fileList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbAflexOperOperFileListStructList",
    },
    thread_list: {
      value: cdktf.listMapperHcl(dataThunderSlbAflexOperOperThreadListStructToHclTerraform, true)(struct!.threadList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbAflexOperOperThreadListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbAflexOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbAflexOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aflexCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexCount = this._aflexCount;
    }
    if (this._aflexFileSizeMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexFileSizeMax = this._aflexFileSizeMax;
    }
    if (this._event !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event;
    }
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._filterDebug !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterDebug = this._filterDebug;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._substring !== undefined) {
      hasAnyValues = true;
      internalValueResult.substring = this._substring;
    }
    if (this._fileList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileList = this._fileList?.internalValue;
    }
    if (this._threadList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadList = this._threadList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbAflexOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aflexCount = undefined;
      this._aflexFileSizeMax = undefined;
      this._event = undefined;
      this._exactMatch = undefined;
      this._filterDebug = undefined;
      this._name = undefined;
      this._substring = undefined;
      this._fileList.internalValue = undefined;
      this._threadList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aflexCount = value.aflexCount;
      this._aflexFileSizeMax = value.aflexFileSizeMax;
      this._event = value.event;
      this._exactMatch = value.exactMatch;
      this._filterDebug = value.filterDebug;
      this._name = value.name;
      this._substring = value.substring;
      this._fileList.internalValue = value.fileList;
      this._threadList.internalValue = value.threadList;
    }
  }

  // aflex_count - computed: false, optional: true, required: false
  private _aflexCount?: number; 
  public get aflexCount() {
    return this.getNumberAttribute('aflex_count');
  }
  public set aflexCount(value: number) {
    this._aflexCount = value;
  }
  public resetAflexCount() {
    this._aflexCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexCountInput() {
    return this._aflexCount;
  }

  // aflex_file_size_max - computed: false, optional: true, required: false
  private _aflexFileSizeMax?: number; 
  public get aflexFileSizeMax() {
    return this.getNumberAttribute('aflex_file_size_max');
  }
  public set aflexFileSizeMax(value: number) {
    this._aflexFileSizeMax = value;
  }
  public resetAflexFileSizeMax() {
    this._aflexFileSizeMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexFileSizeMaxInput() {
    return this._aflexFileSizeMax;
  }

  // event - computed: false, optional: true, required: false
  private _event?: string; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string) {
    this._event = value;
  }
  public resetEvent() {
    this._event = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: number; 
  public get exactMatch() {
    return this.getNumberAttribute('exact_match');
  }
  public set exactMatch(value: number) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // filter_debug - computed: false, optional: true, required: false
  private _filterDebug?: number; 
  public get filterDebug() {
    return this.getNumberAttribute('filter_debug');
  }
  public set filterDebug(value: number) {
    this._filterDebug = value;
  }
  public resetFilterDebug() {
    this._filterDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterDebugInput() {
    return this._filterDebug;
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

  // substring - computed: false, optional: true, required: false
  private _substring?: number; 
  public get substring() {
    return this.getNumberAttribute('substring');
  }
  public set substring(value: number) {
    this._substring = value;
  }
  public resetSubstring() {
    this._substring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substringInput() {
    return this._substring;
  }

  // file_list - computed: false, optional: true, required: false
  private _fileList = new DataThunderSlbAflexOperOperFileListStructList(this, "file_list", false);
  public get fileList() {
    return this._fileList;
  }
  public putFileList(value: DataThunderSlbAflexOperOperFileListStruct[] | cdktf.IResolvable) {
    this._fileList.internalValue = value;
  }
  public resetFileList() {
    this._fileList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileListInput() {
    return this._fileList.internalValue;
  }

  // thread_list - computed: false, optional: true, required: false
  private _threadList = new DataThunderSlbAflexOperOperThreadListStructList(this, "thread_list", false);
  public get threadList() {
    return this._threadList;
  }
  public putThreadList(value: DataThunderSlbAflexOperOperThreadListStruct[] | cdktf.IResolvable) {
    this._threadList.internalValue = value;
  }
  public resetThreadList() {
    this._threadList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadListInput() {
    return this._threadList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper thunder_slb_aflex_oper}
*/
export class DataThunderSlbAflexOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_aflex_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbAflexOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbAflexOper to import
  * @param importFromId The id of the existing DataThunderSlbAflexOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbAflexOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_aflex_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_aflex_oper thunder_slb_aflex_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbAflexOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbAflexOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_aflex_oper',
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
  private _oper = new DataThunderSlbAflexOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbAflexOperOper) {
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
      oper: dataThunderSlbAflexOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbAflexOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbAflexOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
