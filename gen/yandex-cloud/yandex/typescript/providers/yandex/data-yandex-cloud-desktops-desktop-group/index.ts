// https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/data-sources/cloud_desktops_desktop_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexCloudDesktopsDesktopGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the desktop group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/data-sources/cloud_desktops_desktop_group#desktop_group_id DataYandexCloudDesktopsDesktopGroup#desktop_group_id}
  */
  readonly desktopGroupId?: string;
  /**
  * The configuration template for the desktop group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/data-sources/cloud_desktops_desktop_group#desktop_template DataYandexCloudDesktopsDesktopGroup#desktop_template}
  */
  readonly desktopTemplate?: DataYandexCloudDesktopsDesktopGroupDesktopTemplate;
  /**
  * The folder the dekstop group is in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/data-sources/cloud_desktops_desktop_group#folder_id DataYandexCloudDesktopsDesktopGroup#folder_id}
  */
  readonly folderId?: string;
  /**
  * The group configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/data-sources/cloud_desktops_desktop_group#group_config DataYandexCloudDesktopsDesktopGroup#group_config}
  */
  readonly groupConfig?: DataYandexCloudDesktopsDesktopGroupGroupConfig;
  /**
  * The name of the desktop group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/data-sources/cloud_desktops_desktop_group#name DataYandexCloudDesktopsDesktopGroup#name}
  */
  readonly name?: string;
}
export interface DataYandexCloudDesktopsDesktopGroupDesktopTemplateBootDiskInitializeParams {
}

