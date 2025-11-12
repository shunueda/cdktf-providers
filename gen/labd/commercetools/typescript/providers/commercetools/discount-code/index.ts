// https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/discount_code
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiscountCodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The referenced matching cart discounts can be applied to the cart once the DiscountCode is added
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/discount_code#cart_discounts DiscountCode#cart_discounts}
  */
  readonly cartDiscounts: string[];
  /**
  * Unique identifier of this discount code. This value is added to the cart to enable the related cart discounts in the cart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/discount_code#code DiscountCode#code}
  */
  readonly code: string;
  /**
  * [LocalizedString](https://docs.commercetools.com/api/types#localizedstring)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/discount_code#description DiscountCode#description}
  */
  readonly description?: { [key: string]: string };
  /**
  * The groups to which this discount code belong
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/discount_code#groups DiscountCode#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/discount_code#id DiscountCode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/discount_code#is_active DiscountCode#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * The discount code can only be applied the specified times overall. Note that due to an engine constraint 0 cannot be set for this field, so possible values are either larger than 0 or not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/discount_code#max_applications DiscountCode#max_applications}
  */
  readonly maxApplications?: number;
  /**
  * The discount code can only be applied the specified times per customer. Note that due to an engine constraint 0 cannot be set for this field, so possible values are either larger than 0 or not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/discount_code#max_applications_per_customer DiscountCode#max_applications_per_customer}
  */
  readonly maxApplicationsPerCustomer?: number;
  /**
  * [LocalizedString](https://docs.commercetools.com/api/types#localizedstring)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/discount_code#name DiscountCode#name}
  */
  readonly name?: { [key: string]: string };
  /**
  * [Cart Predicate](https://docs.commercetools.com/api/projects/predicates#cart-predicates)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/discount_code#predicate DiscountCode#predicate}
  */
  readonly predicate?: string;
  /**
  * The time from which the discount can be applied on a cart. Before that time the code is invalid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/discount_code#valid_from DiscountCode#valid_from}
  */
  readonly validFrom?: string;
  /**
  * The time until the discount can be applied on a cart. After that time the code is invalid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/discount_code#valid_until DiscountCode#valid_until}
  */
  readonly validUntil?: string;
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/discount_code#custom DiscountCode#custom}
  */
  readonly custom?: DiscountCodeCustom;
}
export interface DiscountCodeCustom {
  /**
  * Custom fields for this resource. Note that the values need to be provided as JSON encoded strings: `my-value = jsonencode({"key": "value"})`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/discount_code#fields DiscountCode#fields}
  */
  readonly fields?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/discount_code#type_id DiscountCode#type_id}
  */
  readonly typeId: string;
}

export function discountCodeCustomToTerraform(struct?: DiscountCodeCustomOutputReference | DiscountCodeCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fields),
    type_id: cdktf.stringToTerraform(struct!.typeId),
  }
}


