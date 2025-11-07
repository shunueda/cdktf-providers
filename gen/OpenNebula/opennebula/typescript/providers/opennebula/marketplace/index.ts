// https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MarketplaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the marketplace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#description Marketplace#description}
  */
  readonly description?: string;
  /**
  * Allow to enable or disable the market place
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#disabled Marketplace#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#dockerhub Marketplace#dockerhub}
  */
  readonly dockerhub?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#id Marketplace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the marketplace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#name Marketplace#name}
  */
  readonly name: string;
  /**
  * Permissions for the marketplace (in Unix format, owner-group-other, use-manage-admin)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#permissions Marketplace#permissions}
  */
  readonly permissions?: string;
  /**
  * Add custom tags to the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#tags Marketplace#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#http Marketplace#http}
  */
  readonly http?: MarketplaceHttp[] | cdktf.IResolvable;
  /**
  * lxc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#lxc Marketplace#lxc}
  */
  readonly lxc?: MarketplaceLxc[] | cdktf.IResolvable;
  /**
  * one block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#one Marketplace#one}
  */
  readonly one?: MarketplaceOne[] | cdktf.IResolvable;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#s3 Marketplace#s3}
  */
  readonly s3?: MarketplaceS3[] | cdktf.IResolvable;
  /**
  * template_section block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#template_section Marketplace#template_section}
  */
  readonly templateSection?: MarketplaceTemplateSection[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#timeouts Marketplace#timeouts}
  */
  readonly timeouts?: MarketplaceTimeouts;
  /**
  * turnkey block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#turnkey Marketplace#turnkey}
  */
  readonly turnkey?: MarketplaceTurnkey[] | cdktf.IResolvable;
}
export interface MarketplaceHttp {
  /**
  * Base URL of the Marketplace HTTP endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#endpoint_url Marketplace#endpoint_url}
  */
  readonly endpointUrl: string;
  /**
  * Absolute directory path to place images in the front-end or in the hosts pointed at by storage_bridge_list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#path Marketplace#path}
  */
  readonly path: string;
  /**
  * List of servers to access the public directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#storage_bridge_list Marketplace#storage_bridge_list}
  */
  readonly storageBridgeList?: string[];
}

export function marketplaceHttpToTerraform(struct?: MarketplaceHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_url: cdktf.stringToTerraform(struct!.endpointUrl),
    path: cdktf.stringToTerraform(struct!.path),
    storage_bridge_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.storageBridgeList),
  }
}


