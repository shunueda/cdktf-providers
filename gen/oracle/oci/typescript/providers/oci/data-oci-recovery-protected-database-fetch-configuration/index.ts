// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/recovery_protected_database_fetch_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciRecoveryProtectedDatabaseFetchConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/recovery_protected_database_fetch_configuration#base64_encode_content DataOciRecoveryProtectedDatabaseFetchConfiguration#base64_encode_content}
  */
  readonly base64EncodeContent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/recovery_protected_database_fetch_configuration#configuration_type DataOciRecoveryProtectedDatabaseFetchConfiguration#configuration_type}
  */
  readonly configurationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/recovery_protected_database_fetch_configuration#id DataOciRecoveryProtectedDatabaseFetchConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/recovery_protected_database_fetch_configuration#protected_database_id DataOciRecoveryProtectedDatabaseFetchConfiguration#protected_database_id}
  */
  readonly protectedDatabaseId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/recovery_protected_database_fetch_configuration oci_recovery_protected_database_fetch_configuration}
*/
export class DataOciRecoveryProtectedDatabaseFetchConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_recovery_protected_database_fetch_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciRecoveryProtectedDatabaseFetchConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciRecoveryProtectedDatabaseFetchConfiguration to import
  * @param importFromId The id of the existing DataOciRecoveryProtectedDatabaseFetchConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/recovery_protected_database_fetch_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciRecoveryProtectedDatabaseFetchConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_recovery_protected_database_fetch_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/recovery_protected_database_fetch_configuration oci_recovery_protected_database_fetch_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciRecoveryProtectedDatabaseFetchConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciRecoveryProtectedDatabaseFetchConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_recovery_protected_database_fetch_configuration',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._base64EncodeContent = config.base64EncodeContent;
    this._configurationType = config.configurationType;
    this._id = config.id;
    this._protectedDatabaseId = config.protectedDatabaseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base64_encode_content - computed: false, optional: true, required: false
  private _base64EncodeContent?: boolean | cdktf.IResolvable; 
  public get base64EncodeContent() {
    return this.getBooleanAttribute('base64_encode_content');
  }
  public set base64EncodeContent(value: boolean | cdktf.IResolvable) {
    this._base64EncodeContent = value;
  }
  public resetBase64EncodeContent() {
    this._base64EncodeContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64EncodeContentInput() {
    return this._base64EncodeContent;
  }

  // configuration_type - computed: false, optional: true, required: false
  private _configurationType?: string; 
  public get configurationType() {
    return this.getStringAttribute('configuration_type');
  }
  public set configurationType(value: string) {
    this._configurationType = value;
  }
  public resetConfigurationType() {
    this._configurationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationTypeInput() {
    return this._configurationType;
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
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

  // protected_database_id - computed: false, optional: false, required: true
  private _protectedDatabaseId?: string; 
  public get protectedDatabaseId() {
    return this.getStringAttribute('protected_database_id');
  }
  public set protectedDatabaseId(value: string) {
    this._protectedDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedDatabaseIdInput() {
    return this._protectedDatabaseId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base64_encode_content: cdktf.booleanToTerraform(this._base64EncodeContent),
      configuration_type: cdktf.stringToTerraform(this._configurationType),
      id: cdktf.stringToTerraform(this._id),
      protected_database_id: cdktf.stringToTerraform(this._protectedDatabaseId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base64_encode_content: {
        value: cdktf.booleanToHclTerraform(this._base64EncodeContent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      configuration_type: {
        value: cdktf.stringToHclTerraform(this._configurationType),
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
      protected_database_id: {
        value: cdktf.stringToHclTerraform(this._protectedDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
