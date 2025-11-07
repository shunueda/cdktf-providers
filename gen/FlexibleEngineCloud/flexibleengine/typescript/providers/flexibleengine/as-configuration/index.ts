// https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AsConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_configuration#id AsConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_configuration#region AsConfiguration#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_configuration#scaling_configuration_name AsConfiguration#scaling_configuration_name}
  */
  readonly scalingConfigurationName: string;
  /**
  * instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_configuration#instance_config AsConfiguration#instance_config}
  */
  readonly instanceConfig: AsConfigurationInstanceConfig;
}
export interface AsConfigurationInstanceConfigDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_configuration#disk_type AsConfiguration#disk_type}
  */
  readonly diskType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_configuration#size AsConfiguration#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_configuration#volume_type AsConfiguration#volume_type}
  */
  readonly volumeType: string;
}

export function asConfigurationInstanceConfigDiskToTerraform(struct?: AsConfigurationInstanceConfigDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    size: cdktf.numberToTerraform(struct!.size),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}


export function asConfigurationInstanceConfigDiskToHclTerraform(struct?: AsConfigurationInstanceConfigDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AsConfigurationInstanceConfigDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AsConfigurationInstanceConfigDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsConfigurationInstanceConfigDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskType = undefined;
      this._size = undefined;
      this._volumeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskType = value.diskType;
      this._size = value.size;
      this._volumeType = value.volumeType;
    }
  }

  // disk_type - computed: false, optional: false, required: true
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // volume_type - computed: false, optional: false, required: true
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}

