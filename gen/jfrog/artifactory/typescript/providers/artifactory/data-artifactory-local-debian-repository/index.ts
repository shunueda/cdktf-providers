// https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/local_debian_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataArtifactoryLocalDebianRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * When set, you may view content such as HTML or Javadoc files directly from Artifactory.
  * This may not be safe and therefore requires strict content moderation to prevent malicious users from uploading content that may compromise security (e.g., cross-site scripting attacks).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/local_debian_repository#archive_browsing_enabled DataArtifactoryLocalDebianRepository#archive_browsing_enabled}
  */
  readonly archiveBrowsingEnabled?: boolean | cdktf.IResolvable;
  /**
  * When set, the repository does not participate in artifact resolution and new artifacts cannot be deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/local_debian_repository#blacked_out DataArtifactoryLocalDebianRepository#blacked_out}
  */
  readonly blackedOut?: boolean | cdktf.IResolvable;
  /**
  * When set, download requests to this repository will redirect the client to download the artifact directly from AWS CloudFront. Available in Enterprise+ and Edge licenses only. Default value is 'false'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/local_debian_repository#cdn_redirect DataArtifactoryLocalDebianRepository#cdn_redirect}
  */
  readonly cdnRedirect?: boolean | cdktf.IResolvable;
  /**
  * Public description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/local_debian_repository#description DataArtifactoryLocalDebianRepository#description}
  */
  readonly description?: string;
  /**
  * When set, download requests to this repository will redirect the client to download the artifact directly from the cloud storage provider. Available in Enterprise+ and Edge licenses only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/local_debian_repository#download_direct DataArtifactoryLocalDebianRepository#download_direct}
  */
  readonly downloadDirect?: boolean | cdktf.IResolvable;
  /**
  * List of artifact patterns to exclude when evaluating artifact requests, in the form of `x/y/** /z/*`.By default no artifacts are excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/local_debian_repository#excludes_pattern DataArtifactoryLocalDebianRepository#excludes_pattern}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly excludesPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/local_debian_repository#id DataArtifactoryLocalDebianRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of comma-separated artifact patterns to include when evaluating artifact requests in the form of `x/y/** /z/*`. When used, only artifacts matching one of the include patterns are served. By default, all artifacts are included (`** /*`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/local_debian_repository#includes_pattern DataArtifactoryLocalDebianRepository#includes_pattern}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly includesPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/local_debian_repository#index_compression_formats DataArtifactoryLocalDebianRepository#index_compression_formats}
  */
  readonly indexCompressionFormats?: string[];
  /**
  * A mandatory identifier for the repository that must be unique. Must be 1 - 64 alphanumeric and hyphen characters. It cannot contain spaces or special characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/local_debian_repository#key DataArtifactoryLocalDebianRepository#key}
  */
  readonly key: string;
  /**
  * Internal description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/local_debian_repository#notes DataArtifactoryLocalDebianRepository#notes}
  */
  readonly notes?: string;
  /**
  * Primary keypair used to sign artifacts. Default value is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/local_debian_repository#primary_keypair_ref DataArtifactoryLocalDebianRepository#primary_keypair_ref}
  */
  readonly primaryKeypairRef?: string;
  /**
  * Setting repositories with priority will cause metadata to be merged only from repositories set with this field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/local_debian_repository#priority_resolution DataArtifactoryLocalDebianRepository#priority_resolution}
  */
  readonly priorityResolution?: boolean | cdktf.IResolvable;
  /**
  * Before Artifactory 7.53.1, up to 2 values (`DEV` and `PROD`) are allowed. From 7.53.1 to 7.107.1, only one value is allowed. From 7.107.1, multiple values are allowed.The attribute should only be used if the repository is already assigned to the existing project. If not, the attribute will be ignored by Artifactory, but will remain in the Terraform state, which will create state drift during the update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/local_debian_repository#project_environments DataArtifactoryLocalDebianRepository#project_environments}
  */
  readonly projectEnvironments?: string[];
  /**
  * Project key for assigning this repository to. Must be 2 - 32 lowercase alphanumeric and hyphen characters. When assigning repository to a project, repository key must be prefixed with project key, separated by a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/local_debian_repository#project_key DataArtifactoryLocalDebianRepository#project_key}
  */
  readonly projectKey?: string;
  /**
  * List of property set name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/local_debian_repository#property_sets DataArtifactoryLocalDebianRepository#property_sets}
  */
  readonly propertySets?: string[];
  /**
  * Repository layout key for the local repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/local_debian_repository#repo_layout_ref DataArtifactoryLocalDebianRepository#repo_layout_ref}
  */
  readonly repoLayoutRef?: string;
  /**
  * Secondary keypair used to sign artifacts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/local_debian_repository#secondary_keypair_ref DataArtifactoryLocalDebianRepository#secondary_keypair_ref}
  */
  readonly secondaryKeypairRef?: string;
  /**
  * When set, the repository will use the deprecated trivial layout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/local_debian_repository#trivial_layout DataArtifactoryLocalDebianRepository#trivial_layout}
  */
  readonly trivialLayout?: boolean | cdktf.IResolvable;
  /**
  * Enable Indexing In Xray. Repository will be indexed with the default retention period. You will be able to change it via Xray settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/local_debian_repository#xray_index DataArtifactoryLocalDebianRepository#xray_index}
  */
  readonly xrayIndex?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/local_debian_repository artifactory_local_debian_repository}
