// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_term_details
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterLicenseTermDetailsConfig extends cdktf.TerraformMetaArguments {
  /**
  * device_type query parameter. Type of device like router, switch, wireless or ise
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_term_details#device_type DataDnacenterLicenseTermDetails#device_type}
  */
  readonly deviceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_term_details#id DataDnacenterLicenseTermDetails#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * smart_account_id path parameter. Id of smart account
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_term_details#smart_account_id DataDnacenterLicenseTermDetails#smart_account_id}
  */
  readonly smartAccountId: string;
  /**
  * virtual_account_name path parameter. Name of virtual account. Putting "All" will give license term detail for all virtual accounts.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_term_details#virtual_account_name DataDnacenterLicenseTermDetails#virtual_account_name}
  */
  readonly virtualAccountName: string;
}
export interface DataDnacenterLicenseTermDetailsItems {
}

export function dataDnacenterLicenseTermDetailsItemsToTerraform(struct?: DataDnacenterLicenseTermDetailsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterLicenseTermDetailsItemsToHclTerraform(struct?: DataDnacenterLicenseTermDetailsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterLicenseTermDetailsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterLicenseTermDetailsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterLicenseTermDetailsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dna_level - computed: true, optional: false, required: false
  public get dnaLevel() {
    return this.getStringAttribute('dna_level');
  }

  // is_license_expired - computed: true, optional: false, required: false
  public get isLicenseExpired() {
    return this.getStringAttribute('is_license_expired');
  }

  // license_term_end_date - computed: true, optional: false, required: false
  public get licenseTermEndDate() {
    return this.getStringAttribute('license_term_end_date');
  }

  // license_term_start_date - computed: true, optional: false, required: false
  public get licenseTermStartDate() {
    return this.getStringAttribute('license_term_start_date');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // purchased_dna_license_count - computed: true, optional: false, required: false
  public get purchasedDnaLicenseCount() {
    return this.getStringAttribute('purchased_dna_license_count');
  }

  // virtual_account_name - computed: true, optional: false, required: false
  public get virtualAccountName() {
    return this.getStringAttribute('virtual_account_name');
  }
}

export class DataDnacenterLicenseTermDetailsItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterLicenseTermDetailsItemsOutputReference {
    return new DataDnacenterLicenseTermDetailsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_term_details dnacenter_license_term_details}
*/
export class DataDnacenterLicenseTermDetails extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_license_term_details";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterLicenseTermDetails resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterLicenseTermDetails to import
  * @param importFromId The id of the existing DataDnacenterLicenseTermDetails that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_term_details#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterLicenseTermDetails to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_license_term_details", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_term_details dnacenter_license_term_details} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterLicenseTermDetailsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterLicenseTermDetailsConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_license_term_details',
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
    this._id = config.id;
    this._smartAccountId = config.smartAccountId;
    this._virtualAccountName = config.virtualAccountName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_type - computed: false, optional: false, required: true
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
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
  private _items = new DataDnacenterLicenseTermDetailsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // smart_account_id - computed: false, optional: false, required: true
  private _smartAccountId?: string; 
  public get smartAccountId() {
    return this.getStringAttribute('smart_account_id');
  }
  public set smartAccountId(value: string) {
    this._smartAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smartAccountIdInput() {
    return this._smartAccountId;
  }

  // virtual_account_name - computed: false, optional: false, required: true
  private _virtualAccountName?: string; 
  public get virtualAccountName() {
    return this.getStringAttribute('virtual_account_name');
  }
  public set virtualAccountName(value: string) {
    this._virtualAccountName = value;
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
      id: cdktf.stringToTerraform(this._id),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
