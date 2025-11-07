// https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/live_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LiveSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/live_source#http_package_configurations LiveSource#http_package_configurations}
  */
  readonly httpPackageConfigurations: LiveSourceHttpPackageConfigurations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/live_source#name LiveSource#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/live_source#source_location_name LiveSource#source_location_name}
  */
  readonly sourceLocationName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/live_source#tags LiveSource#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface LiveSourceHttpPackageConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/live_source#path LiveSource#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/live_source#source_group LiveSource#source_group}
  */
  readonly sourceGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/live_source#type LiveSource#type}
  */
  readonly type: string;
}

export function liveSourceHttpPackageConfigurationsToTerraform(struct?: LiveSourceHttpPackageConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    source_group: cdktf.stringToTerraform(struct!.sourceGroup),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function liveSourceHttpPackageConfigurationsToHclTerraform(struct?: LiveSourceHttpPackageConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_group: {
      value: cdktf.stringToHclTerraform(struct!.sourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LiveSourceHttpPackageConfigurationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LiveSourceHttpPackageConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._sourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceGroup = this._sourceGroup;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LiveSourceHttpPackageConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._sourceGroup = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._sourceGroup = value.sourceGroup;
      this._type = value.type;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // source_group - computed: false, optional: false, required: true
  private _sourceGroup?: string; 
  public get sourceGroup() {
    return this.getStringAttribute('source_group');
  }
  public set sourceGroup(value: string) {
    this._sourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceGroupInput() {
    return this._sourceGroup;
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
}

export class LiveSourceHttpPackageConfigurationsList extends cdktf.ComplexList {
  public internalValue? : LiveSourceHttpPackageConfigurations[] | cdktf.IResolvable

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
  public get(index: number): LiveSourceHttpPackageConfigurationsOutputReference {
    return new LiveSourceHttpPackageConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/live_source awsmt_live_source}
*/
export class LiveSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awsmt_live_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LiveSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LiveSource to import
  * @param importFromId The id of the existing LiveSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/live_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LiveSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awsmt_live_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/live_source awsmt_live_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LiveSourceConfig
  */
  public constructor(scope: Construct, id: string, config: LiveSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'awsmt_live_source',
      terraformGeneratorMetadata: {
        providerName: 'awsmt',
        providerVersion: '2.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._httpPackageConfigurations.internalValue = config.httpPackageConfigurations;
    this._name = config.name;
    this._sourceLocationName = config.sourceLocationName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // http_package_configurations - computed: false, optional: false, required: true
  private _httpPackageConfigurations = new LiveSourceHttpPackageConfigurationsList(this, "http_package_configurations", false);
  public get httpPackageConfigurations() {
    return this._httpPackageConfigurations;
  }
  public putHttpPackageConfigurations(value: LiveSourceHttpPackageConfigurations[] | cdktf.IResolvable) {
    this._httpPackageConfigurations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPackageConfigurationsInput() {
    return this._httpPackageConfigurations.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
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

  // source_location_name - computed: false, optional: false, required: true
  private _sourceLocationName?: string; 
  public get sourceLocationName() {
    return this.getStringAttribute('source_location_name');
  }
  public set sourceLocationName(value: string) {
    this._sourceLocationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLocationNameInput() {
    return this._sourceLocationName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      http_package_configurations: cdktf.listMapper(liveSourceHttpPackageConfigurationsToTerraform, false)(this._httpPackageConfigurations.internalValue),
      name: cdktf.stringToTerraform(this._name),
      source_location_name: cdktf.stringToTerraform(this._sourceLocationName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      http_package_configurations: {
        value: cdktf.listMapperHcl(liveSourceHttpPackageConfigurationsToHclTerraform, false)(this._httpPackageConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LiveSourceHttpPackageConfigurationsList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_location_name: {
        value: cdktf.stringToHclTerraform(this._sourceLocationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