*/
export class DataArtifactoryLocalDebianRepository extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_local_debian_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataArtifactoryLocalDebianRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataArtifactoryLocalDebianRepository to import
  * @param importFromId The id of the existing DataArtifactoryLocalDebianRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/local_debian_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataArtifactoryLocalDebianRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_local_debian_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/data-sources/local_debian_repository artifactory_local_debian_repository} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataArtifactoryLocalDebianRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: DataArtifactoryLocalDebianRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_local_debian_repository',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.11.1',
        providerVersionConstraint: '12.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._archiveBrowsingEnabled = config.archiveBrowsingEnabled;
    this._blackedOut = config.blackedOut;
    this._cdnRedirect = config.cdnRedirect;
    this._description = config.description;
    this._downloadDirect = config.downloadDirect;
    this._excludesPattern = config.excludesPattern;
    this._id = config.id;
    this._includesPattern = config.includesPattern;
    this._indexCompressionFormats = config.indexCompressionFormats;
    this._key = config.key;
    this._notes = config.notes;
    this._primaryKeypairRef = config.primaryKeypairRef;
    this._priorityResolution = config.priorityResolution;
    this._projectEnvironments = config.projectEnvironments;
    this._projectKey = config.projectKey;
    this._propertySets = config.propertySets;
    this._repoLayoutRef = config.repoLayoutRef;
    this._secondaryKeypairRef = config.secondaryKeypairRef;
    this._trivialLayout = config.trivialLayout;
    this._xrayIndex = config.xrayIndex;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archive_browsing_enabled - computed: false, optional: true, required: false
  private _archiveBrowsingEnabled?: boolean | cdktf.IResolvable; 
  public get archiveBrowsingEnabled() {
    return this.getBooleanAttribute('archive_browsing_enabled');
  }
  public set archiveBrowsingEnabled(value: boolean | cdktf.IResolvable) {
    this._archiveBrowsingEnabled = value;
  }
  public resetArchiveBrowsingEnabled() {
    this._archiveBrowsingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveBrowsingEnabledInput() {
    return this._archiveBrowsingEnabled;
  }

  // blacked_out - computed: false, optional: true, required: false
  private _blackedOut?: boolean | cdktf.IResolvable; 
  public get blackedOut() {
    return this.getBooleanAttribute('blacked_out');
  }
  public set blackedOut(value: boolean | cdktf.IResolvable) {
    this._blackedOut = value;
  }
  public resetBlackedOut() {
    this._blackedOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackedOutInput() {
    return this._blackedOut;
  }

  // cdn_redirect - computed: false, optional: true, required: false
  private _cdnRedirect?: boolean | cdktf.IResolvable; 
  public get cdnRedirect() {
    return this.getBooleanAttribute('cdn_redirect');
  }
  public set cdnRedirect(value: boolean | cdktf.IResolvable) {
    this._cdnRedirect = value;
  }
  public resetCdnRedirect() {
    this._cdnRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnRedirectInput() {
    return this._cdnRedirect;
  }

  // description - computed: false, optional: true, required: false
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

  // download_direct - computed: false, optional: true, required: false
  private _downloadDirect?: boolean | cdktf.IResolvable; 
  public get downloadDirect() {
    return this.getBooleanAttribute('download_direct');
  }
  public set downloadDirect(value: boolean | cdktf.IResolvable) {
    this._downloadDirect = value;
  }
  public resetDownloadDirect() {
    this._downloadDirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadDirectInput() {
    return this._downloadDirect;
  }

  // excludes_pattern - computed: false, optional: true, required: false
  private _excludesPattern?: string; 
  public get excludesPattern() {
    return this.getStringAttribute('excludes_pattern');
  }
  public set excludesPattern(value: string) {
    this._excludesPattern = value;
  }
  public resetExcludesPattern() {
    this._excludesPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesPatternInput() {
    return this._excludesPattern;
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

  // includes_pattern - computed: false, optional: true, required: false
  private _includesPattern?: string; 
  public get includesPattern() {
    return this.getStringAttribute('includes_pattern');
  }
  public set includesPattern(value: string) {
    this._includesPattern = value;
  }
  public resetIncludesPattern() {
    this._includesPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesPatternInput() {
    return this._includesPattern;
  }

  // index_compression_formats - computed: false, optional: true, required: false
  private _indexCompressionFormats?: string[]; 
  public get indexCompressionFormats() {
    return cdktf.Fn.tolist(this.getListAttribute('index_compression_formats'));
  }
  public set indexCompressionFormats(value: string[]) {
    this._indexCompressionFormats = value;
  }
  public resetIndexCompressionFormats() {
    this._indexCompressionFormats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexCompressionFormatsInput() {
    return this._indexCompressionFormats;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // package_type - computed: true, optional: false, required: false
  public get packageType() {
    return this.getStringAttribute('package_type');
  }

  // primary_keypair_ref - computed: false, optional: true, required: false
  private _primaryKeypairRef?: string; 
  public get primaryKeypairRef() {
    return this.getStringAttribute('primary_keypair_ref');
  }
  public set primaryKeypairRef(value: string) {
    this._primaryKeypairRef = value;
  }
  public resetPrimaryKeypairRef() {
    this._primaryKeypairRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeypairRefInput() {
    return this._primaryKeypairRef;
  }

  // priority_resolution - computed: false, optional: true, required: false
  private _priorityResolution?: boolean | cdktf.IResolvable; 
  public get priorityResolution() {
    return this.getBooleanAttribute('priority_resolution');
  }
  public set priorityResolution(value: boolean | cdktf.IResolvable) {
    this._priorityResolution = value;
  }
  public resetPriorityResolution() {
    this._priorityResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityResolutionInput() {
    return this._priorityResolution;
  }

  // project_environments - computed: true, optional: true, required: false
  private _projectEnvironments?: string[]; 
  public get projectEnvironments() {
    return cdktf.Fn.tolist(this.getListAttribute('project_environments'));
  }
  public set projectEnvironments(value: string[]) {
    this._projectEnvironments = value;
  }
  public resetProjectEnvironments() {
    this._projectEnvironments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectEnvironmentsInput() {
    return this._projectEnvironments;
  }

  // project_key - computed: false, optional: true, required: false
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  public resetProjectKey() {
    this._projectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // property_sets - computed: false, optional: true, required: false
  private _propertySets?: string[]; 
  public get propertySets() {
    return cdktf.Fn.tolist(this.getListAttribute('property_sets'));
  }
  public set propertySets(value: string[]) {
    this._propertySets = value;
  }
  public resetPropertySets() {
    this._propertySets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertySetsInput() {
    return this._propertySets;
  }

  // repo_layout_ref - computed: false, optional: true, required: false
  private _repoLayoutRef?: string; 
  public get repoLayoutRef() {
    return this.getStringAttribute('repo_layout_ref');
  }
  public set repoLayoutRef(value: string) {
    this._repoLayoutRef = value;
  }
  public resetRepoLayoutRef() {
    this._repoLayoutRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoLayoutRefInput() {
    return this._repoLayoutRef;
  }

  // secondary_keypair_ref - computed: false, optional: true, required: false
  private _secondaryKeypairRef?: string; 
  public get secondaryKeypairRef() {
    return this.getStringAttribute('secondary_keypair_ref');
  }
  public set secondaryKeypairRef(value: string) {
    this._secondaryKeypairRef = value;
  }
  public resetSecondaryKeypairRef() {
    this._secondaryKeypairRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryKeypairRefInput() {
    return this._secondaryKeypairRef;
  }

  // trivial_layout - computed: false, optional: true, required: false
  private _trivialLayout?: boolean | cdktf.IResolvable; 
  public get trivialLayout() {
    return this.getBooleanAttribute('trivial_layout');
  }
  public set trivialLayout(value: boolean | cdktf.IResolvable) {
    this._trivialLayout = value;
  }
  public resetTrivialLayout() {
    this._trivialLayout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trivialLayoutInput() {
    return this._trivialLayout;
  }

  // xray_index - computed: false, optional: true, required: false
  private _xrayIndex?: boolean | cdktf.IResolvable; 
  public get xrayIndex() {
    return this.getBooleanAttribute('xray_index');
  }
  public set xrayIndex(value: boolean | cdktf.IResolvable) {
    this._xrayIndex = value;
  }
  public resetXrayIndex() {
    this._xrayIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xrayIndexInput() {
    return this._xrayIndex;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      archive_browsing_enabled: cdktf.booleanToTerraform(this._archiveBrowsingEnabled),
      blacked_out: cdktf.booleanToTerraform(this._blackedOut),
      cdn_redirect: cdktf.booleanToTerraform(this._cdnRedirect),
      description: cdktf.stringToTerraform(this._description),
      download_direct: cdktf.booleanToTerraform(this._downloadDirect),
      excludes_pattern: cdktf.stringToTerraform(this._excludesPattern),
      id: cdktf.stringToTerraform(this._id),
      includes_pattern: cdktf.stringToTerraform(this._includesPattern),
      index_compression_formats: cdktf.listMapper(cdktf.stringToTerraform, false)(this._indexCompressionFormats),
      key: cdktf.stringToTerraform(this._key),
      notes: cdktf.stringToTerraform(this._notes),
      primary_keypair_ref: cdktf.stringToTerraform(this._primaryKeypairRef),
      priority_resolution: cdktf.booleanToTerraform(this._priorityResolution),
      project_environments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projectEnvironments),
      project_key: cdktf.stringToTerraform(this._projectKey),
      property_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._propertySets),
      repo_layout_ref: cdktf.stringToTerraform(this._repoLayoutRef),
      secondary_keypair_ref: cdktf.stringToTerraform(this._secondaryKeypairRef),
      trivial_layout: cdktf.booleanToTerraform(this._trivialLayout),
      xray_index: cdktf.booleanToTerraform(this._xrayIndex),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      archive_browsing_enabled: {
        value: cdktf.booleanToHclTerraform(this._archiveBrowsingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      blacked_out: {
        value: cdktf.booleanToHclTerraform(this._blackedOut),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cdn_redirect: {
        value: cdktf.booleanToHclTerraform(this._cdnRedirect),
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
      download_direct: {
        value: cdktf.booleanToHclTerraform(this._downloadDirect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      excludes_pattern: {
        value: cdktf.stringToHclTerraform(this._excludesPattern),
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
      includes_pattern: {
        value: cdktf.stringToHclTerraform(this._includesPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index_compression_formats: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._indexCompressionFormats),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_keypair_ref: {
        value: cdktf.stringToHclTerraform(this._primaryKeypairRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority_resolution: {
        value: cdktf.booleanToHclTerraform(this._priorityResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_environments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projectEnvironments),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      project_key: {
        value: cdktf.stringToHclTerraform(this._projectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      property_sets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._propertySets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      repo_layout_ref: {
        value: cdktf.stringToHclTerraform(this._repoLayoutRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_keypair_ref: {
        value: cdktf.stringToHclTerraform(this._secondaryKeypairRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trivial_layout: {
        value: cdktf.booleanToHclTerraform(this._trivialLayout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      xray_index: {
        value: cdktf.booleanToHclTerraform(this._xrayIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