export function marketplaceHttpToHclTerraform(struct?: MarketplaceHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_url: {
      value: cdktf.stringToHclTerraform(struct!.endpointUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_bridge_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.storageBridgeList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MarketplaceHttpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MarketplaceHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointUrl = this._endpointUrl;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._storageBridgeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageBridgeList = this._storageBridgeList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MarketplaceHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointUrl = undefined;
      this._path = undefined;
      this._storageBridgeList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointUrl = value.endpointUrl;
      this._path = value.path;
      this._storageBridgeList = value.storageBridgeList;
    }
  }

  // endpoint_url - computed: false, optional: false, required: true
  private _endpointUrl?: string; 
  public get endpointUrl() {
    return this.getStringAttribute('endpoint_url');
  }
  public set endpointUrl(value: string) {
    this._endpointUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointUrlInput() {
    return this._endpointUrl;
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

  // storage_bridge_list - computed: false, optional: true, required: false
  private _storageBridgeList?: string[]; 
  public get storageBridgeList() {
    return cdktf.Fn.tolist(this.getListAttribute('storage_bridge_list'));
  }
  public set storageBridgeList(value: string[]) {
    this._storageBridgeList = value;
  }
  public resetStorageBridgeList() {
    this._storageBridgeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBridgeListInput() {
    return this._storageBridgeList;
  }
}

export class MarketplaceHttpList extends cdktf.ComplexList {
  public internalValue? : MarketplaceHttp[] | cdktf.IResolvable

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
  public get(index: number): MarketplaceHttpOutputReference {
    return new MarketplaceHttpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MarketplaceLxc {
  /**
  * VM template CPU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#cpu Marketplace#cpu}
  */
  readonly cpu?: number;
  /**
  * The base URL of the Market
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#endpoint_url Marketplace#endpoint_url}
  */
  readonly endpointUrl?: string;
  /**
  * Filesystem used for the image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#filesystem Marketplace#filesystem}
  */
  readonly filesystem?: string;
  /**
  * Image block file format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#image_block_file_format Marketplace#image_block_file_format}
  */
  readonly imageBlockFileFormat?: string;
  /**
  * VM template memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#memory Marketplace#memory}
  */
  readonly memory?: number;
  /**
  * Secrurity mode of the Linux Container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#privileged Marketplace#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * Size in MB for the image holding the rootfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#roofs_image_size Marketplace#roofs_image_size}
  */
  readonly roofsImageSize?: number;
  /**
  * Include only apps with support for context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#skip_untested Marketplace#skip_untested}
  */
  readonly skipUntested?: boolean | cdktf.IResolvable;
  /**
  * VM template VCPU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#vcpu Marketplace#vcpu}
  */
  readonly vcpu?: number;
}

export function marketplaceLxcToTerraform(struct?: MarketplaceLxc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    endpoint_url: cdktf.stringToTerraform(struct!.endpointUrl),
    filesystem: cdktf.stringToTerraform(struct!.filesystem),
    image_block_file_format: cdktf.stringToTerraform(struct!.imageBlockFileFormat),
    memory: cdktf.numberToTerraform(struct!.memory),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    roofs_image_size: cdktf.numberToTerraform(struct!.roofsImageSize),
    skip_untested: cdktf.booleanToTerraform(struct!.skipUntested),
    vcpu: cdktf.numberToTerraform(struct!.vcpu),
  }
}


export function marketplaceLxcToHclTerraform(struct?: MarketplaceLxc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    endpoint_url: {
      value: cdktf.stringToHclTerraform(struct!.endpointUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filesystem: {
      value: cdktf.stringToHclTerraform(struct!.filesystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_block_file_format: {
      value: cdktf.stringToHclTerraform(struct!.imageBlockFileFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    privileged: {
      value: cdktf.booleanToHclTerraform(struct!.privileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    roofs_image_size: {
      value: cdktf.numberToHclTerraform(struct!.roofsImageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    skip_untested: {
      value: cdktf.booleanToHclTerraform(struct!.skipUntested),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vcpu: {
      value: cdktf.numberToHclTerraform(struct!.vcpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MarketplaceLxcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MarketplaceLxc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._endpointUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointUrl = this._endpointUrl;
    }
    if (this._filesystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesystem = this._filesystem;
    }
    if (this._imageBlockFileFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageBlockFileFormat = this._imageBlockFileFormat;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._roofsImageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.roofsImageSize = this._roofsImageSize;
    }
    if (this._skipUntested !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipUntested = this._skipUntested;
    }
    if (this._vcpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcpu = this._vcpu;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MarketplaceLxc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._endpointUrl = undefined;
      this._filesystem = undefined;
      this._imageBlockFileFormat = undefined;
      this._memory = undefined;
      this._privileged = undefined;
      this._roofsImageSize = undefined;
      this._skipUntested = undefined;
      this._vcpu = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._endpointUrl = value.endpointUrl;
      this._filesystem = value.filesystem;
      this._imageBlockFileFormat = value.imageBlockFileFormat;
      this._memory = value.memory;
      this._privileged = value.privileged;
      this._roofsImageSize = value.roofsImageSize;
      this._skipUntested = value.skipUntested;
      this._vcpu = value.vcpu;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // endpoint_url - computed: false, optional: true, required: false
  private _endpointUrl?: string; 
  public get endpointUrl() {
    return this.getStringAttribute('endpoint_url');
  }
  public set endpointUrl(value: string) {
    this._endpointUrl = value;
  }
  public resetEndpointUrl() {
    this._endpointUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointUrlInput() {
    return this._endpointUrl;
  }

  // filesystem - computed: false, optional: true, required: false
  private _filesystem?: string; 
  public get filesystem() {
    return this.getStringAttribute('filesystem');
  }
  public set filesystem(value: string) {
    this._filesystem = value;
  }
  public resetFilesystem() {
    this._filesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemInput() {
    return this._filesystem;
  }

  // image_block_file_format - computed: false, optional: true, required: false
  private _imageBlockFileFormat?: string; 
  public get imageBlockFileFormat() {
    return this.getStringAttribute('image_block_file_format');
  }
  public set imageBlockFileFormat(value: string) {
    this._imageBlockFileFormat = value;
  }
  public resetImageBlockFileFormat() {
    this._imageBlockFileFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageBlockFileFormatInput() {
    return this._imageBlockFileFormat;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // roofs_image_size - computed: false, optional: true, required: false
  private _roofsImageSize?: number; 
  public get roofsImageSize() {
    return this.getNumberAttribute('roofs_image_size');
  }
  public set roofsImageSize(value: number) {
    this._roofsImageSize = value;
  }
  public resetRoofsImageSize() {
    this._roofsImageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roofsImageSizeInput() {
    return this._roofsImageSize;
  }

  // skip_untested - computed: false, optional: true, required: false
  private _skipUntested?: boolean | cdktf.IResolvable; 
  public get skipUntested() {
    return this.getBooleanAttribute('skip_untested');
  }
  public set skipUntested(value: boolean | cdktf.IResolvable) {
    this._skipUntested = value;
  }
  public resetSkipUntested() {
    this._skipUntested = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipUntestedInput() {
    return this._skipUntested;
  }

  // vcpu - computed: false, optional: true, required: false
  private _vcpu?: number; 
  public get vcpu() {
    return this.getNumberAttribute('vcpu');
  }
  public set vcpu(value: number) {
    this._vcpu = value;
  }
  public resetVcpu() {
    this._vcpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpuInput() {
    return this._vcpu;
  }
}

export class MarketplaceLxcList extends cdktf.ComplexList {
  public internalValue? : MarketplaceLxc[] | cdktf.IResolvable

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
  public get(index: number): MarketplaceLxcOutputReference {
    return new MarketplaceLxcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MarketplaceOne {
  /**
  * The marketplace endpoint url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#endpoint_url Marketplace#endpoint_url}
  */
  readonly endpointUrl?: string;
}

export function marketplaceOneToTerraform(struct?: MarketplaceOne | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_url: cdktf.stringToTerraform(struct!.endpointUrl),
  }
}


export function marketplaceOneToHclTerraform(struct?: MarketplaceOne | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_url: {
      value: cdktf.stringToHclTerraform(struct!.endpointUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MarketplaceOneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MarketplaceOne | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointUrl = this._endpointUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MarketplaceOne | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointUrl = value.endpointUrl;
    }
  }

  // endpoint_url - computed: false, optional: true, required: false
  private _endpointUrl?: string; 
  public get endpointUrl() {
    return this.getStringAttribute('endpoint_url');
  }
  public set endpointUrl(value: string) {
    this._endpointUrl = value;
  }
  public resetEndpointUrl() {
    this._endpointUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointUrlInput() {
    return this._endpointUrl;
  }
}

export class MarketplaceOneList extends cdktf.ComplexList {
  public internalValue? : MarketplaceOne[] | cdktf.IResolvable

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
  public get(index: number): MarketplaceOneOutputReference {
    return new MarketplaceOneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MarketplaceS3 {
  /**
  * The access key of the S3 user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#access_key_id Marketplace#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * The bucket where the files will be stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#bucket Marketplace#bucket}
  */
  readonly bucket: string;
  /**
  * Only required when connecteing to a service other than Amazon S3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#endpoint_url Marketplace#endpoint_url}
  */
  readonly endpointUrl?: string;
  /**
  * Split the file into chunks of this size in MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#read_block_length Marketplace#read_block_length}
  */
  readonly readBlockLength?: number;
  /**
  * The region to connect to. Any value will work with Ceph-S3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#region Marketplace#region}
  */
  readonly region: string;
  /**
  * The secret key of the S3 user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#secret_access_key Marketplace#secret_access_key}
  */
  readonly secretAccessKey: string;
  /**
  * Define the total size of the marketplace in MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#total_size Marketplace#total_size}
  */
  readonly totalSize?: number;
  /**
  * Type of the s3 backend: aws, ceph, minio
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#type Marketplace#type}
  */
  readonly type?: string;
}

export function marketplaceS3ToTerraform(struct?: MarketplaceS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    endpoint_url: cdktf.stringToTerraform(struct!.endpointUrl),
    read_block_length: cdktf.numberToTerraform(struct!.readBlockLength),
    region: cdktf.stringToTerraform(struct!.region),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
    total_size: cdktf.numberToTerraform(struct!.totalSize),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function marketplaceS3ToHclTerraform(struct?: MarketplaceS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_url: {
      value: cdktf.stringToHclTerraform(struct!.endpointUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_block_length: {
      value: cdktf.numberToHclTerraform(struct!.readBlockLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_size: {
      value: cdktf.numberToHclTerraform(struct!.totalSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class MarketplaceS3OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MarketplaceS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._endpointUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointUrl = this._endpointUrl;
    }
    if (this._readBlockLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.readBlockLength = this._readBlockLength;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    if (this._totalSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalSize = this._totalSize;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MarketplaceS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKeyId = undefined;
      this._bucket = undefined;
      this._endpointUrl = undefined;
      this._readBlockLength = undefined;
      this._region = undefined;
      this._secretAccessKey = undefined;
      this._totalSize = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKeyId = value.accessKeyId;
      this._bucket = value.bucket;
      this._endpointUrl = value.endpointUrl;
      this._readBlockLength = value.readBlockLength;
      this._region = value.region;
      this._secretAccessKey = value.secretAccessKey;
      this._totalSize = value.totalSize;
      this._type = value.type;
    }
  }

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // endpoint_url - computed: false, optional: true, required: false
  private _endpointUrl?: string; 
  public get endpointUrl() {
    return this.getStringAttribute('endpoint_url');
  }
  public set endpointUrl(value: string) {
    this._endpointUrl = value;
  }
  public resetEndpointUrl() {
    this._endpointUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointUrlInput() {
    return this._endpointUrl;
  }

  // read_block_length - computed: false, optional: true, required: false
  private _readBlockLength?: number; 
  public get readBlockLength() {
    return this.getNumberAttribute('read_block_length');
  }
  public set readBlockLength(value: number) {
    this._readBlockLength = value;
  }
  public resetReadBlockLength() {
    this._readBlockLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readBlockLengthInput() {
    return this._readBlockLength;
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

  // secret_access_key - computed: false, optional: false, required: true
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }

  // total_size - computed: false, optional: true, required: false
  private _totalSize?: number; 
  public get totalSize() {
    return this.getNumberAttribute('total_size');
  }
  public set totalSize(value: number) {
    this._totalSize = value;
  }
  public resetTotalSize() {
    this._totalSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalSizeInput() {
    return this._totalSize;
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
}

export class MarketplaceS3List extends cdktf.ComplexList {
  public internalValue? : MarketplaceS3[] | cdktf.IResolvable

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
  public get(index: number): MarketplaceS3OutputReference {
    return new MarketplaceS3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MarketplaceTemplateSection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#elements Marketplace#elements}
  */
  readonly elements?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#name Marketplace#name}
  */
  readonly name: string;
}

export function marketplaceTemplateSectionToTerraform(struct?: MarketplaceTemplateSection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    elements: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.elements),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function marketplaceTemplateSectionToHclTerraform(struct?: MarketplaceTemplateSection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    elements: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.elements),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class MarketplaceTemplateSectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MarketplaceTemplateSection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elements !== undefined) {
      hasAnyValues = true;
      internalValueResult.elements = this._elements;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MarketplaceTemplateSection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._elements = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._elements = value.elements;
      this._name = value.name;
    }
  }

  // elements - computed: false, optional: true, required: false
  private _elements?: { [key: string]: string }; 
  public get elements() {
    return this.getStringMapAttribute('elements');
  }
  public set elements(value: { [key: string]: string }) {
    this._elements = value;
  }
  public resetElements() {
    this._elements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementsInput() {
    return this._elements;
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

export class MarketplaceTemplateSectionList extends cdktf.ComplexList {
  public internalValue? : MarketplaceTemplateSection[] | cdktf.IResolvable

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
  public get(index: number): MarketplaceTemplateSectionOutputReference {
    return new MarketplaceTemplateSectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MarketplaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#create Marketplace#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#update Marketplace#update}
  */
  readonly update?: string;
}

export function marketplaceTimeoutsToTerraform(struct?: MarketplaceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function marketplaceTimeoutsToHclTerraform(struct?: MarketplaceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MarketplaceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MarketplaceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MarketplaceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface MarketplaceTurnkey {
  /**
  * The base URL of the Market
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#endpoint_url Marketplace#endpoint_url}
  */
  readonly endpointUrl?: string;
  /**
  * Filesystem used for the image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#filesystem Marketplace#filesystem}
  */
  readonly filesystem?: string;
  /**
  * Image block file format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#image_block_file_format Marketplace#image_block_file_format}
  */
  readonly imageBlockFileFormat?: string;
  /**
  * Size in MB for the image holding the rootfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#roofs_image_size Marketplace#roofs_image_size}
  */
  readonly roofsImageSize?: number;
  /**
  * Include only apps with support for context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#skip_untested Marketplace#skip_untested}
  */
  readonly skipUntested?: boolean | cdktf.IResolvable;
}

export function marketplaceTurnkeyToTerraform(struct?: MarketplaceTurnkey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_url: cdktf.stringToTerraform(struct!.endpointUrl),
    filesystem: cdktf.stringToTerraform(struct!.filesystem),
    image_block_file_format: cdktf.stringToTerraform(struct!.imageBlockFileFormat),
    roofs_image_size: cdktf.numberToTerraform(struct!.roofsImageSize),
    skip_untested: cdktf.booleanToTerraform(struct!.skipUntested),
  }
}


export function marketplaceTurnkeyToHclTerraform(struct?: MarketplaceTurnkey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_url: {
      value: cdktf.stringToHclTerraform(struct!.endpointUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filesystem: {
      value: cdktf.stringToHclTerraform(struct!.filesystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_block_file_format: {
      value: cdktf.stringToHclTerraform(struct!.imageBlockFileFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roofs_image_size: {
      value: cdktf.numberToHclTerraform(struct!.roofsImageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    skip_untested: {
      value: cdktf.booleanToHclTerraform(struct!.skipUntested),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MarketplaceTurnkeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MarketplaceTurnkey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointUrl = this._endpointUrl;
    }
    if (this._filesystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesystem = this._filesystem;
    }
    if (this._imageBlockFileFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageBlockFileFormat = this._imageBlockFileFormat;
    }
    if (this._roofsImageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.roofsImageSize = this._roofsImageSize;
    }
    if (this._skipUntested !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipUntested = this._skipUntested;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MarketplaceTurnkey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointUrl = undefined;
      this._filesystem = undefined;
      this._imageBlockFileFormat = undefined;
      this._roofsImageSize = undefined;
      this._skipUntested = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointUrl = value.endpointUrl;
      this._filesystem = value.filesystem;
      this._imageBlockFileFormat = value.imageBlockFileFormat;
      this._roofsImageSize = value.roofsImageSize;
      this._skipUntested = value.skipUntested;
    }
  }

  // endpoint_url - computed: false, optional: true, required: false
  private _endpointUrl?: string; 
  public get endpointUrl() {
    return this.getStringAttribute('endpoint_url');
  }
  public set endpointUrl(value: string) {
    this._endpointUrl = value;
  }
  public resetEndpointUrl() {
    this._endpointUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointUrlInput() {
    return this._endpointUrl;
  }

  // filesystem - computed: false, optional: true, required: false
  private _filesystem?: string; 
  public get filesystem() {
    return this.getStringAttribute('filesystem');
  }
  public set filesystem(value: string) {
    this._filesystem = value;
  }
  public resetFilesystem() {
    this._filesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemInput() {
    return this._filesystem;
  }

  // image_block_file_format - computed: false, optional: true, required: false
  private _imageBlockFileFormat?: string; 
  public get imageBlockFileFormat() {
    return this.getStringAttribute('image_block_file_format');
  }
  public set imageBlockFileFormat(value: string) {
    this._imageBlockFileFormat = value;
  }
  public resetImageBlockFileFormat() {
    this._imageBlockFileFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageBlockFileFormatInput() {
    return this._imageBlockFileFormat;
  }

  // roofs_image_size - computed: false, optional: true, required: false
  private _roofsImageSize?: number; 
  public get roofsImageSize() {
    return this.getNumberAttribute('roofs_image_size');
  }
  public set roofsImageSize(value: number) {
    this._roofsImageSize = value;
  }
  public resetRoofsImageSize() {
    this._roofsImageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roofsImageSizeInput() {
    return this._roofsImageSize;
  }

  // skip_untested - computed: false, optional: true, required: false
  private _skipUntested?: boolean | cdktf.IResolvable; 
  public get skipUntested() {
    return this.getBooleanAttribute('skip_untested');
  }
  public set skipUntested(value: boolean | cdktf.IResolvable) {
    this._skipUntested = value;
  }
  public resetSkipUntested() {
    this._skipUntested = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipUntestedInput() {
    return this._skipUntested;
  }
}

export class MarketplaceTurnkeyList extends cdktf.ComplexList {
  public internalValue? : MarketplaceTurnkey[] | cdktf.IResolvable

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
  public get(index: number): MarketplaceTurnkeyOutputReference {
    return new MarketplaceTurnkeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace opennebula_marketplace}
*/
export class Marketplace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opennebula_marketplace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Marketplace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Marketplace to import
  * @param importFromId The id of the existing Marketplace that should be imported. Refer to the {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Marketplace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opennebula_marketplace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/resources/marketplace opennebula_marketplace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MarketplaceConfig
  */
  public constructor(scope: Construct, id: string, config: MarketplaceConfig) {
    super(scope, id, {
      terraformResourceType: 'opennebula_marketplace',
      terraformGeneratorMetadata: {
        providerName: 'opennebula',
        providerVersion: '1.5.0'
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
    this._disabled = config.disabled;
    this._dockerhub = config.dockerhub;
    this._id = config.id;
    this._name = config.name;
    this._permissions = config.permissions;
    this._tags = config.tags;
    this._http.internalValue = config.http;
    this._lxc.internalValue = config.lxc;
    this._one.internalValue = config.one;
    this._s3.internalValue = config.s3;
    this._templateSection.internalValue = config.templateSection;
    this._timeouts.internalValue = config.timeouts;
    this._turnkey.internalValue = config.turnkey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_tags - computed: true, optional: false, required: false
  private _defaultTags = new cdktf.StringMap(this, "default_tags");
  public get defaultTags() {
    return this._defaultTags;
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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // dockerhub - computed: false, optional: true, required: false
  private _dockerhub?: boolean | cdktf.IResolvable; 
  public get dockerhub() {
    return this.getBooleanAttribute('dockerhub');
  }
  public set dockerhub(value: boolean | cdktf.IResolvable) {
    this._dockerhub = value;
  }
  public resetDockerhub() {
    this._dockerhub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerhubInput() {
    return this._dockerhub;
  }

  // gid - computed: true, optional: false, required: false
  public get gid() {
    return this.getNumberAttribute('gid');
  }

  // gname - computed: true, optional: false, required: false
  public get gname() {
    return this.getStringAttribute('gname');
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

  // permissions - computed: true, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getNumberAttribute('uid');
  }

  // uname - computed: true, optional: false, required: false
  public get uname() {
    return this.getStringAttribute('uname');
  }

  // http - computed: false, optional: true, required: false
  private _http = new MarketplaceHttpList(this, "http", true);
  public get http() {
    return this._http;
  }
  public putHttp(value: MarketplaceHttp[] | cdktf.IResolvable) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // lxc - computed: false, optional: true, required: false
  private _lxc = new MarketplaceLxcList(this, "lxc", true);
  public get lxc() {
    return this._lxc;
  }
  public putLxc(value: MarketplaceLxc[] | cdktf.IResolvable) {
    this._lxc.internalValue = value;
  }
  public resetLxc() {
    this._lxc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lxcInput() {
    return this._lxc.internalValue;
  }

  // one - computed: false, optional: true, required: false
  private _one = new MarketplaceOneList(this, "one", true);
  public get one() {
    return this._one;
  }
  public putOne(value: MarketplaceOne[] | cdktf.IResolvable) {
    this._one.internalValue = value;
  }
  public resetOne() {
    this._one.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneInput() {
    return this._one.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new MarketplaceS3List(this, "s3", true);
  public get s3() {
    return this._s3;
  }
  public putS3(value: MarketplaceS3[] | cdktf.IResolvable) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // template_section - computed: false, optional: true, required: false
  private _templateSection = new MarketplaceTemplateSectionList(this, "template_section", true);
  public get templateSection() {
    return this._templateSection;
  }
  public putTemplateSection(value: MarketplaceTemplateSection[] | cdktf.IResolvable) {
    this._templateSection.internalValue = value;
  }
  public resetTemplateSection() {
    this._templateSection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateSectionInput() {
    return this._templateSection.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MarketplaceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MarketplaceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // turnkey - computed: false, optional: true, required: false
  private _turnkey = new MarketplaceTurnkeyList(this, "turnkey", true);
  public get turnkey() {
    return this._turnkey;
  }
  public putTurnkey(value: MarketplaceTurnkey[] | cdktf.IResolvable) {
    this._turnkey.internalValue = value;
  }
  public resetTurnkey() {
    this._turnkey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get turnkeyInput() {
    return this._turnkey.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      disabled: cdktf.booleanToTerraform(this._disabled),
      dockerhub: cdktf.booleanToTerraform(this._dockerhub),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      permissions: cdktf.stringToTerraform(this._permissions),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      http: cdktf.listMapper(marketplaceHttpToTerraform, true)(this._http.internalValue),
      lxc: cdktf.listMapper(marketplaceLxcToTerraform, true)(this._lxc.internalValue),
      one: cdktf.listMapper(marketplaceOneToTerraform, true)(this._one.internalValue),
      s3: cdktf.listMapper(marketplaceS3ToTerraform, true)(this._s3.internalValue),
      template_section: cdktf.listMapper(marketplaceTemplateSectionToTerraform, true)(this._templateSection.internalValue),
      timeouts: marketplaceTimeoutsToTerraform(this._timeouts.internalValue),
      turnkey: cdktf.listMapper(marketplaceTurnkeyToTerraform, true)(this._turnkey.internalValue),
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
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dockerhub: {
        value: cdktf.booleanToHclTerraform(this._dockerhub),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      permissions: {
        value: cdktf.stringToHclTerraform(this._permissions),
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
      http: {
        value: cdktf.listMapperHcl(marketplaceHttpToHclTerraform, true)(this._http.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MarketplaceHttpList",
      },
      lxc: {
        value: cdktf.listMapperHcl(marketplaceLxcToHclTerraform, true)(this._lxc.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MarketplaceLxcList",
      },
      one: {
        value: cdktf.listMapperHcl(marketplaceOneToHclTerraform, true)(this._one.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MarketplaceOneList",
      },
      s3: {
        value: cdktf.listMapperHcl(marketplaceS3ToHclTerraform, true)(this._s3.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MarketplaceS3List",
      },
      template_section: {
        value: cdktf.listMapperHcl(marketplaceTemplateSectionToHclTerraform, true)(this._templateSection.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MarketplaceTemplateSectionList",
      },
      timeouts: {
        value: marketplaceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MarketplaceTimeouts",
      },
      turnkey: {
        value: cdktf.listMapperHcl(marketplaceTurnkeyToHclTerraform, true)(this._turnkey.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MarketplaceTurnkeyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
