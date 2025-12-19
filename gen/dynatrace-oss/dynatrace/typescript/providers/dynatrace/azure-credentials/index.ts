// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/azure_credentials
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureCredentialsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The monitoring is enabled (`true`) or disabled (`false`).  If not set on creation, the `true` value is used.  If the field is omitted during an update, the old value remains unaffected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/azure_credentials#active AzureCredentials#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * The Application ID (also referred to as Client ID)  The combination of Application ID and Directory ID must be unique
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/azure_credentials#app_id AzureCredentials#app_id}
  */
  readonly appId?: string;
  /**
  * The automatic capture of Azure tags is on (`true`) or off (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/azure_credentials#auto_tagging AzureCredentials#auto_tagging}
  */
  readonly autoTagging?: boolean | cdktf.IResolvable;
  /**
  * The Directory ID (also referred to as Tenant ID)  The combination of Application ID and Directory ID must be unique
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/azure_credentials#directory_id AzureCredentials#directory_id}
  */
  readonly directoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/azure_credentials#id AzureCredentials#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The secret key associated with the Application ID.  For security reasons, GET requests return this field as `null`. Submit your key on creation or update of the configuration. If the field is omitted during an update, the old value remains unaffected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/azure_credentials#key AzureCredentials#key}
  */
  readonly key?: string;
  /**
  * The unique name of the Azure credentials configuration.  Allowed characters are letters, numbers, and spaces. Also the special characters `.+-_` are allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/azure_credentials#label AzureCredentials#label}
  */
  readonly label: string;
  /**
  * Monitor only resources that have specified Azure tags (`true`) or all resources (`false`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/azure_credentials#monitor_only_tagged_entities AzureCredentials#monitor_only_tagged_entities}
  */
  readonly monitorOnlyTaggedEntities: boolean | cdktf.IResolvable;
  /**
  * Instructs the provider to remove the supporting services Dynatrace applies by default to newly created Azure Credentials. Supporting Services applied by via `dynatrace_azure_service` subsequently won't get touched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/azure_credentials#remove_defaults AzureCredentials#remove_defaults}
  */
  readonly removeDefaults?: boolean | cdktf.IResolvable;
  /**
  * If enabled (`true`) the attribute `supporting_services` will not get synchronized with Dynatrace. You will be able to manage them via WebUI without interference by Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/azure_credentials#supporting_services_managed_in_dynatrace AzureCredentials#supporting_services_managed_in_dynatrace}
  */
  readonly supportingServicesManagedInDynatrace?: boolean | cdktf.IResolvable;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/azure_credentials#unknowns AzureCredentials#unknowns}
  */
  readonly unknowns?: string;
  /**
  * monitor_only_excluding_tag_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/azure_credentials#monitor_only_excluding_tag_pairs AzureCredentials#monitor_only_excluding_tag_pairs}
  */
  readonly monitorOnlyExcludingTagPairs?: AzureCredentialsMonitorOnlyExcludingTagPairs[] | cdktf.IResolvable;
  /**
  * monitor_only_tag_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/azure_credentials#monitor_only_tag_pairs AzureCredentials#monitor_only_tag_pairs}
  */
  readonly monitorOnlyTagPairs?: AzureCredentialsMonitorOnlyTagPairs[] | cdktf.IResolvable;
  /**
  * supporting_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/azure_credentials#supporting_services AzureCredentials#supporting_services}
  */
  readonly supportingServices?: AzureCredentialsSupportingServices[] | cdktf.IResolvable;
}
export interface AzureCredentialsMonitorOnlyExcludingTagPairs {
  /**
  * The name of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/azure_credentials#name AzureCredentials#name}
  */
  readonly name?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/azure_credentials#unknowns AzureCredentials#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value of the tag.   If set to `null`, then resources with any value of the tag are monitored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/azure_credentials#value AzureCredentials#value}
  */
  readonly value?: string;
}

