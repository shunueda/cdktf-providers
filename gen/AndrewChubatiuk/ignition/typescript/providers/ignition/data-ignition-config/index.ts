// https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIgnitionConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/config#arrays DataIgnitionConfig#arrays}
  */
  readonly arrays?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/config#directories DataIgnitionConfig#directories}
  */
  readonly directories?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/config#disks DataIgnitionConfig#disks}
  */
  readonly disks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/config#files DataIgnitionConfig#files}
  */
  readonly files?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/config#filesystems DataIgnitionConfig#filesystems}
  */
  readonly filesystems?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/config#groups DataIgnitionConfig#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/config#id DataIgnitionConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/config#links DataIgnitionConfig#links}
  */
  readonly links?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/config#systemd DataIgnitionConfig#systemd}
  */
  readonly systemd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/config#users DataIgnitionConfig#users}
  */
  readonly users?: string[];
  /**
  * merge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/config#merge DataIgnitionConfig#merge}
  */
  readonly merge?: DataIgnitionConfigMerge[] | cdktf.IResolvable;
  /**
  * replace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/config#replace DataIgnitionConfig#replace}
  */
  readonly replace?: DataIgnitionConfigReplace;
}
export interface DataIgnitionConfigMerge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/config#source DataIgnitionConfig#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/config#verification DataIgnitionConfig#verification}
  */
  readonly verification?: string;
}

export function dataIgnitionConfigMergeToTerraform(struct?: DataIgnitionConfigMerge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.stringToTerraform(struct!.source),
    verification: cdktf.stringToTerraform(struct!.verification),
  }
}


