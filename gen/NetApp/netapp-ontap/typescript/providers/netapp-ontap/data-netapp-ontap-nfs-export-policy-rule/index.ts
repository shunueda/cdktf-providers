// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/nfs_export_policy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetappOntapNfsExportPolicyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/nfs_export_policy_rule#cx_profile_name DataNetappOntapNfsExportPolicyRule#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Export policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/nfs_export_policy_rule#export_policy_name DataNetappOntapNfsExportPolicyRule#export_policy_name}
  */
  readonly exportPolicyName: string;
  /**
  * rule index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/nfs_export_policy_rule#index DataNetappOntapNfsExportPolicyRule#index}
  */
  readonly index: number;
  /**
  * Name of the svm to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/nfs_export_policy_rule#svm_name DataNetappOntapNfsExportPolicyRule#svm_name}
  */
  readonly svmName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/nfs_export_policy_rule netapp-ontap_nfs_export_policy_rule}
*/
export class DataNetappOntapNfsExportPolicyRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_nfs_export_policy_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetappOntapNfsExportPolicyRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetappOntapNfsExportPolicyRule to import
  * @param importFromId The id of the existing DataNetappOntapNfsExportPolicyRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/nfs_export_policy_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetappOntapNfsExportPolicyRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_nfs_export_policy_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/data-sources/nfs_export_policy_rule netapp-ontap_nfs_export_policy_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetappOntapNfsExportPolicyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetappOntapNfsExportPolicyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_nfs_export_policy_rule',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cxProfileName = config.cxProfileName;
    this._exportPolicyName = config.exportPolicyName;
    this._index = config.index;
    this._svmName = config.svmName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_device_creation - computed: true, optional: false, required: false
  public get allowDeviceCreation() {
    return this.getBooleanAttribute('allow_device_creation');
  }

  // allow_suid - computed: true, optional: false, required: false
  public get allowSuid() {
    return this.getBooleanAttribute('allow_suid');
  }

  // anonymous_user - computed: true, optional: false, required: false
  public get anonymousUser() {
    return this.getStringAttribute('anonymous_user');
  }

  // chown_mode - computed: true, optional: false, required: false
  public get chownMode() {
    return this.getStringAttribute('chown_mode');
  }

  // clients_match - computed: true, optional: false, required: false
  public get clientsMatch() {
    return this.getListAttribute('clients_match');
  }

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // export_policy_id - computed: true, optional: false, required: false
  public get exportPolicyId() {
    return this.getStringAttribute('export_policy_id');
  }

  // export_policy_name - computed: false, optional: false, required: true
  private _exportPolicyName?: string; 
  public get exportPolicyName() {
    return this.getStringAttribute('export_policy_name');
  }
  public set exportPolicyName(value: string) {
    this._exportPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportPolicyNameInput() {
    return this._exportPolicyName;
  }

  // index - computed: false, optional: false, required: true
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // ntfs_unix_security - computed: true, optional: false, required: false
  public get ntfsUnixSecurity() {
    return this.getStringAttribute('ntfs_unix_security');
  }

  // protocols - computed: true, optional: false, required: false
  public get protocols() {
    return this.getListAttribute('protocols');
  }

  // ro_rule - computed: true, optional: false, required: false
  public get roRule() {
    return this.getListAttribute('ro_rule');
  }

  // rw_rule - computed: true, optional: false, required: false
  public get rwRule() {
    return this.getListAttribute('rw_rule');
  }

  // superuser - computed: true, optional: false, required: false
  public get superuser() {
    return this.getListAttribute('superuser');
  }

  // svm_name - computed: false, optional: false, required: true
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      export_policy_name: cdktf.stringToTerraform(this._exportPolicyName),
      index: cdktf.numberToTerraform(this._index),
      svm_name: cdktf.stringToTerraform(this._svmName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export_policy_name: {
        value: cdktf.stringToHclTerraform(this._exportPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index: {
        value: cdktf.numberToHclTerraform(this._index),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      svm_name: {
        value: cdktf.stringToHclTerraform(this._svmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