export function azureCredentialsMonitorOnlyExcludingTagPairsToTerraform(struct?: AzureCredentialsMonitorOnlyExcludingTagPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function azureCredentialsMonitorOnlyExcludingTagPairsToHclTerraform(struct?: AzureCredentialsMonitorOnlyExcludingTagPairs | cdktf.IResolvable): any {
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class AzureCredentialsMonitorOnlyExcludingTagPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureCredentialsMonitorOnlyExcludingTagPairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureCredentialsMonitorOnlyExcludingTagPairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._unknowns = undefined;
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
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
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

export class AzureCredentialsMonitorOnlyExcludingTagPairsList extends cdktf.ComplexList {
  public internalValue? : AzureCredentialsMonitorOnlyExcludingTagPairs[] | cdktf.IResolvable

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
  public get(index: number): AzureCredentialsMonitorOnlyExcludingTagPairsOutputReference {
    return new AzureCredentialsMonitorOnlyExcludingTagPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureCredentialsMonitorOnlyTagPairs {
  /**
  * The name of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/azure_credentials#name AzureCredentials#name}
  */
  readonly name?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/azure_credentials#unknowns AzureCredentials#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value of the tag.   If set to `null`, then resources with any value of the tag are monitored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/azure_credentials#value AzureCredentials#value}
  */
  readonly value?: string;
}

export function azureCredentialsMonitorOnlyTagPairsToTerraform(struct?: AzureCredentialsMonitorOnlyTagPairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function azureCredentialsMonitorOnlyTagPairsToHclTerraform(struct?: AzureCredentialsMonitorOnlyTagPairs | cdktf.IResolvable): any {
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
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

export class AzureCredentialsMonitorOnlyTagPairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureCredentialsMonitorOnlyTagPairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureCredentialsMonitorOnlyTagPairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._unknowns = undefined;
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
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
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

export class AzureCredentialsMonitorOnlyTagPairsList extends cdktf.ComplexList {
  public internalValue? : AzureCredentialsMonitorOnlyTagPairs[] | cdktf.IResolvable

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
  public get(index: number): AzureCredentialsMonitorOnlyTagPairsOutputReference {
    return new AzureCredentialsMonitorOnlyTagPairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureCredentialsSupportingServicesMonitoredMetrics {
  /**
  * a list of metric's dimensions names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/azure_credentials#dimensions AzureCredentials#dimensions}
  */
  readonly dimensions?: string[];
  /**
  * the name of the metric of the supporting service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/azure_credentials#name AzureCredentials#name}
  */
  readonly name?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/azure_credentials#unknowns AzureCredentials#unknowns}
  */
  readonly unknowns?: string;
}

export function azureCredentialsSupportingServicesMonitoredMetricsToTerraform(struct?: AzureCredentialsSupportingServicesMonitoredMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dimensions),
    name: cdktf.stringToTerraform(struct!.name),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function azureCredentialsSupportingServicesMonitoredMetricsToHclTerraform(struct?: AzureCredentialsSupportingServicesMonitoredMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimensions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dimensions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureCredentialsSupportingServicesMonitoredMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureCredentialsSupportingServicesMonitoredMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureCredentialsSupportingServicesMonitoredMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensions = undefined;
      this._name = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensions = value.dimensions;
      this._name = value.name;
      this._unknowns = value.unknowns;
    }
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions?: string[]; 
  public get dimensions() {
    return this.getListAttribute('dimensions');
  }
  public set dimensions(value: string[]) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class AzureCredentialsSupportingServicesMonitoredMetricsList extends cdktf.ComplexList {
  public internalValue? : AzureCredentialsSupportingServicesMonitoredMetrics[] | cdktf.IResolvable

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
  public get(index: number): AzureCredentialsSupportingServicesMonitoredMetricsOutputReference {
    return new AzureCredentialsSupportingServicesMonitoredMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureCredentialsSupportingServices {
  /**
  * The name of the supporting service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/azure_credentials#name AzureCredentials#name}
  */
  readonly name?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/azure_credentials#unknowns AzureCredentials#unknowns}
  */
  readonly unknowns?: string;
  /**
  * monitored_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/azure_credentials#monitored_metrics AzureCredentials#monitored_metrics}
  */
  readonly monitoredMetrics?: AzureCredentialsSupportingServicesMonitoredMetrics[] | cdktf.IResolvable;
}

export function azureCredentialsSupportingServicesToTerraform(struct?: AzureCredentialsSupportingServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    monitored_metrics: cdktf.listMapper(azureCredentialsSupportingServicesMonitoredMetricsToTerraform, true)(struct!.monitoredMetrics),
  }
}


export function azureCredentialsSupportingServicesToHclTerraform(struct?: AzureCredentialsSupportingServices | cdktf.IResolvable): any {
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
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitored_metrics: {
      value: cdktf.listMapperHcl(azureCredentialsSupportingServicesMonitoredMetricsToHclTerraform, true)(struct!.monitoredMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "AzureCredentialsSupportingServicesMonitoredMetricsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureCredentialsSupportingServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureCredentialsSupportingServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._monitoredMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoredMetrics = this._monitoredMetrics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureCredentialsSupportingServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._unknowns = undefined;
      this._monitoredMetrics.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._unknowns = value.unknowns;
      this._monitoredMetrics.internalValue = value.monitoredMetrics;
    }
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // monitored_metrics - computed: false, optional: true, required: false
  private _monitoredMetrics = new AzureCredentialsSupportingServicesMonitoredMetricsList(this, "monitored_metrics", false);
  public get monitoredMetrics() {
    return this._monitoredMetrics;
  }
  public putMonitoredMetrics(value: AzureCredentialsSupportingServicesMonitoredMetrics[] | cdktf.IResolvable) {
    this._monitoredMetrics.internalValue = value;
  }
  public resetMonitoredMetrics() {
    this._monitoredMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredMetricsInput() {
    return this._monitoredMetrics.internalValue;
  }
}

export class AzureCredentialsSupportingServicesList extends cdktf.ComplexList {
  public internalValue? : AzureCredentialsSupportingServices[] | cdktf.IResolvable

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
  public get(index: number): AzureCredentialsSupportingServicesOutputReference {
    return new AzureCredentialsSupportingServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/azure_credentials dynatrace_azure_credentials}
*/
export class AzureCredentials extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_azure_credentials";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureCredentials resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureCredentials to import
  * @param importFromId The id of the existing AzureCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/azure_credentials#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureCredentials to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_azure_credentials", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/azure_credentials dynatrace_azure_credentials} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureCredentialsConfig
  */
  public constructor(scope: Construct, id: string, config: AzureCredentialsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_azure_credentials',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._appId = config.appId;
    this._autoTagging = config.autoTagging;
    this._directoryId = config.directoryId;
    this._id = config.id;
    this._key = config.key;
    this._label = config.label;
    this._monitorOnlyTaggedEntities = config.monitorOnlyTaggedEntities;
    this._removeDefaults = config.removeDefaults;
    this._supportingServicesManagedInDynatrace = config.supportingServicesManagedInDynatrace;
    this._unknowns = config.unknowns;
    this._monitorOnlyExcludingTagPairs.internalValue = config.monitorOnlyExcludingTagPairs;
    this._monitorOnlyTagPairs.internalValue = config.monitorOnlyTagPairs;
    this._supportingServices.internalValue = config.supportingServices;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // app_id - computed: false, optional: true, required: false
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // auto_tagging - computed: false, optional: true, required: false
  private _autoTagging?: boolean | cdktf.IResolvable; 
  public get autoTagging() {
    return this.getBooleanAttribute('auto_tagging');
  }
  public set autoTagging(value: boolean | cdktf.IResolvable) {
    this._autoTagging = value;
  }
  public resetAutoTagging() {
    this._autoTagging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTaggingInput() {
    return this._autoTagging;
  }

  // directory_id - computed: false, optional: true, required: false
  private _directoryId?: string; 
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }
  public resetDirectoryId() {
    this._directoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryIdInput() {
    return this._directoryId;
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

  // key - computed: false, optional: true, required: false
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

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // monitor_only_tagged_entities - computed: false, optional: false, required: true
  private _monitorOnlyTaggedEntities?: boolean | cdktf.IResolvable; 
  public get monitorOnlyTaggedEntities() {
    return this.getBooleanAttribute('monitor_only_tagged_entities');
  }
  public set monitorOnlyTaggedEntities(value: boolean | cdktf.IResolvable) {
    this._monitorOnlyTaggedEntities = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorOnlyTaggedEntitiesInput() {
    return this._monitorOnlyTaggedEntities;
  }

  // remove_defaults - computed: false, optional: true, required: false
  private _removeDefaults?: boolean | cdktf.IResolvable; 
  public get removeDefaults() {
    return this.getBooleanAttribute('remove_defaults');
  }
  public set removeDefaults(value: boolean | cdktf.IResolvable) {
    this._removeDefaults = value;
  }
  public resetRemoveDefaults() {
    this._removeDefaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeDefaultsInput() {
    return this._removeDefaults;
  }

  // supporting_services_managed_in_dynatrace - computed: false, optional: true, required: false
  private _supportingServicesManagedInDynatrace?: boolean | cdktf.IResolvable; 
  public get supportingServicesManagedInDynatrace() {
    return this.getBooleanAttribute('supporting_services_managed_in_dynatrace');
  }
  public set supportingServicesManagedInDynatrace(value: boolean | cdktf.IResolvable) {
    this._supportingServicesManagedInDynatrace = value;
  }
  public resetSupportingServicesManagedInDynatrace() {
    this._supportingServicesManagedInDynatrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportingServicesManagedInDynatraceInput() {
    return this._supportingServicesManagedInDynatrace;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // monitor_only_excluding_tag_pairs - computed: false, optional: true, required: false
  private _monitorOnlyExcludingTagPairs = new AzureCredentialsMonitorOnlyExcludingTagPairsList(this, "monitor_only_excluding_tag_pairs", false);
  public get monitorOnlyExcludingTagPairs() {
    return this._monitorOnlyExcludingTagPairs;
  }
  public putMonitorOnlyExcludingTagPairs(value: AzureCredentialsMonitorOnlyExcludingTagPairs[] | cdktf.IResolvable) {
    this._monitorOnlyExcludingTagPairs.internalValue = value;
  }
  public resetMonitorOnlyExcludingTagPairs() {
    this._monitorOnlyExcludingTagPairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorOnlyExcludingTagPairsInput() {
    return this._monitorOnlyExcludingTagPairs.internalValue;
  }

  // monitor_only_tag_pairs - computed: false, optional: true, required: false
  private _monitorOnlyTagPairs = new AzureCredentialsMonitorOnlyTagPairsList(this, "monitor_only_tag_pairs", false);
  public get monitorOnlyTagPairs() {
    return this._monitorOnlyTagPairs;
  }
  public putMonitorOnlyTagPairs(value: AzureCredentialsMonitorOnlyTagPairs[] | cdktf.IResolvable) {
    this._monitorOnlyTagPairs.internalValue = value;
  }
  public resetMonitorOnlyTagPairs() {
    this._monitorOnlyTagPairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorOnlyTagPairsInput() {
    return this._monitorOnlyTagPairs.internalValue;
  }

  // supporting_services - computed: false, optional: true, required: false
  private _supportingServices = new AzureCredentialsSupportingServicesList(this, "supporting_services", false);
  public get supportingServices() {
    return this._supportingServices;
  }
  public putSupportingServices(value: AzureCredentialsSupportingServices[] | cdktf.IResolvable) {
    this._supportingServices.internalValue = value;
  }
  public resetSupportingServices() {
    this._supportingServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportingServicesInput() {
    return this._supportingServices.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      app_id: cdktf.stringToTerraform(this._appId),
      auto_tagging: cdktf.booleanToTerraform(this._autoTagging),
      directory_id: cdktf.stringToTerraform(this._directoryId),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      label: cdktf.stringToTerraform(this._label),
      monitor_only_tagged_entities: cdktf.booleanToTerraform(this._monitorOnlyTaggedEntities),
      remove_defaults: cdktf.booleanToTerraform(this._removeDefaults),
      supporting_services_managed_in_dynatrace: cdktf.booleanToTerraform(this._supportingServicesManagedInDynatrace),
      unknowns: cdktf.stringToTerraform(this._unknowns),
      monitor_only_excluding_tag_pairs: cdktf.listMapper(azureCredentialsMonitorOnlyExcludingTagPairsToTerraform, true)(this._monitorOnlyExcludingTagPairs.internalValue),
      monitor_only_tag_pairs: cdktf.listMapper(azureCredentialsMonitorOnlyTagPairsToTerraform, true)(this._monitorOnlyTagPairs.internalValue),
      supporting_services: cdktf.listMapper(azureCredentialsSupportingServicesToTerraform, true)(this._supportingServices.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_tagging: {
        value: cdktf.booleanToHclTerraform(this._autoTagging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      directory_id: {
        value: cdktf.stringToHclTerraform(this._directoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
      monitor_only_tagged_entities: {
        value: cdktf.booleanToHclTerraform(this._monitorOnlyTaggedEntities),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remove_defaults: {
        value: cdktf.booleanToHclTerraform(this._removeDefaults),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      supporting_services_managed_in_dynatrace: {
        value: cdktf.booleanToHclTerraform(this._supportingServicesManagedInDynatrace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unknowns: {
        value: cdktf.stringToHclTerraform(this._unknowns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_only_excluding_tag_pairs: {
        value: cdktf.listMapperHcl(azureCredentialsMonitorOnlyExcludingTagPairsToHclTerraform, true)(this._monitorOnlyExcludingTagPairs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureCredentialsMonitorOnlyExcludingTagPairsList",
      },
      monitor_only_tag_pairs: {
        value: cdktf.listMapperHcl(azureCredentialsMonitorOnlyTagPairsToHclTerraform, true)(this._monitorOnlyTagPairs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureCredentialsMonitorOnlyTagPairsList",
      },
      supporting_services: {
        value: cdktf.listMapperHcl(azureCredentialsSupportingServicesToHclTerraform, true)(this._supportingServices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureCredentialsSupportingServicesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
