// https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKeyfactorCertificateTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * An array containing the list of Keyfactor Command security templates—as strings—that have been granted enroll permission on the template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate_template#allowed_requesters DataKeyfactorCertificateTemplate#allowed_requesters}
  */
  readonly allowedRequesters?: string[];
  /**
  * A string containing the common name (short name) of the template. This name typically does not contain spaces. For a template created using a Microsoft management tool, this will be the Microsoft template name. This field is populated from Active Directory and is not configurable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate_template#short_name DataKeyfactorCertificateTemplate#short_name}
  */
  readonly shortName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate_template keyfactor_certificate_template}
*/
export class DataKeyfactorCertificateTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keyfactor_certificate_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKeyfactorCertificateTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKeyfactorCertificateTemplate to import
  * @param importFromId The id of the existing DataKeyfactorCertificateTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKeyfactorCertificateTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keyfactor_certificate_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs/data-sources/certificate_template keyfactor_certificate_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKeyfactorCertificateTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataKeyfactorCertificateTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'keyfactor_certificate_template',
      terraformGeneratorMetadata: {
        providerName: 'keyfactor',
        providerVersion: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedRequesters = config.allowedRequesters;
    this._shortName = config.shortName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_enrollment_types - computed: true, optional: false, required: false
  public get allowedEnrollmentTypes() {
    return this.getNumberAttribute('allowed_enrollment_types');
  }

  // allowed_requesters - computed: true, optional: true, required: false
  private _allowedRequesters?: string[]; 
  public get allowedRequesters() {
    return this.getListAttribute('allowed_requesters');
  }
  public set allowedRequesters(value: string[]) {
    this._allowedRequesters = value;
  }
  public resetAllowedRequesters() {
    this._allowedRequesters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRequestersInput() {
    return this._allowedRequesters;
  }

  // enrollment_fields - computed: true, optional: false, required: false
  private _enrollmentFields = new cdktf.StringMapList(this, "enrollment_fields", false);
  public get enrollmentFields() {
    return this._enrollmentFields;
  }

  // forest_root - computed: true, optional: false, required: false
  public get forestRoot() {
    return this.getStringAttribute('forest_root');
  }

  // friendly_name - computed: true, optional: false, required: false
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // key_archival - computed: true, optional: false, required: false
  public get keyArchival() {
    return this.getBooleanAttribute('key_archival');
  }

  // key_retention - computed: true, optional: false, required: false
  public get keyRetention() {
    return this.getStringAttribute('key_retention');
  }

  // key_retention_days - computed: true, optional: false, required: false
  public get keyRetentionDays() {
    return this.getNumberAttribute('key_retention_days');
  }

  // key_size - computed: true, optional: false, required: false
  public get keySize() {
    return this.getStringAttribute('key_size');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }

  // key_usage - computed: true, optional: false, required: false
  public get keyUsage() {
    return this.getNumberAttribute('key_usage');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // oid - computed: true, optional: false, required: false
  public get oid() {
    return this.getStringAttribute('oid');
  }

  // requires_approval - computed: true, optional: false, required: false
  public get requiresApproval() {
    return this.getBooleanAttribute('requires_approval');
  }

  // rfc_enforcement - computed: true, optional: false, required: false
  public get rfcEnforcement() {
    return this.getBooleanAttribute('rfc_enforcement');
  }

  // short_name - computed: false, optional: false, required: true
  private _shortName?: string; 
  public get shortName() {
    return this.getStringAttribute('short_name');
  }
  public set shortName(value: string) {
    this._shortName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shortNameInput() {
    return this._shortName;
  }

  // template_regexes - computed: true, optional: false, required: false
  public get templateRegexes() {
    return this.getListAttribute('template_regexes');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_requesters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedRequesters),
      short_name: cdktf.stringToTerraform(this._shortName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_requesters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedRequesters),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      short_name: {
        value: cdktf.stringToHclTerraform(this._shortName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
