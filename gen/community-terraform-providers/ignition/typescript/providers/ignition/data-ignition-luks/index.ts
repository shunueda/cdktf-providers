// https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/luks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIgnitionLuksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/luks#device DataIgnitionLuks#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/luks#discard DataIgnitionLuks#discard}
  */
  readonly discard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/luks#id DataIgnitionLuks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/luks#label DataIgnitionLuks#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/luks#name DataIgnitionLuks#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/luks#open_options DataIgnitionLuks#open_options}
  */
  readonly openOptions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/luks#options DataIgnitionLuks#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/luks#uuid DataIgnitionLuks#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/luks#wipe_volume DataIgnitionLuks#wipe_volume}
  */
  readonly wipeVolume?: boolean | cdktf.IResolvable;
  /**
  * clevis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/luks#clevis DataIgnitionLuks#clevis}
  */
  readonly clevis?: DataIgnitionLuksClevis;
  /**
  * key_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/luks#key_file DataIgnitionLuks#key_file}
  */
  readonly keyFile?: DataIgnitionLuksKeyFile;
}
export interface DataIgnitionLuksClevisCustom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/luks#config DataIgnitionLuks#config}
  */
  readonly config?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/luks#needs_network DataIgnitionLuks#needs_network}
  */
  readonly needsNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/luks#pin DataIgnitionLuks#pin}
  */
  readonly pin?: string;
}

export function dataIgnitionLuksClevisCustomToTerraform(struct?: DataIgnitionLuksClevisCustomOutputReference | DataIgnitionLuksClevisCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    needs_network: cdktf.booleanToTerraform(struct!.needsNetwork),
    pin: cdktf.stringToTerraform(struct!.pin),
  }
}


