// https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_db_schema
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformDbSchemaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_db_schema#description PlatformDbSchema#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_db_schema#id PlatformDbSchema#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_db_schema#identifier PlatformDbSchema#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_db_schema#name PlatformDbSchema#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_db_schema#org_id PlatformDbSchema#org_id}
  */
  readonly orgId: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_db_schema#project_id PlatformDbSchema#project_id}
  */
  readonly projectId: string;
  /**
  * The service associated with schema
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_db_schema#service PlatformDbSchema#service}
  */
  readonly service?: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_db_schema#tags PlatformDbSchema#tags}
  */
  readonly tags?: string[];
  /**
  * Type of the database schema. Valid values are: SCRIPT, REPOSITORY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_db_schema#type PlatformDbSchema#type}
  */
  readonly type?: string;
  /**
  * changelog_script block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_db_schema#changelog_script PlatformDbSchema#changelog_script}
  */
  readonly changelogScript?: PlatformDbSchemaChangelogScript;
  /**
  * schema_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_db_schema#schema_source PlatformDbSchema#schema_source}
  */
  readonly schemaSource?: PlatformDbSchemaSchemaSource;
}
export interface PlatformDbSchemaChangelogScript {
  /**
  * Script to clone changeSets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_db_schema#command PlatformDbSchema#command}
  */
  readonly command?: string;
  /**
  * The fully-qualified name (FQN) of the image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_db_schema#image PlatformDbSchema#image}
  */
  readonly image?: string;
  /**
  * Path to changeLog file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_db_schema#location PlatformDbSchema#location}
  */
  readonly location?: string;
  /**
  * Type of the shell. For example Sh or Bash
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_db_schema#shell PlatformDbSchema#shell}
  */
  readonly shell?: string;
}

export function platformDbSchemaChangelogScriptToTerraform(struct?: PlatformDbSchemaChangelogScriptOutputReference | PlatformDbSchemaChangelogScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    image: cdktf.stringToTerraform(struct!.image),
    location: cdktf.stringToTerraform(struct!.location),
    shell: cdktf.stringToTerraform(struct!.shell),
  }
}


export function platformDbSchemaChangelogScriptToHclTerraform(struct?: PlatformDbSchemaChangelogScriptOutputReference | PlatformDbSchemaChangelogScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shell: {
      value: cdktf.stringToHclTerraform(struct!.shell),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformDbSchemaChangelogScriptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformDbSchemaChangelogScript | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._shell !== undefined) {
      hasAnyValues = true;
      internalValueResult.shell = this._shell;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformDbSchemaChangelogScript | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
      this._image = undefined;
      this._location = undefined;
      this._shell = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
      this._image = value.image;
      this._location = value.location;
      this._shell = value.shell;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // shell - computed: false, optional: true, required: false
  private _shell?: string; 
  public get shell() {
    return this.getStringAttribute('shell');
  }
  public set shell(value: string) {
    this._shell = value;
  }
  public resetShell() {
    this._shell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shellInput() {
    return this._shell;
  }
}
export interface PlatformDbSchemaSchemaSource {
  /**
  * If connector type is artifactory, path to the archive file which contains the changeLog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_db_schema#archive_path PlatformDbSchema#archive_path}
  */
  readonly archivePath?: string;
  /**
  * Connector to repository at which to find details about the database schema
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_db_schema#connector PlatformDbSchema#connector}
  */
  readonly connector: string;
  /**
  * The path within the specified repository at which to find details about the database schema
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_db_schema#location PlatformDbSchema#location}
  */
  readonly location: string;
  /**
  * If connector url is of account, which repository to connect to using the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_db_schema#repo PlatformDbSchema#repo}
  */
  readonly repo?: string;
}

export function platformDbSchemaSchemaSourceToTerraform(struct?: PlatformDbSchemaSchemaSourceOutputReference | PlatformDbSchemaSchemaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_path: cdktf.stringToTerraform(struct!.archivePath),
    connector: cdktf.stringToTerraform(struct!.connector),
    location: cdktf.stringToTerraform(struct!.location),
    repo: cdktf.stringToTerraform(struct!.repo),
  }
}


export function platformDbSchemaSchemaSourceToHclTerraform(struct?: PlatformDbSchemaSchemaSourceOutputReference | PlatformDbSchemaSchemaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_path: {
      value: cdktf.stringToHclTerraform(struct!.archivePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connector: {
      value: cdktf.stringToHclTerraform(struct!.connector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformDbSchemaSchemaSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformDbSchemaSchemaSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archivePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.archivePath = this._archivePath;
    }
    if (this._connector !== undefined) {
      hasAnyValues = true;
      internalValueResult.connector = this._connector;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformDbSchemaSchemaSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archivePath = undefined;
      this._connector = undefined;
      this._location = undefined;
      this._repo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archivePath = value.archivePath;
      this._connector = value.connector;
      this._location = value.location;
      this._repo = value.repo;
    }
  }

  // archive_path - computed: false, optional: true, required: false
  private _archivePath?: string; 
  public get archivePath() {
    return this.getStringAttribute('archive_path');
  }
  public set archivePath(value: string) {
    this._archivePath = value;
  }
  public resetArchivePath() {
    this._archivePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archivePathInput() {
    return this._archivePath;
  }

  // connector - computed: false, optional: false, required: true
  private _connector?: string; 
  public get connector() {
    return this.getStringAttribute('connector');
  }
  public set connector(value: string) {
    this._connector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorInput() {
    return this._connector;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_db_schema harness_platform_db_schema}
*/
export class PlatformDbSchema extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_db_schema";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformDbSchema resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformDbSchema to import
  * @param importFromId The id of the existing PlatformDbSchema that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_db_schema#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformDbSchema to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_db_schema", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_db_schema harness_platform_db_schema} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformDbSchemaConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformDbSchemaConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_db_schema',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.2',
        providerVersionConstraint: '0.39.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._service = config.service;
    this._tags = config.tags;
    this._type = config.type;
    this._changelogScript.internalValue = config.changelogScript;
    this._schemaSource.internalValue = config.schemaSource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // changelog_script - computed: false, optional: true, required: false
  private _changelogScript = new PlatformDbSchemaChangelogScriptOutputReference(this, "changelog_script");
  public get changelogScript() {
    return this._changelogScript;
  }
  public putChangelogScript(value: PlatformDbSchemaChangelogScript) {
    this._changelogScript.internalValue = value;
  }
  public resetChangelogScript() {
    this._changelogScript.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changelogScriptInput() {
    return this._changelogScript.internalValue;
  }

  // schema_source - computed: false, optional: true, required: false
  private _schemaSource = new PlatformDbSchemaSchemaSourceOutputReference(this, "schema_source");
  public get schemaSource() {
    return this._schemaSource;
  }
  public putSchemaSource(value: PlatformDbSchemaSchemaSource) {
    this._schemaSource.internalValue = value;
  }
  public resetSchemaSource() {
    this._schemaSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaSourceInput() {
    return this._schemaSource.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      service: cdktf.stringToTerraform(this._service),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      changelog_script: platformDbSchemaChangelogScriptToTerraform(this._changelogScript.internalValue),
      schema_source: platformDbSchemaSchemaSourceToTerraform(this._schemaSource.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      changelog_script: {
        value: platformDbSchemaChangelogScriptToHclTerraform(this._changelogScript.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformDbSchemaChangelogScriptList",
      },
      schema_source: {
        value: platformDbSchemaSchemaSourceToHclTerraform(this._schemaSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformDbSchemaSchemaSourceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