export class AsConfigurationInstanceConfigDiskList extends cdktf.ComplexList {
  public internalValue? : AsConfigurationInstanceConfigDisk[] | cdktf.IResolvable

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
  public get(index: number): AsConfigurationInstanceConfigDiskOutputReference {
    return new AsConfigurationInstanceConfigDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AsConfigurationInstanceConfigPersonality {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_configuration#content AsConfiguration#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_configuration#path AsConfiguration#path}
  */
  readonly path: string;
}

export function asConfigurationInstanceConfigPersonalityToTerraform(struct?: AsConfigurationInstanceConfigPersonality | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function asConfigurationInstanceConfigPersonalityToHclTerraform(struct?: AsConfigurationInstanceConfigPersonality | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AsConfigurationInstanceConfigPersonalityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AsConfigurationInstanceConfigPersonality | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsConfigurationInstanceConfigPersonality | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._path = value.path;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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
}

export class AsConfigurationInstanceConfigPersonalityList extends cdktf.ComplexList {
  public internalValue? : AsConfigurationInstanceConfigPersonality[] | cdktf.IResolvable

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
  public get(index: number): AsConfigurationInstanceConfigPersonalityOutputReference {
    return new AsConfigurationInstanceConfigPersonalityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AsConfigurationInstanceConfigPublicIpEipBandwidth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_configuration#charging_mode AsConfiguration#charging_mode}
  */
  readonly chargingMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_configuration#share_type AsConfiguration#share_type}
  */
  readonly shareType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_configuration#size AsConfiguration#size}
  */
  readonly size: number;
}

export function asConfigurationInstanceConfigPublicIpEipBandwidthToTerraform(struct?: AsConfigurationInstanceConfigPublicIpEipBandwidthOutputReference | AsConfigurationInstanceConfigPublicIpEipBandwidth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    charging_mode: cdktf.stringToTerraform(struct!.chargingMode),
    share_type: cdktf.stringToTerraform(struct!.shareType),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function asConfigurationInstanceConfigPublicIpEipBandwidthToHclTerraform(struct?: AsConfigurationInstanceConfigPublicIpEipBandwidthOutputReference | AsConfigurationInstanceConfigPublicIpEipBandwidth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    charging_mode: {
      value: cdktf.stringToHclTerraform(struct!.chargingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share_type: {
      value: cdktf.stringToHclTerraform(struct!.shareType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AsConfigurationInstanceConfigPublicIpEipBandwidthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AsConfigurationInstanceConfigPublicIpEipBandwidth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chargingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.chargingMode = this._chargingMode;
    }
    if (this._shareType !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareType = this._shareType;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsConfigurationInstanceConfigPublicIpEipBandwidth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._chargingMode = undefined;
      this._shareType = undefined;
      this._size = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._chargingMode = value.chargingMode;
      this._shareType = value.shareType;
      this._size = value.size;
    }
  }

  // charging_mode - computed: false, optional: false, required: true
  private _chargingMode?: string; 
  public get chargingMode() {
    return this.getStringAttribute('charging_mode');
  }
  public set chargingMode(value: string) {
    this._chargingMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chargingModeInput() {
    return this._chargingMode;
  }

  // share_type - computed: false, optional: false, required: true
  private _shareType?: string; 
  public get shareType() {
    return this.getStringAttribute('share_type');
  }
  public set shareType(value: string) {
    this._shareType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareTypeInput() {
    return this._shareType;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface AsConfigurationInstanceConfigPublicIpEip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_configuration#ip_type AsConfiguration#ip_type}
  */
  readonly ipType: string;
  /**
  * bandwidth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_configuration#bandwidth AsConfiguration#bandwidth}
  */
  readonly bandwidth: AsConfigurationInstanceConfigPublicIpEipBandwidth;
}

export function asConfigurationInstanceConfigPublicIpEipToTerraform(struct?: AsConfigurationInstanceConfigPublicIpEipOutputReference | AsConfigurationInstanceConfigPublicIpEip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_type: cdktf.stringToTerraform(struct!.ipType),
    bandwidth: asConfigurationInstanceConfigPublicIpEipBandwidthToTerraform(struct!.bandwidth),
  }
}


export function asConfigurationInstanceConfigPublicIpEipToHclTerraform(struct?: AsConfigurationInstanceConfigPublicIpEipOutputReference | AsConfigurationInstanceConfigPublicIpEip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_type: {
      value: cdktf.stringToHclTerraform(struct!.ipType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth: {
      value: asConfigurationInstanceConfigPublicIpEipBandwidthToHclTerraform(struct!.bandwidth),
      isBlock: true,
      type: "list",
      storageClassType: "AsConfigurationInstanceConfigPublicIpEipBandwidthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AsConfigurationInstanceConfigPublicIpEipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AsConfigurationInstanceConfigPublicIpEip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipType = this._ipType;
    }
    if (this._bandwidth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsConfigurationInstanceConfigPublicIpEip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipType = undefined;
      this._bandwidth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipType = value.ipType;
      this._bandwidth.internalValue = value.bandwidth;
    }
  }

  // ip_type - computed: false, optional: false, required: true
  private _ipType?: string; 
  public get ipType() {
    return this.getStringAttribute('ip_type');
  }
  public set ipType(value: string) {
    this._ipType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTypeInput() {
    return this._ipType;
  }

  // bandwidth - computed: false, optional: false, required: true
  private _bandwidth = new AsConfigurationInstanceConfigPublicIpEipBandwidthOutputReference(this, "bandwidth");
  public get bandwidth() {
    return this._bandwidth;
  }
  public putBandwidth(value: AsConfigurationInstanceConfigPublicIpEipBandwidth) {
    this._bandwidth.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth.internalValue;
  }
}
export interface AsConfigurationInstanceConfigPublicIp {
  /**
  * eip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_configuration#eip AsConfiguration#eip}
  */
  readonly eip: AsConfigurationInstanceConfigPublicIpEip;
}

export function asConfigurationInstanceConfigPublicIpToTerraform(struct?: AsConfigurationInstanceConfigPublicIpOutputReference | AsConfigurationInstanceConfigPublicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eip: asConfigurationInstanceConfigPublicIpEipToTerraform(struct!.eip),
  }
}


export function asConfigurationInstanceConfigPublicIpToHclTerraform(struct?: AsConfigurationInstanceConfigPublicIpOutputReference | AsConfigurationInstanceConfigPublicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eip: {
      value: asConfigurationInstanceConfigPublicIpEipToHclTerraform(struct!.eip),
      isBlock: true,
      type: "list",
      storageClassType: "AsConfigurationInstanceConfigPublicIpEipList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AsConfigurationInstanceConfigPublicIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AsConfigurationInstanceConfigPublicIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eip = this._eip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsConfigurationInstanceConfigPublicIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eip.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eip.internalValue = value.eip;
    }
  }

  // eip - computed: false, optional: false, required: true
  private _eip = new AsConfigurationInstanceConfigPublicIpEipOutputReference(this, "eip");
  public get eip() {
    return this._eip;
  }
  public putEip(value: AsConfigurationInstanceConfigPublicIpEip) {
    this._eip.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eipInput() {
    return this._eip.internalValue;
  }
}
export interface AsConfigurationInstanceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_configuration#flavor AsConfiguration#flavor}
  */
  readonly flavor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_configuration#image AsConfiguration#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_configuration#instance_id AsConfiguration#instance_id}
  */
  readonly instanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_configuration#key_name AsConfiguration#key_name}
  */
  readonly keyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_configuration#metadata AsConfiguration#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_configuration#user_data AsConfiguration#user_data}
  */
  readonly userData?: string;
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_configuration#disk AsConfiguration#disk}
  */
  readonly disk?: AsConfigurationInstanceConfigDisk[] | cdktf.IResolvable;
  /**
  * personality block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_configuration#personality AsConfiguration#personality}
  */
  readonly personality?: AsConfigurationInstanceConfigPersonality[] | cdktf.IResolvable;
  /**
  * public_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_configuration#public_ip AsConfiguration#public_ip}
  */
  readonly publicIp?: AsConfigurationInstanceConfigPublicIp;
}

export function asConfigurationInstanceConfigToTerraform(struct?: AsConfigurationInstanceConfigOutputReference | AsConfigurationInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flavor: cdktf.stringToTerraform(struct!.flavor),
    image: cdktf.stringToTerraform(struct!.image),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    user_data: cdktf.stringToTerraform(struct!.userData),
    disk: cdktf.listMapper(asConfigurationInstanceConfigDiskToTerraform, true)(struct!.disk),
    personality: cdktf.listMapper(asConfigurationInstanceConfigPersonalityToTerraform, true)(struct!.personality),
    public_ip: asConfigurationInstanceConfigPublicIpToTerraform(struct!.publicIp),
  }
}


export function asConfigurationInstanceConfigToHclTerraform(struct?: AsConfigurationInstanceConfigOutputReference | AsConfigurationInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flavor: {
      value: cdktf.stringToHclTerraform(struct!.flavor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    user_data: {
      value: cdktf.stringToHclTerraform(struct!.userData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk: {
      value: cdktf.listMapperHcl(asConfigurationInstanceConfigDiskToHclTerraform, true)(struct!.disk),
      isBlock: true,
      type: "list",
      storageClassType: "AsConfigurationInstanceConfigDiskList",
    },
    personality: {
      value: cdktf.listMapperHcl(asConfigurationInstanceConfigPersonalityToHclTerraform, true)(struct!.personality),
      isBlock: true,
      type: "list",
      storageClassType: "AsConfigurationInstanceConfigPersonalityList",
    },
    public_ip: {
      value: asConfigurationInstanceConfigPublicIpToHclTerraform(struct!.publicIp),
      isBlock: true,
      type: "list",
      storageClassType: "AsConfigurationInstanceConfigPublicIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AsConfigurationInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AsConfigurationInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flavor !== undefined) {
      hasAnyValues = true;
      internalValueResult.flavor = this._flavor;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._userData !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData;
    }
    if (this._disk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk?.internalValue;
    }
    if (this._personality?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.personality = this._personality?.internalValue;
    }
    if (this._publicIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AsConfigurationInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._flavor = undefined;
      this._image = undefined;
      this._instanceId = undefined;
      this._keyName = undefined;
      this._metadata = undefined;
      this._userData = undefined;
      this._disk.internalValue = undefined;
      this._personality.internalValue = undefined;
      this._publicIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._flavor = value.flavor;
      this._image = value.image;
      this._instanceId = value.instanceId;
      this._keyName = value.keyName;
      this._metadata = value.metadata;
      this._userData = value.userData;
      this._disk.internalValue = value.disk;
      this._personality.internalValue = value.personality;
      this._publicIp.internalValue = value.publicIp;
    }
  }

  // flavor - computed: false, optional: true, required: false
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  public resetFlavor() {
    this._flavor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // key_name - computed: false, optional: false, required: true
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // disk - computed: false, optional: true, required: false
  private _disk = new AsConfigurationInstanceConfigDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: AsConfigurationInstanceConfigDisk[] | cdktf.IResolvable) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // personality - computed: false, optional: true, required: false
  private _personality = new AsConfigurationInstanceConfigPersonalityList(this, "personality", false);
  public get personality() {
    return this._personality;
  }
  public putPersonality(value: AsConfigurationInstanceConfigPersonality[] | cdktf.IResolvable) {
    this._personality.internalValue = value;
  }
  public resetPersonality() {
    this._personality.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalityInput() {
    return this._personality.internalValue;
  }

  // public_ip - computed: false, optional: true, required: false
  private _publicIp = new AsConfigurationInstanceConfigPublicIpOutputReference(this, "public_ip");
  public get publicIp() {
    return this._publicIp;
  }
  public putPublicIp(value: AsConfigurationInstanceConfigPublicIp) {
    this._publicIp.internalValue = value;
  }
  public resetPublicIp() {
    this._publicIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_configuration flexibleengine_as_configuration}
*/
export class AsConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flexibleengine_as_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AsConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AsConfiguration to import
  * @param importFromId The id of the existing AsConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AsConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flexibleengine_as_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/as_configuration flexibleengine_as_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AsConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: AsConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'flexibleengine_as_configuration',
      terraformGeneratorMetadata: {
        providerName: 'flexibleengine',
        providerVersion: '1.46.0'
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
    this._region = config.region;
    this._scalingConfigurationName = config.scalingConfigurationName;
    this._instanceConfig.internalValue = config.instanceConfig;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // scaling_configuration_name - computed: false, optional: false, required: true
  private _scalingConfigurationName?: string; 
  public get scalingConfigurationName() {
    return this.getStringAttribute('scaling_configuration_name');
  }
  public set scalingConfigurationName(value: string) {
    this._scalingConfigurationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingConfigurationNameInput() {
    return this._scalingConfigurationName;
  }

  // instance_config - computed: false, optional: false, required: true
  private _instanceConfig = new AsConfigurationInstanceConfigOutputReference(this, "instance_config");
  public get instanceConfig() {
    return this._instanceConfig;
  }
  public putInstanceConfig(value: AsConfigurationInstanceConfig) {
    this._instanceConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigInput() {
    return this._instanceConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      scaling_configuration_name: cdktf.stringToTerraform(this._scalingConfigurationName),
      instance_config: asConfigurationInstanceConfigToTerraform(this._instanceConfig.internalValue),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_configuration_name: {
        value: cdktf.stringToHclTerraform(this._scalingConfigurationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_config: {
        value: asConfigurationInstanceConfigToHclTerraform(this._instanceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AsConfigurationInstanceConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
