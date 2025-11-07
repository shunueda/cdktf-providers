// https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_sharing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKeeperEnforcementsSharingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Require account-share
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_sharing#require_account_share DataKeeperEnforcementsSharingA#require_account_share}
  */
  readonly requireAccountShare?: number;
  /**
  * Restrict shared-folder creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_sharing#restrict_create_shared_folder DataKeeperEnforcementsSharingA#restrict_create_shared_folder}
  */
  readonly restrictCreateSharedFolder?: boolean | cdktf.IResolvable;
  /**
  * Restrict record exports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_sharing#restrict_export DataKeeperEnforcementsSharingA#restrict_export}
  */
  readonly restrictExport?: boolean | cdktf.IResolvable;
  /**
  * Restrict file uploads
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_sharing#restrict_file_upload DataKeeperEnforcementsSharingA#restrict_file_upload}
  */
  readonly restrictFileUpload?: boolean | cdktf.IResolvable;
  /**
  * Restrict record imports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_sharing#restrict_import DataKeeperEnforcementsSharingA#restrict_import}
  */
  readonly restrictImport?: boolean | cdktf.IResolvable;
  /**
  * Restrict link-sharing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_sharing#restrict_link_sharing DataKeeperEnforcementsSharingA#restrict_link_sharing}
  */
  readonly restrictLinkSharing?: boolean | cdktf.IResolvable;
  /**
  * Restrict all incoming sharing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_sharing#restrict_sharing_all_incoming DataKeeperEnforcementsSharingA#restrict_sharing_all_incoming}
  */
  readonly restrictSharingAllIncoming?: boolean | cdktf.IResolvable;
  /**
  * Restrict all outgoing sharing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_sharing#restrict_sharing_all_outgoing DataKeeperEnforcementsSharingA#restrict_sharing_all_outgoing}
  */
  readonly restrictSharingAllOutgoing?: boolean | cdktf.IResolvable;
  /**
  * Restrict sharing from outside the enterprise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_sharing#restrict_sharing_enterprise_incoming DataKeeperEnforcementsSharingA#restrict_sharing_enterprise_incoming}
  */
  readonly restrictSharingEnterpriseIncoming?: boolean | cdktf.IResolvable;
  /**
  * Restrict sharing to outside the enterprise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_sharing#restrict_sharing_enterprise_outgoing DataKeeperEnforcementsSharingA#restrict_sharing_enterprise_outgoing}
  */
  readonly restrictSharingEnterpriseOutgoing?: boolean | cdktf.IResolvable;
  /**
  * Restrict sharing outside of isolated nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_sharing#restrict_sharing_outside_of_isolated_nodes DataKeeperEnforcementsSharingA#restrict_sharing_outside_of_isolated_nodes}
  */
  readonly restrictSharingOutsideOfIsolatedNodes?: boolean | cdktf.IResolvable;
  /**
  * Restrict record sharing within shared-folders
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_sharing#restrict_sharing_record_to_shared_folders DataKeeperEnforcementsSharingA#restrict_sharing_record_to_shared_folders}
  */
  readonly restrictSharingRecordToSharedFolders?: boolean | cdktf.IResolvable;
  /**
  * Restrict sharing records with attachments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_sharing#restrict_sharing_record_with_attachments DataKeeperEnforcementsSharingA#restrict_sharing_record_with_attachments}
  */
  readonly restrictSharingRecordWithAttachments?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_sharing keeper_enforcements_sharing}
