// https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/configuration_report_info
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOmeConfigurationReportInfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the Baseline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/configuration_report_info#baseline_name DataOmeConfigurationReportInfo#baseline_name}
  */
  readonly baselineName: string;
  /**
  * Fetch  device compliance attribute report.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/configuration_report_info#fetch_attributes DataOmeConfigurationReportInfo#fetch_attributes}
  */
  readonly fetchAttributes?: boolean | cdktf.IResolvable;
  /**
  * ID for baseline compliance data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/configuration_report_info#id DataOmeConfigurationReportInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataOmeConfigurationReportInfoComplianceReportDevice {
}

export function dataOmeConfigurationReportInfoComplianceReportDeviceToTerraform(struct?: DataOmeConfigurationReportInfoComplianceReportDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeConfigurationReportInfoComplianceReportDeviceToHclTerraform(struct?: DataOmeConfigurationReportInfoComplianceReportDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeConfigurationReportInfoComplianceReportDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeConfigurationReportInfoComplianceReportDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeConfigurationReportInfoComplianceReportDevice | undefined) {
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

  // device_compliance_details - computed: true, optional: false, required: false
  public get deviceComplianceDetails() {
    return this.getStringAttribute('device_compliance_details');
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getNumberAttribute('device_id');
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // device_servicetag - computed: true, optional: false, required: false
  public get deviceServicetag() {
    return this.getStringAttribute('device_servicetag');
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getNumberAttribute('device_type');
  }

  // inventory_time - computed: true, optional: false, required: false
  public get inventoryTime() {
    return this.getStringAttribute('inventory_time');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }
}

export class DataOmeConfigurationReportInfoComplianceReportDeviceList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeConfigurationReportInfoComplianceReportDeviceOutputReference {
    return new DataOmeConfigurationReportInfoComplianceReportDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/configuration_report_info ome_configuration_report_info}
*/
export class DataOmeConfigurationReportInfo extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ome_configuration_report_info";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOmeConfigurationReportInfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOmeConfigurationReportInfo to import
  * @param importFromId The id of the existing DataOmeConfigurationReportInfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/configuration_report_info#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOmeConfigurationReportInfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ome_configuration_report_info", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/configuration_report_info ome_configuration_report_info} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOmeConfigurationReportInfoConfig
  */
  public constructor(scope: Construct, id: string, config: DataOmeConfigurationReportInfoConfig) {
    super(scope, id, {
      terraformResourceType: 'ome_configuration_report_info',
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
    this._baselineName = config.baselineName;
    this._fetchAttributes = config.fetchAttributes;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // baseline_name - computed: false, optional: false, required: true
  private _baselineName?: string; 
  public get baselineName() {
    return this.getStringAttribute('baseline_name');
  }
  public set baselineName(value: string) {
    this._baselineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineNameInput() {
    return this._baselineName;
  }

  // compliance_report_device - computed: true, optional: false, required: false
  private _complianceReportDevice = new DataOmeConfigurationReportInfoComplianceReportDeviceList(this, "compliance_report_device", false);
  public get complianceReportDevice() {
    return this._complianceReportDevice;
  }

  // fetch_attributes - computed: true, optional: true, required: false
  private _fetchAttributes?: boolean | cdktf.IResolvable; 
  public get fetchAttributes() {
    return this.getBooleanAttribute('fetch_attributes');
  }
  public set fetchAttributes(value: boolean | cdktf.IResolvable) {
    this._fetchAttributes = value;
  }
  public resetFetchAttributes() {
    this._fetchAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAttributesInput() {
    return this._fetchAttributes;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      baseline_name: cdktf.stringToTerraform(this._baselineName),
      fetch_attributes: cdktf.booleanToTerraform(this._fetchAttributes),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      baseline_name: {
        value: cdktf.stringToHclTerraform(this._baselineName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fetch_attributes: {
        value: cdktf.booleanToHclTerraform(this._fetchAttributes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
