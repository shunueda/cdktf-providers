// https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/metric_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetricDataSourceAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/metric_data_source#id MetricDataSourceA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/metric_data_source#name MetricDataSourceA#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/metric_data_source#type MetricDataSourceA#type}
  */
  readonly type: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/metric_data_source#metadata MetricDataSourceA#metadata}
  */
  readonly metadata: MetricDataSourceMetadata;
  /**
  * team block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/metric_data_source#team MetricDataSourceA#team}
  */
  readonly team?: MetricDataSourceTeam[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/metric_data_source#timeouts MetricDataSourceA#timeouts}
  */
  readonly timeouts?: MetricDataSourceTimeouts;
}
export interface MetricDataSourceMetadata {
  /**
  * Used for Datadog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/metric_data_source#api_key MetricDataSourceA#api_key}
  */
  readonly apiKey?: string;
  /**
  * Used for Datadog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/metric_data_source#application_key MetricDataSourceA#application_key}
  */
  readonly applicationKey?: string;
  /**
  * Used for Prometheus
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/metric_data_source#auth_type MetricDataSourceA#auth_type}
  */
  readonly authType?: string;
  /**
  * Used for Prometheus
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/metric_data_source#basic_pass MetricDataSourceA#basic_pass}
  */
  readonly basicPass?: string;
  /**
  * Used for Prometheus
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/metric_data_source#basic_user MetricDataSourceA#basic_user}
  */
  readonly basicUser?: string;
  /**
  * Used for Prometheus
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/metric_data_source#header_key MetricDataSourceA#header_key}
  */
  readonly headerKey?: string;
  /**
  * Used for Prometheus
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/metric_data_source#header_value MetricDataSourceA#header_value}
  */
  readonly headerValue?: string;
  /**
  * Used for Datadog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/metric_data_source#region MetricDataSourceA#region}
  */
  readonly region?: string;
  /**
  * Used for Prometheus
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/metric_data_source#url MetricDataSourceA#url}
  */
  readonly url?: string;
}

