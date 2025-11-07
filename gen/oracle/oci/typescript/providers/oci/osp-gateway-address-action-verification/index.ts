// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OspGatewayAddressActionVerificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#address_key OspGatewayAddressActionVerification#address_key}
  */
  readonly addressKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#city OspGatewayAddressActionVerification#city}
  */
  readonly city?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#company_name OspGatewayAddressActionVerification#company_name}
  */
  readonly companyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#compartment_id OspGatewayAddressActionVerification#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#contributor_class OspGatewayAddressActionVerification#contributor_class}
  */
  readonly contributorClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#country OspGatewayAddressActionVerification#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#county OspGatewayAddressActionVerification#county}
  */
  readonly county?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#department_name OspGatewayAddressActionVerification#department_name}
  */
  readonly departmentName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#email_address OspGatewayAddressActionVerification#email_address}
  */
  readonly emailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#first_name OspGatewayAddressActionVerification#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#id OspGatewayAddressActionVerification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#internal_number OspGatewayAddressActionVerification#internal_number}
  */
  readonly internalNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#job_title OspGatewayAddressActionVerification#job_title}
  */
  readonly jobTitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#last_name OspGatewayAddressActionVerification#last_name}
  */
  readonly lastName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#line1 OspGatewayAddressActionVerification#line1}
  */
  readonly line1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#line2 OspGatewayAddressActionVerification#line2}
  */
  readonly line2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#line3 OspGatewayAddressActionVerification#line3}
  */
  readonly line3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#line4 OspGatewayAddressActionVerification#line4}
  */
  readonly line4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#middle_name OspGatewayAddressActionVerification#middle_name}
  */
  readonly middleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#municipal_inscription OspGatewayAddressActionVerification#municipal_inscription}
  */
  readonly municipalInscription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#osp_home_region OspGatewayAddressActionVerification#osp_home_region}
  */
  readonly ospHomeRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#phone_country_code OspGatewayAddressActionVerification#phone_country_code}
  */
  readonly phoneCountryCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#phone_number OspGatewayAddressActionVerification#phone_number}
  */
  readonly phoneNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#postal_code OspGatewayAddressActionVerification#postal_code}
  */
  readonly postalCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#province OspGatewayAddressActionVerification#province}
  */
  readonly province?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#state OspGatewayAddressActionVerification#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#state_inscription OspGatewayAddressActionVerification#state_inscription}
  */
  readonly stateInscription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#street_name OspGatewayAddressActionVerification#street_name}
  */
  readonly streetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#street_number OspGatewayAddressActionVerification#street_number}
  */
  readonly streetNumber?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#timeouts OspGatewayAddressActionVerification#timeouts}
  */
  readonly timeouts?: OspGatewayAddressActionVerificationTimeouts;
}
export interface OspGatewayAddressActionVerificationAddress {
}

