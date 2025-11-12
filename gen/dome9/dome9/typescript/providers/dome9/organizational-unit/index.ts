// https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/organizational_unit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationalUnitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/organizational_unit#id OrganizationalUnit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/organizational_unit#name OrganizationalUnit#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/organizational_unit#parent_id OrganizationalUnit#parent_id}
  */
  readonly parentId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/organizational_unit dome9_organizational_unit}
*/
export class OrganizationalUnit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dome9_organizational_unit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationalUnit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationalUnit to import
  * @param importFromId The id of the existing OrganizationalUnit that should be imported. Refer to the {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/organizational_unit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationalUnit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dome9_organizational_unit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dome9/dome9/1.40.4/docs/resources/organizational_unit dome9_organizational_unit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationalUnitConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationalUnitConfig) {
    super(scope, id, {
      terraformResourceType: 'dome9_organizational_unit',
      terraformGeneratorMetadata: {
        providerName: 'dome9',
        providerVersion: '1.40.4',
        providerVersionConstraint: '1.40.4'
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
    this._name = config.name;
    this._parentId = config.parentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // alibaba_aggregate_cloud_accounts_count - computed: true, optional: false, required: false
  public get alibabaAggregateCloudAccountsCount() {
    return this.getNumberAttribute('alibaba_aggregate_cloud_accounts_count');
  }

  // alibaba_cloud_accounts_count - computed: true, optional: false, required: false
  public get alibabaCloudAccountsCount() {
    return this.getNumberAttribute('alibaba_cloud_accounts_count');
  }

  // aws_aggregate_cloud_accounts_count - computed: true, optional: false, required: false
  public get awsAggregateCloudAccountsCount() {
    return this.getNumberAttribute('aws_aggregate_cloud_accounts_count');
  }

  // aws_cloud_accounts_count - computed: true, optional: false, required: false
  public get awsCloudAccountsCount() {
    return this.getNumberAttribute('aws_cloud_accounts_count');
  }

  // azure_aggregate_cloud_accounts_count - computed: true, optional: false, required: false
  public get azureAggregateCloudAccountsCount() {
    return this.getNumberAttribute('azure_aggregate_cloud_accounts_count');
  }

  // azure_cloud_accounts_count - computed: true, optional: false, required: false
  public get azureCloudAccountsCount() {
    return this.getNumberAttribute('azure_cloud_accounts_count');
  }

  // container_registry_aggregate_cloud_accounts_count - computed: true, optional: false, required: false
  public get containerRegistryAggregateCloudAccountsCount() {
    return this.getNumberAttribute('container_registry_aggregate_cloud_accounts_count');
  }

  // container_registry_cloud_accounts_count - computed: true, optional: false, required: false
  public get containerRegistryCloudAccountsCount() {
    return this.getNumberAttribute('container_registry_cloud_accounts_count');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // google_aggregate_cloud_accounts_count - computed: true, optional: false, required: false
  public get googleAggregateCloudAccountsCount() {
    return this.getNumberAttribute('google_aggregate_cloud_accounts_count');
  }

  // google_cloud_accounts_count - computed: true, optional: false, required: false
  public get googleCloudAccountsCount() {
    return this.getNumberAttribute('google_cloud_accounts_count');
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

  // is_parent_root - computed: true, optional: false, required: false
  public get isParentRoot() {
    return this.getBooleanAttribute('is_parent_root');
  }

  // is_root - computed: true, optional: false, required: false
  public get isRoot() {
    return this.getBooleanAttribute('is_root');
  }

  // k8s_aggregate_cloud_accounts_count - computed: true, optional: false, required: false
  public get k8SAggregateCloudAccountsCount() {
    return this.getNumberAttribute('k8s_aggregate_cloud_accounts_count');
  }

  // k8s_cloud_accounts_count - computed: true, optional: false, required: false
  public get k8SCloudAccountsCount() {
    return this.getNumberAttribute('k8s_cloud_accounts_count');
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

  // oci_aggregate_cloud_accounts_count - computed: true, optional: false, required: false
  public get ociAggregateCloudAccountsCount() {
    return this.getNumberAttribute('oci_aggregate_cloud_accounts_count');
  }

  // oci_cloud_accounts_count - computed: true, optional: false, required: false
  public get ociCloudAccountsCount() {
    return this.getNumberAttribute('oci_cloud_accounts_count');
  }

  // parent_id - computed: false, optional: true, required: false
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // path_str - computed: true, optional: false, required: false
  public get pathStr() {
    return this.getStringAttribute('path_str');
  }

  // shift_left_aggregate_cloud_accounts_count - computed: true, optional: false, required: false
  public get shiftLeftAggregateCloudAccountsCount() {
    return this.getNumberAttribute('shift_left_aggregate_cloud_accounts_count');
  }

  // shift_left_cloud_accounts_count - computed: true, optional: false, required: false
  public get shiftLeftCloudAccountsCount() {
    return this.getNumberAttribute('shift_left_cloud_accounts_count');
  }

  // sub_organizational_units_count - computed: true, optional: false, required: false
  public get subOrganizationalUnitsCount() {
    return this.getNumberAttribute('sub_organizational_units_count');
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.stringToTerraform(this._parentId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
