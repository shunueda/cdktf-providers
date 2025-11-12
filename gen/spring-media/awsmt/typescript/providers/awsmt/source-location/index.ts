// https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/source_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/source_location#access_configuration SourceLocation#access_configuration}
  */
  readonly accessConfiguration?: SourceLocationAccessConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/source_location#default_segment_delivery_configuration SourceLocation#default_segment_delivery_configuration}
  */
  readonly defaultSegmentDeliveryConfiguration?: SourceLocationDefaultSegmentDeliveryConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/source_location#http_configuration SourceLocation#http_configuration}
  */
  readonly httpConfiguration: SourceLocationHttpConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/source_location#name SourceLocation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/source_location#segment_delivery_configurations SourceLocation#segment_delivery_configurations}
  */
  readonly segmentDeliveryConfigurations?: SourceLocationSegmentDeliveryConfigurations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/source_location#tags SourceLocation#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface SourceLocationAccessConfigurationSmatc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/source_location#header_name SourceLocation#header_name}
  */
  readonly headerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/source_location#secret_arn SourceLocation#secret_arn}
  */
  readonly secretArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/source_location#secret_string_key SourceLocation#secret_string_key}
  */
  readonly secretStringKey?: string;
}

export function sourceLocationAccessConfigurationSmatcToTerraform(struct?: SourceLocationAccessConfigurationSmatc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
    secret_string_key: cdktf.stringToTerraform(struct!.secretStringKey),
  }
}


export function sourceLocationAccessConfigurationSmatcToHclTerraform(struct?: SourceLocationAccessConfigurationSmatc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_arn: {
      value: cdktf.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_string_key: {
      value: cdktf.stringToHclTerraform(struct!.secretStringKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceLocationAccessConfigurationSmatcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceLocationAccessConfigurationSmatc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    if (this._secretStringKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretStringKey = this._secretStringKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceLocationAccessConfigurationSmatc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._secretArn = undefined;
      this._secretStringKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._secretArn = value.secretArn;
      this._secretStringKey = value.secretStringKey;
    }
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // secret_arn - computed: false, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }

  // secret_string_key - computed: false, optional: true, required: false
  private _secretStringKey?: string; 
  public get secretStringKey() {
    return this.getStringAttribute('secret_string_key');
  }
  public set secretStringKey(value: string) {
    this._secretStringKey = value;
  }
  public resetSecretStringKey() {
    this._secretStringKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretStringKeyInput() {
    return this._secretStringKey;
  }
}
export interface SourceLocationAccessConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/source_location#access_type SourceLocation#access_type}
  */
  readonly accessType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/source_location#smatc SourceLocation#smatc}
  */
  readonly smatc?: SourceLocationAccessConfigurationSmatc;
}

export function sourceLocationAccessConfigurationToTerraform(struct?: SourceLocationAccessConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_type: cdktf.stringToTerraform(struct!.accessType),
    smatc: sourceLocationAccessConfigurationSmatcToTerraform(struct!.smatc),
  }
}


export function sourceLocationAccessConfigurationToHclTerraform(struct?: SourceLocationAccessConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_type: {
      value: cdktf.stringToHclTerraform(struct!.accessType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smatc: {
      value: sourceLocationAccessConfigurationSmatcToHclTerraform(struct!.smatc),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceLocationAccessConfigurationSmatc",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceLocationAccessConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceLocationAccessConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessType = this._accessType;
    }
    if (this._smatc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smatc = this._smatc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceLocationAccessConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessType = undefined;
      this._smatc.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessType = value.accessType;
      this._smatc.internalValue = value.smatc;
    }
  }

  // access_type - computed: false, optional: false, required: true
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // smatc - computed: false, optional: true, required: false
  private _smatc = new SourceLocationAccessConfigurationSmatcOutputReference(this, "smatc");
  public get smatc() {
    return this._smatc;
  }
  public putSmatc(value: SourceLocationAccessConfigurationSmatc) {
    this._smatc.internalValue = value;
  }
  public resetSmatc() {
    this._smatc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smatcInput() {
    return this._smatc.internalValue;
  }
}
export interface SourceLocationDefaultSegmentDeliveryConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/source_location#base_url SourceLocation#base_url}
  */
  readonly baseUrl?: string;
}

export function sourceLocationDefaultSegmentDeliveryConfigurationToTerraform(struct?: SourceLocationDefaultSegmentDeliveryConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_url: cdktf.stringToTerraform(struct!.baseUrl),
  }
}


export function sourceLocationDefaultSegmentDeliveryConfigurationToHclTerraform(struct?: SourceLocationDefaultSegmentDeliveryConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_url: {
      value: cdktf.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceLocationDefaultSegmentDeliveryConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceLocationDefaultSegmentDeliveryConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceLocationDefaultSegmentDeliveryConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseUrl = value.baseUrl;
    }
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }
}
export interface SourceLocationHttpConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/source_location#base_url SourceLocation#base_url}
  */
  readonly baseUrl: string;
}

export function sourceLocationHttpConfigurationToTerraform(struct?: SourceLocationHttpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_url: cdktf.stringToTerraform(struct!.baseUrl),
  }
}


export function sourceLocationHttpConfigurationToHclTerraform(struct?: SourceLocationHttpConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_url: {
      value: cdktf.stringToHclTerraform(struct!.baseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceLocationHttpConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceLocationHttpConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceLocationHttpConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseUrl = value.baseUrl;
    }
  }

  // base_url - computed: false, optional: false, required: true
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }
}
export interface SourceLocationSegmentDeliveryConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/source_location#base_url SourceLocation#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/source_location#name SourceLocation#name}
  */
  readonly name?: string;
}

