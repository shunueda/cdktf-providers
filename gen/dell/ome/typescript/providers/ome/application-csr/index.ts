// https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/application_csr
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationCsrConfig extends cdktf.TerraformMetaArguments {
  /**
  * CSR specifications. Terraform will replace (delete and recreate) this resource if this attribute is modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/application_csr#specs ApplicationCsr#specs}
  */
  readonly specs: ApplicationCsrSpecs;
}
export interface ApplicationCsrSpecs {
  /**
  * Business Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/application_csr#business_name ApplicationCsr#business_name}
  */
  readonly businessName: string;
  /**
  * Country of the business.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/application_csr#country ApplicationCsr#country}
  */
  readonly country: string;
  /**
  * Department Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/application_csr#department_name ApplicationCsr#department_name}
  */
  readonly departmentName: string;
  /**
  * Distinguished Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/application_csr#distinguished_name ApplicationCsr#distinguished_name}
  */
  readonly distinguishedName: string;
  /**
  * Email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/application_csr#email ApplicationCsr#email}
  */
  readonly email: string;
  /**
  * Locality of the business.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/application_csr#locality ApplicationCsr#locality}
  */
  readonly locality: string;
  /**
  * State of the business.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/application_csr#state ApplicationCsr#state}
  */
  readonly state: string;
  /**
  * Subject Alternate names. Maximum 4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/application_csr#subject_alternate_names ApplicationCsr#subject_alternate_names}
  */
  readonly subjectAlternateNames?: string[];
}

export function applicationCsrSpecsToTerraform(struct?: ApplicationCsrSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    business_name: cdktf.stringToTerraform(struct!.businessName),
    country: cdktf.stringToTerraform(struct!.country),
    department_name: cdktf.stringToTerraform(struct!.departmentName),
    distinguished_name: cdktf.stringToTerraform(struct!.distinguishedName),
    email: cdktf.stringToTerraform(struct!.email),
    locality: cdktf.stringToTerraform(struct!.locality),
    state: cdktf.stringToTerraform(struct!.state),
    subject_alternate_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjectAlternateNames),
  }
}


export function applicationCsrSpecsToHclTerraform(struct?: ApplicationCsrSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    business_name: {
      value: cdktf.stringToHclTerraform(struct!.businessName),
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
    department_name: {
      value: cdktf.stringToHclTerraform(struct!.departmentName),
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
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
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
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_alternate_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subjectAlternateNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationCsrSpecsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationCsrSpecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._businessName !== undefined) {
      hasAnyValues = true;
      internalValueResult.businessName = this._businessName;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._departmentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.departmentName = this._departmentName;
    }
    if (this._distinguishedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.distinguishedName = this._distinguishedName;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._subjectAlternateNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAlternateNames = this._subjectAlternateNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationCsrSpecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._businessName = undefined;
      this._country = undefined;
      this._departmentName = undefined;
      this._distinguishedName = undefined;
      this._email = undefined;
      this._locality = undefined;
      this._state = undefined;
      this._subjectAlternateNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._businessName = value.businessName;
      this._country = value.country;
      this._departmentName = value.departmentName;
      this._distinguishedName = value.distinguishedName;
      this._email = value.email;
      this._locality = value.locality;
      this._state = value.state;
      this._subjectAlternateNames = value.subjectAlternateNames;
    }
  }

  // business_name - computed: false, optional: false, required: true
  private _businessName?: string; 
  public get businessName() {
    return this.getStringAttribute('business_name');
  }
  public set businessName(value: string) {
    this._businessName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get businessNameInput() {
    return this._businessName;
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

  // department_name - computed: false, optional: false, required: true
  private _departmentName?: string; 
  public get departmentName() {
    return this.getStringAttribute('department_name');
  }
  public set departmentName(value: string) {
    this._departmentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get departmentNameInput() {
    return this._departmentName;
  }

  // distinguished_name - computed: false, optional: false, required: true
  private _distinguishedName?: string; 
  public get distinguishedName() {
    return this.getStringAttribute('distinguished_name');
  }
  public set distinguishedName(value: string) {
    this._distinguishedName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distinguishedNameInput() {
    return this._distinguishedName;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // locality - computed: false, optional: false, required: true
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // subject_alternate_names - computed: false, optional: true, required: false
  private _subjectAlternateNames?: string[]; 
  public get subjectAlternateNames() {
    return this.getListAttribute('subject_alternate_names');
  }
  public set subjectAlternateNames(value: string[]) {
    this._subjectAlternateNames = value;
  }
  public resetSubjectAlternateNames() {
    this._subjectAlternateNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternateNamesInput() {
    return this._subjectAlternateNames;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/application_csr ome_application_csr}
*/
export class ApplicationCsr extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ome_application_csr";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplicationCsr resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplicationCsr to import
  * @param importFromId The id of the existing ApplicationCsr that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/application_csr#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplicationCsr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ome_application_csr", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/application_csr ome_application_csr} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationCsrConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationCsrConfig) {
    super(scope, id, {
      terraformResourceType: 'ome_application_csr',
      terraformGeneratorMetadata: {
        providerName: 'ome',
        providerVersion: '1.2.3',
        providerVersionConstraint: '1.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._specs.internalValue = config.specs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // csr - computed: true, optional: false, required: false
  public get csr() {
    return this.getStringAttribute('csr');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // specs - computed: false, optional: false, required: true
  private _specs = new ApplicationCsrSpecsOutputReference(this, "specs");
  public get specs() {
    return this._specs;
  }
  public putSpecs(value: ApplicationCsrSpecs) {
    this._specs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specsInput() {
    return this._specs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      specs: applicationCsrSpecsToTerraform(this._specs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      specs: {
        value: applicationCsrSpecsToHclTerraform(this._specs.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationCsrSpecs",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
