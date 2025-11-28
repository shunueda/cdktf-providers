// https://registry.terraform.io/providers/metio/git/2025.11.28/docs/data-sources/tags
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitTagsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to request annotated tags. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.28/docs/data-sources/tags#annotated DataGitTags#annotated}
  */
  readonly annotated?: boolean | cdktf.IResolvable;
  /**
  * The path to the local Git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.28/docs/data-sources/tags#directory DataGitTags#directory}
  */
  readonly directory: string;
  /**
  * Whether to request lightweight tags. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.11.28/docs/data-sources/tags#lightweight DataGitTags#lightweight}
  */
  readonly lightweight?: boolean | cdktf.IResolvable;
}
export interface DataGitTagsTags {
}

export function dataGitTagsTagsToTerraform(struct?: DataGitTagsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGitTagsTagsToHclTerraform(struct?: DataGitTagsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGitTagsTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataGitTagsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGitTagsTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // annotated - computed: true, optional: false, required: false
  public get annotated() {
    return this.getBooleanAttribute('annotated');
  }

  // lightweight - computed: true, optional: false, required: false
  public get lightweight() {
    return this.getBooleanAttribute('lightweight');
  }

  // sha1 - computed: true, optional: false, required: false
  public get sha1() {
    return this.getStringAttribute('sha1');
  }
}

export class DataGitTagsTagsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataGitTagsTagsOutputReference {
    return new DataGitTagsTagsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/git/2025.11.28/docs/data-sources/tags git_tags}
*/
export class DataGitTags extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "git_tags";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitTags resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitTags to import
  * @param importFromId The id of the existing DataGitTags that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/git/2025.11.28/docs/data-sources/tags#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitTags to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "git_tags", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/git/2025.11.28/docs/data-sources/tags git_tags} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitTagsConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitTagsConfig) {
    super(scope, id, {
      terraformResourceType: 'git_tags',
      terraformGeneratorMetadata: {
        providerName: 'git',
        providerVersion: '2025.11.28',
        providerVersionConstraint: '2025.11.28'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotated = config.annotated;
    this._directory = config.directory;
    this._lightweight = config.lightweight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotated - computed: false, optional: true, required: false
  private _annotated?: boolean | cdktf.IResolvable; 
  public get annotated() {
    return this.getBooleanAttribute('annotated');
  }
  public set annotated(value: boolean | cdktf.IResolvable) {
    this._annotated = value;
  }
  public resetAnnotated() {
    this._annotated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotatedInput() {
    return this._annotated;
  }

  // directory - computed: false, optional: false, required: true
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lightweight - computed: false, optional: true, required: false
  private _lightweight?: boolean | cdktf.IResolvable; 
  public get lightweight() {
    return this.getBooleanAttribute('lightweight');
  }
  public set lightweight(value: boolean | cdktf.IResolvable) {
    this._lightweight = value;
  }
  public resetLightweight() {
    this._lightweight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightweightInput() {
    return this._lightweight;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataGitTagsTagsMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotated: cdktf.booleanToTerraform(this._annotated),
      directory: cdktf.stringToTerraform(this._directory),
      lightweight: cdktf.booleanToTerraform(this._lightweight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotated: {
        value: cdktf.booleanToHclTerraform(this._annotated),
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
      lightweight: {
        value: cdktf.booleanToHclTerraform(this._lightweight),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
