// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_script
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DvmdbScriptConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_script#adom DvmdbScript#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_script#content DvmdbScript#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_script#desc DvmdbScript#desc}
  */
  readonly desc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_script#dynamic_sort_subtable DvmdbScript#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_script#filter_build DvmdbScript#filter_build}
  */
  readonly filterBuild?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_script#filter_device DvmdbScript#filter_device}
  */
  readonly filterDevice?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_script#filter_hostname DvmdbScript#filter_hostname}
  */
  readonly filterHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_script#filter_ostype DvmdbScript#filter_ostype}
  */
  readonly filterOstype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_script#filter_osver DvmdbScript#filter_osver}
  */
  readonly filterOsver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_script#filter_platform DvmdbScript#filter_platform}
  */
  readonly filterPlatform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_script#filter_serial DvmdbScript#filter_serial}
  */
  readonly filterSerial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_script#id DvmdbScript#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_script#modification_time DvmdbScript#modification_time}
  */
  readonly modificationTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_script#name DvmdbScript#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_script#scopetype DvmdbScript#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_script#target DvmdbScript#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_script#type DvmdbScript#type}
  */
  readonly type?: string;
  /**
  * script_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_script#script_schedule DvmdbScript#script_schedule}
  */
  readonly scriptSchedule?: DvmdbScriptScriptSchedule[] | cdktf.IResolvable;
}
export interface DvmdbScriptScriptSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_script#datetime DvmdbScript#datetime}
  */
  readonly datetime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_script#day_of_week DvmdbScript#day_of_week}
  */
  readonly dayOfWeek?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_script#device DvmdbScript#device}
  */
  readonly device?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_script#name DvmdbScript#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_script#run_on_db DvmdbScript#run_on_db}
  */
  readonly runOnDb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_script#type DvmdbScript#type}
  */
  readonly type?: string;
}

