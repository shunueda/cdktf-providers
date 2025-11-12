// https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_baseline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirmwareBaselineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_baseline#catalog_name FirmwareBaseline#catalog_name}
  */
  readonly catalogName: string;
  /**
  * Description of the firmware baseline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_baseline#description FirmwareBaseline#description}
  */
  readonly description?: string;
  /**
  * Device names is the list of device names that you want to add to the firmware baseline being created. One of DeviceNames or DeviceServiceTags or GroupNames is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_baseline#device_names FirmwareBaseline#device_names}
  */
  readonly deviceNames?: string[];
  /**
  * Device service tags is the list of device service tags that you want to add to the firmware baseline being created.One of DeviceNames or DeviceServiceTags or GroupNames is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_baseline#device_service_tags FirmwareBaseline#device_service_tags}
  */
  readonly deviceServiceTags?: string[];
  /**
  * Filters applicable updates where no reboot is required during create baseline for firmware updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_baseline#filter_no_reboot_required FirmwareBaseline#filter_no_reboot_required}
  */
  readonly filterNoRebootRequired?: boolean | cdktf.IResolvable;
  /**
  * Group names is the list of group names that you want to add to the firmware baseline being created.One of DeviceNames or DeviceServiceTags or GroupNames is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_baseline#group_names FirmwareBaseline#group_names}
  */
  readonly groupNames?: string[];
  /**
  * ID of the firmware baseline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_baseline#id FirmwareBaseline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * This must always be set to true. The size of the DUP files used is 64 bits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_baseline#is_64_bit FirmwareBaseline#is_64_bit}
  */
  readonly is64Bit?: boolean | cdktf.IResolvable;
  /**
  * Last Run Time for the firmware baseline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_baseline#last_run FirmwareBaseline#last_run}
  */
  readonly lastRun?: string;
  /**
  * Name of the firmware baseline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_baseline#name FirmwareBaseline#name}
  */
  readonly name: string;
  /**
  * Name of the repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_baseline#repository_name FirmwareBaseline#repository_name}
  */
  readonly repositoryName?: string;
}
export interface FirmwareBaselineComplianceSummary {
}

