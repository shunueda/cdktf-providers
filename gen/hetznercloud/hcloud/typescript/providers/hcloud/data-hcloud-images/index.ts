// https://registry.terraform.io/providers/hetznercloud/hcloud/1.55.0/docs/data-sources/images
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcloudImagesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.55.0/docs/data-sources/images#id DataHcloudImages#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.55.0/docs/data-sources/images#include_deprecated DataHcloudImages#include_deprecated}
  */
  readonly includeDeprecated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.55.0/docs/data-sources/images#most_recent DataHcloudImages#most_recent}
  */
  readonly mostRecent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.55.0/docs/data-sources/images#with_architecture DataHcloudImages#with_architecture}
  */
  readonly withArchitecture?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.55.0/docs/data-sources/images#with_selector DataHcloudImages#with_selector}
  */
  readonly withSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.55.0/docs/data-sources/images#with_status DataHcloudImages#with_status}
  */
  readonly withStatus?: string[];
}
export interface DataHcloudImagesImages {
}

export function dataHcloudImagesImagesToTerraform(struct?: DataHcloudImagesImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHcloudImagesImagesToHclTerraform(struct?: DataHcloudImagesImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHcloudImagesImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHcloudImagesImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcloudImagesImages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // architecture - computed: true, optional: false, required: false
  public get architecture() {
    return this.getStringAttribute('architecture');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // deprecated - computed: true, optional: false, required: false
  public get deprecated() {
    return this.getStringAttribute('deprecated');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // os_flavor - computed: true, optional: false, required: false
  public get osFlavor() {
    return this.getStringAttribute('os_flavor');
  }

  // os_version - computed: true, optional: false, required: false
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }

  // rapid_deploy - computed: true, optional: false, required: false
  public get rapidDeploy() {
    return this.getBooleanAttribute('rapid_deploy');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataHcloudImagesImagesList extends cdktf.ComplexList {

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
  public get(index: number): DataHcloudImagesImagesOutputReference {
    return new DataHcloudImagesImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.55.0/docs/data-sources/images hcloud_images}
*/
export class DataHcloudImages extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcloud_images";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHcloudImages resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHcloudImages to import
  * @param importFromId The id of the existing DataHcloudImages that should be imported. Refer to the {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.55.0/docs/data-sources/images#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHcloudImages to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcloud_images", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hetznercloud/hcloud/1.55.0/docs/data-sources/images hcloud_images} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcloudImagesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataHcloudImagesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'hcloud_images',
      terraformGeneratorMetadata: {
        providerName: 'hcloud',
        providerVersion: '1.55.0'
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
    this._includeDeprecated = config.includeDeprecated;
    this._mostRecent = config.mostRecent;
    this._withArchitecture = config.withArchitecture;
    this._withSelector = config.withSelector;
    this._withStatus = config.withStatus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // images - computed: true, optional: false, required: false
  private _images = new DataHcloudImagesImagesList(this, "images", false);
  public get images() {
    return this._images;
  }

  // include_deprecated - computed: false, optional: true, required: false
  private _includeDeprecated?: boolean | cdktf.IResolvable; 
  public get includeDeprecated() {
    return this.getBooleanAttribute('include_deprecated');
  }
  public set includeDeprecated(value: boolean | cdktf.IResolvable) {
    this._includeDeprecated = value;
  }
  public resetIncludeDeprecated() {
    this._includeDeprecated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDeprecatedInput() {
    return this._includeDeprecated;
  }

  // most_recent - computed: false, optional: true, required: false
  private _mostRecent?: boolean | cdktf.IResolvable; 
  public get mostRecent() {
    return this.getBooleanAttribute('most_recent');
  }
  public set mostRecent(value: boolean | cdktf.IResolvable) {
    this._mostRecent = value;
  }
  public resetMostRecent() {
    this._mostRecent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostRecentInput() {
    return this._mostRecent;
  }

  // with_architecture - computed: false, optional: true, required: false
  private _withArchitecture?: string[]; 
  public get withArchitecture() {
    return cdktf.Fn.tolist(this.getListAttribute('with_architecture'));
  }
  public set withArchitecture(value: string[]) {
    this._withArchitecture = value;
  }
  public resetWithArchitecture() {
    this._withArchitecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withArchitectureInput() {
    return this._withArchitecture;
  }

  // with_selector - computed: false, optional: true, required: false
  private _withSelector?: string; 
  public get withSelector() {
    return this.getStringAttribute('with_selector');
  }
  public set withSelector(value: string) {
    this._withSelector = value;
  }
  public resetWithSelector() {
    this._withSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withSelectorInput() {
    return this._withSelector;
  }

  // with_status - computed: false, optional: true, required: false
  private _withStatus?: string[]; 
  public get withStatus() {
    return this.getListAttribute('with_status');
  }
  public set withStatus(value: string[]) {
    this._withStatus = value;
  }
  public resetWithStatus() {
    this._withStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withStatusInput() {
    return this._withStatus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      include_deprecated: cdktf.booleanToTerraform(this._includeDeprecated),
      most_recent: cdktf.booleanToTerraform(this._mostRecent),
      with_architecture: cdktf.listMapper(cdktf.stringToTerraform, false)(this._withArchitecture),
      with_selector: cdktf.stringToTerraform(this._withSelector),
      with_status: cdktf.listMapper(cdktf.stringToTerraform, false)(this._withStatus),
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
      include_deprecated: {
        value: cdktf.booleanToHclTerraform(this._includeDeprecated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      most_recent: {
        value: cdktf.booleanToHclTerraform(this._mostRecent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      with_architecture: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._withArchitecture),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      with_selector: {
        value: cdktf.stringToHclTerraform(this._withSelector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      with_status: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._withStatus),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
