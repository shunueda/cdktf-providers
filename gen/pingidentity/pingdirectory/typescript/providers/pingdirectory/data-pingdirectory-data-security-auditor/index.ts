// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/data_security_auditor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryDataSecurityAuditorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/data_security_auditor#name DataPingdirectoryDataSecurityAuditor#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/data_security_auditor pingdirectory_data_security_auditor}
*/
export class DataPingdirectoryDataSecurityAuditor extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_data_security_auditor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryDataSecurityAuditor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryDataSecurityAuditor to import
  * @param importFromId The id of the existing DataPingdirectoryDataSecurityAuditor that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/data_security_auditor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryDataSecurityAuditor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_data_security_auditor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/data_security_auditor pingdirectory_data_security_auditor} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryDataSecurityAuditorConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryDataSecurityAuditorConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_data_security_auditor',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_expiration_warning_interval - computed: true, optional: false, required: false
  public get accountExpirationWarningInterval() {
    return this.getStringAttribute('account_expiration_warning_interval');
  }

  // audit_backend - computed: true, optional: false, required: false
  public get auditBackend() {
    return cdktf.Fn.tolist(this.getListAttribute('audit_backend'));
  }

  // audit_severity - computed: true, optional: false, required: false
  public get auditSeverity() {
    return this.getStringAttribute('audit_severity');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // extension_argument - computed: true, optional: false, required: false
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }

  // extension_class - computed: true, optional: false, required: false
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return cdktf.Fn.tolist(this.getListAttribute('filter'));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_account_error_interval - computed: true, optional: false, required: false
  public get idleAccountErrorInterval() {
    return this.getStringAttribute('idle_account_error_interval');
  }

  // idle_account_warning_interval - computed: true, optional: false, required: false
  public get idleAccountWarningInterval() {
    return this.getStringAttribute('idle_account_warning_interval');
  }

  // include_attribute - computed: true, optional: false, required: false
  public get includeAttribute() {
    return cdktf.Fn.tolist(this.getListAttribute('include_attribute'));
  }

  // include_privilege - computed: true, optional: false, required: false
  public get includePrivilege() {
    return cdktf.Fn.tolist(this.getListAttribute('include_privilege'));
  }

  // maximum_idle_time - computed: true, optional: false, required: false
  public get maximumIdleTime() {
    return this.getStringAttribute('maximum_idle_time');
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

  // never_logged_in_account_error_interval - computed: true, optional: false, required: false
  public get neverLoggedInAccountErrorInterval() {
    return this.getStringAttribute('never_logged_in_account_error_interval');
  }

  // never_logged_in_account_warning_interval - computed: true, optional: false, required: false
  public get neverLoggedInAccountWarningInterval() {
    return this.getStringAttribute('never_logged_in_account_warning_interval');
  }

  // password_evaluation_age - computed: true, optional: false, required: false
  public get passwordEvaluationAge() {
    return this.getStringAttribute('password_evaluation_age');
  }

  // report_file - computed: true, optional: false, required: false
  public get reportFile() {
    return this.getStringAttribute('report_file');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // weak_crypt_encoding - computed: true, optional: false, required: false
  public get weakCryptEncoding() {
    return cdktf.Fn.tolist(this.getListAttribute('weak_crypt_encoding'));
  }

  // weak_password_storage_scheme - computed: true, optional: false, required: false
  public get weakPasswordStorageScheme() {
    return cdktf.Fn.tolist(this.getListAttribute('weak_password_storage_scheme'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
