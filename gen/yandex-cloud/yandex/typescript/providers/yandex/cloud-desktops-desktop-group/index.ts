// https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudDesktopsDesktopGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the desktop group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#description CloudDesktopsDesktopGroup#description}
  */
  readonly description?: string;
  /**
  * The configuration template for the desktop group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#desktop_template CloudDesktopsDesktopGroup#desktop_template}
  */
  readonly desktopTemplate?: CloudDesktopsDesktopGroupDesktopTemplate;
  /**
  * The folder the dekstop group is in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#folder_id CloudDesktopsDesktopGroup#folder_id}
  */
  readonly folderId?: string;
  /**
  * The group configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#group_config CloudDesktopsDesktopGroup#group_config}
  */
  readonly groupConfig?: CloudDesktopsDesktopGroupGroupConfig;
  /**
  * The id of the desktop image the group is based on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#image_id CloudDesktopsDesktopGroup#image_id}
  */
  readonly imageId: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#labels CloudDesktopsDesktopGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the desktop group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#name CloudDesktopsDesktopGroup#name}
  */
  readonly name: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#timeouts CloudDesktopsDesktopGroup#timeouts}
  */
  readonly timeouts?: CloudDesktopsDesktopGroupTimeouts;
}
export interface CloudDesktopsDesktopGroupDesktopTemplateBootDiskInitializeParams {
  /**
  * The size of disk in gigabytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#size CloudDesktopsDesktopGroup#size}
  */
  readonly size?: number;
  /**
  * The type of disk. Allowed values: TYPE_UNSPECIFIED, HDD or SDD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#type CloudDesktopsDesktopGroup#type}
  */
  readonly type: string;
}

export function cloudDesktopsDesktopGroupDesktopTemplateBootDiskInitializeParamsToTerraform(struct?: CloudDesktopsDesktopGroupDesktopTemplateBootDiskInitializeParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cloudDesktopsDesktopGroupDesktopTemplateBootDiskInitializeParamsToHclTerraform(struct?: CloudDesktopsDesktopGroupDesktopTemplateBootDiskInitializeParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
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

export class CloudDesktopsDesktopGroupDesktopTemplateBootDiskInitializeParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudDesktopsDesktopGroupDesktopTemplateBootDiskInitializeParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDesktopsDesktopGroupDesktopTemplateBootDiskInitializeParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._size = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._size = value.size;
      this._type = value.type;
    }
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
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
export interface CloudDesktopsDesktopGroupDesktopTemplateBootDisk {
  /**
  * General data disk configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#initialize_params CloudDesktopsDesktopGroup#initialize_params}
  */
  readonly initializeParams?: CloudDesktopsDesktopGroupDesktopTemplateBootDiskInitializeParams;
}

export function cloudDesktopsDesktopGroupDesktopTemplateBootDiskToTerraform(struct?: CloudDesktopsDesktopGroupDesktopTemplateBootDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    initialize_params: cloudDesktopsDesktopGroupDesktopTemplateBootDiskInitializeParamsToTerraform(struct!.initializeParams),
  }
}


export function cloudDesktopsDesktopGroupDesktopTemplateBootDiskToHclTerraform(struct?: CloudDesktopsDesktopGroupDesktopTemplateBootDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    initialize_params: {
      value: cloudDesktopsDesktopGroupDesktopTemplateBootDiskInitializeParamsToHclTerraform(struct!.initializeParams),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudDesktopsDesktopGroupDesktopTemplateBootDiskInitializeParams",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDesktopsDesktopGroupDesktopTemplateBootDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudDesktopsDesktopGroupDesktopTemplateBootDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initializeParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initializeParams = this._initializeParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDesktopsDesktopGroupDesktopTemplateBootDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._initializeParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._initializeParams.internalValue = value.initializeParams;
    }
  }

  // initialize_params - computed: false, optional: true, required: false
  private _initializeParams = new CloudDesktopsDesktopGroupDesktopTemplateBootDiskInitializeParamsOutputReference(this, "initialize_params");
  public get initializeParams() {
    return this._initializeParams;
  }
  public putInitializeParams(value: CloudDesktopsDesktopGroupDesktopTemplateBootDiskInitializeParams) {
    this._initializeParams.internalValue = value;
  }
  public resetInitializeParams() {
    this._initializeParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializeParamsInput() {
    return this._initializeParams.internalValue;
  }
}
export interface CloudDesktopsDesktopGroupDesktopTemplateDataDiskInitializeParams {
  /**
  * The size of disk in gigabytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#size CloudDesktopsDesktopGroup#size}
  */
  readonly size?: number;
  /**
  * The type of disk. Allowed values: TYPE_UNSPECIFIED, HDD or SDD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#type CloudDesktopsDesktopGroup#type}
  */
  readonly type: string;
}