export function dataYandexCloudDesktopsDesktopGroupDesktopTemplateBootDiskInitializeParamsToTerraform(struct?: DataYandexCloudDesktopsDesktopGroupDesktopTemplateBootDiskInitializeParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexCloudDesktopsDesktopGroupDesktopTemplateBootDiskInitializeParamsToHclTerraform(struct?: DataYandexCloudDesktopsDesktopGroupDesktopTemplateBootDiskInitializeParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexCloudDesktopsDesktopGroupDesktopTemplateBootDiskInitializeParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexCloudDesktopsDesktopGroupDesktopTemplateBootDiskInitializeParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexCloudDesktopsDesktopGroupDesktopTemplateBootDiskInitializeParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataYandexCloudDesktopsDesktopGroupDesktopTemplateBootDisk {
  /**
  * General data disk configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/data-sources/cloud_desktops_desktop_group#initialize_params DataYandexCloudDesktopsDesktopGroup#initialize_params}
  */
  readonly initializeParams?: DataYandexCloudDesktopsDesktopGroupDesktopTemplateBootDiskInitializeParams;
}

export function dataYandexCloudDesktopsDesktopGroupDesktopTemplateBootDiskToTerraform(struct?: DataYandexCloudDesktopsDesktopGroupDesktopTemplateBootDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    initialize_params: dataYandexCloudDesktopsDesktopGroupDesktopTemplateBootDiskInitializeParamsToTerraform(struct!.initializeParams),
  }
}


export function dataYandexCloudDesktopsDesktopGroupDesktopTemplateBootDiskToHclTerraform(struct?: DataYandexCloudDesktopsDesktopGroupDesktopTemplateBootDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    initialize_params: {
      value: dataYandexCloudDesktopsDesktopGroupDesktopTemplateBootDiskInitializeParamsToHclTerraform(struct!.initializeParams),
      isBlock: true,
      type: "struct",
      storageClassType: "DataYandexCloudDesktopsDesktopGroupDesktopTemplateBootDiskInitializeParams",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexCloudDesktopsDesktopGroupDesktopTemplateBootDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexCloudDesktopsDesktopGroupDesktopTemplateBootDisk | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataYandexCloudDesktopsDesktopGroupDesktopTemplateBootDisk | cdktf.IResolvable | undefined) {
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

  // initialize_params - computed: true, optional: true, required: false
  private _initializeParams = new DataYandexCloudDesktopsDesktopGroupDesktopTemplateBootDiskInitializeParamsOutputReference(this, "initialize_params");
  public get initializeParams() {
    return this._initializeParams;
  }
  public putInitializeParams(value: DataYandexCloudDesktopsDesktopGroupDesktopTemplateBootDiskInitializeParams) {
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
export interface DataYandexCloudDesktopsDesktopGroupDesktopTemplateDataDiskInitializeParams {
}

export function dataYandexCloudDesktopsDesktopGroupDesktopTemplateDataDiskInitializeParamsToTerraform(struct?: DataYandexCloudDesktopsDesktopGroupDesktopTemplateDataDiskInitializeParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexCloudDesktopsDesktopGroupDesktopTemplateDataDiskInitializeParamsToHclTerraform(struct?: DataYandexCloudDesktopsDesktopGroupDesktopTemplateDataDiskInitializeParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexCloudDesktopsDesktopGroupDesktopTemplateDataDiskInitializeParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexCloudDesktopsDesktopGroupDesktopTemplateDataDiskInitializeParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexCloudDesktopsDesktopGroupDesktopTemplateDataDiskInitializeParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataYandexCloudDesktopsDesktopGroupDesktopTemplateDataDisk {
  /**
  * General data disk configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/data-sources/cloud_desktops_desktop_group#initialize_params DataYandexCloudDesktopsDesktopGroup#initialize_params}
  */
  readonly initializeParams?: DataYandexCloudDesktopsDesktopGroupDesktopTemplateDataDiskInitializeParams;
}

export function dataYandexCloudDesktopsDesktopGroupDesktopTemplateDataDiskToTerraform(struct?: DataYandexCloudDesktopsDesktopGroupDesktopTemplateDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    initialize_params: dataYandexCloudDesktopsDesktopGroupDesktopTemplateDataDiskInitializeParamsToTerraform(struct!.initializeParams),
  }
}


export function dataYandexCloudDesktopsDesktopGroupDesktopTemplateDataDiskToHclTerraform(struct?: DataYandexCloudDesktopsDesktopGroupDesktopTemplateDataDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    initialize_params: {
      value: dataYandexCloudDesktopsDesktopGroupDesktopTemplateDataDiskInitializeParamsToHclTerraform(struct!.initializeParams),
      isBlock: true,
      type: "struct",
      storageClassType: "DataYandexCloudDesktopsDesktopGroupDesktopTemplateDataDiskInitializeParams",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexCloudDesktopsDesktopGroupDesktopTemplateDataDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexCloudDesktopsDesktopGroupDesktopTemplateDataDisk | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataYandexCloudDesktopsDesktopGroupDesktopTemplateDataDisk | cdktf.IResolvable | undefined) {
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

  // initialize_params - computed: true, optional: true, required: false
  private _initializeParams = new DataYandexCloudDesktopsDesktopGroupDesktopTemplateDataDiskInitializeParamsOutputReference(this, "initialize_params");
  public get initializeParams() {
    return this._initializeParams;
  }
  public putInitializeParams(value: DataYandexCloudDesktopsDesktopGroupDesktopTemplateDataDiskInitializeParams) {
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
export interface DataYandexCloudDesktopsDesktopGroupDesktopTemplateNetworkInterface {
}

export function dataYandexCloudDesktopsDesktopGroupDesktopTemplateNetworkInterfaceToTerraform(struct?: DataYandexCloudDesktopsDesktopGroupDesktopTemplateNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexCloudDesktopsDesktopGroupDesktopTemplateNetworkInterfaceToHclTerraform(struct?: DataYandexCloudDesktopsDesktopGroupDesktopTemplateNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexCloudDesktopsDesktopGroupDesktopTemplateNetworkInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexCloudDesktopsDesktopGroupDesktopTemplateNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexCloudDesktopsDesktopGroupDesktopTemplateNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
}
export interface DataYandexCloudDesktopsDesktopGroupDesktopTemplateResources {
}

export function dataYandexCloudDesktopsDesktopGroupDesktopTemplateResourcesToTerraform(struct?: DataYandexCloudDesktopsDesktopGroupDesktopTemplateResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexCloudDesktopsDesktopGroupDesktopTemplateResourcesToHclTerraform(struct?: DataYandexCloudDesktopsDesktopGroupDesktopTemplateResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexCloudDesktopsDesktopGroupDesktopTemplateResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexCloudDesktopsDesktopGroupDesktopTemplateResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexCloudDesktopsDesktopGroupDesktopTemplateResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // core_fraction - computed: true, optional: false, required: false
  public get coreFraction() {
    return this.getNumberAttribute('core_fraction');
  }

  // cores - computed: true, optional: false, required: false
  public get cores() {
    return this.getNumberAttribute('cores');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }
}
export interface DataYandexCloudDesktopsDesktopGroupDesktopTemplate {
  /**
  * The boot disk configuration for each desktop in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/data-sources/cloud_desktops_desktop_group#boot_disk DataYandexCloudDesktopsDesktopGroup#boot_disk}
  */
  readonly bootDisk?: DataYandexCloudDesktopsDesktopGroupDesktopTemplateBootDisk;
  /**
  * The data disk configuration for each desktop in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/data-sources/cloud_desktops_desktop_group#data_disk DataYandexCloudDesktopsDesktopGroup#data_disk}
  */
  readonly dataDisk?: DataYandexCloudDesktopsDesktopGroupDesktopTemplateDataDisk;
  /**
  * The base network interface configuration for each desktop in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/data-sources/cloud_desktops_desktop_group#network_interface DataYandexCloudDesktopsDesktopGroup#network_interface}
  */
  readonly networkInterface?: DataYandexCloudDesktopsDesktopGroupDesktopTemplateNetworkInterface;
  /**
  * The base resource configuration for each desktop in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/data-sources/cloud_desktops_desktop_group#resources DataYandexCloudDesktopsDesktopGroup#resources}
  */
  readonly resources?: DataYandexCloudDesktopsDesktopGroupDesktopTemplateResources;
}

export function dataYandexCloudDesktopsDesktopGroupDesktopTemplateToTerraform(struct?: DataYandexCloudDesktopsDesktopGroupDesktopTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk: dataYandexCloudDesktopsDesktopGroupDesktopTemplateBootDiskToTerraform(struct!.bootDisk),
    data_disk: dataYandexCloudDesktopsDesktopGroupDesktopTemplateDataDiskToTerraform(struct!.dataDisk),
    network_interface: dataYandexCloudDesktopsDesktopGroupDesktopTemplateNetworkInterfaceToTerraform(struct!.networkInterface),
    resources: dataYandexCloudDesktopsDesktopGroupDesktopTemplateResourcesToTerraform(struct!.resources),
  }
}


export function dataYandexCloudDesktopsDesktopGroupDesktopTemplateToHclTerraform(struct?: DataYandexCloudDesktopsDesktopGroupDesktopTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_disk: {
      value: dataYandexCloudDesktopsDesktopGroupDesktopTemplateBootDiskToHclTerraform(struct!.bootDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataYandexCloudDesktopsDesktopGroupDesktopTemplateBootDisk",
    },
    data_disk: {
      value: dataYandexCloudDesktopsDesktopGroupDesktopTemplateDataDiskToHclTerraform(struct!.dataDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataYandexCloudDesktopsDesktopGroupDesktopTemplateDataDisk",
    },
    network_interface: {
      value: dataYandexCloudDesktopsDesktopGroupDesktopTemplateNetworkInterfaceToHclTerraform(struct!.networkInterface),
      isBlock: true,
      type: "struct",
      storageClassType: "DataYandexCloudDesktopsDesktopGroupDesktopTemplateNetworkInterface",
    },
    resources: {
      value: dataYandexCloudDesktopsDesktopGroupDesktopTemplateResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataYandexCloudDesktopsDesktopGroupDesktopTemplateResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexCloudDesktopsDesktopGroupDesktopTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexCloudDesktopsDesktopGroupDesktopTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataYandexCloudDesktopsDesktopGroupDesktopTemplate | cdktf.IResolvable | undefined) {
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

  // boot_disk - computed: true, optional: true, required: false
  private _bootDisk = new DataYandexCloudDesktopsDesktopGroupDesktopTemplateBootDiskOutputReference(this, "boot_disk");
  public get bootDisk() {
    return this._bootDisk;
  }
  public putBootDisk(value: DataYandexCloudDesktopsDesktopGroupDesktopTemplateBootDisk) {
    this._bootDisk.internalValue = value;
  }
  public resetBootDisk() {
    this._bootDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskInput() {
    return this._bootDisk.internalValue;
  }

  // data_disk - computed: true, optional: true, required: false
  private _dataDisk = new DataYandexCloudDesktopsDesktopGroupDesktopTemplateDataDiskOutputReference(this, "data_disk");
  public get dataDisk() {
    return this._dataDisk;
  }
  public putDataDisk(value: DataYandexCloudDesktopsDesktopGroupDesktopTemplateDataDisk) {
    this._dataDisk.internalValue = value;
  }
  public resetDataDisk() {
    this._dataDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk.internalValue;
  }

  // network_interface - computed: true, optional: true, required: false
  private _networkInterface = new DataYandexCloudDesktopsDesktopGroupDesktopTemplateNetworkInterfaceOutputReference(this, "network_interface");
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: DataYandexCloudDesktopsDesktopGroupDesktopTemplateNetworkInterface) {
    this._networkInterface.internalValue = value;
  }
  public resetNetworkInterface() {
    this._networkInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }

  // resources - computed: true, optional: true, required: false
  private _resources = new DataYandexCloudDesktopsDesktopGroupDesktopTemplateResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataYandexCloudDesktopsDesktopGroupDesktopTemplateResources) {
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
export interface DataYandexCloudDesktopsDesktopGroupGroupConfigMembers {
}

export function dataYandexCloudDesktopsDesktopGroupGroupConfigMembersToTerraform(struct?: DataYandexCloudDesktopsDesktopGroupGroupConfigMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexCloudDesktopsDesktopGroupGroupConfigMembersToHclTerraform(struct?: DataYandexCloudDesktopsDesktopGroupGroupConfigMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexCloudDesktopsDesktopGroupGroupConfigMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexCloudDesktopsDesktopGroupGroupConfigMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexCloudDesktopsDesktopGroupGroupConfigMembers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataYandexCloudDesktopsDesktopGroupGroupConfigMembersList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexCloudDesktopsDesktopGroupGroupConfigMembersOutputReference {
    return new DataYandexCloudDesktopsDesktopGroupGroupConfigMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexCloudDesktopsDesktopGroupGroupConfig {
}

export function dataYandexCloudDesktopsDesktopGroupGroupConfigToTerraform(struct?: DataYandexCloudDesktopsDesktopGroupGroupConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexCloudDesktopsDesktopGroupGroupConfigToHclTerraform(struct?: DataYandexCloudDesktopsDesktopGroupGroupConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexCloudDesktopsDesktopGroupGroupConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataYandexCloudDesktopsDesktopGroupGroupConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexCloudDesktopsDesktopGroupGroupConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // desktop_type - computed: true, optional: false, required: false
  public get desktopType() {
    return this.getStringAttribute('desktop_type');
  }

  // max_desktops_amount - computed: true, optional: false, required: false
  public get maxDesktopsAmount() {
    return this.getNumberAttribute('max_desktops_amount');
  }

  // members - computed: true, optional: false, required: false
  private _members = new DataYandexCloudDesktopsDesktopGroupGroupConfigMembersList(this, "members", false);
  public get members() {
    return this._members;
  }

  // min_ready_desktops - computed: true, optional: false, required: false
  public get minReadyDesktops() {
    return this.getNumberAttribute('min_ready_desktops');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/data-sources/cloud_desktops_desktop_group yandex_cloud_desktops_desktop_group}
*/
export class DataYandexCloudDesktopsDesktopGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_cloud_desktops_desktop_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexCloudDesktopsDesktopGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexCloudDesktopsDesktopGroup to import
  * @param importFromId The id of the existing DataYandexCloudDesktopsDesktopGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/data-sources/cloud_desktops_desktop_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexCloudDesktopsDesktopGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_cloud_desktops_desktop_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.174.0/docs/data-sources/cloud_desktops_desktop_group yandex_cloud_desktops_desktop_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexCloudDesktopsDesktopGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexCloudDesktopsDesktopGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_cloud_desktops_desktop_group',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.174.0',
        providerVersionConstraint: '0.174.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._desktopGroupId = config.desktopGroupId;
    this._desktopTemplate.internalValue = config.desktopTemplate;
    this._folderId = config.folderId;
    this._groupConfig.internalValue = config.groupConfig;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // desktop_group_id - computed: true, optional: true, required: false
  private _desktopGroupId?: string; 
  public get desktopGroupId() {
    return this.getStringAttribute('desktop_group_id');
  }
  public set desktopGroupId(value: string) {
    this._desktopGroupId = value;
  }
  public resetDesktopGroupId() {
    this._desktopGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desktopGroupIdInput() {
    return this._desktopGroupId;
  }

  // desktop_template - computed: true, optional: true, required: false
  private _desktopTemplate = new DataYandexCloudDesktopsDesktopGroupDesktopTemplateOutputReference(this, "desktop_template");
  public get desktopTemplate() {
    return this._desktopTemplate;
  }
  public putDesktopTemplate(value: DataYandexCloudDesktopsDesktopGroupDesktopTemplate) {
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

  // group_config - computed: true, optional: true, required: false
  private _groupConfig = new DataYandexCloudDesktopsDesktopGroupGroupConfigOutputReference(this, "group_config");
  public get groupConfig() {
    return this._groupConfig;
  }
  public putGroupConfig(value: DataYandexCloudDesktopsDesktopGroupGroupConfig) {
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

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      desktop_group_id: cdktf.stringToTerraform(this._desktopGroupId),
      desktop_template: dataYandexCloudDesktopsDesktopGroupDesktopTemplateToTerraform(this._desktopTemplate.internalValue),
      folder_id: cdktf.stringToTerraform(this._folderId),
      group_config: dataYandexCloudDesktopsDesktopGroupGroupConfigToTerraform(this._groupConfig.internalValue),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      desktop_group_id: {
        value: cdktf.stringToHclTerraform(this._desktopGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desktop_template: {
        value: dataYandexCloudDesktopsDesktopGroupDesktopTemplateToHclTerraform(this._desktopTemplate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataYandexCloudDesktopsDesktopGroupDesktopTemplate",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_config: {
        value: dataYandexCloudDesktopsDesktopGroupGroupConfigToHclTerraform(this._groupConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataYandexCloudDesktopsDesktopGroupGroupConfig",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
