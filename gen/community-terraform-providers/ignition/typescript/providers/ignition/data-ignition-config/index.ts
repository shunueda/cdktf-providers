// https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIgnitionConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#arrays DataIgnitionConfig#arrays}
  */
  readonly arrays?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#directories DataIgnitionConfig#directories}
  */
  readonly directories?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#disks DataIgnitionConfig#disks}
  */
  readonly disks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#files DataIgnitionConfig#files}
  */
  readonly files?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#filesystems DataIgnitionConfig#filesystems}
  */
  readonly filesystems?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#groups DataIgnitionConfig#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#id DataIgnitionConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#kernel_arguments DataIgnitionConfig#kernel_arguments}
  */
  readonly kernelArguments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#links DataIgnitionConfig#links}
  */
  readonly links?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#luks DataIgnitionConfig#luks}
  */
  readonly luks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#systemd DataIgnitionConfig#systemd}
  */
  readonly systemd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#users DataIgnitionConfig#users}
  */
  readonly users?: string[];
  /**
  * merge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#merge DataIgnitionConfig#merge}
  */
  readonly merge?: DataIgnitionConfigMerge[] | cdktf.IResolvable;
  /**
  * replace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#replace DataIgnitionConfig#replace}
  */
  readonly replace?: DataIgnitionConfigReplace;
  /**
  * tls_ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#tls_ca DataIgnitionConfig#tls_ca}
  */
  readonly tlsCa?: DataIgnitionConfigTlsCa[] | cdktf.IResolvable;
}
export interface DataIgnitionConfigMergeHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#name DataIgnitionConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#value DataIgnitionConfig#value}
  */
  readonly value: string;
}