export function cloudDesktopsDesktopGroupDesktopTemplateDataDiskInitializeParamsToTerraform(struct?: CloudDesktopsDesktopGroupDesktopTemplateDataDiskInitializeParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cloudDesktopsDesktopGroupDesktopTemplateDataDiskInitializeParamsToHclTerraform(struct?: CloudDesktopsDesktopGroupDesktopTemplateDataDiskInitializeParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
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

export class CloudDesktopsDesktopGroupDesktopTemplateDataDiskInitializeParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudDesktopsDesktopGroupDesktopTemplateDataDiskInitializeParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDesktopsDesktopGroupDesktopTemplateDataDiskInitializeParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._size = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._size = value.size;
      this._type = value.type;
    }
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
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
export interface CloudDesktopsDesktopGroupDesktopTemplateDataDisk {
  /**
  * General data disk configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#initialize_params CloudDesktopsDesktopGroup#initialize_params}
  */
  readonly initializeParams?: CloudDesktopsDesktopGroupDesktopTemplateDataDiskInitializeParams;
}

export function cloudDesktopsDesktopGroupDesktopTemplateDataDiskToTerraform(struct?: CloudDesktopsDesktopGroupDesktopTemplateDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    initialize_params: cloudDesktopsDesktopGroupDesktopTemplateDataDiskInitializeParamsToTerraform(struct!.initializeParams),
  }
}


export function cloudDesktopsDesktopGroupDesktopTemplateDataDiskToHclTerraform(struct?: CloudDesktopsDesktopGroupDesktopTemplateDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    initialize_params: {
      value: cloudDesktopsDesktopGroupDesktopTemplateDataDiskInitializeParamsToHclTerraform(struct!.initializeParams),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudDesktopsDesktopGroupDesktopTemplateDataDiskInitializeParams",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDesktopsDesktopGroupDesktopTemplateDataDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudDesktopsDesktopGroupDesktopTemplateDataDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initializeParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initializeParams = this._initializeParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDesktopsDesktopGroupDesktopTemplateDataDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._initializeParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._initializeParams.internalValue = value.initializeParams;
    }
  }

  // initialize_params - computed: false, optional: true, required: false
  private _initializeParams = new CloudDesktopsDesktopGroupDesktopTemplateDataDiskInitializeParamsOutputReference(this, "initialize_params");
  public get initializeParams() {
    return this._initializeParams;
  }
  public putInitializeParams(value: CloudDesktopsDesktopGroupDesktopTemplateDataDiskInitializeParams) {
    this._initializeParams.internalValue = value;
  }
  public resetInitializeParams() {
    this._initializeParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializeParamsInput() {
    return this._initializeParams.internalValue;
  }
}
export interface CloudDesktopsDesktopGroupDesktopTemplateNetworkInterface {
  /**
  * The id of the network desktops from the group would use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#network_id CloudDesktopsDesktopGroup#network_id}
  */
  readonly networkId: string;
  /**
  * The ids of the subnet networks desktops from the group would use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#subnet_ids CloudDesktopsDesktopGroup#subnet_ids}
  */
  readonly subnetIds?: string[];
}

