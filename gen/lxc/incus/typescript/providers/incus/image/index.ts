// https://registry.terraform.io/providers/lxc/incus/1.0.0/docs/resources/image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs/resources/image#project Image#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs/resources/image#remote Image#remote}
  */
  readonly remote?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs/resources/image#source_file Image#source_file}
  */
  readonly sourceFile?: ImageSourceFile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs/resources/image#source_image Image#source_image}
  */
  readonly sourceImage?: ImageSourceImage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs/resources/image#source_instance Image#source_instance}
  */
  readonly sourceInstance?: ImageSourceInstance;
  /**
  * alias block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs/resources/image#alias Image#alias}
  */
  readonly alias?: ImageAlias[] | cdktf.IResolvable;
}
export interface ImageSourceFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs/resources/image#data_path Image#data_path}
  */
  readonly dataPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs/resources/image#metadata_path Image#metadata_path}
  */
  readonly metadataPath?: string;
}

export function imageSourceFileToTerraform(struct?: ImageSourceFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_path: cdktf.stringToTerraform(struct!.dataPath),
    metadata_path: cdktf.stringToTerraform(struct!.metadataPath),
  }
}


export function imageSourceFileToHclTerraform(struct?: ImageSourceFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_path: {
      value: cdktf.stringToHclTerraform(struct!.dataPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_path: {
      value: cdktf.stringToHclTerraform(struct!.metadataPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageSourceFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImageSourceFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPath = this._dataPath;
    }
    if (this._metadataPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataPath = this._metadataPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageSourceFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataPath = undefined;
      this._metadataPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataPath = value.dataPath;
      this._metadataPath = value.metadataPath;
    }
  }

  // data_path - computed: false, optional: false, required: true
  private _dataPath?: string; 
  public get dataPath() {
    return this.getStringAttribute('data_path');
  }
  public set dataPath(value: string) {
    this._dataPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPathInput() {
    return this._dataPath;
  }

  // metadata_path - computed: false, optional: true, required: false
  private _metadataPath?: string; 
  public get metadataPath() {
    return this.getStringAttribute('metadata_path');
  }
  public set metadataPath(value: string) {
    this._metadataPath = value;
  }
  public resetMetadataPath() {
    this._metadataPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataPathInput() {
    return this._metadataPath;
  }
}
export interface ImageSourceImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs/resources/image#architecture Image#architecture}
  */
  readonly architecture?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs/resources/image#copy_aliases Image#copy_aliases}
  */
  readonly copyAliases?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs/resources/image#name Image#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs/resources/image#remote Image#remote}
  */
  readonly remote: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs/resources/image#type Image#type}
  */
  readonly type?: string;
}

export function imageSourceImageToTerraform(struct?: ImageSourceImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    architecture: cdktf.stringToTerraform(struct!.architecture),
    copy_aliases: cdktf.booleanToTerraform(struct!.copyAliases),
    name: cdktf.stringToTerraform(struct!.name),
    remote: cdktf.stringToTerraform(struct!.remote),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function imageSourceImageToHclTerraform(struct?: ImageSourceImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    architecture: {
      value: cdktf.stringToHclTerraform(struct!.architecture),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    copy_aliases: {
      value: cdktf.booleanToHclTerraform(struct!.copyAliases),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote: {
      value: cdktf.stringToHclTerraform(struct!.remote),
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

export class ImageSourceImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImageSourceImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._architecture !== undefined) {
      hasAnyValues = true;
      internalValueResult.architecture = this._architecture;
    }
    if (this._copyAliases !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyAliases = this._copyAliases;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._remote !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageSourceImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._architecture = undefined;
      this._copyAliases = undefined;
      this._name = undefined;
      this._remote = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._architecture = value.architecture;
      this._copyAliases = value.copyAliases;
      this._name = value.name;
      this._remote = value.remote;
      this._type = value.type;
    }
  }

  // architecture - computed: true, optional: true, required: false
  private _architecture?: string; 
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string) {
    this._architecture = value;
  }
  public resetArchitecture() {
    this._architecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture;
  }

  // copy_aliases - computed: false, optional: true, required: false
  private _copyAliases?: boolean | cdktf.IResolvable; 
  public get copyAliases() {
    return this.getBooleanAttribute('copy_aliases');
  }
  public set copyAliases(value: boolean | cdktf.IResolvable) {
    this._copyAliases = value;
  }
  public resetCopyAliases() {
    this._copyAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyAliasesInput() {
    return this._copyAliases;
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

  // remote - computed: false, optional: false, required: true
  private _remote?: string; 
  public get remote() {
    return this.getStringAttribute('remote');
  }
  public set remote(value: string) {
    this._remote = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote;
  }

  // type - computed: true, optional: true, required: false
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
}
export interface ImageSourceInstance {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs/resources/image#name Image#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs/resources/image#snapshot Image#snapshot}
  */
  readonly snapshot?: string;
}

export function imageSourceInstanceToTerraform(struct?: ImageSourceInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    snapshot: cdktf.stringToTerraform(struct!.snapshot),
  }
}


export function imageSourceInstanceToHclTerraform(struct?: ImageSourceInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot: {
      value: cdktf.stringToHclTerraform(struct!.snapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageSourceInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImageSourceInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._snapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshot = this._snapshot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageSourceInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._snapshot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._snapshot = value.snapshot;
    }
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

  // snapshot - computed: false, optional: true, required: false
  private _snapshot?: string; 
  public get snapshot() {
    return this.getStringAttribute('snapshot');
  }
  public set snapshot(value: string) {
    this._snapshot = value;
  }
  public resetSnapshot() {
    this._snapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotInput() {
    return this._snapshot;
  }
}
export interface ImageAlias {
  /**
  * The description for the image alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs/resources/image#description Image#description}
  */
  readonly description?: string;
  /**
  * The name of the image alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs/resources/image#name Image#name}
  */
  readonly name: string;
}

export function imageAliasToTerraform(struct?: ImageAlias | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function imageAliasToHclTerraform(struct?: ImageAlias | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageAliasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImageAlias | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageAlias | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
    }
  }

  // description - computed: true, optional: true, required: false
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
}

export class ImageAliasList extends cdktf.ComplexList {
  public internalValue? : ImageAlias[] | cdktf.IResolvable

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
  public get(index: number): ImageAliasOutputReference {
    return new ImageAliasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs/resources/image incus_image}
*/
export class Image extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incus_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Image resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Image to import
  * @param importFromId The id of the existing Image that should be imported. Refer to the {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs/resources/image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Image to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incus_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lxc/incus/1.0.0/docs/resources/image incus_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImageConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ImageConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'incus_image',
      terraformGeneratorMetadata: {
        providerName: 'incus',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._project = config.project;
    this._remote = config.remote;
    this._sourceFile.internalValue = config.sourceFile;
    this._sourceImage.internalValue = config.sourceImage;
    this._sourceInstance.internalValue = config.sourceInstance;
    this._alias.internalValue = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // copied_aliases - computed: true, optional: false, required: false
  public get copiedAliases() {
    return cdktf.Fn.tolist(this.getListAttribute('copied_aliases'));
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // remote - computed: false, optional: true, required: false
  private _remote?: string; 
  public get remote() {
    return this.getStringAttribute('remote');
  }
  public set remote(value: string) {
    this._remote = value;
  }
  public resetRemote() {
    this._remote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote;
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // source_file - computed: false, optional: true, required: false
  private _sourceFile = new ImageSourceFileOutputReference(this, "source_file");
  public get sourceFile() {
    return this._sourceFile;
  }
  public putSourceFile(value: ImageSourceFile) {
    this._sourceFile.internalValue = value;
  }
  public resetSourceFile() {
    this._sourceFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFileInput() {
    return this._sourceFile.internalValue;
  }

  // source_image - computed: false, optional: true, required: false
  private _sourceImage = new ImageSourceImageOutputReference(this, "source_image");
  public get sourceImage() {
    return this._sourceImage;
  }
  public putSourceImage(value: ImageSourceImage) {
    this._sourceImage.internalValue = value;
  }
  public resetSourceImage() {
    this._sourceImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceImageInput() {
    return this._sourceImage.internalValue;
  }

  // source_instance - computed: false, optional: true, required: false
  private _sourceInstance = new ImageSourceInstanceOutputReference(this, "source_instance");
  public get sourceInstance() {
    return this._sourceInstance;
  }
  public putSourceInstance(value: ImageSourceInstance) {
    this._sourceInstance.internalValue = value;
  }
  public resetSourceInstance() {
    this._sourceInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInstanceInput() {
    return this._sourceInstance.internalValue;
  }

  // alias - computed: false, optional: true, required: false
  private _alias = new ImageAliasList(this, "alias", true);
  public get alias() {
    return this._alias;
  }
  public putAlias(value: ImageAlias[] | cdktf.IResolvable) {
    this._alias.internalValue = value;
  }
  public resetAlias() {
    this._alias.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project: cdktf.stringToTerraform(this._project),
      remote: cdktf.stringToTerraform(this._remote),
      source_file: imageSourceFileToTerraform(this._sourceFile.internalValue),
      source_image: imageSourceImageToTerraform(this._sourceImage.internalValue),
      source_instance: imageSourceInstanceToTerraform(this._sourceInstance.internalValue),
      alias: cdktf.listMapper(imageAliasToTerraform, true)(this._alias.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote: {
        value: cdktf.stringToHclTerraform(this._remote),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_file: {
        value: imageSourceFileToHclTerraform(this._sourceFile.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ImageSourceFile",
      },
      source_image: {
        value: imageSourceImageToHclTerraform(this._sourceImage.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ImageSourceImage",
      },
      source_instance: {
        value: imageSourceInstanceToHclTerraform(this._sourceInstance.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ImageSourceInstance",
      },
      alias: {
        value: cdktf.listMapperHcl(imageAliasToHclTerraform, true)(this._alias.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ImageAliasList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
