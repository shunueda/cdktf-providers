// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/rds_collation_time_zones
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudRdsCollationTimeZonesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/rds_collation_time_zones#id DataAlicloudRdsCollationTimeZones#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/rds_collation_time_zones#output_file DataAlicloudRdsCollationTimeZones#output_file}
  */
  readonly outputFile?: string;
  /**
  * collation_time_zones block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/rds_collation_time_zones#collation_time_zones DataAlicloudRdsCollationTimeZones#collation_time_zones}
  */
  readonly collationTimeZones?: DataAlicloudRdsCollationTimeZonesCollationTimeZones[] | cdktf.IResolvable;
}
export interface DataAlicloudRdsCollationTimeZonesCollationTimeZones {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/rds_collation_time_zones#description DataAlicloudRdsCollationTimeZones#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/rds_collation_time_zones#standard_time_offset DataAlicloudRdsCollationTimeZones#standard_time_offset}
  */
  readonly standardTimeOffset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/rds_collation_time_zones#time_zone DataAlicloudRdsCollationTimeZones#time_zone}
  */
  readonly timeZone?: string;
}

export function dataAlicloudRdsCollationTimeZonesCollationTimeZonesToTerraform(struct?: DataAlicloudRdsCollationTimeZonesCollationTimeZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    standard_time_offset: cdktf.stringToTerraform(struct!.standardTimeOffset),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function dataAlicloudRdsCollationTimeZonesCollationTimeZonesToHclTerraform(struct?: DataAlicloudRdsCollationTimeZonesCollationTimeZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standard_time_offset: {
      value: cdktf.stringToHclTerraform(struct!.standardTimeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAlicloudRdsCollationTimeZonesCollationTimeZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudRdsCollationTimeZonesCollationTimeZones | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._standardTimeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardTimeOffset = this._standardTimeOffset;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudRdsCollationTimeZonesCollationTimeZones | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._standardTimeOffset = undefined;
      this._timeZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._standardTimeOffset = value.standardTimeOffset;
      this._timeZone = value.timeZone;
    }
  }

  // description - computed: false, optional: true, required: false
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

  // standard_time_offset - computed: false, optional: true, required: false
  private _standardTimeOffset?: string; 
  public get standardTimeOffset() {
    return this.getStringAttribute('standard_time_offset');
  }
  public set standardTimeOffset(value: string) {
    this._standardTimeOffset = value;
  }
  public resetStandardTimeOffset() {
    this._standardTimeOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardTimeOffsetInput() {
    return this._standardTimeOffset;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}

export class DataAlicloudRdsCollationTimeZonesCollationTimeZonesList extends cdktf.ComplexList {
  public internalValue? : DataAlicloudRdsCollationTimeZonesCollationTimeZones[] | cdktf.IResolvable

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
  public get(index: number): DataAlicloudRdsCollationTimeZonesCollationTimeZonesOutputReference {
    return new DataAlicloudRdsCollationTimeZonesCollationTimeZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/rds_collation_time_zones alicloud_rds_collation_time_zones}
*/
export class DataAlicloudRdsCollationTimeZones extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_rds_collation_time_zones";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudRdsCollationTimeZones resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudRdsCollationTimeZones to import
  * @param importFromId The id of the existing DataAlicloudRdsCollationTimeZones that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/rds_collation_time_zones#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudRdsCollationTimeZones to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_rds_collation_time_zones", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/rds_collation_time_zones alicloud_rds_collation_time_zones} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudRdsCollationTimeZonesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudRdsCollationTimeZonesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_rds_collation_time_zones',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
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
    this._outputFile = config.outputFile;
    this._collationTimeZones.internalValue = config.collationTimeZones;
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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // collation_time_zones - computed: false, optional: true, required: false
  private _collationTimeZones = new DataAlicloudRdsCollationTimeZonesCollationTimeZonesList(this, "collation_time_zones", false);
  public get collationTimeZones() {
    return this._collationTimeZones;
  }
  public putCollationTimeZones(value: DataAlicloudRdsCollationTimeZonesCollationTimeZones[] | cdktf.IResolvable) {
    this._collationTimeZones.internalValue = value;
  }
  public resetCollationTimeZones() {
    this._collationTimeZones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationTimeZonesInput() {
    return this._collationTimeZones.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      output_file: cdktf.stringToTerraform(this._outputFile),
      collation_time_zones: cdktf.listMapper(dataAlicloudRdsCollationTimeZonesCollationTimeZonesToTerraform, true)(this._collationTimeZones.internalValue),
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
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collation_time_zones: {
        value: cdktf.listMapperHcl(dataAlicloudRdsCollationTimeZonesCollationTimeZonesToHclTerraform, true)(this._collationTimeZones.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAlicloudRdsCollationTimeZonesCollationTimeZonesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
