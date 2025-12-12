// https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/resources/license_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LicensePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow unknown licenses within the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/resources/license_policy#allow_unknown_licenses LicensePolicy#allow_unknown_licenses}
  */
  readonly allowUnknownLicenses?: boolean | cdktf.IResolvable;
  /**
  * The description of the license policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/resources/license_policy#description LicensePolicy#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/resources/license_policy#id LicensePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the license policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/resources/license_policy#name LicensePolicy#name}
  */
  readonly name: string;
  /**
  * On violation of the license policy, quarantine violating packages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/resources/license_policy#on_violation_quarantine LicensePolicy#on_violation_quarantine}
  */
  readonly onViolationQuarantine?: boolean | cdktf.IResolvable;
  /**
  * Organization to which this policy belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/resources/license_policy#organization LicensePolicy#organization}
  */
  readonly organization: string;
  /**
  * A search / filter string of packages to include in the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/resources/license_policy#package_query_string LicensePolicy#package_query_string}
  */
  readonly packageQueryString?: string;
  /**
  * The licenses to deny.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/resources/license_policy#spdx_identifiers LicensePolicy#spdx_identifiers}
  */
  readonly spdxIdentifiers: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/resources/license_policy cloudsmith_license_policy}
*/
export class LicensePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudsmith_license_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LicensePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LicensePolicy to import
  * @param importFromId The id of the existing LicensePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/resources/license_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LicensePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudsmith_license_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.67/docs/resources/license_policy cloudsmith_license_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LicensePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: LicensePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudsmith_license_policy',
      terraformGeneratorMetadata: {
        providerName: 'cloudsmith',
        providerVersion: '0.0.67',
        providerVersionConstraint: '0.0.67'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowUnknownLicenses = config.allowUnknownLicenses;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._onViolationQuarantine = config.onViolationQuarantine;
    this._organization = config.organization;
    this._packageQueryString = config.packageQueryString;
    this._spdxIdentifiers = config.spdxIdentifiers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_unknown_licenses - computed: true, optional: true, required: false
  private _allowUnknownLicenses?: boolean | cdktf.IResolvable; 
  public get allowUnknownLicenses() {
    return this.getBooleanAttribute('allow_unknown_licenses');
  }
  public set allowUnknownLicenses(value: boolean | cdktf.IResolvable) {
    this._allowUnknownLicenses = value;
  }
  public resetAllowUnknownLicenses() {
    this._allowUnknownLicenses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnknownLicensesInput() {
    return this._allowUnknownLicenses;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // on_violation_quarantine - computed: true, optional: true, required: false
  private _onViolationQuarantine?: boolean | cdktf.IResolvable; 
  public get onViolationQuarantine() {
    return this.getBooleanAttribute('on_violation_quarantine');
  }
  public set onViolationQuarantine(value: boolean | cdktf.IResolvable) {
    this._onViolationQuarantine = value;
  }
  public resetOnViolationQuarantine() {
    this._onViolationQuarantine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onViolationQuarantineInput() {
    return this._onViolationQuarantine;
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // package_query_string - computed: false, optional: true, required: false
  private _packageQueryString?: string; 
  public get packageQueryString() {
    return this.getStringAttribute('package_query_string');
  }
  public set packageQueryString(value: string) {
    this._packageQueryString = value;
  }
  public resetPackageQueryString() {
    this._packageQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageQueryStringInput() {
    return this._packageQueryString;
  }

  // slug_perm - computed: true, optional: false, required: false
  public get slugPerm() {
    return this.getStringAttribute('slug_perm');
  }

  // spdx_identifiers - computed: false, optional: false, required: true
  private _spdxIdentifiers?: string[]; 
  public get spdxIdentifiers() {
    return cdktf.Fn.tolist(this.getListAttribute('spdx_identifiers'));
  }
  public set spdxIdentifiers(value: string[]) {
    this._spdxIdentifiers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spdxIdentifiersInput() {
    return this._spdxIdentifiers;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_unknown_licenses: cdktf.booleanToTerraform(this._allowUnknownLicenses),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      on_violation_quarantine: cdktf.booleanToTerraform(this._onViolationQuarantine),
      organization: cdktf.stringToTerraform(this._organization),
      package_query_string: cdktf.stringToTerraform(this._packageQueryString),
      spdx_identifiers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._spdxIdentifiers),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_unknown_licenses: {
        value: cdktf.booleanToHclTerraform(this._allowUnknownLicenses),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_violation_quarantine: {
        value: cdktf.booleanToHclTerraform(this._onViolationQuarantine),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_query_string: {
        value: cdktf.stringToHclTerraform(this._packageQueryString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spdx_identifiers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._spdxIdentifiers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