export function metricDataSourceMetadataToTerraform(struct?: MetricDataSourceMetadataOutputReference | MetricDataSourceMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    application_key: cdktf.stringToTerraform(struct!.applicationKey),
    auth_type: cdktf.stringToTerraform(struct!.authType),
    basic_pass: cdktf.stringToTerraform(struct!.basicPass),
    basic_user: cdktf.stringToTerraform(struct!.basicUser),
    header_key: cdktf.stringToTerraform(struct!.headerKey),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    region: cdktf.stringToTerraform(struct!.region),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function metricDataSourceMetadataToHclTerraform(struct?: MetricDataSourceMetadataOutputReference | MetricDataSourceMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_key: {
      value: cdktf.stringToHclTerraform(struct!.applicationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic_pass: {
      value: cdktf.stringToHclTerraform(struct!.basicPass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    basic_user: {
      value: cdktf.stringToHclTerraform(struct!.basicUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_key: {
      value: cdktf.stringToHclTerraform(struct!.headerKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
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

export class MetricDataSourceMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MetricDataSourceMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._applicationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationKey = this._applicationKey;
    }
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._basicPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicPass = this._basicPass;
    }
    if (this._basicUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicUser = this._basicUser;
    }
    if (this._headerKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKey = this._headerKey;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDataSourceMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._applicationKey = undefined;
      this._authType = undefined;
      this._basicPass = undefined;
      this._basicUser = undefined;
      this._headerKey = undefined;
      this._headerValue = undefined;
      this._region = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
      this._applicationKey = value.applicationKey;
      this._authType = value.authType;
      this._basicPass = value.basicPass;
      this._basicUser = value.basicUser;
      this._headerKey = value.headerKey;
      this._headerValue = value.headerValue;
      this._region = value.region;
      this._url = value.url;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // application_key - computed: false, optional: true, required: false
  private _applicationKey?: string; 
  public get applicationKey() {
    return this.getStringAttribute('application_key');
  }
  public set applicationKey(value: string) {
    this._applicationKey = value;
  }
  public resetApplicationKey() {
    this._applicationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationKeyInput() {
    return this._applicationKey;
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // basic_pass - computed: false, optional: true, required: false
  private _basicPass?: string; 
  public get basicPass() {
    return this.getStringAttribute('basic_pass');
  }
  public set basicPass(value: string) {
    this._basicPass = value;
  }
  public resetBasicPass() {
    this._basicPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicPassInput() {
    return this._basicPass;
  }

  // basic_user - computed: false, optional: true, required: false
  private _basicUser?: string; 
  public get basicUser() {
    return this.getStringAttribute('basic_user');
  }
  public set basicUser(value: string) {
    this._basicUser = value;
  }
  public resetBasicUser() {
    this._basicUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicUserInput() {
    return this._basicUser;
  }

  // header_key - computed: false, optional: true, required: false
  private _headerKey?: string; 
  public get headerKey() {
    return this.getStringAttribute('header_key');
  }
  public set headerKey(value: string) {
    this._headerKey = value;
  }
  public resetHeaderKey() {
    this._headerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyInput() {
    return this._headerKey;
  }

  // header_value - computed: false, optional: true, required: false
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  public resetHeaderValue() {
    this._headerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }

  // region - computed: false, optional: true, required: false
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

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface MetricDataSourceTeam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/metric_data_source#id MetricDataSourceA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/metric_data_source#name MetricDataSourceA#name}
  */
  readonly name?: string;
}

export function metricDataSourceTeamToTerraform(struct?: MetricDataSourceTeam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function metricDataSourceTeamToHclTerraform(struct?: MetricDataSourceTeam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class MetricDataSourceTeamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MetricDataSourceTeam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDataSourceTeam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

export class MetricDataSourceTeamList extends cdktf.ComplexList {
  public internalValue? : MetricDataSourceTeam[] | cdktf.IResolvable

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
  public get(index: number): MetricDataSourceTeamOutputReference {
    return new MetricDataSourceTeamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MetricDataSourceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/metric_data_source#create MetricDataSourceA#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/metric_data_source#delete MetricDataSourceA#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/metric_data_source#read MetricDataSourceA#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/metric_data_source#update MetricDataSourceA#update}
  */
  readonly update?: string;
}

export function metricDataSourceTimeoutsToTerraform(struct?: MetricDataSourceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function metricDataSourceTimeoutsToHclTerraform(struct?: MetricDataSourceTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class MetricDataSourceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MetricDataSourceTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MetricDataSourceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/metric_data_source ilert_metric_data_source}
*/
export class MetricDataSourceA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ilert_metric_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetricDataSourceA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetricDataSourceA to import
  * @param importFromId The id of the existing MetricDataSourceA that should be imported. Refer to the {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/metric_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetricDataSourceA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ilert_metric_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/metric_data_source ilert_metric_data_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetricDataSourceAConfig
  */
  public constructor(scope: Construct, id: string, config: MetricDataSourceAConfig) {
    super(scope, id, {
      terraformResourceType: 'ilert_metric_data_source',
      terraformGeneratorMetadata: {
        providerName: 'ilert',
        providerVersion: '2.14.3'
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
    this._name = config.name;
    this._type = config.type;
    this._metadata.internalValue = config.metadata;
    this._team.internalValue = config.team;
    this._timeouts.internalValue = config.timeouts;
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

  // metadata - computed: false, optional: false, required: true
  private _metadata = new MetricDataSourceMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: MetricDataSourceMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // team - computed: false, optional: true, required: false
  private _team = new MetricDataSourceTeamList(this, "team", false);
  public get team() {
    return this._team;
  }
  public putTeam(value: MetricDataSourceTeam[] | cdktf.IResolvable) {
    this._team.internalValue = value;
  }
  public resetTeam() {
    this._team.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MetricDataSourceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MetricDataSourceTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      metadata: metricDataSourceMetadataToTerraform(this._metadata.internalValue),
      team: cdktf.listMapper(metricDataSourceTeamToTerraform, true)(this._team.internalValue),
      timeouts: metricDataSourceTimeoutsToTerraform(this._timeouts.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: metricDataSourceMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MetricDataSourceMetadataList",
      },
      team: {
        value: cdktf.listMapperHcl(metricDataSourceTeamToHclTerraform, true)(this._team.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MetricDataSourceTeamList",
      },
      timeouts: {
        value: metricDataSourceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MetricDataSourceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