export function sourceLocationSegmentDeliveryConfigurationsToTerraform(struct?: SourceLocationSegmentDeliveryConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_url: cdktf.stringToTerraform(struct!.baseUrl),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function sourceLocationSegmentDeliveryConfigurationsToHclTerraform(struct?: SourceLocationSegmentDeliveryConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_url: {
      value: cdktf.stringToHclTerraform(struct!.baseUrl),
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

export class SourceLocationSegmentDeliveryConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceLocationSegmentDeliveryConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceLocationSegmentDeliveryConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseUrl = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseUrl = value.baseUrl;
      this._name = value.name;
    }
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // name - computed: false, optional: true, required: false
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
}

export class SourceLocationSegmentDeliveryConfigurationsList extends cdktf.ComplexList {
  public internalValue? : SourceLocationSegmentDeliveryConfigurations[] | cdktf.IResolvable

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
  public get(index: number): SourceLocationSegmentDeliveryConfigurationsOutputReference {
    return new SourceLocationSegmentDeliveryConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/source_location awsmt_source_location}
*/
export class SourceLocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awsmt_source_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceLocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceLocation to import
  * @param importFromId The id of the existing SourceLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/source_location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awsmt_source_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/source_location awsmt_source_location} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceLocationConfig
  */
  public constructor(scope: Construct, id: string, config: SourceLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'awsmt_source_location',
      terraformGeneratorMetadata: {
        providerName: 'awsmt',
        providerVersion: '2.5.1',
        providerVersionConstraint: '2.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessConfiguration.internalValue = config.accessConfiguration;
    this._defaultSegmentDeliveryConfiguration.internalValue = config.defaultSegmentDeliveryConfiguration;
    this._httpConfiguration.internalValue = config.httpConfiguration;
    this._name = config.name;
    this._segmentDeliveryConfigurations.internalValue = config.segmentDeliveryConfigurations;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_configuration - computed: false, optional: true, required: false
  private _accessConfiguration = new SourceLocationAccessConfigurationOutputReference(this, "access_configuration");
  public get accessConfiguration() {
    return this._accessConfiguration;
  }
  public putAccessConfiguration(value: SourceLocationAccessConfiguration) {
    this._accessConfiguration.internalValue = value;
  }
  public resetAccessConfiguration() {
    this._accessConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConfigurationInput() {
    return this._accessConfiguration.internalValue;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // default_segment_delivery_configuration - computed: false, optional: true, required: false
  private _defaultSegmentDeliveryConfiguration = new SourceLocationDefaultSegmentDeliveryConfigurationOutputReference(this, "default_segment_delivery_configuration");
  public get defaultSegmentDeliveryConfiguration() {
    return this._defaultSegmentDeliveryConfiguration;
  }
  public putDefaultSegmentDeliveryConfiguration(value: SourceLocationDefaultSegmentDeliveryConfiguration) {
    this._defaultSegmentDeliveryConfiguration.internalValue = value;
  }
  public resetDefaultSegmentDeliveryConfiguration() {
    this._defaultSegmentDeliveryConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSegmentDeliveryConfigurationInput() {
    return this._defaultSegmentDeliveryConfiguration.internalValue;
  }

  // http_configuration - computed: false, optional: false, required: true
  private _httpConfiguration = new SourceLocationHttpConfigurationOutputReference(this, "http_configuration");
  public get httpConfiguration() {
    return this._httpConfiguration;
  }
  public putHttpConfiguration(value: SourceLocationHttpConfiguration) {
    this._httpConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConfigurationInput() {
    return this._httpConfiguration.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
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

  // segment_delivery_configurations - computed: false, optional: true, required: false
  private _segmentDeliveryConfigurations = new SourceLocationSegmentDeliveryConfigurationsList(this, "segment_delivery_configurations", false);
  public get segmentDeliveryConfigurations() {
    return this._segmentDeliveryConfigurations;
  }
  public putSegmentDeliveryConfigurations(value: SourceLocationSegmentDeliveryConfigurations[] | cdktf.IResolvable) {
    this._segmentDeliveryConfigurations.internalValue = value;
  }
  public resetSegmentDeliveryConfigurations() {
    this._segmentDeliveryConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentDeliveryConfigurationsInput() {
    return this._segmentDeliveryConfigurations.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_configuration: sourceLocationAccessConfigurationToTerraform(this._accessConfiguration.internalValue),
      default_segment_delivery_configuration: sourceLocationDefaultSegmentDeliveryConfigurationToTerraform(this._defaultSegmentDeliveryConfiguration.internalValue),
      http_configuration: sourceLocationHttpConfigurationToTerraform(this._httpConfiguration.internalValue),
      name: cdktf.stringToTerraform(this._name),
      segment_delivery_configurations: cdktf.listMapper(sourceLocationSegmentDeliveryConfigurationsToTerraform, false)(this._segmentDeliveryConfigurations.internalValue),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_configuration: {
        value: sourceLocationAccessConfigurationToHclTerraform(this._accessConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SourceLocationAccessConfiguration",
      },
      default_segment_delivery_configuration: {
        value: sourceLocationDefaultSegmentDeliveryConfigurationToHclTerraform(this._defaultSegmentDeliveryConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SourceLocationDefaultSegmentDeliveryConfiguration",
      },
      http_configuration: {
        value: sourceLocationHttpConfigurationToHclTerraform(this._httpConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SourceLocationHttpConfiguration",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment_delivery_configurations: {
        value: cdktf.listMapperHcl(sourceLocationSegmentDeliveryConfigurationsToHclTerraform, false)(this._segmentDeliveryConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SourceLocationSegmentDeliveryConfigurationsList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
