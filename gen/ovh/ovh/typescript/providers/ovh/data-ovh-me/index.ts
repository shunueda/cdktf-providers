// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/me
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhMeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/me#id DataOvhMe#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataOvhMeCurrency {
}

export function dataOvhMeCurrencyToTerraform(struct?: DataOvhMeCurrency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhMeCurrencyToHclTerraform(struct?: DataOvhMeCurrency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhMeCurrencyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOvhMeCurrency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhMeCurrency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // symbol - computed: true, optional: false, required: false
  public get symbol() {
    return this.getStringAttribute('symbol');
  }
}

export class DataOvhMeCurrencyList extends cdktf.ComplexList {

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
  public get(index: number): DataOvhMeCurrencyOutputReference {
    return new DataOvhMeCurrencyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/me ovh_me}
*/
export class DataOvhMe extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_me";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhMe resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhMe to import
  * @param importFromId The id of the existing DataOvhMe that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/me#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhMe to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_me", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/data-sources/me ovh_me} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhMeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOvhMeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ovh_me',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.10.0',
        providerVersionConstraint: '2.10.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // area - computed: true, optional: false, required: false
  public get area() {
    return this.getStringAttribute('area');
  }

  // birth_city - computed: true, optional: false, required: false
  public get birthCity() {
    return this.getStringAttribute('birth_city');
  }

  // birth_day - computed: true, optional: false, required: false
  public get birthDay() {
    return this.getStringAttribute('birth_day');
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // company_national_identification_number - computed: true, optional: false, required: false
  public get companyNationalIdentificationNumber() {
    return this.getStringAttribute('company_national_identification_number');
  }

  // corporation_type - computed: true, optional: false, required: false
  public get corporationType() {
    return this.getStringAttribute('corporation_type');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // currency - computed: true, optional: false, required: false
  private _currency = new DataOvhMeCurrencyList(this, "currency", false);
  public get currency() {
    return this._currency;
  }

  // customer_code - computed: true, optional: false, required: false
  public get customerCode() {
    return this.getStringAttribute('customer_code');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // fax - computed: true, optional: false, required: false
  public get fax() {
    return this.getStringAttribute('fax');
  }

  // firstname - computed: true, optional: false, required: false
  public get firstname() {
    return this.getStringAttribute('firstname');
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

  // italian_sdi - computed: true, optional: false, required: false
  public get italianSdi() {
    return this.getStringAttribute('italian_sdi');
  }

  // language - computed: true, optional: false, required: false
  public get language() {
    return this.getStringAttribute('language');
  }

  // legalform - computed: true, optional: false, required: false
  public get legalform() {
    return this.getStringAttribute('legalform');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // national_identification_number - computed: true, optional: false, required: false
  public get nationalIdentificationNumber() {
    return this.getStringAttribute('national_identification_number');
  }

  // nichandle - computed: true, optional: false, required: false
  public get nichandle() {
    return this.getStringAttribute('nichandle');
  }

  // organisation - computed: true, optional: false, required: false
  public get organisation() {
    return this.getStringAttribute('organisation');
  }

  // ovh_company - computed: true, optional: false, required: false
  public get ovhCompany() {
    return this.getStringAttribute('ovh_company');
  }

  // ovh_subsidiary - computed: true, optional: false, required: false
  public get ovhSubsidiary() {
    return this.getStringAttribute('ovh_subsidiary');
  }

  // phone - computed: true, optional: false, required: false
  public get phone() {
    return this.getStringAttribute('phone');
  }

  // phone_country - computed: true, optional: false, required: false
  public get phoneCountry() {
    return this.getStringAttribute('phone_country');
  }

  // sex - computed: true, optional: false, required: false
  public get sex() {
    return this.getStringAttribute('sex');
  }

  // spare_email - computed: true, optional: false, required: false
  public get spareEmail() {
    return this.getStringAttribute('spare_email');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // urn - computed: true, optional: false, required: false
  public get urn() {
    return this.getStringAttribute('urn');
  }

  // vat - computed: true, optional: false, required: false
  public get vat() {
    return this.getStringAttribute('vat');
  }

  // zip - computed: true, optional: false, required: false
  public get zip() {
    return this.getStringAttribute('zip');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
