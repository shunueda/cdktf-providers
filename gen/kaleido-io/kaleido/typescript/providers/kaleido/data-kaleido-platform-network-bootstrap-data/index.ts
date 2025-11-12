// https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/data-sources/platform_network_bootstrap_data
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKaleidoPlatformNetworkBootstrapDataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Environment ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/data-sources/platform_network_bootstrap_data#environment DataKaleidoPlatformNetworkBootstrapData#environment}
  */
  readonly environment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/data-sources/platform_network_bootstrap_data#network DataKaleidoPlatformNetworkBootstrapData#network}
  */
  readonly network: string;
}
export interface DataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFilesData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/data-sources/platform_network_bootstrap_data#text DataKaleidoPlatformNetworkBootstrapData#text}
  */
  readonly text?: string;
}

export function dataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFilesDataToTerraform(struct?: DataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFilesData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function dataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFilesDataToHclTerraform(struct?: DataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFilesData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFilesDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFilesData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFilesData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._text = value.text;
    }
  }

  // text - computed: true, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface DataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/data-sources/platform_network_bootstrap_data#data DataKaleidoPlatformNetworkBootstrapData#data}
  */
  readonly data?: DataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFilesData;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/data-sources/platform_network_bootstrap_data#type DataKaleidoPlatformNetworkBootstrapData#type}
  */
  readonly type?: string;
}

export function dataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFilesToTerraform(struct?: DataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: dataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFilesDataToTerraform(struct!.data),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFilesToHclTerraform(struct?: DataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: dataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFilesDataToHclTerraform(struct!.data),
      isBlock: true,
      type: "struct",
      storageClassType: "DataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFilesData",
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

export class DataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._data.internalValue = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._data.internalValue = value.data;
      this._type = value.type;
    }
  }

  // data - computed: true, optional: true, required: false
  private _data = new DataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFilesDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: DataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFilesData) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
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

export class DataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFilesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFiles } | cdktf.IResolvable

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
  public get(key: string): DataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFilesOutputReference {
    return new DataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFilesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataKaleidoPlatformNetworkBootstrapDataBootstrapFiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/data-sources/platform_network_bootstrap_data#files DataKaleidoPlatformNetworkBootstrapData#files}
  */
  readonly files: { [key: string]: DataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFiles } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/data-sources/platform_network_bootstrap_data#name DataKaleidoPlatformNetworkBootstrapData#name}
  */
  readonly name: string;
}

export function dataKaleidoPlatformNetworkBootstrapDataBootstrapFilesToTerraform(struct?: DataKaleidoPlatformNetworkBootstrapDataBootstrapFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    files: cdktf.hashMapper(dataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFilesToTerraform)(struct!.files),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataKaleidoPlatformNetworkBootstrapDataBootstrapFilesToHclTerraform(struct?: DataKaleidoPlatformNetworkBootstrapDataBootstrapFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    files: {
      value: cdktf.hashMapperHcl(dataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFilesToHclTerraform)(struct!.files),
      isBlock: true,
      type: "map",
      storageClassType: "DataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFilesMap",
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

export class DataKaleidoPlatformNetworkBootstrapDataBootstrapFilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKaleidoPlatformNetworkBootstrapDataBootstrapFiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._files?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKaleidoPlatformNetworkBootstrapDataBootstrapFiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._files.internalValue = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._files.internalValue = value.files;
      this._name = value.name;
    }
  }

  // files - computed: true, optional: false, required: true
  private _files = new DataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFilesMap(this, "files");
  public get files() {
    return this._files;
  }
  public putFiles(value: { [key: string]: DataKaleidoPlatformNetworkBootstrapDataBootstrapFilesFiles } | cdktf.IResolvable) {
    this._files.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files.internalValue;
  }

  // name - computed: true, optional: false, required: true
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

/**
* Represents a {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/data-sources/platform_network_bootstrap_data kaleido_platform_network_bootstrap_data}
*/
export class DataKaleidoPlatformNetworkBootstrapData extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kaleido_platform_network_bootstrap_data";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKaleidoPlatformNetworkBootstrapData resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKaleidoPlatformNetworkBootstrapData to import
  * @param importFromId The id of the existing DataKaleidoPlatformNetworkBootstrapData that should be imported. Refer to the {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/data-sources/platform_network_bootstrap_data#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKaleidoPlatformNetworkBootstrapData to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kaleido_platform_network_bootstrap_data", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/data-sources/platform_network_bootstrap_data kaleido_platform_network_bootstrap_data} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKaleidoPlatformNetworkBootstrapDataConfig
  */
  public constructor(scope: Construct, id: string, config: DataKaleidoPlatformNetworkBootstrapDataConfig) {
    super(scope, id, {
      terraformResourceType: 'kaleido_platform_network_bootstrap_data',
      terraformGeneratorMetadata: {
        providerName: 'kaleido',
        providerVersion: '1.1.2',
        providerVersionConstraint: '1.1.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environment = config.environment;
    this._network = config.network;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bootstrap_files - computed: true, optional: false, required: false
  private _bootstrapFiles = new DataKaleidoPlatformNetworkBootstrapDataBootstrapFilesOutputReference(this, "bootstrap_files");
  public get bootstrapFiles() {
    return this._bootstrapFiles;
  }

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment: cdktf.stringToTerraform(this._environment),
      network: cdktf.stringToTerraform(this._network),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
