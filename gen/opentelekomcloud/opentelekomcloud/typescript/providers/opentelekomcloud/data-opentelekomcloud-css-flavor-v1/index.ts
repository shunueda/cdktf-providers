// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/css_flavor_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudCssFlavorV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/css_flavor_v1#id DataOpentelekomcloudCssFlavorV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/css_flavor_v1#min_cpu DataOpentelekomcloudCssFlavorV1#min_cpu}
  */
  readonly minCpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/css_flavor_v1#min_ram DataOpentelekomcloudCssFlavorV1#min_ram}
  */
  readonly minRam?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/css_flavor_v1#name DataOpentelekomcloudCssFlavorV1#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/css_flavor_v1#type DataOpentelekomcloudCssFlavorV1#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/css_flavor_v1#version DataOpentelekomcloudCssFlavorV1#version}
  */
  readonly version?: string;
  /**
  * disk_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/css_flavor_v1#disk_range DataOpentelekomcloudCssFlavorV1#disk_range}
  */
  readonly diskRange?: DataOpentelekomcloudCssFlavorV1DiskRange;
}
export interface DataOpentelekomcloudCssFlavorV1DiskRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/css_flavor_v1#min_from DataOpentelekomcloudCssFlavorV1#min_from}
  */
  readonly minFrom?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/css_flavor_v1#min_to DataOpentelekomcloudCssFlavorV1#min_to}
  */
  readonly minTo?: number;
}

export function dataOpentelekomcloudCssFlavorV1DiskRangeToTerraform(struct?: DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference | DataOpentelekomcloudCssFlavorV1DiskRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_from: cdktf.numberToTerraform(struct!.minFrom),
    min_to: cdktf.numberToTerraform(struct!.minTo),
  }
}


export function dataOpentelekomcloudCssFlavorV1DiskRangeToHclTerraform(struct?: DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference | DataOpentelekomcloudCssFlavorV1DiskRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_from: {
      value: cdktf.numberToHclTerraform(struct!.minFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_to: {
      value: cdktf.numberToHclTerraform(struct!.minTo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataOpentelekomcloudCssFlavorV1DiskRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.minFrom = this._minFrom;
    }
    if (this._minTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTo = this._minTo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudCssFlavorV1DiskRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minFrom = undefined;
      this._minTo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minFrom = value.minFrom;
      this._minTo = value.minTo;
    }
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // min_from - computed: false, optional: true, required: false
  private _minFrom?: number; 
  public get minFrom() {
    return this.getNumberAttribute('min_from');
  }
  public set minFrom(value: number) {
    this._minFrom = value;
  }
  public resetMinFrom() {
    this._minFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minFromInput() {
    return this._minFrom;
  }

  // min_to - computed: false, optional: true, required: false
  private _minTo?: number; 
  public get minTo() {
    return this.getNumberAttribute('min_to');
  }
  public set minTo(value: number) {
    this._minTo = value;
  }
  public resetMinTo() {
    this._minTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minToInput() {
    return this._minTo;
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/css_flavor_v1 opentelekomcloud_css_flavor_v1}
*/
export class DataOpentelekomcloudCssFlavorV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_css_flavor_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpentelekomcloudCssFlavorV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpentelekomcloudCssFlavorV1 to import
  * @param importFromId The id of the existing DataOpentelekomcloudCssFlavorV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/css_flavor_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpentelekomcloudCssFlavorV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_css_flavor_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/data-sources/css_flavor_v1 opentelekomcloud_css_flavor_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudCssFlavorV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudCssFlavorV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_css_flavor_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.52'
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
    this._minCpu = config.minCpu;
    this._minRam = config.minRam;
    this._name = config.name;
    this._type = config.type;
    this._version = config.version;
    this._diskRange.internalValue = config.diskRange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getNumberAttribute('cpu');
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

  // min_cpu - computed: false, optional: true, required: false
  private _minCpu?: number; 
  public get minCpu() {
    return this.getNumberAttribute('min_cpu');
  }
  public set minCpu(value: number) {
    this._minCpu = value;
  }
  public resetMinCpu() {
    this._minCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuInput() {
    return this._minCpu;
  }

  // min_ram - computed: false, optional: true, required: false
  private _minRam?: number; 
  public get minRam() {
    return this.getNumberAttribute('min_ram');
  }
  public set minRam(value: number) {
    this._minRam = value;
  }
  public resetMinRam() {
    this._minRam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRamInput() {
    return this._minRam;
  }

  // name - computed: true, optional: true, required: false
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

  // ram - computed: true, optional: false, required: false
  public get ram() {
    return this.getNumberAttribute('ram');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
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

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // disk_range - computed: false, optional: true, required: false
  private _diskRange = new DataOpentelekomcloudCssFlavorV1DiskRangeOutputReference(this, "disk_range");
  public get diskRange() {
    return this._diskRange;
  }
  public putDiskRange(value: DataOpentelekomcloudCssFlavorV1DiskRange) {
    this._diskRange.internalValue = value;
  }
  public resetDiskRange() {
    this._diskRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskRangeInput() {
    return this._diskRange.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      min_cpu: cdktf.numberToTerraform(this._minCpu),
      min_ram: cdktf.numberToTerraform(this._minRam),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      version: cdktf.stringToTerraform(this._version),
      disk_range: dataOpentelekomcloudCssFlavorV1DiskRangeToTerraform(this._diskRange.internalValue),
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
      min_cpu: {
        value: cdktf.numberToHclTerraform(this._minCpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_ram: {
        value: cdktf.numberToHclTerraform(this._minRam),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_range: {
        value: dataOpentelekomcloudCssFlavorV1DiskRangeToHclTerraform(this._diskRange.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataOpentelekomcloudCssFlavorV1DiskRangeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
