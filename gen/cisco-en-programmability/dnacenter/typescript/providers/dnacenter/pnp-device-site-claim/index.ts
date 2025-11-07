// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_site_claim
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PnpDeviceSiteClaimConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_site_claim#id PnpDeviceSiteClaim#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_site_claim#parameters PnpDeviceSiteClaim#parameters}
  */
  readonly parameters: PnpDeviceSiteClaimParameters;
}
export interface PnpDeviceSiteClaimItem {
}

export function pnpDeviceSiteClaimItemToTerraform(struct?: PnpDeviceSiteClaimItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pnpDeviceSiteClaimItemToHclTerraform(struct?: PnpDeviceSiteClaimItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PnpDeviceSiteClaimItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceSiteClaimItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceSiteClaimItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // response - computed: true, optional: false, required: false
  public get response() {
    return this.getStringAttribute('response');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class PnpDeviceSiteClaimItemList extends cdktf.ComplexList {

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
  public get(index: number): PnpDeviceSiteClaimItemOutputReference {
    return new PnpDeviceSiteClaimItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceSiteClaimParametersConfigInfoConfigParameters {
  /**
  * Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_site_claim#key PnpDeviceSiteClaim#key}
  */
  readonly key?: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_site_claim#value PnpDeviceSiteClaim#value}
  */
  readonly value?: string;
}

export function pnpDeviceSiteClaimParametersConfigInfoConfigParametersToTerraform(struct?: PnpDeviceSiteClaimParametersConfigInfoConfigParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pnpDeviceSiteClaimParametersConfigInfoConfigParametersToHclTerraform(struct?: PnpDeviceSiteClaimParametersConfigInfoConfigParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceSiteClaimParametersConfigInfoConfigParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceSiteClaimParametersConfigInfoConfigParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceSiteClaimParametersConfigInfoConfigParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PnpDeviceSiteClaimParametersConfigInfoConfigParametersList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceSiteClaimParametersConfigInfoConfigParameters[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceSiteClaimParametersConfigInfoConfigParametersOutputReference {
    return new PnpDeviceSiteClaimParametersConfigInfoConfigParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceSiteClaimParametersConfigInfo {
  /**
  * Config Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_site_claim#config_id PnpDeviceSiteClaim#config_id}
  */
  readonly configId?: string;
  /**
  * config_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_site_claim#config_parameters PnpDeviceSiteClaim#config_parameters}
  */
  readonly configParameters?: PnpDeviceSiteClaimParametersConfigInfoConfigParameters[] | cdktf.IResolvable;
}

export function pnpDeviceSiteClaimParametersConfigInfoToTerraform(struct?: PnpDeviceSiteClaimParametersConfigInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_id: cdktf.stringToTerraform(struct!.configId),
    config_parameters: cdktf.listMapper(pnpDeviceSiteClaimParametersConfigInfoConfigParametersToTerraform, true)(struct!.configParameters),
  }
}


export function pnpDeviceSiteClaimParametersConfigInfoToHclTerraform(struct?: PnpDeviceSiteClaimParametersConfigInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_id: {
      value: cdktf.stringToHclTerraform(struct!.configId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_parameters: {
      value: cdktf.listMapperHcl(pnpDeviceSiteClaimParametersConfigInfoConfigParametersToHclTerraform, true)(struct!.configParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceSiteClaimParametersConfigInfoConfigParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceSiteClaimParametersConfigInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceSiteClaimParametersConfigInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configId !== undefined) {
      hasAnyValues = true;
      internalValueResult.configId = this._configId;
    }
    if (this._configParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configParameters = this._configParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceSiteClaimParametersConfigInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configId = undefined;
      this._configParameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configId = value.configId;
      this._configParameters.internalValue = value.configParameters;
    }
  }

  // config_id - computed: true, optional: true, required: false
  private _configId?: string; 
  public get configId() {
    return this.getStringAttribute('config_id');
  }
  public set configId(value: string) {
    this._configId = value;
  }
  public resetConfigId() {
    this._configId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
  }

  // config_parameters - computed: false, optional: true, required: false
  private _configParameters = new PnpDeviceSiteClaimParametersConfigInfoConfigParametersList(this, "config_parameters", false);
  public get configParameters() {
    return this._configParameters;
  }
  public putConfigParameters(value: PnpDeviceSiteClaimParametersConfigInfoConfigParameters[] | cdktf.IResolvable) {
    this._configParameters.internalValue = value;
  }
  public resetConfigParameters() {
    this._configParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configParametersInput() {
    return this._configParameters.internalValue;
  }
}

export class PnpDeviceSiteClaimParametersConfigInfoList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceSiteClaimParametersConfigInfo[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceSiteClaimParametersConfigInfoOutputReference {
    return new PnpDeviceSiteClaimParametersConfigInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceSiteClaimParametersImageInfo {
  /**
  * Image Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_site_claim#image_id PnpDeviceSiteClaim#image_id}
  */
  readonly imageId?: string;
  /**
  * Skip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_site_claim#skip PnpDeviceSiteClaim#skip}
  */
  readonly skip?: string;
}

export function pnpDeviceSiteClaimParametersImageInfoToTerraform(struct?: PnpDeviceSiteClaimParametersImageInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_id: cdktf.stringToTerraform(struct!.imageId),
    skip: cdktf.stringToTerraform(struct!.skip),
  }
}


export function pnpDeviceSiteClaimParametersImageInfoToHclTerraform(struct?: PnpDeviceSiteClaimParametersImageInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip: {
      value: cdktf.stringToHclTerraform(struct!.skip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceSiteClaimParametersImageInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PnpDeviceSiteClaimParametersImageInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._skip !== undefined) {
      hasAnyValues = true;
      internalValueResult.skip = this._skip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceSiteClaimParametersImageInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageId = undefined;
      this._skip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageId = value.imageId;
      this._skip = value.skip;
    }
  }

  // image_id - computed: true, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // skip - computed: true, optional: true, required: false
  private _skip?: string; 
  public get skip() {
    return this.getStringAttribute('skip');
  }
  public set skip(value: string) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }
}

export class PnpDeviceSiteClaimParametersImageInfoList extends cdktf.ComplexList {
  public internalValue? : PnpDeviceSiteClaimParametersImageInfo[] | cdktf.IResolvable

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
  public get(index: number): PnpDeviceSiteClaimParametersImageInfoOutputReference {
    return new PnpDeviceSiteClaimParametersImageInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PnpDeviceSiteClaimParameters {
  /**
  * Device Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_site_claim#device_id PnpDeviceSiteClaim#device_id}
  */
  readonly deviceId?: string;
  /**
  * for CatalystWLC/MobilityExpress
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_site_claim#gateway PnpDeviceSiteClaim#gateway}
  */
  readonly gateway?: string;
  /**
  * for Catalyst 9800 WLC
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_site_claim#interface_name PnpDeviceSiteClaim#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * for Access Points
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_site_claim#rf_profile PnpDeviceSiteClaim#rf_profile}
  */
  readonly rfProfile?: string;
  /**
  * for Sensors
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_site_claim#sensor_profile PnpDeviceSiteClaim#sensor_profile}
  */
  readonly sensorProfile?: string;
  /**
  * Site Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_site_claim#site_id PnpDeviceSiteClaim#site_id}
  */
  readonly siteId?: string;
  /**
  * for CatalystWLC/MobilityExpress
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_site_claim#static_ip PnpDeviceSiteClaim#static_ip}
  */
  readonly staticIp?: string;
  /**
  * for CatalystWLC/MobilityExpress
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_site_claim#subnet_mask PnpDeviceSiteClaim#subnet_mask}
  */
  readonly subnetMask?: string;
  /**
  * Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_site_claim#type PnpDeviceSiteClaim#type}
  */
  readonly type?: string;
  /**
  * for Catalyst 9800 WLC
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_site_claim#vlan_id PnpDeviceSiteClaim#vlan_id}
  */
  readonly vlanId?: string;
  /**
  * config_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_site_claim#config_info PnpDeviceSiteClaim#config_info}
  */
  readonly configInfo?: PnpDeviceSiteClaimParametersConfigInfo[] | cdktf.IResolvable;
  /**
  * image_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_site_claim#image_info PnpDeviceSiteClaim#image_info}
  */
  readonly imageInfo?: PnpDeviceSiteClaimParametersImageInfo[] | cdktf.IResolvable;
}

export function pnpDeviceSiteClaimParametersToTerraform(struct?: PnpDeviceSiteClaimParametersOutputReference | PnpDeviceSiteClaimParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_id: cdktf.stringToTerraform(struct!.deviceId),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    rf_profile: cdktf.stringToTerraform(struct!.rfProfile),
    sensor_profile: cdktf.stringToTerraform(struct!.sensorProfile),
    site_id: cdktf.stringToTerraform(struct!.siteId),
    static_ip: cdktf.stringToTerraform(struct!.staticIp),
    subnet_mask: cdktf.stringToTerraform(struct!.subnetMask),
    type: cdktf.stringToTerraform(struct!.type),
    vlan_id: cdktf.stringToTerraform(struct!.vlanId),
    config_info: cdktf.listMapper(pnpDeviceSiteClaimParametersConfigInfoToTerraform, true)(struct!.configInfo),
    image_info: cdktf.listMapper(pnpDeviceSiteClaimParametersImageInfoToTerraform, true)(struct!.imageInfo),
  }
}


export function pnpDeviceSiteClaimParametersToHclTerraform(struct?: PnpDeviceSiteClaimParametersOutputReference | PnpDeviceSiteClaimParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_id: {
      value: cdktf.stringToHclTerraform(struct!.deviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rf_profile: {
      value: cdktf.stringToHclTerraform(struct!.rfProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensor_profile: {
      value: cdktf.stringToHclTerraform(struct!.sensorProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_id: {
      value: cdktf.stringToHclTerraform(struct!.siteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_ip: {
      value: cdktf.stringToHclTerraform(struct!.staticIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_mask: {
      value: cdktf.stringToHclTerraform(struct!.subnetMask),
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
    vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_info: {
      value: cdktf.listMapperHcl(pnpDeviceSiteClaimParametersConfigInfoToHclTerraform, true)(struct!.configInfo),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceSiteClaimParametersConfigInfoList",
    },
    image_info: {
      value: cdktf.listMapperHcl(pnpDeviceSiteClaimParametersImageInfoToHclTerraform, true)(struct!.imageInfo),
      isBlock: true,
      type: "list",
      storageClassType: "PnpDeviceSiteClaimParametersImageInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PnpDeviceSiteClaimParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PnpDeviceSiteClaimParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._rfProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfProfile = this._rfProfile;
    }
    if (this._sensorProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensorProfile = this._sensorProfile;
    }
    if (this._siteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteId = this._siteId;
    }
    if (this._staticIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIp = this._staticIp;
    }
    if (this._subnetMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMask = this._subnetMask;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._configInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configInfo = this._configInfo?.internalValue;
    }
    if (this._imageInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageInfo = this._imageInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PnpDeviceSiteClaimParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deviceId = undefined;
      this._gateway = undefined;
      this._interfaceName = undefined;
      this._rfProfile = undefined;
      this._sensorProfile = undefined;
      this._siteId = undefined;
      this._staticIp = undefined;
      this._subnetMask = undefined;
      this._type = undefined;
      this._vlanId = undefined;
      this._configInfo.internalValue = undefined;
      this._imageInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deviceId = value.deviceId;
      this._gateway = value.gateway;
      this._interfaceName = value.interfaceName;
      this._rfProfile = value.rfProfile;
      this._sensorProfile = value.sensorProfile;
      this._siteId = value.siteId;
      this._staticIp = value.staticIp;
      this._subnetMask = value.subnetMask;
      this._type = value.type;
      this._vlanId = value.vlanId;
      this._configInfo.internalValue = value.configInfo;
      this._imageInfo.internalValue = value.imageInfo;
    }
  }

  // device_id - computed: true, optional: true, required: false
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // gateway - computed: true, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // interface_name - computed: true, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // rf_profile - computed: true, optional: true, required: false
  private _rfProfile?: string; 
  public get rfProfile() {
    return this.getStringAttribute('rf_profile');
  }
  public set rfProfile(value: string) {
    this._rfProfile = value;
  }
  public resetRfProfile() {
    this._rfProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfProfileInput() {
    return this._rfProfile;
  }

  // sensor_profile - computed: true, optional: true, required: false
  private _sensorProfile?: string; 
  public get sensorProfile() {
    return this.getStringAttribute('sensor_profile');
  }
  public set sensorProfile(value: string) {
    this._sensorProfile = value;
  }
  public resetSensorProfile() {
    this._sensorProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensorProfileInput() {
    return this._sensorProfile;
  }

  // site_id - computed: true, optional: true, required: false
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // static_ip - computed: true, optional: true, required: false
  private _staticIp?: string; 
  public get staticIp() {
    return this.getStringAttribute('static_ip');
  }
  public set staticIp(value: string) {
    this._staticIp = value;
  }
  public resetStaticIp() {
    this._staticIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpInput() {
    return this._staticIp;
  }

  // subnet_mask - computed: true, optional: true, required: false
  private _subnetMask?: string; 
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }
  public set subnetMask(value: string) {
    this._subnetMask = value;
  }
  public resetSubnetMask() {
    this._subnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskInput() {
    return this._subnetMask;
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

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // config_info - computed: false, optional: true, required: false
  private _configInfo = new PnpDeviceSiteClaimParametersConfigInfoList(this, "config_info", false);
  public get configInfo() {
    return this._configInfo;
  }
  public putConfigInfo(value: PnpDeviceSiteClaimParametersConfigInfo[] | cdktf.IResolvable) {
    this._configInfo.internalValue = value;
  }
  public resetConfigInfo() {
    this._configInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInfoInput() {
    return this._configInfo.internalValue;
  }

  // image_info - computed: false, optional: true, required: false
  private _imageInfo = new PnpDeviceSiteClaimParametersImageInfoList(this, "image_info", false);
  public get imageInfo() {
    return this._imageInfo;
  }
  public putImageInfo(value: PnpDeviceSiteClaimParametersImageInfo[] | cdktf.IResolvable) {
    this._imageInfo.internalValue = value;
  }
  public resetImageInfo() {
    this._imageInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInfoInput() {
    return this._imageInfo.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_site_claim dnacenter_pnp_device_site_claim}
*/
export class PnpDeviceSiteClaim extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_pnp_device_site_claim";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PnpDeviceSiteClaim resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PnpDeviceSiteClaim to import
  * @param importFromId The id of the existing PnpDeviceSiteClaim that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_site_claim#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PnpDeviceSiteClaim to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_pnp_device_site_claim", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/pnp_device_site_claim dnacenter_pnp_device_site_claim} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PnpDeviceSiteClaimConfig
  */
  public constructor(scope: Construct, id: string, config: PnpDeviceSiteClaimConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_pnp_device_site_claim',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
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
    this._parameters.internalValue = config.parameters;
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

  // item - computed: true, optional: false, required: false
  private _item = new PnpDeviceSiteClaimItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new PnpDeviceSiteClaimParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: PnpDeviceSiteClaimParameters) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: pnpDeviceSiteClaimParametersToTerraform(this._parameters.internalValue),
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
      parameters: {
        value: pnpDeviceSiteClaimParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PnpDeviceSiteClaimParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
