// https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortConfig extends cdktf.TerraformMetaArguments {
  /**
  * The term of the contract in months: valid values are 1, 12, 24, 36, 48, and 60. To set the product to a month-to-month contract with no minimum term, set the value to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/port#contract_term_months Port#contract_term_months}
  */
  readonly contractTermMonths: number;
  /**
  * A customer reference number to be included in billing information and invoices. Also known as the service level reference (SLR) number. Specify a unique identifying number for the product to be used for billing purposes, such as a cost center number or a unique customer ID. The service level reference number appears for each service under the Product section of the invoice. You can also edit this field for an existing service. Please note that a VXC associated with the Port is not automatically updated with the Port service level reference number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/port#cost_centre Port#cost_centre}
  */
  readonly costCentre?: string;
  /**
  * The diversity zone of the product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/port#diversity_zone Port#diversity_zone}
  */
  readonly diversityZone?: string;
  /**
  * The numeric location ID of the product. This value can be retrieved from the data source megaport_location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/port#location_id Port#location_id}
  */
  readonly locationId: number;
  /**
  * Whether the product is visible in the marketplace. By default, the Port is private to your enterprise and consumes services from the Megaport network for your own internal company, team, and resources. When set to Private, the Port is not searchable in the Megaport Marketplace (however, others can still connect to you using a service key). Click Public to make the new Port and profile visible on the Megaport network for inbound connection requests. It is possible to change the Port from Private to Public after the initial setup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/port#marketplace_visibility Port#marketplace_visibility}
  */
  readonly marketplaceVisibility: boolean | cdktf.IResolvable;
  /**
  * The speed of the port in Mbps. Can be 1000(1g), 10000 (10 G), 100000 (100 G), or 400000 (400G) where available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/port#port_speed Port#port_speed}
  */
  readonly portSpeed: number;
  /**
  * The name of the product. Specify a name for the Port that is easily identifiable, particularly if you plan on having more than one Port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/port#product_name Port#product_name}
  */
  readonly productName: string;
  /**
  * Promo code is an optional string that can be used to enter a promotional code for the service order. The code is not validated, so if the code doesn't exist or doesn't work for the service, the request will still be successful.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/port#promo_code Port#promo_code}
  */
  readonly promoCode?: string;
  /**
  * The resource tags associated with the product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/port#resource_tags Port#resource_tags}
  */
  readonly resourceTags?: { [key: string]: string };
}
export interface PortResourcesInterface {
}

export function portResourcesInterfaceToTerraform(struct?: PortResourcesInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function portResourcesInterfaceToHclTerraform(struct?: PortResourcesInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PortResourcesInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortResourcesInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortResourcesInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // demarcation - computed: true, optional: false, required: false
  public get demarcation() {
    return this.getStringAttribute('demarcation');
  }

  // up - computed: true, optional: false, required: false
  public get up() {
    return this.getNumberAttribute('up');
  }
}
export interface PortResources {
  /**
  * Port interface details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/port#interface Port#interface}
  */
  readonly interface?: PortResourcesInterface;
}

export function portResourcesToTerraform(struct?: PortResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: portResourcesInterfaceToTerraform(struct!.interface),
  }
}


export function portResourcesToHclTerraform(struct?: PortResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: portResourcesInterfaceToHclTerraform(struct!.interface),
      isBlock: true,
      type: "struct",
      storageClassType: "PortResourcesInterface",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interface.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interface.internalValue = value.interface;
    }
  }

  // interface - computed: true, optional: true, required: false
  private _interface = new PortResourcesInterfaceOutputReference(this, "interface");
  public get interface() {
    return this._interface;
  }
  public putInterface(value: PortResourcesInterface) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/port megaport_port}