export function dataIgnitionLuksClevisCustomToHclTerraform(struct?: DataIgnitionLuksClevisCustomOutputReference | DataIgnitionLuksClevisCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    needs_network: {
      value: cdktf.booleanToHclTerraform(struct!.needsNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pin: {
      value: cdktf.stringToHclTerraform(struct!.pin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIgnitionLuksClevisCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIgnitionLuksClevisCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._needsNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.needsNetwork = this._needsNetwork;
    }
    if (this._pin !== undefined) {
      hasAnyValues = true;
      internalValueResult.pin = this._pin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIgnitionLuksClevisCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._config = undefined;
      this._needsNetwork = undefined;
      this._pin = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._config = value.config;
      this._needsNetwork = value.needsNetwork;
      this._pin = value.pin;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // needs_network - computed: false, optional: true, required: false
  private _needsNetwork?: boolean | cdktf.IResolvable; 
  public get needsNetwork() {
    return this.getBooleanAttribute('needs_network');
  }
  public set needsNetwork(value: boolean | cdktf.IResolvable) {
    this._needsNetwork = value;
  }
  public resetNeedsNetwork() {
    this._needsNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get needsNetworkInput() {
    return this._needsNetwork;
  }

  // pin - computed: false, optional: true, required: false
  private _pin?: string; 
  public get pin() {
    return this.getStringAttribute('pin');
  }
  public set pin(value: string) {
    this._pin = value;
  }
  public resetPin() {
    this._pin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinInput() {
    return this._pin;
  }
}
export interface DataIgnitionLuksClevisTang {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/luks#advertisement DataIgnitionLuks#advertisement}
  */
  readonly advertisement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/luks#thumbprint DataIgnitionLuks#thumbprint}
  */
  readonly thumbprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/luks#url DataIgnitionLuks#url}
  */
  readonly url: string;
}

export function dataIgnitionLuksClevisTangToTerraform(struct?: DataIgnitionLuksClevisTang | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertisement: cdktf.stringToTerraform(struct!.advertisement),
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataIgnitionLuksClevisTangToHclTerraform(struct?: DataIgnitionLuksClevisTang | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertisement: {
      value: cdktf.stringToHclTerraform(struct!.advertisement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.thumbprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIgnitionLuksClevisTangOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIgnitionLuksClevisTang | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertisement !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisement = this._advertisement;
    }
    if (this._thumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.thumbprint = this._thumbprint;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIgnitionLuksClevisTang | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertisement = undefined;
      this._thumbprint = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertisement = value.advertisement;
      this._thumbprint = value.thumbprint;
      this._url = value.url;
    }
  }

  // advertisement - computed: false, optional: true, required: false
  private _advertisement?: string; 
  public get advertisement() {
    return this.getStringAttribute('advertisement');
  }
  public set advertisement(value: string) {
    this._advertisement = value;
  }
  public resetAdvertisement() {
    this._advertisement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisementInput() {
    return this._advertisement;
  }

  // thumbprint - computed: false, optional: true, required: false
  private _thumbprint?: string; 
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  public resetThumbprint() {
    this._thumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class DataIgnitionLuksClevisTangList extends cdktf.ComplexList {
  public internalValue? : DataIgnitionLuksClevisTang[] | cdktf.IResolvable

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
  public get(index: number): DataIgnitionLuksClevisTangOutputReference {
    return new DataIgnitionLuksClevisTangOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIgnitionLuksClevis {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/luks#threshold DataIgnitionLuks#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/luks#tpm2 DataIgnitionLuks#tpm2}
  */
  readonly tpm2?: boolean | cdktf.IResolvable;
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/luks#custom DataIgnitionLuks#custom}
  */
  readonly custom?: DataIgnitionLuksClevisCustom;
  /**
  * tang block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/luks#tang DataIgnitionLuks#tang}
  */
  readonly tang?: DataIgnitionLuksClevisTang[] | cdktf.IResolvable;
}

export function dataIgnitionLuksClevisToTerraform(struct?: DataIgnitionLuksClevisOutputReference | DataIgnitionLuksClevis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    tpm2: cdktf.booleanToTerraform(struct!.tpm2),
    custom: dataIgnitionLuksClevisCustomToTerraform(struct!.custom),
    tang: cdktf.listMapper(dataIgnitionLuksClevisTangToTerraform, true)(struct!.tang),
  }
}


export function dataIgnitionLuksClevisToHclTerraform(struct?: DataIgnitionLuksClevisOutputReference | DataIgnitionLuksClevis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tpm2: {
      value: cdktf.booleanToHclTerraform(struct!.tpm2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom: {
      value: dataIgnitionLuksClevisCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "list",
      storageClassType: "DataIgnitionLuksClevisCustomList",
    },
    tang: {
      value: cdktf.listMapperHcl(dataIgnitionLuksClevisTangToHclTerraform, true)(struct!.tang),
      isBlock: true,
      type: "list",
      storageClassType: "DataIgnitionLuksClevisTangList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIgnitionLuksClevisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIgnitionLuksClevis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._tpm2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.tpm2 = this._tpm2;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._tang?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tang = this._tang?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIgnitionLuksClevis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold = undefined;
      this._tpm2 = undefined;
      this._custom.internalValue = undefined;
      this._tang.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold = value.threshold;
      this._tpm2 = value.tpm2;
      this._custom.internalValue = value.custom;
      this._tang.internalValue = value.tang;
    }
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // tpm2 - computed: false, optional: true, required: false
  private _tpm2?: boolean | cdktf.IResolvable; 
  public get tpm2() {
    return this.getBooleanAttribute('tpm2');
  }
  public set tpm2(value: boolean | cdktf.IResolvable) {
    this._tpm2 = value;
  }
  public resetTpm2() {
    this._tpm2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpm2Input() {
    return this._tpm2;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new DataIgnitionLuksClevisCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: DataIgnitionLuksClevisCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // tang - computed: false, optional: true, required: false
  private _tang = new DataIgnitionLuksClevisTangList(this, "tang", false);
  public get tang() {
    return this._tang;
  }
  public putTang(value: DataIgnitionLuksClevisTang[] | cdktf.IResolvable) {
    this._tang.internalValue = value;
  }
  public resetTang() {
    this._tang.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tangInput() {
    return this._tang.internalValue;
  }
}
export interface DataIgnitionLuksKeyFileHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/luks#name DataIgnitionLuks#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/luks#value DataIgnitionLuks#value}
  */
  readonly value: string;
}

export function dataIgnitionLuksKeyFileHttpHeadersToTerraform(struct?: DataIgnitionLuksKeyFileHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataIgnitionLuksKeyFileHttpHeadersToHclTerraform(struct?: DataIgnitionLuksKeyFileHttpHeaders | cdktf.IResolvable): any {
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

export class DataIgnitionLuksKeyFileHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIgnitionLuksKeyFileHttpHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIgnitionLuksKeyFileHttpHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataIgnitionLuksKeyFileHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataIgnitionLuksKeyFileHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataIgnitionLuksKeyFileHttpHeadersOutputReference {
    return new DataIgnitionLuksKeyFileHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIgnitionLuksKeyFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/luks#compression DataIgnitionLuks#compression}
  */
  readonly compression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/luks#source DataIgnitionLuks#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/luks#verification DataIgnitionLuks#verification}
  */
  readonly verification?: string;
  /**
  * http_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/luks#http_headers DataIgnitionLuks#http_headers}
  */
  readonly httpHeaders?: DataIgnitionLuksKeyFileHttpHeaders[] | cdktf.IResolvable;
}

export function dataIgnitionLuksKeyFileToTerraform(struct?: DataIgnitionLuksKeyFileOutputReference | DataIgnitionLuksKeyFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression: cdktf.stringToTerraform(struct!.compression),
    source: cdktf.stringToTerraform(struct!.source),
    verification: cdktf.stringToTerraform(struct!.verification),
    http_headers: cdktf.listMapper(dataIgnitionLuksKeyFileHttpHeadersToTerraform, true)(struct!.httpHeaders),
  }
}


export function dataIgnitionLuksKeyFileToHclTerraform(struct?: DataIgnitionLuksKeyFileOutputReference | DataIgnitionLuksKeyFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression: {
      value: cdktf.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    http_headers: {
      value: cdktf.listMapperHcl(dataIgnitionLuksKeyFileHttpHeadersToHclTerraform, true)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataIgnitionLuksKeyFileHttpHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIgnitionLuksKeyFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIgnitionLuksKeyFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._verification !== undefined) {
      hasAnyValues = true;
      internalValueResult.verification = this._verification;
    }
    if (this._httpHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIgnitionLuksKeyFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compression = undefined;
      this._source = undefined;
      this._verification = undefined;
      this._httpHeaders.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compression = value.compression;
      this._source = value.source;
      this._verification = value.verification;
      this._httpHeaders.internalValue = value.httpHeaders;
    }
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
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

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders = new DataIgnitionLuksKeyFileHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataIgnitionLuksKeyFileHttpHeaders[] | cdktf.IResolvable) {
    this._httpHeaders.internalValue = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/luks ignition_luks}
*/
export class DataIgnitionLuks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ignition_luks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIgnitionLuks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIgnitionLuks to import
  * @param importFromId The id of the existing DataIgnitionLuks that should be imported. Refer to the {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/luks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIgnitionLuks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ignition_luks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.5.1/docs/data-sources/luks ignition_luks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIgnitionLuksConfig
  */
  public constructor(scope: Construct, id: string, config: DataIgnitionLuksConfig) {
    super(scope, id, {
      terraformResourceType: 'ignition_luks',
      terraformGeneratorMetadata: {
        providerName: 'ignition',
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
    this._device = config.device;
    this._discard = config.discard;
    this._id = config.id;
    this._label = config.label;
    this._name = config.name;
    this._openOptions = config.openOptions;
    this._options = config.options;
    this._uuid = config.uuid;
    this._wipeVolume = config.wipeVolume;
    this._clevis.internalValue = config.clevis;
    this._keyFile.internalValue = config.keyFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // discard - computed: false, optional: true, required: false
  private _discard?: boolean | cdktf.IResolvable; 
  public get discard() {
    return this.getBooleanAttribute('discard');
  }
  public set discard(value: boolean | cdktf.IResolvable) {
    this._discard = value;
  }
  public resetDiscard() {
    this._discard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discardInput() {
    return this._discard;
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

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

  // open_options - computed: false, optional: true, required: false
  private _openOptions?: string[]; 
  public get openOptions() {
    return this.getListAttribute('open_options');
  }
  public set openOptions(value: string[]) {
    this._openOptions = value;
  }
  public resetOpenOptions() {
    this._openOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openOptionsInput() {
    return this._openOptions;
  }

  // options - computed: false, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return this.getListAttribute('options');
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // rendered - computed: true, optional: false, required: false
  public get rendered() {
    return this.getStringAttribute('rendered');
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // wipe_volume - computed: false, optional: true, required: false
  private _wipeVolume?: boolean | cdktf.IResolvable; 
  public get wipeVolume() {
    return this.getBooleanAttribute('wipe_volume');
  }
  public set wipeVolume(value: boolean | cdktf.IResolvable) {
    this._wipeVolume = value;
  }
  public resetWipeVolume() {
    this._wipeVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wipeVolumeInput() {
    return this._wipeVolume;
  }

  // clevis - computed: false, optional: true, required: false
  private _clevis = new DataIgnitionLuksClevisOutputReference(this, "clevis");
  public get clevis() {
    return this._clevis;
  }
  public putClevis(value: DataIgnitionLuksClevis) {
    this._clevis.internalValue = value;
  }
  public resetClevis() {
    this._clevis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clevisInput() {
    return this._clevis.internalValue;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile = new DataIgnitionLuksKeyFileOutputReference(this, "key_file");
  public get keyFile() {
    return this._keyFile;
  }
  public putKeyFile(value: DataIgnitionLuksKeyFile) {
    this._keyFile.internalValue = value;
  }
  public resetKeyFile() {
    this._keyFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      discard: cdktf.booleanToTerraform(this._discard),
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
      name: cdktf.stringToTerraform(this._name),
      open_options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._openOptions),
      options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._options),
      uuid: cdktf.stringToTerraform(this._uuid),
      wipe_volume: cdktf.booleanToTerraform(this._wipeVolume),
      clevis: dataIgnitionLuksClevisToTerraform(this._clevis.internalValue),
      key_file: dataIgnitionLuksKeyFileToTerraform(this._keyFile.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discard: {
        value: cdktf.booleanToHclTerraform(this._discard),
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
      label: {
        value: cdktf.stringToHclTerraform(this._label),
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
      open_options: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._openOptions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      options: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._options),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wipe_volume: {
        value: cdktf.booleanToHclTerraform(this._wipeVolume),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      clevis: {
        value: dataIgnitionLuksClevisToHclTerraform(this._clevis.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIgnitionLuksClevisList",
      },
      key_file: {
        value: dataIgnitionLuksKeyFileToHclTerraform(this._keyFile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIgnitionLuksKeyFileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
