// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/marketplace_publication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MarketplacePublicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/marketplace_publication#compartment_id MarketplacePublication#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/marketplace_publication#defined_tags MarketplacePublication#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/marketplace_publication#freeform_tags MarketplacePublication#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/marketplace_publication#id MarketplacePublication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/marketplace_publication#is_agreement_acknowledged MarketplacePublication#is_agreement_acknowledged}
  */
  readonly isAgreementAcknowledged: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/marketplace_publication#listing_type MarketplacePublication#listing_type}
  */
  readonly listingType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/marketplace_publication#long_description MarketplacePublication#long_description}
  */
  readonly longDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/marketplace_publication#name MarketplacePublication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/marketplace_publication#short_description MarketplacePublication#short_description}
  */
  readonly shortDescription: string;
  /**
  * package_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/marketplace_publication#package_details MarketplacePublication#package_details}
  */
  readonly packageDetails: MarketplacePublicationPackageDetails;
  /**
  * support_contacts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/marketplace_publication#support_contacts MarketplacePublication#support_contacts}
  */
  readonly supportContacts: MarketplacePublicationSupportContacts[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/marketplace_publication#timeouts MarketplacePublication#timeouts}
  */
  readonly timeouts?: MarketplacePublicationTimeouts;
}
export interface MarketplacePublicationIcon {
}

