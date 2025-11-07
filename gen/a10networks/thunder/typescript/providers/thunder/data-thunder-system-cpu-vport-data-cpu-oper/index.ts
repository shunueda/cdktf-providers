// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_cpu_vport_data_cpu_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemCpuVportDataCpuOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_cpu_vport_data_cpu_oper#id DataThunderSystemCpuVportDataCpuOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_cpu_vport_data_cpu_oper#oper DataThunderSystemCpuVportDataCpuOper#oper}
  */
  readonly oper?: DataThunderSystemCpuVportDataCpuOperOper;
}
export interface DataThunderSystemCpuVportDataCpuOperOperVportCpuUsage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_cpu_vport_data_cpu_oper#cpu_id DataThunderSystemCpuVportDataCpuOper#cpu_id}
  */
  readonly cpuId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_cpu_vport_data_cpu_oper#dcpu_str DataThunderSystemCpuVportDataCpuOper#dcpu_str}
  */
  readonly dcpuStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_cpu_vport_data_cpu_oper#portnumber DataThunderSystemCpuVportDataCpuOper#portnumber}
  */
  readonly portnumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_cpu_vport_data_cpu_oper#protocol DataThunderSystemCpuVportDataCpuOper#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_cpu_vport_data_cpu_oper#sec1 DataThunderSystemCpuVportDataCpuOper#sec1}
  */
  readonly sec1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_cpu_vport_data_cpu_oper#sec10 DataThunderSystemCpuVportDataCpuOper#sec10}
  */
  readonly sec10?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_cpu_vport_data_cpu_oper#sec30 DataThunderSystemCpuVportDataCpuOper#sec30}
  */
  readonly sec30?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_cpu_vport_data_cpu_oper#sec5 DataThunderSystemCpuVportDataCpuOper#sec5}
  */
  readonly sec5?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_cpu_vport_data_cpu_oper#sec60 DataThunderSystemCpuVportDataCpuOper#sec60}
  */
  readonly sec60?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_cpu_vport_data_cpu_oper#vport_type DataThunderSystemCpuVportDataCpuOper#vport_type}
  */
  readonly vportType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_cpu_vport_data_cpu_oper#vserver_name DataThunderSystemCpuVportDataCpuOper#vserver_name}
  */
  readonly vserverName?: string;
}

export function dataThunderSystemCpuVportDataCpuOperOperVportCpuUsageToTerraform(struct?: DataThunderSystemCpuVportDataCpuOperOperVportCpuUsage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_id: cdktf.numberToTerraform(struct!.cpuId),
    dcpu_str: cdktf.stringToTerraform(struct!.dcpuStr),
    portnumber: cdktf.numberToTerraform(struct!.portnumber),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    sec1: cdktf.numberToTerraform(struct!.sec1),
    sec10: cdktf.numberToTerraform(struct!.sec10),
    sec30: cdktf.numberToTerraform(struct!.sec30),
    sec5: cdktf.numberToTerraform(struct!.sec5),
    sec60: cdktf.numberToTerraform(struct!.sec60),
    vport_type: cdktf.stringToTerraform(struct!.vportType),
    vserver_name: cdktf.stringToTerraform(struct!.vserverName),
  }
}