export function firmwareBaselineComplianceSummaryToTerraform(struct?: FirmwareBaselineComplianceSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function firmwareBaselineComplianceSummaryToHclTerraform(struct?: FirmwareBaselineComplianceSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FirmwareBaselineComplianceSummaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirmwareBaselineComplianceSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirmwareBaselineComplianceSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compliance_status - computed: true, optional: false, required: false
  public get complianceStatus() {
    return this.getStringAttribute('compliance_status');
  }

  // number_of_critical - computed: true, optional: false, required: false
  public get numberOfCritical() {
    return this.getNumberAttribute('number_of_critical');
  }

  // number_of_downgrade - computed: true, optional: false, required: false
  public get numberOfDowngrade() {
    return this.getNumberAttribute('number_of_downgrade');
  }

  // number_of_normal - computed: true, optional: false, required: false
  public get numberOfNormal() {
    return this.getNumberAttribute('number_of_normal');
  }

  // number_of_unknown - computed: true, optional: false, required: false
  public get numberOfUnknown() {
    return this.getNumberAttribute('number_of_unknown');
  }

  // number_of_warning - computed: true, optional: false, required: false
  public get numberOfWarning() {
    return this.getNumberAttribute('number_of_warning');
  }
}
export interface FirmwareBaselineTargetsType {
}

export function firmwareBaselineTargetsTypeToTerraform(struct?: FirmwareBaselineTargetsType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function firmwareBaselineTargetsTypeToHclTerraform(struct?: FirmwareBaselineTargetsType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FirmwareBaselineTargetsTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirmwareBaselineTargetsType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirmwareBaselineTargetsType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface FirmwareBaselineTargets {
  /**
  * ID of device associated with the firmware baseline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_baseline#id FirmwareBaseline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Type of device associated with the firmware baseline..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_baseline#type FirmwareBaseline#type}
  */
  readonly type: FirmwareBaselineTargetsType;
}

export function firmwareBaselineTargetsToTerraform(struct?: FirmwareBaselineTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    type: firmwareBaselineTargetsTypeToTerraform(struct!.type),
  }
}


export function firmwareBaselineTargetsToHclTerraform(struct?: FirmwareBaselineTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: firmwareBaselineTargetsTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "struct",
      storageClassType: "FirmwareBaselineTargetsType",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirmwareBaselineTargetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FirmwareBaselineTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirmwareBaselineTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type.internalValue = value.type;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // type - computed: true, optional: false, required: true
  private _type = new FirmwareBaselineTargetsTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: FirmwareBaselineTargetsType) {
    this._type.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }
}

export class FirmwareBaselineTargetsList extends cdktf.ComplexList {
  public internalValue? : FirmwareBaselineTargets[] | cdktf.IResolvable

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
  public get(index: number): FirmwareBaselineTargetsOutputReference {
    return new FirmwareBaselineTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_baseline ome_firmware_baseline}
*/
export class FirmwareBaseline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ome_firmware_baseline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirmwareBaseline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirmwareBaseline to import
  * @param importFromId The id of the existing FirmwareBaseline that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_baseline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirmwareBaseline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ome_firmware_baseline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/firmware_baseline ome_firmware_baseline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirmwareBaselineConfig
  */
  public constructor(scope: Construct, id: string, config: FirmwareBaselineConfig) {
    super(scope, id, {
      terraformResourceType: 'ome_firmware_baseline',
      terraformGeneratorMetadata: {
        providerName: 'ome',
        providerVersion: '1.2.3',
        providerVersionConstraint: '1.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._catalogName = config.catalogName;
    this._description = config.description;
    this._deviceNames = config.deviceNames;
    this._deviceServiceTags = config.deviceServiceTags;
    this._filterNoRebootRequired = config.filterNoRebootRequired;
    this._groupNames = config.groupNames;
    this._id = config.id;
    this._is64Bit = config.is64Bit;
    this._lastRun = config.lastRun;
    this._name = config.name;
    this._repositoryName = config.repositoryName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_id - computed: true, optional: false, required: false
  public get catalogId() {
    return this.getNumberAttribute('catalog_id');
  }

  // catalog_name - computed: false, optional: false, required: true
  private _catalogName?: string; 
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }
  public set catalogName(value: string) {
    this._catalogName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogNameInput() {
    return this._catalogName;
  }

  // compliance_summary - computed: true, optional: false, required: false
  private _complianceSummary = new FirmwareBaselineComplianceSummaryOutputReference(this, "compliance_summary");
  public get complianceSummary() {
    return this._complianceSummary;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_names - computed: false, optional: true, required: false
  private _deviceNames?: string[]; 
  public get deviceNames() {
    return this.getListAttribute('device_names');
  }
  public set deviceNames(value: string[]) {
    this._deviceNames = value;
  }
  public resetDeviceNames() {
    this._deviceNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNamesInput() {
    return this._deviceNames;
  }

  // device_service_tags - computed: false, optional: true, required: false
  private _deviceServiceTags?: string[]; 
  public get deviceServiceTags() {
    return this.getListAttribute('device_service_tags');
  }
  public set deviceServiceTags(value: string[]) {
    this._deviceServiceTags = value;
  }
  public resetDeviceServiceTags() {
    this._deviceServiceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceServiceTagsInput() {
    return this._deviceServiceTags;
  }

  // downgrade_enabled - computed: true, optional: false, required: false
  public get downgradeEnabled() {
    return this.getBooleanAttribute('downgrade_enabled');
  }

  // filter_no_reboot_required - computed: true, optional: true, required: false
  private _filterNoRebootRequired?: boolean | cdktf.IResolvable; 
  public get filterNoRebootRequired() {
    return this.getBooleanAttribute('filter_no_reboot_required');
  }
  public set filterNoRebootRequired(value: boolean | cdktf.IResolvable) {
    this._filterNoRebootRequired = value;
  }
  public resetFilterNoRebootRequired() {
    this._filterNoRebootRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterNoRebootRequiredInput() {
    return this._filterNoRebootRequired;
  }

  // group_names - computed: false, optional: true, required: false
  private _groupNames?: string[]; 
  public get groupNames() {
    return this.getListAttribute('group_names');
  }
  public set groupNames(value: string[]) {
    this._groupNames = value;
  }
  public resetGroupNames() {
    this._groupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNamesInput() {
    return this._groupNames;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_64_bit - computed: true, optional: true, required: false
  private _is64Bit?: boolean | cdktf.IResolvable; 
  public get is64Bit() {
    return this.getBooleanAttribute('is_64_bit');
  }
  public set is64Bit(value: boolean | cdktf.IResolvable) {
    this._is64Bit = value;
  }
  public resetIs64Bit() {
    this._is64Bit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get is64BitInput() {
    return this._is64Bit;
  }

  // last_run - computed: true, optional: true, required: false
  private _lastRun?: string; 
  public get lastRun() {
    return this.getStringAttribute('last_run');
  }
  public set lastRun(value: string) {
    this._lastRun = value;
  }
  public resetLastRun() {
    this._lastRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastRunInput() {
    return this._lastRun;
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

  // repository_id - computed: true, optional: false, required: false
  public get repositoryId() {
    return this.getNumberAttribute('repository_id');
  }

  // repository_name - computed: true, optional: true, required: false
  private _repositoryName?: string; 
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  public resetRepositoryName() {
    this._repositoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName;
  }

  // repository_type - computed: true, optional: false, required: false
  public get repositoryType() {
    return this.getStringAttribute('repository_type');
  }

  // targets - computed: true, optional: false, required: false
  private _targets = new FirmwareBaselineTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getNumberAttribute('task_id');
  }

  // task_status - computed: true, optional: false, required: false
  public get taskStatus() {
    return this.getStringAttribute('task_status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_name: cdktf.stringToTerraform(this._catalogName),
      description: cdktf.stringToTerraform(this._description),
      device_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceNames),
      device_service_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceServiceTags),
      filter_no_reboot_required: cdktf.booleanToTerraform(this._filterNoRebootRequired),
      group_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupNames),
      id: cdktf.numberToTerraform(this._id),
      is_64_bit: cdktf.booleanToTerraform(this._is64Bit),
      last_run: cdktf.stringToTerraform(this._lastRun),
      name: cdktf.stringToTerraform(this._name),
      repository_name: cdktf.stringToTerraform(this._repositoryName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_name: {
        value: cdktf.stringToHclTerraform(this._catalogName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      device_service_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceServiceTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      filter_no_reboot_required: {
        value: cdktf.booleanToHclTerraform(this._filterNoRebootRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_64_bit: {
        value: cdktf.booleanToHclTerraform(this._is64Bit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      last_run: {
        value: cdktf.stringToHclTerraform(this._lastRun),
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
      repository_name: {
        value: cdktf.stringToHclTerraform(this._repositoryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
