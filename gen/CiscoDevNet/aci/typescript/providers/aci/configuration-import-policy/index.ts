// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_import_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigurationImportPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_import_policy#admin_st ConfigurationImportPolicy#admin_st}
  */
  readonly adminSt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_import_policy#annotation ConfigurationImportPolicy#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_import_policy#description ConfigurationImportPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_import_policy#fail_on_decrypt_errors ConfigurationImportPolicy#fail_on_decrypt_errors}
  */
  readonly failOnDecryptErrors?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_import_policy#file_name ConfigurationImportPolicy#file_name}
  */
  readonly fileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_import_policy#id ConfigurationImportPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_import_policy#import_mode ConfigurationImportPolicy#import_mode}
  */
  readonly importMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_import_policy#import_type ConfigurationImportPolicy#import_type}
  */
  readonly importType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_import_policy#name ConfigurationImportPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_import_policy#name_alias ConfigurationImportPolicy#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_import_policy#relation_config_rs_import_source ConfigurationImportPolicy#relation_config_rs_import_source}
  */
  readonly relationConfigRsImportSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_import_policy#relation_config_rs_remote_path ConfigurationImportPolicy#relation_config_rs_remote_path}
  */
  readonly relationConfigRsRemotePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_import_policy#relation_trig_rs_triggerable ConfigurationImportPolicy#relation_trig_rs_triggerable}
  */
  readonly relationTrigRsTriggerable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_import_policy#snapshot ConfigurationImportPolicy#snapshot}
  */
  readonly snapshot?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_import_policy aci_configuration_import_policy}
*/
export class ConfigurationImportPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_configuration_import_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigurationImportPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigurationImportPolicy to import
  * @param importFromId The id of the existing ConfigurationImportPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_import_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigurationImportPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_configuration_import_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/configuration_import_policy aci_configuration_import_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigurationImportPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigurationImportPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_configuration_import_policy',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminSt = config.adminSt;
    this._annotation = config.annotation;
    this._description = config.description;
    this._failOnDecryptErrors = config.failOnDecryptErrors;
    this._fileName = config.fileName;
    this._id = config.id;
    this._importMode = config.importMode;
    this._importType = config.importType;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._relationConfigRsImportSource = config.relationConfigRsImportSource;
    this._relationConfigRsRemotePath = config.relationConfigRsRemotePath;
    this._relationTrigRsTriggerable = config.relationTrigRsTriggerable;
    this._snapshot = config.snapshot;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_st - computed: true, optional: true, required: false
  private _adminSt?: string; 
  public get adminSt() {
    return this.getStringAttribute('admin_st');
  }
  public set adminSt(value: string) {
    this._adminSt = value;
  }
  public resetAdminSt() {
    this._adminSt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStInput() {
    return this._adminSt;
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // fail_on_decrypt_errors - computed: true, optional: true, required: false
  private _failOnDecryptErrors?: string; 
  public get failOnDecryptErrors() {
    return this.getStringAttribute('fail_on_decrypt_errors');
  }
  public set failOnDecryptErrors(value: string) {
    this._failOnDecryptErrors = value;
  }
  public resetFailOnDecryptErrors() {
    this._failOnDecryptErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnDecryptErrorsInput() {
    return this._failOnDecryptErrors;
  }

  // file_name - computed: true, optional: true, required: false
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  public resetFileName() {
    this._fileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
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

  // import_mode - computed: true, optional: true, required: false
  private _importMode?: string; 
  public get importMode() {
    return this.getStringAttribute('import_mode');
  }
  public set importMode(value: string) {
    this._importMode = value;
  }
  public resetImportMode() {
    this._importMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importModeInput() {
    return this._importMode;
  }

  // import_type - computed: true, optional: true, required: false
  private _importType?: string; 
  public get importType() {
    return this.getStringAttribute('import_type');
  }
  public set importType(value: string) {
    this._importType = value;
  }
  public resetImportType() {
    this._importType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importTypeInput() {
    return this._importType;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // relation_config_rs_import_source - computed: false, optional: true, required: false
  private _relationConfigRsImportSource?: string; 
  public get relationConfigRsImportSource() {
    return this.getStringAttribute('relation_config_rs_import_source');
  }
  public set relationConfigRsImportSource(value: string) {
    this._relationConfigRsImportSource = value;
  }
  public resetRelationConfigRsImportSource() {
    this._relationConfigRsImportSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationConfigRsImportSourceInput() {
    return this._relationConfigRsImportSource;
  }

  // relation_config_rs_remote_path - computed: false, optional: true, required: false
  private _relationConfigRsRemotePath?: string; 
  public get relationConfigRsRemotePath() {
    return this.getStringAttribute('relation_config_rs_remote_path');
  }
  public set relationConfigRsRemotePath(value: string) {
    this._relationConfigRsRemotePath = value;
  }
  public resetRelationConfigRsRemotePath() {
    this._relationConfigRsRemotePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationConfigRsRemotePathInput() {
    return this._relationConfigRsRemotePath;
  }

  // relation_trig_rs_triggerable - computed: false, optional: true, required: false
  private _relationTrigRsTriggerable?: string; 
  public get relationTrigRsTriggerable() {
    return this.getStringAttribute('relation_trig_rs_triggerable');
  }
  public set relationTrigRsTriggerable(value: string) {
    this._relationTrigRsTriggerable = value;
  }
  public resetRelationTrigRsTriggerable() {
    this._relationTrigRsTriggerable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationTrigRsTriggerableInput() {
    return this._relationTrigRsTriggerable;
  }

  // snapshot - computed: true, optional: true, required: false
  private _snapshot?: string; 
  public get snapshot() {
    return this.getStringAttribute('snapshot');
  }
  public set snapshot(value: string) {
    this._snapshot = value;
  }
  public resetSnapshot() {
    this._snapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotInput() {
    return this._snapshot;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_st: cdktf.stringToTerraform(this._adminSt),
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      fail_on_decrypt_errors: cdktf.stringToTerraform(this._failOnDecryptErrors),
      file_name: cdktf.stringToTerraform(this._fileName),
      id: cdktf.stringToTerraform(this._id),
      import_mode: cdktf.stringToTerraform(this._importMode),
      import_type: cdktf.stringToTerraform(this._importType),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      relation_config_rs_import_source: cdktf.stringToTerraform(this._relationConfigRsImportSource),
      relation_config_rs_remote_path: cdktf.stringToTerraform(this._relationConfigRsRemotePath),
      relation_trig_rs_triggerable: cdktf.stringToTerraform(this._relationTrigRsTriggerable),
      snapshot: cdktf.stringToTerraform(this._snapshot),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_st: {
        value: cdktf.stringToHclTerraform(this._adminSt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fail_on_decrypt_errors: {
        value: cdktf.stringToHclTerraform(this._failOnDecryptErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_name: {
        value: cdktf.stringToHclTerraform(this._fileName),
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
      import_mode: {
        value: cdktf.stringToHclTerraform(this._importMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_type: {
        value: cdktf.stringToHclTerraform(this._importType),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_config_rs_import_source: {
        value: cdktf.stringToHclTerraform(this._relationConfigRsImportSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_config_rs_remote_path: {
        value: cdktf.stringToHclTerraform(this._relationConfigRsRemotePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_trig_rs_triggerable: {
        value: cdktf.stringToHclTerraform(this._relationTrigRsTriggerable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot: {
        value: cdktf.stringToHclTerraform(this._snapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
