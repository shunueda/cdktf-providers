// https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/flink_artifact
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlinkArtifactConfig extends cdktf.TerraformMetaArguments {
  /**
  * The artifact file for Flink Artifact in JAR or ZIP format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/flink_artifact#artifact_file FlinkArtifact#artifact_file}
  */
  readonly artifactFile?: string;
  /**
  * Java class or alias for the Flink Artifact as provided by developer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/flink_artifact#class FlinkArtifact#class}
  */
  readonly class?: string;
  /**
  * Cloud provider where the Flink Artifact archive is uploaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/flink_artifact#cloud FlinkArtifact#cloud}
  */
  readonly cloud: string;
  /**
  * Archive format of the Flink Artifact (JAR or ZIP).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/flink_artifact#content_format FlinkArtifact#content_format}
  */
  readonly contentFormat?: string;
  /**
  * Description of the Flink Artifact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/flink_artifact#description FlinkArtifact#description}
  */
  readonly description?: string;
  /**
  * The unique name of the Flink Artifact per cloud, region, environment scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/flink_artifact#display_name FlinkArtifact#display_name}
  */
  readonly displayName: string;
  /**
  * Documentation link of the Flink Artifact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/flink_artifact#documentation_link FlinkArtifact#documentation_link}
  */
  readonly documentationLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/flink_artifact#id FlinkArtifact#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Cloud provider region the Flink Artifact archive is uploaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/flink_artifact#region FlinkArtifact#region}
  */
  readonly region: string;
  /**
  * Runtime language of the Flink Artifact as Python or JAVA. The default runtime language is JAVA. Defaults to `JAVA`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/flink_artifact#runtime_language FlinkArtifact#runtime_language}
  */
  readonly runtimeLanguage?: string;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/flink_artifact#environment FlinkArtifact#environment}
  */
  readonly environment: FlinkArtifactEnvironment;
}
export interface FlinkArtifactVersions {
}

export function flinkArtifactVersionsToTerraform(struct?: FlinkArtifactVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function flinkArtifactVersionsToHclTerraform(struct?: FlinkArtifactVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FlinkArtifactVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FlinkArtifactVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlinkArtifactVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class FlinkArtifactVersionsList extends cdktf.ComplexList {

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
  public get(index: number): FlinkArtifactVersionsOutputReference {
    return new FlinkArtifactVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FlinkArtifactEnvironment {
  /**
  * The unique identifier for the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/flink_artifact#id FlinkArtifact#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function flinkArtifactEnvironmentToTerraform(struct?: FlinkArtifactEnvironmentOutputReference | FlinkArtifactEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function flinkArtifactEnvironmentToHclTerraform(struct?: FlinkArtifactEnvironmentOutputReference | FlinkArtifactEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlinkArtifactEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FlinkArtifactEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlinkArtifactEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/flink_artifact confluent_flink_artifact}
*/
export class FlinkArtifact extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_flink_artifact";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FlinkArtifact resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FlinkArtifact to import
  * @param importFromId The id of the existing FlinkArtifact that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/flink_artifact#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FlinkArtifact to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_flink_artifact", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.54.0/docs/resources/flink_artifact confluent_flink_artifact} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlinkArtifactConfig
  */
  public constructor(scope: Construct, id: string, config: FlinkArtifactConfig) {
    super(scope, id, {
      terraformResourceType: 'confluent_flink_artifact',
      terraformGeneratorMetadata: {
        providerName: 'confluent',
        providerVersion: '2.54.0',
        providerVersionConstraint: '2.54.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._artifactFile = config.artifactFile;
    this._class = config.class;
    this._cloud = config.cloud;
    this._contentFormat = config.contentFormat;
    this._description = config.description;
    this._displayName = config.displayName;
    this._documentationLink = config.documentationLink;
    this._id = config.id;
    this._region = config.region;
    this._runtimeLanguage = config.runtimeLanguage;
    this._environment.internalValue = config.environment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // artifact_file - computed: false, optional: true, required: false
  private _artifactFile?: string; 
  public get artifactFile() {
    return this.getStringAttribute('artifact_file');
  }
  public set artifactFile(value: string) {
    this._artifactFile = value;
  }
  public resetArtifactFile() {
    this._artifactFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactFileInput() {
    return this._artifactFile;
  }

  // class - computed: false, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // cloud - computed: false, optional: false, required: true
  private _cloud?: string; 
  public get cloud() {
    return this.getStringAttribute('cloud');
  }
  public set cloud(value: string) {
    this._cloud = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
  }

  // content_format - computed: true, optional: true, required: false
  private _contentFormat?: string; 
  public get contentFormat() {
    return this.getStringAttribute('content_format');
  }
  public set contentFormat(value: string) {
    this._contentFormat = value;
  }
  public resetContentFormat() {
    this._contentFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentFormatInput() {
    return this._contentFormat;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // documentation_link - computed: false, optional: true, required: false
  private _documentationLink?: string; 
  public get documentationLink() {
    return this.getStringAttribute('documentation_link');
  }
  public set documentationLink(value: string) {
    this._documentationLink = value;
  }
  public resetDocumentationLink() {
    this._documentationLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentationLinkInput() {
    return this._documentationLink;
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

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // runtime_language - computed: false, optional: true, required: false
  private _runtimeLanguage?: string; 
  public get runtimeLanguage() {
    return this.getStringAttribute('runtime_language');
  }
  public set runtimeLanguage(value: string) {
    this._runtimeLanguage = value;
  }
  public resetRuntimeLanguage() {
    this._runtimeLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeLanguageInput() {
    return this._runtimeLanguage;
  }

  // versions - computed: true, optional: false, required: false
  private _versions = new FlinkArtifactVersionsList(this, "versions", false);
  public get versions() {
    return this._versions;
  }

  // environment - computed: false, optional: false, required: true
  private _environment = new FlinkArtifactEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: FlinkArtifactEnvironment) {
    this._environment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      artifact_file: cdktf.stringToTerraform(this._artifactFile),
      class: cdktf.stringToTerraform(this._class),
      cloud: cdktf.stringToTerraform(this._cloud),
      content_format: cdktf.stringToTerraform(this._contentFormat),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      documentation_link: cdktf.stringToTerraform(this._documentationLink),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      runtime_language: cdktf.stringToTerraform(this._runtimeLanguage),
      environment: flinkArtifactEnvironmentToTerraform(this._environment.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      artifact_file: {
        value: cdktf.stringToHclTerraform(this._artifactFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      class: {
        value: cdktf.stringToHclTerraform(this._class),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud: {
        value: cdktf.stringToHclTerraform(this._cloud),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_format: {
        value: cdktf.stringToHclTerraform(this._contentFormat),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      documentation_link: {
        value: cdktf.stringToHclTerraform(this._documentationLink),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime_language: {
        value: cdktf.stringToHclTerraform(this._runtimeLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: flinkArtifactEnvironmentToHclTerraform(this._environment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FlinkArtifactEnvironmentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
