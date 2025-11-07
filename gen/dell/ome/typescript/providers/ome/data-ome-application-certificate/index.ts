// https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/application_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOmeApplicationCertificateConfig extends cdktf.TerraformMetaArguments {
}
export interface DataOmeApplicationCertificateIssuedBy {
  /**
  * Distinguished Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/application_certificate#distinguished_name DataOmeApplicationCertificate#distinguished_name}
  */
  readonly distinguishedName?: string;
}

export function dataOmeApplicationCertificateIssuedByToTerraform(struct?: DataOmeApplicationCertificateIssuedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distinguished_name: cdktf.stringToTerraform(struct!.distinguishedName),
  }
}


export function dataOmeApplicationCertificateIssuedByToHclTerraform(struct?: DataOmeApplicationCertificateIssuedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distinguished_name: {
      value: cdktf.stringToHclTerraform(struct!.distinguishedName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOmeApplicationCertificateIssuedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOmeApplicationCertificateIssuedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distinguishedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.distinguishedName = this._distinguishedName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeApplicationCertificateIssuedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._distinguishedName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._distinguishedName = value.distinguishedName;
    }
  }

  // business_name - computed: true, optional: false, required: false
  public get businessName() {
    return this.getStringAttribute('business_name');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // department_name - computed: true, optional: false, required: false
  public get departmentName() {
    return this.getStringAttribute('department_name');
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

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // locality - computed: true, optional: false, required: false
  public get locality() {
    return this.getStringAttribute('locality');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subject_alternate_names - computed: true, optional: false, required: false
  public get subjectAlternateNames() {
    return this.getListAttribute('subject_alternate_names');
  }
}
export interface DataOmeApplicationCertificateIssuedTo {
  /**
  * Distinguished Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/application_certificate#distinguished_name DataOmeApplicationCertificate#distinguished_name}
  */
  readonly distinguishedName?: string;
}

export function dataOmeApplicationCertificateIssuedToToTerraform(struct?: DataOmeApplicationCertificateIssuedTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distinguished_name: cdktf.stringToTerraform(struct!.distinguishedName),
  }
}


export function dataOmeApplicationCertificateIssuedToToHclTerraform(struct?: DataOmeApplicationCertificateIssuedTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distinguished_name: {
      value: cdktf.stringToHclTerraform(struct!.distinguishedName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOmeApplicationCertificateIssuedToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOmeApplicationCertificateIssuedTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distinguishedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.distinguishedName = this._distinguishedName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeApplicationCertificateIssuedTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._distinguishedName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._distinguishedName = value.distinguishedName;
    }
  }

  // business_name - computed: true, optional: false, required: false
  public get businessName() {
    return this.getStringAttribute('business_name');
  }

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // department_name - computed: true, optional: false, required: false
  public get departmentName() {
    return this.getStringAttribute('department_name');
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

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // locality - computed: true, optional: false, required: false
  public get locality() {
    return this.getStringAttribute('locality');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subject_alternate_names - computed: true, optional: false, required: false
  public get subjectAlternateNames() {
    return this.getListAttribute('subject_alternate_names');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/application_certificate ome_application_certificate}
*/
export class DataOmeApplicationCertificate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ome_application_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOmeApplicationCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOmeApplicationCertificate to import
  * @param importFromId The id of the existing DataOmeApplicationCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/application_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOmeApplicationCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ome_application_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/application_certificate ome_application_certificate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOmeApplicationCertificateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOmeApplicationCertificateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ome_application_certificate',
      terraformGeneratorMetadata: {
        providerName: 'ome',
        providerVersion: '1.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issued_by - computed: true, optional: false, required: false
  private _issuedBy = new DataOmeApplicationCertificateIssuedByOutputReference(this, "issued_by");
  public get issuedBy() {
    return this._issuedBy;
  }

  // issued_to - computed: true, optional: false, required: false
  private _issuedTo = new DataOmeApplicationCertificateIssuedToOutputReference(this, "issued_to");
  public get issuedTo() {
    return this._issuedTo;
  }

  // valid_from - computed: true, optional: false, required: false
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }

  // valid_to - computed: true, optional: false, required: false
  public get validTo() {
    return this.getStringAttribute('valid_to');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