export function dataIgnitionConfigMergeHttpHeadersToTerraform(struct?: DataIgnitionConfigMergeHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataIgnitionConfigMergeHttpHeadersToHclTerraform(struct?: DataIgnitionConfigMergeHttpHeaders | cdktf.IResolvable): any {
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

export class DataIgnitionConfigMergeHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIgnitionConfigMergeHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIgnitionConfigMergeHttpHeaders | cdktf.IResolvable | undefined) {
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

export class DataIgnitionConfigMergeHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataIgnitionConfigMergeHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataIgnitionConfigMergeHttpHeadersOutputReference {
    return new DataIgnitionConfigMergeHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIgnitionConfigMerge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#compression DataIgnitionConfig#compression}
  */
  readonly compression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#source DataIgnitionConfig#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#verification DataIgnitionConfig#verification}
  */
  readonly verification?: string;
  /**
  * http_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#http_headers DataIgnitionConfig#http_headers}
  */
  readonly httpHeaders?: DataIgnitionConfigMergeHttpHeaders[] | cdktf.IResolvable;
}

export function dataIgnitionConfigMergeToTerraform(struct?: DataIgnitionConfigMerge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression: cdktf.stringToTerraform(struct!.compression),
    source: cdktf.stringToTerraform(struct!.source),
    verification: cdktf.stringToTerraform(struct!.verification),
    http_headers: cdktf.listMapper(dataIgnitionConfigMergeHttpHeadersToTerraform, true)(struct!.httpHeaders),
  }
}


export function dataIgnitionConfigMergeToHclTerraform(struct?: DataIgnitionConfigMerge | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataIgnitionConfigMergeHttpHeadersToHclTerraform, true)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataIgnitionConfigMergeHttpHeadersList",
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

  public set internalValue(value: DataIgnitionConfigMerge | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compression = undefined;
      this._source = undefined;
      this._verification = undefined;
      this._httpHeaders.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _httpHeaders = new DataIgnitionConfigMergeHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataIgnitionConfigMergeHttpHeaders[] | cdktf.IResolvable) {
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
export interface DataIgnitionConfigReplaceHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#name DataIgnitionConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#value DataIgnitionConfig#value}
  */
  readonly value: string;
}

export function dataIgnitionConfigReplaceHttpHeadersToTerraform(struct?: DataIgnitionConfigReplaceHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataIgnitionConfigReplaceHttpHeadersToHclTerraform(struct?: DataIgnitionConfigReplaceHttpHeaders | cdktf.IResolvable): any {
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

export class DataIgnitionConfigReplaceHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIgnitionConfigReplaceHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIgnitionConfigReplaceHttpHeaders | cdktf.IResolvable | undefined) {
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

export class DataIgnitionConfigReplaceHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataIgnitionConfigReplaceHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataIgnitionConfigReplaceHttpHeadersOutputReference {
    return new DataIgnitionConfigReplaceHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIgnitionConfigReplace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#compression DataIgnitionConfig#compression}
  */
  readonly compression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#source DataIgnitionConfig#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#verification DataIgnitionConfig#verification}
  */
  readonly verification?: string;
  /**
  * http_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#http_headers DataIgnitionConfig#http_headers}
  */
  readonly httpHeaders?: DataIgnitionConfigReplaceHttpHeaders[] | cdktf.IResolvable;
}

export function dataIgnitionConfigReplaceToTerraform(struct?: DataIgnitionConfigReplaceOutputReference | DataIgnitionConfigReplace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression: cdktf.stringToTerraform(struct!.compression),
    source: cdktf.stringToTerraform(struct!.source),
    verification: cdktf.stringToTerraform(struct!.verification),
    http_headers: cdktf.listMapper(dataIgnitionConfigReplaceHttpHeadersToTerraform, true)(struct!.httpHeaders),
  }
}


export function dataIgnitionConfigReplaceToHclTerraform(struct?: DataIgnitionConfigReplaceOutputReference | DataIgnitionConfigReplace): any {
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
      value: cdktf.listMapperHcl(dataIgnitionConfigReplaceHttpHeadersToHclTerraform, true)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataIgnitionConfigReplaceHttpHeadersList",
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

  public set internalValue(value: DataIgnitionConfigReplace | undefined) {
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
  private _httpHeaders = new DataIgnitionConfigReplaceHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataIgnitionConfigReplaceHttpHeaders[] | cdktf.IResolvable) {
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
export interface DataIgnitionConfigTlsCaHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#name DataIgnitionConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#value DataIgnitionConfig#value}
  */
  readonly value: string;
}

export function dataIgnitionConfigTlsCaHttpHeadersToTerraform(struct?: DataIgnitionConfigTlsCaHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataIgnitionConfigTlsCaHttpHeadersToHclTerraform(struct?: DataIgnitionConfigTlsCaHttpHeaders | cdktf.IResolvable): any {
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

export class DataIgnitionConfigTlsCaHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIgnitionConfigTlsCaHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIgnitionConfigTlsCaHttpHeaders | cdktf.IResolvable | undefined) {
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

export class DataIgnitionConfigTlsCaHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataIgnitionConfigTlsCaHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataIgnitionConfigTlsCaHttpHeadersOutputReference {
    return new DataIgnitionConfigTlsCaHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIgnitionConfigTlsCa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#compression DataIgnitionConfig#compression}
  */
  readonly compression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#source DataIgnitionConfig#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#verification DataIgnitionConfig#verification}
  */
  readonly verification?: string;
  /**
  * http_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#http_headers DataIgnitionConfig#http_headers}
  */
  readonly httpHeaders?: DataIgnitionConfigTlsCaHttpHeaders[] | cdktf.IResolvable;
}

export function dataIgnitionConfigTlsCaToTerraform(struct?: DataIgnitionConfigTlsCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression: cdktf.stringToTerraform(struct!.compression),
    source: cdktf.stringToTerraform(struct!.source),
    verification: cdktf.stringToTerraform(struct!.verification),
    http_headers: cdktf.listMapper(dataIgnitionConfigTlsCaHttpHeadersToTerraform, true)(struct!.httpHeaders),
  }
}


export function dataIgnitionConfigTlsCaToHclTerraform(struct?: DataIgnitionConfigTlsCa | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataIgnitionConfigTlsCaHttpHeadersToHclTerraform, true)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataIgnitionConfigTlsCaHttpHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIgnitionConfigTlsCaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIgnitionConfigTlsCa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DataIgnitionConfigTlsCa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compression = undefined;
      this._source = undefined;
      this._verification = undefined;
      this._httpHeaders.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _httpHeaders = new DataIgnitionConfigTlsCaHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataIgnitionConfigTlsCaHttpHeaders[] | cdktf.IResolvable) {
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

export class DataIgnitionConfigTlsCaList extends cdktf.ComplexList {
  public internalValue? : DataIgnitionConfigTlsCa[] | cdktf.IResolvable

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
  public get(index: number): DataIgnitionConfigTlsCaOutputReference {
    return new DataIgnitionConfigTlsCaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config ignition_config}
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
  * @param importFromId The id of the existing DataIgnitionConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIgnitionConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ignition_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/community-terraform-providers/ignition/2.6.0/docs/data-sources/config ignition_config} Data Source
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
        providerVersion: '2.6.0',
        providerVersionConstraint: '2.6.0'
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
    this._kernelArguments = config.kernelArguments;
    this._links = config.links;
    this._luks = config.luks;
    this._systemd = config.systemd;
    this._users = config.users;
    this._merge.internalValue = config.merge;
    this._replace.internalValue = config.replace;
    this._tlsCa.internalValue = config.tlsCa;
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

  // kernel_arguments - computed: false, optional: true, required: false
  private _kernelArguments?: string; 
  public get kernelArguments() {
    return this.getStringAttribute('kernel_arguments');
  }
  public set kernelArguments(value: string) {
    this._kernelArguments = value;
  }
  public resetKernelArguments() {
    this._kernelArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelArgumentsInput() {
    return this._kernelArguments;
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

  // luks - computed: false, optional: true, required: false
  private _luks?: string[]; 
  public get luks() {
    return this.getListAttribute('luks');
  }
  public set luks(value: string[]) {
    this._luks = value;
  }
  public resetLuks() {
    this._luks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get luksInput() {
    return this._luks;
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

  // tls_ca - computed: false, optional: true, required: false
  private _tlsCa = new DataIgnitionConfigTlsCaList(this, "tls_ca", false);
  public get tlsCa() {
    return this._tlsCa;
  }
  public putTlsCa(value: DataIgnitionConfigTlsCa[] | cdktf.IResolvable) {
    this._tlsCa.internalValue = value;
  }
  public resetTlsCa() {
    this._tlsCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCaInput() {
    return this._tlsCa.internalValue;
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
      kernel_arguments: cdktf.stringToTerraform(this._kernelArguments),
      links: cdktf.listMapper(cdktf.stringToTerraform, false)(this._links),
      luks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._luks),
      systemd: cdktf.listMapper(cdktf.stringToTerraform, false)(this._systemd),
      users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._users),
      merge: cdktf.listMapper(dataIgnitionConfigMergeToTerraform, true)(this._merge.internalValue),
      replace: dataIgnitionConfigReplaceToTerraform(this._replace.internalValue),
      tls_ca: cdktf.listMapper(dataIgnitionConfigTlsCaToTerraform, true)(this._tlsCa.internalValue),
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
      kernel_arguments: {
        value: cdktf.stringToHclTerraform(this._kernelArguments),
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
      luks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._luks),
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
      tls_ca: {
        value: cdktf.listMapperHcl(dataIgnitionConfigTlsCaToHclTerraform, true)(this._tlsCa.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIgnitionConfigTlsCaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