*/
export class DataKeeperEnforcementsSharingA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keeper_enforcements_sharing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKeeperEnforcementsSharingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKeeperEnforcementsSharingA to import
  * @param importFromId The id of the existing DataKeeperEnforcementsSharingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_sharing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKeeperEnforcementsSharingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keeper_enforcements_sharing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/enforcements_sharing keeper_enforcements_sharing} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKeeperEnforcementsSharingAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataKeeperEnforcementsSharingAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'keeper_enforcements_sharing',
      terraformGeneratorMetadata: {
        providerName: 'keeper',
        providerVersion: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._requireAccountShare = config.requireAccountShare;
    this._restrictCreateSharedFolder = config.restrictCreateSharedFolder;
    this._restrictExport = config.restrictExport;
    this._restrictFileUpload = config.restrictFileUpload;
    this._restrictImport = config.restrictImport;
    this._restrictLinkSharing = config.restrictLinkSharing;
    this._restrictSharingAllIncoming = config.restrictSharingAllIncoming;
    this._restrictSharingAllOutgoing = config.restrictSharingAllOutgoing;
    this._restrictSharingEnterpriseIncoming = config.restrictSharingEnterpriseIncoming;
    this._restrictSharingEnterpriseOutgoing = config.restrictSharingEnterpriseOutgoing;
    this._restrictSharingOutsideOfIsolatedNodes = config.restrictSharingOutsideOfIsolatedNodes;
    this._restrictSharingRecordToSharedFolders = config.restrictSharingRecordToSharedFolders;
    this._restrictSharingRecordWithAttachments = config.restrictSharingRecordWithAttachments;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // require_account_share - computed: false, optional: true, required: false
  private _requireAccountShare?: number; 
  public get requireAccountShare() {
    return this.getNumberAttribute('require_account_share');
  }
  public set requireAccountShare(value: number) {
    this._requireAccountShare = value;
  }
  public resetRequireAccountShare() {
    this._requireAccountShare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAccountShareInput() {
    return this._requireAccountShare;
  }

  // restrict_create_shared_folder - computed: false, optional: true, required: false
  private _restrictCreateSharedFolder?: boolean | cdktf.IResolvable; 
  public get restrictCreateSharedFolder() {
    return this.getBooleanAttribute('restrict_create_shared_folder');
  }
  public set restrictCreateSharedFolder(value: boolean | cdktf.IResolvable) {
    this._restrictCreateSharedFolder = value;
  }
  public resetRestrictCreateSharedFolder() {
    this._restrictCreateSharedFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictCreateSharedFolderInput() {
    return this._restrictCreateSharedFolder;
  }

  // restrict_export - computed: false, optional: true, required: false
  private _restrictExport?: boolean | cdktf.IResolvable; 
  public get restrictExport() {
    return this.getBooleanAttribute('restrict_export');
  }
  public set restrictExport(value: boolean | cdktf.IResolvable) {
    this._restrictExport = value;
  }
  public resetRestrictExport() {
    this._restrictExport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictExportInput() {
    return this._restrictExport;
  }

  // restrict_file_upload - computed: false, optional: true, required: false
  private _restrictFileUpload?: boolean | cdktf.IResolvable; 
  public get restrictFileUpload() {
    return this.getBooleanAttribute('restrict_file_upload');
  }
  public set restrictFileUpload(value: boolean | cdktf.IResolvable) {
    this._restrictFileUpload = value;
  }
  public resetRestrictFileUpload() {
    this._restrictFileUpload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictFileUploadInput() {
    return this._restrictFileUpload;
  }

  // restrict_import - computed: false, optional: true, required: false
  private _restrictImport?: boolean | cdktf.IResolvable; 
  public get restrictImport() {
    return this.getBooleanAttribute('restrict_import');
  }
  public set restrictImport(value: boolean | cdktf.IResolvable) {
    this._restrictImport = value;
  }
  public resetRestrictImport() {
    this._restrictImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictImportInput() {
    return this._restrictImport;
  }

  // restrict_link_sharing - computed: false, optional: true, required: false
  private _restrictLinkSharing?: boolean | cdktf.IResolvable; 
  public get restrictLinkSharing() {
    return this.getBooleanAttribute('restrict_link_sharing');
  }
  public set restrictLinkSharing(value: boolean | cdktf.IResolvable) {
    this._restrictLinkSharing = value;
  }
  public resetRestrictLinkSharing() {
    this._restrictLinkSharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictLinkSharingInput() {
    return this._restrictLinkSharing;
  }

  // restrict_sharing_all_incoming - computed: false, optional: true, required: false
  private _restrictSharingAllIncoming?: boolean | cdktf.IResolvable; 
  public get restrictSharingAllIncoming() {
    return this.getBooleanAttribute('restrict_sharing_all_incoming');
  }
  public set restrictSharingAllIncoming(value: boolean | cdktf.IResolvable) {
    this._restrictSharingAllIncoming = value;
  }
  public resetRestrictSharingAllIncoming() {
    this._restrictSharingAllIncoming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictSharingAllIncomingInput() {
    return this._restrictSharingAllIncoming;
  }

  // restrict_sharing_all_outgoing - computed: false, optional: true, required: false
  private _restrictSharingAllOutgoing?: boolean | cdktf.IResolvable; 
  public get restrictSharingAllOutgoing() {
    return this.getBooleanAttribute('restrict_sharing_all_outgoing');
  }
  public set restrictSharingAllOutgoing(value: boolean | cdktf.IResolvable) {
    this._restrictSharingAllOutgoing = value;
  }
  public resetRestrictSharingAllOutgoing() {
    this._restrictSharingAllOutgoing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictSharingAllOutgoingInput() {
    return this._restrictSharingAllOutgoing;
  }

  // restrict_sharing_enterprise_incoming - computed: false, optional: true, required: false
  private _restrictSharingEnterpriseIncoming?: boolean | cdktf.IResolvable; 
  public get restrictSharingEnterpriseIncoming() {
    return this.getBooleanAttribute('restrict_sharing_enterprise_incoming');
  }
  public set restrictSharingEnterpriseIncoming(value: boolean | cdktf.IResolvable) {
    this._restrictSharingEnterpriseIncoming = value;
  }
  public resetRestrictSharingEnterpriseIncoming() {
    this._restrictSharingEnterpriseIncoming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictSharingEnterpriseIncomingInput() {
    return this._restrictSharingEnterpriseIncoming;
  }

  // restrict_sharing_enterprise_outgoing - computed: false, optional: true, required: false
  private _restrictSharingEnterpriseOutgoing?: boolean | cdktf.IResolvable; 
  public get restrictSharingEnterpriseOutgoing() {
    return this.getBooleanAttribute('restrict_sharing_enterprise_outgoing');
  }
  public set restrictSharingEnterpriseOutgoing(value: boolean | cdktf.IResolvable) {
    this._restrictSharingEnterpriseOutgoing = value;
  }
  public resetRestrictSharingEnterpriseOutgoing() {
    this._restrictSharingEnterpriseOutgoing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictSharingEnterpriseOutgoingInput() {
    return this._restrictSharingEnterpriseOutgoing;
  }

  // restrict_sharing_outside_of_isolated_nodes - computed: false, optional: true, required: false
  private _restrictSharingOutsideOfIsolatedNodes?: boolean | cdktf.IResolvable; 
  public get restrictSharingOutsideOfIsolatedNodes() {
    return this.getBooleanAttribute('restrict_sharing_outside_of_isolated_nodes');
  }
  public set restrictSharingOutsideOfIsolatedNodes(value: boolean | cdktf.IResolvable) {
    this._restrictSharingOutsideOfIsolatedNodes = value;
  }
  public resetRestrictSharingOutsideOfIsolatedNodes() {
    this._restrictSharingOutsideOfIsolatedNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictSharingOutsideOfIsolatedNodesInput() {
    return this._restrictSharingOutsideOfIsolatedNodes;
  }

  // restrict_sharing_record_to_shared_folders - computed: false, optional: true, required: false
  private _restrictSharingRecordToSharedFolders?: boolean | cdktf.IResolvable; 
  public get restrictSharingRecordToSharedFolders() {
    return this.getBooleanAttribute('restrict_sharing_record_to_shared_folders');
  }
  public set restrictSharingRecordToSharedFolders(value: boolean | cdktf.IResolvable) {
    this._restrictSharingRecordToSharedFolders = value;
  }
  public resetRestrictSharingRecordToSharedFolders() {
    this._restrictSharingRecordToSharedFolders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictSharingRecordToSharedFoldersInput() {
    return this._restrictSharingRecordToSharedFolders;
  }

  // restrict_sharing_record_with_attachments - computed: false, optional: true, required: false
  private _restrictSharingRecordWithAttachments?: boolean | cdktf.IResolvable; 
  public get restrictSharingRecordWithAttachments() {
    return this.getBooleanAttribute('restrict_sharing_record_with_attachments');
  }
  public set restrictSharingRecordWithAttachments(value: boolean | cdktf.IResolvable) {
    this._restrictSharingRecordWithAttachments = value;
  }
  public resetRestrictSharingRecordWithAttachments() {
    this._restrictSharingRecordWithAttachments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictSharingRecordWithAttachmentsInput() {
    return this._restrictSharingRecordWithAttachments;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      require_account_share: cdktf.numberToTerraform(this._requireAccountShare),
      restrict_create_shared_folder: cdktf.booleanToTerraform(this._restrictCreateSharedFolder),
      restrict_export: cdktf.booleanToTerraform(this._restrictExport),
      restrict_file_upload: cdktf.booleanToTerraform(this._restrictFileUpload),
      restrict_import: cdktf.booleanToTerraform(this._restrictImport),
      restrict_link_sharing: cdktf.booleanToTerraform(this._restrictLinkSharing),
      restrict_sharing_all_incoming: cdktf.booleanToTerraform(this._restrictSharingAllIncoming),
      restrict_sharing_all_outgoing: cdktf.booleanToTerraform(this._restrictSharingAllOutgoing),
      restrict_sharing_enterprise_incoming: cdktf.booleanToTerraform(this._restrictSharingEnterpriseIncoming),
      restrict_sharing_enterprise_outgoing: cdktf.booleanToTerraform(this._restrictSharingEnterpriseOutgoing),
      restrict_sharing_outside_of_isolated_nodes: cdktf.booleanToTerraform(this._restrictSharingOutsideOfIsolatedNodes),
      restrict_sharing_record_to_shared_folders: cdktf.booleanToTerraform(this._restrictSharingRecordToSharedFolders),
      restrict_sharing_record_with_attachments: cdktf.booleanToTerraform(this._restrictSharingRecordWithAttachments),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      require_account_share: {
        value: cdktf.numberToHclTerraform(this._requireAccountShare),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      restrict_create_shared_folder: {
        value: cdktf.booleanToHclTerraform(this._restrictCreateSharedFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_export: {
        value: cdktf.booleanToHclTerraform(this._restrictExport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_file_upload: {
        value: cdktf.booleanToHclTerraform(this._restrictFileUpload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_import: {
        value: cdktf.booleanToHclTerraform(this._restrictImport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_link_sharing: {
        value: cdktf.booleanToHclTerraform(this._restrictLinkSharing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_sharing_all_incoming: {
        value: cdktf.booleanToHclTerraform(this._restrictSharingAllIncoming),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_sharing_all_outgoing: {
        value: cdktf.booleanToHclTerraform(this._restrictSharingAllOutgoing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_sharing_enterprise_incoming: {
        value: cdktf.booleanToHclTerraform(this._restrictSharingEnterpriseIncoming),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_sharing_enterprise_outgoing: {
        value: cdktf.booleanToHclTerraform(this._restrictSharingEnterpriseOutgoing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_sharing_outside_of_isolated_nodes: {
        value: cdktf.booleanToHclTerraform(this._restrictSharingOutsideOfIsolatedNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_sharing_record_to_shared_folders: {
        value: cdktf.booleanToHclTerraform(this._restrictSharingRecordToSharedFolders),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_sharing_record_with_attachments: {
        value: cdktf.booleanToHclTerraform(this._restrictSharingRecordWithAttachments),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
