// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HardwaresecuritymodulegroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#id Hardwaresecuritymodulegroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#name Hardwaresecuritymodulegroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#tenant_ref Hardwaresecuritymodulegroup#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#uuid Hardwaresecuritymodulegroup#uuid}
  */
  readonly uuid?: string;
  /**
  * ca_certs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#ca_certs Hardwaresecuritymodulegroup#ca_certs}
  */
  readonly caCerts?: HardwaresecuritymodulegroupCaCerts[] | cdktf.IResolvable;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#configpb_attributes Hardwaresecuritymodulegroup#configpb_attributes}
  */
  readonly configpbAttributes?: HardwaresecuritymodulegroupConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * hsm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#hsm Hardwaresecuritymodulegroup#hsm}
  */
  readonly hsm: HardwaresecuritymodulegroupHsm[] | cdktf.IResolvable;
  /**
  * markers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#markers Hardwaresecuritymodulegroup#markers}
  */
  readonly markers?: HardwaresecuritymodulegroupMarkers[] | cdktf.IResolvable;
}
export interface HardwaresecuritymodulegroupCaCertsIssuer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#common_name Hardwaresecuritymodulegroup#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#country Hardwaresecuritymodulegroup#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#distinguished_name Hardwaresecuritymodulegroup#distinguished_name}
  */
  readonly distinguishedName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#email_address Hardwaresecuritymodulegroup#email_address}
  */
  readonly emailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#locality Hardwaresecuritymodulegroup#locality}
  */
  readonly locality?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#organization Hardwaresecuritymodulegroup#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#organization_unit Hardwaresecuritymodulegroup#organization_unit}
  */
  readonly organizationUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#state Hardwaresecuritymodulegroup#state}
  */
  readonly state?: string;
}