export function cloudDesktopsDesktopGroupDesktopTemplateNetworkInterfaceToTerraform(struct?: CloudDesktopsDesktopGroupDesktopTemplateNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_id: cdktf.stringToTerraform(struct!.networkId),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function cloudDesktopsDesktopGroupDesktopTemplateNetworkInterfaceToHclTerraform(struct?: CloudDesktopsDesktopGroupDesktopTemplateNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDesktopsDesktopGroupDesktopTemplateNetworkInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudDesktopsDesktopGroupDesktopTemplateNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDesktopsDesktopGroupDesktopTemplateNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkId = undefined;
      this._subnetIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkId = value.networkId;
      this._subnetIds = value.subnetIds;
    }
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}
export interface CloudDesktopsDesktopGroupDesktopTemplateResources {
  /**
  * The baseline level of CPU performance each desktop in this group would have.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#core_fraction CloudDesktopsDesktopGroup#core_fraction}
  */
  readonly coreFraction?: number;
  /**
  * The number of cores each desktop in this group would have.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#cores CloudDesktopsDesktopGroup#cores}
  */
  readonly cores?: number;
  /**
  * The number of gigabytes of RAM each desktop in this group would have.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#memory CloudDesktopsDesktopGroup#memory}
  */
  readonly memory?: number;
}

export function cloudDesktopsDesktopGroupDesktopTemplateResourcesToTerraform(struct?: CloudDesktopsDesktopGroupDesktopTemplateResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    core_fraction: cdktf.numberToTerraform(struct!.coreFraction),
    cores: cdktf.numberToTerraform(struct!.cores),
    memory: cdktf.numberToTerraform(struct!.memory),
  }
}