*/
export class Port extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "megaport_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Port resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Port to import
  * @param importFromId The id of the existing Port that should be imported. Refer to the {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Port to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "megaport_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/megaport/megaport/1.4.6/docs/resources/port megaport_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortConfig
  */
  public constructor(scope: Construct, id: string, config: PortConfig) {
    super(scope, id, {
      terraformResourceType: 'megaport_port',
      terraformGeneratorMetadata: {
        providerName: 'megaport',
        providerVersion: '1.4.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contractTermMonths = config.contractTermMonths;
    this._costCentre = config.costCentre;
    this._diversityZone = config.diversityZone;
    this._locationId = config.locationId;
    this._marketplaceVisibility = config.marketplaceVisibility;
    this._portSpeed = config.portSpeed;
    this._productName = config.productName;
    this._promoCode = config.promoCode;
    this._resourceTags = config.resourceTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cancelable - computed: true, optional: false, required: false
  public get cancelable() {
    return this.getBooleanAttribute('cancelable');
  }

  // company_uid - computed: true, optional: false, required: false
  public get companyUid() {
    return this.getStringAttribute('company_uid');
  }

  // contract_end_date - computed: true, optional: false, required: false
  public get contractEndDate() {
    return this.getStringAttribute('contract_end_date');
  }

  // contract_start_date - computed: true, optional: false, required: false
  public get contractStartDate() {
    return this.getStringAttribute('contract_start_date');
  }

  // contract_term_months - computed: false, optional: false, required: true
  private _contractTermMonths?: number; 
  public get contractTermMonths() {
    return this.getNumberAttribute('contract_term_months');
  }
  public set contractTermMonths(value: number) {
    this._contractTermMonths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractTermMonthsInput() {
    return this._contractTermMonths;
  }

  // cost_centre - computed: true, optional: true, required: false
  private _costCentre?: string; 
  public get costCentre() {
    return this.getStringAttribute('cost_centre');
  }
  public set costCentre(value: string) {
    this._costCentre = value;
  }
  public resetCostCentre() {
    this._costCentre = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCentreInput() {
    return this._costCentre;
  }

  // create_date - computed: true, optional: false, required: false
  public get createDate() {
    return this.getStringAttribute('create_date');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // diversity_zone - computed: true, optional: true, required: false
  private _diversityZone?: string; 
  public get diversityZone() {
    return this.getStringAttribute('diversity_zone');
  }
  public set diversityZone(value: string) {
    this._diversityZone = value;
  }
  public resetDiversityZone() {
    this._diversityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diversityZoneInput() {
    return this._diversityZone;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // live_date - computed: true, optional: false, required: false
  public get liveDate() {
    return this.getStringAttribute('live_date');
  }

  // location_id - computed: false, optional: false, required: true
  private _locationId?: number; 
  public get locationId() {
    return this.getNumberAttribute('location_id');
  }
  public set locationId(value: number) {
    this._locationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
  }

  // locked - computed: true, optional: false, required: false
  public get locked() {
    return this.getBooleanAttribute('locked');
  }

  // market - computed: true, optional: false, required: false
  public get market() {
    return this.getStringAttribute('market');
  }

  // marketplace_visibility - computed: false, optional: false, required: true
  private _marketplaceVisibility?: boolean | cdktf.IResolvable; 
  public get marketplaceVisibility() {
    return this.getBooleanAttribute('marketplace_visibility');
  }
  public set marketplaceVisibility(value: boolean | cdktf.IResolvable) {
    this._marketplaceVisibility = value;
  }
  // Temporarily expose input value. Use with caution.
  public get marketplaceVisibilityInput() {
    return this._marketplaceVisibility;
  }

  // port_speed - computed: false, optional: false, required: true
  private _portSpeed?: number; 
  public get portSpeed() {
    return this.getNumberAttribute('port_speed');
  }
  public set portSpeed(value: number) {
    this._portSpeed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portSpeedInput() {
    return this._portSpeed;
  }

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getNumberAttribute('product_id');
  }

  // product_name - computed: false, optional: false, required: true
  private _productName?: string; 
  public get productName() {
    return this.getStringAttribute('product_name');
  }
  public set productName(value: string) {
    this._productName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName;
  }

  // product_uid - computed: true, optional: false, required: false
  public get productUid() {
    return this.getStringAttribute('product_uid');
  }

  // promo_code - computed: false, optional: true, required: false
  private _promoCode?: string; 
  public get promoCode() {
    return this.getStringAttribute('promo_code');
  }
  public set promoCode(value: string) {
    this._promoCode = value;
  }
  public resetPromoCode() {
    this._promoCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promoCodeInput() {
    return this._promoCode;
  }

  // provisioning_status - computed: true, optional: false, required: false
  public get provisioningStatus() {
    return this.getStringAttribute('provisioning_status');
  }

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags?: { [key: string]: string }; 
  public get resourceTags() {
    return this.getStringMapAttribute('resource_tags');
  }
  public set resourceTags(value: { [key: string]: string }) {
    this._resourceTags = value;
  }
  public resetResourceTags() {
    this._resourceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags;
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new PortResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }

  // terminate_date - computed: true, optional: false, required: false
  public get terminateDate() {
    return this.getStringAttribute('terminate_date');
  }

  // usage_algorithm - computed: true, optional: false, required: false
  public get usageAlgorithm() {
    return this.getStringAttribute('usage_algorithm');
  }

  // virtual - computed: true, optional: false, required: false
  public get virtual() {
    return this.getBooleanAttribute('virtual');
  }

  // vxc_auto_approval - computed: true, optional: false, required: false
  public get vxcAutoApproval() {
    return this.getBooleanAttribute('vxc_auto_approval');
  }

  // vxc_permitted - computed: true, optional: false, required: false
  public get vxcPermitted() {
    return this.getBooleanAttribute('vxc_permitted');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contract_term_months: cdktf.numberToTerraform(this._contractTermMonths),
      cost_centre: cdktf.stringToTerraform(this._costCentre),
      diversity_zone: cdktf.stringToTerraform(this._diversityZone),
      location_id: cdktf.numberToTerraform(this._locationId),
      marketplace_visibility: cdktf.booleanToTerraform(this._marketplaceVisibility),
      port_speed: cdktf.numberToTerraform(this._portSpeed),
      product_name: cdktf.stringToTerraform(this._productName),
      promo_code: cdktf.stringToTerraform(this._promoCode),
      resource_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._resourceTags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contract_term_months: {
        value: cdktf.numberToHclTerraform(this._contractTermMonths),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cost_centre: {
        value: cdktf.stringToHclTerraform(this._costCentre),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diversity_zone: {
        value: cdktf.stringToHclTerraform(this._diversityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location_id: {
        value: cdktf.numberToHclTerraform(this._locationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      marketplace_visibility: {
        value: cdktf.booleanToHclTerraform(this._marketplaceVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port_speed: {
        value: cdktf.numberToHclTerraform(this._portSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      product_name: {
        value: cdktf.stringToHclTerraform(this._productName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      promo_code: {
        value: cdktf.stringToHclTerraform(this._promoCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._resourceTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