export function hardwaresecuritymodulegroupCaCertsIssuerToTerraform(struct?: HardwaresecuritymodulegroupCaCertsIssuer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
    country: cdktf.stringToTerraform(struct!.country),
    distinguished_name: cdktf.stringToTerraform(struct!.distinguishedName),
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    locality: cdktf.stringToTerraform(struct!.locality),
    organization: cdktf.stringToTerraform(struct!.organization),
    organization_unit: cdktf.stringToTerraform(struct!.organizationUnit),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function hardwaresecuritymodulegroupCaCertsIssuerToHclTerraform(struct?: HardwaresecuritymodulegroupCaCertsIssuer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
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
    distinguished_name: {
      value: cdktf.stringToHclTerraform(struct!.distinguishedName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_address: {
      value: cdktf.stringToHclTerraform(struct!.emailAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locality: {
      value: cdktf.stringToHclTerraform(struct!.locality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_unit: {
      value: cdktf.stringToHclTerraform(struct!.organizationUnit),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HardwaresecuritymodulegroupCaCertsIssuerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HardwaresecuritymodulegroupCaCertsIssuer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._distinguishedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.distinguishedName = this._distinguishedName;
    }
    if (this._emailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress = this._emailAddress;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._organizationUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationUnit = this._organizationUnit;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HardwaresecuritymodulegroupCaCertsIssuer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonName = undefined;
      this._country = undefined;
      this._distinguishedName = undefined;
      this._emailAddress = undefined;
      this._locality = undefined;
      this._organization = undefined;
      this._organizationUnit = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonName = value.commonName;
      this._country = value.country;
      this._distinguishedName = value.distinguishedName;
      this._emailAddress = value.emailAddress;
      this._locality = value.locality;
      this._organization = value.organization;
      this._organizationUnit = value.organizationUnit;
      this._state = value.state;
    }
  }

  // common_name - computed: true, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // country - computed: true, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // distinguished_name - computed: true, optional: true, required: false
  private _distinguishedName?: string; 
  public get distinguishedName() {
    return this.getStringAttribute('distinguished_name');
  }
  public set distinguishedName(value: string) {
    this._distinguishedName = value;
  }
  public resetDistinguishedName() {
    this._distinguishedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinguishedNameInput() {
    return this._distinguishedName;
  }

  // email_address - computed: true, optional: true, required: false
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // locality - computed: true, optional: true, required: false
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // organization - computed: true, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // organization_unit - computed: true, optional: true, required: false
  private _organizationUnit?: string; 
  public get organizationUnit() {
    return this.getStringAttribute('organization_unit');
  }
  public set organizationUnit(value: string) {
    this._organizationUnit = value;
  }
  public resetOrganizationUnit() {
    this._organizationUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationUnitInput() {
    return this._organizationUnit;
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
}

export class HardwaresecuritymodulegroupCaCertsIssuerList extends cdktf.ComplexList {
  public internalValue? : HardwaresecuritymodulegroupCaCertsIssuer[] | cdktf.IResolvable

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
  public get(index: number): HardwaresecuritymodulegroupCaCertsIssuerOutputReference {
    return new HardwaresecuritymodulegroupCaCertsIssuerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HardwaresecuritymodulegroupCaCertsKeyParamsEcParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#curve Hardwaresecuritymodulegroup#curve}
  */
  readonly curve?: string;
}

export function hardwaresecuritymodulegroupCaCertsKeyParamsEcParamsToTerraform(struct?: HardwaresecuritymodulegroupCaCertsKeyParamsEcParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    curve: cdktf.stringToTerraform(struct!.curve),
  }
}


export function hardwaresecuritymodulegroupCaCertsKeyParamsEcParamsToHclTerraform(struct?: HardwaresecuritymodulegroupCaCertsKeyParamsEcParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    curve: {
      value: cdktf.stringToHclTerraform(struct!.curve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HardwaresecuritymodulegroupCaCertsKeyParamsEcParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HardwaresecuritymodulegroupCaCertsKeyParamsEcParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._curve !== undefined) {
      hasAnyValues = true;
      internalValueResult.curve = this._curve;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HardwaresecuritymodulegroupCaCertsKeyParamsEcParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._curve = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._curve = value.curve;
    }
  }

  // curve - computed: false, optional: true, required: false
  private _curve?: string; 
  public get curve() {
    return this.getStringAttribute('curve');
  }
  public set curve(value: string) {
    this._curve = value;
  }
  public resetCurve() {
    this._curve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curveInput() {
    return this._curve;
  }
}

export class HardwaresecuritymodulegroupCaCertsKeyParamsEcParamsList extends cdktf.ComplexList {
  public internalValue? : HardwaresecuritymodulegroupCaCertsKeyParamsEcParams[] | cdktf.IResolvable

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
  public get(index: number): HardwaresecuritymodulegroupCaCertsKeyParamsEcParamsOutputReference {
    return new HardwaresecuritymodulegroupCaCertsKeyParamsEcParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HardwaresecuritymodulegroupCaCertsKeyParamsMldsaParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#algorithm Hardwaresecuritymodulegroup#algorithm}
  */
  readonly algorithm?: string;
}

export function hardwaresecuritymodulegroupCaCertsKeyParamsMldsaParamsToTerraform(struct?: HardwaresecuritymodulegroupCaCertsKeyParamsMldsaParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
  }
}


export function hardwaresecuritymodulegroupCaCertsKeyParamsMldsaParamsToHclTerraform(struct?: HardwaresecuritymodulegroupCaCertsKeyParamsMldsaParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HardwaresecuritymodulegroupCaCertsKeyParamsMldsaParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HardwaresecuritymodulegroupCaCertsKeyParamsMldsaParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HardwaresecuritymodulegroupCaCertsKeyParamsMldsaParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }
}

export class HardwaresecuritymodulegroupCaCertsKeyParamsMldsaParamsList extends cdktf.ComplexList {
  public internalValue? : HardwaresecuritymodulegroupCaCertsKeyParamsMldsaParams[] | cdktf.IResolvable

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
  public get(index: number): HardwaresecuritymodulegroupCaCertsKeyParamsMldsaParamsOutputReference {
    return new HardwaresecuritymodulegroupCaCertsKeyParamsMldsaParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HardwaresecuritymodulegroupCaCertsKeyParamsRsaParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#exponent Hardwaresecuritymodulegroup#exponent}
  */
  readonly exponent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#key_size Hardwaresecuritymodulegroup#key_size}
  */
  readonly keySize?: string;
}

export function hardwaresecuritymodulegroupCaCertsKeyParamsRsaParamsToTerraform(struct?: HardwaresecuritymodulegroupCaCertsKeyParamsRsaParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exponent: cdktf.stringToTerraform(struct!.exponent),
    key_size: cdktf.stringToTerraform(struct!.keySize),
  }
}


export function hardwaresecuritymodulegroupCaCertsKeyParamsRsaParamsToHclTerraform(struct?: HardwaresecuritymodulegroupCaCertsKeyParamsRsaParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exponent: {
      value: cdktf.stringToHclTerraform(struct!.exponent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_size: {
      value: cdktf.stringToHclTerraform(struct!.keySize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HardwaresecuritymodulegroupCaCertsKeyParamsRsaParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HardwaresecuritymodulegroupCaCertsKeyParamsRsaParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exponent !== undefined) {
      hasAnyValues = true;
      internalValueResult.exponent = this._exponent;
    }
    if (this._keySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySize = this._keySize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HardwaresecuritymodulegroupCaCertsKeyParamsRsaParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exponent = undefined;
      this._keySize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exponent = value.exponent;
      this._keySize = value.keySize;
    }
  }

  // exponent - computed: false, optional: true, required: false
  private _exponent?: string; 
  public get exponent() {
    return this.getStringAttribute('exponent');
  }
  public set exponent(value: string) {
    this._exponent = value;
  }
  public resetExponent() {
    this._exponent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exponentInput() {
    return this._exponent;
  }

  // key_size - computed: false, optional: true, required: false
  private _keySize?: string; 
  public get keySize() {
    return this.getStringAttribute('key_size');
  }
  public set keySize(value: string) {
    this._keySize = value;
  }
  public resetKeySize() {
    this._keySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySizeInput() {
    return this._keySize;
  }
}

export class HardwaresecuritymodulegroupCaCertsKeyParamsRsaParamsList extends cdktf.ComplexList {
  public internalValue? : HardwaresecuritymodulegroupCaCertsKeyParamsRsaParams[] | cdktf.IResolvable

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
  public get(index: number): HardwaresecuritymodulegroupCaCertsKeyParamsRsaParamsOutputReference {
    return new HardwaresecuritymodulegroupCaCertsKeyParamsRsaParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HardwaresecuritymodulegroupCaCertsKeyParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#algorithm Hardwaresecuritymodulegroup#algorithm}
  */
  readonly algorithm: string;
  /**
  * ec_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#ec_params Hardwaresecuritymodulegroup#ec_params}
  */
  readonly ecParams?: HardwaresecuritymodulegroupCaCertsKeyParamsEcParams[] | cdktf.IResolvable;
  /**
  * mldsa_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#mldsa_params Hardwaresecuritymodulegroup#mldsa_params}
  */
  readonly mldsaParams?: HardwaresecuritymodulegroupCaCertsKeyParamsMldsaParams[] | cdktf.IResolvable;
  /**
  * rsa_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#rsa_params Hardwaresecuritymodulegroup#rsa_params}
  */
  readonly rsaParams?: HardwaresecuritymodulegroupCaCertsKeyParamsRsaParams[] | cdktf.IResolvable;
}

export function hardwaresecuritymodulegroupCaCertsKeyParamsToTerraform(struct?: HardwaresecuritymodulegroupCaCertsKeyParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    ec_params: cdktf.listMapper(hardwaresecuritymodulegroupCaCertsKeyParamsEcParamsToTerraform, true)(struct!.ecParams),
    mldsa_params: cdktf.listMapper(hardwaresecuritymodulegroupCaCertsKeyParamsMldsaParamsToTerraform, true)(struct!.mldsaParams),
    rsa_params: cdktf.listMapper(hardwaresecuritymodulegroupCaCertsKeyParamsRsaParamsToTerraform, true)(struct!.rsaParams),
  }
}


export function hardwaresecuritymodulegroupCaCertsKeyParamsToHclTerraform(struct?: HardwaresecuritymodulegroupCaCertsKeyParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ec_params: {
      value: cdktf.listMapperHcl(hardwaresecuritymodulegroupCaCertsKeyParamsEcParamsToHclTerraform, true)(struct!.ecParams),
      isBlock: true,
      type: "set",
      storageClassType: "HardwaresecuritymodulegroupCaCertsKeyParamsEcParamsList",
    },
    mldsa_params: {
      value: cdktf.listMapperHcl(hardwaresecuritymodulegroupCaCertsKeyParamsMldsaParamsToHclTerraform, true)(struct!.mldsaParams),
      isBlock: true,
      type: "set",
      storageClassType: "HardwaresecuritymodulegroupCaCertsKeyParamsMldsaParamsList",
    },
    rsa_params: {
      value: cdktf.listMapperHcl(hardwaresecuritymodulegroupCaCertsKeyParamsRsaParamsToHclTerraform, true)(struct!.rsaParams),
      isBlock: true,
      type: "set",
      storageClassType: "HardwaresecuritymodulegroupCaCertsKeyParamsRsaParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HardwaresecuritymodulegroupCaCertsKeyParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HardwaresecuritymodulegroupCaCertsKeyParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._ecParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecParams = this._ecParams?.internalValue;
    }
    if (this._mldsaParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mldsaParams = this._mldsaParams?.internalValue;
    }
    if (this._rsaParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaParams = this._rsaParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HardwaresecuritymodulegroupCaCertsKeyParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._ecParams.internalValue = undefined;
      this._mldsaParams.internalValue = undefined;
      this._rsaParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._ecParams.internalValue = value.ecParams;
      this._mldsaParams.internalValue = value.mldsaParams;
      this._rsaParams.internalValue = value.rsaParams;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // ec_params - computed: false, optional: true, required: false
  private _ecParams = new HardwaresecuritymodulegroupCaCertsKeyParamsEcParamsList(this, "ec_params", true);
  public get ecParams() {
    return this._ecParams;
  }
  public putEcParams(value: HardwaresecuritymodulegroupCaCertsKeyParamsEcParams[] | cdktf.IResolvable) {
    this._ecParams.internalValue = value;
  }
  public resetEcParams() {
    this._ecParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecParamsInput() {
    return this._ecParams.internalValue;
  }

  // mldsa_params - computed: false, optional: true, required: false
  private _mldsaParams = new HardwaresecuritymodulegroupCaCertsKeyParamsMldsaParamsList(this, "mldsa_params", true);
  public get mldsaParams() {
    return this._mldsaParams;
  }
  public putMldsaParams(value: HardwaresecuritymodulegroupCaCertsKeyParamsMldsaParams[] | cdktf.IResolvable) {
    this._mldsaParams.internalValue = value;
  }
  public resetMldsaParams() {
    this._mldsaParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mldsaParamsInput() {
    return this._mldsaParams.internalValue;
  }

  // rsa_params - computed: false, optional: true, required: false
  private _rsaParams = new HardwaresecuritymodulegroupCaCertsKeyParamsRsaParamsList(this, "rsa_params", true);
  public get rsaParams() {
    return this._rsaParams;
  }
  public putRsaParams(value: HardwaresecuritymodulegroupCaCertsKeyParamsRsaParams[] | cdktf.IResolvable) {
    this._rsaParams.internalValue = value;
  }
  public resetRsaParams() {
    this._rsaParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaParamsInput() {
    return this._rsaParams.internalValue;
  }
}

export class HardwaresecuritymodulegroupCaCertsKeyParamsList extends cdktf.ComplexList {
  public internalValue? : HardwaresecuritymodulegroupCaCertsKeyParams[] | cdktf.IResolvable

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
  public get(index: number): HardwaresecuritymodulegroupCaCertsKeyParamsOutputReference {
    return new HardwaresecuritymodulegroupCaCertsKeyParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HardwaresecuritymodulegroupCaCertsSubject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#common_name Hardwaresecuritymodulegroup#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#country Hardwaresecuritymodulegroup#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#distinguished_name Hardwaresecuritymodulegroup#distinguished_name}
  */
  readonly distinguishedName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#email_address Hardwaresecuritymodulegroup#email_address}
  */
  readonly emailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#locality Hardwaresecuritymodulegroup#locality}
  */
  readonly locality?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#organization Hardwaresecuritymodulegroup#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#organization_unit Hardwaresecuritymodulegroup#organization_unit}
  */
  readonly organizationUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#state Hardwaresecuritymodulegroup#state}
  */
  readonly state?: string;
}

export function hardwaresecuritymodulegroupCaCertsSubjectToTerraform(struct?: HardwaresecuritymodulegroupCaCertsSubject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
    country: cdktf.stringToTerraform(struct!.country),
    distinguished_name: cdktf.stringToTerraform(struct!.distinguishedName),
    email_address: cdktf.stringToTerraform(struct!.emailAddress),
    locality: cdktf.stringToTerraform(struct!.locality),
    organization: cdktf.stringToTerraform(struct!.organization),
    organization_unit: cdktf.stringToTerraform(struct!.organizationUnit),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function hardwaresecuritymodulegroupCaCertsSubjectToHclTerraform(struct?: HardwaresecuritymodulegroupCaCertsSubject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
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
    distinguished_name: {
      value: cdktf.stringToHclTerraform(struct!.distinguishedName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_address: {
      value: cdktf.stringToHclTerraform(struct!.emailAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locality: {
      value: cdktf.stringToHclTerraform(struct!.locality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_unit: {
      value: cdktf.stringToHclTerraform(struct!.organizationUnit),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HardwaresecuritymodulegroupCaCertsSubjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HardwaresecuritymodulegroupCaCertsSubject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._distinguishedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.distinguishedName = this._distinguishedName;
    }
    if (this._emailAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddress = this._emailAddress;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._organizationUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationUnit = this._organizationUnit;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HardwaresecuritymodulegroupCaCertsSubject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonName = undefined;
      this._country = undefined;
      this._distinguishedName = undefined;
      this._emailAddress = undefined;
      this._locality = undefined;
      this._organization = undefined;
      this._organizationUnit = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonName = value.commonName;
      this._country = value.country;
      this._distinguishedName = value.distinguishedName;
      this._emailAddress = value.emailAddress;
      this._locality = value.locality;
      this._organization = value.organization;
      this._organizationUnit = value.organizationUnit;
      this._state = value.state;
    }
  }

  // common_name - computed: true, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // country - computed: true, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // distinguished_name - computed: true, optional: true, required: false
  private _distinguishedName?: string; 
  public get distinguishedName() {
    return this.getStringAttribute('distinguished_name');
  }
  public set distinguishedName(value: string) {
    this._distinguishedName = value;
  }
  public resetDistinguishedName() {
    this._distinguishedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinguishedNameInput() {
    return this._distinguishedName;
  }

  // email_address - computed: true, optional: true, required: false
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // locality - computed: true, optional: true, required: false
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // organization - computed: true, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // organization_unit - computed: true, optional: true, required: false
  private _organizationUnit?: string; 
  public get organizationUnit() {
    return this.getStringAttribute('organization_unit');
  }
  public set organizationUnit(value: string) {
    this._organizationUnit = value;
  }
  public resetOrganizationUnit() {
    this._organizationUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationUnitInput() {
    return this._organizationUnit;
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
}

export class HardwaresecuritymodulegroupCaCertsSubjectList extends cdktf.ComplexList {
  public internalValue? : HardwaresecuritymodulegroupCaCertsSubject[] | cdktf.IResolvable

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
  public get(index: number): HardwaresecuritymodulegroupCaCertsSubjectOutputReference {
    return new HardwaresecuritymodulegroupCaCertsSubjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HardwaresecuritymodulegroupCaCerts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#certificate Hardwaresecuritymodulegroup#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#certificate_signing_request Hardwaresecuritymodulegroup#certificate_signing_request}
  */
  readonly certificateSigningRequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#chain_verified Hardwaresecuritymodulegroup#chain_verified}
  */
  readonly chainVerified?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#days_until_expire Hardwaresecuritymodulegroup#days_until_expire}
  */
  readonly daysUntilExpire?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#expiry_status Hardwaresecuritymodulegroup#expiry_status}
  */
  readonly expiryStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#fingerprint Hardwaresecuritymodulegroup#fingerprint}
  */
  readonly fingerprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#not_after Hardwaresecuritymodulegroup#not_after}
  */
  readonly notAfter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#not_before Hardwaresecuritymodulegroup#not_before}
  */
  readonly notBefore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#public_key Hardwaresecuritymodulegroup#public_key}
  */
  readonly publicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#self_signed Hardwaresecuritymodulegroup#self_signed}
  */
  readonly selfSigned?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#serial_number Hardwaresecuritymodulegroup#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#signature Hardwaresecuritymodulegroup#signature}
  */
  readonly signature?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#signature_algorithm Hardwaresecuritymodulegroup#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#subject_alt_names Hardwaresecuritymodulegroup#subject_alt_names}
  */
  readonly subjectAltNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#text Hardwaresecuritymodulegroup#text}
  */
  readonly text?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#version Hardwaresecuritymodulegroup#version}
  */
  readonly version?: string;
  /**
  * issuer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#issuer Hardwaresecuritymodulegroup#issuer}
  */
  readonly issuer?: HardwaresecuritymodulegroupCaCertsIssuer[] | cdktf.IResolvable;
  /**
  * key_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#key_params Hardwaresecuritymodulegroup#key_params}
  */
  readonly keyParams?: HardwaresecuritymodulegroupCaCertsKeyParams[] | cdktf.IResolvable;
  /**
  * subject block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#subject Hardwaresecuritymodulegroup#subject}
  */
  readonly subject?: HardwaresecuritymodulegroupCaCertsSubject[] | cdktf.IResolvable;
}

export function hardwaresecuritymodulegroupCaCertsToTerraform(struct?: HardwaresecuritymodulegroupCaCerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    certificate_signing_request: cdktf.stringToTerraform(struct!.certificateSigningRequest),
    chain_verified: cdktf.stringToTerraform(struct!.chainVerified),
    days_until_expire: cdktf.stringToTerraform(struct!.daysUntilExpire),
    expiry_status: cdktf.stringToTerraform(struct!.expiryStatus),
    fingerprint: cdktf.stringToTerraform(struct!.fingerprint),
    not_after: cdktf.stringToTerraform(struct!.notAfter),
    not_before: cdktf.stringToTerraform(struct!.notBefore),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    self_signed: cdktf.stringToTerraform(struct!.selfSigned),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    signature: cdktf.stringToTerraform(struct!.signature),
    signature_algorithm: cdktf.stringToTerraform(struct!.signatureAlgorithm),
    subject_alt_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjectAltNames),
    text: cdktf.stringToTerraform(struct!.text),
    version: cdktf.stringToTerraform(struct!.version),
    issuer: cdktf.listMapper(hardwaresecuritymodulegroupCaCertsIssuerToTerraform, true)(struct!.issuer),
    key_params: cdktf.listMapper(hardwaresecuritymodulegroupCaCertsKeyParamsToTerraform, true)(struct!.keyParams),
    subject: cdktf.listMapper(hardwaresecuritymodulegroupCaCertsSubjectToTerraform, true)(struct!.subject),
  }
}


export function hardwaresecuritymodulegroupCaCertsToHclTerraform(struct?: HardwaresecuritymodulegroupCaCerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_signing_request: {
      value: cdktf.stringToHclTerraform(struct!.certificateSigningRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chain_verified: {
      value: cdktf.stringToHclTerraform(struct!.chainVerified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    days_until_expire: {
      value: cdktf.stringToHclTerraform(struct!.daysUntilExpire),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiry_status: {
      value: cdktf.stringToHclTerraform(struct!.expiryStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fingerprint: {
      value: cdktf.stringToHclTerraform(struct!.fingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_after: {
      value: cdktf.stringToHclTerraform(struct!.notAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_before: {
      value: cdktf.stringToHclTerraform(struct!.notBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self_signed: {
      value: cdktf.stringToHclTerraform(struct!.selfSigned),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature: {
      value: cdktf.stringToHclTerraform(struct!.signature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.signatureAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_alt_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subjectAltNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktf.listMapperHcl(hardwaresecuritymodulegroupCaCertsIssuerToHclTerraform, true)(struct!.issuer),
      isBlock: true,
      type: "set",
      storageClassType: "HardwaresecuritymodulegroupCaCertsIssuerList",
    },
    key_params: {
      value: cdktf.listMapperHcl(hardwaresecuritymodulegroupCaCertsKeyParamsToHclTerraform, true)(struct!.keyParams),
      isBlock: true,
      type: "set",
      storageClassType: "HardwaresecuritymodulegroupCaCertsKeyParamsList",
    },
    subject: {
      value: cdktf.listMapperHcl(hardwaresecuritymodulegroupCaCertsSubjectToHclTerraform, true)(struct!.subject),
      isBlock: true,
      type: "set",
      storageClassType: "HardwaresecuritymodulegroupCaCertsSubjectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HardwaresecuritymodulegroupCaCertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HardwaresecuritymodulegroupCaCerts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._certificateSigningRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateSigningRequest = this._certificateSigningRequest;
    }
    if (this._chainVerified !== undefined) {
      hasAnyValues = true;
      internalValueResult.chainVerified = this._chainVerified;
    }
    if (this._daysUntilExpire !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysUntilExpire = this._daysUntilExpire;
    }
    if (this._expiryStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiryStatus = this._expiryStatus;
    }
    if (this._fingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprint = this._fingerprint;
    }
    if (this._notAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.notAfter = this._notAfter;
    }
    if (this._notBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.notBefore = this._notBefore;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._selfSigned !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfSigned = this._selfSigned;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._signature !== undefined) {
      hasAnyValues = true;
      internalValueResult.signature = this._signature;
    }
    if (this._signatureAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureAlgorithm = this._signatureAlgorithm;
    }
    if (this._subjectAltNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAltNames = this._subjectAltNames;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._issuer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer?.internalValue;
    }
    if (this._keyParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyParams = this._keyParams?.internalValue;
    }
    if (this._subject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HardwaresecuritymodulegroupCaCerts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._certificateSigningRequest = undefined;
      this._chainVerified = undefined;
      this._daysUntilExpire = undefined;
      this._expiryStatus = undefined;
      this._fingerprint = undefined;
      this._notAfter = undefined;
      this._notBefore = undefined;
      this._publicKey = undefined;
      this._selfSigned = undefined;
      this._serialNumber = undefined;
      this._signature = undefined;
      this._signatureAlgorithm = undefined;
      this._subjectAltNames = undefined;
      this._text = undefined;
      this._version = undefined;
      this._issuer.internalValue = undefined;
      this._keyParams.internalValue = undefined;
      this._subject.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._certificateSigningRequest = value.certificateSigningRequest;
      this._chainVerified = value.chainVerified;
      this._daysUntilExpire = value.daysUntilExpire;
      this._expiryStatus = value.expiryStatus;
      this._fingerprint = value.fingerprint;
      this._notAfter = value.notAfter;
      this._notBefore = value.notBefore;
      this._publicKey = value.publicKey;
      this._selfSigned = value.selfSigned;
      this._serialNumber = value.serialNumber;
      this._signature = value.signature;
      this._signatureAlgorithm = value.signatureAlgorithm;
      this._subjectAltNames = value.subjectAltNames;
      this._text = value.text;
      this._version = value.version;
      this._issuer.internalValue = value.issuer;
      this._keyParams.internalValue = value.keyParams;
      this._subject.internalValue = value.subject;
    }
  }

  // certificate - computed: true, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // certificate_signing_request - computed: true, optional: true, required: false
  private _certificateSigningRequest?: string; 
  public get certificateSigningRequest() {
    return this.getStringAttribute('certificate_signing_request');
  }
  public set certificateSigningRequest(value: string) {
    this._certificateSigningRequest = value;
  }
  public resetCertificateSigningRequest() {
    this._certificateSigningRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSigningRequestInput() {
    return this._certificateSigningRequest;
  }

  // chain_verified - computed: true, optional: true, required: false
  private _chainVerified?: string; 
  public get chainVerified() {
    return this.getStringAttribute('chain_verified');
  }
  public set chainVerified(value: string) {
    this._chainVerified = value;
  }
  public resetChainVerified() {
    this._chainVerified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chainVerifiedInput() {
    return this._chainVerified;
  }

  // days_until_expire - computed: false, optional: true, required: false
  private _daysUntilExpire?: string; 
  public get daysUntilExpire() {
    return this.getStringAttribute('days_until_expire');
  }
  public set daysUntilExpire(value: string) {
    this._daysUntilExpire = value;
  }
  public resetDaysUntilExpire() {
    this._daysUntilExpire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysUntilExpireInput() {
    return this._daysUntilExpire;
  }

  // expiry_status - computed: false, optional: true, required: false
  private _expiryStatus?: string; 
  public get expiryStatus() {
    return this.getStringAttribute('expiry_status');
  }
  public set expiryStatus(value: string) {
    this._expiryStatus = value;
  }
  public resetExpiryStatus() {
    this._expiryStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryStatusInput() {
    return this._expiryStatus;
  }

  // fingerprint - computed: true, optional: true, required: false
  private _fingerprint?: string; 
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }
  public set fingerprint(value: string) {
    this._fingerprint = value;
  }
  public resetFingerprint() {
    this._fingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintInput() {
    return this._fingerprint;
  }

  // not_after - computed: true, optional: true, required: false
  private _notAfter?: string; 
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }
  public set notAfter(value: string) {
    this._notAfter = value;
  }
  public resetNotAfter() {
    this._notAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAfterInput() {
    return this._notAfter;
  }

  // not_before - computed: true, optional: true, required: false
  private _notBefore?: string; 
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }
  public set notBefore(value: string) {
    this._notBefore = value;
  }
  public resetNotBefore() {
    this._notBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notBeforeInput() {
    return this._notBefore;
  }

  // public_key - computed: true, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // self_signed - computed: true, optional: true, required: false
  private _selfSigned?: string; 
  public get selfSigned() {
    return this.getStringAttribute('self_signed');
  }
  public set selfSigned(value: string) {
    this._selfSigned = value;
  }
  public resetSelfSigned() {
    this._selfSigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfSignedInput() {
    return this._selfSigned;
  }

  // serial_number - computed: true, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // signature - computed: true, optional: true, required: false
  private _signature?: string; 
  public get signature() {
    return this.getStringAttribute('signature');
  }
  public set signature(value: string) {
    this._signature = value;
  }
  public resetSignature() {
    this._signature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureInput() {
    return this._signature;
  }

  // signature_algorithm - computed: true, optional: true, required: false
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  public resetSignatureAlgorithm() {
    this._signatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
  }

  // subject_alt_names - computed: false, optional: true, required: false
  private _subjectAltNames?: string[]; 
  public get subjectAltNames() {
    return this.getListAttribute('subject_alt_names');
  }
  public set subjectAltNames(value: string[]) {
    this._subjectAltNames = value;
  }
  public resetSubjectAltNames() {
    this._subjectAltNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAltNamesInput() {
    return this._subjectAltNames;
  }

  // text - computed: true, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer = new HardwaresecuritymodulegroupCaCertsIssuerList(this, "issuer", true);
  public get issuer() {
    return this._issuer;
  }
  public putIssuer(value: HardwaresecuritymodulegroupCaCertsIssuer[] | cdktf.IResolvable) {
    this._issuer.internalValue = value;
  }
  public resetIssuer() {
    this._issuer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer.internalValue;
  }

  // key_params - computed: false, optional: true, required: false
  private _keyParams = new HardwaresecuritymodulegroupCaCertsKeyParamsList(this, "key_params", true);
  public get keyParams() {
    return this._keyParams;
  }
  public putKeyParams(value: HardwaresecuritymodulegroupCaCertsKeyParams[] | cdktf.IResolvable) {
    this._keyParams.internalValue = value;
  }
  public resetKeyParams() {
    this._keyParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyParamsInput() {
    return this._keyParams.internalValue;
  }

  // subject - computed: false, optional: true, required: false
  private _subject = new HardwaresecuritymodulegroupCaCertsSubjectList(this, "subject", true);
  public get subject() {
    return this._subject;
  }
  public putSubject(value: HardwaresecuritymodulegroupCaCertsSubject[] | cdktf.IResolvable) {
    this._subject.internalValue = value;
  }
  public resetSubject() {
    this._subject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject.internalValue;
  }
}

export class HardwaresecuritymodulegroupCaCertsList extends cdktf.ComplexList {
  public internalValue? : HardwaresecuritymodulegroupCaCerts[] | cdktf.IResolvable

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
  public get(index: number): HardwaresecuritymodulegroupCaCertsOutputReference {
    return new HardwaresecuritymodulegroupCaCertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HardwaresecuritymodulegroupConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#version Hardwaresecuritymodulegroup#version}
  */
  readonly version?: string;
}

export function hardwaresecuritymodulegroupConfigpbAttributesToTerraform(struct?: HardwaresecuritymodulegroupConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function hardwaresecuritymodulegroupConfigpbAttributesToHclTerraform(struct?: HardwaresecuritymodulegroupConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HardwaresecuritymodulegroupConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HardwaresecuritymodulegroupConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HardwaresecuritymodulegroupConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class HardwaresecuritymodulegroupConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : HardwaresecuritymodulegroupConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): HardwaresecuritymodulegroupConfigpbAttributesOutputReference {
    return new HardwaresecuritymodulegroupConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HardwaresecuritymodulegroupHsmCloudhsm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#client_config Hardwaresecuritymodulegroup#client_config}
  */
  readonly clientConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#cluster_cert Hardwaresecuritymodulegroup#cluster_cert}
  */
  readonly clusterCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#crypto_user_name Hardwaresecuritymodulegroup#crypto_user_name}
  */
  readonly cryptoUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#crypto_user_password Hardwaresecuritymodulegroup#crypto_user_password}
  */
  readonly cryptoUserPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#hsm_ip Hardwaresecuritymodulegroup#hsm_ip}
  */
  readonly hsmIp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#mgmt_config Hardwaresecuritymodulegroup#mgmt_config}
  */
  readonly mgmtConfig?: string;
}

export function hardwaresecuritymodulegroupHsmCloudhsmToTerraform(struct?: HardwaresecuritymodulegroupHsmCloudhsm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_config: cdktf.stringToTerraform(struct!.clientConfig),
    cluster_cert: cdktf.stringToTerraform(struct!.clusterCert),
    crypto_user_name: cdktf.stringToTerraform(struct!.cryptoUserName),
    crypto_user_password: cdktf.stringToTerraform(struct!.cryptoUserPassword),
    hsm_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hsmIp),
    mgmt_config: cdktf.stringToTerraform(struct!.mgmtConfig),
  }
}


export function hardwaresecuritymodulegroupHsmCloudhsmToHclTerraform(struct?: HardwaresecuritymodulegroupHsmCloudhsm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_config: {
      value: cdktf.stringToHclTerraform(struct!.clientConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_cert: {
      value: cdktf.stringToHclTerraform(struct!.clusterCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crypto_user_name: {
      value: cdktf.stringToHclTerraform(struct!.cryptoUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crypto_user_password: {
      value: cdktf.stringToHclTerraform(struct!.cryptoUserPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hsm_ip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hsmIp),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mgmt_config: {
      value: cdktf.stringToHclTerraform(struct!.mgmtConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HardwaresecuritymodulegroupHsmCloudhsmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HardwaresecuritymodulegroupHsmCloudhsm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientConfig = this._clientConfig;
    }
    if (this._clusterCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterCert = this._clusterCert;
    }
    if (this._cryptoUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoUserName = this._cryptoUserName;
    }
    if (this._cryptoUserPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoUserPassword = this._cryptoUserPassword;
    }
    if (this._hsmIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hsmIp = this._hsmIp;
    }
    if (this._mgmtConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtConfig = this._mgmtConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HardwaresecuritymodulegroupHsmCloudhsm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientConfig = undefined;
      this._clusterCert = undefined;
      this._cryptoUserName = undefined;
      this._cryptoUserPassword = undefined;
      this._hsmIp = undefined;
      this._mgmtConfig = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientConfig = value.clientConfig;
      this._clusterCert = value.clusterCert;
      this._cryptoUserName = value.cryptoUserName;
      this._cryptoUserPassword = value.cryptoUserPassword;
      this._hsmIp = value.hsmIp;
      this._mgmtConfig = value.mgmtConfig;
    }
  }

  // client_config - computed: true, optional: true, required: false
  private _clientConfig?: string; 
  public get clientConfig() {
    return this.getStringAttribute('client_config');
  }
  public set clientConfig(value: string) {
    this._clientConfig = value;
  }
  public resetClientConfig() {
    this._clientConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConfigInput() {
    return this._clientConfig;
  }

  // cluster_cert - computed: true, optional: true, required: false
  private _clusterCert?: string; 
  public get clusterCert() {
    return this.getStringAttribute('cluster_cert');
  }
  public set clusterCert(value: string) {
    this._clusterCert = value;
  }
  public resetClusterCert() {
    this._clusterCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCertInput() {
    return this._clusterCert;
  }

  // crypto_user_name - computed: true, optional: true, required: false
  private _cryptoUserName?: string; 
  public get cryptoUserName() {
    return this.getStringAttribute('crypto_user_name');
  }
  public set cryptoUserName(value: string) {
    this._cryptoUserName = value;
  }
  public resetCryptoUserName() {
    this._cryptoUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoUserNameInput() {
    return this._cryptoUserName;
  }

  // crypto_user_password - computed: true, optional: true, required: false
  private _cryptoUserPassword?: string; 
  public get cryptoUserPassword() {
    return this.getStringAttribute('crypto_user_password');
  }
  public set cryptoUserPassword(value: string) {
    this._cryptoUserPassword = value;
  }
  public resetCryptoUserPassword() {
    this._cryptoUserPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoUserPasswordInput() {
    return this._cryptoUserPassword;
  }

  // hsm_ip - computed: false, optional: true, required: false
  private _hsmIp?: string[]; 
  public get hsmIp() {
    return this.getListAttribute('hsm_ip');
  }
  public set hsmIp(value: string[]) {
    this._hsmIp = value;
  }
  public resetHsmIp() {
    this._hsmIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmIpInput() {
    return this._hsmIp;
  }

  // mgmt_config - computed: true, optional: true, required: false
  private _mgmtConfig?: string; 
  public get mgmtConfig() {
    return this.getStringAttribute('mgmt_config');
  }
  public set mgmtConfig(value: string) {
    this._mgmtConfig = value;
  }
  public resetMgmtConfig() {
    this._mgmtConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtConfigInput() {
    return this._mgmtConfig;
  }
}

export class HardwaresecuritymodulegroupHsmCloudhsmList extends cdktf.ComplexList {
  public internalValue? : HardwaresecuritymodulegroupHsmCloudhsm[] | cdktf.IResolvable

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
  public get(index: number): HardwaresecuritymodulegroupHsmCloudhsmOutputReference {
    return new HardwaresecuritymodulegroupHsmCloudhsmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HardwaresecuritymodulegroupHsmNethsmRemoteIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#addr Hardwaresecuritymodulegroup#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#type Hardwaresecuritymodulegroup#type}
  */
  readonly type: string;
}

export function hardwaresecuritymodulegroupHsmNethsmRemoteIpToTerraform(struct?: HardwaresecuritymodulegroupHsmNethsmRemoteIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function hardwaresecuritymodulegroupHsmNethsmRemoteIpToHclTerraform(struct?: HardwaresecuritymodulegroupHsmNethsmRemoteIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HardwaresecuritymodulegroupHsmNethsmRemoteIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HardwaresecuritymodulegroupHsmNethsmRemoteIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HardwaresecuritymodulegroupHsmNethsmRemoteIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class HardwaresecuritymodulegroupHsmNethsmRemoteIpList extends cdktf.ComplexList {
  public internalValue? : HardwaresecuritymodulegroupHsmNethsmRemoteIp[] | cdktf.IResolvable

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
  public get(index: number): HardwaresecuritymodulegroupHsmNethsmRemoteIpOutputReference {
    return new HardwaresecuritymodulegroupHsmNethsmRemoteIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HardwaresecuritymodulegroupHsmNethsm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#esn Hardwaresecuritymodulegroup#esn}
  */
  readonly esn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#keyhash Hardwaresecuritymodulegroup#keyhash}
  */
  readonly keyhash: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#module_id Hardwaresecuritymodulegroup#module_id}
  */
  readonly moduleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#priority Hardwaresecuritymodulegroup#priority}
  */
  readonly priority: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#remote_port Hardwaresecuritymodulegroup#remote_port}
  */
  readonly remotePort?: string;
  /**
  * remote_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#remote_ip Hardwaresecuritymodulegroup#remote_ip}
  */
  readonly remoteIp: HardwaresecuritymodulegroupHsmNethsmRemoteIp[] | cdktf.IResolvable;
}

export function hardwaresecuritymodulegroupHsmNethsmToTerraform(struct?: HardwaresecuritymodulegroupHsmNethsm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    esn: cdktf.stringToTerraform(struct!.esn),
    keyhash: cdktf.stringToTerraform(struct!.keyhash),
    module_id: cdktf.stringToTerraform(struct!.moduleId),
    priority: cdktf.stringToTerraform(struct!.priority),
    remote_port: cdktf.stringToTerraform(struct!.remotePort),
    remote_ip: cdktf.listMapper(hardwaresecuritymodulegroupHsmNethsmRemoteIpToTerraform, true)(struct!.remoteIp),
  }
}


export function hardwaresecuritymodulegroupHsmNethsmToHclTerraform(struct?: HardwaresecuritymodulegroupHsmNethsm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    esn: {
      value: cdktf.stringToHclTerraform(struct!.esn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keyhash: {
      value: cdktf.stringToHclTerraform(struct!.keyhash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    module_id: {
      value: cdktf.stringToHclTerraform(struct!.moduleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_port: {
      value: cdktf.stringToHclTerraform(struct!.remotePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ip: {
      value: cdktf.listMapperHcl(hardwaresecuritymodulegroupHsmNethsmRemoteIpToHclTerraform, true)(struct!.remoteIp),
      isBlock: true,
      type: "set",
      storageClassType: "HardwaresecuritymodulegroupHsmNethsmRemoteIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HardwaresecuritymodulegroupHsmNethsmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HardwaresecuritymodulegroupHsmNethsm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._esn !== undefined) {
      hasAnyValues = true;
      internalValueResult.esn = this._esn;
    }
    if (this._keyhash !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyhash = this._keyhash;
    }
    if (this._moduleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.moduleId = this._moduleId;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._remotePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.remotePort = this._remotePort;
    }
    if (this._remoteIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIp = this._remoteIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HardwaresecuritymodulegroupHsmNethsm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._esn = undefined;
      this._keyhash = undefined;
      this._moduleId = undefined;
      this._priority = undefined;
      this._remotePort = undefined;
      this._remoteIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._esn = value.esn;
      this._keyhash = value.keyhash;
      this._moduleId = value.moduleId;
      this._priority = value.priority;
      this._remotePort = value.remotePort;
      this._remoteIp.internalValue = value.remoteIp;
    }
  }

  // esn - computed: false, optional: false, required: true
  private _esn?: string; 
  public get esn() {
    return this.getStringAttribute('esn');
  }
  public set esn(value: string) {
    this._esn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get esnInput() {
    return this._esn;
  }

  // keyhash - computed: false, optional: false, required: true
  private _keyhash?: string; 
  public get keyhash() {
    return this.getStringAttribute('keyhash');
  }
  public set keyhash(value: string) {
    this._keyhash = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyhashInput() {
    return this._keyhash;
  }

  // module_id - computed: false, optional: true, required: false
  private _moduleId?: string; 
  public get moduleId() {
    return this.getStringAttribute('module_id');
  }
  public set moduleId(value: string) {
    this._moduleId = value;
  }
  public resetModuleId() {
    this._moduleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleIdInput() {
    return this._moduleId;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // remote_port - computed: false, optional: true, required: false
  private _remotePort?: string; 
  public get remotePort() {
    return this.getStringAttribute('remote_port');
  }
  public set remotePort(value: string) {
    this._remotePort = value;
  }
  public resetRemotePort() {
    this._remotePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePortInput() {
    return this._remotePort;
  }

  // remote_ip - computed: false, optional: false, required: true
  private _remoteIp = new HardwaresecuritymodulegroupHsmNethsmRemoteIpList(this, "remote_ip", true);
  public get remoteIp() {
    return this._remoteIp;
  }
  public putRemoteIp(value: HardwaresecuritymodulegroupHsmNethsmRemoteIp[] | cdktf.IResolvable) {
    this._remoteIp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpInput() {
    return this._remoteIp.internalValue;
  }
}

export class HardwaresecuritymodulegroupHsmNethsmList extends cdktf.ComplexList {
  public internalValue? : HardwaresecuritymodulegroupHsmNethsm[] | cdktf.IResolvable

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
  public get(index: number): HardwaresecuritymodulegroupHsmNethsmOutputReference {
    return new HardwaresecuritymodulegroupHsmNethsmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HardwaresecuritymodulegroupHsmRfsIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#addr Hardwaresecuritymodulegroup#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#type Hardwaresecuritymodulegroup#type}
  */
  readonly type: string;
}

export function hardwaresecuritymodulegroupHsmRfsIpToTerraform(struct?: HardwaresecuritymodulegroupHsmRfsIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function hardwaresecuritymodulegroupHsmRfsIpToHclTerraform(struct?: HardwaresecuritymodulegroupHsmRfsIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HardwaresecuritymodulegroupHsmRfsIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HardwaresecuritymodulegroupHsmRfsIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HardwaresecuritymodulegroupHsmRfsIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class HardwaresecuritymodulegroupHsmRfsIpList extends cdktf.ComplexList {
  public internalValue? : HardwaresecuritymodulegroupHsmRfsIp[] | cdktf.IResolvable

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
  public get(index: number): HardwaresecuritymodulegroupHsmRfsIpOutputReference {
    return new HardwaresecuritymodulegroupHsmRfsIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HardwaresecuritymodulegroupHsmRfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#port Hardwaresecuritymodulegroup#port}
  */
  readonly port?: string;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#ip Hardwaresecuritymodulegroup#ip}
  */
  readonly ip: HardwaresecuritymodulegroupHsmRfsIp[] | cdktf.IResolvable;
}

export function hardwaresecuritymodulegroupHsmRfsToTerraform(struct?: HardwaresecuritymodulegroupHsmRfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
    ip: cdktf.listMapper(hardwaresecuritymodulegroupHsmRfsIpToTerraform, true)(struct!.ip),
  }
}


export function hardwaresecuritymodulegroupHsmRfsToHclTerraform(struct?: HardwaresecuritymodulegroupHsmRfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.listMapperHcl(hardwaresecuritymodulegroupHsmRfsIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "set",
      storageClassType: "HardwaresecuritymodulegroupHsmRfsIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HardwaresecuritymodulegroupHsmRfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HardwaresecuritymodulegroupHsmRfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HardwaresecuritymodulegroupHsmRfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._ip.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._ip.internalValue = value.ip;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // ip - computed: false, optional: false, required: true
  private _ip = new HardwaresecuritymodulegroupHsmRfsIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }
  public putIp(value: HardwaresecuritymodulegroupHsmRfsIp[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }
}

export class HardwaresecuritymodulegroupHsmRfsList extends cdktf.ComplexList {
  public internalValue? : HardwaresecuritymodulegroupHsmRfs[] | cdktf.IResolvable

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
  public get(index: number): HardwaresecuritymodulegroupHsmRfsOutputReference {
    return new HardwaresecuritymodulegroupHsmRfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HardwaresecuritymodulegroupHsmSlunaNodeInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#chrystoki_conf Hardwaresecuritymodulegroup#chrystoki_conf}
  */
  readonly chrystokiConf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#client_cert Hardwaresecuritymodulegroup#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#client_ip Hardwaresecuritymodulegroup#client_ip}
  */
  readonly clientIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#client_priv_key Hardwaresecuritymodulegroup#client_priv_key}
  */
  readonly clientPrivKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#session_major_number Hardwaresecuritymodulegroup#session_major_number}
  */
  readonly sessionMajorNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#session_minor_number Hardwaresecuritymodulegroup#session_minor_number}
  */
  readonly sessionMinorNumber?: string;
}

export function hardwaresecuritymodulegroupHsmSlunaNodeInfoToTerraform(struct?: HardwaresecuritymodulegroupHsmSlunaNodeInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chrystoki_conf: cdktf.stringToTerraform(struct!.chrystokiConf),
    client_cert: cdktf.stringToTerraform(struct!.clientCert),
    client_ip: cdktf.stringToTerraform(struct!.clientIp),
    client_priv_key: cdktf.stringToTerraform(struct!.clientPrivKey),
    session_major_number: cdktf.stringToTerraform(struct!.sessionMajorNumber),
    session_minor_number: cdktf.stringToTerraform(struct!.sessionMinorNumber),
  }
}


export function hardwaresecuritymodulegroupHsmSlunaNodeInfoToHclTerraform(struct?: HardwaresecuritymodulegroupHsmSlunaNodeInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chrystoki_conf: {
      value: cdktf.stringToHclTerraform(struct!.chrystokiConf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert: {
      value: cdktf.stringToHclTerraform(struct!.clientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_ip: {
      value: cdktf.stringToHclTerraform(struct!.clientIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_priv_key: {
      value: cdktf.stringToHclTerraform(struct!.clientPrivKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_major_number: {
      value: cdktf.stringToHclTerraform(struct!.sessionMajorNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_minor_number: {
      value: cdktf.stringToHclTerraform(struct!.sessionMinorNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HardwaresecuritymodulegroupHsmSlunaNodeInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HardwaresecuritymodulegroupHsmSlunaNodeInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chrystokiConf !== undefined) {
      hasAnyValues = true;
      internalValueResult.chrystokiConf = this._chrystokiConf;
    }
    if (this._clientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCert = this._clientCert;
    }
    if (this._clientIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp;
    }
    if (this._clientPrivKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPrivKey = this._clientPrivKey;
    }
    if (this._sessionMajorNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionMajorNumber = this._sessionMajorNumber;
    }
    if (this._sessionMinorNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionMinorNumber = this._sessionMinorNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HardwaresecuritymodulegroupHsmSlunaNodeInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chrystokiConf = undefined;
      this._clientCert = undefined;
      this._clientIp = undefined;
      this._clientPrivKey = undefined;
      this._sessionMajorNumber = undefined;
      this._sessionMinorNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chrystokiConf = value.chrystokiConf;
      this._clientCert = value.clientCert;
      this._clientIp = value.clientIp;
      this._clientPrivKey = value.clientPrivKey;
      this._sessionMajorNumber = value.sessionMajorNumber;
      this._sessionMinorNumber = value.sessionMinorNumber;
    }
  }

  // chrystoki_conf - computed: true, optional: true, required: false
  private _chrystokiConf?: string; 
  public get chrystokiConf() {
    return this.getStringAttribute('chrystoki_conf');
  }
  public set chrystokiConf(value: string) {
    this._chrystokiConf = value;
  }
  public resetChrystokiConf() {
    this._chrystokiConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chrystokiConfInput() {
    return this._chrystokiConf;
  }

  // client_cert - computed: true, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_ip - computed: false, optional: false, required: true
  private _clientIp?: string; 
  public get clientIp() {
    return this.getStringAttribute('client_ip');
  }
  public set clientIp(value: string) {
    this._clientIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp;
  }

  // client_priv_key - computed: true, optional: true, required: false
  private _clientPrivKey?: string; 
  public get clientPrivKey() {
    return this.getStringAttribute('client_priv_key');
  }
  public set clientPrivKey(value: string) {
    this._clientPrivKey = value;
  }
  public resetClientPrivKey() {
    this._clientPrivKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPrivKeyInput() {
    return this._clientPrivKey;
  }

  // session_major_number - computed: true, optional: true, required: false
  private _sessionMajorNumber?: string; 
  public get sessionMajorNumber() {
    return this.getStringAttribute('session_major_number');
  }
  public set sessionMajorNumber(value: string) {
    this._sessionMajorNumber = value;
  }
  public resetSessionMajorNumber() {
    this._sessionMajorNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionMajorNumberInput() {
    return this._sessionMajorNumber;
  }

  // session_minor_number - computed: true, optional: true, required: false
  private _sessionMinorNumber?: string; 
  public get sessionMinorNumber() {
    return this.getStringAttribute('session_minor_number');
  }
  public set sessionMinorNumber(value: string) {
    this._sessionMinorNumber = value;
  }
  public resetSessionMinorNumber() {
    this._sessionMinorNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionMinorNumberInput() {
    return this._sessionMinorNumber;
  }
}

export class HardwaresecuritymodulegroupHsmSlunaNodeInfoList extends cdktf.ComplexList {
  public internalValue? : HardwaresecuritymodulegroupHsmSlunaNodeInfo[] | cdktf.IResolvable

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
  public get(index: number): HardwaresecuritymodulegroupHsmSlunaNodeInfoOutputReference {
    return new HardwaresecuritymodulegroupHsmSlunaNodeInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HardwaresecuritymodulegroupHsmSlunaServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#index Hardwaresecuritymodulegroup#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#partition_passwd Hardwaresecuritymodulegroup#partition_passwd}
  */
  readonly partitionPasswd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#partition_serial_number Hardwaresecuritymodulegroup#partition_serial_number}
  */
  readonly partitionSerialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#remote_ip Hardwaresecuritymodulegroup#remote_ip}
  */
  readonly remoteIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#server_cert Hardwaresecuritymodulegroup#server_cert}
  */
  readonly serverCert: string;
}

export function hardwaresecuritymodulegroupHsmSlunaServerToTerraform(struct?: HardwaresecuritymodulegroupHsmSlunaServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    partition_passwd: cdktf.stringToTerraform(struct!.partitionPasswd),
    partition_serial_number: cdktf.stringToTerraform(struct!.partitionSerialNumber),
    remote_ip: cdktf.stringToTerraform(struct!.remoteIp),
    server_cert: cdktf.stringToTerraform(struct!.serverCert),
  }
}


export function hardwaresecuritymodulegroupHsmSlunaServerToHclTerraform(struct?: HardwaresecuritymodulegroupHsmSlunaServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_passwd: {
      value: cdktf.stringToHclTerraform(struct!.partitionPasswd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_serial_number: {
      value: cdktf.stringToHclTerraform(struct!.partitionSerialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ip: {
      value: cdktf.stringToHclTerraform(struct!.remoteIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_cert: {
      value: cdktf.stringToHclTerraform(struct!.serverCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HardwaresecuritymodulegroupHsmSlunaServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HardwaresecuritymodulegroupHsmSlunaServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._partitionPasswd !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionPasswd = this._partitionPasswd;
    }
    if (this._partitionSerialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionSerialNumber = this._partitionSerialNumber;
    }
    if (this._remoteIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIp = this._remoteIp;
    }
    if (this._serverCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCert = this._serverCert;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HardwaresecuritymodulegroupHsmSlunaServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._partitionPasswd = undefined;
      this._partitionSerialNumber = undefined;
      this._remoteIp = undefined;
      this._serverCert = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._partitionPasswd = value.partitionPasswd;
      this._partitionSerialNumber = value.partitionSerialNumber;
      this._remoteIp = value.remoteIp;
      this._serverCert = value.serverCert;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // partition_passwd - computed: true, optional: true, required: false
  private _partitionPasswd?: string; 
  public get partitionPasswd() {
    return this.getStringAttribute('partition_passwd');
  }
  public set partitionPasswd(value: string) {
    this._partitionPasswd = value;
  }
  public resetPartitionPasswd() {
    this._partitionPasswd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionPasswdInput() {
    return this._partitionPasswd;
  }

  // partition_serial_number - computed: true, optional: true, required: false
  private _partitionSerialNumber?: string; 
  public get partitionSerialNumber() {
    return this.getStringAttribute('partition_serial_number');
  }
  public set partitionSerialNumber(value: string) {
    this._partitionSerialNumber = value;
  }
  public resetPartitionSerialNumber() {
    this._partitionSerialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionSerialNumberInput() {
    return this._partitionSerialNumber;
  }

  // remote_ip - computed: false, optional: false, required: true
  private _remoteIp?: string; 
  public get remoteIp() {
    return this.getStringAttribute('remote_ip');
  }
  public set remoteIp(value: string) {
    this._remoteIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpInput() {
    return this._remoteIp;
  }

  // server_cert - computed: false, optional: false, required: true
  private _serverCert?: string; 
  public get serverCert() {
    return this.getStringAttribute('server_cert');
  }
  public set serverCert(value: string) {
    this._serverCert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertInput() {
    return this._serverCert;
  }
}

export class HardwaresecuritymodulegroupHsmSlunaServerList extends cdktf.ComplexList {
  public internalValue? : HardwaresecuritymodulegroupHsmSlunaServer[] | cdktf.IResolvable

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
  public get(index: number): HardwaresecuritymodulegroupHsmSlunaServerOutputReference {
    return new HardwaresecuritymodulegroupHsmSlunaServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HardwaresecuritymodulegroupHsmSluna {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#ha_group_num Hardwaresecuritymodulegroup#ha_group_num}
  */
  readonly haGroupNum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#is_ha Hardwaresecuritymodulegroup#is_ha}
  */
  readonly isHa: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#server_pem Hardwaresecuritymodulegroup#server_pem}
  */
  readonly serverPem?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#use_dedicated_network Hardwaresecuritymodulegroup#use_dedicated_network}
  */
  readonly useDedicatedNetwork?: string;
  /**
  * node_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#node_info Hardwaresecuritymodulegroup#node_info}
  */
  readonly nodeInfo?: HardwaresecuritymodulegroupHsmSlunaNodeInfo[] | cdktf.IResolvable;
  /**
  * server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#server Hardwaresecuritymodulegroup#server}
  */
  readonly server?: HardwaresecuritymodulegroupHsmSlunaServer[] | cdktf.IResolvable;
}

export function hardwaresecuritymodulegroupHsmSlunaToTerraform(struct?: HardwaresecuritymodulegroupHsmSluna | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ha_group_num: cdktf.stringToTerraform(struct!.haGroupNum),
    is_ha: cdktf.stringToTerraform(struct!.isHa),
    server_pem: cdktf.stringToTerraform(struct!.serverPem),
    use_dedicated_network: cdktf.stringToTerraform(struct!.useDedicatedNetwork),
    node_info: cdktf.listMapper(hardwaresecuritymodulegroupHsmSlunaNodeInfoToTerraform, true)(struct!.nodeInfo),
    server: cdktf.listMapper(hardwaresecuritymodulegroupHsmSlunaServerToTerraform, true)(struct!.server),
  }
}


export function hardwaresecuritymodulegroupHsmSlunaToHclTerraform(struct?: HardwaresecuritymodulegroupHsmSluna | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ha_group_num: {
      value: cdktf.stringToHclTerraform(struct!.haGroupNum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_ha: {
      value: cdktf.stringToHclTerraform(struct!.isHa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_pem: {
      value: cdktf.stringToHclTerraform(struct!.serverPem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_dedicated_network: {
      value: cdktf.stringToHclTerraform(struct!.useDedicatedNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_info: {
      value: cdktf.listMapperHcl(hardwaresecuritymodulegroupHsmSlunaNodeInfoToHclTerraform, true)(struct!.nodeInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HardwaresecuritymodulegroupHsmSlunaNodeInfoList",
    },
    server: {
      value: cdktf.listMapperHcl(hardwaresecuritymodulegroupHsmSlunaServerToHclTerraform, true)(struct!.server),
      isBlock: true,
      type: "list",
      storageClassType: "HardwaresecuritymodulegroupHsmSlunaServerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HardwaresecuritymodulegroupHsmSlunaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HardwaresecuritymodulegroupHsmSluna | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._haGroupNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.haGroupNum = this._haGroupNum;
    }
    if (this._isHa !== undefined) {
      hasAnyValues = true;
      internalValueResult.isHa = this._isHa;
    }
    if (this._serverPem !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverPem = this._serverPem;
    }
    if (this._useDedicatedNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDedicatedNetwork = this._useDedicatedNetwork;
    }
    if (this._nodeInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeInfo = this._nodeInfo?.internalValue;
    }
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HardwaresecuritymodulegroupHsmSluna | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._haGroupNum = undefined;
      this._isHa = undefined;
      this._serverPem = undefined;
      this._useDedicatedNetwork = undefined;
      this._nodeInfo.internalValue = undefined;
      this._server.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._haGroupNum = value.haGroupNum;
      this._isHa = value.isHa;
      this._serverPem = value.serverPem;
      this._useDedicatedNetwork = value.useDedicatedNetwork;
      this._nodeInfo.internalValue = value.nodeInfo;
      this._server.internalValue = value.server;
    }
  }

  // ha_group_num - computed: true, optional: true, required: false
  private _haGroupNum?: string; 
  public get haGroupNum() {
    return this.getStringAttribute('ha_group_num');
  }
  public set haGroupNum(value: string) {
    this._haGroupNum = value;
  }
  public resetHaGroupNum() {
    this._haGroupNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haGroupNumInput() {
    return this._haGroupNum;
  }

  // is_ha - computed: false, optional: false, required: true
  private _isHa?: string; 
  public get isHa() {
    return this.getStringAttribute('is_ha');
  }
  public set isHa(value: string) {
    this._isHa = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isHaInput() {
    return this._isHa;
  }

  // server_pem - computed: true, optional: true, required: false
  private _serverPem?: string; 
  public get serverPem() {
    return this.getStringAttribute('server_pem');
  }
  public set serverPem(value: string) {
    this._serverPem = value;
  }
  public resetServerPem() {
    this._serverPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPemInput() {
    return this._serverPem;
  }

  // use_dedicated_network - computed: false, optional: true, required: false
  private _useDedicatedNetwork?: string; 
  public get useDedicatedNetwork() {
    return this.getStringAttribute('use_dedicated_network');
  }
  public set useDedicatedNetwork(value: string) {
    this._useDedicatedNetwork = value;
  }
  public resetUseDedicatedNetwork() {
    this._useDedicatedNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDedicatedNetworkInput() {
    return this._useDedicatedNetwork;
  }

  // node_info - computed: false, optional: true, required: false
  private _nodeInfo = new HardwaresecuritymodulegroupHsmSlunaNodeInfoList(this, "node_info", false);
  public get nodeInfo() {
    return this._nodeInfo;
  }
  public putNodeInfo(value: HardwaresecuritymodulegroupHsmSlunaNodeInfo[] | cdktf.IResolvable) {
    this._nodeInfo.internalValue = value;
  }
  public resetNodeInfo() {
    this._nodeInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeInfoInput() {
    return this._nodeInfo.internalValue;
  }

  // server - computed: false, optional: true, required: false
  private _server = new HardwaresecuritymodulegroupHsmSlunaServerList(this, "server", false);
  public get server() {
    return this._server;
  }
  public putServer(value: HardwaresecuritymodulegroupHsmSlunaServer[] | cdktf.IResolvable) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }
}

export class HardwaresecuritymodulegroupHsmSlunaList extends cdktf.ComplexList {
  public internalValue? : HardwaresecuritymodulegroupHsmSluna[] | cdktf.IResolvable

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
  public get(index: number): HardwaresecuritymodulegroupHsmSlunaOutputReference {
    return new HardwaresecuritymodulegroupHsmSlunaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HardwaresecuritymodulegroupHsm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#type Hardwaresecuritymodulegroup#type}
  */
  readonly type: string;
  /**
  * cloudhsm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#cloudhsm Hardwaresecuritymodulegroup#cloudhsm}
  */
  readonly cloudhsm?: HardwaresecuritymodulegroupHsmCloudhsm[] | cdktf.IResolvable;
  /**
  * nethsm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#nethsm Hardwaresecuritymodulegroup#nethsm}
  */
  readonly nethsm?: HardwaresecuritymodulegroupHsmNethsm[] | cdktf.IResolvable;
  /**
  * rfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#rfs Hardwaresecuritymodulegroup#rfs}
  */
  readonly rfs?: HardwaresecuritymodulegroupHsmRfs[] | cdktf.IResolvable;
  /**
  * sluna block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#sluna Hardwaresecuritymodulegroup#sluna}
  */
  readonly sluna?: HardwaresecuritymodulegroupHsmSluna[] | cdktf.IResolvable;
}

export function hardwaresecuritymodulegroupHsmToTerraform(struct?: HardwaresecuritymodulegroupHsm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cloudhsm: cdktf.listMapper(hardwaresecuritymodulegroupHsmCloudhsmToTerraform, true)(struct!.cloudhsm),
    nethsm: cdktf.listMapper(hardwaresecuritymodulegroupHsmNethsmToTerraform, true)(struct!.nethsm),
    rfs: cdktf.listMapper(hardwaresecuritymodulegroupHsmRfsToTerraform, true)(struct!.rfs),
    sluna: cdktf.listMapper(hardwaresecuritymodulegroupHsmSlunaToTerraform, true)(struct!.sluna),
  }
}


export function hardwaresecuritymodulegroupHsmToHclTerraform(struct?: HardwaresecuritymodulegroupHsm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudhsm: {
      value: cdktf.listMapperHcl(hardwaresecuritymodulegroupHsmCloudhsmToHclTerraform, true)(struct!.cloudhsm),
      isBlock: true,
      type: "set",
      storageClassType: "HardwaresecuritymodulegroupHsmCloudhsmList",
    },
    nethsm: {
      value: cdktf.listMapperHcl(hardwaresecuritymodulegroupHsmNethsmToHclTerraform, true)(struct!.nethsm),
      isBlock: true,
      type: "list",
      storageClassType: "HardwaresecuritymodulegroupHsmNethsmList",
    },
    rfs: {
      value: cdktf.listMapperHcl(hardwaresecuritymodulegroupHsmRfsToHclTerraform, true)(struct!.rfs),
      isBlock: true,
      type: "set",
      storageClassType: "HardwaresecuritymodulegroupHsmRfsList",
    },
    sluna: {
      value: cdktf.listMapperHcl(hardwaresecuritymodulegroupHsmSlunaToHclTerraform, true)(struct!.sluna),
      isBlock: true,
      type: "set",
      storageClassType: "HardwaresecuritymodulegroupHsmSlunaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HardwaresecuritymodulegroupHsmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HardwaresecuritymodulegroupHsm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cloudhsm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudhsm = this._cloudhsm?.internalValue;
    }
    if (this._nethsm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nethsm = this._nethsm?.internalValue;
    }
    if (this._rfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfs = this._rfs?.internalValue;
    }
    if (this._sluna?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sluna = this._sluna?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HardwaresecuritymodulegroupHsm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._cloudhsm.internalValue = undefined;
      this._nethsm.internalValue = undefined;
      this._rfs.internalValue = undefined;
      this._sluna.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._cloudhsm.internalValue = value.cloudhsm;
      this._nethsm.internalValue = value.nethsm;
      this._rfs.internalValue = value.rfs;
      this._sluna.internalValue = value.sluna;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // cloudhsm - computed: false, optional: true, required: false
  private _cloudhsm = new HardwaresecuritymodulegroupHsmCloudhsmList(this, "cloudhsm", true);
  public get cloudhsm() {
    return this._cloudhsm;
  }
  public putCloudhsm(value: HardwaresecuritymodulegroupHsmCloudhsm[] | cdktf.IResolvable) {
    this._cloudhsm.internalValue = value;
  }
  public resetCloudhsm() {
    this._cloudhsm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudhsmInput() {
    return this._cloudhsm.internalValue;
  }

  // nethsm - computed: false, optional: true, required: false
  private _nethsm = new HardwaresecuritymodulegroupHsmNethsmList(this, "nethsm", false);
  public get nethsm() {
    return this._nethsm;
  }
  public putNethsm(value: HardwaresecuritymodulegroupHsmNethsm[] | cdktf.IResolvable) {
    this._nethsm.internalValue = value;
  }
  public resetNethsm() {
    this._nethsm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nethsmInput() {
    return this._nethsm.internalValue;
  }

  // rfs - computed: false, optional: true, required: false
  private _rfs = new HardwaresecuritymodulegroupHsmRfsList(this, "rfs", true);
  public get rfs() {
    return this._rfs;
  }
  public putRfs(value: HardwaresecuritymodulegroupHsmRfs[] | cdktf.IResolvable) {
    this._rfs.internalValue = value;
  }
  public resetRfs() {
    this._rfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfsInput() {
    return this._rfs.internalValue;
  }

  // sluna - computed: false, optional: true, required: false
  private _sluna = new HardwaresecuritymodulegroupHsmSlunaList(this, "sluna", true);
  public get sluna() {
    return this._sluna;
  }
  public putSluna(value: HardwaresecuritymodulegroupHsmSluna[] | cdktf.IResolvable) {
    this._sluna.internalValue = value;
  }
  public resetSluna() {
    this._sluna.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slunaInput() {
    return this._sluna.internalValue;
  }
}

export class HardwaresecuritymodulegroupHsmList extends cdktf.ComplexList {
  public internalValue? : HardwaresecuritymodulegroupHsm[] | cdktf.IResolvable

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
  public get(index: number): HardwaresecuritymodulegroupHsmOutputReference {
    return new HardwaresecuritymodulegroupHsmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HardwaresecuritymodulegroupMarkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#key Hardwaresecuritymodulegroup#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#values Hardwaresecuritymodulegroup#values}
  */
  readonly values?: string[];
}

export function hardwaresecuritymodulegroupMarkersToTerraform(struct?: HardwaresecuritymodulegroupMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function hardwaresecuritymodulegroupMarkersToHclTerraform(struct?: HardwaresecuritymodulegroupMarkers | cdktf.IResolvable): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HardwaresecuritymodulegroupMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HardwaresecuritymodulegroupMarkers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HardwaresecuritymodulegroupMarkers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class HardwaresecuritymodulegroupMarkersList extends cdktf.ComplexList {
  public internalValue? : HardwaresecuritymodulegroupMarkers[] | cdktf.IResolvable

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
  public get(index: number): HardwaresecuritymodulegroupMarkersOutputReference {
    return new HardwaresecuritymodulegroupMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup avi_hardwaresecuritymodulegroup}
*/
export class Hardwaresecuritymodulegroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_hardwaresecuritymodulegroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Hardwaresecuritymodulegroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Hardwaresecuritymodulegroup to import
  * @param importFromId The id of the existing Hardwaresecuritymodulegroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Hardwaresecuritymodulegroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_hardwaresecuritymodulegroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/hardwaresecuritymodulegroup avi_hardwaresecuritymodulegroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HardwaresecuritymodulegroupConfig
  */
  public constructor(scope: Construct, id: string, config: HardwaresecuritymodulegroupConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_hardwaresecuritymodulegroup',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.2.1',
        providerVersionConstraint: '31.2.1'
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
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._caCerts.internalValue = config.caCerts;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._hsm.internalValue = config.hsm;
    this._markers.internalValue = config.markers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // ca_certs - computed: false, optional: true, required: false
  private _caCerts = new HardwaresecuritymodulegroupCaCertsList(this, "ca_certs", false);
  public get caCerts() {
    return this._caCerts;
  }
  public putCaCerts(value: HardwaresecuritymodulegroupCaCerts[] | cdktf.IResolvable) {
    this._caCerts.internalValue = value;
  }
  public resetCaCerts() {
    this._caCerts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertsInput() {
    return this._caCerts.internalValue;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new HardwaresecuritymodulegroupConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: HardwaresecuritymodulegroupConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // hsm - computed: false, optional: false, required: true
  private _hsm = new HardwaresecuritymodulegroupHsmList(this, "hsm", true);
  public get hsm() {
    return this._hsm;
  }
  public putHsm(value: HardwaresecuritymodulegroupHsm[] | cdktf.IResolvable) {
    this._hsm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmInput() {
    return this._hsm.internalValue;
  }

  // markers - computed: false, optional: true, required: false
  private _markers = new HardwaresecuritymodulegroupMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }
  public putMarkers(value: HardwaresecuritymodulegroupMarkers[] | cdktf.IResolvable) {
    this._markers.internalValue = value;
  }
  public resetMarkers() {
    this._markers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markersInput() {
    return this._markers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      ca_certs: cdktf.listMapper(hardwaresecuritymodulegroupCaCertsToTerraform, true)(this._caCerts.internalValue),
      configpb_attributes: cdktf.listMapper(hardwaresecuritymodulegroupConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      hsm: cdktf.listMapper(hardwaresecuritymodulegroupHsmToTerraform, true)(this._hsm.internalValue),
      markers: cdktf.listMapper(hardwaresecuritymodulegroupMarkersToTerraform, true)(this._markers.internalValue),
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
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_certs: {
        value: cdktf.listMapperHcl(hardwaresecuritymodulegroupCaCertsToHclTerraform, true)(this._caCerts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HardwaresecuritymodulegroupCaCertsList",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(hardwaresecuritymodulegroupConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HardwaresecuritymodulegroupConfigpbAttributesList",
      },
      hsm: {
        value: cdktf.listMapperHcl(hardwaresecuritymodulegroupHsmToHclTerraform, true)(this._hsm.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HardwaresecuritymodulegroupHsmList",
      },
      markers: {
        value: cdktf.listMapperHcl(hardwaresecuritymodulegroupMarkersToHclTerraform, true)(this._markers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HardwaresecuritymodulegroupMarkersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
