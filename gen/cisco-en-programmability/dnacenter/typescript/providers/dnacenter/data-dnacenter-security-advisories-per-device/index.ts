// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/security_advisories_per_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterSecurityAdvisoriesPerDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * deviceId path parameter. Device instance UUID
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/security_advisories_per_device#device_id DataDnacenterSecurityAdvisoriesPerDevice#device_id}
  */
  readonly deviceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/security_advisories_per_device#id DataDnacenterSecurityAdvisoriesPerDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataDnacenterSecurityAdvisoriesPerDeviceItems {
}

export function dataDnacenterSecurityAdvisoriesPerDeviceItemsToTerraform(struct?: DataDnacenterSecurityAdvisoriesPerDeviceItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterSecurityAdvisoriesPerDeviceItemsToHclTerraform(struct?: DataDnacenterSecurityAdvisoriesPerDeviceItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterSecurityAdvisoriesPerDeviceItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterSecurityAdvisoriesPerDeviceItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterSecurityAdvisoriesPerDeviceItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // advisory_id - computed: true, optional: false, required: false
  public get advisoryId() {
    return this.getStringAttribute('advisory_id');
  }

  // cves - computed: true, optional: false, required: false
  public get cves() {
    return this.getListAttribute('cves');
  }

  // default_config_match_pattern - computed: true, optional: false, required: false
  public get defaultConfigMatchPattern() {
    return this.getStringAttribute('default_config_match_pattern');
  }

  // default_detection_type - computed: true, optional: false, required: false
  public get defaultDetectionType() {
    return this.getStringAttribute('default_detection_type');
  }

  // detection_type - computed: true, optional: false, required: false
  public get detectionType() {
    return this.getStringAttribute('detection_type');
  }

  // device_count - computed: true, optional: false, required: false
  public get deviceCount() {
    return this.getNumberAttribute('device_count');
  }

  // hidden_device_count - computed: true, optional: false, required: false
  public get hiddenDeviceCount() {
    return this.getNumberAttribute('hidden_device_count');
  }

  // publication_url - computed: true, optional: false, required: false
  public get publicationUrl() {
    return this.getStringAttribute('publication_url');
  }

  // sir - computed: true, optional: false, required: false
  public get sir() {
    return this.getStringAttribute('sir');
  }
}

export class DataDnacenterSecurityAdvisoriesPerDeviceItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterSecurityAdvisoriesPerDeviceItemsOutputReference {
    return new DataDnacenterSecurityAdvisoriesPerDeviceItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/security_advisories_per_device dnacenter_security_advisories_per_device}
*/
export class DataDnacenterSecurityAdvisoriesPerDevice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_security_advisories_per_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterSecurityAdvisoriesPerDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterSecurityAdvisoriesPerDevice to import
  * @param importFromId The id of the existing DataDnacenterSecurityAdvisoriesPerDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/security_advisories_per_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterSecurityAdvisoriesPerDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_security_advisories_per_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/security_advisories_per_device dnacenter_security_advisories_per_device} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterSecurityAdvisoriesPerDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterSecurityAdvisoriesPerDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_security_advisories_per_device',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceId = config.deviceId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_id - computed: false, optional: false, required: true
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
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

  // items - computed: true, optional: false, required: false
  private _items = new DataDnacenterSecurityAdvisoriesPerDeviceItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_id: cdktf.stringToTerraform(this._deviceId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_id: {
        value: cdktf.stringToHclTerraform(this._deviceId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