export function ospGatewayAddressActionVerificationAddressToTerraform(struct?: OspGatewayAddressActionVerificationAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ospGatewayAddressActionVerificationAddressToHclTerraform(struct?: OspGatewayAddressActionVerificationAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OspGatewayAddressActionVerificationAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OspGatewayAddressActionVerificationAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspGatewayAddressActionVerificationAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_key - computed: true, optional: false, required: false
  public get addressKey() {
    return this.getStringAttribute('address_key');
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // company_name - computed: true, optional: false, required: false
  public get companyName() {
    return this.getStringAttribute('company_name');
  }

  // contributor_class - computed: true, optional: false, required: false
  public get contributorClass() {
    return this.getStringAttribute('contributor_class');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // county - computed: true, optional: false, required: false
  public get county() {
    return this.getStringAttribute('county');
  }

  // department_name - computed: true, optional: false, required: false
  public get departmentName() {
    return this.getStringAttribute('department_name');
  }

  // email_address - computed: true, optional: false, required: false
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // internal_number - computed: true, optional: false, required: false
  public get internalNumber() {
    return this.getStringAttribute('internal_number');
  }

  // job_title - computed: true, optional: false, required: false
  public get jobTitle() {
    return this.getStringAttribute('job_title');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // line1 - computed: true, optional: false, required: false
  public get line1() {
    return this.getStringAttribute('line1');
  }

  // line2 - computed: true, optional: false, required: false
  public get line2() {
    return this.getStringAttribute('line2');
  }

  // line3 - computed: true, optional: false, required: false
  public get line3() {
    return this.getStringAttribute('line3');
  }

  // line4 - computed: true, optional: false, required: false
  public get line4() {
    return this.getStringAttribute('line4');
  }

  // middle_name - computed: true, optional: false, required: false
  public get middleName() {
    return this.getStringAttribute('middle_name');
  }

  // municipal_inscription - computed: true, optional: false, required: false
  public get municipalInscription() {
    return this.getStringAttribute('municipal_inscription');
  }

  // phone_country_code - computed: true, optional: false, required: false
  public get phoneCountryCode() {
    return this.getStringAttribute('phone_country_code');
  }

  // phone_number - computed: true, optional: false, required: false
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }

  // postal_code - computed: true, optional: false, required: false
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }

  // province - computed: true, optional: false, required: false
  public get province() {
    return this.getStringAttribute('province');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_inscription - computed: true, optional: false, required: false
  public get stateInscription() {
    return this.getStringAttribute('state_inscription');
  }

  // street_name - computed: true, optional: false, required: false
  public get streetName() {
    return this.getStringAttribute('street_name');
  }

  // street_number - computed: true, optional: false, required: false
  public get streetNumber() {
    return this.getStringAttribute('street_number');
  }
}

export class OspGatewayAddressActionVerificationAddressList extends cdktf.ComplexList {

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
  public get(index: number): OspGatewayAddressActionVerificationAddressOutputReference {
    return new OspGatewayAddressActionVerificationAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OspGatewayAddressActionVerificationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#create OspGatewayAddressActionVerification#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#delete OspGatewayAddressActionVerification#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#update OspGatewayAddressActionVerification#update}
  */
  readonly update?: string;
}

export function ospGatewayAddressActionVerificationTimeoutsToTerraform(struct?: OspGatewayAddressActionVerificationTimeouts | cdktf.IResolvable): any {
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


export function ospGatewayAddressActionVerificationTimeoutsToHclTerraform(struct?: OspGatewayAddressActionVerificationTimeouts | cdktf.IResolvable): any {
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

export class OspGatewayAddressActionVerificationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OspGatewayAddressActionVerificationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OspGatewayAddressActionVerificationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification oci_osp_gateway_address_action_verification}
*/
export class OspGatewayAddressActionVerification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_osp_gateway_address_action_verification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OspGatewayAddressActionVerification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OspGatewayAddressActionVerification to import
  * @param importFromId The id of the existing OspGatewayAddressActionVerification that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OspGatewayAddressActionVerification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_osp_gateway_address_action_verification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/osp_gateway_address_action_verification oci_osp_gateway_address_action_verification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OspGatewayAddressActionVerificationConfig
  */
  public constructor(scope: Construct, id: string, config: OspGatewayAddressActionVerificationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_osp_gateway_address_action_verification',
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
    this._addressKey = config.addressKey;
    this._city = config.city;
    this._companyName = config.companyName;
    this._compartmentId = config.compartmentId;
    this._contributorClass = config.contributorClass;
    this._country = config.country;
    this._county = config.county;
    this._departmentName = config.departmentName;
    this._emailAddress = config.emailAddress;
    this._firstName = config.firstName;
    this._id = config.id;
    this._internalNumber = config.internalNumber;
    this._jobTitle = config.jobTitle;
    this._lastName = config.lastName;
    this._line1 = config.line1;
    this._line2 = config.line2;
    this._line3 = config.line3;
    this._line4 = config.line4;
    this._middleName = config.middleName;
    this._municipalInscription = config.municipalInscription;
    this._ospHomeRegion = config.ospHomeRegion;
    this._phoneCountryCode = config.phoneCountryCode;
    this._phoneNumber = config.phoneNumber;
    this._postalCode = config.postalCode;
    this._province = config.province;
    this._state = config.state;
    this._stateInscription = config.stateInscription;
    this._streetName = config.streetName;
    this._streetNumber = config.streetNumber;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: false, required: false
  private _address = new OspGatewayAddressActionVerificationAddressList(this, "address", false);
  public get address() {
    return this._address;
  }

  // address_key - computed: true, optional: true, required: false
  private _addressKey?: string; 
  public get addressKey() {
    return this.getStringAttribute('address_key');
  }
  public set addressKey(value: string) {
    this._addressKey = value;
  }
  public resetAddressKey() {
    this._addressKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressKeyInput() {
    return this._addressKey;
  }

  // city - computed: true, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // company_name - computed: true, optional: true, required: false
  private _companyName?: string; 
  public get companyName() {
    return this.getStringAttribute('company_name');
  }
  public set companyName(value: string) {
    this._companyName = value;
  }
  public resetCompanyName() {
    this._companyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyNameInput() {
    return this._companyName;
  }

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

  // contributor_class - computed: true, optional: true, required: false
  private _contributorClass?: string; 
  public get contributorClass() {
    return this.getStringAttribute('contributor_class');
  }
  public set contributorClass(value: string) {
    this._contributorClass = value;
  }
  public resetContributorClass() {
    this._contributorClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contributorClassInput() {
    return this._contributorClass;
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

  // county - computed: true, optional: true, required: false
  private _county?: string; 
  public get county() {
    return this.getStringAttribute('county');
  }
  public set county(value: string) {
    this._county = value;
  }
  public resetCounty() {
    this._county = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countyInput() {
    return this._county;
  }

  // department_name - computed: true, optional: true, required: false
  private _departmentName?: string; 
  public get departmentName() {
    return this.getStringAttribute('department_name');
  }
  public set departmentName(value: string) {
    this._departmentName = value;
  }
  public resetDepartmentName() {
    this._departmentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get departmentNameInput() {
    return this._departmentName;
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

  // first_name - computed: true, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
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

  // internal_number - computed: true, optional: true, required: false
  private _internalNumber?: string; 
  public get internalNumber() {
    return this.getStringAttribute('internal_number');
  }
  public set internalNumber(value: string) {
    this._internalNumber = value;
  }
  public resetInternalNumber() {
    this._internalNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalNumberInput() {
    return this._internalNumber;
  }

  // job_title - computed: true, optional: true, required: false
  private _jobTitle?: string; 
  public get jobTitle() {
    return this.getStringAttribute('job_title');
  }
  public set jobTitle(value: string) {
    this._jobTitle = value;
  }
  public resetJobTitle() {
    this._jobTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTitleInput() {
    return this._jobTitle;
  }

  // last_name - computed: true, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // line1 - computed: true, optional: true, required: false
  private _line1?: string; 
  public get line1() {
    return this.getStringAttribute('line1');
  }
  public set line1(value: string) {
    this._line1 = value;
  }
  public resetLine1() {
    this._line1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get line1Input() {
    return this._line1;
  }

  // line2 - computed: true, optional: true, required: false
  private _line2?: string; 
  public get line2() {
    return this.getStringAttribute('line2');
  }
  public set line2(value: string) {
    this._line2 = value;
  }
  public resetLine2() {
    this._line2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get line2Input() {
    return this._line2;
  }

  // line3 - computed: true, optional: true, required: false
  private _line3?: string; 
  public get line3() {
    return this.getStringAttribute('line3');
  }
  public set line3(value: string) {
    this._line3 = value;
  }
  public resetLine3() {
    this._line3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get line3Input() {
    return this._line3;
  }

  // line4 - computed: true, optional: true, required: false
  private _line4?: string; 
  public get line4() {
    return this.getStringAttribute('line4');
  }
  public set line4(value: string) {
    this._line4 = value;
  }
  public resetLine4() {
    this._line4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get line4Input() {
    return this._line4;
  }

  // middle_name - computed: true, optional: true, required: false
  private _middleName?: string; 
  public get middleName() {
    return this.getStringAttribute('middle_name');
  }
  public set middleName(value: string) {
    this._middleName = value;
  }
  public resetMiddleName() {
    this._middleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get middleNameInput() {
    return this._middleName;
  }

  // municipal_inscription - computed: true, optional: true, required: false
  private _municipalInscription?: string; 
  public get municipalInscription() {
    return this.getStringAttribute('municipal_inscription');
  }
  public set municipalInscription(value: string) {
    this._municipalInscription = value;
  }
  public resetMunicipalInscription() {
    this._municipalInscription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get municipalInscriptionInput() {
    return this._municipalInscription;
  }

  // osp_home_region - computed: false, optional: false, required: true
  private _ospHomeRegion?: string; 
  public get ospHomeRegion() {
    return this.getStringAttribute('osp_home_region');
  }
  public set ospHomeRegion(value: string) {
    this._ospHomeRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ospHomeRegionInput() {
    return this._ospHomeRegion;
  }

  // phone_country_code - computed: true, optional: true, required: false
  private _phoneCountryCode?: string; 
  public get phoneCountryCode() {
    return this.getStringAttribute('phone_country_code');
  }
  public set phoneCountryCode(value: string) {
    this._phoneCountryCode = value;
  }
  public resetPhoneCountryCode() {
    this._phoneCountryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneCountryCodeInput() {
    return this._phoneCountryCode;
  }

  // phone_number - computed: true, optional: true, required: false
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }

  // postal_code - computed: true, optional: true, required: false
  private _postalCode?: string; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  public resetPostalCode() {
    this._postalCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // province - computed: true, optional: true, required: false
  private _province?: string; 
  public get province() {
    return this.getStringAttribute('province');
  }
  public set province(value: string) {
    this._province = value;
  }
  public resetProvince() {
    this._province = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provinceInput() {
    return this._province;
  }

  // quality - computed: true, optional: false, required: false
  public get quality() {
    return this.getStringAttribute('quality');
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

  // state_inscription - computed: true, optional: true, required: false
  private _stateInscription?: string; 
  public get stateInscription() {
    return this.getStringAttribute('state_inscription');
  }
  public set stateInscription(value: string) {
    this._stateInscription = value;
  }
  public resetStateInscription() {
    this._stateInscription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInscriptionInput() {
    return this._stateInscription;
  }

  // street_name - computed: true, optional: true, required: false
  private _streetName?: string; 
  public get streetName() {
    return this.getStringAttribute('street_name');
  }
  public set streetName(value: string) {
    this._streetName = value;
  }
  public resetStreetName() {
    this._streetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streetNameInput() {
    return this._streetName;
  }

  // street_number - computed: true, optional: true, required: false
  private _streetNumber?: string; 
  public get streetNumber() {
    return this.getStringAttribute('street_number');
  }
  public set streetNumber(value: string) {
    this._streetNumber = value;
  }
  public resetStreetNumber() {
    this._streetNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streetNumberInput() {
    return this._streetNumber;
  }

  // verification_code - computed: true, optional: false, required: false
  public get verificationCode() {
    return this.getStringAttribute('verification_code');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OspGatewayAddressActionVerificationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OspGatewayAddressActionVerificationTimeouts) {
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
      address_key: cdktf.stringToTerraform(this._addressKey),
      city: cdktf.stringToTerraform(this._city),
      company_name: cdktf.stringToTerraform(this._companyName),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      contributor_class: cdktf.stringToTerraform(this._contributorClass),
      country: cdktf.stringToTerraform(this._country),
      county: cdktf.stringToTerraform(this._county),
      department_name: cdktf.stringToTerraform(this._departmentName),
      email_address: cdktf.stringToTerraform(this._emailAddress),
      first_name: cdktf.stringToTerraform(this._firstName),
      id: cdktf.stringToTerraform(this._id),
      internal_number: cdktf.stringToTerraform(this._internalNumber),
      job_title: cdktf.stringToTerraform(this._jobTitle),
      last_name: cdktf.stringToTerraform(this._lastName),
      line1: cdktf.stringToTerraform(this._line1),
      line2: cdktf.stringToTerraform(this._line2),
      line3: cdktf.stringToTerraform(this._line3),
      line4: cdktf.stringToTerraform(this._line4),
      middle_name: cdktf.stringToTerraform(this._middleName),
      municipal_inscription: cdktf.stringToTerraform(this._municipalInscription),
      osp_home_region: cdktf.stringToTerraform(this._ospHomeRegion),
      phone_country_code: cdktf.stringToTerraform(this._phoneCountryCode),
      phone_number: cdktf.stringToTerraform(this._phoneNumber),
      postal_code: cdktf.stringToTerraform(this._postalCode),
      province: cdktf.stringToTerraform(this._province),
      state: cdktf.stringToTerraform(this._state),
      state_inscription: cdktf.stringToTerraform(this._stateInscription),
      street_name: cdktf.stringToTerraform(this._streetName),
      street_number: cdktf.stringToTerraform(this._streetNumber),
      timeouts: ospGatewayAddressActionVerificationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_key: {
        value: cdktf.stringToHclTerraform(this._addressKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      city: {
        value: cdktf.stringToHclTerraform(this._city),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      company_name: {
        value: cdktf.stringToHclTerraform(this._companyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contributor_class: {
        value: cdktf.stringToHclTerraform(this._contributorClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country: {
        value: cdktf.stringToHclTerraform(this._country),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      county: {
        value: cdktf.stringToHclTerraform(this._county),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      department_name: {
        value: cdktf.stringToHclTerraform(this._departmentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_address: {
        value: cdktf.stringToHclTerraform(this._emailAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_name: {
        value: cdktf.stringToHclTerraform(this._firstName),
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
      internal_number: {
        value: cdktf.stringToHclTerraform(this._internalNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_title: {
        value: cdktf.stringToHclTerraform(this._jobTitle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_name: {
        value: cdktf.stringToHclTerraform(this._lastName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      line1: {
        value: cdktf.stringToHclTerraform(this._line1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      line2: {
        value: cdktf.stringToHclTerraform(this._line2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      line3: {
        value: cdktf.stringToHclTerraform(this._line3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      line4: {
        value: cdktf.stringToHclTerraform(this._line4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      middle_name: {
        value: cdktf.stringToHclTerraform(this._middleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      municipal_inscription: {
        value: cdktf.stringToHclTerraform(this._municipalInscription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      osp_home_region: {
        value: cdktf.stringToHclTerraform(this._ospHomeRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phone_country_code: {
        value: cdktf.stringToHclTerraform(this._phoneCountryCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phone_number: {
        value: cdktf.stringToHclTerraform(this._phoneNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      postal_code: {
        value: cdktf.stringToHclTerraform(this._postalCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      province: {
        value: cdktf.stringToHclTerraform(this._province),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state_inscription: {
        value: cdktf.stringToHclTerraform(this._stateInscription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      street_name: {
        value: cdktf.stringToHclTerraform(this._streetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      street_number: {
        value: cdktf.stringToHclTerraform(this._streetNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: ospGatewayAddressActionVerificationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OspGatewayAddressActionVerificationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
