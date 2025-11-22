// https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetalOrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_organization#description MetalOrganization#description}
  */
  readonly description?: string;
  /**
  * **Deprecated** Logo URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_organization#logo MetalOrganization#logo}
  */
  readonly logo?: string;
  /**
  * The name of the Organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_organization#name MetalOrganization#name}
  */
  readonly name: string;
  /**
  * Twitter handle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_organization#twitter MetalOrganization#twitter}
  */
  readonly twitter?: string;
  /**
  * Website link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_organization#website MetalOrganization#website}
  */
  readonly website?: string;
  /**
  * address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_organization#address MetalOrganization#address}
  */
  readonly address?: MetalOrganizationAddress[] | cdktf.IResolvable;
}
export interface MetalOrganizationAddress {
  /**
  * Postal address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_organization#address MetalOrganization#address}
  */
  readonly address: string;
  /**
  * City name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_organization#city MetalOrganization#city}
  */
  readonly city: string;
  /**
  * Two letter country code (ISO 3166-1 alpha-2), e.g. US
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_organization#country MetalOrganization#country}
  */
  readonly country: string;
  /**
  * State name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_organization#state MetalOrganization#state}
  */
  readonly state?: string;
  /**
  * Zip Code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_organization#zip_code MetalOrganization#zip_code}
  */
  readonly zipCode: string;
}

export function metalOrganizationAddressToTerraform(struct?: MetalOrganizationAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    city: cdktf.stringToTerraform(struct!.city),
    country: cdktf.stringToTerraform(struct!.country),
    state: cdktf.stringToTerraform(struct!.state),
    zip_code: cdktf.stringToTerraform(struct!.zipCode),
  }
}


export function metalOrganizationAddressToHclTerraform(struct?: MetalOrganizationAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    city: {
      value: cdktf.stringToHclTerraform(struct!.city),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zip_code: {
      value: cdktf.stringToHclTerraform(struct!.zipCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MetalOrganizationAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetalOrganizationAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._zipCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.zipCode = this._zipCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetalOrganizationAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._city = undefined;
      this._country = undefined;
      this._state = undefined;
      this._zipCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._city = value.city;
      this._country = value.country;
      this._state = value.state;
      this._zipCode = value.zipCode;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // city - computed: false, optional: false, required: true
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // country - computed: false, optional: false, required: true
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // zip_code - computed: false, optional: false, required: true
  private _zipCode?: string; 
  public get zipCode() {
    return this.getStringAttribute('zip_code');
  }
  public set zipCode(value: string) {
    this._zipCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zipCodeInput() {
    return this._zipCode;
  }
}

export class MetalOrganizationAddressList extends cdktf.ComplexList {
  public internalValue? : MetalOrganizationAddress[] | cdktf.IResolvable

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
  public get(index: number): MetalOrganizationAddressOutputReference {
    return new MetalOrganizationAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_organization equinix_metal_organization}
*/
export class MetalOrganization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_metal_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetalOrganization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetalOrganization to import
  * @param importFromId The id of the existing MetalOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetalOrganization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_metal_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.11.1/docs/resources/metal_organization equinix_metal_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetalOrganizationConfig
  */
  public constructor(scope: Construct, id: string, config: MetalOrganizationConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_metal_organization',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.11.1',
        providerVersionConstraint: '4.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._logo = config.logo;
    this._name = config.name;
    this._twitter = config.twitter;
    this._website = config.website;
    this._address.internalValue = config.address;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // description - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logo - computed: true, optional: true, required: false
  private _logo?: string; 
  public get logo() {
    return this.getStringAttribute('logo');
  }
  public set logo(value: string) {
    this._logo = value;
  }
  public resetLogo() {
    this._logo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo;
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

  // twitter - computed: true, optional: true, required: false
  private _twitter?: string; 
  public get twitter() {
    return this.getStringAttribute('twitter');
  }
  public set twitter(value: string) {
    this._twitter = value;
  }
  public resetTwitter() {
    this._twitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twitterInput() {
    return this._twitter;
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // website - computed: true, optional: true, required: false
  private _website?: string; 
  public get website() {
    return this.getStringAttribute('website');
  }
  public set website(value: string) {
    this._website = value;
  }
  public resetWebsite() {
    this._website = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteInput() {
    return this._website;
  }

  // address - computed: false, optional: true, required: false
  private _address = new MetalOrganizationAddressList(this, "address", false);
  public get address() {
    return this._address;
  }
  public putAddress(value: MetalOrganizationAddress[] | cdktf.IResolvable) {
    this._address.internalValue = value;
  }
  public resetAddress() {
    this._address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      logo: cdktf.stringToTerraform(this._logo),
      name: cdktf.stringToTerraform(this._name),
      twitter: cdktf.stringToTerraform(this._twitter),
      website: cdktf.stringToTerraform(this._website),
      address: cdktf.listMapper(metalOrganizationAddressToTerraform, true)(this._address.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logo: {
        value: cdktf.stringToHclTerraform(this._logo),
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
      twitter: {
        value: cdktf.stringToHclTerraform(this._twitter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      website: {
        value: cdktf.stringToHclTerraform(this._website),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address: {
        value: cdktf.listMapperHcl(metalOrganizationAddressToHclTerraform, true)(this._address.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MetalOrganizationAddressList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
