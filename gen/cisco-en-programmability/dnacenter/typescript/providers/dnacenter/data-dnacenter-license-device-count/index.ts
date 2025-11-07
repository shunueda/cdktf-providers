// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_device_count
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterLicenseDeviceCountConfig extends cdktf.TerraformMetaArguments {
  /**
  * device_type query parameter. Type of device
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_device_count#device_type DataDnacenterLicenseDeviceCount#device_type}
  */
  readonly deviceType?: string;
  /**
  * dna_level query parameter. Device Cisco DNA License Level
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_device_count#dna_level DataDnacenterLicenseDeviceCount#dna_level}
  */
  readonly dnaLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_device_count#id DataDnacenterLicenseDeviceCount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * registration_status query parameter. Smart license registration status of device
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_device_count#registration_status DataDnacenterLicenseDeviceCount#registration_status}
  */
  readonly registrationStatus?: string;
  /**
  * smart_account_id query parameter. Smart account id
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_device_count#smart_account_id DataDnacenterLicenseDeviceCount#smart_account_id}
  */
  readonly smartAccountId?: string;
  /**
  * virtual_account_name query parameter. Virtual account name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_device_count#virtual_account_name DataDnacenterLicenseDeviceCount#virtual_account_name}
  */
  readonly virtualAccountName?: string;
}
export interface DataDnacenterLicenseDeviceCountItem {
}

export function dataDnacenterLicenseDeviceCountItemToTerraform(struct?: DataDnacenterLicenseDeviceCountItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterLicenseDeviceCountItemToHclTerraform(struct?: DataDnacenterLicenseDeviceCountItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterLicenseDeviceCountItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterLicenseDeviceCountItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterLicenseDeviceCountItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // response - computed: true, optional: false, required: false
  public get response() {
    return this.getNumberAttribute('response');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataDnacenterLicenseDeviceCountItemList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterLicenseDeviceCountItemOutputReference {
    return new DataDnacenterLicenseDeviceCountItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_device_count dnacenter_license_device_count}
*/
export class DataDnacenterLicenseDeviceCount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_license_device_count";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterLicenseDeviceCount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterLicenseDeviceCount to import
  * @param importFromId The id of the existing DataDnacenterLicenseDeviceCount that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_device_count#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterLicenseDeviceCount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_license_device_count", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_device_count dnacenter_license_device_count} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterLicenseDeviceCountConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterLicenseDeviceCountConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_license_device_count',
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
    this._deviceType = config.deviceType;
    this._dnaLevel = config.dnaLevel;
    this._id = config.id;
    this._registrationStatus = config.registrationStatus;
    this._smartAccountId = config.smartAccountId;
    this._virtualAccountName = config.virtualAccountName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_type - computed: false, optional: true, required: false
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // dna_level - computed: false, optional: true, required: false
  private _dnaLevel?: string; 
  public get dnaLevel() {
    return this.getStringAttribute('dna_level');
  }
  public set dnaLevel(value: string) {
    this._dnaLevel = value;
  }
  public resetDnaLevel() {
    this._dnaLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnaLevelInput() {
    return this._dnaLevel;
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

  // item - computed: true, optional: false, required: false
  private _item = new DataDnacenterLicenseDeviceCountItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // registration_status - computed: false, optional: true, required: false
  private _registrationStatus?: string; 
  public get registrationStatus() {
    return this.getStringAttribute('registration_status');
  }
  public set registrationStatus(value: string) {
    this._registrationStatus = value;
  }
  public resetRegistrationStatus() {
    this._registrationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationStatusInput() {
    return this._registrationStatus;
  }

  // smart_account_id - computed: false, optional: true, required: false
  private _smartAccountId?: string; 
  public get smartAccountId() {
    return this.getStringAttribute('smart_account_id');
  }
  public set smartAccountId(value: string) {
    this._smartAccountId = value;
  }
  public resetSmartAccountId() {
    this._smartAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartAccountIdInput() {
    return this._smartAccountId;
  }

  // virtual_account_name - computed: false, optional: true, required: false
  private _virtualAccountName?: string; 
  public get virtualAccountName() {
    return this.getStringAttribute('virtual_account_name');
  }
  public set virtualAccountName(value: string) {
    this._virtualAccountName = value;
  }
  public resetVirtualAccountName() {
    this._virtualAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualAccountNameInput() {
    return this._virtualAccountName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_type: cdktf.stringToTerraform(this._deviceType),
      dna_level: cdktf.stringToTerraform(this._dnaLevel),
      id: cdktf.stringToTerraform(this._id),
      registration_status: cdktf.stringToTerraform(this._registrationStatus),
      smart_account_id: cdktf.stringToTerraform(this._smartAccountId),
      virtual_account_name: cdktf.stringToTerraform(this._virtualAccountName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_type: {
        value: cdktf.stringToHclTerraform(this._deviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dna_level: {
        value: cdktf.stringToHclTerraform(this._dnaLevel),
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
      registration_status: {
        value: cdktf.stringToHclTerraform(this._registrationStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smart_account_id: {
        value: cdktf.stringToHclTerraform(this._smartAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_account_name: {
        value: cdktf.stringToHclTerraform(this._virtualAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
