// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/organization_licenses
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationLicensesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/organization_licenses#items OrganizationLicenses#items}
  */
  readonly items: OrganizationLicensesItems[] | cdktf.IResolvable;
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/organization_licenses#organization_id OrganizationLicenses#organization_id}
  */
  readonly organizationId: string;
}
export interface OrganizationLicensesItems {
  /**
  * The serial number of the device to assign this license to. Set this to null to unassign the license. If a different license is already active on the device, this parameter will control queueing/dequeuing this license.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/organization_licenses#device_serial OrganizationLicenses#device_serial}
  */
  readonly deviceSerial?: string;
  /**
  * License ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/organization_licenses#license_id OrganizationLicenses#license_id}
  */
  readonly licenseId: string;
}

export function organizationLicensesItemsToTerraform(struct?: OrganizationLicensesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_serial: cdktf.stringToTerraform(struct!.deviceSerial),
    license_id: cdktf.stringToTerraform(struct!.licenseId),
  }
}


export function organizationLicensesItemsToHclTerraform(struct?: OrganizationLicensesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_serial: {
      value: cdktf.stringToHclTerraform(struct!.deviceSerial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_id: {
      value: cdktf.stringToHclTerraform(struct!.licenseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationLicensesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrganizationLicensesItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceSerial !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceSerial = this._deviceSerial;
    }
    if (this._licenseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseId = this._licenseId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationLicensesItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceSerial = undefined;
      this._licenseId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceSerial = value.deviceSerial;
      this._licenseId = value.licenseId;
    }
  }

  // device_serial - computed: false, optional: true, required: false
  private _deviceSerial?: string; 
  public get deviceSerial() {
    return this.getStringAttribute('device_serial');
  }
  public set deviceSerial(value: string) {
    this._deviceSerial = value;
  }
  public resetDeviceSerial() {
    this._deviceSerial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceSerialInput() {
    return this._deviceSerial;
  }

  // license_id - computed: false, optional: false, required: true
  private _licenseId?: string; 
  public get licenseId() {
    return this.getStringAttribute('license_id');
  }
  public set licenseId(value: string) {
    this._licenseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseIdInput() {
    return this._licenseId;
  }
}

export class OrganizationLicensesItemsList extends cdktf.ComplexList {
  public internalValue? : OrganizationLicensesItems[] | cdktf.IResolvable

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
  public get(index: number): OrganizationLicensesItemsOutputReference {
    return new OrganizationLicensesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/organization_licenses meraki_organization_licenses}
*/
export class OrganizationLicenses extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_organization_licenses";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationLicenses resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationLicenses to import
  * @param importFromId The id of the existing OrganizationLicenses that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/organization_licenses#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationLicenses to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_organization_licenses", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/organization_licenses meraki_organization_licenses} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationLicensesConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationLicensesConfig) {
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
    this._items.internalValue = config.items;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // items - computed: false, optional: false, required: true
  private _items = new OrganizationLicensesItemsList(this, "items", true);
  public get items() {
    return this._items;
  }
  public putItems(value: OrganizationLicensesItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
      items: cdktf.listMapper(organizationLicensesItemsToTerraform, false)(this._items.internalValue),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      items: {
        value: cdktf.listMapperHcl(organizationLicensesItemsToHclTerraform, false)(this._items.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OrganizationLicensesItemsList",
      },
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
