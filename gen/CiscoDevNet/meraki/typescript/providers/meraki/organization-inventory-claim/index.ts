// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_inventory_claim
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationInventoryClaimConfig extends cdktf.TerraformMetaArguments {
  /**
  * The licenses that should be claimed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_inventory_claim#licenses OrganizationInventoryClaim#licenses}
  */
  readonly licenses?: OrganizationInventoryClaimLicenses[] | cdktf.IResolvable;
  /**
  * The numbers of the orders that should be claimed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_inventory_claim#orders OrganizationInventoryClaim#orders}
  */
  readonly orders?: string[];
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_inventory_claim#organization_id OrganizationInventoryClaim#organization_id}
  */
  readonly organizationId: string;
  /**
  * The list of serials to be claimed to the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_inventory_claim#serials OrganizationInventoryClaim#serials}
  */
  readonly serials: string[];
}
export interface OrganizationInventoryClaimLicenses {
  /**
  * The key of the license
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_inventory_claim#key OrganizationInventoryClaim#key}
  */
  readonly key: string;
  /**
  * Co-term licensing only: either `renew` or `addDevices`. `addDevices` will increase the license limit, while `renew` will extend the amount of time until expiration. Defaults to `addDevices`. All licenses must be claimed with the same mode, and at most one renewal can be claimed at a time. Does not apply to organizations using per-device licensing model.
  *   - Choices: `addDevices`, `renew`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_inventory_claim#mode OrganizationInventoryClaim#mode}
  */
  readonly mode?: string;
}

export function organizationInventoryClaimLicensesToTerraform(struct?: OrganizationInventoryClaimLicenses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function organizationInventoryClaimLicensesToHclTerraform(struct?: OrganizationInventoryClaimLicenses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationInventoryClaimLicensesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrganizationInventoryClaimLicenses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationInventoryClaimLicenses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

export class OrganizationInventoryClaimLicensesList extends cdktf.ComplexList {
  public internalValue? : OrganizationInventoryClaimLicenses[] | cdktf.IResolvable

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
  public get(index: number): OrganizationInventoryClaimLicensesOutputReference {
    return new OrganizationInventoryClaimLicensesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_inventory_claim meraki_organization_inventory_claim}
*/
export class OrganizationInventoryClaim extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_organization_inventory_claim";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationInventoryClaim resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationInventoryClaim to import
  * @param importFromId The id of the existing OrganizationInventoryClaim that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_inventory_claim#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationInventoryClaim to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_organization_inventory_claim", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/organization_inventory_claim meraki_organization_inventory_claim} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationInventoryClaimConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationInventoryClaimConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_organization_inventory_claim',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._licenses.internalValue = config.licenses;
    this._orders = config.orders;
    this._organizationId = config.organizationId;
    this._serials = config.serials;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // licenses - computed: false, optional: true, required: false
  private _licenses = new OrganizationInventoryClaimLicensesList(this, "licenses", false);
  public get licenses() {
    return this._licenses;
  }
  public putLicenses(value: OrganizationInventoryClaimLicenses[] | cdktf.IResolvable) {
    this._licenses.internalValue = value;
  }
  public resetLicenses() {
    this._licenses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licensesInput() {
    return this._licenses.internalValue;
  }

  // orders - computed: false, optional: true, required: false
  private _orders?: string[]; 
  public get orders() {
    return cdktf.Fn.tolist(this.getListAttribute('orders'));
  }
  public set orders(value: string[]) {
    this._orders = value;
  }
  public resetOrders() {
    this._orders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ordersInput() {
    return this._orders;
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

  // serials - computed: false, optional: false, required: true
  private _serials?: string[]; 
  public get serials() {
    return cdktf.Fn.tolist(this.getListAttribute('serials'));
  }
  public set serials(value: string[]) {
    this._serials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialsInput() {
    return this._serials;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      licenses: cdktf.listMapper(organizationInventoryClaimLicensesToTerraform, false)(this._licenses.internalValue),
      orders: cdktf.listMapper(cdktf.stringToTerraform, false)(this._orders),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      serials: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serials),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      licenses: {
        value: cdktf.listMapperHcl(organizationInventoryClaimLicensesToHclTerraform, false)(this._licenses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrganizationInventoryClaimLicensesList",
      },
      orders: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._orders),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serials: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serials),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
