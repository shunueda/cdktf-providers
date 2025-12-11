// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/organization_licenses
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiOrganizationLicensesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/organization_licenses#organization_id DataMerakiOrganizationLicenses#organization_id}
  */
  readonly organizationId: string;
}
export interface DataMerakiOrganizationLicensesItemsPermanentlyQueuedLicenses {
}

export function dataMerakiOrganizationLicensesItemsPermanentlyQueuedLicensesToTerraform(struct?: DataMerakiOrganizationLicensesItemsPermanentlyQueuedLicenses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiOrganizationLicensesItemsPermanentlyQueuedLicensesToHclTerraform(struct?: DataMerakiOrganizationLicensesItemsPermanentlyQueuedLicenses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiOrganizationLicensesItemsPermanentlyQueuedLicensesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiOrganizationLicensesItemsPermanentlyQueuedLicenses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiOrganizationLicensesItemsPermanentlyQueuedLicenses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration_in_days - computed: true, optional: false, required: false
  public get durationInDays() {
    return this.getNumberAttribute('duration_in_days');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // license_key - computed: true, optional: false, required: false
  public get licenseKey() {
    return this.getStringAttribute('license_key');
  }

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }

  // order_number - computed: true, optional: false, required: false
  public get orderNumber() {
    return this.getStringAttribute('order_number');
  }
}

export class DataMerakiOrganizationLicensesItemsPermanentlyQueuedLicensesList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiOrganizationLicensesItemsPermanentlyQueuedLicensesOutputReference {
    return new DataMerakiOrganizationLicensesItemsPermanentlyQueuedLicensesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMerakiOrganizationLicensesItems {
}

export function dataMerakiOrganizationLicensesItemsToTerraform(struct?: DataMerakiOrganizationLicensesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiOrganizationLicensesItemsToHclTerraform(struct?: DataMerakiOrganizationLicensesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiOrganizationLicensesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiOrganizationLicensesItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiOrganizationLicensesItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // activation_date - computed: true, optional: false, required: false
  public get activationDate() {
    return this.getStringAttribute('activation_date');
  }

  // claim_date - computed: true, optional: false, required: false
  public get claimDate() {
    return this.getStringAttribute('claim_date');
  }

  // device_serial - computed: true, optional: false, required: false
  public get deviceSerial() {
    return this.getStringAttribute('device_serial');
  }

  // duration_in_days - computed: true, optional: false, required: false
  public get durationInDays() {
    return this.getNumberAttribute('duration_in_days');
  }

  // expiration_date - computed: true, optional: false, required: false
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }

  // head_license_id - computed: true, optional: false, required: false
  public get headLicenseId() {
    return this.getStringAttribute('head_license_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // license_key - computed: true, optional: false, required: false
  public get licenseKey() {
    return this.getStringAttribute('license_key');
  }

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // order_number - computed: true, optional: false, required: false
  public get orderNumber() {
    return this.getStringAttribute('order_number');
  }

  // permanently_queued_licenses - computed: true, optional: false, required: false
  private _permanentlyQueuedLicenses = new DataMerakiOrganizationLicensesItemsPermanentlyQueuedLicensesList(this, "permanently_queued_licenses", false);
  public get permanentlyQueuedLicenses() {
    return this._permanentlyQueuedLicenses;
  }

  // seat_count - computed: true, optional: false, required: false
  public get seatCount() {
    return this.getNumberAttribute('seat_count');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // total_duration_in_days - computed: true, optional: false, required: false
  public get totalDurationInDays() {
    return this.getNumberAttribute('total_duration_in_days');
  }
}

export class DataMerakiOrganizationLicensesItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiOrganizationLicensesItemsOutputReference {
    return new DataMerakiOrganizationLicensesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/organization_licenses meraki_organization_licenses}
*/
export class DataMerakiOrganizationLicenses extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_organization_licenses";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiOrganizationLicenses resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiOrganizationLicenses to import
  * @param importFromId The id of the existing DataMerakiOrganizationLicenses that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/organization_licenses#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiOrganizationLicenses to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_organization_licenses", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/data-sources/organization_licenses meraki_organization_licenses} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiOrganizationLicensesConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiOrganizationLicensesConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_organization_licenses',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.9.0',
        providerVersionConstraint: '1.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // items - computed: true, optional: false, required: false
  private _items = new DataMerakiOrganizationLicensesItemsList(this, "items", true);
  public get items() {
    return this._items;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
