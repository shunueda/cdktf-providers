// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/tf_export
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TfExportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Compress exported results using zip format. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/tf_export#compress TfExport#compress}
  */
  readonly compress?: boolean | cdktf.IResolvable;
  /**
  * Directory where the config and state files will be exported. Defaults to `./genesyscloud`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/tf_export#directory TfExport#directory}
  */
  readonly directory?: string;
  /**
  * Adds a "depends_on" attribute to genesyscloud_flow resources with a list of resources that are referenced inside the flow configuration . This also resolves and exports all the dependent resources for any given resource. Resources mentioned in exclude_attributes will not be exported. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/tf_export#enable_dependency_resolution TfExport#enable_dependency_resolution}
  */
  readonly enableDependencyResolution?: boolean | cdktf.IResolvable;
  /**
  * Attributes to exclude from the config when exporting resources. Each value should be of the form {resource_type}.{attribute}, e.g. 'genesyscloud_user.skills'. Excluded attributes must be optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/tf_export#exclude_attributes TfExport#exclude_attributes}
  */
  readonly excludeAttributes?: string[];
  /**
  * Exclude resources that match either a resource type or a resource type::regular expression.  See export guide for additional information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/tf_export#exclude_filter_resources TfExport#exclude_filter_resources}
  */
  readonly excludeFilterResources?: string[];
  /**
  * Export the config as HCL. Deprecated. Please use the export_format attribute instead Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/tf_export#export_as_hcl TfExport#export_as_hcl}
  */
  readonly exportAsHcl?: boolean | cdktf.IResolvable;
  /**
  * Export attributes that are marked as being Computed and Optional. Does not attempt to export attributes that are explicitly marked as read-only by the provider. Defaults to true to match existing functionality. This attribute's default value will likely switch to false in a future release. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/tf_export#export_computed TfExport#export_computed}
  */
  readonly exportComputed?: boolean | cdktf.IResolvable;
  /**
  * Export the config as hcl or json or json_hcl. Defaults to `json`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/tf_export#export_format TfExport#export_format}
  */
  readonly exportFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/tf_export#id TfExport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ignore Cyclic Dependencies when building the flows and do not throw an error. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/tf_export#ignore_cyclic_deps TfExport#ignore_cyclic_deps}
  */
  readonly ignoreCyclicDeps?: boolean | cdktf.IResolvable;
  /**
  * Include only resources that match either a resource type or a resource type::regular expression.  See export guide for additional information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/tf_export#include_filter_resources TfExport#include_filter_resources}
  */
  readonly includeFilterResources?: string[];
  /**
  * Export a 'terraform.tfstate' file along with the config file. This can be used for orgs to begin managing existing resources with terraform. When `false`, GUID fields will be omitted from the config file unless a resource reference can be supplied. In this case, the resource type will need to be included in the `resource_types` array. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/tf_export#include_state_file TfExport#include_state_file}
  */
  readonly includeStateFile?: boolean | cdktf.IResolvable;
  /**
  * Log permission/product issues rather than fail. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/tf_export#log_permission_errors TfExport#log_permission_errors}
  */
  readonly logPermissionErrors?: boolean | cdktf.IResolvable;
  /**
  * Include only resources that match either a resource type or a resource type::regular expression.  See export guide for additional information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/tf_export#replace_with_datasource TfExport#replace_with_datasource}
  */
  readonly replaceWithDatasource?: string[];
  /**
  * *DEPRECATED: Use include_filter_resources attribute instead* Resource types to export, e.g. 'genesyscloud_user'. Defaults to all exportable types. NOTE: This field is deprecated and will be removed in future release.  Please use the include_filter_resources or exclude_filter_resources attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/tf_export#resource_types TfExport#resource_types}
  */
  readonly resourceTypes?: string[];
  /**
  * Split export files by resource type. This will also split the terraform provider and variable declarations into their own files. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/tf_export#split_files_by_resource TfExport#split_files_by_resource}
  */
  readonly splitFilesByResource?: boolean | cdktf.IResolvable;
  /**
  * When set to `false`, architect flow configuration files will be downloaded as part of the flow export process. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/tf_export#use_legacy_architect_flow_exporter TfExport#use_legacy_architect_flow_exporter}
  */
  readonly useLegacyArchitectFlowExporter?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/tf_export genesyscloud_tf_export}
