// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/org
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcdOrgConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/org#id DataVcdOrg#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Organization name for lookup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/org#name DataVcdOrg#name}
  */
  readonly name: string;
}
export interface DataVcdOrgAccountLockout {
}

export function dataVcdOrgAccountLockoutToTerraform(struct?: DataVcdOrgAccountLockout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdOrgAccountLockoutToHclTerraform(struct?: DataVcdOrgAccountLockout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdOrgAccountLockoutOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdOrgAccountLockout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdOrgAccountLockout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // invalid_logins_before_lockout - computed: true, optional: false, required: false
  public get invalidLoginsBeforeLockout() {
    return this.getNumberAttribute('invalid_logins_before_lockout');
  }

  // lockout_interval_minutes - computed: true, optional: false, required: false
  public get lockoutIntervalMinutes() {
    return this.getNumberAttribute('lockout_interval_minutes');
  }
}

export class DataVcdOrgAccountLockoutList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdOrgAccountLockoutOutputReference {
    return new DataVcdOrgAccountLockoutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdOrgMetadataEntry {
}

export function dataVcdOrgMetadataEntryToTerraform(struct?: DataVcdOrgMetadataEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdOrgMetadataEntryToHclTerraform(struct?: DataVcdOrgMetadataEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdOrgMetadataEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdOrgMetadataEntry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdOrgMetadataEntry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_system - computed: true, optional: false, required: false
  public get isSystem() {
    return this.getBooleanAttribute('is_system');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_access - computed: true, optional: false, required: false
  public get userAccess() {
    return this.getStringAttribute('user_access');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataVcdOrgMetadataEntryList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdOrgMetadataEntryOutputReference {
    return new DataVcdOrgMetadataEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdOrgVappLease {
}

export function dataVcdOrgVappLeaseToTerraform(struct?: DataVcdOrgVappLease): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdOrgVappLeaseToHclTerraform(struct?: DataVcdOrgVappLease): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdOrgVappLeaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdOrgVappLease | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdOrgVappLease | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete_on_storage_lease_expiration - computed: true, optional: false, required: false
  public get deleteOnStorageLeaseExpiration() {
    return this.getBooleanAttribute('delete_on_storage_lease_expiration');
  }

  // maximum_runtime_lease_in_sec - computed: true, optional: false, required: false
  public get maximumRuntimeLeaseInSec() {
    return this.getNumberAttribute('maximum_runtime_lease_in_sec');
  }

  // maximum_storage_lease_in_sec - computed: true, optional: false, required: false
  public get maximumStorageLeaseInSec() {
    return this.getNumberAttribute('maximum_storage_lease_in_sec');
  }

  // power_off_on_runtime_lease_expiration - computed: true, optional: false, required: false
  public get powerOffOnRuntimeLeaseExpiration() {
    return this.getBooleanAttribute('power_off_on_runtime_lease_expiration');
  }
}

export class DataVcdOrgVappLeaseList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdOrgVappLeaseOutputReference {
    return new DataVcdOrgVappLeaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcdOrgVappTemplateLease {
}

export function dataVcdOrgVappTemplateLeaseToTerraform(struct?: DataVcdOrgVappTemplateLease): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcdOrgVappTemplateLeaseToHclTerraform(struct?: DataVcdOrgVappTemplateLease): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcdOrgVappTemplateLeaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcdOrgVappTemplateLease | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcdOrgVappTemplateLease | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete_on_storage_lease_expiration - computed: true, optional: false, required: false
  public get deleteOnStorageLeaseExpiration() {
    return this.getBooleanAttribute('delete_on_storage_lease_expiration');
  }

  // maximum_storage_lease_in_sec - computed: true, optional: false, required: false
  public get maximumStorageLeaseInSec() {
    return this.getNumberAttribute('maximum_storage_lease_in_sec');
  }
}

export class DataVcdOrgVappTemplateLeaseList extends cdktf.ComplexList {

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
  public get(index: number): DataVcdOrgVappTemplateLeaseOutputReference {
    return new DataVcdOrgVappTemplateLeaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/org vcd_org}
*/
export class DataVcdOrg extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_org";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcdOrg resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcdOrg to import
  * @param importFromId The id of the existing DataVcdOrg that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/org#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcdOrg to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_org", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/data-sources/org vcd_org} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcdOrgConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcdOrgConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_org',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_lockout - computed: true, optional: false, required: false
  private _accountLockout = new DataVcdOrgAccountLockoutList(this, "account_lockout", false);
  public get accountLockout() {
    return this._accountLockout;
  }

  // can_publish_catalogs - computed: true, optional: false, required: false
  public get canPublishCatalogs() {
    return this.getBooleanAttribute('can_publish_catalogs');
  }

  // can_publish_external_catalogs - computed: true, optional: false, required: false
  public get canPublishExternalCatalogs() {
    return this.getBooleanAttribute('can_publish_external_catalogs');
  }

  // can_subscribe_external_catalogs - computed: true, optional: false, required: false
  public get canSubscribeExternalCatalogs() {
    return this.getBooleanAttribute('can_subscribe_external_catalogs');
  }

  // delay_after_power_on_seconds - computed: true, optional: false, required: false
  public get delayAfterPowerOnSeconds() {
    return this.getNumberAttribute('delay_after_power_on_seconds');
  }

  // deployed_vm_quota - computed: true, optional: false, required: false
  public get deployedVmQuota() {
    return this.getNumberAttribute('deployed_vm_quota');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
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

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // list_of_catalogs - computed: true, optional: false, required: false
  public get listOfCatalogs() {
    return cdktf.Fn.tolist(this.getListAttribute('list_of_catalogs'));
  }

  // list_of_vdcs - computed: true, optional: false, required: false
  public get listOfVdcs() {
    return cdktf.Fn.tolist(this.getListAttribute('list_of_vdcs'));
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // metadata_entry - computed: true, optional: false, required: false
  private _metadataEntry = new DataVcdOrgMetadataEntryList(this, "metadata_entry", true);
  public get metadataEntry() {
    return this._metadataEntry;
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

  // number_of_catalogs - computed: true, optional: false, required: false
  public get numberOfCatalogs() {
    return this.getNumberAttribute('number_of_catalogs');
  }

  // number_of_vdcs - computed: true, optional: false, required: false
  public get numberOfVdcs() {
    return this.getNumberAttribute('number_of_vdcs');
  }

  // stored_vm_quota - computed: true, optional: false, required: false
  public get storedVmQuota() {
    return this.getNumberAttribute('stored_vm_quota');
  }

  // vapp_lease - computed: true, optional: false, required: false
  private _vappLease = new DataVcdOrgVappLeaseList(this, "vapp_lease", false);
  public get vappLease() {
    return this._vappLease;
  }

  // vapp_template_lease - computed: true, optional: false, required: false
  private _vappTemplateLease = new DataVcdOrgVappTemplateLeaseList(this, "vapp_template_lease", false);
  public get vappTemplateLease() {
    return this._vappTemplateLease;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