export function discountCodeCustomToHclTerraform(struct?: DiscountCodeCustomOutputReference | DiscountCodeCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fields),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type_id: {
      value: cdktf.stringToHclTerraform(struct!.typeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscountCodeCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscountCodeCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._typeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeId = this._typeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscountCodeCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fields = undefined;
      this._typeId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fields = value.fields;
      this._typeId = value.typeId;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: { [key: string]: string }; 
  public get fields() {
    return this.getStringMapAttribute('fields');
  }
  public set fields(value: { [key: string]: string }) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // type_id - computed: false, optional: false, required: true
  private _typeId?: string; 
  public get typeId() {
    return this.getStringAttribute('type_id');
  }
  public set typeId(value: string) {
    this._typeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIdInput() {
    return this._typeId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/discount_code commercetools_discount_code}
*/
export class DiscountCode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commercetools_discount_code";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DiscountCode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiscountCode to import
  * @param importFromId The id of the existing DiscountCode that should be imported. Refer to the {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/discount_code#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiscountCode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commercetools_discount_code", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/discount_code commercetools_discount_code} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiscountCodeConfig
  */
  public constructor(scope: Construct, id: string, config: DiscountCodeConfig) {
    super(scope, id, {
      terraformResourceType: 'commercetools_discount_code',
      terraformGeneratorMetadata: {
        providerName: 'commercetools',
        providerVersion: '1.21.1',
        providerVersionConstraint: '1.21.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cartDiscounts = config.cartDiscounts;
    this._code = config.code;
    this._description = config.description;
    this._groups = config.groups;
    this._id = config.id;
    this._isActive = config.isActive;
    this._maxApplications = config.maxApplications;
    this._maxApplicationsPerCustomer = config.maxApplicationsPerCustomer;
    this._name = config.name;
    this._predicate = config.predicate;
    this._validFrom = config.validFrom;
    this._validUntil = config.validUntil;
    this._custom.internalValue = config.custom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cart_discounts - computed: false, optional: false, required: true
  private _cartDiscounts?: string[]; 
  public get cartDiscounts() {
    return this.getListAttribute('cart_discounts');
  }
  public set cartDiscounts(value: string[]) {
    this._cartDiscounts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cartDiscountsInput() {
    return this._cartDiscounts;
  }

  // code - computed: false, optional: false, required: true
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // description - computed: false, optional: true, required: false
  private _description?: { [key: string]: string }; 
  public get description() {
    return this.getStringMapAttribute('description');
  }
  public set description(value: { [key: string]: string }) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
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

  // is_active - computed: false, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // max_applications - computed: false, optional: true, required: false
  private _maxApplications?: number; 
  public get maxApplications() {
    return this.getNumberAttribute('max_applications');
  }
  public set maxApplications(value: number) {
    this._maxApplications = value;
  }
  public resetMaxApplications() {
    this._maxApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxApplicationsInput() {
    return this._maxApplications;
  }

  // max_applications_per_customer - computed: false, optional: true, required: false
  private _maxApplicationsPerCustomer?: number; 
  public get maxApplicationsPerCustomer() {
    return this.getNumberAttribute('max_applications_per_customer');
  }
  public set maxApplicationsPerCustomer(value: number) {
    this._maxApplicationsPerCustomer = value;
  }
  public resetMaxApplicationsPerCustomer() {
    this._maxApplicationsPerCustomer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxApplicationsPerCustomerInput() {
    return this._maxApplicationsPerCustomer;
  }

  // name - computed: false, optional: true, required: false
  private _name?: { [key: string]: string }; 
  public get name() {
    return this.getStringMapAttribute('name');
  }
  public set name(value: { [key: string]: string }) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // predicate - computed: false, optional: true, required: false
  private _predicate?: string; 
  public get predicate() {
    return this.getStringAttribute('predicate');
  }
  public set predicate(value: string) {
    this._predicate = value;
  }
  public resetPredicate() {
    this._predicate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicateInput() {
    return this._predicate;
  }

  // valid_from - computed: false, optional: true, required: false
  private _validFrom?: string; 
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }
  public set validFrom(value: string) {
    this._validFrom = value;
  }
  public resetValidFrom() {
    this._validFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validFromInput() {
    return this._validFrom;
  }

  // valid_until - computed: false, optional: true, required: false
  private _validUntil?: string; 
  public get validUntil() {
    return this.getStringAttribute('valid_until');
  }
  public set validUntil(value: string) {
    this._validUntil = value;
  }
  public resetValidUntil() {
    this._validUntil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validUntilInput() {
    return this._validUntil;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new DiscountCodeCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DiscountCodeCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cart_discounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cartDiscounts),
      code: cdktf.stringToTerraform(this._code),
      description: cdktf.hashMapper(cdktf.stringToTerraform)(this._description),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      id: cdktf.stringToTerraform(this._id),
      is_active: cdktf.booleanToTerraform(this._isActive),
      max_applications: cdktf.numberToTerraform(this._maxApplications),
      max_applications_per_customer: cdktf.numberToTerraform(this._maxApplicationsPerCustomer),
      name: cdktf.hashMapper(cdktf.stringToTerraform)(this._name),
      predicate: cdktf.stringToTerraform(this._predicate),
      valid_from: cdktf.stringToTerraform(this._validFrom),
      valid_until: cdktf.stringToTerraform(this._validUntil),
      custom: discountCodeCustomToTerraform(this._custom.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cart_discounts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cartDiscounts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      code: {
        value: cdktf.stringToHclTerraform(this._code),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._description),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_applications: {
        value: cdktf.numberToHclTerraform(this._maxApplications),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_applications_per_customer: {
        value: cdktf.numberToHclTerraform(this._maxApplicationsPerCustomer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._name),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      predicate: {
        value: cdktf.stringToHclTerraform(this._predicate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      valid_from: {
        value: cdktf.stringToHclTerraform(this._validFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      valid_until: {
        value: cdktf.stringToHclTerraform(this._validUntil),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom: {
        value: discountCodeCustomToHclTerraform(this._custom.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscountCodeCustomList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