*/
export class TfExport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_tf_export";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TfExport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TfExport to import
  * @param importFromId The id of the existing TfExport that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/tf_export#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TfExport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_tf_export", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/tf_export genesyscloud_tf_export} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfExportConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TfExportConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_tf_export',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0',
        providerVersionConstraint: '1.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compress = config.compress;
    this._directory = config.directory;
    this._enableDependencyResolution = config.enableDependencyResolution;
    this._excludeAttributes = config.excludeAttributes;
    this._excludeFilterResources = config.excludeFilterResources;
    this._exportAsHcl = config.exportAsHcl;
    this._exportComputed = config.exportComputed;
    this._exportFormat = config.exportFormat;
    this._id = config.id;
    this._ignoreCyclicDeps = config.ignoreCyclicDeps;
    this._includeFilterResources = config.includeFilterResources;
    this._includeStateFile = config.includeStateFile;
    this._logPermissionErrors = config.logPermissionErrors;
    this._replaceWithDatasource = config.replaceWithDatasource;
    this._resourceTypes = config.resourceTypes;
    this._splitFilesByResource = config.splitFilesByResource;
    this._useLegacyArchitectFlowExporter = config.useLegacyArchitectFlowExporter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compress - computed: false, optional: true, required: false
  private _compress?: boolean | cdktf.IResolvable; 
  public get compress() {
    return this.getBooleanAttribute('compress');
  }
  public set compress(value: boolean | cdktf.IResolvable) {
    this._compress = value;
  }
  public resetCompress() {
    this._compress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressInput() {
    return this._compress;
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // enable_dependency_resolution - computed: false, optional: true, required: false
  private _enableDependencyResolution?: boolean | cdktf.IResolvable; 
  public get enableDependencyResolution() {
    return this.getBooleanAttribute('enable_dependency_resolution');
  }
  public set enableDependencyResolution(value: boolean | cdktf.IResolvable) {
    this._enableDependencyResolution = value;
  }
  public resetEnableDependencyResolution() {
    this._enableDependencyResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDependencyResolutionInput() {
    return this._enableDependencyResolution;
  }

  // exclude_attributes - computed: false, optional: true, required: false
  private _excludeAttributes?: string[]; 
  public get excludeAttributes() {
    return this.getListAttribute('exclude_attributes');
  }
  public set excludeAttributes(value: string[]) {
    this._excludeAttributes = value;
  }
  public resetExcludeAttributes() {
    this._excludeAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeAttributesInput() {
    return this._excludeAttributes;
  }

  // exclude_filter_resources - computed: false, optional: true, required: false
  private _excludeFilterResources?: string[]; 
  public get excludeFilterResources() {
    return this.getListAttribute('exclude_filter_resources');
  }
  public set excludeFilterResources(value: string[]) {
    this._excludeFilterResources = value;
  }
  public resetExcludeFilterResources() {
    this._excludeFilterResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFilterResourcesInput() {
    return this._excludeFilterResources;
  }

  // export_as_hcl - computed: false, optional: true, required: false
  private _exportAsHcl?: boolean | cdktf.IResolvable; 
  public get exportAsHcl() {
    return this.getBooleanAttribute('export_as_hcl');
  }
  public set exportAsHcl(value: boolean | cdktf.IResolvable) {
    this._exportAsHcl = value;
  }
  public resetExportAsHcl() {
    this._exportAsHcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportAsHclInput() {
    return this._exportAsHcl;
  }

  // export_computed - computed: false, optional: true, required: false
  private _exportComputed?: boolean | cdktf.IResolvable; 
  public get exportComputed() {
    return this.getBooleanAttribute('export_computed');
  }
  public set exportComputed(value: boolean | cdktf.IResolvable) {
    this._exportComputed = value;
  }
  public resetExportComputed() {
    this._exportComputed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportComputedInput() {
    return this._exportComputed;
  }

  // export_format - computed: false, optional: true, required: false
  private _exportFormat?: string; 
  public get exportFormat() {
    return this.getStringAttribute('export_format');
  }
  public set exportFormat(value: string) {
    this._exportFormat = value;
  }
  public resetExportFormat() {
    this._exportFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportFormatInput() {
    return this._exportFormat;
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

  // ignore_cyclic_deps - computed: false, optional: true, required: false
  private _ignoreCyclicDeps?: boolean | cdktf.IResolvable; 
  public get ignoreCyclicDeps() {
    return this.getBooleanAttribute('ignore_cyclic_deps');
  }
  public set ignoreCyclicDeps(value: boolean | cdktf.IResolvable) {
    this._ignoreCyclicDeps = value;
  }
  public resetIgnoreCyclicDeps() {
    this._ignoreCyclicDeps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCyclicDepsInput() {
    return this._ignoreCyclicDeps;
  }

  // include_filter_resources - computed: false, optional: true, required: false
  private _includeFilterResources?: string[]; 
  public get includeFilterResources() {
    return this.getListAttribute('include_filter_resources');
  }
  public set includeFilterResources(value: string[]) {
    this._includeFilterResources = value;
  }
  public resetIncludeFilterResources() {
    this._includeFilterResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeFilterResourcesInput() {
    return this._includeFilterResources;
  }

  // include_state_file - computed: false, optional: true, required: false
  private _includeStateFile?: boolean | cdktf.IResolvable; 
  public get includeStateFile() {
    return this.getBooleanAttribute('include_state_file');
  }
  public set includeStateFile(value: boolean | cdktf.IResolvable) {
    this._includeStateFile = value;
  }
  public resetIncludeStateFile() {
    this._includeStateFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeStateFileInput() {
    return this._includeStateFile;
  }

  // log_permission_errors - computed: false, optional: true, required: false
  private _logPermissionErrors?: boolean | cdktf.IResolvable; 
  public get logPermissionErrors() {
    return this.getBooleanAttribute('log_permission_errors');
  }
  public set logPermissionErrors(value: boolean | cdktf.IResolvable) {
    this._logPermissionErrors = value;
  }
  public resetLogPermissionErrors() {
    this._logPermissionErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPermissionErrorsInput() {
    return this._logPermissionErrors;
  }

  // replace_with_datasource - computed: false, optional: true, required: false
  private _replaceWithDatasource?: string[]; 
  public get replaceWithDatasource() {
    return this.getListAttribute('replace_with_datasource');
  }
  public set replaceWithDatasource(value: string[]) {
    this._replaceWithDatasource = value;
  }
  public resetReplaceWithDatasource() {
    this._replaceWithDatasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceWithDatasourceInput() {
    return this._replaceWithDatasource;
  }

  // resource_types - computed: false, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // split_files_by_resource - computed: false, optional: true, required: false
  private _splitFilesByResource?: boolean | cdktf.IResolvable; 
  public get splitFilesByResource() {
    return this.getBooleanAttribute('split_files_by_resource');
  }
  public set splitFilesByResource(value: boolean | cdktf.IResolvable) {
    this._splitFilesByResource = value;
  }
  public resetSplitFilesByResource() {
    this._splitFilesByResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitFilesByResourceInput() {
    return this._splitFilesByResource;
  }

  // use_legacy_architect_flow_exporter - computed: false, optional: true, required: false
  private _useLegacyArchitectFlowExporter?: boolean | cdktf.IResolvable; 
  public get useLegacyArchitectFlowExporter() {
    return this.getBooleanAttribute('use_legacy_architect_flow_exporter');
  }
  public set useLegacyArchitectFlowExporter(value: boolean | cdktf.IResolvable) {
    this._useLegacyArchitectFlowExporter = value;
  }
  public resetUseLegacyArchitectFlowExporter() {
    this._useLegacyArchitectFlowExporter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLegacyArchitectFlowExporterInput() {
    return this._useLegacyArchitectFlowExporter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compress: cdktf.booleanToTerraform(this._compress),
      directory: cdktf.stringToTerraform(this._directory),
      enable_dependency_resolution: cdktf.booleanToTerraform(this._enableDependencyResolution),
      exclude_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeAttributes),
      exclude_filter_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeFilterResources),
      export_as_hcl: cdktf.booleanToTerraform(this._exportAsHcl),
      export_computed: cdktf.booleanToTerraform(this._exportComputed),
      export_format: cdktf.stringToTerraform(this._exportFormat),
      id: cdktf.stringToTerraform(this._id),
      ignore_cyclic_deps: cdktf.booleanToTerraform(this._ignoreCyclicDeps),
      include_filter_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includeFilterResources),
      include_state_file: cdktf.booleanToTerraform(this._includeStateFile),
      log_permission_errors: cdktf.booleanToTerraform(this._logPermissionErrors),
      replace_with_datasource: cdktf.listMapper(cdktf.stringToTerraform, false)(this._replaceWithDatasource),
      resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourceTypes),
      split_files_by_resource: cdktf.booleanToTerraform(this._splitFilesByResource),
      use_legacy_architect_flow_exporter: cdktf.booleanToTerraform(this._useLegacyArchitectFlowExporter),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compress: {
        value: cdktf.booleanToHclTerraform(this._compress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      directory: {
        value: cdktf.stringToHclTerraform(this._directory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_dependency_resolution: {
        value: cdktf.booleanToHclTerraform(this._enableDependencyResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exclude_attributes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeAttributes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      exclude_filter_resources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeFilterResources),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      export_as_hcl: {
        value: cdktf.booleanToHclTerraform(this._exportAsHcl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      export_computed: {
        value: cdktf.booleanToHclTerraform(this._exportComputed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      export_format: {
        value: cdktf.stringToHclTerraform(this._exportFormat),
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
      ignore_cyclic_deps: {
        value: cdktf.booleanToHclTerraform(this._ignoreCyclicDeps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_filter_resources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includeFilterResources),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      include_state_file: {
        value: cdktf.booleanToHclTerraform(this._includeStateFile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_permission_errors: {
        value: cdktf.booleanToHclTerraform(this._logPermissionErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replace_with_datasource: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._replaceWithDatasource),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      resource_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resourceTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      split_files_by_resource: {
        value: cdktf.booleanToHclTerraform(this._splitFilesByResource),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_legacy_architect_flow_exporter: {
        value: cdktf.booleanToHclTerraform(this._useLegacyArchitectFlowExporter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