export function dataIgnitionConfigMergeToHclTerraform(struct?: DataIgnitionConfigMerge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verification: {
      value: cdktf.stringToHclTerraform(struct!.verification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIgnitionConfigMergeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIgnitionConfigMerge | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._verification !== undefined) {
      hasAnyValues = true;
      internalValueResult.verification = this._verification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIgnitionConfigMerge | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
      this._verification = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
      this._verification = value.verification;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // verification - computed: false, optional: true, required: false
  private _verification?: string; 
  public get verification() {
    return this.getStringAttribute('verification');
  }
  public set verification(value: string) {
    this._verification = value;
  }
  public resetVerification() {
    this._verification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationInput() {
    return this._verification;
  }
}

export class DataIgnitionConfigMergeList extends cdktf.ComplexList {
  public internalValue? : DataIgnitionConfigMerge[] | cdktf.IResolvable

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
  public get(index: number): DataIgnitionConfigMergeOutputReference {
    return new DataIgnitionConfigMergeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIgnitionConfigReplace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/config#source DataIgnitionConfig#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/config#verification DataIgnitionConfig#verification}
  */
  readonly verification?: string;
}

export function dataIgnitionConfigReplaceToTerraform(struct?: DataIgnitionConfigReplaceOutputReference | DataIgnitionConfigReplace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.stringToTerraform(struct!.source),
    verification: cdktf.stringToTerraform(struct!.verification),
  }
}


export function dataIgnitionConfigReplaceToHclTerraform(struct?: DataIgnitionConfigReplaceOutputReference | DataIgnitionConfigReplace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verification: {
      value: cdktf.stringToHclTerraform(struct!.verification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIgnitionConfigReplaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIgnitionConfigReplace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._verification !== undefined) {
      hasAnyValues = true;
      internalValueResult.verification = this._verification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIgnitionConfigReplace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._source = undefined;
      this._verification = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._source = value.source;
      this._verification = value.verification;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // verification - computed: false, optional: true, required: false
  private _verification?: string; 
  public get verification() {
    return this.getStringAttribute('verification');
  }
  public set verification(value: string) {
    this._verification = value;
  }
  public resetVerification() {
    this._verification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationInput() {
    return this._verification;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/config ignition_config}
*/
export class DataIgnitionConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ignition_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIgnitionConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIgnitionConfig to import
  * @param importFromId The id of the existing DataIgnitionConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIgnitionConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ignition_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/config ignition_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIgnitionConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIgnitionConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ignition_config',
      terraformGeneratorMetadata: {
        providerName: 'ignition',
        providerVersion: '0.0.1',
        providerVersionConstraint: '0.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arrays = config.arrays;
    this._directories = config.directories;
    this._disks = config.disks;
    this._files = config.files;
    this._filesystems = config.filesystems;
    this._groups = config.groups;
    this._id = config.id;
    this._links = config.links;
    this._systemd = config.systemd;
    this._users = config.users;
    this._merge.internalValue = config.merge;
    this._replace.internalValue = config.replace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arrays - computed: false, optional: true, required: false
  private _arrays?: string[]; 
  public get arrays() {
    return this.getListAttribute('arrays');
  }
  public set arrays(value: string[]) {
    this._arrays = value;
  }
  public resetArrays() {
    this._arrays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arraysInput() {
    return this._arrays;
  }

  // directories - computed: false, optional: true, required: false
  private _directories?: string[]; 
  public get directories() {
    return this.getListAttribute('directories');
  }
  public set directories(value: string[]) {
    this._directories = value;
  }
  public resetDirectories() {
    this._directories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoriesInput() {
    return this._directories;
  }

  // disks - computed: false, optional: true, required: false
  private _disks?: string[]; 
  public get disks() {
    return this.getListAttribute('disks');
  }
  public set disks(value: string[]) {
    this._disks = value;
  }
  public resetDisks() {
    this._disks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disksInput() {
    return this._disks;
  }

  // files - computed: false, optional: true, required: false
  private _files?: string[]; 
  public get files() {
    return this.getListAttribute('files');
  }
  public set files(value: string[]) {
    this._files = value;
  }
  public resetFiles() {
    this._files = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files;
  }

  // filesystems - computed: false, optional: true, required: false
  private _filesystems?: string[]; 
  public get filesystems() {
    return this.getListAttribute('filesystems');
  }
  public set filesystems(value: string[]) {
    this._filesystems = value;
  }
  public resetFilesystems() {
    this._filesystems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemsInput() {
    return this._filesystems;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
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

  // links - computed: false, optional: true, required: false
  private _links?: string[]; 
  public get links() {
    return this.getListAttribute('links');
  }
  public set links(value: string[]) {
    this._links = value;
  }
  public resetLinks() {
    this._links = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksInput() {
    return this._links;
  }

  // rendered - computed: true, optional: false, required: false
  public get rendered() {
    return this.getStringAttribute('rendered');
  }

  // systemd - computed: false, optional: true, required: false
  private _systemd?: string[]; 
  public get systemd() {
    return this.getListAttribute('systemd');
  }
  public set systemd(value: string[]) {
    this._systemd = value;
  }
  public resetSystemd() {
    this._systemd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemdInput() {
    return this._systemd;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return this.getListAttribute('users');
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // merge - computed: false, optional: true, required: false
  private _merge = new DataIgnitionConfigMergeList(this, "merge", false);
  public get merge() {
    return this._merge;
  }
  public putMerge(value: DataIgnitionConfigMerge[] | cdktf.IResolvable) {
    this._merge.internalValue = value;
  }
  public resetMerge() {
    this._merge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeInput() {
    return this._merge.internalValue;
  }

  // replace - computed: false, optional: true, required: false
  private _replace = new DataIgnitionConfigReplaceOutputReference(this, "replace");
  public get replace() {
    return this._replace;
  }
  public putReplace(value: DataIgnitionConfigReplace) {
    this._replace.internalValue = value;
  }
  public resetReplace() {
    this._replace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arrays: cdktf.listMapper(cdktf.stringToTerraform, false)(this._arrays),
      directories: cdktf.listMapper(cdktf.stringToTerraform, false)(this._directories),
      disks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._disks),
      files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._files),
      filesystems: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filesystems),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      id: cdktf.stringToTerraform(this._id),
      links: cdktf.listMapper(cdktf.stringToTerraform, false)(this._links),
      systemd: cdktf.listMapper(cdktf.stringToTerraform, false)(this._systemd),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
      merge: cdktf.listMapper(dataIgnitionConfigMergeToTerraform, true)(this._merge.internalValue),
      replace: dataIgnitionConfigReplaceToTerraform(this._replace.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arrays: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._arrays),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      directories: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._directories),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      disks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._disks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      files: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._files),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      filesystems: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filesystems),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      links: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._links),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      systemd: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._systemd),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._users),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      merge: {
        value: cdktf.listMapperHcl(dataIgnitionConfigMergeToHclTerraform, true)(this._merge.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIgnitionConfigMergeList",
      },
      replace: {
        value: dataIgnitionConfigReplaceToHclTerraform(this._replace.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIgnitionConfigReplaceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