export function dataThunderSystemCpuVportDataCpuOperOperVportCpuUsageToHclTerraform(struct?: DataThunderSystemCpuVportDataCpuOperOperVportCpuUsage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_id: {
      value: cdktf.numberToHclTerraform(struct!.cpuId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dcpu_str: {
      value: cdktf.stringToHclTerraform(struct!.dcpuStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    portnumber: {
      value: cdktf.numberToHclTerraform(struct!.portnumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sec1: {
      value: cdktf.numberToHclTerraform(struct!.sec1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sec10: {
      value: cdktf.numberToHclTerraform(struct!.sec10),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sec30: {
      value: cdktf.numberToHclTerraform(struct!.sec30),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sec5: {
      value: cdktf.numberToHclTerraform(struct!.sec5),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sec60: {
      value: cdktf.numberToHclTerraform(struct!.sec60),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vport_type: {
      value: cdktf.stringToHclTerraform(struct!.vportType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vserver_name: {
      value: cdktf.stringToHclTerraform(struct!.vserverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemCpuVportDataCpuOperOperVportCpuUsageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemCpuVportDataCpuOperOperVportCpuUsage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuId = this._cpuId;
    }
    if (this._dcpuStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcpuStr = this._dcpuStr;
    }
    if (this._portnumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.portnumber = this._portnumber;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sec1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sec1 = this._sec1;
    }
    if (this._sec10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sec10 = this._sec10;
    }
    if (this._sec30 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sec30 = this._sec30;
    }
    if (this._sec5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sec5 = this._sec5;
    }
    if (this._sec60 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sec60 = this._sec60;
    }
    if (this._vportType !== undefined) {
      hasAnyValues = true;
      internalValueResult.vportType = this._vportType;
    }
    if (this._vserverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vserverName = this._vserverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemCpuVportDataCpuOperOperVportCpuUsage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuId = undefined;
      this._dcpuStr = undefined;
      this._portnumber = undefined;
      this._protocol = undefined;
      this._sec1 = undefined;
      this._sec10 = undefined;
      this._sec30 = undefined;
      this._sec5 = undefined;
      this._sec60 = undefined;
      this._vportType = undefined;
      this._vserverName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuId = value.cpuId;
      this._dcpuStr = value.dcpuStr;
      this._portnumber = value.portnumber;
      this._protocol = value.protocol;
      this._sec1 = value.sec1;
      this._sec10 = value.sec10;
      this._sec30 = value.sec30;
      this._sec5 = value.sec5;
      this._sec60 = value.sec60;
      this._vportType = value.vportType;
      this._vserverName = value.vserverName;
    }
  }

  // cpu_id - computed: false, optional: true, required: false
  private _cpuId?: number; 
  public get cpuId() {
    return this.getNumberAttribute('cpu_id');
  }
  public set cpuId(value: number) {
    this._cpuId = value;
  }
  public resetCpuId() {
    this._cpuId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuIdInput() {
    return this._cpuId;
  }

  // dcpu_str - computed: false, optional: true, required: false
  private _dcpuStr?: string; 
  public get dcpuStr() {
    return this.getStringAttribute('dcpu_str');
  }
  public set dcpuStr(value: string) {
    this._dcpuStr = value;
  }
  public resetDcpuStr() {
    this._dcpuStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcpuStrInput() {
    return this._dcpuStr;
  }

  // portnumber - computed: false, optional: true, required: false
  private _portnumber?: number; 
  public get portnumber() {
    return this.getNumberAttribute('portnumber');
  }
  public set portnumber(value: number) {
    this._portnumber = value;
  }
  public resetPortnumber() {
    this._portnumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portnumberInput() {
    return this._portnumber;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // sec1 - computed: false, optional: true, required: false
  private _sec1?: number; 
  public get sec1() {
    return this.getNumberAttribute('sec1');
  }
  public set sec1(value: number) {
    this._sec1 = value;
  }
  public resetSec1() {
    this._sec1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sec1Input() {
    return this._sec1;
  }

  // sec10 - computed: false, optional: true, required: false
  private _sec10?: number; 
  public get sec10() {
    return this.getNumberAttribute('sec10');
  }
  public set sec10(value: number) {
    this._sec10 = value;
  }
  public resetSec10() {
    this._sec10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sec10Input() {
    return this._sec10;
  }

  // sec30 - computed: false, optional: true, required: false
  private _sec30?: number; 
  public get sec30() {
    return this.getNumberAttribute('sec30');
  }
  public set sec30(value: number) {
    this._sec30 = value;
  }
  public resetSec30() {
    this._sec30 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sec30Input() {
    return this._sec30;
  }

  // sec5 - computed: false, optional: true, required: false
  private _sec5?: number; 
  public get sec5() {
    return this.getNumberAttribute('sec5');
  }
  public set sec5(value: number) {
    this._sec5 = value;
  }
  public resetSec5() {
    this._sec5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sec5Input() {
    return this._sec5;
  }

  // sec60 - computed: false, optional: true, required: false
  private _sec60?: number; 
  public get sec60() {
    return this.getNumberAttribute('sec60');
  }
  public set sec60(value: number) {
    this._sec60 = value;
  }
  public resetSec60() {
    this._sec60 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sec60Input() {
    return this._sec60;
  }

  // vport_type - computed: false, optional: true, required: false
  private _vportType?: string; 
  public get vportType() {
    return this.getStringAttribute('vport_type');
  }
  public set vportType(value: string) {
    this._vportType = value;
  }
  public resetVportType() {
    this._vportType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vportTypeInput() {
    return this._vportType;
  }

  // vserver_name - computed: false, optional: true, required: false
  private _vserverName?: string; 
  public get vserverName() {
    return this.getStringAttribute('vserver_name');
  }
  public set vserverName(value: string) {
    this._vserverName = value;
  }
  public resetVserverName() {
    this._vserverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vserverNameInput() {
    return this._vserverName;
  }
}

export class DataThunderSystemCpuVportDataCpuOperOperVportCpuUsageList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemCpuVportDataCpuOperOperVportCpuUsage[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemCpuVportDataCpuOperOperVportCpuUsageOutputReference {
    return new DataThunderSystemCpuVportDataCpuOperOperVportCpuUsageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemCpuVportDataCpuOperOper {
  /**
  * vport_cpu_usage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_cpu_vport_data_cpu_oper#vport_cpu_usage DataThunderSystemCpuVportDataCpuOper#vport_cpu_usage}
  */
  readonly vportCpuUsage?: DataThunderSystemCpuVportDataCpuOperOperVportCpuUsage[] | cdktf.IResolvable;
}

export function dataThunderSystemCpuVportDataCpuOperOperToTerraform(struct?: DataThunderSystemCpuVportDataCpuOperOperOutputReference | DataThunderSystemCpuVportDataCpuOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vport_cpu_usage: cdktf.listMapper(dataThunderSystemCpuVportDataCpuOperOperVportCpuUsageToTerraform, true)(struct!.vportCpuUsage),
  }
}


export function dataThunderSystemCpuVportDataCpuOperOperToHclTerraform(struct?: DataThunderSystemCpuVportDataCpuOperOperOutputReference | DataThunderSystemCpuVportDataCpuOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vport_cpu_usage: {
      value: cdktf.listMapperHcl(dataThunderSystemCpuVportDataCpuOperOperVportCpuUsageToHclTerraform, true)(struct!.vportCpuUsage),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemCpuVportDataCpuOperOperVportCpuUsageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemCpuVportDataCpuOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemCpuVportDataCpuOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vportCpuUsage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vportCpuUsage = this._vportCpuUsage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemCpuVportDataCpuOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vportCpuUsage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vportCpuUsage.internalValue = value.vportCpuUsage;
    }
  }

  // vport_cpu_usage - computed: false, optional: true, required: false
  private _vportCpuUsage = new DataThunderSystemCpuVportDataCpuOperOperVportCpuUsageList(this, "vport_cpu_usage", false);
  public get vportCpuUsage() {
    return this._vportCpuUsage;
  }
  public putVportCpuUsage(value: DataThunderSystemCpuVportDataCpuOperOperVportCpuUsage[] | cdktf.IResolvable) {
    this._vportCpuUsage.internalValue = value;
  }
  public resetVportCpuUsage() {
    this._vportCpuUsage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vportCpuUsageInput() {
    return this._vportCpuUsage.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_cpu_vport_data_cpu_oper thunder_system_cpu_vport_data_cpu_oper}
*/
export class DataThunderSystemCpuVportDataCpuOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_cpu_vport_data_cpu_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemCpuVportDataCpuOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemCpuVportDataCpuOper to import
  * @param importFromId The id of the existing DataThunderSystemCpuVportDataCpuOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_cpu_vport_data_cpu_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemCpuVportDataCpuOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_cpu_vport_data_cpu_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_cpu_vport_data_cpu_oper thunder_system_cpu_vport_data_cpu_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemCpuVportDataCpuOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemCpuVportDataCpuOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_cpu_vport_data_cpu_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
  private _oper = new DataThunderSystemCpuVportDataCpuOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemCpuVportDataCpuOperOper) {
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
      oper: dataThunderSystemCpuVportDataCpuOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemCpuVportDataCpuOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemCpuVportDataCpuOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