export function dvmdbScriptScriptScheduleToTerraform(struct?: DvmdbScriptScriptSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datetime: cdktf.stringToTerraform(struct!.datetime),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    device: cdktf.numberToTerraform(struct!.device),
    name: cdktf.stringToTerraform(struct!.name),
    run_on_db: cdktf.stringToTerraform(struct!.runOnDb),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dvmdbScriptScriptScheduleToHclTerraform(struct?: DvmdbScriptScriptSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datetime: {
      value: cdktf.stringToHclTerraform(struct!.datetime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device: {
      value: cdktf.numberToHclTerraform(struct!.device),
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
    run_on_db: {
      value: cdktf.stringToHclTerraform(struct!.runOnDb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DvmdbScriptScriptScheduleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DvmdbScriptScriptSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.datetime = this._datetime;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._runOnDb !== undefined) {
      hasAnyValues = true;
      internalValueResult.runOnDb = this._runOnDb;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DvmdbScriptScriptSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datetime = undefined;
      this._dayOfWeek = undefined;
      this._device = undefined;
      this._name = undefined;
      this._runOnDb = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datetime = value.datetime;
      this._dayOfWeek = value.dayOfWeek;
      this._device = value.device;
      this._name = value.name;
      this._runOnDb = value.runOnDb;
      this._type = value.type;
    }
  }

  // datetime - computed: false, optional: true, required: false
  private _datetime?: string; 
  public get datetime() {
    return this.getStringAttribute('datetime');
  }
  public set datetime(value: string) {
    this._datetime = value;
  }
  public resetDatetime() {
    this._datetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datetimeInput() {
    return this._datetime;
  }

  // day_of_week - computed: true, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // device - computed: false, optional: true, required: false
  private _device?: number; 
  public get device() {
    return this.getNumberAttribute('device');
  }
  public set device(value: number) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
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

  // run_on_db - computed: true, optional: true, required: false
  private _runOnDb?: string; 
  public get runOnDb() {
    return this.getStringAttribute('run_on_db');
  }
  public set runOnDb(value: string) {
    this._runOnDb = value;
  }
  public resetRunOnDb() {
    this._runOnDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runOnDbInput() {
    return this._runOnDb;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DvmdbScriptScriptScheduleList extends cdktf.ComplexList {
  public internalValue? : DvmdbScriptScriptSchedule[] | cdktf.IResolvable

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
  public get(index: number): DvmdbScriptScriptScheduleOutputReference {
    return new DvmdbScriptScriptScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_script fortimanager_dvmdb_script}
*/
export class DvmdbScript extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_dvmdb_script";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DvmdbScript resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DvmdbScript to import
  * @param importFromId The id of the existing DvmdbScript that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_script#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DvmdbScript to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_dvmdb_script", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvmdb_script fortimanager_dvmdb_script} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DvmdbScriptConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DvmdbScriptConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_dvmdb_script',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._content = config.content;
    this._desc = config.desc;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._filterBuild = config.filterBuild;
    this._filterDevice = config.filterDevice;
    this._filterHostname = config.filterHostname;
    this._filterOstype = config.filterOstype;
    this._filterOsver = config.filterOsver;
    this._filterPlatform = config.filterPlatform;
    this._filterSerial = config.filterSerial;
    this._id = config.id;
    this._modificationTime = config.modificationTime;
    this._name = config.name;
    this._scopetype = config.scopetype;
    this._target = config.target;
    this._type = config.type;
    this._scriptSchedule.internalValue = config.scriptSchedule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // desc - computed: false, optional: true, required: false
  private _desc?: string; 
  public get desc() {
    return this.getStringAttribute('desc');
  }
  public set desc(value: string) {
    this._desc = value;
  }
  public resetDesc() {
    this._desc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descInput() {
    return this._desc;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // filter_build - computed: true, optional: true, required: false
  private _filterBuild?: number; 
  public get filterBuild() {
    return this.getNumberAttribute('filter_build');
  }
  public set filterBuild(value: number) {
    this._filterBuild = value;
  }
  public resetFilterBuild() {
    this._filterBuild = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterBuildInput() {
    return this._filterBuild;
  }

  // filter_device - computed: false, optional: true, required: false
  private _filterDevice?: number; 
  public get filterDevice() {
    return this.getNumberAttribute('filter_device');
  }
  public set filterDevice(value: number) {
    this._filterDevice = value;
  }
  public resetFilterDevice() {
    this._filterDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterDeviceInput() {
    return this._filterDevice;
  }

  // filter_hostname - computed: false, optional: true, required: false
  private _filterHostname?: string; 
  public get filterHostname() {
    return this.getStringAttribute('filter_hostname');
  }
  public set filterHostname(value: string) {
    this._filterHostname = value;
  }
  public resetFilterHostname() {
    this._filterHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterHostnameInput() {
    return this._filterHostname;
  }

  // filter_ostype - computed: true, optional: true, required: false
  private _filterOstype?: string; 
  public get filterOstype() {
    return this.getStringAttribute('filter_ostype');
  }
  public set filterOstype(value: string) {
    this._filterOstype = value;
  }
  public resetFilterOstype() {
    this._filterOstype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterOstypeInput() {
    return this._filterOstype;
  }

  // filter_osver - computed: true, optional: true, required: false
  private _filterOsver?: string; 
  public get filterOsver() {
    return this.getStringAttribute('filter_osver');
  }
  public set filterOsver(value: string) {
    this._filterOsver = value;
  }
  public resetFilterOsver() {
    this._filterOsver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterOsverInput() {
    return this._filterOsver;
  }

  // filter_platform - computed: false, optional: true, required: false
  private _filterPlatform?: string; 
  public get filterPlatform() {
    return this.getStringAttribute('filter_platform');
  }
  public set filterPlatform(value: string) {
    this._filterPlatform = value;
  }
  public resetFilterPlatform() {
    this._filterPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterPlatformInput() {
    return this._filterPlatform;
  }

  // filter_serial - computed: false, optional: true, required: false
  private _filterSerial?: string; 
  public get filterSerial() {
    return this.getStringAttribute('filter_serial');
  }
  public set filterSerial(value: string) {
    this._filterSerial = value;
  }
  public resetFilterSerial() {
    this._filterSerial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSerialInput() {
    return this._filterSerial;
  }

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

  // modification_time - computed: true, optional: true, required: false
  private _modificationTime?: string; 
  public get modificationTime() {
    return this.getStringAttribute('modification_time');
  }
  public set modificationTime(value: string) {
    this._modificationTime = value;
  }
  public resetModificationTime() {
    this._modificationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modificationTimeInput() {
    return this._modificationTime;
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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // target - computed: true, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // script_schedule - computed: false, optional: true, required: false
  private _scriptSchedule = new DvmdbScriptScriptScheduleList(this, "script_schedule", false);
  public get scriptSchedule() {
    return this._scriptSchedule;
  }
  public putScriptSchedule(value: DvmdbScriptScriptSchedule[] | cdktf.IResolvable) {
    this._scriptSchedule.internalValue = value;
  }
  public resetScriptSchedule() {
    this._scriptSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptScheduleInput() {
    return this._scriptSchedule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      content: cdktf.stringToTerraform(this._content),
      desc: cdktf.stringToTerraform(this._desc),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      filter_build: cdktf.numberToTerraform(this._filterBuild),
      filter_device: cdktf.numberToTerraform(this._filterDevice),
      filter_hostname: cdktf.stringToTerraform(this._filterHostname),
      filter_ostype: cdktf.stringToTerraform(this._filterOstype),
      filter_osver: cdktf.stringToTerraform(this._filterOsver),
      filter_platform: cdktf.stringToTerraform(this._filterPlatform),
      filter_serial: cdktf.stringToTerraform(this._filterSerial),
      id: cdktf.stringToTerraform(this._id),
      modification_time: cdktf.stringToTerraform(this._modificationTime),
      name: cdktf.stringToTerraform(this._name),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      target: cdktf.stringToTerraform(this._target),
      type: cdktf.stringToTerraform(this._type),
      script_schedule: cdktf.listMapper(dvmdbScriptScriptScheduleToTerraform, true)(this._scriptSchedule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content: {
        value: cdktf.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desc: {
        value: cdktf.stringToHclTerraform(this._desc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_build: {
        value: cdktf.numberToHclTerraform(this._filterBuild),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filter_device: {
        value: cdktf.numberToHclTerraform(this._filterDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filter_hostname: {
        value: cdktf.stringToHclTerraform(this._filterHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_ostype: {
        value: cdktf.stringToHclTerraform(this._filterOstype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_osver: {
        value: cdktf.stringToHclTerraform(this._filterOsver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_platform: {
        value: cdktf.stringToHclTerraform(this._filterPlatform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_serial: {
        value: cdktf.stringToHclTerraform(this._filterSerial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modification_time: {
        value: cdktf.stringToHclTerraform(this._modificationTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
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
      script_schedule: {
        value: cdktf.listMapperHcl(dvmdbScriptScriptScheduleToHclTerraform, true)(this._scriptSchedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DvmdbScriptScriptScheduleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