export function cloudDesktopsDesktopGroupDesktopTemplateResourcesToHclTerraform(struct?: CloudDesktopsDesktopGroupDesktopTemplateResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    core_fraction: {
      value: cdktf.numberToHclTerraform(struct!.coreFraction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cores: {
      value: cdktf.numberToHclTerraform(struct!.cores),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDesktopsDesktopGroupDesktopTemplateResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudDesktopsDesktopGroupDesktopTemplateResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coreFraction !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreFraction = this._coreFraction;
    }
    if (this._cores !== undefined) {
      hasAnyValues = true;
      internalValueResult.cores = this._cores;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDesktopsDesktopGroupDesktopTemplateResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coreFraction = undefined;
      this._cores = undefined;
      this._memory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coreFraction = value.coreFraction;
      this._cores = value.cores;
      this._memory = value.memory;
    }
  }

  // core_fraction - computed: false, optional: true, required: false
  private _coreFraction?: number; 
  public get coreFraction() {
    return this.getNumberAttribute('core_fraction');
  }
  public set coreFraction(value: number) {
    this._coreFraction = value;
  }
  public resetCoreFraction() {
    this._coreFraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreFractionInput() {
    return this._coreFraction;
  }

  // cores - computed: false, optional: true, required: false
  private _cores?: number; 
  public get cores() {
    return this.getNumberAttribute('cores');
  }
  public set cores(value: number) {
    this._cores = value;
  }
  public resetCores() {
    this._cores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coresInput() {
    return this._cores;
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
}
export interface CloudDesktopsDesktopGroupDesktopTemplate {
  /**
  * The boot disk configuration for each desktop in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#boot_disk CloudDesktopsDesktopGroup#boot_disk}
  */
  readonly bootDisk?: CloudDesktopsDesktopGroupDesktopTemplateBootDisk;
  /**
  * The data disk configuration for each desktop in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#data_disk CloudDesktopsDesktopGroup#data_disk}
  */
  readonly dataDisk?: CloudDesktopsDesktopGroupDesktopTemplateDataDisk;
  /**
  * The base network interface configuration for each desktop in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#network_interface CloudDesktopsDesktopGroup#network_interface}
  */
  readonly networkInterface?: CloudDesktopsDesktopGroupDesktopTemplateNetworkInterface;
  /**
  * The base resource configuration for each desktop in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#resources CloudDesktopsDesktopGroup#resources}
  */
  readonly resources?: CloudDesktopsDesktopGroupDesktopTemplateResources;
}

export function cloudDesktopsDesktopGroupDesktopTemplateToTerraform(struct?: CloudDesktopsDesktopGroupDesktopTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk: cloudDesktopsDesktopGroupDesktopTemplateBootDiskToTerraform(struct!.bootDisk),
    data_disk: cloudDesktopsDesktopGroupDesktopTemplateDataDiskToTerraform(struct!.dataDisk),
    network_interface: cloudDesktopsDesktopGroupDesktopTemplateNetworkInterfaceToTerraform(struct!.networkInterface),
    resources: cloudDesktopsDesktopGroupDesktopTemplateResourcesToTerraform(struct!.resources),
  }
}


export function cloudDesktopsDesktopGroupDesktopTemplateToHclTerraform(struct?: CloudDesktopsDesktopGroupDesktopTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_disk: {
      value: cloudDesktopsDesktopGroupDesktopTemplateBootDiskToHclTerraform(struct!.bootDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudDesktopsDesktopGroupDesktopTemplateBootDisk",
    },
    data_disk: {
      value: cloudDesktopsDesktopGroupDesktopTemplateDataDiskToHclTerraform(struct!.dataDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudDesktopsDesktopGroupDesktopTemplateDataDisk",
    },
    network_interface: {
      value: cloudDesktopsDesktopGroupDesktopTemplateNetworkInterfaceToHclTerraform(struct!.networkInterface),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudDesktopsDesktopGroupDesktopTemplateNetworkInterface",
    },
    resources: {
      value: cloudDesktopsDesktopGroupDesktopTemplateResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudDesktopsDesktopGroupDesktopTemplateResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDesktopsDesktopGroupDesktopTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudDesktopsDesktopGroupDesktopTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDisk = this._bootDisk?.internalValue;
    }
    if (this._dataDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDisk = this._dataDisk?.internalValue;
    }
    if (this._networkInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterface = this._networkInterface?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDesktopsDesktopGroupDesktopTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootDisk.internalValue = undefined;
      this._dataDisk.internalValue = undefined;
      this._networkInterface.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootDisk.internalValue = value.bootDisk;
      this._dataDisk.internalValue = value.dataDisk;
      this._networkInterface.internalValue = value.networkInterface;
      this._resources.internalValue = value.resources;
    }
  }

  // boot_disk - computed: false, optional: true, required: false
  private _bootDisk = new CloudDesktopsDesktopGroupDesktopTemplateBootDiskOutputReference(this, "boot_disk");
  public get bootDisk() {
    return this._bootDisk;
  }
  public putBootDisk(value: CloudDesktopsDesktopGroupDesktopTemplateBootDisk) {
    this._bootDisk.internalValue = value;
  }
  public resetBootDisk() {
    this._bootDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskInput() {
    return this._bootDisk.internalValue;
  }

  // data_disk - computed: false, optional: true, required: false
  private _dataDisk = new CloudDesktopsDesktopGroupDesktopTemplateDataDiskOutputReference(this, "data_disk");
  public get dataDisk() {
    return this._dataDisk;
  }
  public putDataDisk(value: CloudDesktopsDesktopGroupDesktopTemplateDataDisk) {
    this._dataDisk.internalValue = value;
  }
  public resetDataDisk() {
    this._dataDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk.internalValue;
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface = new CloudDesktopsDesktopGroupDesktopTemplateNetworkInterfaceOutputReference(this, "network_interface");
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: CloudDesktopsDesktopGroupDesktopTemplateNetworkInterface) {
    this._networkInterface.internalValue = value;
  }
  public resetNetworkInterface() {
    this._networkInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new CloudDesktopsDesktopGroupDesktopTemplateResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: CloudDesktopsDesktopGroupDesktopTemplateResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface CloudDesktopsDesktopGroupGroupConfigMembers {
  /**
  * The id of the member. More info in [the official documentation](https://yandex.cloud/ru/docs/cloud-desktop/api-ref/grpc/DesktopGroup/create#yandex.cloud.access.Subject).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#id CloudDesktopsDesktopGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of the member. More info in [the official documentation](https://yandex.cloud/ru/docs/cloud-desktop/api-ref/grpc/DesktopGroup/create#yandex.cloud.access.Subject).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#type CloudDesktopsDesktopGroup#type}
  */
  readonly type: string;
}

export function cloudDesktopsDesktopGroupGroupConfigMembersToTerraform(struct?: CloudDesktopsDesktopGroupGroupConfigMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cloudDesktopsDesktopGroupGroupConfigMembersToHclTerraform(struct?: CloudDesktopsDesktopGroupGroupConfigMembers | cdktf.IResolvable): any {
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

export class CloudDesktopsDesktopGroupGroupConfigMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudDesktopsDesktopGroupGroupConfigMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDesktopsDesktopGroupGroupConfigMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
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

export class CloudDesktopsDesktopGroupGroupConfigMembersList extends cdktf.ComplexList {
  public internalValue? : CloudDesktopsDesktopGroupGroupConfigMembers[] | cdktf.IResolvable

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
  public get(index: number): CloudDesktopsDesktopGroupGroupConfigMembersOutputReference {
    return new CloudDesktopsDesktopGroupGroupConfigMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudDesktopsDesktopGroupGroupConfig {
  /**
  * The type of the desktop group. Allowed: DESKTOP_TYPE_UNSPECIFIED, PERSISTENT, NON_PERSISTENT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#desktop_type CloudDesktopsDesktopGroup#desktop_type}
  */
  readonly desktopType?: string;
  /**
  * Maximum number of desktops.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#max_desktops_amount CloudDesktopsDesktopGroup#max_desktops_amount}
  */
  readonly maxDesktopsAmount?: number;
  /**
  * List of members in this desktop group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#members CloudDesktopsDesktopGroup#members}
  */
  readonly members?: CloudDesktopsDesktopGroupGroupConfigMembers[] | cdktf.IResolvable;
  /**
  * Minimum number of ready desktops.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#min_ready_desktops CloudDesktopsDesktopGroup#min_ready_desktops}
  */
  readonly minReadyDesktops?: number;
}

export function cloudDesktopsDesktopGroupGroupConfigToTerraform(struct?: CloudDesktopsDesktopGroupGroupConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desktop_type: cdktf.stringToTerraform(struct!.desktopType),
    max_desktops_amount: cdktf.numberToTerraform(struct!.maxDesktopsAmount),
    members: cdktf.listMapper(cloudDesktopsDesktopGroupGroupConfigMembersToTerraform, false)(struct!.members),
    min_ready_desktops: cdktf.numberToTerraform(struct!.minReadyDesktops),
  }
}


export function cloudDesktopsDesktopGroupGroupConfigToHclTerraform(struct?: CloudDesktopsDesktopGroupGroupConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    desktop_type: {
      value: cdktf.stringToHclTerraform(struct!.desktopType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_desktops_amount: {
      value: cdktf.numberToHclTerraform(struct!.maxDesktopsAmount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    members: {
      value: cdktf.listMapperHcl(cloudDesktopsDesktopGroupGroupConfigMembersToHclTerraform, false)(struct!.members),
      isBlock: true,
      type: "list",
      storageClassType: "CloudDesktopsDesktopGroupGroupConfigMembersList",
    },
    min_ready_desktops: {
      value: cdktf.numberToHclTerraform(struct!.minReadyDesktops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudDesktopsDesktopGroupGroupConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudDesktopsDesktopGroupGroupConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desktopType !== undefined) {
      hasAnyValues = true;
      internalValueResult.desktopType = this._desktopType;
    }
    if (this._maxDesktopsAmount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDesktopsAmount = this._maxDesktopsAmount;
    }
    if (this._members?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members?.internalValue;
    }
    if (this._minReadyDesktops !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReadyDesktops = this._minReadyDesktops;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDesktopsDesktopGroupGroupConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._desktopType = undefined;
      this._maxDesktopsAmount = undefined;
      this._members.internalValue = undefined;
      this._minReadyDesktops = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._desktopType = value.desktopType;
      this._maxDesktopsAmount = value.maxDesktopsAmount;
      this._members.internalValue = value.members;
      this._minReadyDesktops = value.minReadyDesktops;
    }
  }

  // desktop_type - computed: false, optional: true, required: false
  private _desktopType?: string; 
  public get desktopType() {
    return this.getStringAttribute('desktop_type');
  }
  public set desktopType(value: string) {
    this._desktopType = value;
  }
  public resetDesktopType() {
    this._desktopType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desktopTypeInput() {
    return this._desktopType;
  }

  // max_desktops_amount - computed: false, optional: true, required: false
  private _maxDesktopsAmount?: number; 
  public get maxDesktopsAmount() {
    return this.getNumberAttribute('max_desktops_amount');
  }
  public set maxDesktopsAmount(value: number) {
    this._maxDesktopsAmount = value;
  }
  public resetMaxDesktopsAmount() {
    this._maxDesktopsAmount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDesktopsAmountInput() {
    return this._maxDesktopsAmount;
  }

  // members - computed: false, optional: true, required: false
  private _members = new CloudDesktopsDesktopGroupGroupConfigMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: CloudDesktopsDesktopGroupGroupConfigMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }

  // min_ready_desktops - computed: false, optional: true, required: false
  private _minReadyDesktops?: number; 
  public get minReadyDesktops() {
    return this.getNumberAttribute('min_ready_desktops');
  }
  public set minReadyDesktops(value: number) {
    this._minReadyDesktops = value;
  }
  public resetMinReadyDesktops() {
    this._minReadyDesktops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReadyDesktopsInput() {
    return this._minReadyDesktops;
  }
}
export interface CloudDesktopsDesktopGroupTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#create CloudDesktopsDesktopGroup#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#delete CloudDesktopsDesktopGroup#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#update CloudDesktopsDesktopGroup#update}
  */
  readonly update?: string;
}

export function cloudDesktopsDesktopGroupTimeoutsToTerraform(struct?: CloudDesktopsDesktopGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cloudDesktopsDesktopGroupTimeoutsToHclTerraform(struct?: CloudDesktopsDesktopGroupTimeouts | cdktf.IResolvable): any {
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
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
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

export class CloudDesktopsDesktopGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudDesktopsDesktopGroupTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudDesktopsDesktopGroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
      this._delete = value.delete;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
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

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group yandex_cloud_desktops_desktop_group}
*/
export class CloudDesktopsDesktopGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_cloud_desktops_desktop_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudDesktopsDesktopGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudDesktopsDesktopGroup to import
  * @param importFromId The id of the existing CloudDesktopsDesktopGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudDesktopsDesktopGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_cloud_desktops_desktop_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/cloud_desktops_desktop_group yandex_cloud_desktops_desktop_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudDesktopsDesktopGroupConfig
  */
  public constructor(scope: Construct, id: string, config: CloudDesktopsDesktopGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_cloud_desktops_desktop_group',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.173.0',
        providerVersionConstraint: '0.173.0'
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
    this._desktopTemplate.internalValue = config.desktopTemplate;
    this._folderId = config.folderId;
    this._groupConfig.internalValue = config.groupConfig;
    this._imageId = config.imageId;
    this._labels = config.labels;
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
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

  // desktop_group_id - computed: true, optional: false, required: false
  public get desktopGroupId() {
    return this.getStringAttribute('desktop_group_id');
  }

  // desktop_template - computed: false, optional: true, required: false
  private _desktopTemplate = new CloudDesktopsDesktopGroupDesktopTemplateOutputReference(this, "desktop_template");
  public get desktopTemplate() {
    return this._desktopTemplate;
  }
  public putDesktopTemplate(value: CloudDesktopsDesktopGroupDesktopTemplate) {
    this._desktopTemplate.internalValue = value;
  }
  public resetDesktopTemplate() {
    this._desktopTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desktopTemplateInput() {
    return this._desktopTemplate.internalValue;
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // group_config - computed: false, optional: true, required: false
  private _groupConfig = new CloudDesktopsDesktopGroupGroupConfigOutputReference(this, "group_config");
  public get groupConfig() {
    return this._groupConfig;
  }
  public putGroupConfig(value: CloudDesktopsDesktopGroupGroupConfig) {
    this._groupConfig.internalValue = value;
  }
  public resetGroupConfig() {
    this._groupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupConfigInput() {
    return this._groupConfig.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudDesktopsDesktopGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudDesktopsDesktopGroupTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      desktop_template: cloudDesktopsDesktopGroupDesktopTemplateToTerraform(this._desktopTemplate.internalValue),
      folder_id: cdktf.stringToTerraform(this._folderId),
      group_config: cloudDesktopsDesktopGroupGroupConfigToTerraform(this._groupConfig.internalValue),
      image_id: cdktf.stringToTerraform(this._imageId),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      timeouts: cloudDesktopsDesktopGroupTimeoutsToTerraform(this._timeouts.internalValue),
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
      desktop_template: {
        value: cloudDesktopsDesktopGroupDesktopTemplateToHclTerraform(this._desktopTemplate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudDesktopsDesktopGroupDesktopTemplate",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_config: {
        value: cloudDesktopsDesktopGroupGroupConfigToHclTerraform(this._groupConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudDesktopsDesktopGroupGroupConfig",
      },
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: cloudDesktopsDesktopGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudDesktopsDesktopGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