export function marketplacePublicationIconToTerraform(struct?: MarketplacePublicationIcon): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function marketplacePublicationIconToHclTerraform(struct?: MarketplacePublicationIcon): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MarketplacePublicationIconOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MarketplacePublicationIcon | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MarketplacePublicationIcon | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_url - computed: true, optional: false, required: false
  public get contentUrl() {
    return this.getStringAttribute('content_url');
  }

  // file_extension - computed: true, optional: false, required: false
  public get fileExtension() {
    return this.getStringAttribute('file_extension');
  }

  // mime_type - computed: true, optional: false, required: false
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class MarketplacePublicationIconList extends cdktf.ComplexList {

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
  public get(index: number): MarketplacePublicationIconOutputReference {
    return new MarketplacePublicationIconOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MarketplacePublicationSupportedOperatingSystems {
}

export function marketplacePublicationSupportedOperatingSystemsToTerraform(struct?: MarketplacePublicationSupportedOperatingSystems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function marketplacePublicationSupportedOperatingSystemsToHclTerraform(struct?: MarketplacePublicationSupportedOperatingSystems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MarketplacePublicationSupportedOperatingSystemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MarketplacePublicationSupportedOperatingSystems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MarketplacePublicationSupportedOperatingSystems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class MarketplacePublicationSupportedOperatingSystemsList extends cdktf.ComplexList {

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
  public get(index: number): MarketplacePublicationSupportedOperatingSystemsOutputReference {
    return new MarketplacePublicationSupportedOperatingSystemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MarketplacePublicationPackageDetailsEula {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/marketplace_publication#eula_type MarketplacePublication#eula_type}
  */
  readonly eulaType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/marketplace_publication#license_text MarketplacePublication#license_text}
  */
  readonly licenseText?: string;
}

export function marketplacePublicationPackageDetailsEulaToTerraform(struct?: MarketplacePublicationPackageDetailsEula | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eula_type: cdktf.stringToTerraform(struct!.eulaType),
    license_text: cdktf.stringToTerraform(struct!.licenseText),
  }
}


export function marketplacePublicationPackageDetailsEulaToHclTerraform(struct?: MarketplacePublicationPackageDetailsEula | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eula_type: {
      value: cdktf.stringToHclTerraform(struct!.eulaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_text: {
      value: cdktf.stringToHclTerraform(struct!.licenseText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MarketplacePublicationPackageDetailsEulaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MarketplacePublicationPackageDetailsEula | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eulaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eulaType = this._eulaType;
    }
    if (this._licenseText !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseText = this._licenseText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MarketplacePublicationPackageDetailsEula | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eulaType = undefined;
      this._licenseText = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eulaType = value.eulaType;
      this._licenseText = value.licenseText;
    }
  }

  // eula_type - computed: false, optional: false, required: true
  private _eulaType?: string; 
  public get eulaType() {
    return this.getStringAttribute('eula_type');
  }
  public set eulaType(value: string) {
    this._eulaType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eulaTypeInput() {
    return this._eulaType;
  }

  // license_text - computed: true, optional: true, required: false
  private _licenseText?: string; 
  public get licenseText() {
    return this.getStringAttribute('license_text');
  }
  public set licenseText(value: string) {
    this._licenseText = value;
  }
  public resetLicenseText() {
    this._licenseText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTextInput() {
    return this._licenseText;
  }
}

export class MarketplacePublicationPackageDetailsEulaList extends cdktf.ComplexList {
  public internalValue? : MarketplacePublicationPackageDetailsEula[] | cdktf.IResolvable

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
  public get(index: number): MarketplacePublicationPackageDetailsEulaOutputReference {
    return new MarketplacePublicationPackageDetailsEulaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MarketplacePublicationPackageDetailsOperatingSystem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/marketplace_publication#name MarketplacePublication#name}
  */
  readonly name?: string;
}

export function marketplacePublicationPackageDetailsOperatingSystemToTerraform(struct?: MarketplacePublicationPackageDetailsOperatingSystemOutputReference | MarketplacePublicationPackageDetailsOperatingSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function marketplacePublicationPackageDetailsOperatingSystemToHclTerraform(struct?: MarketplacePublicationPackageDetailsOperatingSystemOutputReference | MarketplacePublicationPackageDetailsOperatingSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MarketplacePublicationPackageDetailsOperatingSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MarketplacePublicationPackageDetailsOperatingSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MarketplacePublicationPackageDetailsOperatingSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface MarketplacePublicationPackageDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/marketplace_publication#image_id MarketplacePublication#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/marketplace_publication#package_type MarketplacePublication#package_type}
  */
  readonly packageType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/marketplace_publication#package_version MarketplacePublication#package_version}
  */
  readonly packageVersion: string;
  /**
  * eula block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/marketplace_publication#eula MarketplacePublication#eula}
  */
  readonly eula: MarketplacePublicationPackageDetailsEula[] | cdktf.IResolvable;
  /**
  * operating_system block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/marketplace_publication#operating_system MarketplacePublication#operating_system}
  */
  readonly operatingSystem: MarketplacePublicationPackageDetailsOperatingSystem;
}

export function marketplacePublicationPackageDetailsToTerraform(struct?: MarketplacePublicationPackageDetailsOutputReference | MarketplacePublicationPackageDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_id: cdktf.stringToTerraform(struct!.imageId),
    package_type: cdktf.stringToTerraform(struct!.packageType),
    package_version: cdktf.stringToTerraform(struct!.packageVersion),
    eula: cdktf.listMapper(marketplacePublicationPackageDetailsEulaToTerraform, true)(struct!.eula),
    operating_system: marketplacePublicationPackageDetailsOperatingSystemToTerraform(struct!.operatingSystem),
  }
}


export function marketplacePublicationPackageDetailsToHclTerraform(struct?: MarketplacePublicationPackageDetailsOutputReference | MarketplacePublicationPackageDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_type: {
      value: cdktf.stringToHclTerraform(struct!.packageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_version: {
      value: cdktf.stringToHclTerraform(struct!.packageVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eula: {
      value: cdktf.listMapperHcl(marketplacePublicationPackageDetailsEulaToHclTerraform, true)(struct!.eula),
      isBlock: true,
      type: "set",
      storageClassType: "MarketplacePublicationPackageDetailsEulaList",
    },
    operating_system: {
      value: marketplacePublicationPackageDetailsOperatingSystemToHclTerraform(struct!.operatingSystem),
      isBlock: true,
      type: "list",
      storageClassType: "MarketplacePublicationPackageDetailsOperatingSystemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MarketplacePublicationPackageDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MarketplacePublicationPackageDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._packageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageType = this._packageType;
    }
    if (this._packageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageVersion = this._packageVersion;
    }
    if (this._eula?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eula = this._eula?.internalValue;
    }
    if (this._operatingSystem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystem = this._operatingSystem?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MarketplacePublicationPackageDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imageId = undefined;
      this._packageType = undefined;
      this._packageVersion = undefined;
      this._eula.internalValue = undefined;
      this._operatingSystem.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imageId = value.imageId;
      this._packageType = value.packageType;
      this._packageVersion = value.packageVersion;
      this._eula.internalValue = value.eula;
      this._operatingSystem.internalValue = value.operatingSystem;
    }
  }

  // image_id - computed: true, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // package_type - computed: false, optional: false, required: true
  private _packageType?: string; 
  public get packageType() {
    return this.getStringAttribute('package_type');
  }
  public set packageType(value: string) {
    this._packageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypeInput() {
    return this._packageType;
  }

  // package_version - computed: false, optional: false, required: true
  private _packageVersion?: string; 
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }
  public set packageVersion(value: string) {
    this._packageVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageVersionInput() {
    return this._packageVersion;
  }

  // eula - computed: false, optional: false, required: true
  private _eula = new MarketplacePublicationPackageDetailsEulaList(this, "eula", true);
  public get eula() {
    return this._eula;
  }
  public putEula(value: MarketplacePublicationPackageDetailsEula[] | cdktf.IResolvable) {
    this._eula.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eulaInput() {
    return this._eula.internalValue;
  }

  // operating_system - computed: false, optional: false, required: true
  private _operatingSystem = new MarketplacePublicationPackageDetailsOperatingSystemOutputReference(this, "operating_system");
  public get operatingSystem() {
    return this._operatingSystem;
  }
  public putOperatingSystem(value: MarketplacePublicationPackageDetailsOperatingSystem) {
    this._operatingSystem.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem.internalValue;
  }
}
export interface MarketplacePublicationSupportContacts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/marketplace_publication#email MarketplacePublication#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/marketplace_publication#name MarketplacePublication#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/marketplace_publication#phone MarketplacePublication#phone}
  */
  readonly phone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/marketplace_publication#subject MarketplacePublication#subject}
  */
  readonly subject?: string;
}

export function marketplacePublicationSupportContactsToTerraform(struct?: MarketplacePublicationSupportContacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    name: cdktf.stringToTerraform(struct!.name),
    phone: cdktf.stringToTerraform(struct!.phone),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function marketplacePublicationSupportContactsToHclTerraform(struct?: MarketplacePublicationSupportContacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone: {
      value: cdktf.stringToHclTerraform(struct!.phone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MarketplacePublicationSupportContactsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MarketplacePublicationSupportContacts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._phone !== undefined) {
      hasAnyValues = true;
      internalValueResult.phone = this._phone;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MarketplacePublicationSupportContacts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._name = undefined;
      this._phone = undefined;
      this._subject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._name = value.name;
      this._phone = value.phone;
      this._subject = value.subject;
    }
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // phone - computed: true, optional: true, required: false
  private _phone?: string; 
  public get phone() {
    return this.getStringAttribute('phone');
  }
  public set phone(value: string) {
    this._phone = value;
  }
  public resetPhone() {
    this._phone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone;
  }

  // subject - computed: true, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}

export class MarketplacePublicationSupportContactsList extends cdktf.ComplexList {
  public internalValue? : MarketplacePublicationSupportContacts[] | cdktf.IResolvable

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
  public get(index: number): MarketplacePublicationSupportContactsOutputReference {
    return new MarketplacePublicationSupportContactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MarketplacePublicationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/marketplace_publication#create MarketplacePublication#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/marketplace_publication#delete MarketplacePublication#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/marketplace_publication#update MarketplacePublication#update}
  */
  readonly update?: string;
}

export function marketplacePublicationTimeoutsToTerraform(struct?: MarketplacePublicationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function marketplacePublicationTimeoutsToHclTerraform(struct?: MarketplacePublicationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MarketplacePublicationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MarketplacePublicationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MarketplacePublicationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/marketplace_publication oci_marketplace_publication}
*/
export class MarketplacePublication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_marketplace_publication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MarketplacePublication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MarketplacePublication to import
  * @param importFromId The id of the existing MarketplacePublication that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/marketplace_publication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MarketplacePublication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_marketplace_publication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/marketplace_publication oci_marketplace_publication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MarketplacePublicationConfig
  */
  public constructor(scope: Construct, id: string, config: MarketplacePublicationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_marketplace_publication',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isAgreementAcknowledged = config.isAgreementAcknowledged;
    this._listingType = config.listingType;
    this._longDescription = config.longDescription;
    this._name = config.name;
    this._shortDescription = config.shortDescription;
    this._packageDetails.internalValue = config.packageDetails;
    this._supportContacts.internalValue = config.supportContacts;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // icon - computed: true, optional: false, required: false
  private _icon = new MarketplacePublicationIconList(this, "icon", false);
  public get icon() {
    return this._icon;
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

  // is_agreement_acknowledged - computed: false, optional: false, required: true
  private _isAgreementAcknowledged?: boolean | cdktf.IResolvable; 
  public get isAgreementAcknowledged() {
    return this.getBooleanAttribute('is_agreement_acknowledged');
  }
  public set isAgreementAcknowledged(value: boolean | cdktf.IResolvable) {
    this._isAgreementAcknowledged = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isAgreementAcknowledgedInput() {
    return this._isAgreementAcknowledged;
  }

  // listing_type - computed: false, optional: false, required: true
  private _listingType?: string; 
  public get listingType() {
    return this.getStringAttribute('listing_type');
  }
  public set listingType(value: string) {
    this._listingType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listingTypeInput() {
    return this._listingType;
  }

  // long_description - computed: true, optional: true, required: false
  private _longDescription?: string; 
  public get longDescription() {
    return this.getStringAttribute('long_description');
  }
  public set longDescription(value: string) {
    this._longDescription = value;
  }
  public resetLongDescription() {
    this._longDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longDescriptionInput() {
    return this._longDescription;
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

  // package_type - computed: true, optional: false, required: false
  public get packageType() {
    return this.getStringAttribute('package_type');
  }

  // short_description - computed: false, optional: false, required: true
  private _shortDescription?: string; 
  public get shortDescription() {
    return this.getStringAttribute('short_description');
  }
  public set shortDescription(value: string) {
    this._shortDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shortDescriptionInput() {
    return this._shortDescription;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // supported_operating_systems - computed: true, optional: false, required: false
  private _supportedOperatingSystems = new MarketplacePublicationSupportedOperatingSystemsList(this, "supported_operating_systems", false);
  public get supportedOperatingSystems() {
    return this._supportedOperatingSystems;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // package_details - computed: false, optional: false, required: true
  private _packageDetails = new MarketplacePublicationPackageDetailsOutputReference(this, "package_details");
  public get packageDetails() {
    return this._packageDetails;
  }
  public putPackageDetails(value: MarketplacePublicationPackageDetails) {
    this._packageDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageDetailsInput() {
    return this._packageDetails.internalValue;
  }

  // support_contacts - computed: false, optional: false, required: true
  private _supportContacts = new MarketplacePublicationSupportContactsList(this, "support_contacts", true);
  public get supportContacts() {
    return this._supportContacts;
  }
  public putSupportContacts(value: MarketplacePublicationSupportContacts[] | cdktf.IResolvable) {
    this._supportContacts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supportContactsInput() {
    return this._supportContacts.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MarketplacePublicationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MarketplacePublicationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_agreement_acknowledged: cdktf.booleanToTerraform(this._isAgreementAcknowledged),
      listing_type: cdktf.stringToTerraform(this._listingType),
      long_description: cdktf.stringToTerraform(this._longDescription),
      name: cdktf.stringToTerraform(this._name),
      short_description: cdktf.stringToTerraform(this._shortDescription),
      package_details: marketplacePublicationPackageDetailsToTerraform(this._packageDetails.internalValue),
      support_contacts: cdktf.listMapper(marketplacePublicationSupportContactsToTerraform, true)(this._supportContacts.internalValue),
      timeouts: marketplacePublicationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_agreement_acknowledged: {
        value: cdktf.booleanToHclTerraform(this._isAgreementAcknowledged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      listing_type: {
        value: cdktf.stringToHclTerraform(this._listingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      long_description: {
        value: cdktf.stringToHclTerraform(this._longDescription),
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
      short_description: {
        value: cdktf.stringToHclTerraform(this._shortDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_details: {
        value: marketplacePublicationPackageDetailsToHclTerraform(this._packageDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MarketplacePublicationPackageDetailsList",
      },
      support_contacts: {
        value: cdktf.listMapperHcl(marketplacePublicationSupportContactsToHclTerraform, true)(this._supportContacts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MarketplacePublicationSupportContactsList",
      },
      timeouts: {
        value: marketplacePublicationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MarketplacePublicationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
