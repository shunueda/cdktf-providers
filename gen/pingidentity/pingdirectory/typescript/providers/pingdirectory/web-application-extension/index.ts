// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/web_application_extension
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebApplicationExtensionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the base context path that should be used by HTTP clients to reference content. The value must start with a forward slash and at least one additional character and must represent a valid HTTP context path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/web_application_extension#base_context_path WebApplicationExtension#base_context_path}
  */
  readonly baseContextPath: string;
  /**
  * Specifies the path to the deployment descriptor file when used with document-root-directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/web_application_extension#deployment_descriptor_file WebApplicationExtension#deployment_descriptor_file}
  */
  readonly deploymentDescriptorFile?: string;
  /**
  * A description for this Web Application Extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/web_application_extension#description WebApplicationExtension#description}
  */
  readonly description?: string;
  /**
  * Specifies the path to the directory on the local filesystem containing the files to be served by this Web Application Extension. The path must exist, and it must be a directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/web_application_extension#document_root_directory WebApplicationExtension#document_root_directory}
  */
  readonly documentRootDirectory?: string;
  /**
  * Specifies an initialization parameter to pass into the web application during startup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/web_application_extension#init_parameter WebApplicationExtension#init_parameter}
  */
  readonly initParameter?: string[];
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/web_application_extension#name WebApplicationExtension#name}
  */
  readonly name: string;
  /**
  * Specifies the path to the directory that may be used to store temporary files such as extracted WAR files and compiled JSP files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/web_application_extension#temporary_directory WebApplicationExtension#temporary_directory}
  */
  readonly temporaryDirectory?: string;
  /**
  * The type of Web Application Extension resource. Options are ['console', 'generic']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/web_application_extension#type WebApplicationExtension#type}
  */
  readonly type: string;
  /**
  * Specifies the path to a standard web application archive (WAR) file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/web_application_extension#war_file WebApplicationExtension#war_file}
  */
  readonly warFile?: string;
}
export interface WebApplicationExtensionRequiredActions {
}

export function webApplicationExtensionRequiredActionsToTerraform(struct?: WebApplicationExtensionRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function webApplicationExtensionRequiredActionsToHclTerraform(struct?: WebApplicationExtensionRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WebApplicationExtensionRequiredActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WebApplicationExtensionRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebApplicationExtensionRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class WebApplicationExtensionRequiredActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WebApplicationExtensionRequiredActionsOutputReference {
    return new WebApplicationExtensionRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/web_application_extension pingdirectory_web_application_extension}
*/
export class WebApplicationExtension extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_web_application_extension";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebApplicationExtension resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebApplicationExtension to import
  * @param importFromId The id of the existing WebApplicationExtension that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/web_application_extension#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebApplicationExtension to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_web_application_extension", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/web_application_extension pingdirectory_web_application_extension} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebApplicationExtensionConfig
  */
  public constructor(scope: Construct, id: string, config: WebApplicationExtensionConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_web_application_extension',
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
    this._baseContextPath = config.baseContextPath;
    this._deploymentDescriptorFile = config.deploymentDescriptorFile;
    this._description = config.description;
    this._documentRootDirectory = config.documentRootDirectory;
    this._initParameter = config.initParameter;
    this._name = config.name;
    this._temporaryDirectory = config.temporaryDirectory;
    this._type = config.type;
    this._warFile = config.warFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_context_path - computed: false, optional: false, required: true
  private _baseContextPath?: string; 
  public get baseContextPath() {
    return this.getStringAttribute('base_context_path');
  }
  public set baseContextPath(value: string) {
    this._baseContextPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseContextPathInput() {
    return this._baseContextPath;
  }

  // deployment_descriptor_file - computed: false, optional: true, required: false
  private _deploymentDescriptorFile?: string; 
  public get deploymentDescriptorFile() {
    return this.getStringAttribute('deployment_descriptor_file');
  }
  public set deploymentDescriptorFile(value: string) {
    this._deploymentDescriptorFile = value;
  }
  public resetDeploymentDescriptorFile() {
    this._deploymentDescriptorFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentDescriptorFileInput() {
    return this._deploymentDescriptorFile;
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

  // document_root_directory - computed: false, optional: true, required: false
  private _documentRootDirectory?: string; 
  public get documentRootDirectory() {
    return this.getStringAttribute('document_root_directory');
  }
  public set documentRootDirectory(value: string) {
    this._documentRootDirectory = value;
  }
  public resetDocumentRootDirectory() {
    this._documentRootDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentRootDirectoryInput() {
    return this._documentRootDirectory;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // init_parameter - computed: true, optional: true, required: false
  private _initParameter?: string[]; 
  public get initParameter() {
    return cdktf.Fn.tolist(this.getListAttribute('init_parameter'));
  }
  public set initParameter(value: string[]) {
    this._initParameter = value;
  }
  public resetInitParameter() {
    this._initParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initParameterInput() {
    return this._initParameter;
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new WebApplicationExtensionRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // temporary_directory - computed: false, optional: true, required: false
  private _temporaryDirectory?: string; 
  public get temporaryDirectory() {
    return this.getStringAttribute('temporary_directory');
  }
  public set temporaryDirectory(value: string) {
    this._temporaryDirectory = value;
  }
  public resetTemporaryDirectory() {
    this._temporaryDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryDirectoryInput() {
    return this._temporaryDirectory;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // war_file - computed: false, optional: true, required: false
  private _warFile?: string; 
  public get warFile() {
    return this.getStringAttribute('war_file');
  }
  public set warFile(value: string) {
    this._warFile = value;
  }
  public resetWarFile() {
    this._warFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warFileInput() {
    return this._warFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_context_path: cdktf.stringToTerraform(this._baseContextPath),
      deployment_descriptor_file: cdktf.stringToTerraform(this._deploymentDescriptorFile),
      description: cdktf.stringToTerraform(this._description),
      document_root_directory: cdktf.stringToTerraform(this._documentRootDirectory),
      init_parameter: cdktf.listMapper(cdktf.stringToTerraform, false)(this._initParameter),
      name: cdktf.stringToTerraform(this._name),
      temporary_directory: cdktf.stringToTerraform(this._temporaryDirectory),
      type: cdktf.stringToTerraform(this._type),
      war_file: cdktf.stringToTerraform(this._warFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_context_path: {
        value: cdktf.stringToHclTerraform(this._baseContextPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_descriptor_file: {
        value: cdktf.stringToHclTerraform(this._deploymentDescriptorFile),
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
      document_root_directory: {
        value: cdktf.stringToHclTerraform(this._documentRootDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      init_parameter: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._initParameter),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      temporary_directory: {
        value: cdktf.stringToHclTerraform(this._temporaryDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      war_file: {
        value: cdktf.stringToHclTerraform(this._warFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
